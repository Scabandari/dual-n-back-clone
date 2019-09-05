import React from 'react';
import { Link } from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        <h1>Dual N-Back Clone</h1>
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          <h3>Link</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
