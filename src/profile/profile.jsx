import React from 'react';
import '../../src/profile/Profile.css'
import { Link ,Routes,Route, Router, Navigate} from "react-router-dom";


function Profile() {
  return (
   
    <div>
    <div class="card center">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="card-inner">
      <input type="text" placeholder="Name" name="name" class="input"></input>
      <input type="text" placeholder="Surname" name="surname" class="input"></input>
      <button class="profile-button"  name="button" >BUTTON</button>
    </div>  
  </div>
  </div>

  );
}

export default Profile;