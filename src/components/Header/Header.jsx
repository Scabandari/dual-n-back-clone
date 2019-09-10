import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        <div className='menu-title'>Dual N-Back Clone</div>
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          <div>Link</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
