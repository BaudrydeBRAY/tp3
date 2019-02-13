import React, { Component } from 'react';
import App from "./App"
import "./Nom.css"


class Nom extends Component {
  render() {
    const nom = this.props.nom;

    return (
      <div>
        <h4 className="Nom">{nom}</h4>
      </div>
    );
  }
}

export default Nom
