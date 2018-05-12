import React from 'react'

import ItemField from '../../../../Components/UI/ItemField/ItemField'
import styles from './ShipGeneral.scss'

const shipGeneral = (props) => (
  <div>
    <section>
      <h1><span>Registry Entry</span></h1>
      <div className={styles.ShipGeneralRegistryEntry}>
        <ItemField label='Designation' value={props.general.registry_entry.designation}/>
        <ItemField label='Service Date' value={props.general.registry_entry.service_date}/>
        <ItemField label='Space Frame' value={props.general.registry_entry.space_frame}/>
        <ItemField label='Mission Profile' value={props.general.registry_entry.mission_profile}/>
        <ItemField label='Refits' value={props.general.registry_entry.refits}/>
      </div>
    </section>
    <section>
      <h1><span>Traits</span></h1>
      <ul>
        {props.general.traits.map( (trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </section>
    <section>
      <h1><span>Launch Bay</span></h1>
      <ul>
      {props.general.launch_bay.map( (trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </section>
  </div>
)

export default shipGeneral