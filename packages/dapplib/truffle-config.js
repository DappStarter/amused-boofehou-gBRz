require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift raise sad under grace drop tail gather'; 
let testAccounts = [
"0x6ca61eb02f35f321d653630deab5203e807b1a154b05a0870f9cf362f3121aa3",
"0xfd0923a8e789828a0d6fecb4b9e5af39d33d269aff9334c67c58426ef3978471",
"0x95a9f5ff200ad51e873adf932ac23b573403c95bfbf0c2830dfd110baef9bcd5",
"0x5584e492cfcbb41ebd1eb05e2853a8277096981c83405172799f1fc45cd6eb8a",
"0xaccee483d3d32d62ea185a6e3dc9ffb2b9fc9ec73267568b85e2ed0c855f8307",
"0x059980f5baed38772075b67f6b8f320d8a861095b3dfa351e186c079a753fec6",
"0xe486f4dcf1487e0dc98d8445d55d3f3a34065c90c25d73a31f3825d22864ada7",
"0x537616bf8c494ea19878b9cd07ba77fcb1b65ff80e2128d036dac122ec111d2b",
"0xf8d6b13088231fa68edf95429d064b385d044d5a9acd2509aabfe2b3a790b8fe",
"0x6bf9ea8276a4614ea2919a99c47ce07da5c47d1e4db7b72ead6396458859e91d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


