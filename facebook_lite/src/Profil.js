import React, { Component } from 'react';
import "./Profil.css";
import BoutonStyle from "./BoutonStyle"

import Nom from "./Nom"
import Prenom from "./Prenom"
import Date from "./Date"
import Image from "./Image"
import App from "./App"



class Profil extends Component {
  render() {


    //const { nom, prenom, date, image } = this.props.ficheProfiltData;
    //const { nom, prenom, date, image } = this.props.ficheProfiltData;
    

    return(
      <div className="profil-container">
         {/*     
        <Image image={image}/>
    */}

        <Nom  />{this.props.Nom}

        {/*<Nom nom={nom} />*/}
        
        {/*<Prenom prenom={prenom}/>
        <Date date={date}/>
    */}


            <BoutonStyle />


      </div>
    );
  }
}

export default Profil
