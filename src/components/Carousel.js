import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component { 

render() {
  return (
    
    <Carousel variant="dark">
      <Carousel.Item>
        <img  
          className="'container-fluid justify-content-center'"
          src={require("../img/img1.jpg")}  />  
          
        
        <Carousel.Caption>
          <h5>Tuote 1</h5>
          <p>Imuri bro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="'container-fluid justify-content-center'"
          src={require("../img/img2.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Tuote 2</h5>
          <p>Headsetti man</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
}

export default BootstrapCarousel  