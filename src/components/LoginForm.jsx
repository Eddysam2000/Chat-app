import React from 'react';
import { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (data) => {}

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Applications</h1>
                <form onSubmit={handleSubmit}></form>
            </div>
        </div>
    )
}

export default LoginForm