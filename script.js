document.addEventListener('DOMContentLoaded', function() {
    // Memastikan tab Administrasi Keuangan terbuka saat halaman dimuat
    document.getElementById('AdministrasiKeuangan').classList.add('active');
});

/**
 * Fungsi untuk mengaktifkan tab konten yang dipilih
 * @param {Event} evt - Objek event dari klik tombol
 * @param {string} tabName - ID dari konten tab yang akan ditampilkan
 */
function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;

    // Sembunyikan semua elemen tab-content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Hapus class "active" dari semua tombol tab
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove('active');
    }

    // Tampilkan konten tab yang spesifik dan aktifkan tombol yang ditekan
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}
