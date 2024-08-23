// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQD_x6kfXF8-43DYuaPQKtlRa81o2g0rs",
  authDomain: "todo-1221b.firebaseapp.com",
  projectId: "todo-1221b",
  storageBucket: "todo-1221b.appspot.com",
  messagingSenderId: "99983149123",
  appId: "1:99983149123:web:ef8edef5ccc91f7cc72cf6",
  measurementId: "G-0B18L3YV5V",
  databaseURL: "https://todo-1221b-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getFirestore(app)

export { app, auth , database};
