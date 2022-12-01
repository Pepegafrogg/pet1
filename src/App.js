import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/pages/AppRouter';
import Nav from './components/pages/Nav';


const App = () => {
   return (
      <BrowserRouter>
         <Nav />
         <AppRouter />
      </BrowserRouter>
   );
}

export default App;
