import React,{useState} from 'react';
import './App.css';

function App() {

  const [value,setValue] = useState('')
  return (
    <div className="App">
      <div className='post'>
        <div className="post__content">
          <strong>1 Java script</strong>
          <div>JS lengvige</div>
        </div>
        </div>
        <div className="post__btns">
          <button>Delete Post</button>
        </div>
    </div>
  );
}

export default App;
