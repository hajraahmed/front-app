import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Style/Form.css';
 import { useNavigate } from 'react-router-dom';

export function EditPost() {
    const { user_id } = useParams();
    const { post_id } = useParams();
    const history = useNavigate();
    const initalValues = { title: "", content: "" }
    const [formValues, setFormValues] = useState(initalValues)
   

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });

    }
    const NavigateToHome = () =>
    {
        history(`/`);
    }
    const GetUserValue = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3000/api/v1/users/${user_id}/posts/${post_id}`).then((response) => {
                    const data = response.data.posts;
                    console.log("data", data)
                    setFormValues({ ...formValues, data });


                    console.log("formvaluesfetuser", formValues)

                });

            //setFormValues(response.data.users)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetUserValue()
        console.log("formvalue", formValues)

    }, [])
    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();

        data.append("post[title]", event.target.title.value);
        data.append("post[content]", event.target.content.value)


        console.log("data", data)
        submitToApi(data)
    }
    function submitToApi(data) {
        console.log("sdds", data)
        console.log("userid", user_id)
        fetch(`http://localhost:3000/api/v1/users/${user_id}/posts/${post_id}`, {
            headers: {

                "Accept": "application/json"
            },
            method: "PATCH",
            body: data
        })
            .then(response => response.json())
            .catch((error) => console.log)


    }
    return (

        <>
            <div className="form-container">
                <div className="form-block">

                    <form onSubmit={handleSubmit}  >
                        <div className="form-inputs">
                            <label className="form-inputs2"></label>
                            <input type="text" name="title" class="form-inputs3" placeholder="title" value={formValues.title} onChange={handleChange} />

                        </div>
                        <div className="form-inputs">
                            <label className="form-inputs2"></label>
                            <input type="text" name="content" class="form-inputs3" placeholder="content" onChange={handleChange} value={formValues.content} />

                        </div>



                        <button type="submit"
                            className={"btn-all submit-btn Form-button "} onClick={()=>NavigateToHome()}>Edit</button>
                        <div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}