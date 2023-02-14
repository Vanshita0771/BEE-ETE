import React from 'react'
import './Hero.css'

function Hero(){
  return(
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../assests/House2.jpg" className="d-block w-100" />
     
    </div>  
    
    <div className="carousel-item">
      <img src="../assests/Apt1.jpg" className="d-block w-100" />
     
    </div>
    <div className="carousel-item">
      <img src="../assests/Bed1.jpg" className="d-block w-100" />
     
  </div>
  
</div>
</div>
  )
}


export default Hero;