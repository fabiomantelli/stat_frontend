import React, { useState } from 'react';
import api from '../global/api'

export default function SignUp() {
    const name = useFormInput('');
    const username = useFormInput('');
    const password = useFormInput('');
    const password2 = useFormInput('');
    const email = useFormInput('');

    const [registering, setRegistering] = useState(false);

    const handleRegister = () => {
        setRegistering(true);
        
        try {
            const res = api.post('/login/signup', {
                name: name.value,
                username: username.value,
                password: password.value,
                password2: password2.value,
                email: email.value
            })
            console.log(res.data);
            setRegistering(false);
        } catch (error) {
            setRegistering(false);
        }
    }

    return (
        <div className="sign-up">
        <br /><br />
            <div>
                Name<br />
                <input className="input-sign-in" type="text" {...name} autoComplete="new-name" />
            </div>
            <div style={ { marginTop: 10 }}>
                Username<br />
                <input className="input-sign-in" type="text" {...username} autoComplete="new-username" />
            </div>
            <div style={ { marginTop: 10 }}>
                Password<br />
                <input className="input-sign-in" type="password" {...password} autoComplete="new-password" />
            </div>
            <div style={ { marginTop: 10 }}>
                Repeat Password<br />
                <input className="input-sign-in" type="password" {...password2} autoComplete="new-password" />
            </div>
            <div style={ { marginTop: 10 }}>
                E-mail<br />
                <input className="input-sign-in" type="text" {...email} autoComplete="new-email" />
            </div>
            {/* {error && <><small style={{ color: 'red' }}>Login or password invalid.</small><br /></>}<br /> */}
            <input className="btn btn-primary btn-block btn-large" type="button" value={registering ? 'Registering...' : 'Register'} onClick={handleRegister} disabled={registering} /><br />
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