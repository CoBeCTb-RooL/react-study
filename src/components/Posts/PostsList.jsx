import React, { useState } from "react";
import PostItem from "./PostItem";

const PostsList = ({posts, title='qwe', removingCallback})=>{

  return (
    <>
    <h1 style={{textAlign: 'center'}}>{title} </h1>
      {posts && posts.length 
        ? posts.map(post=>
          <PostItem 
            removingCallback={removingCallback} 
            post={post} 
            key={post.id} 
          />
        )
       : <span>nichego net!</span>
      }
    </>
  )
}

export default PostsList
