import React, { Component } from 'react';
import "./Publication.css";

import Contenu from "./Contenu.js";

class Publication extends Component {
  
  state={
    nombre: 0,
    imglike: require('./Like.png')
  }


  incrementation=() => {
    this.setState({
      nombre: this.state.nombre + 1
  })
         
}
  
  
  
  render() {


    
    const { content } = this.props.publicationData;

    return(
      <div className="publication-container">
        <Contenu content={content}/>

        <button  className="BoutonLike" onClick={ ( ) => this.incrementation() } >
          <img className="ImageLike" src={ this.state.imglike } alt="Like !"/>
          &nbsp; C'est Super !
        </button>
        <h5 className="NBLike">{ this.state.nombre }</h5>

      </div>
    );
  }
}

export default Publication

