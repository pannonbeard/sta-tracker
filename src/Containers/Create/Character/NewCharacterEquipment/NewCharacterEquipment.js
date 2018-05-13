import React from 'react'

const newCharacterEquipment = (props) => (
  <div>
    <label>Name:</label>
    <input 
      type='string' 
      name={`equipment[${props.index}][name]`} 
      defaultValue={props.equip.name}/>
    <br />
    <label>Description:</label>
    <textarea 
      name={`equipment[${props.index}][description]`} 
      defaultValue={props.equip.description }>
    </textarea>
    <button 
      type='button' 
      onClick={props.remove}>X</button>
  </div>
)

export default newCharacterEquipment