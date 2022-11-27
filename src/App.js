import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/styles.css'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: 'asdJavaScript1', body: 'bDescription' },
      { id: 2, title: 'gdfJavaScript2', body: 'cDescription' },
      { id: 3, title: 'fffJavaScript3', body: 'Description' },
   ]);
   const [selectedSort, setSelectedSort] = useState('');
   const sortPosts = (sort) => {
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

   const addPost = (newPost) => {
      setPosts([...posts, newPost])
   }
   const deletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId))
   }
   return (
      <div className="App">
         <PostForm addPost={addPost} />
         <hr style={{ margin: '15px 0' }} />
         <div>
            <MySelect
               onChange={sortPosts}
               value={selectedSort}
               defaultValue={'Сортировка'}
               options={[
                  { value: 'title', name: 'По названию' },
                  { value: 'body', name: 'По описанию' }
               ]}
            />
         </div>

         {posts.length !== 0
            ? <PostList title={'Список постов'} posts={posts} deletePost={deletePost} />
            : <h1 style={{ textAlign: 'center' }}>Посты отсутствуют</h1>
         }
      </div>
   );
}

export default App;
