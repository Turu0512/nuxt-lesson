import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyA5fQrzLFfoa3c4_07DYaag0i-81gRDvEQ",
    authDomain: "nuxt-chat-ac92b.firebaseapp.com",
    projectId: "nuxt-chat-ac92b",
    storageBucket: "nuxt-chat-ac92b.appspot.com",
    messagingSenderId: "392234946545",
    appId: "1:392234946545:web:f966972f31a8fbbd0ffe50",
    measurementId: "G-DJNDFK6SV6"
  });
  }
  
  export default (context, inject) => {
    const $fb = {
      app: Firebase.app,
      auth: Firebase.auth,
      firestore: Firebase.firestore,
    }
    inject('fb',$fb)
  }