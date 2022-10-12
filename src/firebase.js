import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD88pXU8mimVANVdwfsTEu5-RxYs2E37SE",
    authDomain: "linkedin-clone-fd3dc.firebaseapp.com",
    projectId: "linkedin-clone-fd3dc",
    storageBucket: "linkedin-clone-fd3dc.appspot.com",
    messagingSenderId: "1065691070069",
    appId: "1:1065691070069:web:2db279a38f90e54e25423c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};