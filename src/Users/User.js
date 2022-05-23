import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import '../Style/Card.css';


export function User({ user }) {
    return (
         
            <div className="single-card">

                <Card style={{ width: '25rem' }}>

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