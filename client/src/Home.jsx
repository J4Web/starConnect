import React from 'react';
import { useState,useEffect,useContext } from 'react';
import './Home.css';
import { ethers } from 'ethers';
import { Link,useParams } from 'react-router-dom';
import StoreCreatorDetails from '../helper.js/StoreCreatorDetails';


function Home() {
  console.log("Ethers ", ethers);
  const [wallet,setWallet]=React.useState("");  
   const [hasProvider, setHasProvider] = useState(false);
   const [address,setAddres]=useState('');
   let {creator}=useContext(StoreCreatorDetails);
   console.log("creator bhai ||",creator)
   useEffect(()=>{
    window.localStorage.clear();
   },[])

  const isWalletSet=wallet.length>0 ? 1:0;
  useEffect(function (){
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      console.log("----Provider----",provider);
      setHasProvider((provider)) 
    }
    getProvider()

  }, [])
  const toggleHandleSignIn= async function(e){
    if(!window.ethereum){
      alert("Please Install Metamask!!!")
    }
    if(wallet.length){
        setWallet('');
        setHasProvider(false) 
    }
else{

    let accounts = await window.ethereum.request({  
    method: "eth_requestAccounts",
  })  
  const [selectedAddress] = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  const networkId = await window.ethereum.request({
    method: 'net_version',
  });

  const chainId = await window.ethereum.request({
    method: 'eth_chainId',
  });

  setAddres(selectedAddress);
  window.localStorage.setItem('usrAddress',selectedAddress);

  console.log('Selected Address:', selectedAddress);
  console.log('Network ID:', networkId);
  console.log('Chain ID:', chainId);
  console.log('Accounts:', accounts);
  
setWallet(accounts[0]);
}

}
creator={
  usrAddress:address,
  option:"N/A"
}
console.log("ab creator | ", creator)

const truncateString= (inputString)=> {
    if (inputString.length <= 5) {
      return inputString;
    } else {
      return inputString.slice(0, 5) + "...";
    }
  }

  return (
    <StoreCreatorDetails.Provider value={
      creator
    }>
    <div className="container-fluid">  
  <div className="row home">
  <button type="button" className="btn btn-default CTA connect-btn" onClick={toggleHandleSignIn}> { (isWalletSet)? `\n ${truncateString(wallet)}`:`Connect`}</button>
      <div className="col-md-12 splash">
          <a href="#">
              <div className="intro">
                  <h1>Welcome to STARCONNECT</h1>
              </div>
              <div className="btns">
              <Link  className="btn btn-default CTA " to="/fan" value="Fan" >Fan</Link>
              <Link className="btn btn-default CTA " to="/Creator" value="creator">Creator</Link>
                </div>
              <div className="sub">
                  <p>Lets connect people and get you connected to your stars!</p>
              </div>
          </a>
      </div>
  </div>
</div>
</StoreCreatorDetails.Provider>
  )
}

export default Home