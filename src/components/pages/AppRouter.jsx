import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Nav from './Nav';
import Posts from './Post';
import PostIdPage from './PostIdPage';

const AppRouter = () => {
   return (
      <Routes>
         {/* <Route path="/" element={<Nav />} /> */}
         <Route path='/posts' element={<Posts />} />
         <Route path='/about' element={<About />} />
         <Route path='/posts/:id' element={<PostIdPage />} />
         {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
   );
}

export default AppRouter;
