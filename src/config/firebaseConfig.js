// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'
//this allows you to connect to db

import {getAuth} from 'firebase/auth'
//to use authentication

//for storage
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6pPfu_dNbV2gKkibcFK24jX3-0MQfXM",
  authDomain: "cohort-20-blog-2a79a.firebaseapp.com",
  projectId: "cohort-20-blog-2a79a",
  storageBucket: "cohort-20-blog-2a79a.appspot.com",
  messagingSenderId: "508478184451",
  appId: "1:508478184451:web:02099845c8203deb1a0236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up database and export it
export const db = getFirestore(app)

//set up auth and export it
export const auth = getAuth(app)

//set up storage and export it
export const storage = getStorage(app)