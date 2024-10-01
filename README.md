# Tugas Akhir Membuat Website

Proyek ini adalah submission akhir pada course **Belajar Dasar Pemrograman Web** pada learning path **React** di [Dicoding](dicoding.com).

## Kriteria Wajib

Berikut kriteria-kriteria wajib submission yang harus Anda penuhi.

- Terdapat elemen \<header>, \<footer>, \<main>, \<article>, dan \<aside> di berkas HTML.
- Masing-masing elemen wajib berisi konten yang peruntukkannya sesuai dengan elemen tersebut (menerapkan konsep semantic HTML dalam menyusun struktur website).
  Contohnya:
  - Tidak terdapat duplikasi elemen \<main>.
  - Elemen \<main> harus berada diantara \<header> dan \<footer>.
  - Harus terdapat elemen \<header> sebelum \<main> dan \<footer> sesudah \<main>.
  - Jika terdapat elemen \<header> atau \<footer> di dalam elemen \<article> atau \<aside>, maka hal tersebut diperbolehkan.
- Wajib menampilkan menampilkan foto di elemen \<aside>. Anda boleh menampilkan foto diri Anda sekaligus menampilkan biodata lainnya atau Anda juga bisa menampilkan foto yang relevan dengan konten yang Anda tulis.
- Menyusun layout menggunakan **flexbox**, bukan **float**.
- Tema yang ditampilkan bebas, kecuali tema Bandung.
- Semakin detail dan lengkap website Anda maka nilai submission akan makin tinggi.
  Berikut adalah sketsa dari struktur website yang dapat dijadikan referensi untuk mengerjakan submission. tetapi tidak kami diwajibkan.

Berikut adalah sketsa dari struktur website yang dapat dijadikan referensi untuk mengerjakan submission. tetapi tidak kami diwajibkan.

![sketsa dari struktur website](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a1d316319803898031089af9af77791e20230623094410.png)

Tips:

- Ketika melakukan import suatu resource pada file HTML, **pastikan untuk menggunakan relative path, bukan absolute path**. Hal ini karena berpotensi menyebabkan resource tersebut tidak dapat dibaca ketika direviu. Berikut adalah contohnya.

  - Absolute path: "**C:\Users\Documents\Projects\styles\style.css**" atau "**/home/user/Projects/styles/style.css**"
  - Relative path: "**styles/style.css**"

- Masih dalam topik yang sama mengenai asset/resource, **pastikan dalam penulisan nama file atau folder sama persis dengan keadaan sebenarnya**. Misalnya jika ada gambar dengan nama **profile.jpg** pada folder proyek, Anda harus import ia dengan nama **profile.jpg**, bukan **Profile.jpg**. Hal ini bertujuan agar beberapa file tersebut bisa dimuat dengan baik oleh browser pada beberapa Sistem Operasi, seperti Linux.

- Agar memudahkan Anda dalam membuat submission, gunakanlah IDE (Integrated Development Environtment) yang mendukung produktivitas dalam menuliskan kode. Misalnya Atom, VSCode, atau lainnya.

## Penilaian

Submission Anda akan dinilai oleh reviewer dengan skala 1-5 berdasarkan dari parameter yang ada. Anda dapat menerapkan beberapa saran untuk mendapatkan nilai tinggi. Berikut sarannya.

- Menerapkan tampilan aplikasi yang menarik.

  - Memiliki pemilihan warna yang pas dengan tema aplikasi. Dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti colorhunt.co.
  - Tata letak elemen yang pas.
  - Contoh: Tidak ada konten yang bertumpuk.
  - Penggunaan font yang pas dengan tema.
  - Penerapan padding dan margin yang pas.

- Menerapkan layout yang responsif.

  - Menggunakan media query untuk menyesuaikan layout pada berbagai ukuran layar device.
  - Pastikan untuk tidak terdapat konten yang menumpuk maupun keluar dari kontainer ketika dicoba pada dekstop, tablet, dan juga mobile.

- Terdapat penerapan JavaScript dalam memanipulasi DOM. Berikut contoh-contoh penerapan JavaScript dan silakan pilih salah satu.
  - Membuat dropdown.
  - Memanfaatkan logika seperti looping dalam menampilkan elemen dan konten.
  - Membuat slider.
  - dan lainnya yang mendukung tampilan website agar lebih hidup.

## Submission yang Tidak Sesuai Kriteria

Jika tidak sesuai dengan kriteria, submission Anda akan ditolak oleh reviewer. Berikut adalah beberapa poin-poinnya.

- Tidak memenuhi kriteria yang sudah ditentukan.
- Menggunakan library Bootstrap, Materialize, Foundation, ataupun library lain yang semacamnya untuk menyusun layout.
- Menggunakan template project yang didapat selain dari latihan Dicoding.
- Menggunakan tema mengenai Kota Bandung, maupun mengirimkan ulang beberapa project yang dipelajari pada modul latihan.
