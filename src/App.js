import React,{useRef, useState} from 'react';
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

const [title,setTitle] = useState('')
const [body,setBody] = useState('')

const addNewPost = (e)=>{
  e.preventDefault()

   const newPost = {
    id:Date.now(),
      title,
      body,
   }
setPosts([...posts,newPost])
setTitle('')
setBody('')

}

const bodyInputRef = useRef()


  return (
    <div className="App">
      <MyInput type="text" placeholder='Name post' 
       value={title}
       onChange={e=>setTitle(e.target.value)}
      />

      {/* <input type="text"
      ref={bodyInputRef}
      /> */}
      <MyInput type="text" placeholder='Description'
     value={body}
     onChange={e=>setBody(e.target.value)}
      />
      <MyButton onClick={addNewPost} >Add post</MyButton>
     <PostList posts={posts}title='Post about Js'/>

   

    </div>
  );
}

export default App;
