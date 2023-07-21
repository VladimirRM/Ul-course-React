import React,{ useState} from 'react';
import './index.css'

import "./styles/App.css"
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/mymodal/MyModal'
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';

function App() {
const [posts,setPosts] = useState([

  {id:1, title: 'dd', body: 'vvption'},
  {id:2, title: 'aallo', body: 'description'},
  {id:3, title: 'ccllo', body: 'aescription'},
])
const [filter,setFilter] = useState({sort:'',query:''})
const [modal,setModal]  = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query)







const createPost = (newPost)=>{
     setPosts([...posts,newPost])
     setModal(false)
}
const removePost = (post)=>{
     setPosts(posts.filter(p=> p.id !== post.id))
}
return (
    <div className="App">
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
       <PostList remove={removePost} posts={sortedAndSearchedPosts}title='Post about Js'/>

   
     </div>
  );
}

export default App;
