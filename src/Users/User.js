import React  from "react";
import  Card  from 'react-bootstrap/Card';
 import { useNavigate } from 'react-router-dom';
 import '../Style/Card.css';
export function User({ user }) {
   
    const history = useNavigate();
    const Posts = () => {
            history(`/${user.id}/posts`);
    }
    const Edit = () => {
        history(`/${user.id}/edit`);
    }
    const Delete = () => {
        console.log("inside delete")
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {

            headers: {

                "Accept": "application/json"
            },
            method: "DELETE",


        })
            .then(response => response.json())
            .catch((error) => console.log)
    }
    return (
         
            <div className="single-card">

            <Card  style={{ width: '25rem' }}>
                {console.log("userimage",user.image)}
                <Card.Img variant="top" src={user.image} />
                <Card.Body onClick={() => Posts()}>
                    <h1 className="card-text">{user.name}</h1>
                    
                        <Card.Text>
                            <h4 className="card-text">{user.description}</h4>
                        </Card.Text>
                    
                </Card.Body>
                <button variant="primary" onClick={() => Edit()}>Edit User</button>
                <button variant="primary" onClick={() => Delete()}>Delete User</button>
            </Card>
          
            </div>
       
    );
}