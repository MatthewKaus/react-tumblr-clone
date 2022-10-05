import React, { useState } from 'react'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {

    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    });
    const [addUser] = useMutation(ADD_USER);
    const [showAlert, setShowAlert] = useState(false);


    const handleInputChange = (evet) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            })
            Auth.login(data.addUser.token)
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        })
    }



    return (

        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
        </Alert>

    )
}

export default SignupForm