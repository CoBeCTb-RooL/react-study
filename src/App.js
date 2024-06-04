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
import MyModal from './components/UI/modals/MyModal';
import MyButton from './components/UI/buttons/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', content: 'Javascript and stuff!'},
    {id: 2, title: 'it\'s Python', content: 'Python is language!'},
    {id: 3, title: 'Delphi', content: 'Delphi is another language'},
  ])


  const [filter, setFilter] = useState({sort: '', query: ''})

  
  // const sortedPosts = useMemo(()=>{
  //   console.log('отработала ф-ция getSortedPosts :: "'+filter.sort+'"')
  //   if(filter.sort){
  //     return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
  //   }
  //   return posts
  // }, [filter, posts])


  // const sortedAndSearchedPosts = useMemo(()=>{
  //   return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.content.toLowerCase().includes(filter.query.toLowerCase()) )
  // }, [filter, sortedPosts])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  
  function addCreatedPost(newPost){
    setPosts([...posts, newPost])
    setIsModalVisible(false)
  }


  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
  }

  fetchPosts()

  function removePost(post){
    setPosts(posts.filter(p => p.id != post.id))
  }


  const [isModalVisible, setIsModalVisible] = useState(false)
  
  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>qweqweqwe</MyButton>

      <MyButton onClick={()=>setIsModalVisible(true)} style={{marginTop: '30px', }}>
        Создать пост
      </MyButton>

      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm 
          posts={posts} 
          creationCallback={addCreatedPost} 
        />
      </MyModal>
      

      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      
      <PostsList 
        title="Посты:" 
        posts={sortedAndSearchedPosts} 
        removingCallback={removePost} 
      />


      {/* <PostItem post={{id: 1, title: 'Javascript', content: 'Javascript and stuff!'}} /> */}



      <hr style={{marginTop: '100px'}}/>

      <Counter defaultNumber="3"/>
      <Counter /> 
      <hr/>
      <ClassCounter startNumber="7" />
      <ClassCounter startNumber="4" />
      <ClassCounter  />
      <hr/>
      <InputWithLabel />
      <hr/> 
    
    </div>
  );
}

export default App;
