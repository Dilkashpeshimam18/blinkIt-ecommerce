import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cartContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(CartContext)
    useEffect(() => {
        if (isLoggedIn == true) {
            navigate('/store')
        }
    }, [])
    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: email,
                password: password,
                returnSecureToken: true

            }
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3logzk0W9DqfQXUixffkDdyDb-MgF30k', data, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })
            navigate('/store')
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }
    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div>
                    <h3>Email</h3>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>Sign Up</button>
            </form>
            <Link to='/login'><p>Login with existing account</p></Link>
        </div>
    )
}

export default SignUp