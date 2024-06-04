import React, { useState } from "react";
import PostItem from "./PostItem";
import MyButton from '../UI/buttons/MyButton'
import MyInput from '../UI/inputs/MyInput'

const PostForm = ({posts, creationCallback})=>{

  const [postFormInputs, setPostFormInputs] = useState({title: '', body: ''})

  function createPost(e){
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
        body: postFormInputs.body
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
        <MyInput type="text" placeholder='Название поста'  value={postFormInputs.title} onChange={e=>{setPostFormInputs({...postFormInputs, title: e.target.value});}} /> 

        <MyInput type="text" placeholder='Текст' value={postFormInputs.body} onChange={e=>{setPostFormInputs({...postFormInputs, body: e.target.value});}} />

        <MyButton onClick={createPost} type="submit">Создать пост</MyButton>
      </form>
    </>
    )
}

export default PostForm
