import React from 'react'
import StatField from '../../../../Components/UI/StatField/StatField'

import styles from './CharacterInfo.css' 

const characterInfo = (props) => {
  const mappedAttributes = props.attributes.map( attr => (
      <StatField 
        key={attr[0]} 
        label={attr[0]} 
        value={attr[1]} />
    ))

  const mappedDisciplines = props.disciplines.map( disc =>  (
      <StatField 
        key={disc[0]} 
        label={disc[0]} 
        value={disc[1]} />      
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