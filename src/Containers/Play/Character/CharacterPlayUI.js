import React, { Component, Fragment } from 'react'

import { Route, Switch } from 'react-router-dom' 

import CharacterBattle from './CharacterBattle/CharacterBattle'
import CharacterEquipment from './CharacterEquipment/CharacterEquipment'
import CharacterInfo from './CharacterInfo/CharacterInfo'
import CharacterTalents from './CharacterTalents/CharacterTalents'
import PlayUI from '../../../Components/UI/PlayUI/PlayUI'
import ShipPlayUI from '../Ship/ShipPlayUI'

class CharacterPlayUI extends Component {
  state = {
    currentScreen: 'info'
  }

  handleChangeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  render() {
    const talents = [
      { name: 'First Talent', description: 'Does something cool' },
      { name: 'Second Talent', description: 'Does something else cool' },
      { name: 'Third Talent', description: 'Does something else cool' },
      { name: 'Fourth Talent', description: 'Does something else cool' },
    ]

    let screen = <CharacterInfo />

    switch(this.state.currentScreen){
      case 'talents':
        screen = <CharacterTalents talents={talents}/>
        break
      case 'battle':
        screen = <CharacterBattle />
        break
      case 'equipment':
        screen = <CharacterEquipment />
        break
      case 'ship':
        screen = <ShipPlayUI />
        break
      default:
        screen = <CharacterInfo />
    }

    return (
      <Fragment> 
        <PlayUI changeUI={this.handleChangeScreen} active={this.state.currentScreen}>
          {screen}
        </PlayUI>
      </Fragment>
    )
  }
}

export default CharacterPlayUI