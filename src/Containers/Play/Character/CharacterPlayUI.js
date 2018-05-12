import React, { Component, Fragment } from 'react'

import CharacterBattle from './CharacterBattle/CharacterBattle'
import CharacterEquipment from './CharacterEquipment/CharacterEquipment'
import CharacterInfo from './CharacterInfo/CharacterInfo'
import CharacterTalents from './CharacterTalents/CharacterTalents'
import PlayUI from '../../../Components/UI/PlayUI/PlayUI'
import ShipPlayUI from '../Ship/ShipPlayUI'

class CharacterPlayUI extends Component {
  state = {
    currentScreen: 'ship',
    ship: {
      general: {
        registry_entry: {
          service_date: '2280',
          designation: 'USS - Excaliber NCC-1705',
          space_frame: 'Constitution',
          mission_profile: 'Multirole Explorer',
          refits: 3
        },
        traits: [
          'Trait 1',
          'Trait 2',
          'Trait 3'
        ],
        launch_bay: [
          'Small Cargo Ship',
          'Runabout',
          'Angry Engineer'
        ]
      },
      stats: {
        systems: {
          engines: { value: 1, breaches: 2 },
          computers: { value: 1, breaches: 2 },
          weapons: { value: 1, breaches: 2 },
          structure: { value: 1, breaches: 2 },
          sensors: { value: 1, breaches: 2 },
          coms: { value: 1, breaches: 2 }
        },
        departments: {
          command: 12,
          security: 12,
          science: 12,
          conn: 12,
          engineering: 12,
          medicine: 12
        },
        scale: 1,
        resistance: 1,
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
    },
    character: {
      name: 'Carl Blands',
      player: 'Phil',
      rank: 'Capitan',
      ship: '',
      stress: 9,
      determination: 1,
      attributes: {
        control: 12,
        fitness: 12,
        presence: 12,
        daring: 12,
        insite: 12,
        reason: 12
      },
      disciplines: {
        command: 12,
        security: 12,
        science: 12,
        conn: 12,
        engineering: 12,
        medicine: 12
      },
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
  }

  handleChangeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  render() {
    const { character, ship } = this.state

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
        <PlayUI 
          changeUI={this.handleChangeScreen} 
          active={this.state.currentScreen} 
          character={character}
          shipName={ship.general.registry_entry.designation}>
          {screen}
        </PlayUI>
      </Fragment>
    )
  }
}

export default CharacterPlayUI