// --- FITUR UI: TOAST KEREN ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    // Tentukan Ikon berdasarkan tipe
    let icon = '🔔'; // Default
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'info') icon = 'ℹ️';

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // HTML Toast Baru (Ada Ikon + Pesan)
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div style="flex:1;">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Hapus otomatis
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}