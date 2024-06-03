import './styles/style.css'
import React, { useState, useRef, useMemo } from 'react';
import Counter from './components/Counter';
import { ClassCounter } from './components/ClassCounter';
import { InputWithLabel } from './components/InputWithLabel';
import PostItem from './components/Posts/PostItem';
import PostsList from './components/Posts/PostsList';
import PostForm from './components/Posts/PostForm';
import MySelect from './components/UI/selects/MySelect';
import MyInput from './components/UI/inputs/MyInput';


function App() {

  const [selectedSort, setSelectedSort] = useState('title')
  const [searchQuery, setSearchQuery] = useState('')

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', content: 'Javascript and stuff!'},
    {id: 2, title: 'it\'s Python', content: 'Python is language!'},
    {id: 3, title: 'Delphi', content: 'Delphi is another language'},
  ])

  const sortedPosts = useMemo(()=>{
    console.log('отработала ф-ция getSortedPosts :: "'+selectedSort+'"')
    if(selectedSort){
      return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])
  
  function addCreatedPost(newPost){
    setPosts([...posts, newPost])
  }

  function removePost(post){
    setPosts(posts.filter(p => p.id != post.id))
  }

  function sortPosts(sort){
    setSelectedSort(sort)
  }



  
  return (
    <div className="App">

      <PostForm 
        posts={posts} 
        creationCallback={addCreatedPost} 
      />

      <div>
        <hr style={{margin: '15px 0'}}/>
        
        <MyInput placeholder="Поиск..." 
          value={searchQuery} 
          onChange={(e)=>setSearchQuery(e.target.value)} 
        />
        
        <MySelect 
          defaultValue='-сортировка по-'
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value: 'title', name: 'по названию'},
            {value: 'content', name: 'по тексту'},
          ]}
        />
        
      </div>


      <PostsList 
        title="Посты:" 
        posts={sortedPosts} 
        removingCallback={removePost} 
      />


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
