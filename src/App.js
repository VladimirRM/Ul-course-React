import React,{useState} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';

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
      <button>Add post</button>
     <PostList posts={posts}title='Post about Js'/>

   

    </div>
  );
}

export default App;
