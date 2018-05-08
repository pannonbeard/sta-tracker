import React from 'react'

import styles from './CharacterInfo.css'

const characterInfo = (props) => {
  const attributes = [
    ['Control', 12],
    ['Fitness', 12],
    ['Presence', 12],
    ['Daring', 12],
    ['Insite', 12],
    ['Reason', 12],
  ]

  const disciplines = [
    ['Command', 12],
    ['Security', 12],
    ['Science', 12],
    ['Conn', 12],
    ['Engineering', 12],
    ['Medicine', 12],
  ]

  const mappedAttributes = attributes.map( attr => {
    const shrinkText = attr[0].length > 8 
      ? { fontSize: '.65em', paddingTop: '.75em' } 
      : attr[0].length >= 6 
        ? { fontSize: '.85em', paddingTop: '.45em' } : null
    return (
      <div key={attr[0]} className={styles.AtDisBubble}><span style={shrinkText}>{attr[0]}</span> <span>{attr[1]}</span></div>
    )
  })

  const mappedDisciplines = disciplines.map( disc => {
    const shrinkText = disc[0].length > 10 
      ? { fontSize: '.65em', paddingTop: '.75em' } 
      : disc[0].length > 5 
        ? { fontSize: '.85em', paddingTop: '.45em' } : null
    return (
      <div key={disc[0]} className={styles.AtDisBubble}><span style={shrinkText}>{disc[0]}</span> <span>{disc[1]}</span></div>
    )
  })

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