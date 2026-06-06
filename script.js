// ===== Shared utilities =====
const LS_CART_KEY = 'diamond_store_cart_v1';
const LS_USER_KEY = 'diamond_store_user_v1';
const LS_AUTH_SESSION_KEY = 'diamond_store_auth_session_v1';
const LS_USERS_KEY = 'diamond_store_users_v1';


function moneyIDR(n) {
  const num = Number(n) || 0;
  return 'Rp ' + num.toLocaleString('id-ID');
}

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

const LS_PRODUCTS_KEY = 'diamond_store_products_v1';

const DEFAULT_PRODUCTS = [

  // Seed produk awal (admin bisa mengubah via panel admin)

  // ===== Free Fire =====
  { id: 'ff-5', game: 'ff', name: 'Free Fire Diamond 5', diamond: 5, desc: 'Paket 5 Diamond', price: 1000, stock: 999, thumb: './images/ff.png', badges: ['5 DF'] },
  { id: 'ff-12', game: 'ff', name: 'Free Fire Diamond 12', diamond: 12, desc: 'Paket 12 Diamond', price: 2000, stock: 999, thumb: './images/ff.png', badges: ['12 DF'] },
  { id: 'ff-50', game: 'ff', name: 'Free Fire Diamond 50', diamond: 50, desc: 'Paket 50 Diamond', price: 8000, stock: 999, thumb: './images/ff.png', badges: ['50 DF'] },
  { id: 'ff-70', game: 'ff', name: 'Free Fire Diamond 70', diamond: 70, desc: 'Paket 70 Diamond', price: 10000, stock: 999, thumb: './images/ff.png', badges: ['70 DF'] },
  { id: 'ff-140', game: 'ff', name: 'Free Fire Diamond 140', diamond: 140, desc: 'Paket 140 Diamond', price: 20000, stock: 999, thumb: './images/ff.png', badges: ['140 DF'] },
  { id: 'ff-355', game: 'ff', name: 'Free Fire Diamond 355', diamond: 355, desc: 'Paket 355 Diamond', price: 50000, stock: 999, thumb: './images/ff.png', badges: ['355 DF'] },
  { id: 'ff-720', game: 'ff', name: 'Free Fire Diamond 720', diamond: 720, desc: 'Paket 720 Diamond', price: 100000, stock: 999, thumb: './images/ff.png', badges: ['720 DF'] },
  { id: 'ff-1450', game: 'ff', name: 'Free Fire Diamond 1.450', diamond: 1450, desc: 'Paket 1.450 Diamond', price: 200000, stock: 999, thumb: './images/ff.png', badges: ['1.450 DF'] },
  { id: 'ff-2180', game: 'ff', name: 'Free Fire Diamond 2.180', diamond: 2180, desc: 'Paket 2.180 Diamond', price: 300000, stock: 999, thumb: './images/ff.png', badges: ['2.180 DF'] },
  { id: 'ff-3640', game: 'ff', name: 'Free Fire Diamond 3.640', diamond: 3640, desc: 'Paket 3.640 Diamond', price: 500000, stock: 999, thumb: './images/ff.png', badges: ['3.640 DF'] },
  { id: 'ff-7290', game: 'ff', name: 'Free Fire Diamond 7.290', diamond: 7290, desc: 'Paket 7.290 Diamond', price: 1000000, stock: 999, thumb: './images/ff.png', badges: ['7.290 DF'] },
  { id: 'ff-36500', game: 'ff', name: 'Free Fire Diamond 36.500', diamond: 36500, desc: 'Paket 36.500 Diamond', price: 5000000, stock: 999, thumb: './images/ff.png', badges: ['36.500 DF'] },

  // ===== Mobile Legends =====
  { id: 'ml-5', game: 'ml', name: 'Mobile Legends Diamond 5', diamond: 5, bonus: 0, desc: 'Paket 5 Diamond', price: 1500, stock: 999, thumb: './images/ml.png', badges: ['5'] },
  { id: 'ml-11', game: 'ml', name: 'Mobile Legends Diamond 11 + 1 Bonus', diamond: 11, bonus: 1, desc: 'Paket 11 + 1 Bonus', price: 3500, stock: 999, thumb: './images/ml.png', badges: ['11 + 1'] },
  { id: 'ml-17', game: 'ml', name: 'Mobile Legends Diamond 17 + 2 Bonus', diamond: 17, bonus: 2, desc: 'Paket 17 + 2 Bonus', price: 5500, stock: 999, thumb: './images/ml.png', badges: ['17 + 2'] },
  { id: 'ml-25', game: 'ml', name: 'Mobile Legends Diamond 25 + 3 Bonus', diamond: 25, bonus: 3, desc: 'Paket 25 + 3 Bonus', price: 8000, stock: 999, thumb: './images/ml.png', badges: ['25 + 3'] },
  { id: 'ml-40', game: 'ml', name: 'Mobile Legends Diamond 40 + 4 Bonus', diamond: 40, bonus: 4, desc: 'Paket 40 + 4 Bonus', price: 11500, stock: 999, thumb: './images/ml.png', badges: ['40 + 4'] },
  { id: 'ml-53', game: 'ml', name: 'Mobile Legends Diamond 53 + 6 Bonus', diamond: 53, bonus: 6, desc: 'Paket 53 + 6 Bonus', price: 15200, stock: 999, thumb: './images/ml.png', badges: ['53 + 6'] },
  { id: 'ml-77', game: 'ml', name: 'Mobile Legends Diamond 77 + 8 Bonus', diamond: 77, bonus: 8, desc: 'Paket 77 + 8 Bonus', price: 21850, stock: 999, thumb: './images/ml.png', badges: ['77 + 8'] },
  { id: 'ml-154', game: 'ml', name: 'Mobile Legends Diamond 154 + 16 Bonus', diamond: 154, bonus: 16, desc: 'Paket 154 + 16 Bonus', price: 43700, stock: 999, thumb: './images/ml.png', badges: ['154 + 16'] },
  { id: 'ml-217', game: 'ml', name: 'Mobile Legends Diamond 217 + 23 Bonus', diamond: 217, bonus: 23, desc: 'Paket 217 + 23 Bonus', price: 61750, stock: 999, thumb: './images/ml.png', badges: ['217 + 23'] },
  { id: 'ml-256', game: 'ml', name: 'Mobile Legends Diamond 256 + 40 Bonus', diamond: 256, bonus: 40, desc: 'Paket 256 + 40 Bonus', price: 76000, stock: 999, thumb: './images/ml.png', badges: ['256 + 40'] },
  { id: 'ml-367', game: 'ml', name: 'Mobile Legends Diamond 367 + 41 Bonus', diamond: 367, bonus: 41, desc: 'Paket 367 + 41 Bonus', price: 104500, stock: 999, thumb: './images/ml.png', badges: ['367 + 41'] },
  { id: 'ml-503', game: 'ml', name: 'Mobile Legends Diamond 503 + 65 Bonus', diamond: 503, bonus: 65, desc: 'Paket 503 + 65 Bonus', price: 142500, stock: 999, thumb: './images/ml.png', badges: ['503 + 65'] },
  { id: 'ml-774', game: 'ml', name: 'Mobile Legends Diamond 774 + 101 Bonus', diamond: 774, bonus: 101, desc: 'Paket 774 + 101 Bonus', price: 218500, stock: 999, thumb: './images/ml.png', badges: ['774 + 101'] },
  { id: 'ml-1780', game: 'ml', name: 'Mobile Legends Diamond 1.780 + 302 Bonus', diamond: 1780, bonus: 302, desc: 'Paket 1.780 + 302 Bonus', price: 475000, stock: 999, thumb: './images/ml.png', badges: ['1.780 + 302'] },
  { id: 'ml-4003', game: 'ml', name: 'Mobile Legends Diamond 4.003 + 827 Bonus', diamond: 4003, bonus: 827, desc: 'Paket 4.003 + 827 Bonus', price: 1140000, stock: 999, thumb: './images/ml.png', badges: ['4.003 + 827'] },
];


function getProducts() {
  try {
    const raw = localStorage.getItem(LS_PRODUCTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch {}
  return DEFAULT_PRODUCTS;
}

function setProducts(products) {
  localStorage.setItem(LS_PRODUCTS_KEY, JSON.stringify(products || []));
}

function ensureProductsSeed() {
  try {
    const raw = localStorage.getItem(LS_PRODUCTS_KEY);
    if (!raw) setProducts(DEFAULT_PRODUCTS);
  } catch {
    // ignore
  }
}

ensureProductsSeed();



function getCart() {
  try {
    return JSON.parse(localStorage.getItem(LS_CART_KEY)) || [];
  } catch {
    return [];
  }
}

function setCart(items) {
  localStorage.setItem(LS_CART_KEY, JSON.stringify(items));
}

function cartTotal(items) {
  return items.reduce((sum, it) => sum + (Number(it.price) || 0) * (Number(it.qty) || 0), 0);
}

function cartAdminFee(total) {
  // Simulasi: 2% admin min Rp 2000 max Rp 10000
  const fee = Math.round(total * 0.02);
  return Math.max(2000, Math.min(10000, fee));
}

function addToCart(productId) {
  const products = getProducts();
  const p = products.find(x => x.id === productId);

  if (!p) return;
  const cart = getCart();
  const existing = cart.find(x => x.id === p.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1, game: p.game });
  setCart(cart);
}


function isAdmin() {
  try {
    // spek: isAdmin=true (localStorage/sessionStorage)
    const rawFlag = localStorage.getItem('isAdmin');
    if (rawFlag === 'true') return true;

    // kompatibilitas dengan implementasi existing admin.html/admin-login.html
    const sess = localStorage.getItem('diamond_store_admin_session_v1');
    if (!sess) return false;
    return true;
  } catch {
    return false;
  }
}

function applyAdminUI() {
  const is = isAdmin();

  // legacy (produk.html)
  const adminStatus = document.getElementById('adminStatus');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  if (adminStatus) adminStatus.style.display = is ? 'block' : 'none';
  if (adminLogoutBtn) adminLogoutBtn.style.display = is ? 'inline-flex' : 'none';

  // global admin panel (index/about)
  const adminPanelWrap = document.getElementById('globalAdminPanelWrap');
  if (adminPanelWrap) adminPanelWrap.style.display = is ? 'flex' : 'none';

  // Kembali ke Home/Admin (kondisional) - dipakai di beranda/products/about/testimoni
  const backWrap = document.getElementById('backToHomeOrAdminWrap');
  const backLink = document.getElementById('backToHomeOrAdminLink');
  if (backWrap && backLink) {
    backLink.href = is ? './admin.html' : './index.html';
    backLink.textContent = is ? '← Kembali ke Admin' : '← Kembali ke Halaman Utama';
    backWrap.style.display = 'flex';
  }

  const btnLogoutGlobal = document.getElementById('globalAdminLogoutBtn');
  if (btnLogoutGlobal && !btnLogoutGlobal.dataset.bound) {
    btnLogoutGlobal.dataset.bound = '1';
    btnLogoutGlobal.addEventListener('click', () => {
      localStorage.removeItem('diamond_store_admin_session_v1');
      localStorage.removeItem('isAdmin');
      window.location.href = './login.html';
    });
  }

  const btnAdminPanelGlobal = document.getElementById('globalAdminPanelBtn');
  if (btnAdminPanelGlobal) {
    btnAdminPanelGlobal.addEventListener('click', () => {
      window.location.href = './admin.html';
    });
  }

  // sembunyikan tombol login di halaman yang punya elemen umum (kalau ada)
  $all('.site-header .nav a[href="./login.html"], .site-header .mobile-nav a[href="./login.html"]').forEach(a => {
    a.style.display = is ? 'none' : '';
  });

  if (adminLogoutBtn && !adminLogoutBtn.dataset.bound) {
    adminLogoutBtn.dataset.bound = '1';
    adminLogoutBtn.addEventListener('click', () => {
      localStorage.removeItem('diamond_store_admin_session_v1');
      localStorage.removeItem('isAdmin');
      window.location.href = './login.html';
    });
  }
}


function ensureProductStockFields(products) {
  // backward compatibility: produk lama belum punya stock
  return (products || []).map(p => {
    const next = { ...p };
    if (next.stock === undefined || next.stock === null || !Number.isFinite(Number(next.stock))) {
      next.stock = 999;
    } else {
      next.stock = Number(next.stock);
    }
    if (next.price === undefined || next.price === null || !Number.isFinite(Number(next.price))) {
      next.price = 0;
    } else {
      next.price = Number(next.price);
    }
    return next;
  });
}

function renderProductsGrid(containerId, { filter = 'all', q = '', sort = 'default' } = {}) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const isA = isAdmin();
  const query = (q || '').toLowerCase().trim();
  const products = ensureProductStockFields(getProducts());

  let list = products.filter(p => {
    const okGame = filter === 'all' ? true : p.game === filter;
    const okQuery = !query ? true : (p.name + ' ' + p.desc + ' ' + (p.badges || []).join(' ')).toLowerCase().includes(query);
    return okGame && okQuery;
  });

  // Sorting
  const withPrice = (x) => Number(x.price ?? 0);
  if (sort === 'price-asc') {
    list = list.slice().sort((a, b) => withPrice(a) - withPrice(b));
  } else if (sort === 'price-desc') {
    list = list.slice().sort((a, b) => withPrice(b) - withPrice(a));
  } else {
    // "Terbaru" (data terakhir ditampilkan lebih dulu)
    list = list.slice().reverse();
  }

  grid.innerHTML = list.map(p => {
    const gameLabel = p.game === 'ff' ? 'Free Fire' : 'Mobile Legends';
    const stockVal = Number(p.stock ?? 999);
    const priceVal = Number(p.price ?? 0);

    if (isA) {
      return `
        <article class="product-card">
          <div class="product-thumb">
            <img src="${p.thumb}" alt="${gameLabel}" onerror="this.style.display='none'" />
          </div>
          <h3>${p.name}</h3>
          <div class="badges">
            ${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}
            <span class="badge">${gameLabel}</span>
          </div>

          <div class="product-meta">${p.desc}</div>

          <div class="admin-edit-row" style="display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:10px; margin-top:10px;">
            <div>
              <div class="small" style="opacity:.85; margin-bottom:6px;">Harga</div>
              <input class="input" type="number" min="0" step="100" data-admin-price="${p.id}" value="${priceVal}" />
            </div>
            <div>
              <div class="small" style="opacity:.85; margin-bottom:6px;">Diamond</div>
              <input class="input" type="number" min="0" step="1" data-admin-diamond="${p.id}" value="${Number(p.diamond ?? 0)}" />
            </div>
            <div>
              <div class="small" style="opacity:.85; margin-bottom:6px;">Stok</div>
              <input class="input" type="number" min="0" step="1" data-admin-stock="${p.id}" value="${stockVal}" />
            </div>
          </div>


          <div class="product-actions" style="margin-top:12px;">
            <button class="btn btn-primary" type="button" data-add="${p.id}">Tambah ke Keranjang</button>
            <a class="btn btn-ghost" href="./checkout.html" data-buy="${p.id}">Checkout</a>
          </div>
        </article>
      `;
    }

    return `
      <article class="product-card">
        <div class="product-thumb">
          <img src="${p.thumb}" alt="${gameLabel}" onerror="this.style.display='none'" />
        </div>
        <h3>${p.name}</h3>
        <div class="badges">
          ${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}
          <span class="badge">${gameLabel}</span>
        </div>
        <div class="price">${moneyIDR(priceVal)}</div>
        <div class="product-meta">${p.desc}</div>
        <div class="small" style="opacity:.85; margin-top:8px;">Stok: <b>${stockVal}</b></div>
        <div class="product-actions">
          <button class="btn btn-primary" type="button" data-add="${p.id}">Tambah ke Keranjang</button>
          <a class="btn btn-ghost" href="./checkout.html" data-buy="${p.id}">Checkout</a>
        </div>
      </article>
    `;
  }).join('');


  // bind buttons
  $all('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.getAttribute('data-add'));
      showToast('Produk ditambahkan ke keranjang.');
    });
  });

  $all('[data-buy]').forEach(link => {
    link.addEventListener('click', () => {
      addToCart(link.getAttribute('data-buy'));
    });
  });

  // bind admin inputs (price/stock) -> simpan otomatis ke localStorage
  if (isA) {
    $all('[data-admin-price]').forEach(input => {
      input.addEventListener('change', () => {
        const pid = input.getAttribute('data-admin-price');
        const v = Number(input.value || 0);
        const products = ensureProductStockFields(getProducts());
        const idx = products.findIndex(p => p.id === pid);
        if (idx >= 0) {
          products[idx].price = v;
          setProducts(products);
        }
      });
    });

    $all('[data-admin-stock]').forEach(input => {
      input.addEventListener('change', () => {
        const pid = input.getAttribute('data-admin-stock');
        const v = Number(input.value || 0);
        const products = ensureProductStockFields(getProducts());
        const idx = products.findIndex(p => p.id === pid);
        if (idx >= 0) {
          products[idx].stock = v;
          setProducts(products);
        }
      });
    });

    $all('[data-admin-diamond]').forEach(input => {
      input.addEventListener('change', () => {
        const pid = input.getAttribute('data-admin-diamond');
        const v = Number(input.value || 0);
        const products = ensureProductStockFields(getProducts());
        const idx = products.findIndex(p => p.id === pid);
        if (idx >= 0) {
          products[idx].diamond = v;
          setProducts(products);
        }
      });
    });
  }
}

let toastEl;
function showToast(text) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'msg';
    toastEl.style.position = 'fixed';
    toastEl.style.right = '16px';
    toastEl.style.bottom = '16px';
    toastEl.style.zIndex = '1000';
    toastEl.style.background = 'rgba(34,197,94,0.12)';
    toastEl.style.borderColor = 'rgba(34,197,94,0.5)';
    toastEl.style.color = 'rgba(187,247,208,0.9)';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = text;
  toastEl.classList.add('is-success');
  setTimeout(() => {
    toastEl.classList.remove('is-success');
    toastEl.remove();
    toastEl = null;
  }, 1800);
}

function renderCart() {
  const itemsBox = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const feeEl = document.getElementById('adminFee');
  const sendBtn = document.getElementById('sendToWA');
  if (!itemsBox || !totalEl || !feeEl || !sendBtn) return;

  const cart = getCart();
  if (!cart.length) {
    itemsBox.innerHTML = `<div class="msg">Keranjang masih kosong. Silakan pilih produk dulu.</div>`;
    totalEl.textContent = moneyIDR(0);
    feeEl.textContent = moneyIDR(0);
    sendBtn.disabled = true;
    sendBtn.textContent = 'Chat WhatsApp untuk bayar';
    return;
  }

  itemsBox.innerHTML = cart.map(it => `
    <div class="cart-item">
      <div>
        <b>${it.name}</b>
        <div class="small">${moneyIDR(it.price)} × ${it.qty}</div>
      </div>
      <div class="right">
        <b>${moneyIDR((Number(it.price) || 0) * (Number(it.qty) || 0))}</b>
        <button class="btn btn-ghost" style="padding:8px 10px; margin-top:8px" type="button" data-remove="${it.id}">Hapus</button>
      </div>
    </div>
  `).join('');

  $all('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove');
      const cart = getCart().filter(x => x.id !== id);
      setCart(cart);
      renderCart();
    });
  });

  const total = cartTotal(cart);
  const fee = cartAdminFee(total);
  totalEl.textContent = moneyIDR(total + fee);
  feeEl.textContent = moneyIDR(fee);
  sendBtn.disabled = false;
}

// ===== Navbar toggle + year =====
function initNavbar() {
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!navToggle || !mobileNav) return;

  // Pastikan state awal konsisten di mobile: menu HARUS tersembunyi saat page pertama kali dibuka.
  mobileNav.hidden = true;

  navToggle.addEventListener('click', () => {
    // toggle menu mobile
    mobileNav.hidden = !mobileNav.hidden;
  });


  document.querySelectorAll('.mobile-nav a').forEach(a => {
    if (a.dataset.navLinkBound) return;
    a.dataset.navLinkBound = '1';
    a.addEventListener('click', () => {
      mobileNav.hidden = true;
    });
  });
}

function getAuthSession() {
  try { return JSON.parse(localStorage.getItem(LS_AUTH_SESSION_KEY)); } catch { return null; }
}

function clearAuthSession() {
  localStorage.removeItem(LS_AUTH_SESSION_KEY);
}

function renderAuthNav() {
  const session = getAuthSession();
  const isLoggedIn = !!session;
  const name = session?.name || 'Profil';
  const loginLinks = document.querySelectorAll(
    '.site-header .nav a[href="./login.html"], .site-header .mobile-nav a[href="./login.html"]'
  );

  loginLinks.forEach(link => {
    if (!link.dataset.authLabel) {
      link.dataset.authLabel = link.textContent.trim() || 'Login';
    }

    link.classList.add('auth-nav-link');

    if (isLoggedIn) {
      link.classList.add('is-profile');
      link.href = './profile-modal.html';
      link.innerHTML = `<span class="auth-profile-icon" aria-hidden="true">👤</span><span class="auth-profile-text">${name}</span>`;
      link.setAttribute('title', `Profil ${name}`);
      link.setAttribute('aria-label', `Profil ${name}`);
    } else {
      link.classList.remove('is-profile');
      link.innerHTML = link.dataset.authLabel;
      link.removeAttribute('title');
      link.removeAttribute('aria-label');
    }
  });
}

function initYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

// ===== Filters & Search on products page =====
function initProductsPage() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const searchInput = document.getElementById('searchInput');
  const chips = $all('.chip');

  const state = { filter: 'all', q: '', sort: 'default' };

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value || 'default';
      rerender();
    });
  }

  function rerender() {
    renderProductsGrid('productGrid', { filter: state.filter, q: state.q, sort: state.sort });
  }

  chips.forEach(ch => {
    ch.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('is-active'));
      ch.classList.add('is-active');
      state.filter = ch.getAttribute('data-filter');
      rerender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.q = e.target.value;
      rerender();
    });
  }

  rerender();
}

// ===== Index page show limited products =====
function initIndexPage() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  if (document.querySelector('.filters')) return;

  const products = getProducts();

  const ff = products.filter(p => p.game === 'ff').slice(0, 3);
  const ml = products.filter(p => p.game === 'ml').slice(0, 3);
  const popular = [...ff, ...ml];

  grid.innerHTML = popular.map(p => {
    const gameLabel = p.game === 'ff' ? 'Free Fire' : 'Mobile Legends';
    const stockVal = Number(p.stock ?? 999);
    return `
      <article class="product-card">
        <div class="product-thumb">
          <img src="${p.thumb}" alt="${gameLabel}" onerror="this.style.display='none'" />
        </div>
        <h3>${p.name}</h3>
        <div class="badges">
          ${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}
          <span class="badge">${gameLabel}</span>
        </div>
        <div class="price">${moneyIDR(p.price)}</div>
        <div class="product-meta">${p.desc}</div>
        <div class="small" style="opacity:.85; margin-top:8px;">Stok: <b>${stockVal}</b></div>
        <div class="product-actions">
          <button class="btn btn-primary" type="button" data-add="${p.id}">Tambah ke Keranjang</button>
          <a class="btn btn-ghost" href="./checkout.html" data-buy="${p.id}">Checkout</a>
        </div>
      </article>
    `;
  }).join('');

  $all('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.getAttribute('data-add'));
      showToast('Produk ditambahkan ke keranjang.');
    });
  });

  $all('[data-buy]').forEach(link => {
    link.addEventListener('click', () => {
      addToCart(link.getAttribute('data-buy'));
    });
  });
}

// ===== Index page popular slider =====
function initPopularSlider() {
  const slider = document.getElementById('popularSlider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.popular-slide'));
  const prevBtn = document.getElementById('popularPrev');
  const nextBtn = document.getElementById('popularNext');
  const dotsWrap = document.getElementById('popularDots');

  if (!slides.length || !prevBtn || !nextBtn || !dotsWrap) return;

  let idx = 0;

  function setActive(i) {
    const count = slides.length;
    idx = (i + count) % count;
    slides.forEach((s, n) => s.classList.toggle('is-active', n === idx));

    const dots = Array.from(dotsWrap.querySelectorAll('.popular-dot'));
    dots.forEach((d, n) => d.classList.toggle('is-active', n === idx));
  }

  dotsWrap.innerHTML = slides.map((_, n) => {
    const active = n === idx ? ' is-active' : '';
    return `<button class="popular-dot${active}" type="button" aria-label="Slide ${n + 1}" data-dot="${n}"></button>`;
  }).join('');

  dotsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-dot]');
    if (!btn) return;
    setActive(Number(btn.getAttribute('data-dot')));
  });

  prevBtn.addEventListener('click', () => setActive(idx - 1));
  nextBtn.addEventListener('click', () => setActive(idx + 1));

  let timer = setInterval(() => setActive(idx + 1), 5000);
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => {
    timer = setInterval(() => setActive(idx + 1), 5000);
  });
}

// ===== Auth (login/register) =====
function getUser() {
  try { return JSON.parse(localStorage.getItem(LS_USER_KEY)); } catch { return null; }
}
function setAuthSession(session) {
  localStorage.setItem(LS_AUTH_SESSION_KEY, JSON.stringify(session));
}
function setUser(u) {
  localStorage.setItem(LS_USER_KEY, JSON.stringify(u));
}
function getUsers() {
  try { return JSON.parse(localStorage.getItem(LS_USERS_KEY)) || []; } catch { return []; }
}
function setUsers(users) {
  localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
}
function upsertUserToUsersArray(newUser) {
  if (!newUser || !newUser.email) return;
  const users = getUsers();
  const email = String(newUser.email).trim().toLowerCase();

  const existingIdx = users.findIndex(x => String(x.email).trim().toLowerCase() === email);
  const normalized = {
    name: newUser.name,
    email,
    password: newUser.password,
    role: newUser.role || 'user'
  };

  if (existingIdx >= 0) users[existingIdx] = { ...users[existingIdx], ...normalized };
  else users.push(normalized);

  setUsers(users);
}

function initAuthPage() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  if (!loginForm && !registerForm) return;

  const authMsg = document.getElementById('authMsg');
  const regMsg = document.getElementById('regMsg');
  const toAdminLogin = document.getElementById('toAdminLogin');
  const logoutBtn = document.getElementById('logoutBtn');
  const registerBox = document.getElementById('registerBox');
  const toCustomerRegister = document.getElementById('toCustomerRegister');
  const loginRegisterBox = loginForm?.closest('.auth-card');
  const backToLogin = document.getElementById('backToLogin');

  const currentSession = getAuthSession();
  if (currentSession && logoutBtn) {
    logoutBtn.style.display = 'inline-flex';
    authMsg && (authMsg.innerHTML = `<div class="msg is-success">Sudah login sebagai <b>${currentSession.name}</b>.</div>`);
  }

  if (toCustomerRegister) {
    toCustomerRegister.addEventListener('click', () => {
      loginRegisterBox?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (registerBox) {
        registerBox.hidden = false;
        registerBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (toAdminLogin) {
    toAdminLogin.addEventListener('click', () => {
      window.location.href = './admin-login.html';
    });
  }

  if (backToLogin) {
    backToLogin.addEventListener('click', () => {
      if (registerBox) registerBox.hidden = true;
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      clearAuthSession();
      window.location.href = './login.html';
    });
  }

  loginForm && loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const user = getUser();

    if (!user) {
      authMsg && (authMsg.className = 'msg is-danger', authMsg.textContent = 'Akun belum ada. Buat akun dulu.');
      return;
    }

    if (user.email !== email || user.password !== password) {
      authMsg && (authMsg.className = 'msg is-danger', authMsg.textContent = 'Email atau password salah.');
      return;
    }

    setAuthSession({ name: user.name, email: user.email, role: user.role || 'user' });
    authMsg && (authMsg.className = 'msg is-success', authMsg.textContent = 'Login berhasil.');
    renderAuthNav();

    setTimeout(() => {
      window.location.href = './checkout.html';
    }, 700);
  });

  registerForm && registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !password) {
      regMsg && (regMsg.className = 'msg is-danger', regMsg.textContent = 'Lengkapi form terlebih dahulu.');
      return;
    }

    setUser({ name, email, password, role: 'user' });
    upsertUserToUsersArray({ name, email, password, role: 'user' });
    regMsg && (regMsg.className = 'msg is-success', regMsg.textContent = 'Akun berhasil dibuat. Silakan login.');

    setTimeout(() => {
      if (registerBox) registerBox.hidden = true;
      document.getElementById('email').value = email;
      document.getElementById('password').value = '';
    }, 800);
  });
}

// ===== Checkout page =====
function initCheckoutPage() {
  const checkoutForm = document.getElementById('checkoutForm');
  const clearCart = document.getElementById('clearCart');
  const sendToWA = document.getElementById('sendToWA');
  if (!checkoutForm && !sendToWA) return;

  renderCart();

  const user = getUser();
  if (user) {
    const buyerName = document.getElementById('buyerName');
    if (buyerName) buyerName.value = user.name;
  }

  clearCart && clearCart.addEventListener('click', () => {
    setCart([]);
    renderCart();
  });

  const LS_ORDERS_KEY = 'diamond_store_orders_v1';
  let lastOrderText = '';

  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem(LS_ORDERS_KEY)) || [];
    } catch {
      return [];
    }
  }

  function setOrders(items) {
    localStorage.setItem(LS_ORDERS_KEY, JSON.stringify(items));
  }

  checkoutForm && checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cart = getCart();
    if (!cart.length) {
      const msg = document.getElementById('checkoutMsg');
      msg && (msg.className = 'msg is-danger', msg.textContent = 'Keranjang masih kosong.');
      return;
    }

    const buyerName = document.getElementById('buyerName').value.trim();
    const buyerContact = document.getElementById('buyerContact').value.trim();
    const game = document.getElementById('gameSelect').value;
    const gameId = document.getElementById('gameId').value.trim();
    const notes = document.getElementById('notes').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    const total = cartTotal(cart);
    const fee = cartAdminFee(total);
    const grandTotal = total + fee;

    const orderId = 'ORD-' + Math.random().toString(16).slice(2, 8).toUpperCase();
    const gameLabel = game === 'ff' ? 'Free Fire' : 'Mobile Legends';

    const paymentMethodUpper = (paymentMethod || '').toUpperCase();

    lastOrderText = [
      `Halo KRIS DIAMOND STORE, saya mau order:`,
      `Order ID: ${orderId}`,
      `Nama: ${buyerName}`,
      `Kontak: ${buyerContact}`,
      `Game: ${gameLabel}`,
      `Game ID: ${gameId}`,
      `Metode Bayar: ${paymentMethodUpper}`,
      ...(paymentMethod === 'gopay' || paymentMethod === 'dana'
        ? [`Nomor Dana/GoPay: 0857-8255-470`]
        : []),
      `Catatan: ${notes || '-'}`,
      `--- Rincian ---`,
      ...cart.map(it => `• ${it.name} (${it.qty}x) = ${moneyIDR((Number(it.price) || 0) * Number(it.qty || 0))}`),
      `Total: ${moneyIDR(grandTotal)} (termasuk admin ${moneyIDR(fee)})`,
    ].join('\n');

    const msg = document.getElementById('checkoutMsg');
    msg && (msg.className = 'msg is-success', msg.textContent = `Pesanan dibuat. ID: ${orderId}. Silakan chat WhatsApp.`);

    const orders = getOrders();
    const order = {
      orderId,
      buyerName,
      buyerContact,
      game,
      gameLabel,
      gameId,
      notes,
      paymentMethod,
      paymentMethodLabel: (paymentMethod || '').toUpperCase(),
      items: cart,
      subtotal: total,
      adminFee: fee,
      total: grandTotal,
      createdAt: Date.now(),
      status: 'new',
    };

    orders.unshift(order);
    setOrders(orders);

    if (sendToWA) sendToWA.disabled = false;
  });

  if (sendToWA) {
    sendToWA.addEventListener('click', () => {
      const cart = getCart();
      if (!cart.length) return;
      const text = lastOrderText || 'Halo KRIS DIAMOND STORE, saya mau order.';
      const phone = '6285782554720';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener');
    });
  }
}

// ===== Page Content (Admin Override Teks) =====
const LS_PAGE_CONTENT_KEY = 'diamond_store_page_content_v1';

function getPageContentOverrides() {
  try {
    const raw = localStorage.getItem(LS_PAGE_CONTENT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function applyPageContentOverrides() {
  const overrides = getPageContentOverrides();
  if (!overrides || typeof overrides !== 'object') return;

  $all('[data-edit-key]').forEach(el => {
    const key = el.getAttribute('data-edit-key');
    if (!key) return;
    if (overrides[key] == null) return;
    el.textContent = String(overrides[key]);
  });
}

// ===== Testimoni =====
const LS_TESTIMONI_KEY = 'diamond_store_testimoni_v1';

function getTestimoni(){
  try{
    const raw = localStorage.getItem(LS_TESTIMONI_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  }catch{ return []; }
}

function formatUploadDate(ts){
  const d = new Date(Number(ts) || Date.now());
  return d.toLocaleDateString('id-ID', { year:'numeric', month:'long', day:'2-digit' });
}

function escapeHtml(s){
  return String(s==null ? '' : s)
    .replaceAll('&','&amp;')
    .replaceAll('<','<')
    .replaceAll('>','>')
    .replaceAll('"','"')
    .replaceAll("'",'&#039;');
}

function initTestimoniPage(){
  const grid = document.getElementById('testimoniGrid');
  if(!grid) return;

  const empty = document.getElementById('testimoniEmpty');
  const items = getTestimoni().slice().sort((a,b)=>(b.createdAt||b.tanggalUpload||0)-(a.createdAt||a.tanggalUpload||0));

  if(!items.length){
    if(empty) empty.style.display = 'block';
    grid.innerHTML = '';
    return;
  }

  if(empty) empty.style.display = 'none';

  grid.innerHTML = items.map(t=>{
    const name = t.namaCustomer || '-';
    const dateText = formatUploadDate(t.createdAt || t.tanggalUpload);
    const text = t.testimoniText || t.text || '';
    const img = t.imageUrl || t.image || '';

    return `
      <article class="product-card" style="padding:14px;">
        ${img ? `<img src="${escapeHtml(img)}" alt="Foto testimoni" onerror="this.style.display='none'" style="width:100%; height:170px; object-fit:cover; border-radius:14px; border:1px solid var(--line); background:rgba(255,255,255,0.03)" />` : ''}
        <div style="margin-top:12px; display:flex; justify-content:space-between; gap:12px; align-items:flex-start;">
          <div>
            <b>${escapeHtml(name)}</b>
            <div class="small" style="opacity:.85; margin-top:4px">${escapeHtml(dateText)}</div>
          </div>
          <div class="badge">⭐ Verified</div>
        </div>
        <div style="margin-top:10px; white-space:pre-wrap; color: rgba(234,240,255,0.85);">${escapeHtml(text)}</div>
      </article>
    `;
  }).join('');
}

// ===== Boot =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderAuthNav();
  initYear();

  applyAdminUI();
  initTestimoniPage();

  const hasGrid = !!document.getElementById('productGrid');
  if (hasGrid) {
    if (document.querySelector('.filters') || document.getElementById('searchInput')) {
      initProductsPage();
    } else {
      initIndexPage();
    }
  }

  initPopularSlider();
  initAuthPage();
  initCheckoutPage();

  if (document.getElementById('cartItems')) renderCart();

  const grid = document.querySelector('#productGrid[data-no-sound]');
  if (grid) {
    const soundSelectors = [
      '[data-sound]',
      '.sound-btn',
      'button#soundBtn',
      '#soundBtn',
      '#soundButton',
      '.btn-sound',
      '[aria-label*="sound" i]',
      '[aria-label*="Sound" i]',
      '[id*="sound" i]'
    ];

    const nodes = soundSelectors
      .flatMap(sel => Array.from(document.querySelectorAll(sel)))
      .filter((el, idx, arr) => arr.indexOf(el) === idx);

    nodes.forEach(el => el.remove());
  }
});

