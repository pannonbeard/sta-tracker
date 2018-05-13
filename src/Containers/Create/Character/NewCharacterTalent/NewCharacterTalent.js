import React from 'react'

const newCharacterTalent = (props) => (
  <div>
    <label>Name:</label>
    <input 
      type='string' 
      name={`talents[${props.index}][name]`} 
      defaultValue={props.talent.name}/>
    <br />
    <label>Description:</label>
    <textarea 
      name={`talents[${props.index}][description]`} 
      defaultValue={props.talent.description }>
    </textarea>
    <button 
      type='button' 
      onClick={props.remove}>X</button>
  </div>
)

export default newCharacterTalent