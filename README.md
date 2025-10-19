<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Organisasi TU - SMA Negeri 103 Jakarta</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>STRUKTUR ORGANISASI TATA USAHA</h1>
        <h2>SMA NEGERI 103 JAKARTA</h2>
    </header>

    <main>
        <section class="pimpinan">
            <h3>Pimpinan</h3>
            <div class="card kepala-sekolah">
                <h4>Kepala Sekolah</h4>
                <p><strong>Suparni, M.Pd.</strong></p>
            </div>
            <div class="card kasubag-tu">
                <h4>Kasubag TU</h4>
                <p><strong>Martin Malau, S.Pd.</strong></p>
            </div>
        </section>

        <hr>

        <section class="bidang-bidang">
            <h3>Bidang-Bidang / Staf TU</h3>
            <div class="cards-container">
                <div class="card">
                    <h4>Kesiswaan</h4>
                    <p>Yulianti</p>
                </div>
                <div class="card">
                    <h4>Sarana dan Prasarana</h4>
                    <p>Kuwat Yuliyono</p>
                </div>
                <div class="card">
                    <h4>Kepegawaian</h4>
                    <p>Temti Malau</p>
                </div>
                <div class="card">
                    <h4>Operator</h4>
                    <p>Per, S.Kom</p>
                </div>
                <div class="card">
                    <h4>Bendahara</h4>
                    <p>Sugati, S.Pd.</p>
                </div>
                <div class="card">
                    <h4>Perpustakaan</h4>
                    <p>Aelis Yuningsih, S.Kom</p>
                </div>
                <div class="card">
                    <h4>Laboran</h4>
                    <p>Ananda Joel, S.E.</p>
                </div>
            </div>
        </section>

        <hr>

        <section class="pendukung">
            <h3>Petugas Pendukung</h3>
            <div class="cards-container">
                <div class="card">
                    <h4>Caraka Kebersihan</h4>
                    <ul>
                        <li>Supandi</li>
                        <li>Tumijo</li>
                        <li>Slamet Kahono</li>
                    </ul>
                </div>
                <div class="card">
                    <h4>Keamanan / Satpam</h4>
                    <p>M. Rizki Furqoni</p>
                </div>
            </div>
        </section>

        <hr>

        <section class="informasi-tugas">
            <h3>Informasi Tambahan</h3>

            <div class="info-block">
                <h4>Administrasi Keuangan</h4>
                <ul>
                    <li>Laporan Pendapatan dan Pengeluaran</li>
                    <li>Laporan Aset dan Kewajiban</li>
                    <li>Kebijakan Akuntansi</li>
                    <li>Pengungkapan dan Catatan Penjelasan</li>
                    <li>Perencanaan Anggaran</li>
                    <li>Pencarian Sumber Dana</li>
                    <li>Penggunaan Keuangan</li>
                    <li>Pengawasan dan Evaluasi</li>
                    <li>Pertanggungjawaban</li>
                </ul>
            </div>

            <div class="info-block">
                <h4>Surat Persuratan</h4>
                <div class="col-2">
                    <h5>Jenis Surat:</h5>
                    <ul>
                        <li>Surat masuk</li>
                        <li>Surat keluar</li>
                        <li>Surat keterangan</li>
                        <li>Surat internal</li>
                        <li>Surat eksternal</li>
                    </ul>
                    <h5>Proses:</h5>
                    <ul>
                        <li>Penerimaan dan pencatatan</li>
                        <li>Penyortiran dan pendisposisian</li>
                        <li>Pengolahan dan pembuatan</li>
                        <li>Pengarsipan</li>
                        <li>Pengiriman</li>
                    </ul>
                </div>
            </div>

            <div class="info-block kesiswaan-info">
                <h4>Data Kesiswaan</h4>
                <table>
                    <tr><th>Kelas</th><th>Jumlah Siswa</th></tr>
                    <tr><td>Kelas X</td><td>216</td></tr>
                    <tr><td>Kelas XI</td><td>252</td></tr>
                    <tr><td>Kelas XII</td><td>252</td></tr>
                </table>
            </div>

            <div class="info-block sarpras-info">
                <h4>Inventaris Sarana dan Prasarana (Contoh)</h4>
                <ul>
                    <li>Meja</li>
                    <li>Kursi/Sofa</li>
                    <li>Lemari Kecil</li>
                    <li>Rak Kecil</li>
                    <li>Komputer</li>
                    <li>Keyboard</li>
                    <li>Printer</li>
                    <li>Map</li>
                    <li>Kalender</li>
                    <li>Figuran</li>
                    <li>Tirai</li>
                </ul>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Tata Usaha SMA Negeri 103 Jakarta</p>
    </footer>

</body>
</html> 

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f2f5; 
    color: #333;
}

header {
    background-color: #007bff; /* Warna Biru Khas TU/Admin */
    color: white;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

main {
    max-width: 1200px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

/* -------------------------------------- */
/* STYLING KHUSUS DIAGRAM (ORGANIGRAM) */
/* -------------------------------------- */
.organigram {
    text-align: center;
    padding: 30px 0;
    margin-bottom: 40px;
    border: 1px dashed #ccc;
    border-radius: 10px;
}

.node {
    display: inline-block;
    background-color: #e6f2ff; /* Latar Node */
    border: 1px solid #007bff;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.node h4 {
    margin: 0 0 5px 0;
    color: #0056b3;
    font-size: 1.1em;
}

.node p {
    margin: 0;
    font-size: 0.9em;
}

/* Garis Vertikal (Koneksi Hierarki) */
.line-v {
    width: 2px;
    height: 30px;
    background-color: #007bff;
    margin: 0 auto;
}

/* Garis Horizontal (Koneksi Staf Bidang) */
.line-h {
    width: 80%;
    height: 2px;
    background-color: #007bff;
    margin: 0 auto 10px auto; 
}

/* Styling Khusus Level */
.level-1 {
    background-color: #d1ecf1; /* Kepala Sekolah */
}
.level-2 {
    background-color: #cce5ff; /* Kasubag TU */
}

/* Container untuk Staf Bidang (untuk Flexbox) */
.staf-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}
.staf-container .node {
    flex-basis: calc(25% - 20px); /* Maksimal 4 per baris */
    min-width: 150px;
    background-color: #f8f9fa; 
}

/* -------------------------------------- */
/* STYLING INFORMASI TAMBAHAN */
/* -------------------------------------- */
.tugas-dan-pendukung h3 {
    color: #007bff;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
    margin-bottom: 20px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.info-block {
    background-color: #f8f9fa;
    padding: 15px;
    border-left: 5px solid #007bff;
    border-radius: 5px;
}

.info-block h4 {
    color: #007bff;
    margin-top: 0;
}

/* Media Query untuk Responsivitas */
@media (max-width: 768px) {
    .staf-container .node {
        flex-basis: calc(50% - 20px); /* 2 per baris di tablet/mobile */
    }
    .line-h {
        width: 90%;
    }
}
@media (max-width: 480px) {
    .staf-container .node {
        flex-basis: 100%; /* 1 per baris di HP */
    }
}
