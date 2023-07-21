import React,{ useState,useMemo} from 'react';
import "./styles/App.css"
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/mymodal/MyModal'

function App() {
const [posts,setPosts] = useState([

  {id:1, title: 'dd', body: 'vvption'},
  {id:2, title: 'aallo', body: 'description'},
  {id:3, title: 'ccllo', body: 'aescription'},
])
const [filter,setFilter] = useState({sort:'',query:''})
const [modal,setModal]  = useState(false)




const sortedPosts = useMemo(()=>{
  console.log("sorted done")

  if(filter.sort){
    return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
   }
   return posts

},[filter,posts])

const sortAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
},[filter.query,sortedPosts])

const createPost = (newPost)=>{
     setPosts([...posts,newPost])
}
const removePost = (post)=>{
     setPosts(posts.filter(p=> p.id !== post.id))
}
return (
    <div className="App">
      
      <MyModal visible={modal} setVisible={setModal}>
           <PostForm create={createPost}/>
     </MyModal>
     <hr style={{margin: '15px 0'}} />
     <PostFilter filter={filter} setFilter={setFilter}/>
     <div>

    </div>
       <PostList remove={removePost} posts={sortAndSearchedPosts}title='Post about Js'/>

   
     </div>
  );
}

export default App;
