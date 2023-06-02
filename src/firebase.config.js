// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC_9v68ZYCUcvzKXOcfQ1_0N3t1ruUUeKE",
  authDomain: "intergration-77079.firebaseapp.com",
  projectId: "intergration-77079",
  storageBucket: "intergration-77079.appspot.com",
  messagingSenderId: "167004011320",
  appId: "1:167004011320:web:2cda4cbafbb41135715fcd",
  measurementId: "G-0VL6KL0VMD"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
// Initialize Firebase
 
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)

export {app, firestore, storage, auth}

