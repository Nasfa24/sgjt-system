// File: app.js

// 1. Import Library Firebase (Versi Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// 2. Config Milikmu (SUDAH DIPASANG)
const firebaseConfig = {
  apiKey: "AIzaSyDj4DZ223hh0wLq7oXXqWj3aMQ-h2mh7g0",
  authDomain: "sgjt-system.firebaseapp.com",
  projectId: "sgjt-system",
  storageBucket: "sgjt-system.firebasestorage.app",
  messagingSenderId: "484197899894",
  appId: "1:484197899894:web:30fa0cb4b4f1983f660957"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// 4. Export Fungsi agar bisa dipakai di HTML lain
export { 
    auth, db, storage, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs,
    ref, uploadBytes, getDownloadURL
};