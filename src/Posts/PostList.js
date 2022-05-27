import { useState, useEffect } from "react"
import { Post } from "./Post"
import { useParams } from 'react-router-dom';
import { PostForm } from "./PostForm";
import axios from 'axios';
import '../Style/Post.css';

export const PostList = (props) => {
  const [posts, setPosts] = useState([])
  const [isUpdate, setUpdate] = useState(false)
  const { user_id } = useParams();

    useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    try {
      const response = await axios
        .get(`http://localhost:3000/api/v1/users/${user_id}/posts`)

      const data = response.data
      console.log("postdata", data)
      setPosts(response.data.posts)

    } catch (error) {
      console.log(error)
    }
  }

  const updatePostList = () => {
    let _posts = posts;

    setPosts(_posts);

    setUpdate(true)
  }

  return (
    <>
      <div className="post-card-holder">
        {posts?.map((post) => {
          return <Post
            postdata={post}
          />
        })}

      </div>
      <PostForm/>

    </>
  )
}