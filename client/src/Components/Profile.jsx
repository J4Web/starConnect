import React,{useContext, useState} from 'react'
import { ethers } from 'ethers'
import './profile.css'
import StoreCreatorDetails from "../helper.js/StoreCreatorDetails";
import truncateString from "../helper.js/truncate.";
import NFTPurchaseManager from '../artifacts/contracts/NFTPurchaseManager.sol/NFTPurchaseManager.json'
import Mint from './Mint'

const NFTPurchaseManagerAddress = "0x215a9F2f6126f04725ABd3b78b1e94b22d003006";

//used to save the details
//addContentCreator

function Profile({type}) {
  console.log("WTF IS TYPE ", type)
    const {creator}=useContext(StoreCreatorDetails);
    console.log("creator | ",creator)
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [data,setData]=useState({});
    async function setCreator() {
        if (!name || !price) {
            alert('Required fields')
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
        const gweiVal=parseInt(price);
        const transaction = await contract.addContentCreator(name,gweiVal);
        await transaction.wait();
        const data=await contract.getCreator();
        console.log("DATA",data)
         const creatorid=parseInt(data.toString()[0])-1;
          console.log("its working , prev |  new" ,data.toString()[0] ,"|", creatorid);


          alert(`${creatorid} - This is your Creator ID,never forget this!! \n You can Share with family, friends and ofc your fans!!`)
          console.log('------------------------')
        }
      }

    async function handleOnSubmit(evt){
        evt.preventDefault();
        console.log("After submit name | price | ", name, " | ", price);
        window.localStorage.setItem('usrname',name);
        window.localStorage.setItem('price',price);
        await setCreator();
    }
  return (
    <div className="profile-container">
    <div className="profile-container-1">
    <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU" alt=""/>
    </div>
    <div className="profile-container-2">
        <form action="">
            <label for="name">Address</label><br></br>
            <input className='profile-input' type="text" name="fname" id="fname" placeholder={window?.localStorage?.getItem('usrAddress')} disabled /><br></br>
            <label for="name">Fan/Creator</label><br></br>
            <input className='profile-input' type="text" name="lname" id="lname" placeholder={window?.localStorage?.getItem('option')} disabled / ><br></br>

            <label for="name">Name</label><br></br>
            <input className='profile-input' type="text" name="fname" id="fname" placeholder={ window.localStorage.getItem('usrname') || "Enter Your Name"} value={name} onChange={(e) => setName(e.target.value)} /><br></br>
            <label for="phone">Price($Eth)</label><br></br>
            <input  className='profile-input' type="text" name="phone" id="phone" placeholder={  window.localStorage.getItem('price') || "Enter your Nft price($ETH)"}  value={price} onChange={(e) => setPrice(e.target.value)}/><br></br>
            <button className='profile-btn' type="submit" onClick={handleOnSubmit}>Submit</button>
        </form>
    </div>
</div>
  )
}

export default Profile
