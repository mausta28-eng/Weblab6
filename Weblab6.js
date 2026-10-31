//script
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombolKlik = document.getElementById("tombolKlik");
const hasilKlik = document.getElementById("hasilKlik");
tombolKlik.addEventListener("click", function() {
    hasilKlik.textContent = "Tombol berhasil diklik!";
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function() {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function() {
    jumlahKarakter.textContent = namaInput.value.length;
});

const formPendaftaran = document.getElementById("formPendaftaran");
const pesanValidasi = document.getElementById("pesanValidasi");

formPendaftaran.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaLengkap").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    if (nama === "" || email === "" || usiaInput === "") {
        pesanValidasi.textContent = "Semua data harus diisi!";
    } else if (!email.includes("@") || !email.includes(".")) {
        pesanValidasi.textContent = "Format email belum benar!";
    } else if (usia < 17 || usia > 100) {
        pesanValidasi.textContent = "Usia harus antara 17 sampai 100 tahun!";
    } else {
        pesanValidasi.textContent = "Pendaftaran berhasil!";
    }
});
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    item.append(label, selesai);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});