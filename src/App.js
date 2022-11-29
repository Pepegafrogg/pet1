import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/styles.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: 'asdJavaScript1', body: 'bDescription' },
      { id: 2, title: 'gdfJavaScript2', body: 'cDescription' },
      { id: 3, title: 'fffJavaScript3', body: 'Description' },
   ]);
   const [filter, setFilter] = useState({ query: '', selectedSort: '' });
   const [visible, setVisible] = useState(false);


   const sortedPosts = useMemo(() => {
      if (filter.selectedSort.length > 0) {
         return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]))
      }
      return posts
   }, [posts, filter.selectedSort])

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
   }, [filter.query, sortedPosts])

   const addPost = (newPost) => {
      setPosts([...posts, newPost])
      setVisible(false)
   }
   const deletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId))
   }
   return (
      <div className="App">
         <MyButton style={{ marginTop: '30px' }} onClick={() => setVisible(true)}>Create post</MyButton>
         <MyModal visible={visible} setVisible={setVisible}> <PostForm addPost={addPost} /></MyModal>

         <hr style={{ margin: '15px 0' }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostList title={'Список постов'} posts={sortedAndSearchedPosts} deletePost={deletePost} />

      </div>
   );
}

export default App;
