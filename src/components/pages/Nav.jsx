import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context';
import MyButton from '../UI/button/MyButton';

const Nav = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext)
   const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
   }
   return (

      <div className='navBar'>
         <MyButton onClick={logout}>Выйти</MyButton>
         <div className='.navBar__links'>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/about'}>About</NavLink>

         </div>
      </div>
   );
}

export default Nav;
