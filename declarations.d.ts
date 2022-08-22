declare module '*.svg';
declare module '*.woff2';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type ComponentDefault = {
  className?: string;
}

type NetworkLink = {
  name: string;
  chain_id: string;
  url: string;
}

type Network = {
  name: string;
  logo: string;
  cover: string;
  links: Array<NetworkLink>;
}
