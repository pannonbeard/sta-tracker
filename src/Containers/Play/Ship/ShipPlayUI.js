import React, { Component } from 'react'
import ShipAbilityNav from '../../../Components/UI/PlayUI/ShipUI/ShipAbilityNav/ShipAbilityNav'

import ShipGeneral from './ShipGeneral/ShipGeneral'

class ShipPlayUI extends Component {
  state = {
    currentScreen: 'general'
  }

  handleChangeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  render() {
    let screen = <ShipGeneral />

    switch(this.state.currentScreen){
      case 'talents':
        screen = <div>Talents</div>
        break
      case 'battle':
        screen = <div>Battle</div>
        break
      case 'stats':
        screen = <div>Stats</div>
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