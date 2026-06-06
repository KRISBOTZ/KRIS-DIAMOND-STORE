# TODO_CUSTOM - Diamond Store

## Phase 1: Harga & Produk
- [ ] Update daftar `PRODUCTS` di `diamond-store/script.js` (Free Fire & Mobile Legends) sesuai tabel baru.

## Phase 2: Payment UI + warna aktif + nomor pembayaran
- [ ] Ubah `diamond-store/checkout.html` menjadi opsi payment yang bisa highlight warna.
- [ ] Tampilkan nomor dana/gopay: 0857-8255-470.

## Phase 3: Status order + redirect ke WhatsApp admin setelah admin konfirmasi
- [ ] Saat submit checkout: simpan `orderId` sebagai `diamond_store_last_order_v1` di localStorage.
- [ ] Saat admin menandai pesanan selesai: ubah status order -> `done`.
- [ ] Di `checkout.html`: polling status order, jika `done` -> redirect WhatsApp admin dengan pesan rincian order.

## Phase 4: Login admin/developer & customer (2 jalur login)
- [ ] Ubah `diamond-store/login.html` jadi hanya customer (boleh daftar).
- [ ] Ubah `diamond-store/admin-login.html` jadi hanya admin/developer (tanpa daftar akun).
- [ ] Tambahkan guard role di `diamond-store/admin.html`.

## Phase 5: Admin bisa ubah produk & kelola role user
- [ ] Pindahkan produk ke localStorage (`diamond_store_products_v1`) + seed default.
- [ ] Buat UI edit/add produk di `admin.html`.
- [ ] Buat UI set role akun: user <-> admin/developer.

## Testing
- [ ] Cek alur customer:
  - [ ] Checkout -> buat pesanan -> tunggu konfirmasi admin -> otomatis open WA admin.
- [ ] Cek alur admin:
  - [ ] Login admin -> lihat pending -> konfirmasi -> order status berubah.
- [ ] Cek tampilan payment:
  - [ ] Payment option highlight saat dipilih.

