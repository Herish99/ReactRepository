import React, { Component } from 'react'
import { getImageUrl } from './08.2Utils';
import { people } from './08.1Data';

export default class DynListkey extends Component {
  render() {
    let listItems = people.map((person, index) => {
        return (
          <li key={index}>
              <img src={getImageUrl(person)} alt={person.name} />
            <p><b>{this.props.content}</b> is a {person.profession} known for {person.accomplishment}</p>
          </li>
        );
      });
    return (
      <>
        
      </>
    )
  }
}
