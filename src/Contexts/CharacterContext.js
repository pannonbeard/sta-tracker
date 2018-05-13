import React, { Component } from 'react'
import axios from '../axios'

export const CharacterContext = React.createContext({
  characters: [],
  getCharacters: () => {}
})

const CharacterProvider = CharacterContext.Provider
export const CharacterConsumer = CharacterContext.Consumer

export class CharacterWrap extends Component{
  state = {
    characters: [],
    getCharacters: () => {
      axios.get('/characters.json')
        .then( response => response.data )
        .then( data => {
          let characters = []
          Object.keys(data).map( key => characters.push({ id: key, ...data[key] }) )
          this.setState({ characters })
        })
    },
    getCharacter: (id) => {
      return axios.get(`/characters/${id}.json`)
    }
  }

  render(){
    return(
      <CharacterProvider
     value={this.state}>
        {this.props.children}
      </CharacterProvider
    >
    )
  }
}

