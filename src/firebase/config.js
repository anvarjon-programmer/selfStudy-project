import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyAJ-qoGph-uRI0EzH5UrqIIG4hF7PjYcnQ",
  authDomain: "eshop-35210.firebaseapp.com",
  projectId: "eshop-35210",
  storageBucket: "eshop-35210.appspot.com",
  messagingSenderId: "324361971476",
  appId: "1:324361971476:web:ba073452a75e9c4987c401",
  measurementId: "G-8E45V1SHPR",

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app

