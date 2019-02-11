import React, { Component } from 'react';
import "./Publication.css";

import Contenu from "./Contenu.js";

class Publication extends Component {
  render() {


    
    const { content } = this.props.publicationData;

    return(
      <div className="publication-container">
        <Contenu content={content}/>

      </div>
    );
  }
}

export default Publication
