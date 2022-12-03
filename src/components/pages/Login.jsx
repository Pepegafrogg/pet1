import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext)
   const login = (e) => {
      e.preventDefault()
      setIsAuth(true)
      localStorage.setItem('auth', 'true')

   }
   return (
      <div>
         <h1>Страница для логина</h1>
         <form onSubmit={login}>
            <MyInput type={'text'} placeholder={'Write your login'} />
            <MyInput type={'password'} placeholder={'Write your password'} />
            <MyButton >Login</MyButton>
         </form>
      </div>
   );
}

export default Login;
