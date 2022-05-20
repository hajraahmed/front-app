import { useState, useEffect } from "react"
import { Post } from "./Post"
import { PostForm } from './PostForm'
 
import axios from 'axios';

export const PostList = () => {
  const [posts, setPosts] = useState ([])
  const [isUpdate, setUpdate] = useState (false)

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/api/v1/posts')

      const data = response.data

      setPosts(data.reverse())

    } catch(error) {
      console.log(error)
    }
  }

  const updatePostList = (IPost) => {
    let _posts = posts;
    let post = IPost
    _posts.unshift(post);
    setPosts(_posts);

    setUpdate(true)
  }
  
  return (
    <>
      <PostForm updatePostList={updatePostList} />
      
      <h1>Post List</h1>
      {posts.map((post) => (
        <Post
          key={post.id} 
          title={post.title}
          content={post.content}
        />
      ))}
    </>
  )
}