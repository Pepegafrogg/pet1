import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import '../../styles/styles.css'
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pajes";
import Pagination from "../UI/Pagination/Pagination";
import { useObserver } from "../../hooks/useObserver";
import MySelect from "../UI/select/MySelect";

function Post() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ query: '', sort: '' });
   const [visible, setVisible] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort)
   const lastElement = useRef()
   const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
   })

   const addPost = (newPost) => {
      setPosts([...posts, newPost])
      setVisible(false)
   }
   const deletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId))
   }

   useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1)
   })

   useEffect(() => {
      fetchPosts(limit, page)
   }, [page, limit]);
   return (
      <div className="App">
         {/* {console.log(postError)} */}
         <MyButton style={{ marginTop: '30px' }} onClick={() => setVisible(true)}>Create post</MyButton>
         <MyModal visible={visible} setVisible={setVisible}> <PostForm addPost={addPost} /></MyModal>

         <hr style={{ margin: '15px 0' }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue={'Кол-во элементов на странице'}
            options={[
               { value: 5, name: '5' },
               { value: 10, name: '10' },
               { value: 25, name: '25' },
               { value: -1, name: 'Показать все' },
            ]}
         />
         {postError && <h1>Произошла ошибка {postError.message}</h1>}
         <PostList title={'Список постов'} posts={sortedAndSearchedPosts} deletePost={deletePost} />
         <div ref={lastElement} style={{ height: '20px', background: 'red' }}></div>
         {isPostsLoading && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>}
         <Pagination totalPages={totalPages} page={page} changePage={setPage} />



      </div>
   );
}

export default Post;
