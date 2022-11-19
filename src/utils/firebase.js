// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDCN6J0z_GrM2TIFPqoRkU00K10rvTHVU",
  authDomain: "contact-app-63beb.firebaseapp.com",
  databaseURL: "https://contact-app-63beb-default-rtdb.firebaseio.com",
  projectId: "contact-app-63beb",
  storageBucket: "contact-app-63beb.appspot.com",
  messagingSenderId: "545374640723",
  appId: "1:545374640723:web:d3da6b0deeb0c96be7c4a6",
};

// Initialize Firebase
const startFirebase = initializeApp(firebaseConfig);
export default startFirebase;

//* firebase başlatma fonksiyonunu startFirebase isimli degiskene atadik
//? ve export ettik
