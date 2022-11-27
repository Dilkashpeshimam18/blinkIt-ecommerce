import React, { useContext, useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { collection, addDoc, getDocs, } from 'firebase/firestore'
import CartContext from '../../store/cartContext'
import { useParams } from 'react-router-dom'


const ProductDetailReview = () => {
    const [allReview, setAllReview] = useState([])
    const [review, setReview] = useState('')
    const [name, setName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const { email } = useContext(CartContext)
    const params = useParams()
    let productReviewRef;

    if (email != '') {
        productReviewRef = collection(collection(db, 'productReview'), params.id, params.id)

    } else {
        productReviewRef = collection(db, 'productReview')
    }
    const getAllReview = async () => {
        try {
            const response = await getDocs(productReviewRef)
            const res = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setAllReview(res)
        } catch (err) {
            console.log(err)
        }

    }
    const handleReview = async (e) => {
        e.preventDefault()
        try {
            let userReview = {
                name: name,
                email: userEmail,
                review: review
            }
            await addDoc(productReviewRef, userReview)
            setReview('')
            setName('')
            setUserEmail('')
            alert('Review Submitted')
            getAllReview()
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllReview()

    }, [])
    return (
        <div className='productDetail__reviewContainer'>
            <h4 style={{ color: '#444444', fontSize: '20px' }}>
                Reviews
            </h4>

            <>
                {allReview.map((review, i) => {
                    return (
                        <div key={i}>
                            <h5>{review.name}</h5>
                            <p>{review.review}</p>
                        </div>
                    )
                })}
            </>




            <div className='productDetail__reviewFormContainer'>
                <form onSubmit={handleReview} className='productDetail__reviewForm'>

                    <div className='productDetail__reviewInputContainer'>
                        <p style={{ color: '#444444' }}>Your review</p>
                        <textarea value={review} onChange={(e) => setReview(e.target.value)} className='productDetail__reviewTextArea' type='text' required />
                    </div>
                    <div className='productDetail__reviewInputContainer'>
                        <p style={{ color: '#444444' }}>Name</p>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='productDetail__reviewInput' type='text' required />
                    </div>
                    <div className='productDetail__reviewInputContainer'>
                        <p style={{ color: '#444444' }}>Email</p>
                        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='productDetail__reviewInput' type='email' required />
                    </div>
                    <div className='productDetail__reviewButtonContainer'>
                        <button className='productDetail__reviewButton' type='submit'>SUBMIT</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default ProductDetailReview