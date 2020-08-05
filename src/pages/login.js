import React, { useState } from 'react';
import api from '../global/api'
import { setUserSession } from '../utils/Common';

import LoginScreen from '../components/LoginScreen';

require('dotenv/config');

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin =  async () => {
        setError(null);
        setLoading(true);
        await api.post('/login/signin', { username: username.value, password: password.value})
            .then(response => {
                setLoading(false);
                setUserSession(response.data.token, response.data.user);
                props.history.push('/dashboard');
            })
            .catch(error => {
                setLoading(false);
                if (error.response.status === 401) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later.");
            })
    }

    return (
        <LoginScreen 
            error={error} 
            username={username} 
            password={password}
            loading={loading} 
            handleLogin={handleLogin}
        />
    )

}


const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;
