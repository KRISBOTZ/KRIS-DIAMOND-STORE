# TODO - Admin Login & Access Control

- [ ] Update `diamond-store/script.js`
  - [ ] Tambahkan helper `isAdmin()` membaca `localStorage` key `diamond_store_admin_session_v1` dan juga `isAdmin` (sesuai spec).
  - [ ] Tambahkan `applyAdminUI()` untuk menampilkan label `ADMIN`, menyembunyikan tombol Login, dan menampilkan tombol Logout (sesuai placeholder elemen di HTML).
  - [ ] Ubah `renderProductsGrid()` agar saat admin:
    - [ ] Harga (`price`) menjadi `<input type=number>` editable.
    - [ ] Stok (`stock`) menjadi `<input type=number>` editable.
    - [ ] Saat non-admin: harga/stok tampil sebagai teks biasa.
    - [ ] Update data ke `diamond_store_products_v1` saat input berubah (blur/change).
  - [ ] Pastikan data produk default punya field `stock`.

- [ ] Update `diamond-store/products.html`
  - [ ] Tambahkan elemen label `ADMIN` dan tombol Logout admin.
  - [ ] Pastikan ada hook id/class yang dipakai `applyAdminUI()`.

- [ ] Update `diamond-store/admin-login.html`
  - [ ] Setelah sukses login, set `localStorage.setItem('isAdmin','true')` (sesuai spec) selain existing session key.

- [ ] Quick test
  - [ ] Login admin → buka products.html → harga & stok bisa diubah.
  - [ ] Reload halaman → akses tetap aktif.
  - [ ] Logout → harga & stok kembali teks biasa, tombol login terlihat.

