import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2A1JRTjGVZQbbq36fCL4kAzAf6oE8bo",
  authDomain: "whatsapp-clone-f70bc.firebaseapp.com",
  projectId: "whatsapp-clone-f70bc",
  storageBucket: "whatsapp-clone-f70bc.appspot.com",
  messagingSenderId: "983594866032",
  appId: "1:983594866032:web:f12fbb9bd5f8940f152bb5",
  measurementId: "G-Z58Y1NR7SG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
