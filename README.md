# Weblab6

### PROFIL
NAMA : EKA MAULANA PRASETIA
KELAS : I253A
PRODI : TEKNIK INFORMATIKA
NIM : 312510012


### Mengubah teks dengan DOM
![Gambar 1](Screenshot6/Mengubahhh%20teks%20dengan%20DOM.png)

### Event click
![Gambar 2](Screenshot6/Event_click.png)

### Mengubah kelas dan gaya CSS
![Gambar 3](Screenshot6/Mengubah_kelas_dan_gaya_CSS.png)

### Event input dan penghitung karakter
![Gambar 4](Screenshot6/Event_input_dan_penghitung_karakter.png)

### Validasi form pendaftaran
![Gambar 5](Screenshot6/Validasi_form_pendaftaran.png)

### Daftar tugas sedrhana(To-do List)
![Gambar 6](Screenshot6/Daftar_tugas_sedrhana(To-do_List).png)

### Jawaban pertanyaan 

1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi struktur halaman HTML dalam bentuk objek yang bisa diakses dan diubah menggunakan JavaScript.

Manfaatnya adalah untuk mengubah teks, menambahkan atau menghapus elemen, mengatur tampilan, dan membuat halaman web menjadi interaktif.

2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?
- getElementById() digunakan untuk memilih elemen berdasarkan ID.
- querySelector() digunakan untuk memilih elemen pertama yang sesuai dengan selector CSS.
- querySelectorAll() digunakan untuk memilih semua elemen yang sesuai dengan selector CSS.
3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?

addEventListener() berfungsi untuk menjalankan suatu perintah ketika pengguna melakukan tindakan tertentu pada halaman web.

Contoh event:
- click: ketika tombol diklik.
- input: ketika pengguna mengetik pada kolom input.
- submit: ketika pengguna mengirim form.
4. Mengapa event.preventDefault() digunakan pada event submit form?

event.preventDefault() digunakan untuk mencegah tindakan bawaan browser, seperti halaman yang otomatis dimuat ulang ketika form dikirim. Dengan begitu, JavaScript bisa memeriksa data terlebih dahulu dan menampilkan pesan validasi.

5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?
- textContent digunakan untuk menampilkan atau mengubah teks biasa.
- innerHTML digunakan untuk menampilkan atau mengubah isi HTML, termasuk tag HTML.
Dari sisi keamanan, textContent lebih aman untuk menampilkan teks dari pengguna karena tidak membaca teks tersebut sebagai kode HTML. Sementara itu, innerHTML perlu digunakan dengan hati-hati karena bisa menimbulkan risiko keamanan jika memasukkan HTML dari sumber yang tidak dipercaya.

6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?

classList.toggle() digunakan untuk menambahkan atau menghapus class CSS pada suatu elemen secara bergantian. Dengan begitu, tampilan elemen bisa berubah ketika tombol diklik, misalnya mengubah warna, ukuran teks, atau menyembunyikan elemen.

7. Sebutkan minimal tiga skenario pengujian validasi form.

Contoh pengujian validasi form:
1. Semua kolom dikosongkan untuk memastikan muncul pesan bahwa data wajib diisi.
2. Mengisi email dengan format yang salah untuk memastikan muncul pesan kesalahan.
3. Mengisi usia di bawah 17 tahun untuk memastikan sistem menolak data tersebut.
4. Mengisi semua data dengan benar untuk memastikan muncul pesan bahwa validasi berhasil.