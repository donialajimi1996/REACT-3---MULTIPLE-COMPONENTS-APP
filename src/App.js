import React, { Component } from "react";
import "./App.css";
import sousse from "./sousse.jpg";
import tunis from "./tunis.jpg";
import sfax from "./sfax.jpg";
import Box from "./components/box";
import Img from "./components/img";
import Backimg from "./components/backimg";
class App extends Component {
  render() {
    return (
      <div className="box1">
        <h1> Nos programmes </h1>

        <Box
          name="Full Time Program"
          des="un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise."
          color="#daecf3"
        />
        <Box
          name="Part Time Program"
          des="Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !"
          color="#fe424d"
        />
        <Box name="Kids Coding Program" des="hello kids!!!" color="#1aa6b7" />
        <Box
          name="Summer Academy"
          des="Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie"
          color="#022d41"
        />
        <div className="cover">
          <p className="h2">Quelques Chiffres</p>
          <Backimg name="Passionnés du digital" des=" +20,000" />
          <Backimg
            name="Etudiants depuis le démarrage en aout 2016"
            des="+500"
          />
          <Backimg name="Produits développés" des="+300" />
          <Backimg name="Instructeurs game,web et mobile" des="+30" />
          <Backimg name="Speakers " des="+50" />
          <Backimg name="De hackerspace au coeur du lac 1" des="400m²" />
        </div>
        <h3>Ou se passent les sessions ?</h3>
        <p className="p">
          les sessions se passent dans une hackspaces de GOMYCODE dans les ...
          suivantes . L'hebérgement est possible dans la limite des places
          disponible.{" "}
        </p>
        <Img name="Tunis" source={tunis} />
        <Img name="Sousse" source={sousse} />
        <Img name="Sfax" source={sfax} />
      </div>
    );
  }
}

export default App;
