# TODO - Split Pages (index landing vs beranda product/checkout)

## Step 1: Validasi saat ini (no change)
- [x] Cek `diamond-store/index.html`: saat ini berisi hero + “Paket Populer” + fitur + “Produk Unggulan”.
- [x] Cek `diamond-store/beranda.html`: saat ini hanya konten hero + “Paket Populer” + fitur + “Produk Unggulan”, tanpa header/footer.
- [x] Cek `diamond-store/products.html` dan `diamond-store/checkout.html` sebagai referensi tombol/checkout.

## Step 2: Definisikan target layout
- [ ] `index.html` = landing page seperti Codashop: banner/slider gambar Free Fire + rekomendasi game + katalog game.
- [ ] `beranda.html` = halaman produk/checkout: navbar + hero + fitur respon cepat/aman/terpercaya + paket populer + tombol order.

## Step 3: Implementasi perubahan markup (pisahkan, jangan menukar)
- [ ] Ubah `diamond-store/index.html` menjadi struktur landing page baru (from scratch untuk slider Free Fire).
  - [ ] Gunakan placeholder gambar banner contoh: `./images/slide-ff-1.png`, `./images/slide-ff-2.png`, dst (nanti diganti saat upload).
- [ ] Pastikan `#popularSlider` di `beranda.html` tetap ada dan berfungsi.
- [ ] Ubah `diamond-store/beranda.html` menjadi full page (butuh header/footer navbar) sesuai requirement.


## Step 4: Routing tombol agar tetap benar
- [ ] Tombol “Order” di `beranda.html` tetap mengarah ke `./products.html`.
- [x] Tombol katalog/rekomendasi di `index.html` mengarah ke `./products.html`.


## Step 5: Responsif
- [ ] Verifikasi mobile (<=720px) untuk navbar toggle dan layout grid.

## Step 6: Testing cepat
- [ ] Buka `index.html`: pastikan slider/rekomendasi/katalog tampil.
- [ ] Buka `beranda.html`: pastikan navbar/hero/fitur/paket populer/tombol order tampil.
- [ ] Cek bahwa `products.html` dan `checkout.html` tidak berubah.

