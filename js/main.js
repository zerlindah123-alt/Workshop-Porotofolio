/**
 * Portfolio Erina Zerlindah - Software Engineer
 * Politeknik Elektronika Negeri Surabaya (PENS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Filter Proyek
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white', 'active');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('bg-brand-500', 'text-white', 'active');
      btn.classList.remove('text-slate-400');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Simulasi Interaktif: Rekomendasi Makanan di Gebang Berbasis Budget (Java Logic Demo)
  // Data kuliner autentik kawasan Gebang (sekitar PENS / ITS Surabaya)
  const gebangFoodData = [
    { nama: "Nasi Pecel Madiun Gebang", harga: 9000, desc: "Pecel sayur komplit + rempeyek renyah" },
    { nama: "Warteg Barokah Gebang", harga: 10000, desc: "Nasi rames sayur + orek tempe + telur dadar" },
    { nama: "Mie Ayam Pangsit Gebang", harga: 11000, desc: "Porsi kenyang mahasiswa + kuah gurih" },
    { nama: "Nasi Goreng Mawut Gebang", harga: 12000, desc: "Nasi goreng campur mie porsi mantap" },
    { nama: "Nasi Padang Murah Gebang", harga: 13000, desc: "Nasi rendang ayam + kuah gulai kental" },
    { nama: "Ayam Geprek Sambal Korek Gebang", harga: 14000, desc: "Ayam krispi + nasi + level sambal bebas" },
    { nama: "Penyetan Mbak Nur Gebang", harga: 15000, desc: "Ayam goreng rempah + tempe + sambal terasi matang" },
    { nama: "Nasi Bebek Madura Gebang", harga: 18000, desc: "Bebek bumbu hitam khas Madura gurih pedas" },
    { nama: "Nasi Rawon Daging Gebang", harga: 20000, desc: "Rawon kuah kluwek hitam gurih + sambal tauge" }
  ];

  const budgetInput = document.getElementById('budget-input');
  const btnRunRecommendation = document.getElementById('btn-run-recommendation');
  const foodResultsContainer = document.getElementById('food-results');
  const resultStatus = document.getElementById('result-status');
  const presetBtns = document.querySelectorAll('.preset-btn');

  function runFoodRecommender() {
    if (!budgetInput || !foodResultsContainer) return;

    const userBudget = parseInt(budgetInput.value, 10);

    if (isNaN(userBudget) || userBudget <= 0) {
      foodResultsContainer.innerHTML = `
        <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
          Silakan masukkan nominal budget yang valid (angka positif).
        </div>
      `;
      if (resultStatus) resultStatus.textContent = "Input Tidak Valid";
      return;
    }

    // Filter: ambil makanan yang harganya <= userBudget
    const affordableFoods = gebangFoodData.filter(item => item.harga <= userBudget);

    if (affordableFoods.length === 0) {
      foodResultsContainer.innerHTML = `
        <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
          Belum ada menu yang cocok untuk budget Rp ${userBudget.toLocaleString('id-ID')}. Minimal budget yang disarankan: Rp 9.000.
        </div>
      `;
      if (resultStatus) resultStatus.textContent = "0 Ditemukan";
      return;
    }

    // Urutkan dari yang paling optimal (mendekati batas atas budget untuk value terbaik)
    affordableFoods.sort((a, b) => b.harga - a.harga);

    // Ambil Top 3
    const top3 = affordableFoods.slice(0, 3);

    if (resultStatus) {
      resultStatus.textContent = `${top3.length} Rekomendasi Terpilih`;
    }

    foodResultsContainer.innerHTML = top3.map((item, index) => {
      const sisaUang = userBudget - item.harga;
      const rankBadge = index === 0 ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700";

      return `
        <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
          <div class="space-y-0.5">
            <div class="flex items-center gap-1.5">
              <span class="w-4 h-4 rounded text-[10px] font-mono font-bold flex items-center justify-center border ${rankBadge}">
                #${index + 1}
              </span>
              <span class="font-medium text-slate-200 text-xs">${item.nama}</span>
            </div>
            <p class="text-[11px] text-slate-400 pl-5">${item.desc}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <div class="font-mono text-xs font-semibold text-brand-400">Rp ${item.harga.toLocaleString('id-ID')}</div>
            <div class="text-[10px] text-slate-500">Sisa: Rp ${sisaUang.toLocaleString('id-ID')}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Event listener tombol simulasi
  if (btnRunRecommendation) {
    btnRunRecommendation.addEventListener('click', runFoodRecommender);
  }

  // Preset button
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = btn.getAttribute('data-amount');
      if (budgetInput) {
        budgetInput.value = amount;
        runFoodRecommender();
      }
    });
  });

  // Enter key di budget input
  if (budgetInput) {
    budgetInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        runFoodRecommender();
      }
    });
  }

  // Jalankan pertama kali saat halaman dimuat
  runFoodRecommender();


  // 5. Fungsi Salin Email ke Clipboard + Toast
  const toast = document.getElementById('toast');
  const emailText = "zerlindah123@gmail.com";

  function showToast(message) {
    if (!toast) return;
    const toastSpan = toast.querySelector('span');
    if (toastSpan && message) toastSpan.textContent = message;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(emailText).then(() => {
      showToast("Email berhasil disalin: zerlindah123@gmail.com");
    }).catch(() => {
      // Fallback
      showToast("Email: zerlindah123@gmail.com");
    });
  }

  const copyHeroBtn = document.getElementById('copy-email-hero-btn');
  const copyContactBtn = document.getElementById('copy-email-contact-btn');

  if (copyHeroBtn) copyHeroBtn.addEventListener('click', copyEmailToClipboard);
  if (copyContactBtn) copyContactBtn.addEventListener('click', copyEmailToClipboard);


  // 6. Formulir Kontak Cepat (Direct ke mailto)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = document.getElementById('sender-name').value;
      const senderSubject = document.getElementById('sender-subject').value;
      const senderMessage = document.getElementById('sender-message').value;

      const fullSubject = encodeURIComponent(`[Portofolio] ${senderSubject} - dari ${senderName}`);
      const fullBody = encodeURIComponent(`Halo Erina,\n\nNama/Perusahaan: ${senderName}\n\nPesan:\n${senderMessage}\n\nSalam,\n${senderName}`);

      window.location.href = `mailto:zerlindah123@gmail.com?subject=${fullSubject}&body=${fullBody}`;
    });
  }
});
