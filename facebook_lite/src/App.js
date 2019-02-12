import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test'
import Menu from './Menu'

import Profil from './Profil'
import Publication from './Publication.js'





const Publication1 = {

  content: "Super weekend au fond de mon lit! #seum #malade #crevé"

}


const Publication2 = {

  content: "RDV demain pour le Paintball interasso !"

}

const Publication3 = {

  content: "Franchement, trop hate d'avoir des supers vacances de travail x)"

}


const FicheProfil1 = {
  nom: "de BRAY",
  prenom: "Baudry",
  date: "03/10/1997",
  image: {
    src: require ('./Centurion.jpg'),
    alt: "Centurion"
  }
}

const FicheProfil2 = {
  nom: "DJELLALI",
  prenom: "Mathieu",
  date: "24/06/1997",
  image: {
    src: require ('./Mario.jpg'),
    alt: "Mario"
  }
}

const FicheProfil3 = {
  nom: "TREUVELOT",
  prenom: "Magali",
  date: "13/09/1997",
  image: {
    src: require ('./Pacman.png'),
    alt: "Pacman"
  }
}



class App extends Component {
/*
state={
  nom: "de BRAY",
  prenom: "Baudry",
  date: "03/10/1997",
  image: {
    src: require ('./Centurion.jpg'),
    alt: "Centurion"
  }

}


gestionProfil1=()=>{

  this.setState({ 
   // FicheProfil

   nom: "de BRAY",
   prenom: "Baudry",
   date: "03/10/1997",
   image: {
     src: require ('./Centurion.jpg'),
     alt: "Centurion"
   }
  });

  }
*/




  render() {
    return (
      <div className="App">
  
        <h1>Facebook Lite !</h1>
        <Test />
        <Menu />
        

        <Profil ficheProfiltData={FicheProfil1}  />  
        <Profil ficheProfiltData={FicheProfil2}  />
        <Profil ficheProfiltData={FicheProfil3}  />



        <Publication publicationData={Publication1} />   
        <Publication publicationData={Publication2} />
        <Publication publicationData={Publication3} />




      </div>
    );
  }
}

export default App;
