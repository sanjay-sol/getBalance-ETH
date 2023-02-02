require('dotenv').config();
const {ethers} = require('ethers');



// import Web3 from 'web3';


// let web3;

// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
//   try {
//     await window.ethereum.enable();
//   } catch (error) {
//     console.log(error);
//     web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`));
//   }
// } else {
//   web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b1a0254328ed4ce2bfe43e2ac9064473'));
// }
const provider = new ethers.providers.JsonRpcBatchProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`);
const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';



const main = async () =>{



    
const balance = await provider.getBalance(address);
console.log(`Balance of  ${address} is : ${ethers.utils.formatEther(balance)}`);
}
main()