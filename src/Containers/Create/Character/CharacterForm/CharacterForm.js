import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import NewCharacterTalent from '../NewCharacterTalent/NewCharacterTalent'
import NewCharacterEquipment from '../NewCharacterEquipment/NewCharacterEquipment'
import NewCharacterWeapon from '../NewCharacterWeapon/NewCharacterWeapon'
import NewCharacterInjury from '../NewCharacterInjury/NewCharacterInjury'

import styles from './CharacterForm.scss'

class CharacterForm extends Component{
  state = {
    user: '',
    name: '',
    rank: '',
    stress: 0,
    determination: 3,
    attributes: {
      control: 7, 
      fitness: 7, 
      presence: 7, 
      daring: 7, 
      insight: 7, 
      reason: 7
    },
    disciplines: {
      command: 1, 
      security: 1,
      science: 1, 
      conn: 1,
      engineering: 1,
      medicine: 1 
    },
    talents: [
      // { name: 'First Talent', description: 'Does something cool' },
    ],
    equipment: [
      // { name: 'Something something', description: 'Yada yada blah blah'},
    ],
    weapons: [
      // { name_type: 'Phaser - blaster', action_dice: 3, qualities: 'great'},
    ],
    injuries: [
      // { type: 'broken leg', qualities: 'hard to walk moves half as fast'},
    ]
  }

  componentWillMount(){
    this.setState({ user: this.props.user })
    if(this.props.character){
      this.setState({ ...this.props.character })
    }
  }

  checkArrayedValue = (property, name, value) => {
    const propertyIndex = name.split('[')[1].replace(']', '')
    const propertyValue = name.split('[')[2].replace(']', '')
    let updatedproperties = []
    this.state[property].forEach( (prop) => {
      updatedproperties.push({ ...prop })
    })
    updatedproperties[propertyIndex][propertyValue] = value
    this.setState({ [property]: updatedproperties })
  }

  checkValuesWithRange = (property, name, value, high, low) => {
    const nameValue = name.split('[')[1].replace(']', '')
      if(value >= low && value <= high){
        let updatedValues = { ...this.state[property]}
        updatedValues[nameValue] = value
        this.setState({ [property]:  updatedValues })
      }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if(name.indexOf('attributes') > -1){
      this.checkValuesWithRange('attributes', name, value, 12, 7)
    } else if(name.indexOf('disciplines') > -1){
      this.checkValuesWithRange('disciplines', name, value, 5, 1)
    } else if(name.indexOf('talents') > -1){
      this.checkArrayedValue('talents', name, value)
    } else if(name.indexOf('equipment') > -1){
      this.checkArrayedValue('equipment', name, value)
    } else if(name.indexOf('weapons') > -1){
      this.checkArrayedValue('weapons', name, value)
    } else if(name.indexOf('injuries') > -1){
      this.checkArrayedValue('injuries', name, value)
    } else{
      this.setState({[name]: value})      
    }
  }

  addElement = (propertyName, propertyObject) => {
    let updatedProperties = []
    this.state[propertyName].forEach( prop => {
      updatedProperties.push( { ...prop })
    })
    const newId = new Date().toISOString()
    updatedProperties.push({ id: newId, ...propertyObject })
    this.setState({ [propertyName]: updatedProperties })
  }

  removeElement = (id, propertyName) => {
    let properties = []
    this.state[propertyName].forEach( prop => {
      properties.push({...prop})
    })
    const updatedProps = properties.filter( (prop) => {
      return prop.id !== id
    })
    this.setState({ [propertyName]: updatedProps })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const character = this.state
    if(character.id){
      this.props.submit(character)
      this.props.history.push(`/characters/${character.id}/play`)
    }else{
      this.props.submit(character)
      .then(res => this.props.history.push(`/characters/${res.key}/play`))
    } 
  }

  render(){
    return(
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2><span>General</span></h2>          
        <label>Name:</label>
        <input id='' type='text' name='name' defaultValue={this.state.name}/>
        <br />
        <label>Rank:</label>
        <input type='text' name='rank' defaultValue={this.state.rank}/>
        <h2><span>Attributes</span></h2>
        {Object.keys(this.state.attributes).map((key, index) => (
          <div key={index}>
            <label>{key}:</label>
            <input 
              type='number' 
              name={`attributes[${key}]`} 
              value={this.state.attributes[key]} 
              onChange={this.handleChange}/>
          </div>
        ))}
        <h2><span>Disciplines</span></h2>
        {Object.keys(this.state.disciplines).map((key, index) => (
          <div key={index}>
            <label>{key}:</label>
            <input 
              type='number' 
              name={`disciplines[${key}]`} 
              value={this.state.disciplines[key]} 
              onChange={this.handleChange}/>
          </div>
        ))}

        <h2><span>Talents</span></h2>
        <div id='talents'>
          {this.state.talents.map( (talent, index) => (
            <NewCharacterTalent 
              talent={talent} 
              index={index} 
              key={talent.id} 
              remove={() => this.removeElement(talent.id, 'talents')}/>
          ))}
        </div>
        <button 
          className={styles.Button}
          type='button' 
          onClick={() => this.addElement('talents', { name: '', description: ''})}>
          Add Talent
        </button>
        
        <h2><span>Equipment</span></h2>
        <div id='equipment'>
          {this.state.equipment.map( (equip, index) => (
            <NewCharacterEquipment 
              key={equip.id} 
              equip={equip} 
              index={index} 
              remove={() => this.removeElement(equip.id, 'equipment')}/>
          ))}
        </div>
        <button
          className={styles.Button} 
          type='button' 
          onClick={() => this.addElement('equipment', { name: '', description: '' })}>
          Add Equipment
        </button>          
        
        <h2><span>Weapons</span></h2>
        <div id='weapons'>
          {this.state.weapons.map((weapon,index) => (
            <NewCharacterWeapon 
              key={weapon.id}
              weapon={weapon} 
              index={index} 
              remove={() => this.removeElement(weapon.id, 'weapons')}/>
          ))}
        </div>
        <button
          className={styles.Button} 
          type='button'
          onClick={() => this.addElement('weapons', { name_type: '', action_dice: 0, qualities: ''})}
        >Add Weapon</button>
        
        <h2><span>Injuries</span></h2>
        <div id='injuries'>
          {this.state.injuries.map((injury, index) => (
            <NewCharacterInjury 
              key={injury.id}
              injury={injury}
              index={index}
              remove={() => this.removeElement(injury.id, 'injuries')}/>
          ))}
        </div>
        <button
          className={styles.Button} 
          type='button'
          onClick={() => this.addElement('injuries', { type: '', qualities: ''})}
        >Add Injury</button>
        <br />
        <button type='submit' className={[styles.Button, styles.CreateButton].join(' ')} >Create Character</button>
      </form>
    )
  }
}



export default withRouter(CharacterForm)