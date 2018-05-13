import React from 'react'

const newCharacterWeapon = (props) => (
  <div>
    <label>Name/Type:</label>
    <input 
      type='string' 
      name={`weapons[${props.index}][name_type]`} 
      defaultValue={props.weapon.name_type}/>
    <br />
    <label>Action Dice:</label>
    <input 
      type='number' 
      name={`weapons[${props.index}][action_dice]`} 
      defaultValue={props.weapon.action_dice}/>
    <br />
    <label>Qualities:</label>
    <textarea 
      name={`weapons[${props.index}][qualities]`} 
      defaultValue={props.weapon.qualities }>
    </textarea>
    <button 
      type='button' 
      onClick={props.remove}>X</button>
  </div>
)

export default newCharacterWeapon