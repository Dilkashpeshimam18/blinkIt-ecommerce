import React, { useState, useContext, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cartContext'
import SubSection from '../SubSection/SubSection'

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
            navigate('/store')
            console.log(isLoggedIn)
        } catch (err) {
            console.log(err)
            alert(err)
        }

    }
    return (
        <div className='login'>
            <SubSection section='Login' />
            <div className='login__container'>
                <div className='login__subContainer'>
                    <form onSubmit={handleSubmit}>

                        <h2>Login</h2>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Email</h3>
                            <input className='login__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Password</h3>
                            <input className='login__input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='login__button'>LOG IN</button>
                    </form>
                    <div className='login__link'>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }} to='/sign-up'> <h3 style={{ cursor: 'pointer', fontSize: '13px', textDecoration: 'none' }}>Create new account?</h3></Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login