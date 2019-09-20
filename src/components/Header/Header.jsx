import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import DisplayScreenSize from '../DisplayScreenSize';
import './Header.scss';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        <div className='menu-title'>Dual N-Back Clone</div>
      </Link>
      <div className='right menu'>{/* <DisplayScreenSize /> */}</div>
      <div className='right menu item'>
        <Icon circular name='user' />
      </div>
    </div>
  );
};

export default Header;

// <Menu secondary pointing >
//   <Menu.Header
//     content='Dual N-Back Clone'

//   />
//   <Menu.Item
//     name='reviews'
//     //active={true}
//     onClick={() => console.log('Clicked Menu.Item')}
//   >
//     Reviews
//   </Menu.Item>
// </Menu>
