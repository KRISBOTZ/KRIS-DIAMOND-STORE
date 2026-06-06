(function(){
  const PHONE_PREFIX = '0857-8255-4270';
  const WA_ADMIN_PHONE = '6285782554720';

  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }

  function initPaymentUI(){
    const root = document.getElementById('checkoutForm');
    if (!root) return;

    // ===== Metode pembayaran (tanpa OVO) =====
    const choices = $all('.pay-choice');
    const ewalletFields = $('#ewalletFields');
    const ewalletNumber = $('#ewalletNumber');
    const paymentMethod = $('#paymentMethod');

    // ===== Game picker + catatan rules =====
    const gameSelect = $('#gameSelect');
    const gameRadios = $all('input[name="gameSelectUI"]');
    const notesWrap = $('#notesWrap');
    const notesLabel = $('#notesLabel');
    const notesTextarea = $('#notes');

    // ===== Proof of transfer UI =====
    const paymentProofWrap = $('#paymentProofWrap');
    const paymentScreenshot = $('#paymentScreenshot');
    const submitProofToWA = $('#submitProofToWA');

    if (!choices.length) return;

    // --- payment method toggle (qris/gopay/dana) ---
    if (ewalletFields && ewalletNumber && paymentMethod) {
      function setActiveChoice(val){
        choices.forEach(btn => {
          const isActive = btn.getAttribute('data-pay') === val;
          btn.setAttribute('aria-pressed', String(isActive));
          btn.dataset.active = isActive ? '1' : '0';
          if (isActive) btn.classList.add('is-active');
          else btn.classList.remove('is-active');
        });

        const showEwallet = val === 'gopay' || val === 'dana';
        ewalletFields.style.display = showEwallet ? 'block' : 'none';

        const qrisFields = $('#qrisFields');
        if (qrisFields) qrisFields.style.display = val === 'qris' ? 'block' : 'none';

        if (showEwallet && !ewalletNumber.value) ewalletNumber.value = PHONE_PREFIX;

        paymentMethod.value = val;
      }


      choices.forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.getAttribute('data-pay');
          setActiveChoice(val);
        });
      });

      const initial = paymentMethod.value || choices[0].getAttribute('data-pay');
      setActiveChoice(initial);
    }

    // --- game picker sync ---
    if (gameSelect && gameRadios.length) {
      const hiddenSelect = $('#gameSelectHidden');

      function applyGameRules(game){
        // Free Fire: hilangkan Catatan
        if (game === 'ff') {
          if (notesWrap) notesWrap.style.display = 'none';
          if (notesTextarea) notesTextarea.value = '';
        }

        // Mobile Legends: tampilkan dengan label Server ID
        if (game === 'ml') {
          if (notesWrap) notesWrap.style.display = 'block';
          if (notesLabel) notesLabel.textContent = 'Server ID';
          if (notesTextarea) notesTextarea.placeholder = 'Contoh: 123456789 (Server ID)';
        }
      }

      function setGame(game){
        if (hiddenSelect) hiddenSelect.value = game;
        gameSelect.value = game;
        gameRadios.forEach(r => {
          r.checked = r.value === game;
        });
        applyGameRules(game);
      }

      gameRadios.forEach(r => {
        r.addEventListener('change', () => {
          if (r.checked) setGame(r.value);
        });
      });

      // init based on current select value or default ff
      const initialGame = gameSelect.value || 'ff';
      setGame(initialGame);
    }


    // --- proof flow: setelah transaksi berhasil ---
    // script.js akan menampilkan pesan sukses pada #checkoutMsg dan mengaktifkan #sendToWA.
    // Di sini kita tampilkan panel proof setelah submit checkoutForm.
    if (paymentProofWrap && paymentScreenshot && submitProofToWA) {

      submitProofToWA.disabled = true;

      // enable button only when file chosen
      paymentScreenshot.addEventListener('change', () => {
        const hasFile = !!paymentScreenshot.files && paymentScreenshot.files.length > 0;
        submitProofToWA.disabled = !hasFile;
      });

      // show panel after order created (on submit successful)
      root.addEventListener('submit', () => {
        // (submit event di script.js pakai preventDefault juga; kita tetap tampilkan di sini setelah itu dipanggil)
        // Agar tidak tampil sebelum submit, tampilkan setelah submit trigger pertama.
        // Delay agar DOM/ state dari script.js sudah ter-set.
        setTimeout(() => {
          paymentProofWrap.style.display = 'block';
        }, 50);
      });

      submitProofToWA.addEventListener('click', () => {
        const fileName = (paymentScreenshot.files && paymentScreenshot.files[0]) ? paymentScreenshot.files[0].name : 'bukti.jpg';

        const game = $('#gameSelect')?.value || '';
        const gameLabel = game === 'ff' ? 'Free Fire' : 'Mobile Legends';
        const notes = $('#notes')?.value?.trim() || '';
        const orderMsgEl = $('#checkoutMsg');
        const checkoutMsgText = orderMsgEl ? orderMsgEl.textContent.trim() : '';

        const text = [
          'Halo KRIS DIAMOND STORE, saya sudah melakukan transfer pembayaran.',
          `Game: ${gameLabel}`,
          notes ? `Server ID/Catatan: ${notes}` : '',
          checkoutMsgText ? `Info pesanan: ${checkoutMsgText}` : '',
          `Bukti: ${fileName}`,
          'Tolong verifikasi pesanan saya. Terima kasih.'
        ].filter(Boolean).join('\n');

        const url = `https://wa.me/${WA_ADMIN_PHONE}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initPaymentUI);
})();



