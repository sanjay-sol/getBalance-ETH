require('dotenv').config();
const {ethers} = require('ethers');

const provider = new ethers.providers.JsonRpcBatchProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`);
const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

const main = async () =>{
const balance = await provider.getBalance(address);
console.log(`Balance of  ${address} is : ${ethers.utils.formatEther(balance)}`);
}
main()