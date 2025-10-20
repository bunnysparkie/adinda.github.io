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
    { bidang: "Keamanan / Satpam", nama: "M. Rizki Furqoni", type: "Pendukung" },
    { bidang: "Caraka Kebersihan", nama: "Supandi, Tumijo, Slamet Kahono", type: "Pendukung" },
];

const keuanganTasks = [
    "Laporan Pendapatan dan Pengeluaran", "Laporan Aset dan Kewajiban", "Kebijakan Akuntansi", 
    "Pengungkapan dan Catatan Penjelasan", "Perencanaan Anggaran", "Pencarian Sumber Dana", 
    "Penggunaan Keuangan", "Pengawasan dan Evaluasi", "Pertanggungjawaban"
];

const persuratanTasks = [
    "Surat Masuk, Keluar, Keterangan, Internal, Eksternal (Jenis)",
    "Penerimaan dan Pencatatan", "Penyortiran dan Pendisposisian", 
    "Pengolahan dan Pembuatan", "Pengarsipan", "Pengiriman"
];

const kesiswaanCounts = [
    { kelas: "Kelas X", jumlah: 216 },
    { kelas: "Kelas XI", jumlah: 252 },
    { kelas: "Kelas XII", jumlah: 252 }
];

const sarprasItems = [
    "Meja", "Kursi/Sofa", "Lemari Kecil", "Rak Kecil", "Komputer", 
    "Keyboard", "Printer", "Map", "Kalender", "Figuran", "Tirai"
];

// ===================================================
// GENERATOR KONTEN (LOOPING)
// ===================================================

function generateStafCards() {
    const container = document.getElementById('staf-area');
    let htmlContent = '';

    stafData.forEach(staf => {
        htmlContent += `
            <div class="card ${staf.type ? staf.type.toLowerCase() : 'staf-bidang'}">
                <h4>${staf.bidang}</h4>
                <p><strong>${staf.nama}</strong></p>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function generateInfoBlock(areaId, title, itemsArray) {
    const container = document.getElementById(areaId);
    let htmlContent = `<h4>${title}</h4><ul>`;

    itemsArray.forEach(item => {
        htmlContent += `<li>${item}</li>`;
    });

    htmlContent += `</ul>`;
    container.innerHTML = htmlContent;
}

// FUNGSI BARU: Khusus untuk Kesiswaan
function generateKesiswaan() {
    const container = document.getElementById('kesiswaan-area');
    let htmlContent = `<h4>Data Kesiswaan</h4>`;
    
    // Tabel Kesiswaan
    htmlContent += `
        <table>
            <thead>
                <tr><th>Kelas</th><th>Jumlah Siswa</th></tr>
            </thead>
            <tbody>
    `;
    kesiswaanCounts.forEach(data => {
        htmlContent += `<tr><td>${data.kelas}</td><td>${data.jumlah}</td></tr>`;
    });
    htmlContent += `</tbody></table>`;
    
    container.innerHTML = htmlContent;
}

// FUNGSI BARU: Khusus untuk Sarpras (menggunakan generateInfoBlock)
function generateSarpras() {
    generateInfoBlock('sarpras-area', 'Inventaris Sarana & Prasarana', sarprasItems);
}

// ===================================================
// EKSEKUSI
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    generateStafCards();
    generateInfoBlock('keuangan-area', 'Administrasi Keuangan', keuanganTasks);
    generateInfoBlock('persuratan-area', 'Surat Persuratan', persuratanTasks);
    generateKesiswaan(); // Panggil Kesiswaan
    generateSarpras(); // Panggil Sarpras
});
