import React, { Component } from "react";
import { people } from "./08.1Data";
import { getImageUrl } from "./08.2Utils";
import DynListkey from "./08.3DynListkey";


export default class ListAndKeys extends Component {
  render() {
    // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //   ];
    // as we have impoerted then we dont need above data
    //     let listItems = people.map((person,index) => {
    //         console.log(person);
    //       return<li key={index}>{person}</li>
    //   });
    let listItems = people.map((person, index) => {
      return (
        // <li key={index}>
        //     <img src={getImageUrl(person)} alt={person.name} />
        //   <p><b>{person.name}</b> is a {person.profession} known for {person.accomplishment}</p>
        // </li>
        <DynListkey content={person.name}/>
      );
    });
    return (
      <>
        <ul className="listkeys">{listItems}</ul>
      </>
    );
  }
}
