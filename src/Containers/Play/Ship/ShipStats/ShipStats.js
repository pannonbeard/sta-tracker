import React, { Component } from 'react'

import StatField from '../../../../Components/UI/StatField/StatField'
import IncrementField from '../../../../Components/UI/IncrementField/IncrementField'
import styles from './ShipStats.scss'

class BreachIndicator extends Component{
  state = {
    active: false
  }

  componentDidMount(){
    if(this.props.position <= this.props.count -1){
      this.toggleBreach()
    }
  }

  toggleBreach = () =>{
    this.setState( (prevState, props) =>  {
      return { active: !prevState.active }
    })
  }

  render(){
    const classes = [styles.BreachIndicator, this.state.active ? styles.active : null]
    return(
      <div className={classes.join(' ')} onClick={this.toggleBreach}></div>
    )
  }
}

const shipStats = (props) => (
  <div> 
    <section>
      <h1><span>System</span></h1>
      <div className={styles.ShipStatsSystems}>
        {Object.keys(props.stats.systems).map( (key, index) => (
          <div key={index}>
            <StatField 
              label={key} 
              value={props.stats.systems[key].value}/>
            <div>breach</div>
            <div className={styles.BreachIndicators}>
              { new Array(5).fill('').map( (ar, index) => (
                <BreachIndicator key={index} position={index} count={props.stats.systems[key].breaches}/>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.ShipStatsResistanceScale}>
          <StatField label='Resistance' value={props.stats.resistance}/>
          <StatField label='Scale' value={props.stats.scale}/>
        </div>
      </div>
    </section>
    <section>
      <h1><span>Department</span></h1>
      <div className={styles.ShipStatsDepartments}>
      {Object.keys(props.stats.departments).map( (key, index) => (
        <StatField 
          key={index} 
          label={key} 
          value={props.stats.departments[key]}/>
      ))}
      </div>
    </section>
    <section>
      <h1><span>Power</span></h1>
      <div className={styles.Power}>
        <StatField label='Current' value={props.stats.power.current}/>
        <IncrementField increment={()=>{}} decrement={()=>{}}/>
        <StatField label='Total' value={props.stats.power.total}/>
      </div>
    </section>
    <section>
      <h1><span>Crew Support</span></h1>
      <div className={styles.Crew}>
        <StatField label='Current' value={props.stats.crew_support.current}/>
        <IncrementField increment={()=>{}} decrement={()=>{}}/>
        <StatField label='Total' value={props.stats.crew_support.total}/>
      </div>
    </section>
  </div>
)

export default shipStats