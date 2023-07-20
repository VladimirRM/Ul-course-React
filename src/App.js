import React,{useState} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
const [posts,setPosts] = useState([
  {id:1, title: 'Hello', body: 'description'},
  {id:2, title: 'Hello', body: 'description'},
  {id:3, title: 'Hello', body: 'description'},
])


  return (
    <div className="App">
      <input type="text" placeholder='Name post' />
      <input type="text" placeholder='Description'/>
      <MyButton >Add post</MyButton>
     <PostList posts={posts}title='Post about Js'/>

   

    </div>
  );
}

export default App;
