import React, { Component } from "react";
import Slide from "react-reveal";
import "../App.css";
// import Fade from "react-reveal";

class Music extends Component {



  render() {
    // console.log(this.props.data);
    if (!this.props.data) return null;
        console.log(this.props.data);
    // const mysongs = this.props.data.attributes;

    // return (
    //   <div>
    //     <p>
    //       {/* {this.props.data.attributes.description} */}
    //     </p>
    //   </div>
    // );

    const songs = this.props.data.attributes.map(function (attributes) {
      return (
        <div id="music" className="columns" key={attributes.title}>

          <div className="flex">

            <iframe src={attributes.url} 
              width="80%" 
              height="300" 
              title={attributes.title}
              frameBorder="0" 
              allowtransparency="true"
              allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">  
              </iframe>
            </div>

          <h2> {attributes.title}</h2>
          <p>{attributes.description}</p>
          
        </div>
      );
    });

return(
  <section id="music">  
    <Slide left duration={800000}>
    <div  
    className="bgrid-thirds s-bgrid-halves cf"
    >
      <div className="header-col">
          <h1> Check out some of my music!</h1>
      </div> 
      <container id="music-wrapper" className="music-item item-wrap">{songs}</container>
    </div>
  </Slide>
  </section>
);






  }
}

export default Music;
