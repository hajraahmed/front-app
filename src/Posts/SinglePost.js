import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import '../Style/SinglePost.css';
import axios from 'axios';

export const SinglePost = () => {
  
    const [PostData, setPostData] = useState([])
    const { user_id } = useParams();
    const { post_id } = useParams();
   
    const getUsers = async () => {
        try {
            await axios
                .get(`http://localhost:3000/api/v1/users/${user_id}/posts/${post_id}`).then((response) => {

                 
                    setPostData(response.data.posts)
                });
           



        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
        console.log("useEff")

    }, [])




    return (
       
        <>


            <div className="post-card-holder">

                <h1>{PostData.title}</h1>
                <p>{ PostData.content}</p>
                
               

            </div>

        </>
    )
}
