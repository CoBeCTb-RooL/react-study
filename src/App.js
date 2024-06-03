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
import PostFilter from './components/Posts/PostFilter';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', content: 'Javascript and stuff!'},
    {id: 2, title: 'it\'s Python', content: 'Python is language!'},
    {id: 3, title: 'Delphi', content: 'Delphi is another language'},
  ])


  // const [selectedSort, setSelectedSort] = useState('title')
  // const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState({sort: '', query: ''})

  
  const sortedPosts = useMemo(()=>{
    console.log('отработала ф-ция getSortedPosts :: "'+filter.sort+'"')
    if(filter.sort){
      return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter, posts])


  const sortedAndSearchedPosts = useMemo(()=>{
    // console.log(searchQuery)
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.content.toLowerCase().includes(filter.query.toLowerCase()) )
  }, [filter, sortedPosts])

  
  function addCreatedPost(newPost){
    setPosts([...posts, newPost])
  }

  function removePost(post){
    setPosts(posts.filter(p => p.id != post.id))
  }

  // function sortPosts(sort){
  //   console.log('fired::: sortPosts')
  //   setFilter({...filter, sort: sort})
  // }

  
  return (
    <div className="App">

      <PostForm 
        posts={posts} 
        creationCallback={addCreatedPost} 
      />

      <div>
        <hr style={{margin: '15px 0'}}/>
        
        <PostFilter
          filter={filter}
          setFilter={setFilter}
          // sortPosts={sortPosts}
         />
        
      </div>


      <PostsList 
        title="Посты:" 
        posts={sortedAndSearchedPosts} 
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
