import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, deletePost }) => {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         {posts.map((post, index) =>
            <PostItem key={post.id} post={post} number={index + 1} deletePost={deletePost} />
         )}
      </div>
   );
}

export default PostList;