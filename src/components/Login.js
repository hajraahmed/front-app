import { React,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import '../Style/Header.css';

export default function Login() {
    const GetUserValue = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3000/api/v1/users`).then((response) => {
                    const data = response.data.users;
                    console.log("data", data)
                     ;


                     

                });

            //setFormValues(response.data.users)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetUserValue()
       

    }, [])
    

    return (

        <div>
            <div className='header'>

                <nav className='navigation'>
                    <ul className='nav-items2'>
                        <li className='list-items'>
                            <Link to="/" className='active-state header-button'>Home </Link>
                        </li>
                        <li className='list-items'>
                            <Link to="/about" className='active-state header-button'>About</Link>
                        </li>
                        <li className='list-items'>
                            {/*Item()*/}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
