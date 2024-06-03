import React, { useState } from "react";

const PostItem = (props)=>{

  // const deletePost = (id) =>{
  //   // alert(id)
  // }
function deletePost(id){
  alert(id)
}

  return (
        <div className="component-wrapper111">
            <div className="post">
              <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                  {props.post.content}
                </div>
              </div>
              <div className="post__btns">
                <button onClick={deletePost}>Удалить</button>
              </div>
            </div>
        </div>
    )
}

export default PostItem
