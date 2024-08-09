import React, { useState } from "react";
// import Login from "../pages/Login";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateLoginForm(username, password);
        setErrors(validationErrors);

     // If no errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form is valid, Submitting');
     // Submit form data to server
            }
    };
  
    function validateLoginForm(username, password) {
        const errors = {}
            if(!username || username.trim() === '') {
                errors.username = 'Username is required';
        //makes sure the username is provided
        }
        if (!password || password.trim() === '') {
            errors.password= 'Password is required'
        } else if (password.length < 5) {
            errors.password = 'Password must be at least 5 characters long';
        }
    } 
    return errors;
}
export default LoginForm


      