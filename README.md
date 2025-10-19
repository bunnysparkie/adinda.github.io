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
/* ----------------------------------- */
/* 1. Pengaturan Dasar */
/* ----------------------------------- */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8; /* Biru muda/Abu-abu muda */
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* ----------------------------------- */
/* 2. Header */
/* ----------------------------------- */
.header {
    text-align: center;
    padding: 40px 20px;
    background-color: #1e3a8a; /* Biru Tua Sekolah */
    color: #ffffff;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 2.5em;
    margin-bottom: 5px;
    font-weight: 700;
}

.header h2 {
    font-size: 1.5em;
    margin-top: 0;
    font-weight: 400;
    opacity: 0.9;
}

/* ----------------------------------- */
/* 3. Organogram Pimpinan */
/* ----------------------------------- */
.section-pimpinan {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.jabatan {
    padding: 15px 25px;
    margin: 10px 0;
    border-radius: 10px;
    text-align: center;
    width: 280px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.jabatan h3, .jabatan h5 {
    margin: 0 0 5px 0;
    font-size: 1.1em;
    font-weight: 600;
}

.jabatan p, .jabatan ul {
    margin: 0;
    font-size: 1.1em;
    font-weight: 700;
}

.jabatan ul {
    list-style-type: none;
    padding: 0;
    font-weight: 400;
    font-size: 1em;
}

/* Warna Pimpinan */
.kepala-sekolah {
    background-color: #fef9c3; /* Kuning Paling Cerah */
    border: 3px solid #f59e0b;
}

.kasubag-tu {
    background-color: #bae6fd; /* Biru Muda */
    border: 3px solid #0ea5e9;
}

/* Garis Penghubung */
.line {
    background-color: #4b5563;
}

.line.vertical {
    width: 2px;
    height: 30px;
}

.line.horizontal {
    width: 90%;
    height: 2px;
}

/* ----------------------------------- */
/* 4. Bidang dan Petugas Grid */
/* ----------------------------------- */
.section-bidang {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
    border-top: 1px dashed #ccc;
    padding-top: 30px;
}

.grid-card-container {
    flex: 1;
    min-width: 45%;
}

.grid-card-container h4 {


