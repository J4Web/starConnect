import React, { useState } from 'react'
import NFTPurchaseManager from '/home/jg/Desktop/Dappathon-StarConnect/dapp/artifacts/contracts/NFTPurchaseManager.sol/NFTPurchaseManager.json'
const NFTPurchaseManagerAddress = "0x215a9F2f6126f04725ABd3b78b1e94b22d003006"
import { ethers } from 'ethers';

function GetCreatorDetails() {
    const [id,setId]=useState('');
    const [data,setData]=useState('');

        async function getDataOfCreator() {
            if (!id ) {
                alert('Required fields missing')
                return;
            }
            if (typeof window.ethereum !== 'undefined') {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            console.log("Help me in this provider",provider);
            // const signer = await provider.getSigner()
            // console.log("signer ",signer);
            const contract = new ethers.Contract(NFTPurchaseManagerAddress, NFTPurchaseManager.abi, provider);
            console.log("here is the contract ",contract)
            const transaction = await contract.getContentCreatorInfo(id);
            const d=transaction;
            console.log("DATA",data)
            setData(d);
                console.log("creator data  || ",data );
            }
          }
    
        async function onSubmit(evt){
            evt.preventDefault();
            await getDataOfCreator();
        }
  return (
    <div>
        <form action="">

            <label for="id">Enter the id of the creator</label><br></br>
      
    
            <input value={id} type="number" onChange={(e)=> setId(e.target.value)}/>
            <button onClick={onSubmit}>Submit</button>
        </form>
        
    </div>
  )
}

export default GetCreatorDetails