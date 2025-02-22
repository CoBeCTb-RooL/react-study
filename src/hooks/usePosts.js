import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(()=>{
        console.log('отработала ф-ция getSortedPosts :: "'+sort+'"')
        if(sort){
          return [...posts].sort((a, b)=> a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts]
    )

    return sortedPosts
}


export const usePosts = (posts, sort, query)=>{
    const sortedPosts = useSortedPosts(posts, sort) || []
    // alert(sortedPosts.length)

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase()) )
      }, [query, sortedPosts]
    )

    return sortedAndSearchedPosts
}