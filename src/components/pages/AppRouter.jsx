import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes, routes } from '../../router/router';

const AppRouter = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext)
   return (

      <Routes>
         {/* <Route path="/" element={<Nav />} /> */}
         {/* <Route path='/posts' element={<Post />} />
         <Route path='/about' element={<About />} />
         <Route path='/posts/:id' element={<PostIdPage />} />
         <Route path="/" element={<Post />} />
         <Route path="/*" element={<Error />} /> */}
         {isAuth
            ? privateRoutes.map(route =>
               <Route key={route.id} path={route.path} element={<route.element />} />)
            : publicRoutes.map(route =>
               <Route key={route.id} path={route.path} element={<route.element />} />)
         }
      </Routes>
   );
}

export default AppRouter;
