# TODO_SPLIT_PAGES

## 0) Validasi (tidak mengubah code)
- [x] index.html saat ini berisi hero + Paket Populer + fitur + Produk Unggulan (grid #productGrid).
- [x] beranda.html saat ini hanya section konten (tanpa header/footer).

## 1) Implementasi `index.html` (landing Codashop-like)
- [x] Buat layout baru yang berbeda dari beranda:
  - [x] Banner slider Free Fire (placeholder gambar: ./images/slide-ff-1.png, ./images/slide-ff-2.png)
  - [x] Seksi rekomendasi game
  - [x] Seksi katalog game dengan markup baru **tidak bergantung** #productGrid (pilih paket/anchor) 
- [x] Pastikan tombol katalog/rekomendasi mengarah ke `./products.html`
- [x] Pastikan tetap responsif mobile/desktop


## 2) Implementasi `beranda.html` (produk/checkout-like)
- [x] Ubah beranda.html menjadi halaman full:
  - [x] Tambahkan header navbar + footer (konsisten dengan halaman lain)
  - [x] Pertahankan hero section + fitur (respon cepat/aman/terpercaya)
  - [x] Pertahankan Paket Populer slider #popularSlider dan tombol Order mengarah ke `./products.html`
  - [x] Pertahankan grid #productGrid (opsional) namun tidak perlu layout katalog seperti index
- [x] Pastikan tidak menukar isi layout antara index dan beranda


## 3) CSS
- [x] Tambahkan class baru section-index-only agar tidak merusak existing styles


## 4) Testing
- [ ] Buka `index.html` (pastikan banner slider, rekomendasi, katalog tampil; tombol benar)
- [ ] Buka `beranda.html` (pastikan navbar/hero/fitur/paket populer/tombol order tampil)
- [ ] Cek mobile (<=720px)

