const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'margin evil bid clarify divorce shrimp over caution iron turn service accident',
    'https://kovan.infura.io/v3/9a72ff6cb5cb4438a8181767d6ec3d71'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();