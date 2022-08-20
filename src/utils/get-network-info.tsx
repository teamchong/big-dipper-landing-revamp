/* A GraphQL query. */
const queryIBC = `
query MyQuery {
  genesis {
    chain_id
  }
  block(order_by: {height: desc}, limit: 1) {
    height
  }
  token_price(order_by:{id: asc}, limit:1) {
    price
    unit_name
  }
}`;
/* A map of queries to run for each network. */
const queries: { [key: string]: string } = {
  Solana: `
query MyQuery {
  block(order_by: {height: desc}, limit: 1) {
    height
  }
  token_price(order_by: {id: asc}, where: {symbol: {_eq: "sol"}}) {
    price
    unit_name: symbol
  }
}`,
};
/**
 * `NetworkData` is an object with three properties: `genesis`, `block`, and `token_price`.
 * @property genesis - The chain_id of the network.
 * @property block - The current block height of the network.
 * @property token_price - The price of the token in USD.
 */
export type NetworkData = {
  genesis: Array<{ chain_id: string }>;
  block: Array<{ height: 6218898 }>;
  token_price: Array<{ price: number; unit_name: string }>;
};

/**
 * It takes a network name,
 * looks up the GraphQL URL for that network in the `NEXT_PUBLIC_GRAPHQL_URL`
 * environment variable, and then queries the GraphQL endpoint for the network's information
 * @param {string} networkName - The name of the network you want to get the info for.
 * @returns NetworkData
 */
export default async function getNetworkInfo(networkName: string) {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
    throw new Error('NEXT_PUBLIC_GRAPHQL_URL is not defined');
  }
  const config = JSON.parse(process.env.NEXT_PUBLIC_GRAPHQL_URL);
  const url = config?.[networkName];
  if (!url) {
    throw new Error(`Could not find network ${networkName} in NEXT_PUBLIC_GRAPHQL_URL`);
  }
  const query = queries[networkName] ?? queryIBC;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const { data } = await res.json();
  if (typeof data !== 'object') {
    throw new Error(`Could not parse data from ${url}`);
  }
  return data as NetworkData;
}
