import React,{ useState} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
const [posts,setPosts] = useState([

  {id:1, title: 'Hello', body: 'description'},
  {id:2, title: 'Hello', body: 'description'},
  {id:3, title: 'Hello', body: 'description'},
])

const [post,setPost] = useState({title:'', body:''})


const addNewPost = (e)=>{
  e.preventDefault()

setPosts([...posts,{...post,id:Date.now()}])
setPost({title:'', body:''})

}




  return (
    <div className="App">
      <MyInput type="text" placeholder='Name post' 
       value={post.title}
       onChange={e=>setPost({...post, title: e.target.value})}
      />

      <MyInput type="text" placeholder='Description'
     value={post.body}
     onChange={e=>setPost({...post, body: e.target.value})}
      />
      <MyButton onClick={addNewPost} >Add post</MyButton>
     <PostList posts={posts}title='Post about Js'/>

   

    </div>
  );
}

export default App;
