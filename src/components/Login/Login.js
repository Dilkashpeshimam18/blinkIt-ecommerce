import React, { useState, useContext, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cartContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoggedIn } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn == true) {
            navigate('/store')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: email,
                password: password,
                returnSecureToken: true

            }
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3logzk0W9DqfQXUixffkDdyDb-MgF30k', data, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })
            login(response.data.idToken, response.data.email)
            console.log(response.data)
            navigate('/store')
            console.log(isLoggedIn)
        } catch (err) {
            console.log(err)
            alert(err)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Email</h3>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>Login</button>
            </form>
            <Link to='/sign-up'> <p style={{ cursor: 'pointer' }}>Create new accout?</p></Link>

        </div>
    )
}

export default Login