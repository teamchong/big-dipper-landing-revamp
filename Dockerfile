# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_OPTIONS "--max-old-space-size=8192"
ENV NEXT_PUBLIC_NETWORK_LIST_API https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json
ENV NEXT_PUBLIC_GRAPHQL_URL '{"Agoric":"https://gql.agoric.forbole.com/v1/graphql","AssetMantle":"https://gql.assetmantle.forbole.com/v1/graphql","Band Protocol":"https://gql.band.forbole.com/v1/graphql","Bitsong":"https://gql.bitsong.forbole.com/v1/graphql","Cheqd":"https://explorer-gql.cheqd.io/v1/graphql","Comdex":"https://gql.comdex.forbole.com/v1/graphql","Cosmos Hub":"https://gql.cosmos.forbole.com/v1/graphql","Crescent":"https://gql.crescent.forbole.com/v1/graphql","Desmos":"https://gql.desmos.forbole.com/v1/graphql","e-Money":"https://gql.emoney.forbole.com/v1/graphql","Evmos":"https://gql.evmos.forbole.com/v1/graphql","Flow":"https://gql.flow.forbole.com/v1/graphql","LikeCoin":"https://gql.likecoin.forbole.com/v1/graphql","Osmosis":"https://gql.osmosis.forbole.com/v1/graphql","Provenance":"https://gql.provenance.forbole.com/v1/graphql","Regen Network":"https://gql.regen.forbole.com/v1/graphql","Rizon":"https://gql.rizon.forbole.com/v1/graphql","Sifchain":"https://gql.sifchain.forbole.com/v1/graphql","Solana":"https://gql.solana.forbole.com/v1/graphql"}'

# Add PM2

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Add PM2
RUN npm install pm2 -g

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["pm2-runtime", "server.js"]
