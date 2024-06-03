import React, { useState } from "react";
import PostItem from "./PostItem";
import MyButton from '../UI/buttons/MyButton'
import MyInput from '../UI/inputs/MyInput'

const PostForm = ({posts, creationCallback})=>{

  const [postFormInputs, setPostFormInputs] = useState({title: '', body: ''})

  function addNewPost(e){
    // let posts = props.posts
    e.preventDefault()
    let errors = []
    if(!postFormInputs.title){
      errors.push('no title! ')
    } 
    if(!postFormInputs.body){
      errors.push('no post body!')
    }

    //  всё норм, добавляем пост
    if(!errors.length){
      const newPost = {
        id: Math.max(...posts.map(i => i.id)) + 1,
        title: postFormInputs.title,
        content: postFormInputs.body
      }
      creationCallback(newPost)
      setPostFormInputs({title: '', body: ''})
    } else {
      let errMsg = 'Возникли ошибки:'
      errors.forEach(function(v, k){
        errMsg+="\n- "+v
      })
      alert(errMsg)
    }
  }


  return (
    <>
    <form>
        {/* управляемый компонент */}
        <MyInput type="text" placeholder='Название поста' value={postFormInputs.title} onChange={e=>{setPostFormInputs({...postFormInputs, title: e.target.value});}}/> 

        {/* неуправляемый компонент */}
        <MyInput type="text" placeholder='Текст' value={postFormInputs.body} onChange={e=>{setPostFormInputs({...postFormInputs, body: e.target.value});}} />

        {/* <input type="text" placeholder='Текст' ref={bodyInputRef}/> */}
        <MyButton onClick={addNewPost} type="submit">Создать пост</MyButton>
      </form>
    </>
    )
}

export default PostForm
