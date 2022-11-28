import React from 'react'

function footer() {
  return (
    <div> 
     <footer class="footer-sec">
    <div class="main">
      
      
      <div class="logo row lgoftr">
        <div class="footer-header">
          <img src="/logoftr.png" class="manik" alt=""/>
        </div>
        <div class="logo-des">
          <p>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience.
Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
          
          <a href="#" class="btn-know">Know More</a>
        </div>
        
        
      </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Contact Us</h3>
        </div>
  
          <div class="office-des">
          
          
         <a href="#">abc@gmail.com</a>
          
          <p class = "num">+91999999999</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">About Us</a>
          <a href="#" class="footer-links">Services</a>
          <a href="#" class="footer-links">Galary</a>
          <a href="#" class="footer-links">Contact</a>
        </div>
        
     
      </div>
      
      
    </div>
    <div class="copyright">
    <hr/>
    
    <p>© Copyright 2024 GD Subway</p>
    </div>
  </footer></div>
  )
}

export default footer;