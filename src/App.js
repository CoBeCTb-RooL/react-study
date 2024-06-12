import './styles/style.css'
import React, { useState, useRef, useMemo, useEffect } from 'react';
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
import PostService from './API/PostService';
import { countPages, wait } from './lib/helpers';
import MyLoader from './components/UI/loaders/MyLoader';
import { useFetching } from './hooks/useFetching';
import MyPages from './components/UI/pages/MyPages';


function App() {

  const [posts, setPosts] = useState([
    // {id: 1, title: 'Javascript', body: 'Javascript and stuff!'},
    // {id: 2, title: 'it\'s Python', body: 'Python is language!'},
    // {id: 3, title: 'Delphi', body: 'Delphi is another language'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(1)
  const [limit, setLimit] = useState(10)

  //  здесь интересный момент! 
  //  именно тут создастся функция, которая будет запущена хуком useEffect
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, currentPage)=>{
    const response = await PostService.getAll(limit, currentPage)
    setTotalCount(response.headers['x-total-count'])
    setPosts(response.data)
  })

  
  // console.log(pagesArr);

  // alert(fetchPosts)


  //  и только при загрузке стрельнет функция,
  //  приготовленная нам в хуке useFetching
  useEffect(()=>{
    // console.log('use effect! '+Math.random())
    // alert(123)
    fetchPosts(limit, currentPage)
  }, [  ])

  
  function addCreatedPost(newPost){
    setPosts([...posts, newPost])
    setIsModalVisible(false)
  }


  function removePost(post){
    setPosts(posts.filter(p => p.id != post.id))
  }

  const changePage = (p)=>{
    setCurrentPage(p);
    fetchPosts(limit, p)
  }

  
  return (
    <div className="App">
      
      <button onClick={fetchPosts}>get posts</button>

      <MyButton onClick={()=>setIsModalVisible(true)} style={{marginTop: '30px', }}>Создать пост</MyButton>

      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm posts={posts} creationCallback={addCreatedPost} />
      </MyModal>
      

      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      

      {postError && 
        <h1>Произошла ошибка! {postError}</h1>
      }

      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
        : <PostsList 
            title="Посты:" 
            totalCount={totalCount}
            posts={sortedAndSearchedPosts} 
            removingCallback={removePost} 
          />
      }
      

      <MyPages
        callback={changePage}
        currentPage={currentPage}
        totalPagesCount={countPages(totalCount, limit)}
      />
      sssssssssssss
      
      


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
