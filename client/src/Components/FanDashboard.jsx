import React,{useContext} from "react";
import "./CreatorDashboard.css";
import { Link,useParams,useLocation} from "react-router-dom";
import StoreCreatorDetails from "../helper.js/StoreCreatorDetails";
import truncateString from "../helper.js/truncate.";
import './FanDasboard.css'



function FanDashboard() {
  const {creator}=useContext(StoreCreatorDetails);
  console.log("bhai hai toh creator ",creator)
  const {pathname}=useLocation();
  console.log("useParams | ",pathname)
  const option=pathname.substring(1);
  const create={
    usrAddress:creator?.usrAddress,
    option:option
  }
  window.localStorage.setItem('option',option);

  return (
<StoreCreatorDetails.Provider value={
  create
}>
    <div class="container ">
      <div class="left_sidebar">
        <div class="close_hamburger_btn">
          <i class="bx bx-x-circle"></i>
      </div>
        <div class="logo">
         <Link to='/'><h2 >StarConnect</h2></Link> 
        </div>
        <div class="menu_items ">
          <div class="menu_item ">
            <i class="bx bxs-dashboard"></i>
            <Link to='/'><p>Home</p></Link>
        </div>
          <div class="menu_item ">
            <i class="bx bx-message-rounded-dots"></i>
            <Link to="/fan"><p>All Requests</p></Link>
            <i class="fa-regular fa-circle-2 "></i>
        </div>
          <div class="menu_item ">
            <i class="bx bx-calendar"></i>
            <Link to="/makerequest"><p>Make Request</p></Link>
          </div>
          <div class="menu_item ">
            <i class="bx bx-file-blank"></i>
            
            {/* <Link to="/getCreatorDetails"><p>Get Creator</p></Link> */}
          </div>
          <div class="menu_item ">
            <i class="bx bx-file-blank"></i>
            {/* <Link to="/findCreators"><p>Find Creators</p></Link> */}
          </div>
        </div>
      </div>
      <div class="main_content">
        <div class="left_right_sidebar_opener">
          <div class="hamburger">
            <i class="bx bx-menu"></i>
          </div>
          <div class="student">
            <div class="profile_img">
              <Link to='/Creator/profile'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU"
                alt="profile img"
              />
              </Link>
              
            </div>
            <div class="profile_name">
              <p></p>
            </div>
          </div>
        </div>
        <div class="main_navbar">
          <div class="search_box">
            <i class="bx bx-search-alt-2"></i>{" "}
            <input type="text " placeholder="Search" />
          </div>
          {/* <div class="dark_mode_icon" onclick="darkMode()">
            <i class="bx bx-moon"></i>
            <i class="bx bx-sun"></i>
          </div> */}
        </div>
        <div class="menu_item_name_and_filter ">
          <div class="menu_item_name">
            <h2>Fan Dashboard</h2>
          </div>
          <div class="filter_and_sort">
            <div class="sort sort_and_filter">
              <p>Sort</p>
              <i class="bx bx-sort-down"></i>
            </div>
            <div class="filter sort_and_filter">
              <p>Filter</p>
              <i class="bx bx-filter"></i>
            </div>
          </div>
        </div>
        <div class="tabs">
          <div class="tab_name">
            <p>My Requests...</p>
          </div>
          <div class="three_dots">
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
        <div class="table">
          <table>
            <tr>
              <th>Address</th>
              <th>My Requests</th>
              <th>Creator_Handle</th>
              <th>Cancel</th>
            </tr>
            <tr>
        
              <td>0x82.....29Db0</td>
              <td>Say Happy Birthday Prakarsh!!</td>
              <td>Messy101</td>
              <td><button className="withdraw">Cancel</button></td>
              <td></td>
  
            </tr>
            <tr>

              <td>0x79.....gwj06</td>
              <td>Good Luck with your exam Prakarsh!!</td>
              <td>realShakira</td>
              <td><button className="withdraw">Cancel</button></td>
              <td></td>
    
            </tr>
            <tr>

              <td>0x79.....gwj06</td>
              <td>Have a great day Jason!!</td>
              <td>DwayneTheStone</td>

              <td> <p className="success" >Success</p></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="right_sidebar">
        <div class="notification_and_name ">
          <div class="close_btn ">
            <i class="bx bx-x-circle"></i>
          </div>
          <div class="bell ">
            <i class="bx bx-bell"></i>
            {/* <span></span> */}
          </div>
          <Link to='/Creator/profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU" alt="profile " /></Link>
          <p>{ truncateString(window.localStorage.getItem('usrAddress'))}</p>
          <i class="bx bx-chevron-down"></i>
        </div>
        <div class="profile ">
          <div class="img ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU "
              alt="studentImg "
            />
          </div>
          <div class="name_and_class ">
            <p>{ truncateString(window.localStorage.getItem('usrAddress'))}</p>

          </div>
          <div class="contact_info ">
            <i class="bx bx-message-rounded-dots"></i>
            <i class="bx bx-phone-call"></i>
            <i class="bx bx-envelope"></i>
          </div>
          <div class="about ">
            <h4>Description...</h4>
            <p>
            Have a great day Jason!!
            </p>
          </div>
        </div>
      </div>
    </div>
    </StoreCreatorDetails.Provider>
  );
}

export default FanDashboard;
