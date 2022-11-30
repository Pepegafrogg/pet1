import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, deletePost }) => {
   if (!posts.length) {
      return <h1 style={{ textAlign: 'center' }}>Посты отсутствуют</h1>
   }
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <TransitionGroup>
            {posts.map((post, index) =>
               <CSSTransition key={post.id} timeout={500} classNames={'post'}>
                  <PostItem post={post} number={index + 1} deletePost={deletePost} />
               </CSSTransition>
            )}
         </TransitionGroup>

      </div>
   );
}

export default PostList;
