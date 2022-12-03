import About from "../components/pages/About";
import Login from "../components/pages/Login";
import Post from "../components/pages/Post";
import PostIdPage from "../components/pages/PostIdPage";

export const privateRoutes = [
   { id: 1, path: '/posts', element: Post },
   { id: 2, path: '/about', element: About },
   { id: 3, path: '/posts/:id', element: PostIdPage },
]
export const publicRoutes = [
   // { id: 1, path: '/login', element: Login },
   { id: 2, path: '/*', element: Login }
]