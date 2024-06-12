import React, { useState } from "react";
import MyButton from "../UI/buttons/MyButton";

const PostItem = (props)=>{

  // function updatePost(post){
  //   alert(post.title)
    
  // }

  function deletePost(post){
    if(window.confirm('Удалить пост? ')){
      alert(post.id+': 0000000000')
      props.removingCallback(props.post)
    }
  }

  return (
        <div className="component-wrapper111">
            <div className="post">
              <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                  {props.post.body}
                </div>
              </div>
              <div className="post__btns">
                {/* <MyButton onClick={()=>updatePost(props.post)}>редактировать</MyButton> */}
                <MyButton onClick={()=>deletePost(props.post)}>Удалить</MyButton>
              </div>
            </div>
        </div>
    )
}

export default PostItem
