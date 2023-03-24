import React from "react";
import './style.scss'

class Header extends React.Component{
    render(){
        return <>
         <div id="header">
               {/* <div> <img src={image1}/></div> */}
              <div id="container"> 
              <a  id='home' href="">Home </a>
                <a href="">About</a>
                <a href="">More Pages</a>
                <a href="">Contact</a>
                <button id='button'>SIGN IN/SIGN UP</button></div>
            </div>
        </>
    }
}
export default Header