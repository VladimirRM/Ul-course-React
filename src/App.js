import React,{useState} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';

function App() {
const [posts,setPosts] = useState([
  {id:1, title: 'Hello', body: 'description'},
  {id:2, title: 'Hello', body: 'description'},
  {id:3, title: 'Hello', body: 'description'},
])
const [posts2,setPosts2] = useState([
  {id:1, title: 'Python', body: 'description'},
  {id:2, title: 'Python', body: 'description'},
  {id:3, title: 'Python', body: 'description'},
])

  return (
    <div className="App">
     <PostList 
     posts={posts}title='Post list 1'/>
   

    </div>
  );
}

export default App;
