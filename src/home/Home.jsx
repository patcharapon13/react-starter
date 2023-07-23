import React, { useState } from 'react';
import '../../src/home/Home.css';
import { Link ,Routes,Route, Router, Navigate} from "react-router-dom";
import Profile from '../profile/profile';



const Home = (props) => {


    return (
        <div className="App">
                
            <section class="layout">
    
                <div class="grow1">
                <Link to="https://google.com">
                    <button class="cta" >
                    <span class="hover-underline-animation"> Profile </span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                    </button>
                    </Link>
                    
                </div>
                <div class="grow1">

                <button class="cta">
    <span class="hover-underline-animation"> Product </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
                </div>
                </section>


        </div>

        
    );
};




export default Home;
