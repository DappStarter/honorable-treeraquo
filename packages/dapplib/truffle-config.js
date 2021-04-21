require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half kiwi orange tooth bike curtain net purse include clinic frame secret'; 
let testAccounts = [
"0x45bd0c7a23e7aa4c4cb6ae2ce75ea454ae87832b4e8bb242f390e9b05ffced95",
"0x7483af20cff53845f1586eac60016f2b735913c8ae9235b1bb5d7938d0f5c1a7",
"0xffe3f108aa7a86d7e8bd534cad0140ffe9d7806f193f40a216a3eb60c4953b91",
"0x068a56e3a5b6de16d447b82fb5b13f971f83d4b7206abc633522d1274410c16f",
"0xa25705bb7638e4556bef76f48eb87c33b889fcd07505e5f74bd995c4e6ea94e8",
"0x3b34efb8e996f25f6c0379d19d3924217e719971960f59ec29e459b831c8fd99",
"0x8369ff96e179c3cf92425ad3241e6aa89e8fc6fbbf15c8b151304c425657b388",
"0xc2a741853d7f59c69661c49d8f715525cd815eeae9a98f6d0905ae7e89b7eead",
"0x96a3892c768d0b1139a142c0901df752544fac8d5fb9f5b3851dac7f4c6741fa",
"0x9815fbe6e668ff09a99d74bb89053d7eb8e63e3b379c73324cf1c31c67cf9c8a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


