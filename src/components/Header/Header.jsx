import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DisplayScreenSize from '../DisplayScreenSize'
import './Header.scss';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        <div className='menu-title'>Dual N-Back Clone</div>
      </Link>
      <div className='right menu'>
        <DisplayScreenSize />
      </div>
      <div className='right menu'>
        <Link to='/game-results' className='item'>
          <div>Link</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
