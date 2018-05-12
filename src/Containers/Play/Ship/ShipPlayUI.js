import React, { Component } from 'react'
import ShipAbilityNav from '../../../Components/UI/PlayUI/ShipUI/ShipAbilityNav/ShipAbilityNav'

import ShipGeneral from './ShipGeneral/ShipGeneral'
import ShipStats from './ShipStats/ShipStats'
import ShipTalents from './ShipTalents/ShipTalents'
import ShipBattle from './ShipBattle/ShipBattle'

class ShipPlayUI extends Component {
  state = {
    currentScreen: 'stats'
  }

  handleChangeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  render() {
    let screen = <ShipGeneral general={this.props.ship.general}/>

    switch(this.state.currentScreen){
      case 'talents':
        screen = <ShipTalents talents={this.props.ship.talents}/>
        break
      case 'battle':
        screen = <ShipBattle battle={this.props.ship.battle}/>
        break
      case 'stats':
        screen = <ShipStats stats={this.props.ship.stats}/>
        break
      default:
        screen = <ShipGeneral general={this.props.ship.general}/>
    }
    return (
      <div>
        <ShipAbilityNav updateUI={this.handleChangeScreen} active={this.state.currentScreen}/>
        {screen}
      </div>
    )
  }
}

export default ShipPlayUI