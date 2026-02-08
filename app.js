// app.js - ARUS CORE LOGIC
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// CONFIG MILIKMU (Sudah terpasang)
const firebaseConfig = {
  apiKey: "AIzaSyDj4DZ223hh0wLq7oXXqWj3aMQ-h2mh7g0",
  authDomain: "sgjt-system.firebaseapp.com",
  projectId: "sgjt-system",
  storageBucket: "sgjt-system.firebasestorage.app",
  messagingSenderId: "484197899894",
  appId: "1:484197899894:web:30fa0cb4b4f1983f660957"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// --- FITUR UI: TOAST & LOADING ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return; // Tunggu DOM load
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function toggleLoading(show) {
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.style.display = show ? 'flex' : 'none';
}

// --- LOGIKA AUTH (ANTI REFRESH) ---
function monitorAuthState(callback) {
    // Jangan munculkan loading jika di halaman login/register agar transisi smooth
    // Tapi untuk dashboard, biarkan loading default HTML yang handle
    onAuthStateChanged(auth, (user) => {
        toggleLoading(false); // Matikan loading screen bawaan HTML
        callback(user);
    });
}

export { 
    auth, db, storage, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot,
    ref, uploadBytes, getDownloadURL,
    showToast, monitorAuthState
};