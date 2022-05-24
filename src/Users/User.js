import React  from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
 import '../Style/Card.css';
export function User({ user }) {
   
    const history = useNavigate();
    const Posts = () => {
        console.log("inside user post")
        history(`/${user.id}/posts`);
    }
    return (
         
            <div className="single-card">

                <Card  onClick={()=>Posts()} style={{ width: '25rem' }}>

                    <Card.Body>
                    <h1 className="card-text">{user.name}</h1>
                    
                        <Card.Text>
                            <h4 className="card-text">{user.description}</h4>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
       
    );
}