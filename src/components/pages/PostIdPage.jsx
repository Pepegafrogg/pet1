import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);
   const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
      const response = await PostService.getPostById(id)
      setPost(response.data)
   })
   const [fetchCommentsForPost, isLoadingComments, errorComments] = useFetching(async (id) => {
      const response = await PostService.getCommentsForPost(id)
      setComments(response.data)
   })

   useEffect(() => {
      fetchPostById(params.id)
      fetchCommentsForPost(params.id)
   }, [params.id]);
   return (
      <div>
         <h1>Вы открыли страницу поста с ID = {params.id}</h1>
         {isLoadingPost
            ? <Loader />
            : <div>{post.id} {post.title}</div>
         }
         <h1>
            Комментарии
         </h1>
         {isLoadingComments
            ? <Loader />
            : <div> {comments.map(com =>
               <div key={com.id} style={{ marginTop: '15px' }}>
                  <h5>{com.email}</h5>
                  <div>{com.body}</div>
               </div>
            )}
            </div>
         }

      </div>
   );
}

export default PostIdPage;

