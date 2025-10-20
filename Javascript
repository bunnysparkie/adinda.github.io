// ===================================================
// DATA (ARRAY)
// ===================================================
const stafData = [
    { bidang: "Kesiswaan", nama: "Yulianti" },
    { bidang: "Sarana dan Prasarana", nama: "Kuwat Yuliyono" },
    { bidang: "Kepegawaian", nama: "Temti Malau" },
    { bidang: "Operator", nama: "Per, S.Kom" },
    { bidang: "Bendahara", nama: "Sugati, S.Pd." },
    { bidang: "Perpustakaan", nama: "Aelis Yuningsih, S.Kom" },
    { bidang: "Laboran", nama: "Ananda Joel, S.E." },
    // Petugas Pendukung
    { bidang: "Keamanan / Satpam", nama: "M. Rizki Furqoni", role: "Pendukung" },
    { bidang: "Caraka Kebersihan", nama: "Supandi, Tumijo, Slamet Kahono", role: "Pendukung" },
];

const keuanganTasks = [
    "Laporan Pendapatan dan Pengeluaran", "Laporan Aset dan Kewajiban", "Kebijakan Akuntansi", 
    "Pengungkapan dan Catatan Penjelasan", "Perencanaan Anggaran", "Pencarian Sumber Dana", 
    "Penggunaan Keuangan", "Pengawasan dan Evaluasi", "Pertanggungjawaban"
];

const persuratanTasks = [
    "Surat Masuk/Keluar/Keterangan/Internal/Eksternal (Jenis)",
    "Penerimaan dan Pencatatan", "Penyortiran dan Pendisposisian", 
    "Pengolahan dan Pembuatan", "Pengarsipan", "Pengiriman"
];

const kesiswaanCounts = [
    { kelas: "Kelas X", jumlah: 216 },
    { kelas: "Kelas XI", jumlah: 252 },
    { kelas: "Kelas XII", jumlah: 252 }
];

// ===================================================
// GENERATOR (LOOPING)
// ===================================================

function generateStaf() {
    const container = document.getElementById('staf-area');
    let htmlContent = '';

    // Looping melalui Array stafData
    stafData.forEach(staf => {
        htmlContent += `
            <div class="card ${staf.role ? staf.role.toLowerCase() : 'staf-bidang'}">
                <h4>${staf.bidang}</h4>
                <p><strong>${staf.nama}</strong></p>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function generateTasks(areaId, title, tasksArray) {
    const container = document.getElementById(areaId);
    let htmlContent = `<h4>${title}</h4><ul>`;

    // Looping melalui Array tasksArray
    tasksArray.forEach(task => {
        htmlContent += `<li>${task}</li>`;
    });

    htmlContent += `</ul>`;
    container.innerHTML = htmlContent;
}

function generateKesiswaan() {
    const container = document.getElementById('kesiswaan-area');
    let htmlContent = `<h4>Data Kesiswaan</h4><ul>`;

    // Looping melalui Array kesiswaanCounts
    kesiswaanCounts.forEach(data => {
        htmlContent += `<li>${data.kelas}: <strong>${data.jumlah}</strong> siswa</li>`;
    });

    htmlContent += `</ul>`;
    
    // Tambah data sarpras (dibuat manual karena datanya banyak)
    htmlContent += `
        <h4>Inventaris Sarpras (Contoh)</h4>
        <ul>
            <li>Meja, Kursi/Sofa</li>
            <li>Lemari Kecil, Rak Kecil</li>
            <li>Komputer, Keyboard, Printer</li>
            <li>Map, Kalender, Figuran, Tirai</li>
        </ul>
    `;
    container.innerHTML = htmlContent;
}

// ===================================================
// EKSEKUSI
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    generateStaf();
    generateTasks('keuangan-area', 'Administrasi Keuangan', keuanganTasks);
    generateTasks('persuratan-area', 'Surat Persuratan', persuratanTasks);
    generateKesiswaan();
});
