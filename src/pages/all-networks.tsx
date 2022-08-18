import { ComponentProps } from 'react';
import { NextPage } from 'next';
import loadNetworkList from '@utils/load-network-list';
import AllNetworksPage from '../screens/all-networks';

/**
 * It returns an object with a `props` property that contains the `networkList` property
 * @returns An object with a props property that contains the networkList.
 */
export async function getStaticProps() {
  return {
    props: {
      networkList: await loadNetworkList(),
    },
  };
}

const AllNetworks: NextPage<ComponentProps<typeof AllNetworksPage>> = ({ networkList }) => (
  <AllNetworksPage networkList={networkList} />
);

export default AllNetworks;
