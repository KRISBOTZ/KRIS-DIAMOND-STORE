# TODO Theme Gelap Elegan (Dark Champagne / Black)

## Rencana Perubahan
1. Update `diamond-store/styles.css`:
   - Ganti base gradient/background agar lebih gelap dan matte (black/champagne).
   - Perkecil intensitas glow ungu-biru global.
   - Perbaiki warna teks/muted agar tetap terbaca (kontras naik).
2. Update komponen yang berpotensi terlihat “terang” di produk:
   - `.product-card`, `.product-thumb::after`, `.products-hero`, `.stat-card`, `.hero-cta-card`:
     kurangi transparansi/glow, pakai border lebih gelap/halus, ubah highlight lebih premium.
3. Pastikan tombol/chip/inputs tetap konsisten:
   - `btn-primary`, `.chip.is-active`, `.pay-choice.is-active` lebih “deep” (tanpa terlalu banyak glow biru-ungu).
4. Smoke test cepat:
   - Buka `products.html`, `beranda.html`, `index.html` lalu cek keterbacaan & kontras.

## Status
- [ ] Belum mulai

