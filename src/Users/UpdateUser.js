import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Style/Form.css';
import { useNavigate } from "react-router-dom";

export function UpdateUser() {
    const { user_id } = useParams();
    const initalValues = { name: "", descriprtion: "", image: "" }
    const [formValues, setFormValues] = useState(initalValues)
    const history = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });

    }
    const NavigateToHome = () => {
        history(`/`);
    }
    const GetUserValue = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3000/api/v1/users/${user_id}`).then((response) => {
                    const data = response.data.users;
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
        console.log("hello", event.target.image.files[0])
        data.append("user[name]", event.target.name.value);
        data.append("user[description]", event.target.description.value)


        console.log("data", data)
        submitToApi(data)
    }
    function submitToApi(data) {
        console.log("userid", user_id)
        fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
            headers: {

                "Accept": "application/json"
            },
            method: "PATCH",
            body: data
        })
            .then(response => response.json())
            .catch((error) => console.log)

        NavigateToHome();
    }
    return (

        <>
            <div className="form-container">
                <div className="form-block">

                    <form onSubmit={handleSubmit}  >
                        <div className="form-inputs">
                            <label className="form-inputs2"></label>
                            <input type="text" name="name" class="form-inputs3" placeholder={formValues.name} value={formValues.name} onChange={handleChange} />

                        </div>
                        <div className="form-inputs">
                            <label className="form-inputs2"></label>
                            <input type="text" name="description" class="form-inputs3" placeholder="description" onChange={handleChange} value={formValues.description} />

                        </div>

                        <div className="form-inputs">
                            <label className="form-inputs2"></label>
                            <input type="file" name="image" class="form-inputs3" placeholder="image" value={formValues.image} onChange={handleChange} />

                        </div>

                        <button type="submit"
                            className={"btn-all submit-btn Form-button "}>Edit</button>
                        <div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}