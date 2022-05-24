import { useState, useEffect } from "react"
import { User } from './User';
import '../Style/Card.css';

import axios from 'axios';

export const UserList = () => {
 
    const [userData, setUserData] = useState([])
    const getUsers = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3000/api/v1/users`)

            const data = response.data
            setUserData(response.data.users)
            
         



        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
      

    }, [])




    return (
        <>

            
            <div className="card-holder">
          
            {
                userData?.map((userdata) => {
                    return <User user={userdata} />
                }

                )}


            </div>

        </>
    )
}
