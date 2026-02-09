// File: app.js - ARUS SYSTEM (Versi Hemat - Tanpa Storage)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// (Kita HAPUS import Storage)

// CONFIG FIREBASE BARU (Arus System)
const firebaseConfig = {
  apiKey: "AIzaSyA_vjefpzj1E5INue51iIDce2ef0UVqJxI",
  authDomain: "arus-system.firebaseapp.com",
  projectId: "arus-system",
  storageBucket: "arus-system.firebasestorage.app",
  messagingSenderId: "703977728827",
  appId: "1:703977728827:web:770161151ab5efabc9e51e"
};

// Initialize Firebase (Tanpa Storage)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- FITUR UI: TOAST & LOADING ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleLoading(show) {
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.style.display = show ? 'flex' : 'none';
}

// --- LOGIKA AUTH ---
function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        toggleLoading(false);
        callback(user);
    });
}

// Export Fungsi (Storage dihapus dari sini)
export { 
    auth, db, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot,
    showToast, monitorAuthState
};