// app.js - ARUS SYSTEM FINAL V5.0

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// CONFIG FIREBASE (ARUS)
const firebaseConfig = {
  apiKey: "AIzaSyA_vjefpzj1E5INue51iIDce2ef0UVqJxI",
  authDomain: "arus-system.firebaseapp.com",
  projectId: "arus-system",
  storageBucket: "arus-system.firebasestorage.app",
  messagingSenderId: "703977728827",
  appId: "1:703977728827:web:770161151ab5efabc9e51e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// FITUR TOAST
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    let icon = '🔔';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-icon">${icon}</div><div style="flex:1;">${message}</div>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// LOADING
function toggleLoading(show) {
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.style.display = show ? 'flex' : 'none';
}

// AUTH MONITOR
function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        toggleLoading(false); 
        callback(user);
    });
}

export { 
    auth, db, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot,
    showToast, toggleLoading, monitorAuthState
};