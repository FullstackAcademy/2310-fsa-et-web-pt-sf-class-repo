import { useState } from 'react';

function Login({ token }) {
    const [username, setUsername] = useState('');
    const [iat, setIAT] = useState('');
    async function handleLogin() {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
        const { data } = await response.json();
        console.log(data)
        setUsername(data.username);
        setIAT(data.iat);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <p>Username: {username}</p>
            <p>IAM: {iat}</p>
        </div>
    );
}

export default Login;
