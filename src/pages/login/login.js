import React, { useState } from 'react';
import api from '../../api'
import { setUserSession } from '../../utils/Common';

import './login.css';
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
        <div className="login">
            <br /><br />
                <div>
                    Username<br />
                    <input className="input-login" type="text" {...username} autoComplete="new-password" />
                </div>
                <div style={ { marginTop: 10 }}>
                    Password<br />
                    <input className="input-login" type="password" {...password} autoComplete="new-password" />
                </div>
                {error && <><small style={{ color: 'red' }}>Login or password invalid.</small><br /></>}<br />
                <input className="btn btn-primary btn-block btn-large" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
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
