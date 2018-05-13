import React from 'react'

// { type: 'broken leg', qualities: 'hard to walk moves half as fast'}

const newCharacterInjury = (props) => (
  <div>
    <label>Type:</label>
    <input 
      type='string' 
      name={`injuries[${props.index}][type]`} 
      defaultValue={props.injury.name_type}/>
    <br />
    <label>Qualities:</label>
    <textarea 
      name={`injuries[${props.index}][qualities]`} 
      defaultValue={props.injury.qualities }>
    </textarea>
    <button 
      type='button' 
      onClick={props.remove}>X</button>
  </div>
)

export default newCharacterInjury