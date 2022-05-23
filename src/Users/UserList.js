import { useState, useEffect } from "react"
import { User } from './User';
import '../Style/Card.css';

import axios from 'axios';

export const UserList = () => {

    // const userdata = []
    const [userData, setUserData] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUsers = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3000/api/v1/users`)

            const data = response.data
            setUserData(response.data.users)
            console.log("data", response.data.users)
            // userdata.push(data.users)
            // console.log("userdataaaa", userdata)



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

            
            <div className="card-holder">
          
            {
                userData?.map((post) => {
                    return <User user={post} />
                }

                )}


            </div>

        </>
    )
}
