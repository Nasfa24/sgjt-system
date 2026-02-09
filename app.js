// File: app.js - ARUS SYSTEM OFFICIAL (FINAL VERSION)

// 1. Import Library Firebase (Versi Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 2. CONFIG FIREBASE (ARUS SYSTEM)
const firebaseConfig = {
  apiKey: "AIzaSyA_vjefpzj1E5INue51iIDce2ef0UVqJxI",
  authDomain: "arus-system.firebaseapp.com",
  projectId: "arus-system",
  storageBucket: "arus-system.firebasestorage.app",
  messagingSenderId: "703977728827",
  appId: "1:703977728827:web:770161151ab5efabc9e51e"
};

// 3. Inisialisasi
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- FITUR UI: TOAST & LOADING (Sesuai CSS Baru) ---

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return; // Tunggu DOM load
    
    // Tentukan Ikon
    let icon = '🔔';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'info') icon = 'ℹ️';

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // HTML Toast (Ada Ikon + Teks)
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div style="flex:1;">${message}</div>
    `;
    
    container.appendChild(toast);

    // Hapus otomatis (Animasi Slide Up)
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)'; // Efek naik ke atas
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function toggleLoading(show) {
    const loader = document.getElementById('loading-overlay');
    if (loader) {
        loader.style.display = show ? 'flex' : 'none';
    }
}

// --- LOGIKA AUTH (ANTI STUCK) ---
function monitorAuthState(callback) {
    // Listener ini akan jalan setiap kali status login berubah
    onAuthStateChanged(auth, (user) => {
        // PENTING: Matikan loading screen setelah Firebase selesai cek user
        toggleLoading(false); 
        callback(user);
    });
}

// 4. Export Fungsi (Agar bisa dipakai di HTML lain)
export { 
    auth, db, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, onSnapshot,
    showToast, toggleLoading, monitorAuthState
};