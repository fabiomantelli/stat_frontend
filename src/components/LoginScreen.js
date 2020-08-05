import React from 'react';

import '../styles/LoginScreen.css';

export default function Login(props) {
    return (
        <div className="login">
            <div>
                <h1>Username</h1>
                <input className="input-login" type="text" {...props.username} autoComplete="new-password" />
            </div>

            <div>
                <h1>Password</h1>
                <input className="input-login" type="password" {...props.password} autoComplete="new-password" />
            </div>
            
            <div>
                {props.error && <><small style={{ color: 'red' }}>Login or password invalid.</small><br /></>}<br />
            </div>

            <input className="btn" type="button" value={props.loading ? 'Loading...' : 'Login'} onClick={props.handleLogin} disabled={props.loading} />
        </div>
      
    )
}