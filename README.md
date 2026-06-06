# KRIS DIAMOND STORE (Demo)

Website demo toko diamond (front-end statis). Data user & pesanan disimpan di `localStorage` (tanpa server).

---

## 🚀 Cara Menjalankan Lokal
Buka file `index.html` di browser.

> Catatan: Semua halaman menggunakan navigasi berbasis file (tanpa backend). Aset seperti CSS/JS dan gambar harus tersedia relatif terhadap folder ini.

---

## 🔐 Akun Admin
Buat akun admin ini di halaman **Login** (atau pakai data seed yang ada di proyek ini).

- **Nama Admin:** Kris Design
- **Email Admin:** krisdesign0@gmail.com
- **Password Admin:** kris12345

---

## 👥 Daftar Akun Pelanggan
Buka: **customers.html** untuk melihat daftar akun pelanggan.

---

## 🧾 Catatan Implementasi
- Data user dan pesanan disimpan di `localStorage` (tanpa server).
- Pesanan status awal: `new`
- Admin dapat mengubah status pesanan menjadi `done`.

---

## 💳 Metode Pembayaran
Metode pembayaran yang tersedia:
- **QRIS**
- GoPay
- OVO
- DANA

---

## 📦 Struktur File (untuk GitHub Pages)
Halaman utama:
- `index.html`
- `about.html`
- `products.html`
- `faq.html`
- `customers.html`
- `login.html`
- `admin.html`
- `admin-login.html`
- `checkout.html`
- `sound.html`

Asset:
- `styles.css`
- `script.js`
- folder `images/`

---

## 🌐 Publikasi ke GitHub (GitHub Pages)
Proyek ini bisa dipublikasikan dengan **dua mode**:

### A) GitHub Pages dari Root Repo
1. Pastikan semua file website berada di root repository.
2. GitHub akan mendeteksi static site.
3. Di GitHub:
   - **Settings** → **Pages** → **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (atau `master`)
   - Folder: **/(root)**
4. Simpan dan tunggu URL Pages muncul.

### B) GitHub Pages via `/docs`
Jika kamu ingin pakai folder khusus `/docs`:
1. Buat folder `docs/` di root repo.
2. Pindahkan/duplikasi seluruh file website (mis. `index.html`, `styles.css`, `script.js`, `images/`, dst) ke dalam `docs/`.
3. Di GitHub:
   - **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: **/docs**
4. Simpan dan tunggu URL Pages muncul.

---

## ✅ Tips (penting)
- Pastikan semua link antar-halaman memakai path yang benar (karena GitHub Pages bisa mengakses lewat root atau lewat `/docs`).
- Kalau kamu memutuskan mode `/docs`, semua referensi aset (mis. `./styles.css`, `./script.js`, `./images/...`) harus tetap valid relatif terhadap lokasi file.


