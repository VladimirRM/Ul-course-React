import React,{ useState,useMemo} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';


import PostForm from './components/PostForm';
import MySelect from './components/UI/MySelect/MySelect';
import MyInput from './components/UI/input/MyInput'

function App() {
const [posts,setPosts] = useState([

  {id:1, title: 'dd', body: 'vvption'},
  {id:2, title: 'aallo', body: 'description'},
  {id:3, title: 'ccllo', body: 'aescription'},
])
const [selectedSort, setSelectedSort]= useState('')
const [searchQuery, setSearchQuery]= useState('')


function  getSortedPosts(){
  console.log("sorted done")
     if(selectedSort){
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
     }
     return posts
}

const sortedPosts = getSortedPosts()

const createPost = (newPost)=>{
     setPosts([...posts,newPost])
}
const removePost = (post)=>{
     setPosts(posts.filter(p=> p.id !== post.id))
}

const sortPosts = (sort)=>{
console.log(sort)
setSelectedSort(sort);

}
return (
    <div className="App">
     <PostForm create={createPost}/>
     <hr style={{margin: '15px'}} />
     <div>
      <MyInput
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      placeholder="Search..."
      />
      <MySelect
      value={selectedSort}
      onChange={sortPosts}
      defaultValue='Select'
      options={[
        {value: 'title',name: 'ON name'},
        {value: 'body',name: 'ON discription'}
      ]}
      />
    


     </div>
     {posts.length !== 0
      ?  <PostList posts={sortedPosts}title='Post about Js'remove={removePost}/>
      :<h1 style={{textAlign: 'center'}}>Posts not found!</h1>
    }
    

   

    </div>
  );
}

export default App;
