// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjOHFoTgdpJn3GIfQrIdkRkuR61f_h0A4',
  authDomain: 'portfolio-dashboard-3e427.firebaseapp.com',
  projectId: 'portfolio-dashboard-3e427',
  storageBucket: 'portfolio-dashboard-3e427.appspot.com',
  messagingSenderId: '3425509441',
  appId: '1:3425509441:web:30474ddb3426a8d4cc26c0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
