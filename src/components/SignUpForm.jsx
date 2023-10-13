import React from "react";
import { useState } from 'react';


export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefualt();
        console.log("Hi world");
    }




    return <h2> Sign Up!</h2>;

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password: <input />
        </label>
        <button>Submit</button>

    </form>
}