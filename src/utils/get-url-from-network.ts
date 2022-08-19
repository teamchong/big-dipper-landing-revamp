export default function getUrlFromNetwork(network: Network) {
  const mainnet = network?.links?.find((l) => /^mainnet$/i.test(l.name));
  if (mainnet?.url) {
    return mainnet.url;
  }
  const testnet = network?.links?.find((l) => /^testnet$/i.test(l.name));
  if (testnet?.url) {
    return testnet.url;
  }
  return network?.links?.[0]?.url ?? undefined;
}
