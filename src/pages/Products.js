import React from 'react'
import BootstrapCarousel from '../components/Carousel'  

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "red",
      padding: "200px",
      fontFamily: "Arial",
    };
    return (
      <div>
      <h1 style={mystyle}>Tuotteet oliki etusivulla tässä vaiheessa:Dlol</h1>
      </div>
    );
  }
}

export default MyHeader;