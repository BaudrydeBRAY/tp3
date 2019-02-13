import React, { Component } from 'react';
import "./Profil.css";

import Nom from "./Nom"
import Prenom from "./Prenom"
import Date from "./Date"
import Image from "./Image"
import App from "./App"



class Profil extends Component {
  
  
  state={color: '#39D1B4'}


  randomColor=() => {
    var hexa = '0123456789ABCDEF';
    var hexa_complet = '#';
    for (var i = 0; i < 6; i++ ) {
     hexa_complet += hexa[Math.floor(Math.random() * 16)];
    }
    this.setState({color: hexa_complet});
         
}


  
  render() {


    const { nom, prenom, date, image } = this.props.ficheProfiltData;
    

    return(
      <div className="profil-container" style={{background:this.state.color}} >
    
        <Image image={image}/>
        <Nom nom={nom} />
        <Prenom prenom={prenom}/>
        <Date date={date}/>
    


        <button onClick={this.randomColor}> {/*onClick={() => alert('Vous allez changer la couleur du background du Profil')} */}
            Changer Style ! {this.props.value}
        </button>


      </div>
    );
  }
}

export default Profil
