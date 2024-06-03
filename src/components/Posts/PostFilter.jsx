import React, { useState } from "react";
import PostItem from "./PostItem";
import MyButton from '../UI/buttons/MyButton'
import MyInput from '../UI/inputs/MyInput'
import MySelect from "../UI/selects/MySelect";

const PostFilter = ({filter, setFilter})=>{
  // console.log(filter)

  return (
    <>
      <MyInput placeholder="Поиск..." 
        value={filter.query} 
        onChange={(e)=>setFilter({...filter, query: e.target.value})} 
      />
          
      <MySelect 
        defaultValue='-сортировка по-'
        value={filter.sort}
        onChange={(selectedSort)=>setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'title', name: 'по названию'},
          {value: 'content', name: 'по тексту'},
        ]}
      />
    </>
  )
}

export default PostFilter
