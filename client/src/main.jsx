import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Fan from './Fan.jsx';
import Creator from './Creator.jsx';
import Profile from './Components/Profile.jsx';
import StoreCreatorDetails from '../helper.js/StoreCreatorDetails.js';
import Mint from './Components/Mint.jsx';
import MakeRequest from './Components/MakeRequest.jsx';
import FindCreators from './Components/FindCreators.jsx';
import GetCreatorDetails from './Components/GetCreatorDetails.jsx'
const creator={
  usrAddress:"0xFxb678ow0uywkcwgh...",
  option:"N/A"
}
function Main() {
  return (
 <Outlet/> 
 )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    children:[
      {
        path:'/',
        element:(<App/>)
    
      },
      {
      path:'/fan',
      element:(<Fan/>),
       
    },
    {
      path:"/Creator",
      element:(<Creator/>)
    },
    {     
      path:"/Creator/:profile",
      element:(<Profile />),
    },
    {
      path:"/mint",
      element:<Mint/>
    },
    {
      path:'/makerequest',
      element:<MakeRequest/>
    },{
      path:'/findCreators',
      element:<FindCreators/>
    },{
      path:'/getCreatorDetails',
      element:<GetCreatorDetails/>
    }
    ]

  }
  
]);

createRoot(document.getElementById("root")).render(
  <StoreCreatorDetails.Provider value={creator}>
<RouterProvider router={router} />
  </StoreCreatorDetails.Provider>
  
);


