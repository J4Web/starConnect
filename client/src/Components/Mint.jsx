import React, { useState } from 'react'
import './mint.css'
import { ethers } from 'ethers'
import NFTPurchaseManager from '/home/jg/Desktop/Dappathon-StarConnect/dapp/artifacts/contracts/NFTPurchaseManager.sol/NFTPurchaseManager.json'
const NFTPurchaseManagerAddress = "0x215a9F2f6126f04725ABd3b78b1e94b22d003006"
function Mint() {
    const [requestID,setRequestID]=useState('');
    const [uri,setUri]=useState('');
    async function fulfillRequest() {
        if (!requestID || !uri) {
            alert('Required fields missing')
            return;
        }
        if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log("Help me in this provider",provider);
        const signer = await provider.getSigner()
        console.log("signer ",signer);
        console.log("THIS IS THE REQ ID AND URI YOU PASTED!! ", requestID," | ",uri);
        const contract = new ethers.Contract(NFTPurchaseManagerAddress, NFTPurchaseManager.abi, signer);
        console.log("here is the contract ",contract)
        const transaction = await contract.fulfillRequestAndMint(requestID,uri);
        await transaction.wait();
        const data=transaction;
        console.log("DATA",data)
        alert(`Congrats, You just sent the requested NFT!! \n Verify your txn at - https://sepolia.etherscan.io/tx/${data.hash} `);
        
        }
      }

    async function onSubmit(evt){
        evt.preventDefault();
        await fulfillRequest();

    }
  return (
  <div className="mint-container">
    <div className="mint-container-1">
    <img className="mint-img" src="https://www.cnet.com/a/img/resize/e0ebf3dc974fce8609d2ba49fa36cf0f93190062/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&fit=crop&height=1200&width=1200" alt=""/>
    </div>
    <div className="mint-container-2">
        <form action="">
            <label htmlFor="name">Request ID</label><br></br>
            <input className='mint-input' type="text" name="fname" id="fname" value={requestID} placeholder="Enter the Fan's Request ID" onChange={(e)=> setRequestID(e.target.value)}/><br></br>
            <br></br>
            <label htmlFor="name">Paste the Video Link</label><br></br>
            
            <input className='mint-input' type="text" name="lname" id="lname" value={uri} placeholder="Enter the URI" onChange={(e)=> setUri(e.target.value)}/><br></br>
<br></br>
        
            <button className='mint-btn' type="submit" onClick={onSubmit}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Mint