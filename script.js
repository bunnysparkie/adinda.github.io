// Data Bidang-Bidang untuk di-inject ke HTML
const bidangData = [
    { role: "Kesiswaan", name: "Yulianti" },
    { role: "Sarana dan Prasarana", name: "Kuwat Yuliyono" },
    { role: "Kepegawaian", name: "Temti Malau" },
    { role: "Operator", name: "Per, S.Kom" },
    { role: "Bendahara", name: "Sugati, S.Pd." },
    { role: "Perpustakaan", name: "Aelis Yuningsih, S.Kom" },
    { role: "Laboran", name: "Ananda Joel, S.E." }
];

// Fungsi untuk membuat dan menampilkan grid Bidang-Bidang
function renderBidangBidang() {
    const container = document.getElementById('bidang-bidang');
    
    // Buat elemen grid
    const grid = document.createElement('div');
    grid.className = 'bidang-grid';

    bidangData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'bidang-item';
        
        itemDiv.innerHTML = `
            <p class="bidang-role">${item.role}</p>
            <p class="bidang-name">${item.name}</p>
        `;
        grid.appendChild(itemDiv);
    });

    container.appendChild(grid);
}

// Fungsi untuk Toggle (tampil/sembunyi) detail
function toggleDetails(id) {
    const detailsElement = document.getElementById(id);
    const parentCard = detailsElement.closest('.card, .info-card');
    const toggleIcon = parentCard.querySelector('.toggle-icon');

    if (detailsElement.classList.contains('active')) {
        detailsElement.classList.remove('active');
        toggleIcon.classList.remove('rotated');
    } else {
        detailsElement.classList.add('active');
        toggleIcon.classList.add('rotated');
    }
}

// Panggil fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderBidangBidang();
    
    // Pastikan fungsi toggleDetails bisa diakses dari HTML
    window.toggleDetails = toggleDetails;
});
