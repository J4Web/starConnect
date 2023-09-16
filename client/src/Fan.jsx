import { useState } from 'react';
import { ethers } from 'ethers'
import NFTPurchaseManager from '../artifacts/contracts/NFTPurchaseManager.sol/NFTPurchaseManager.json'
import FanDashboard from './Components/FanDashboard';

// Update with the contract address logged out to the CLI when it was deployed 
const NFTPurchaseManagerAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function Fan() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState()

  // request access to the user's MetaMask account


  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      console.log(window.ethereum)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const contract = new ethers.Contract(NFTPurchaseManagerAddress, NFTPurchaseManager.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log("Help me in this provider",provider);
      const signer = await provider.getSigner()
      console.log("signer ",signer);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      console.log("here is the contract ",contract)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      getData()
    }
  }
  async function getData(){
    if (typeof window.ethereum !== 'undefined') {
      console.log(window.ethereum)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.retrieve();
        console.log('data: ', data)
      } catch (err) {
        console.log(" BHAI Error: ", err)
      }
    }    

  }

  return (
    <FanDashboard/>
  );
}

export default Fan;

