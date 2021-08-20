import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyAG9rj0maLaMs9fPiwaED_v-QxI3dalJiI",
    authDomain: "nuxt-data-cab99.firebaseapp.com",
    projectId: "nuxt-data-cab99",
    storageBucket: "nuxt-data-cab99.appspot.com",
    messagingSenderId: "998280629985",
    appId: "1:998280629985:web:e8d534b3164fb2021631a0",
    measurementId: "G-K4XQWNFCLV"
    }
  )
}

export default firebase