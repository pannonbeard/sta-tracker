import React, { Component, Fragment } from 'react'

import CharacterBattle from './CharacterBattle/CharacterBattle'
import CharacterEquipment from './CharacterEquipment/CharacterEquipment'
import CharacterInfo from './CharacterInfo/CharacterInfo'
import CharacterTalents from './CharacterTalents/CharacterTalents'
import PlayUI from '../../../Components/UI/PlayUI/PlayUI'
import ShipPlayUI from '../Ship/ShipPlayUI'

class CharacterPlayUI extends Component {
  state = {
    currentScreen: 'ship'
  }

  handleChangeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  render() {
    const character = {
      attributes: [
        ['Control', 12],
        ['Fitness', 12],
        ['Presence', 12],
        ['Daring', 12],
        ['Insite', 12],
        ['Reason', 12],
      ],
      disciplines: [
        ['Command', 12],
        ['Security', 12],
        ['Science', 12],
        ['Conn', 12],
        ['Engineering', 12],
        ['Medicine', 12],
      ],
      talents: [
        { name: 'First Talent', description: 'Does something cool' },
        { name: 'Second Talent', description: 'Does something else cool' },
        { name: 'Third Talent', description: 'Does something else cool' },
        { name: 'Fourth Talent', description: 'Does something else cool' },
      ],
      weapons: [
        { name_type: 'Phaser - blaster', action_dice: 3, qualities: 'great'},
        { name_type: 'Phaser - blaster', action_dice: 3, qualities: 'great'}
      ],
      injuries: [
        { type: 'broken leg', qualities: 'hard to walk moves half as fast'},
        { type: 'broken leg', qualities: 'hard to walk moves half as fast'},
      ],
      equipment: [
        { name: 'Something something', description: 'Yada yada blah blah'},
        { name: 'Something something', description: 'Yada yada blah blah'},
      ]
    }

    const ship = {
      general: {
        registry_entry: {
          service_date: '',
          designation: '',
          space_frame: '',
          mission_profile: '',
          refits: []
        },
        traits: [],
        launch_bay: []
      },
      stats: {
        systems: {
          engines: 1,
          computers: 1,
          weapons: 1,
          structure: 1,
          sensors: 1,
          coms: 1,
          scale: 1,
          resistance: 1
        },
        departments: {},
        power: {
          current: 1,
          total: 1
        },
        crew_support: {
          current: 1,
          total: 1
        }
      },
      talents: [],
      battle: {
        weapons: [],
        sheilds: [1,1,1,1,0,0,0,0]
      }
    }

    let screen = (
      <CharacterInfo 
        attributes={character.attributes} 
        disciplines={character.disciplines}/>
    )

    switch(this.state.currentScreen){
      case 'talents':
        screen = <CharacterTalents talents={character.talents}/>
        break
      case 'battle':
        screen = (
          <CharacterBattle 
            weapons={character.weapons} 
            injuries={character.injuries}/>
        )
        break
      case 'equipment':
        screen = <CharacterEquipment equipment={character.equipment}/>
        break
      case 'ship':
        screen = <ShipPlayUI ship={ship}/>
        break
      default:
        screen =  (
          <CharacterInfo 
            attributes={character.attributes} 
            disciplines={character.disciplines}/>
        )
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