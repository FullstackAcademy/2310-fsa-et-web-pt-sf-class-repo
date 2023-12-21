import { useState } from 'react';
function SignUp({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleFormSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
        const data = await response.json();
        setToken(data.token);
    }

    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Sign up</button>
        </form>
    );
}

export default SignUp;
