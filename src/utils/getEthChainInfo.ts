const CHAIN_ENV: string = process.env.REACT_APP_CHAIN_ENV || 'main';

interface CHAIN_INFO {
  chainId: number,
  rpcUrl: string,
  ethscanType: string,
  stakingPool: string
}

const CHAIN_ENV_MAP: any = {
  /*
  main: {
    chainId: 2,
    rpcUrl: 'https://node.expanse.tech/',
    ethscanType: ' ',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  },
  */
  main: {
    chainId: 2,
    rpcUrl: 'https://node.expanse.tech/',
    ethscanType: ' ',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  },
  kovan: {
    chainId: 42,
    rpcUrl: 'https://kovan.infura.io/',
    ethscanType: 'kovan.',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  },
  ganache: {
    chainId: 1337,
    rpcUrl: 'http://127.0.0.1:7545/',
    ethscanType: ' ',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  }
};

export function getEthChainInfo(): CHAIN_INFO {
  return CHAIN_ENV_MAP[CHAIN_ENV];
}
