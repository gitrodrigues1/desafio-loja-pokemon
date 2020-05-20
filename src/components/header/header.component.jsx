import React from 'react'
import './header.styles.css'
import {Link} from 'react-router-dom'
import BackpackIcon from '../backpack-icon/backpack-icon.component'
import BackpackDropdown from '../backpack-dropdown/backpack-dropdown.component'


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isEnabled: false
    }
  }

  toggleEnabled = () => (
    this.setState({isEnabled : !this.state.isEnabled})
  )
  render() {
    return(
      <div className="header">
        <Link className='logo-container' to='/'>
          <h1>Mercado Noturno</h1>
          <h1>Equipe Rocket</h1>
        </Link>
        <div className='options'>
          <Link className='option' to='/search'>Pesquisar</Link>
          <Link className='option' to='/backpack'>Mochila</Link>
          <Link className='option'  onClick={this.toggleEnabled} > <BackpackIcon /> </Link>
        </div>
        {
          this.state.isEnabled && <BackpackDropdown />
        } 
      </div>
    )
  }
    
}
export default Header
