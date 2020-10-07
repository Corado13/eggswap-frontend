export const contractAddresses = {
  sushi: {
    42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc', // aelf sushi new one 9.9
    1337: '0xd231d8C05F24A6D267aA198Ae366D6DF8E81B741', // sushi
    1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2', // aelf sashimi
    2: '0x5AB20632Bad41463680975D3AaC3320F820F1fA1', // sushi use
  },
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    1337: '0x606618688aBdc996Bd1807b564e9bfd7Bb2a60a0', // sushi
    // TODO: change address
    1: '0x79F006926F7a8CDf4055469C34c9609C6488DB15', // aelf sashimi
    2: '0x139C12444c63F9B62214D7c1bB8780AB618E6FB3', // sushi use
  },
  investment: {
    42: '0x46641A3aA421beA0207Ead6d807c847a2f599943',
    1337: '0x46641A3aA421beA0207Ead6d807c847a2f599943',
    1: '0x46641A3aA421beA0207Ead6d807c847a2f599943' // TODO: use mainnet address
  },
  masterChef: {
    42: '0x042036D6F0b5C246aA07Dd9688b46cf86Bd179C3', // aelf sushi new one 9.9
    1337: '0x8A22C3B6346703D0081d84d9D4BB883Cf2653a05', // sushi
    1: '0x1daed74ed1dd7c9dabbe51361ac90a69d851234d', // aelf master
    2: '0x60af21B16cebA8dd5216d407bCE401740140A94C', // sushi use
  },
  weth: {
    42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // aelf sushi
    1337: '0x304e28d6b590bA484219a7Cf3db45C9BB75c3FBd', // weth in kovan
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // sushi use
    2: '0x331631B4bb93b9B8962faE15860BD538a389395A',
  },
}

export const supportedInvestmentPools = [
  /*
  {
    // CANDY - SASHIMI? pair
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    },
    depositAddresses: {
      42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'GOLFF', // Which token will I get, when I do the harvest？
    icon: '👜',
    sashimiIndex: 1,
  },
  {
    // XYZ - SASHIMI pair
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    },
    depositAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5', // WETH in kovan, ERC20
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161' // Huobi
    },
    depositTokenSymbol: 'Huobi Token',
    tokenSymbol: 'Golff', // Which token will I get, when I do the harvest？
    icon: '👝',
    sashimiIndex: 1,
  }
  */
];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [];

export const hiddenPools = [];

export const doublePools = [];
export const unStakeOnlyDoublePools = [];

const xLPSupportedPools = [
  // xLP supported start
  /*
  {

    pid: 26,
    lpAddresses: {
      42: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1337: '0x304e28d6b590bA484219a7Cf3db45C9BB75c3FBd',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
      1: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
    },
    name: 'Double happiness!',
    symbol: '\xa0DAI-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🍗',
  },
  */
];

export const supportedPools = [
  // xLP supported end

  {
    pid: 0,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xA56cD5eCa1066be998d2f09DB7A1903E0E47d05d'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x5AB20632Bad41463680975D3AaC3320F820F1fA1'
    },
    name: 'EGGs',
    symbol: 'EGG-WEXP UNI-V2 LP',
    tokenSymbol: 'EGG',
    icon: '🥚 ',
  },
  {
    pid: 1,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x9f17C654Ca15d2bE76CfDF6cb806A4b8e4678EeD'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x3b4cfcc4532eec161860cb6544f49947544d940d'
    },
    name: 'Tokenlab',
    symbol: 'LAB-WEXP UNI-V2 LP',
    tokenSymbol: 'LAB',
    icon: '🥚 ',
  },
  {
    pid: 2,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0xc150686B8b24f0e08f1d94773d0355427C25ef0e'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x9D2761A714b5b2EfA325a8a3eee21BE32AACeB4A'
    },
    name: 'LOVE',
    symbol: 'LOVE-WEXP UNI-V2 LP',
    tokenSymbol: 'LOVE',
    icon: '❤️️ ',
  },
  {
    pid: 3,
    lpAddresses: {
      1337: '0x4810f81d633a08b6e1b4b28ab652116fff53e744',
      2: '0x505B2Fe24Aff173291fEAd573E90dFb21c754bFd'
    },
    tokenAddresses: {
      1337: '0xd231d8c05f24a6d267aa198ae366d6df8e81b741',
      2: '0x72332c512bf2dA5A7Cd11752b380F7d8fcBba847'
    },
    name: 'T64',
    symbol: 'T64-WEXP UNI-V2 LP',
    tokenSymbol: 'T64',
    icon: '❤️️ ',
  },
  /*
  {
    pid: 1,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  */
];
