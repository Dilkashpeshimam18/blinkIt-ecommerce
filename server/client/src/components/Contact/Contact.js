import React, { useState, useEffect, useCallback } from 'react'
import './Contact.css'
import axios from 'axios'
import SubSection from '../SubSection/SubSection'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        try {
            let data = {
                name: name,
                email: email,
                phoneNumber: phone
            }
            const response = await axios.post('https://crud-d96e0-default-rtdb.firebaseio.com/contactData.json', data)
            setName('')
            setEmail('')
            setPhone('')
            alert('We will get back to you soon!')
        } catch (err) {
            console.log(err)
        }
    })
    return (
        <div>
            <SubSection section='Contact Us' />
            <div className='login__container'>
                <div className='login__subContainer'>
                    <form onSubmit={handleSubmit}>
                        <h2>CONTACT US</h2>

                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Name</h3>
                            <input className='login__input' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Email</h3>
                            <input className='login__input' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div >      <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Phone Number</h3>
                            <input className='login__input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button className='contact__button' type='submit'>Send</button>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Contact