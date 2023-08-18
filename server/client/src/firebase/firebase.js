import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3f1iaa9UJOVVIn8rnVJlImKeyS3xXSkM",
    authDomain: "blinkit-ecommerce-dcfe7.firebaseapp.com",
    projectId: "blinkit-ecommerce-dcfe7",
    storageBucket: "blinkit-ecommerce-dcfe7.appspot.com",
    messagingSenderId: "237122808150",
    appId: "1:237122808150:web:56693ccf4a712539050ef7",
    measurementId: "G-Q3HDN14V1W"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)