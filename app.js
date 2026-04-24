// app.js - ARUS SYSTEM SUPABASE V1.0

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Kredensial Supabase milikmu
const supabaseUrl = 'https://assaxxfdxtycdqkkkgpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzc2F4eGZkeHR5Y2Rxa2trZ3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMjk4MDQsImV4cCI6MjA5MjYwNTgwNH0.5L3XfA3GOQqIzzNGOBZRTSINqGugDp1sj07BBYpsqEc';

const supabase = createClient(supabaseUrl, supabaseKey);

// FITUR TOAST 
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    let icon = type === 'success' ? '✅' : type === 'error' ? '❌' : '🔔';
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

// FITUR LOADING
function toggleLoading(show) {
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.style.display = show ? 'flex' : 'none';
}

// AUTH MONITOR (PENGGANTI onAuthStateChanged FIREBASE)
function monitorAuthState(callback) {
    // Cek sesi saat halaman dimuat
    supabase.auth.getSession().then(({ data: { session } }) => {
        toggleLoading(false);
        callback(session?.user || null);
    });

    // Dengarkan perubahan login/logout
    supabase.auth.onAuthStateChange((_event, session) => {
        toggleLoading(false);
        callback(session?.user || null);
    });
}

export { supabase, showToast, toggleLoading, monitorAuthState };