import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { start, stop, login } from "./appSlice";
import { useDispatch } from "react-redux";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message
    const navigate = useNavigate(); // Get history object for redirection
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'sawera@netsol.com' && password === '12345') {
            const body = {
                email: email,
                password: password,
              };
            dispatch(
                login({
                  user: body
                })
              );
            navigate('/student'); // Change '/dashboard' to your desired route
        } else {
            // Display error message
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex text-black justify-center items-center min-h-screen'>
                    <div className='container  flex flex-col justify-center gap-5 items-center'>
                        <div className='bg-yellow-100 p-10 items-center rounded-lg flex flex-col gap-5'><h1>Login</h1>

                            <div>
                                <label className='text-start'>Email:</label>
                                <input className="border-black border" type="email" value={email} onChange={handleEmailChange} />
                            </div>

                            <div>
                                <label>Password:</label>
                                <input type="password" className="border-black border" value={password} onChange={handlePasswordChange} />
                            </div>

                            <button type="submit" className='bg-green-600 text-white px-5 py-3 rounded-lg'>Login</button>

                            {error && <div className="text-red-500">{error}</div>} {/* Display error message if error state is not empty */}
                        </div> </div>
                </div>
            </form>
        </>
    );
}

export default Login;
