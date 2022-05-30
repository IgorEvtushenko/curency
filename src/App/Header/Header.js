import React from 'react';
import './Header.scss';
import Nav from './Nav/Nav'

class Header extends React.Component {
  render(){
    return (
      <header>
        <div className='top-bar animate-dropdown'></div>
        <div className='main-header'>
          <h1 className='site-title'>React light level</h1>
        </div>
        <Nav/>
      </header>
    );
  }
}

export default Header;