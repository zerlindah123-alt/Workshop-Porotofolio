# Portofolio Digital - Erina Zerlindah

Portofolio web modern untuk **Erina Zerlindah**, Mahasiswa D3 Teknik Telekomunikasi di **Politeknik Elektronika Negeri Surabaya (PENS)** yang berfokus pada target role **Software Engineer (Backend Development & Python)**.

---

## 🚀 Fitur Website Portofolio

1. **Responsif & Modern:** Didesain dengan Tailwind CSS, tampilan gelap (*slate dark mode*) elegan yang nyaman dibaca oleh recruiter di laptop maupun smartphone.
2. **Interactive Gebang Food Simulator:** Widget interaktif langsung di website yang mensimulasikan logika program Java (proyek rekomendasi kuliner Gebang berbasis batasan budget).
3. **Filter Proyek Interaktif:** Pengunjung dapat menyaring proyek berdasarkan kategori (*Software*, *Embedded/Mikrokontroler*, *Telekomunikasi & Simulasi*).
4. **Tombol Salin Email Cepat:** Memudahkan recruiter menyalin email `zerlindah123@gmail.com` dalam satu klik.
5. **Formulir Kontak Otomatis:** Terhubung langsung ke protokol `mailto` untuk memudahkan pengiriman pesan.
6. **Siap Vercel:** Dilengkapi konfigurasi `vercel.json` untuk *clean URLs* dan header keamanan.

---

## 📁 Struktur Direktori

```text
Workshop Portofolio/
├── index.html         # Halaman utama portofolio
├── js/
│   └── main.js        # Logika interaktif, filter, simulator & kontak
├── vercel.json        # Konfigurasi deployment ke Vercel
├── .gitignore         # File yang diabaikan oleh Git
└── README.md          # Panduan proyek & deployment
```

---

## 💻 1. Cara Melihat Website di Komputer Lokal

Anda tidak memerlukan instalasi server rumit. Cukup:
1. Buka folder `Workshop Portofolio` di File Explorer.
2. Klik dua kali pada file `index.html`.
3. Website akan langsung terbuka di browser Anda (Google Chrome, Edge, dsb.).

---

## 🐙 2. Panduan Mengunggah ke GitHub

### Langkah A: Buat Repository Baru di GitHub
1. Buka [github.com](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **New** (atau ikon `+` di kanan atas > **New repository**).
3. Beri nama repository, misalnya: `portfolio-erina` atau `erina-portfolio`.
4. Pilih **Public**.
5. **Penting:** Jangan centang "Add a README file" (karena kita sudah punya filenya di lokal).
6. Klik **Create repository**.
7. Salin URL repository Anda (contoh: `https://github.com/username-anda/portfolio-erina.git`).

### Langkah B: Jalankan Perintah Git di Terminal / PowerShell
Buka terminal (PowerShell atau Git Bash) di dalam folder proyek ini:

```bash
# 1. Inisialisasi git di folder ini
git init

# 2. Tambahkan semua file ke git staging
git add .

# 3. Buat commit pertama
git commit -m "feat: inisialisasi portofolio software engineer Erina Zerlindah"

# 4. Ganti nama branch utama menjadi main
git branch -M main

# 5. Hubungkan ke repository GitHub Anda (ganti URL di bawah dengan URL repo Anda)
git remote add origin https://github.com/username-anda/portfolio-erina.git

# 6. Unggah (push) file ke GitHub
git push -u origin main
```

---

## ⚡ 3. Panduan Deploy ke Vercel (Gratis & Online 24 Jam)

Vercel adalah platform hosting gratis tercepat untuk website statis seperti ini:

1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun **GitHub** Anda.
2. Di dashboard Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Di daftar repository GitHub Anda, cari repository `portfolio-erina` yang baru saja Anda push, lalu klik **"Import"**.
4. Di bagian konfigurasi:
   - **Framework Preset:** Biarkan `Other`.
   - **Root Directory:** `./` (default).
5. Klik tombol **"Deploy"**.
6. Tunggu sekitar 15–30 detik. Website Anda akan langsung aktif online dan mendapatkan domain gratis (contoh: `https://portfolio-erina.vercel.app`).
7. Setiap kali Anda melakukan perubahan kode dan melakukan `git push` ke GitHub, Vercel akan otomatis meng-update website Anda secara langsung!

---

## ✉️ Kontak
* **Nama:** Erina Zerlindah
* **Institusi:** Politeknik Elektronika Negeri Surabaya (PENS)
* **Email:** zerlindah123@gmail.com
