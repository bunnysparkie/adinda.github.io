<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Organisasi TU - SMA N 103 Jakarta (2025)</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1>STRUKTUR ORGANISASI TATA USAHA</h1>
        <h2>SMA NEGERI 103 JAKARTA</h2>
        <p class="tahun">TAHUN **2025**</p>
    </header>

    <main class="container">
        <section class="card leader-card">
            <h3 class="role">Kepala Sekolah</h3>
            <p class="name">➡️ **Suparni, M.Pd.**</p>
        </section>

        <section class="card sub-leader-card">
            <h3 class="role">Kasubag TU</h3>
            <p class="name">➡️ **Martin Malau, S.Pd.**</p>
        </section>

        <section class="bidang-container" id="bidang-bidang">
            <h3 class="section-title">BIDANG-BIDANG TATA USAHA</h3>
            </section>

        <section class="card support-card" onclick="toggleDetails('support-details')">
            <h3 class="role">Petugas Pendukung <span class="toggle-icon">▼</span></h3>
            <div class="details" id="support-details">
                <p><strong>Caraka Kebersihan:</strong> Supandi, Tumijo, Slamet Kahono</p>
                <p><strong>Keamanan / Satpam:</strong> M. Rizki Furqoni</p>
            </div>
        </section>

        <section class="info-card-group">
            <div class="info-card" onclick="toggleDetails('keuangan-details')">
                <h4>Adminitrasi Keuangan <span class="toggle-icon">▼</span></h4>
                <ul class="details" id="keuangan-details">
                    <li>Laporan Pendapatan dan Pengeluaran</li>
                    <li>Laporan Aset dan Kewajiban</li>
                    <li>Kebijakan Akuntansi</li>
                    <li>Perencanaan Anggaran & Pencarian Sumber Dana</li>
                    <li>Pengawasan, Evaluasi, dan Pertanggungjawaban</li>
                </ul>
            </div>

            <div class="info-card" onclick="toggleDetails('persuratan-details')">
                <h4>Surat Persuratan <span class="toggle-icon">▼</span></h4>
                <ul class="details" id="persuratan-details">
                    <li>Surat Masuk & Surat Keluar</li>
                    <li>Penerimaan, Pencatatan, Penyortiran, dan Pendisposisian</li>
                    <li>Pengolahan, Pembuatan, dan Pengarsipan</li>
                </ul>
            </div>

            <div class="info-card" onclick="toggleDetails('kesiswaan-details')">
                <h4>Data Kesiswaan (Tahun 2025) <span class="toggle-icon">▼</span></h4>
                <ul class="details" id="kesiswaan-details">
                    <li>Kelas X : 216 Siswa</li>
                    <li>Kelas XI : 252 Siswa</li>
                    <li>Kelas XII : 252 Siswa</li>
                </ul>
            </div>
            
            <div class="info-card" onclick="toggleDetails('sarana-details')">
                <h4>Sarana & Prasarana Utama <span class="toggle-icon">▼</span></h4>
                <ul class="details" id="sarana-details">
                    <li>Meja, Kursi/Sofa, Lemari Kecil, Rak Kecil</li>
                    <li>Komputer, Keyboard, Printer</li>
                    <li>Map, Kalender, Figuran, Tirai</li>
                </ul>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
