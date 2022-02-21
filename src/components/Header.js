import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">

        <div>
        <img src={require("./TrollzLogo.png")} className="logo"/>
        </div>

        <div className="zoom">
        <img className='img-item' src={require("./TrollzArcade.png")}/>
        </div>

        <div className="zoom">
        <img src={require("./TrollzMall.png")} className='img-item'/>
        </div>

        <div className="zoom">
        <img src={require("./Amphitheater.png")} className='img-item'/>
        </div>
        
        <div className="zoom">
        <img src={require("./TrollzPadz.png")} className='img-item'/>
        </div>
        <div className="zoom">
        <img src={require("./NewsStand.png")} className='img-item'/>
        </div>

        <div className="zoom">
        <img src={require("./TrollzHigh.png")} className='img-item'/>
        </div>

        <div className="zoom">
        <img src={require("./HauntedWoods.png")} className='img-item'/>
        </div>
        
        <div className="zoom">
        <img src={require("./AmberCavez.png")} className='img-item'/>
        </div>



      </div>
    </>
  );
}
