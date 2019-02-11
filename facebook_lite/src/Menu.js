import React from 'react'
import "./Menu.css"


class Menu extends React.Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
*/

  render() {
    return (
      <div>
          
        <button className="Bouton1" onClick={this.props.gestionProfil1}> {/* alert('Vous allez passer au Profil de Baudry de BRAY')*/}
            Baudry de BRAY {this.props.value}
        </button>
        <button className="Bouton2" onClick={() => alert('Vous allez passer au Profil de Mathieu DJELLALI')}>
            Mathieu DJELLALI {this.props.value}
        </button>
        <button className="Bouton3" onClick={() => alert('Vous allez passer au Profil de  Magali TREUVELOT')}>
            Magali TREUVELOT {this.props.value}
        </button>


      </div>
    )
  }
}
export default Menu