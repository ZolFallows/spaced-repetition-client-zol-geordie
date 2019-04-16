import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='logout'>
        <span className='logged-in-username'>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login' className="logout">
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className="login">Login</Link>
        {' '}
        <Link to='/register' className="register">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div className="title-container">
          <h1 >
            <Link to='/' data-hover='Spaced repetition'>
              Ripetizione
            </Link>
          </h1>
          {/* <h1 className='title hidden-title'>
            <Link to='/'>
              
            </Link>
          </h1> */}
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
