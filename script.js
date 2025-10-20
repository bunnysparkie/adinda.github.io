document.addEventListener('DOMContentLoaded', () => {
    // Data Struktur Organisasi
    const organisasiData = {
        bidang: [
            { role: "Kesiswaan", name: "Yulianti" },
            { role: "Sarana dan Prasarana", name: "Kuwat Yuliyono" },
            { role: "Kepegawaian", name: "Temti Malau" },
            { role: "Operator", name: "Per, S.Kom" },
            { role: "Bendahara", name: "Sugati, S.Pd." },
            { role: "Perpustakaan", name: "Aelis Yuningsih, S.Kom" },
            { role: "Laboran", name: "Ananda Joel, S.E." }
        ],
        kesiswaan: [
            "Kelas X : 216",
            "Kelas XI : 252",
            "Kelas XII : 252"
        ],
        sarana: [
            "Meja", "Kursi/Sofa", "Lemari Kecil", "Rak Kecil",
            "Komputer", "Keyboard", "Printer", "Map", "Kalender",
            "Figuran", "Tirai"
        ],
        keuangan: [
            "Laporan Pendapatan dan Pengeluaran",
            "Laporan Aset dan Kewajiban",
            "Kebijakan Akuntansi",
            "Perencanaan Anggaran",
            "Pengawasan dan Evaluasi",
            "Pertanggungjawaban"
        ],
        persuratan: [
            "Surat masuk dan keluar",
            "Surat keterangan",
            "Penerimaan dan pencatatan",
            "Penyortiran dan pendisposisian",
            "Pengarsipan",
            "Pengiriman"
        ]
    };

    // 1. Fungsi untuk mengisi Bidang-Bidang
    const bidangContainer = document.querySelector('.bidang-container');
    if (bidangContainer) {
        organisasiData.bidang.forEach((item, index) => {
            const bidangItem = document.createElement('div');
            bidangItem.classList.add('bidang-item', 'card');
            // Menambahkan delay pada animasi fade-in
            bidangItem.style.animationDelay = `${0.1 * index}s`;

            bidangItem.innerHTML = `
                <h4>${item.role}</h4>
                <p>${item.name}</p>
            `;
            bidangContainer.appendChild(bidangItem);
        });
    }

    // 2. Fungsi untuk mengisi Detail Tambahan (Kesiswaan, Sarana, dll.)
    function populateList(selector, dataArray) {
        const ulElement = document.querySelector(`[data-section="${selector}"] ul`);
        if (ulElement) {
            ulElement.innerHTML = ''; // Bersihkan konten lama
            dataArray.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ulElement.appendChild(li);
            });
        }
    }

    populateList('kesiswaan', organisasiData.kesiswaan);
    populateList('sarana', organisasiData.sarana.slice(0, 6)); // Ambil beberapa contoh untuk card
    populateList('keuangan', organisasiData.keuangan);
    populateList('persuratan', organisasiData.persuratan);

    // 3. Menambahkan animasi pada elemen yang sudah ada
    // Untuk memastikan semua elemen 'fade-in' muncul setelah DOM siap.
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        el.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });

});
