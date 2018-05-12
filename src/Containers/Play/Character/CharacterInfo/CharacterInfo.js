import React from 'react'
import StatField from '../../../../Components/UI/StatField/StatField'

import styles from './CharacterInfo.css' 

const characterInfo = (props) => {
  const mappedAttributes = Object.keys(props.attributes).map( key => (
      <StatField 
        key={key} 
        label={key.toUpperCase()} 
        value={props.attributes[key]} />
    ))

  const mappedDisciplines = Object.keys(props.disciplines).map( key =>  (
      <StatField 
        key={key} 
        label={key.toUpperCase()} 
        value={props.disciplines[key]} />      
    ))

  return(
    <div className={styles.CharacterInfo}>
      <section> 
        <h1><span>Attributes</span></h1>
        <div className={styles.AttributesDisciplines}>
          {mappedAttributes}
        </div>
      </section>
      <section> 
        <h1><span>Disciplines</span></h1>
        <div className={styles.AttributesDisciplines}>
          {mappedDisciplines}
        </div>
      </section>
      <section>
        <h1><span>Values</span></h1>
        <ul>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
        </ul>
      </section>
      <section>
        <h1><span>Focuses</span></h1>
        <ul>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
        </ul>
      </section>
      <section>
        <h1><span>Traits</span></h1>
        <ul>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
          <li>Blah blah something something</li>
        </ul>
      </section>
    </div>
  )
} 



export default characterInfo