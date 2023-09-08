import { useState } from "react"

function SignUpForm() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event){
    event.preventDefault();

    try {
       const result =  await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({username, password})
       })
       const json = await result.json()
       console.log(json);
    } catch (error) {
        setError(error.message)
    }
}
    return (
        <div>
            <h2>Sign up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input 
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                    />
                </label>
                <label>
                    Password: <input 
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUpForm