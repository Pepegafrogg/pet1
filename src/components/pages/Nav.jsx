import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (

      <div className='navBar'>
         <div className='.navBar__links'>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/about'}>About</NavLink>

         </div>
      </div>
   );
}

export default Nav;
