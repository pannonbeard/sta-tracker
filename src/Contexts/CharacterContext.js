import React, { Component } from 'react'
import firebase from '../firebase'

const CharacterContext = React.createContext()

const CharacterProvider = CharacterContext.Provider
export const CharacterConsumer = CharacterContext.Consumer

export class CharacterWrap extends Component{
  state = {
    characters: [],
    currentCharacter: {},
    getCharacters: (userId) => {
      const charactersRef = firebase.database().ref('characters').orderByChild('user').equalTo(userId)
      charactersRef.on('value', (snapshot) => {
        let characters = snapshot.val();
        let newState = []
        for(let character in characters){
          newState.push({ id: character, ...characters[character] })
        }
        this.setState({ characters: newState })
      })
    },
    getCharacter: (id) => {
      const characterRef = firebase.database().ref(`/characters/${id}`);
      characterRef.on('value', (snapshot) => {
        this.setState({ currentCharacter: { id: id, ...snapshot.val()} })
      })
    },
    updateCharacter: (data) => {
      const characterRef = firebase.database().ref(`/characters/${data.id}`)
      return characterRef.set(data)
    },
    createCharacter: (data) => {
      const charactersRef = firebase.database().ref('characters')
      return charactersRef.push(data)
    },
    deleteCharacter: (id) => {
      const characterRef = firebase.database().ref(`/character/${id}`);
      return characterRef.remove();
    }
  }

  render(){
    return(
      <CharacterProvider
        value={this.state}>
        {this.props.children}
      </CharacterProvider>
    )
  }
}

