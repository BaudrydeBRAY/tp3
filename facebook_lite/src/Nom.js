import React, { Component } from 'react';
import App from "./App"


class Nom extends Component {
  render() {
    const nom = this.props.nom;

    return (
      <div>
        <h4>{this.props.Nom}</h4>
        {/*<h4>{nom}</h4>*/}
      </div>
    );
  }
}

export default Nom
