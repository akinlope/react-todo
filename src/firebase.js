// import function needed from the SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAzz8kfmA7G6KMpaQvJwmcFJrHZp76Xuq8",
  authDomain: "todo-react-64f9c.firebaseapp.com",
  projectId: "todo-react-64f9c",
  storageBucket: "todo-react-64f9c.appspot.com",
  messagingSenderId: "104911020063",
  appId: "1:104911020063:web:58c27a9a06b2ac52b3f52a"
};
  
// initialize firebase
const app = initializeApp(firebaseConfig);

// export firestore database
export const db = getFirestore(app);
export const auth = getAuth(app);