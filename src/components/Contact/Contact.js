import React, { useState, useEffect, useCallback } from 'react'
import './Contact.css'
import axios from 'axios'

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

        } catch (err) {
            console.log(err)
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Name</h3>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <h3>Email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>      <div>
                    <h3>Phone Number</h3>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button>Send</button>
            </form>
        </div >
    )
}

export default Contact