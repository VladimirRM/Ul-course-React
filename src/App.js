import React,{ useState} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';


import PostForm from './components/PostForm';

function App() {
const [posts,setPosts] = useState([

  {id:1, title: 'Hello', body: 'description'},
  {id:2, title: 'Hello', body: 'description'},
  {id:3, title: 'Hello', body: 'description'},
])

const createPost = (newPost)=>{
     setPosts([...posts,newPost])
}
const removePost = (post)=>{
     setPosts(posts.filter(p=> p.id !== post.id))
}
// const removePost = (post,id)=>{
//      setPosts([...posts].filter(post=> post.id !== id))
// }
return (
    <div className="App">
     <PostForm create={createPost}/>
     <div>
      <select>
        <option value="value1">Name</option>
        <option value="value2">Discription</option>
        <option value=""></option>
      </select>
     </div>
     {posts.length !== 0
      ?  <PostList posts={posts}title='Post about Js'remove={removePost}/>
      :<h1 style={{textAlign: 'center'}}>Posts not found!</h1>
    }
    

   

    </div>
  );
}

export default App;
