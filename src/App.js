import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/pages/AppRouter';
import Nav from './components/pages/Nav';
import { AuthContext } from './context';


const App = () => {
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
      if (localStorage.getItem('auth')) {
         setIsAuth(true)
      }
   }, []);
   return (
      <BrowserRouter>
         <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <Nav />
            <AppRouter />
         </AuthContext.Provider>
      </BrowserRouter>
   );
}

export default App;
