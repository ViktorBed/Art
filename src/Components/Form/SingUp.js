import React, {useState} from "react";

import {Form} from "./Form";
import "./form.css"

export function SingUp() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-26 characters and include at least 1 letter and 1 number",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,26}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputs.required) {
            window.location.href = "https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs";
        }
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };



    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <div className="register">Register
                    </div>

                {inputs.map((input) => (
                    <Form
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="submit">Submit</button>
            </form>
        </div>
    );
}