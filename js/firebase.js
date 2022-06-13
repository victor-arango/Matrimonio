
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"


  const firebaseConfig = {
    apiKey: "AIzaSyDrB1IaQXHYymK4GC-O1LHg_dFS7Jxncaw",
    authDomain: "invitados-c5c44.firebaseapp.com",
    projectId: "invitados-c5c44",
    storageBucket: "invitados-c5c44.appspot.com",
    messagingSenderId: "788439071842",
    appId: "1:788439071842:web:7273d1eeaae6c5d687653b"
  };

 
const app = initializeApp(firebaseConfig);
const db = getFirestore();



 export const insertar = (invitado,nombres) =>{
    addDoc(collection(db, 'invitados'),{
        invitado: invitado,
        nombres: nombres
    })
     
 }