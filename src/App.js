import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import { ClassCounter } from './components/ClassCounter';
import { InputWithLabel } from './components/InputWithLabel';
import PostItem from './components/Posts/PostItem';
import './styles/style.css'
import PostsList from './components/Posts/PostsList';
// import MyButton from './components/UI/buttons/MyButton';
// import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/Posts/PostForm';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', content: 'Javascript and stuff!'},
    {id: 2, title: 'Python', content: 'Python is language!'},
    {id: 3, title: 'Delphi', content: 'Delphi is another language'},
  ])

  
  function addCreatedPost(newPost){
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">

      <PostForm posts={posts} creationCallback={addCreatedPost} />

      <PostsList posts={posts} title="Посты на:" />


      {/* <PostItem post={{id: 1, title: 'Javascript', content: 'Javascript and stuff!'}} /> */}

      {/* <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>

      <Counter defaultNumber="3"/>
      <Counter /> 
      <hr/>
      <hr/>
      <ClassCounter startNumber="7" />
      <ClassCounter startNumber="4" />
      <ClassCounter  />
      <hr/>
      <hr/>
      <InputWithLabel />
      <hr/>
      <hr/> */}
    
    </div>
  );
}

export default App;
