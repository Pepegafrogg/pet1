import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/styles.css'
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ query: '', sort: '' });
   const [visible, setVisible] = useState(false);
   const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort)
   const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
   })

   const addPost = (newPost) => {
      setPosts([...posts, newPost])
      setVisible(false)
   }
   const deletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId))
   }
   useEffect(() => {
      fetchPosts()
   }, []);
   return (
      <div className="App">
         {console.log(postError)}
         <MyButton style={{ marginTop: '30px' }} onClick={() => setVisible(true)}>Create post</MyButton>
         <MyModal visible={visible} setVisible={setVisible}> <PostForm addPost={addPost} /></MyModal>

         <hr style={{ margin: '15px 0' }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         {postError && <h1>Произошла ошибка {postError.message}</h1>}
         {isPostsLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
            : <PostList title={'Список постов'} posts={sortedAndSearchedPosts} deletePost={deletePost} />
         }



      </div>
   );
}

export default App;
