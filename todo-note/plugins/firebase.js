import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
firebase.initializeApp({
 apiKey: "AIzaSyD-Hr4yClfSJ1I_we0U3XtOgZwfYmie-6c",
    authDomain: "todo-note-3bf7e.firebaseapp.com",
    projectId: "todo-note-3bf7e",
    storageBucket: "todo-note-3bf7e.appspot.com",
    messagingSenderId: "545257811639",
    appId: "1:545257811639:web:e2b0754f56b42054e0e732",
    measurementId: "G-D8K7SV1VT6"
})
}

export default firebase