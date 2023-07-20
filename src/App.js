import React,{useState} from 'react';
import "./styles/App.css"
import PostItem from './components/PostItem';

function App() {
const [posts,setPosts] = useState([
  {id:1, title: 'Hello', body: 'description'},
  {id:2, title: 'Hello', body: 'description'},
  {id:3, title: 'Hello', body: 'description'},
])

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Posts List</h1>
     {posts.map((post)=>(
      <PostItem
      post={post}
      key={post.id}  
      />

     ))}
   

    </div>
  );
}

export default App;
