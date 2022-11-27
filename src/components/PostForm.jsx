import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = (props) => {
   const [post, setPost] = useState({ body: '', title: '', });
   const addPost = (e) => {
      e.preventDefault()
      const newPost = { ...post, id: Date.now() }
      props.addPost(newPost)
      setPost({ body: '', title: '' })
   }
   return (
      <form>
         <MyInput onChange={(e) => setPost({ ...post, title: e.target.value })} placeholder={"Заголовок поста"} type={'text'} value={post.title} />
         <MyInput onChange={(e) => setPost({ ...post, body: e.target.value })} placeholder={"Описание поста"} type={'text'} value={post.body} />
         <MyButton onClick={addPost}>Добавить пост</MyButton>
      </form>
   );
}

export default PostForm;
