import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAfj9rxGTKyrdIeCMo7Yxs3vATRueaX3g",
    authDomain: "crud-d96e0.firebaseapp.com",
    projectId: "crud-d96e0",
    storageBucket: "crud-d96e0.appspot.com",
    messagingSenderId: "355796991849",
    appId: "1:355796991849:web:b15c0140e9f79250e087f8",
    measurementId: "G-QFDVC2DWB7"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)