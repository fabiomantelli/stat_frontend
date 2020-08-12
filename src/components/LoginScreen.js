import React from 'react';
import styled from 'styled-components';


// styled-components 

const Text = styled.h1`
    font-size: 1rem;
`

const Input = styled.input`
    margin-bottom: 10px; 
    width: 300px;
	background: rgba(0,0,0,0.1);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	border: 1px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    
    &:focus {
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }
`

const LoginButton = styled.input`
    padding: 10px;
    width: 330px;
    cursor: pointer;
    line-height: 20px;
    border-radius: 8px;
    background-color: #1D4D6B;
    border-color: #34759e;
    color: white;
`

export default function Login(props) {
    return (
        <div className="login">
            <div>
                <Text>Username</Text>
                <Input type="text" {...props.username} autoComplete="new-password" />
            </div>

            <div>
                <Text>Password</Text>
                <Input type="password" {...props.password} autoComplete="new-password" />
            </div>
            
            <div>
                {props.error && <><small style={{ color: 'red' }}>Login or password invalid.</small><br /></>}<br />
            </div>

            <LoginButton className="btn" type="button" value={props.loading ? 'Loading...' : 'Login'} onClick={props.handleLogin} disabled={props.loading} />
        </div>
      
    )
}