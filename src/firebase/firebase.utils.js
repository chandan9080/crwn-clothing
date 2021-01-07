import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const config = {
  apiKey: 'AIzaSyC2KZqVuHBZdBnUNDdaitFOC3Scv6NhvZU',
  authDomain: 'crwn-db-f189d.firebaseapp.com',
  projectId: 'crwn-db-f189d',
  storageBucket: 'crwn-db-f189d.appspot.com',
  messagingSenderId: '844212976146',
  appId: '1:844212976146:web:404d8da3dde97a6ee1b6cb',
  measurementId: 'G-JP6TQ2G6JK',
}
//storing the authoursied data from the Google into the database
export const createUserAuth = async (userAuth, additonalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({ displayName, email, createdAt, ...additonalData })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef
}
// Initialize Firebase
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
//Sigin with Google
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
//Sigin with Facebook
