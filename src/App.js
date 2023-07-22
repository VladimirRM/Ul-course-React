import React,{ useEffect, useState} from 'react';
import './index.css'

import "./styles/App.css"
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/mymodal/MyModal'
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostSevise';
import Loader from './components/Loader/Loader';
import { useFetching } from './components/hooks/UseFetching';

function App() {
const [posts,setPosts] = useState([
])
const [filter,setFilter] = useState({sort:'',query:''})
const [modal,setModal]  = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query)
const [limit,setLimit ] = useState(10)
const [page,setPage ] = useState(1)
const [fetchPosts,isPostLoading,postError]= useFetching(async()=>{
  const response =  await PostService.getAll(limit,page)
  setPosts(response.data)
  console.log(response.headers['x-total-count'])
  setTotalCount(response.headers['x-total-count'])
})
const [totalCount, setTotalCount] = useState(0)
  
useEffect(()=>{
   fetchPosts()
},[])

const createPost = (newPost)=>{
     setPosts([...posts,newPost])
     setModal(false)
}





const removePost = (post)=>{
     setPosts(posts.filter(p=> p.id !== post.id))
}
return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <MyButton onClick={()=> setModal(true)}
        style={{marginTop: '30px'}}
      >
        Create user...
      </MyButton>
      
      <MyModal visible={modal} setVisible={setModal}>
           <PostForm create={createPost}/>
     </MyModal>
     <hr style={{margin: '15px 0'}} />
     <PostFilter filter={filter} setFilter={setFilter}/>
     <div>

    </div>
    {postError && <h1>Error${postError}</h1>}
    {isPostLoading ?
       <div style={{display: 'flex' ,justifyContent:'center' , marginTop: '50px'}}>
        <Loader />
        </div>
      :  
      <PostList remove={removePost} posts={sortedAndSearchedPosts}title='Post about Js'/>
  }
    

   
     </div>
  );
}

export default App;
