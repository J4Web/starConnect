import React, { useState } from 'react'
// import './requestForm.css';
import NFTPurchaseManager from '../artifacts/contracts/NFTPurchaseManager.sol/NFTPurchaseManager.json'
const NFTPurchaseManagerAddress = "0x215a9F2f6126f04725ABd3b78b1e94b22d003006";
console.log("NFTPurchaseManagerAddress || ",NFTPurchaseManagerAddress)
import { ethers } from 'ethers'
function MakeRequest() {
    const [creatorID,setCreatorID]=useState("");
    const [desc,setDesc]=useState("");

    async function purchaseNFT(){
        if (!creatorID || !desc) {
            alert('Required fields missing')
            return;
        }
        if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log("Help me in this provider",provider);
        const signer = await provider.getSigner()
        console.log("signer ",signer);
        const contract = new ethers.Contract(NFTPurchaseManagerAddress, NFTPurchaseManager.abi, signer);
        console.log("here is the contract ",contract)
        const transaction = await contract.purchaseNFT(creatorID,desc);
       
        await transaction.wait();
        const getFanReq=await contract.getFanLatestReq();
        console.log("getFanReq || ",getFanReq)
        const data=transaction;
        const fanReqId=getFanReq.toString();


        console.log("DATA",data)
        alert(`Congrats, Your NFT request is sent!! \n Your RequestID is ${fanReqId.substring(0, fanReqId.length)} please remember it!`)
        }
    }

    async function handleSubmit(evt)
    {
            evt.preventDefault();
    
            await purchaseNFT();
    }
    
  return (
    <div className="profile-container">
    <div className="profile-container-1">
    <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU" alt=""/>
    </div>
    <div className="profile-container-2">
        <form action="">
            <label for="name">Creator ID</label><br></br>
            <input className='profile-input' type="text" name="fname" id="fname" value={creatorID} onChange={(e)=> setCreatorID(e.target.value)} placeholder="Enter the Creator's ID" /><br></br>
          <br></br>
            <label for="name">Description</label><br></br>
           <textarea width="20" height="30" type="text" placeholder='Write your Message here...' value={desc} onChange={(e)=> setDesc(e.target.value)}></textarea>
            <button className='profile-btn' type="submit" onClick={handleSubmit}>Request</button>
        </form>
    </div>
</div>
  )
}

export default MakeRequest
