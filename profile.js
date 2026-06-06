// Customer profile page logic (no build tools, vanilla JS)

const LS_USER_KEY = 'diamond_store_user_v1';
const LS_AUTH_SESSION_KEY = 'diamond_store_auth_session_v1';
const LS_USERS_KEY = 'diamond_store_users_v1';

function getAuthSession() {
  try { return JSON.parse(localStorage.getItem(LS_AUTH_SESSION_KEY)); } catch { return null; }
}

function getUsers() {
  try { return JSON.parse(localStorage.getItem(LS_USERS_KEY)) || []; } catch { return []; }
}

function setUsers(users) {
  localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
}

function upsertProfileToUsers(email, patch) {
  if (!email) return;
  const users = getUsers();
  const targetEmail = String(email).trim().toLowerCase();
  const idx = users.findIndex(x => String(x.email).trim().toLowerCase() === targetEmail);
  if (idx >= 0) {
    users[idx] = { ...users[idx], ...patch };
  } else {
    // If somehow missing, ignore (profile should not be created implicitly)
  }
  setUsers(users);
}

function getProfileImage(u) {
  return u?.profileImage || '';
}

document.addEventListener('DOMContentLoaded', () => {
  const session = getAuthSession();
  if (!session) {
    // Not logged in
    window.location.href = './login.html';
    return;
  }

  const profileNameEl = document.getElementById('profileName');
  const profileEmailEl = document.getElementById('profileEmail');
  const profileEmailInput = document.getElementById('profileEmailInput');
  const previewImg = document.getElementById('profileImagePreview');
  const placeholder = document.getElementById('profileImagePlaceholder');

  const profileForm = document.getElementById('profileForm');
  const msg = document.getElementById('profileMsg');

  const newPassword = document.getElementById('newPassword');
  const newPassword2 = document.getElementById('newPassword2');
  const profileImageUrl = document.getElementById('profileImageUrl');

  const btnLogout = document.getElementById('btnCustomerLogout');
  btnLogout && btnLogout.addEventListener('click', () => {
    try {
      localStorage.removeItem(LS_AUTH_SESSION_KEY);
    } catch {}

    // Jika sebelumnya admin masih tersimpan, hapus juga agar tidak "nyangkut" role
    try {
      localStorage.removeItem('diamond_store_admin_session_v1');
    } catch {}

    window.location.href = './login.html';
  });



  const users = getUsers();
  const email = session?.email;
  const u = users.find(x => String(x.email).trim().toLowerCase() === String(email).trim().toLowerCase()) || {};

  const name = session?.name || u?.name || '-';
  const savedEmail = email || u?.email || '-';

  if (profileNameEl) profileNameEl.textContent = name;
  if (profileEmailEl) profileEmailEl.textContent = savedEmail;
  if (profileEmailInput) profileEmailInput.value = savedEmail;

  const profileImg = getProfileImage(u);
  if (previewImg) {
    if (profileImg) {
      previewImg.src = profileImg;
      previewImg.style.display = '';
      if (placeholder) placeholder.style.display = 'none';
    } else {
      previewImg.style.display = 'none';
      if (placeholder) placeholder.style.display = '';
    }
  }

  // Live preview (optional)
  if (profileImageUrl && previewImg) {
    profileImageUrl.addEventListener('input', () => {
      const v = (profileImageUrl.value || '').trim();
      if (!v) {
        previewImg.style.display = 'none';
        if (placeholder) placeholder.style.display = '';
        return;
      }
      previewImg.src = v;
      previewImg.style.display = '';
      if (placeholder) placeholder.style.display = 'none';
    });
  }

  profileForm && profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!msg) return;

    const p1 = (newPassword?.value || '').trim();
    const p2 = (newPassword2?.value || '').trim();
    const img = (profileImageUrl?.value || '').trim();

    msg.style.display = 'block';

    if (p1 || p2) {
      if (!p1 || !p2) {
        msg.className = 'msg is-danger';
        msg.textContent = 'Isi password dan konfirmasi password.';
        return;
      }
      if (p1 !== p2) {
        msg.className = 'msg is-danger';
        msg.textContent = 'Konfirmasi password tidak cocok.';
        return;
      }
    }

    // Apply updates
    const patch = {};
    if (p1) patch.password = p1;
    if (img) patch.profileImage = img;
    if (!img) {
      // allow clearing by empty string only if user explicitly typed nothing?
      // keep as-is for safety
    }

    upsertProfileToUsers(email, patch);

    // Keep auth session updated if name changed (not in this page)
    msg.className = 'msg is-success';
    msg.textContent = 'Perubahan tersimpan.';

    // Update local user cache if present
    try {
      const localUserRaw = localStorage.getItem(LS_USER_KEY);
      if (localUserRaw) {
        const localUser = JSON.parse(localUserRaw);
        localStorage.setItem(LS_USER_KEY, JSON.stringify({
          ...localUser,
          ...(patch.name ? { name: patch.name } : {}),
          ...(patch.profileImage ? { profileImage: patch.profileImage } : {})
        }));
      }
    } catch {}

    if (patch.profileImage && previewImg) {
      previewImg.src = patch.profileImage;
      previewImg.style.display = '';
      if (placeholder) placeholder.style.display = 'none';
    }

    if (newPassword) newPassword.value = '';
    if (newPassword2) newPassword2.value = '';
  });
});

