// ============================================================================
// FILE: app.js — Aplikasi Utama flexi.co (Murni JS & Bebas Error)
// ============================================================================

const SECRET_ADMIN_SLUG = 'flx982xKq71mZv40pLr5';
const SECRET_ADMIN_ROUTE = '/' + SECRET_ADMIN_SLUG;
const ADMIN_PASSWORDS = ['admin123', 'flexi2026'];

const STORAGE_KEYS = {
    USERS: 'flexi_hardcoded_users_v1',
    PROJECTS: 'flexi_hardcoded_projects_v1',
    CURRENT_USER: 'flexi_active_user_v1',
    IDEA_DRAFT: 'flexi_idea_draft_v1',
    ADMIN_SESSION: 'flexi_admin_session_v1',
    ADMIN_LOCKOUT: 'flexi_admin_lockout_until_v1',
    THEME: 'flexi_theme_mode_v1'
};

// 2 AKUN HARDCODE SESUAI PERMINTAAN
const HARDCODED_USERS = [
    {
        id: "USR-101",
        name: "Tim Internal Flexi",
        companyName: "flexi.co",
        email: "halo@flexi.co",
        whatsapp: "0812-8800-1122",
        password: "flexi123",
        createdAt: "18 Okt 2026"
    },
    {
        id: "USR-102",
        name: "Rizky Pratama",
        companyName: "PT Cipta Kreasi Mandiri",
        email: "kontak@ciptakreasi.co.id",
        whatsapp: "0811-9988-7766",
        password: "cipta123",
        createdAt: "20 Okt 2026"
    }
];

// DATA PROYEK AWAL UNTUK MASING-MASING AKUN HARDCODE
const HARDCODED_PROJECTS = [
    {
        id: "FLX-2026-101",
        userId: "USR-101",
        clientName: "Tim Internal Flexi",
        brandName: "flexi.co",
        email: "halo@flexi.co",
        whatsapp: "0812-8800-1122",
        packageTier: "Paket Profesional",
        priceValue: 5000000,
        priceText: "Rp 5.000.000",
        renewalText: "Rp 1.500.000 / tahun",
        brief: "Pembaruan landing page studio flexi.co dengan sistem portal klien terintegrasi dan kecepatan tinggi.",
        status: "almost_done",
        progress: 85,
        adminNote: "Halaman utama dan sistem portal klien sudah selesai, sedang tahap pengecekan responsivitas akhir.",
        previewUrl: "https://preview.flexi.co/studio-v2",
        createdAt: "21 Okt 2026, 14:20",
        removedFromAdmin: false
    },
    {
        id: "FLX-2026-102",
        userId: "USR-102",
        clientName: "Rizky Pratama",
        brandName: "PT Cipta Kreasi Mandiri",
        email: "kontak@ciptakreasi.co.id",
        whatsapp: "0811-9988-7766",
        packageTier: "Paket Bisnis",
        priceValue: 8000000,
        priceText: "Rp 8.000.000+",
        renewalText: "Rp 2.000.000 / tahun",
        brief: "Website profil korporasi & katalog produk industri terintegrasi dengan database dan pembayaran otomatis.",
        status: "done",
        progress: 100,
        adminNote: "Website telah 100% Selesai (Done) dan aktif. Garansi Gratis 6 Bulan Maintenance sedang berjalan.",
        previewUrl: "https://ciptakreasi.co.id",
        createdAt: "15 Okt 2026, 09:45",
        removedFromAdmin: false
    }
];

const PACKAGE_META = {
    "Paket Starter": {
        priceValue: 2000000,
        priceText: "Rp 2.000.000",
        renewalText: "Rp 1.000.000 / tahun",
        summary: "Termasuk Gratis 6 Bulan Maintenance + 1 Halaman Landing Page Responsif & Tombol Direct Kontak / WA."
    },
    "Paket Profesional": {
        priceValue: 5000000,
        priceText: "Rp 5.000.000",
        renewalText: "Rp 1.500.000 / tahun",
        summary: "Termasuk Gratis 6 Bulan Maintenance + Hingga 5-7 Halaman Website, CMS Mandiri & Optimasi SEO."
    },
    "Paket Bisnis": {
        priceValue: 8000000,
        priceText: "Rp 8.000.000+",
        renewalText: "Rp 2.000.000 / tahun",
        summary: "Termasuk Gratis 6 Bulan Maintenance + Fitur Custom & Database, Integrasi Payment Gateway."
    }
};

const STATUS_META = {
    not_yet: {
        label: "Not Yet (Belum Dimulai)",
        shortLabel: "NOT YET • 10%",
        badgeClass: "bg-[#EBF3FF] text-[#002B7F] border-blue-200",
        defaultProgress: 10,
        stepIndex: 1,
        defaultNote: "Pendaftaran proyek telah diterima. Tim kami sedang mempersiapkan jadwal pengerjaan."
    },
    in_progress: {
        label: "In Progress (Sedang Dikerjakan)",
        shortLabel: "IN PROGRESS • 50%",
        badgeClass: "bg-blue-100 text-[#0052FF] border-blue-300",
        defaultProgress: 50,
        stepIndex: 2,
        defaultNote: "Tim developer sedang mengerjakan desain antarmuka dan struktur halaman website Anda."
    },
    almost_done: {
        label: "Almost Done (Hampir Selesai)",
        shortLabel: "ALMOST DONE • 85%",
        badgeClass: "bg-[#CFE2FF] text-[#06152D] border-[#0052FF]",
        defaultProgress: 85,
        stepIndex: 3,
        defaultNote: "Website Anda hampir selesai (Almost Done)! Saat ini sedang tahap pengecekan akhir & optimasi."
    },
    done: {
        label: "Done (Selesai & Live)",
        shortLabel: "DONE • 100%",
        badgeClass: "bg-blue-gradient text-white border-blue-400",
        defaultProgress: 100,
        stepIndex: 4,
        defaultNote: "Selamat! Website perusahaan Anda telah 100% Selesai (Done) dan siap digunakan."
    }
};

// State Aplikasi Global
window.usersData = [];
window.projectsData = [];
window.currentClientUser = null;
window.isAdminAuthenticated = false;
window.currentRoute = '/';
window.activeScrollSection = 'beranda';
window.isProgrammaticScroll = false;
window.programmaticScrollTimer = null;
window.adminFilter = 'all';
window.adminMainTab = 'projects';
window.adminFailedAttempts = 0;
window.adminLockoutTimer = null;
let toastTimer = null;

// ---------------------------------------------------------
// 1. FITUR MODE GELAP & TERANG (DARK / LIGHT MODE)
// ---------------------------------------------------------
function initThemeMode() {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        const isDark = savedTheme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        updateThemeToggleUI(isDark);
    } catch (e) {}
}

window.toggleDarkMode = function() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
    } catch (e) {}
    updateThemeToggleUI(isDark);
};

function updateThemeToggleUI(isDark) {
    const icon = document.getElementById('theme-toggle-icon');
    const mobIcon = document.getElementById('mobile-theme-icon');
    const label = document.getElementById('theme-toggle-label');
    if (icon) icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (mobIcon) mobIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (label) label.textContent = isDark ? 'Terang' : 'Gelap';
    if (window.lucide) window.lucide.createIcons();
}

// ---------------------------------------------------------
// 2. INISIALISASI DATA HARDCODE + LOCALSTORAGE
// ---------------------------------------------------------
function initAppData() {
    try {
        const rawUsers = localStorage.getItem(STORAGE_KEYS.USERS);
        let storedUsers = rawUsers ? JSON.parse(rawUsers) : [];
        const mergedUsers = [...HARDCODED_USERS];

        storedUsers.forEach(u => {
            if (u && u.email && !mergedUsers.some(h => h.email.toLowerCase() === u.email.toLowerCase())) {
                mergedUsers.push(u);
            }
        });
        window.usersData = mergedUsers;
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(window.usersData));

        const rawProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
        let storedProjects = rawProjects ? JSON.parse(rawProjects) : [];
        if (!Array.isArray(storedProjects) || storedProjects.length === 0) {
            window.projectsData = [...HARDCODED_PROJECTS];
            localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(window.projectsData));
        } else {
            window.projectsData = storedProjects;
        }

        const rawActiveUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        if (rawActiveUser) {
            const parsedUser = JSON.parse(rawActiveUser);
            const verified = window.usersData.find(u => u.email.toLowerCase() === (parsedUser.email || '').toLowerCase());
            window.currentClientUser = verified || parsedUser;
        } else {
            window.currentClientUser = null;
        }

        window.isAdminAuthenticated = sessionStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
    } catch (e) {
        window.usersData = [...HARDCODED_USERS];
        window.projectsData = [...HARDCODED_PROJECTS];
        window.currentClientUser = null;
        window.isAdminAuthenticated = false;
    }
}

function saveDatabaseState() {
    try {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(window.usersData));
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(window.projectsData));
    } catch (e) {}
    refreshAllUI();
}

function setCurrentClientUser(userObj) {
    window.currentClientUser = userObj;
    try {
        if (userObj) {
            localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userObj));
        } else {
            localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        }
    } catch (e) {}
    refreshAllUI();
}

function getMyCompanyProjects() {
    if (!window.currentClientUser) return [];
    const myId = window.currentClientUser.id;
    const myEmail = (window.currentClientUser.email || '').toLowerCase();
    return window.projectsData.filter(p =>
        p.userId === myId || (p.email && p.email.toLowerCase() === myEmail)
    );
}

// ---------------------------------------------------------
// 3. SISTEM ROUTING & SCROLL-SPY NAVBAR
// ---------------------------------------------------------
function detectRouteFromBrowserLocation() {
    const path = (window.location.pathname || '');
    const hash = (window.location.hash || '');
    const fullUrl = (window.location.href || '');

    if (
        path.includes(SECRET_ADMIN_SLUG) ||
        hash.includes(SECRET_ADMIN_SLUG) ||
        fullUrl.includes(SECRET_ADMIN_SLUG)
    ) {
        return SECRET_ADMIN_ROUTE;
    }
    if (path.toLowerCase().endsWith('/dashboard') || hash.toLowerCase() === '#/dashboard' || hash.toLowerCase() === '#dashboard') {
        return '/dashboard';
    }
    return '/';
}

window.navigateToRoute = function(routePath, skipPushState = false) {
    let target = '/';
    if (routePath === SECRET_ADMIN_ROUTE || routePath === '/admin' || String(routePath).includes(SECRET_ADMIN_SLUG)) {
        target = SECRET_ADMIN_ROUTE;
    } else if (routePath === '/dashboard') {
        target = '/dashboard';
    }

    window.currentRoute = target;

    if (!skipPushState) {
        try {
            const newHash = target === '/' ? '' : `#${target}`;
            if (newHash) window.location.hash = newHash;
            else if (window.location.hash) history.pushState(null, '', window.location.pathname);
        } catch (e) {}
    }

    document.getElementById('mobile-menu')?.classList.add('hidden');
    ['project-modal-backdrop', 'auth-modal-backdrop', 'admin-remove-modal-backdrop'].forEach(id => {
        document.getElementById(id)?.classList.add('hidden');
    });

    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const publicHeader = document.getElementById('public-site-header');
    const publicFooter = document.getElementById('public-site-footer');
    const viewHome = document.getElementById('view-home');
    const viewDashboard = document.getElementById('view-dashboard');
    const viewAdmin = document.getElementById('view-admin');

    [viewHome, viewDashboard, viewAdmin].forEach(v => {
        if (v) {
            v.classList.add('hidden');
            v.style.display = 'none';
        }
    });

    if (target === SECRET_ADMIN_ROUTE) {
        mainContentWrapper?.classList.remove('pt-[76px]');
        if (publicHeader) {
            publicHeader.classList.add('hidden');
            publicHeader.style.display = 'none';
        }
        if (publicFooter) {
            publicFooter.classList.add('hidden');
            publicFooter.style.display = 'none';
        }
        if (viewAdmin) {
            viewAdmin.classList.remove('hidden');
            viewAdmin.style.display = 'block';
        }

        const loginScreen = document.getElementById('admin-login-screen');
        const dashScreen = document.getElementById('admin-dashboard-screen');
        if (window.isAdminAuthenticated) {
            loginScreen?.classList.add('hidden');
            dashScreen?.classList.remove('hidden');
            renderAdminProjects();
            renderAdminAccountsTable();
        } else {
            dashScreen?.classList.add('hidden');
            loginScreen?.classList.remove('hidden');
            checkAdminBruteForceLockout();
            setTimeout(() => document.getElementById('admin-password-input')?.focus(), 100);
        }
    } else {
        mainContentWrapper?.classList.add('pt-[76px]');
        if (publicHeader) {
            publicHeader.classList.remove('hidden');
            publicHeader.style.display = '';
        }
        if (publicFooter) {
            publicFooter.classList.remove('hidden');
            publicFooter.style.display = '';
        }

        if (target === '/dashboard') {
            if (viewDashboard) {
                viewDashboard.classList.remove('hidden');
                viewDashboard.style.display = 'block';
            }
            renderClientDashboardPage();
            requestAnimationFrame(() => updateSlidingPillPosition('dashboard'));
        } else {
            if (viewHome) {
                viewHome.classList.remove('hidden');
                viewHome.style.display = 'block';
            }
            renderHomePrivateSections();
            requestAnimationFrame(() => updateSlidingPillPosition(window.activeScrollSection || 'beranda'));
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
};

window.navigateToSection = function(sectionId) {
    window.activeScrollSection = sectionId;
    window.isProgrammaticScroll = true;
    if (window.programmaticScrollTimer) clearTimeout(window.programmaticScrollTimer);

    if (window.currentRoute !== '/') {
        navigateToRoute('/');
        setTimeout(() => {
            updateSlidingPillPosition(sectionId);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
    } else {
        updateSlidingPillPosition(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    window.programmaticScrollTimer = setTimeout(() => {
        window.isProgrammaticScroll = false;
    }, 850);
};

function updateSlidingPillPosition(activeKey) {
    const container = document.getElementById('nav-pill-container');
    const slidingPill = document.getElementById('nav-sliding-pill');
    const items = document.querySelectorAll('#nav-pill-container .nav-pill-item');
    if (!container || !slidingPill || !items.length) return;

    let targetBtn = null;
    items.forEach(btn => {
        const key = btn.getAttribute('data-spy');
        if (key === activeKey) {
            targetBtn = btn;
            btn.classList.add('nav-pill-active');
        } else {
            btn.classList.remove('nav-pill-active');
        }
    });

    if (targetBtn) {
        const leftOffset = targetBtn.offsetLeft;
        const width = targetBtn.offsetWidth;
        slidingPill.style.width = `${width}px`;
        slidingPill.style.transform = `translate3d(${leftOffset}px, 0, 0)`;
    }
}

window.addEventListener('scroll', () => {
    if (window.currentRoute !== '/' || window.isProgrammaticScroll) return;
    const sections = ['beranda', 'layanan', 'tentang-kami', 'paket-harga', 'cara-kerja', 'faq'];
    let current = 'beranda';
    const scrollPos = window.scrollY + 220;

    for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el && scrollPos >= el.offsetTop) {
            current = secId;
        }
    }

    if (current !== window.activeScrollSection) {
        window.activeScrollSection = current;
        updateSlidingPillPosition(current);
    }
}, { passive: true });

window.addEventListener('resize', () => {
    const key = window.currentRoute === '/dashboard' ? 'dashboard' : (window.activeScrollSection || 'beranda');
    updateSlidingPillPosition(key);
});

window.addEventListener('hashchange', () => {
    const detected = detectRouteFromBrowserLocation();
    if (detected !== window.currentRoute) {
        navigateToRoute(detected, true);
    }
});

// Shortcut ketik URL rahasia admin langsung di keyboard
let secretKeyBuffer = '';
window.addEventListener('keydown', (e) => {
    const tag = (e.target?.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (e.key && e.key.length === 1) {
        secretKeyBuffer = (secretKeyBuffer + e.key).slice(-25);
        if (secretKeyBuffer.includes(SECRET_ADMIN_SLUG)) {
            secretKeyBuffer = '';
            navigateToRoute(SECRET_ADMIN_ROUTE);
        }
    }
});

// ---------------------------------------------------------
// 4. INTERAKSI ACCORDION 8 SOAL FAQ
// ---------------------------------------------------------
window.toggleFaqItem = function(index) {
    for (let i = 1; i <= 8; i++) {
        const card = document.getElementById(`faq-card-${i}`);
        const ans = document.getElementById(`faq-ans-${i}`);
        if (!card || !ans) continue;

        if (i === index) {
            const isOpen = ans.classList.contains('faq-open');
            ans.classList.toggle('faq-open', !isOpen);
            card.classList.toggle('faq-active', !isOpen);
        } else {
            ans.classList.remove('faq-open');
            card.classList.remove('faq-active');
        }
    }
};

// ---------------------------------------------------------
// 5. AUTENTIKASI KLIEN (DAFTAR -> ARAHKAN KE LOGIN & TAMPILKAN TOAST)
// ---------------------------------------------------------
window.togglePasswordField = function(inputId, iconId) {
    const inputEl = document.getElementById(inputId);
    const iconEl = document.getElementById(iconId);
    if (!inputEl) return;

    if (inputEl.type === 'password') {
        inputEl.type = 'text';
        if (iconEl) iconEl.setAttribute('data-lucide', 'eye-off');
    } else {
        inputEl.type = 'password';
        if (iconEl) iconEl.setAttribute('data-lucide', 'eye');
    }
    if (window.lucide) window.lucide.createIcons();
};

window.openAuthModal = function(tab = 'login') {
    document.getElementById('signup-redirect-success-banner')?.classList.add('hidden');
    document.getElementById('auth-modal-backdrop')?.classList.remove('hidden');
    switchAuthTab(tab);
    if (window.lucide) window.lucide.createIcons();
};

window.closeAuthModal = function() {
    document.getElementById('auth-modal-backdrop')?.classList.add('hidden');
};

window.switchAuthTab = function(tab) {
    const loginForm = document.getElementById('client-login-form');
    const signupForm = document.getElementById('client-signup-form');
    const btnLogin = document.getElementById('tab-btn-login');
    const btnSignup = document.getElementById('tab-btn-signup');
    const titleEl = document.getElementById('auth-modal-title');

    document.getElementById('client-login-error')?.classList.add('hidden');
    document.getElementById('client-signup-error')?.classList.add('hidden');

    if (tab === 'signup') {
        document.getElementById('signup-redirect-success-banner')?.classList.add('hidden');
        loginForm?.classList.add('hidden');
        signupForm?.classList.remove('hidden');
        if (btnSignup) btnSignup.className = "py-2 rounded-lg font-bold text-xs sm:text-sm bg-blue-gradient text-white shadow-sm transition-all";
        if (btnLogin) btnLogin.className = "py-2 rounded-lg font-bold text-xs sm:text-sm text-[#06152D] hover:text-[#0052FF] transition-all";
        if (titleEl) titleEl.textContent = "Daftar Akun Perusahaan";
    } else {
        signupForm?.classList.add('hidden');
        loginForm?.classList.remove('hidden');
        if (btnLogin) btnLogin.className = "py-2 rounded-lg font-bold text-xs sm:text-sm bg-blue-gradient text-white shadow-sm transition-all";
        if (btnSignup) btnSignup.className = "py-2 rounded-lg font-bold text-xs sm:text-sm text-[#06152D] hover:text-[#0052FF] transition-all";
        if (titleEl) titleEl.textContent = "Masuk Akun Perusahaan";
    }
};

window.handleClientSignupAccount = function(e) {
    e.preventDefault();
    const name = (document.getElementById('reg-name')?.value || '').trim();
    const companyName = (document.getElementById('reg-company')?.value || '').trim();
    const email = (document.getElementById('reg-email')?.value || '').trim().toLowerCase();
    const whatsapp = (document.getElementById('reg-wa')?.value || '').trim();
    const password = (document.getElementById('reg-password')?.value || '').trim();
    const passwordConfirm = (document.getElementById('reg-password-confirm')?.value || '').trim();
    const errEl = document.getElementById('client-signup-error');

    if (password !== passwordConfirm) {
        if (errEl) {
            errEl.textContent = "Konfirmasi password tidak cocok. Silakan ketik ulang password yang sama.";
            errEl.classList.remove('hidden');
        }
        return;
    }

    if (window.usersData.some(u => u.email.toLowerCase() === email)) {
        if (errEl) {
            errEl.textContent = "Email perusahaan ini sudah terdaftar. Silakan masuk di tab Login.";
            errEl.classList.remove('hidden');
        }
        return;
    }

    const newUser = {
        id: "USR-" + Math.floor(1000 + Math.random() * 9000),
        name,
        companyName,
        email,
        whatsapp,
        password,
        createdAt: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    window.usersData.push(newUser);
    saveDatabaseState();

    // Reset form pendaftaran & arahkan ke tab Login
    document.getElementById('client-signup-form')?.reset();
    switchAuthTab('login');

    const loginEmailEl = document.getElementById('login-email');
    const loginPassEl = document.getElementById('login-password');
    if (loginEmailEl) loginEmailEl.value = email;
    if (loginPassEl) {
        loginPassEl.value = '';
        loginPassEl.focus();
    }

    document.getElementById('signup-redirect-success-banner')?.classList.remove('hidden');

    // Tampilkan pemberitahuan di kanan bawah: "Akun sudah dibuat"
    showToast("Akun sudah dibuat", `Silakan login menggunakan akun ${companyName} Anda.`);
};

window.handleClientLogin = function(e) {
    e.preventDefault();
    const email = (document.getElementById('login-email')?.value || '').trim().toLowerCase();
    const password = (document.getElementById('login-password')?.value || '').trim();
    const errEl = document.getElementById('client-login-error');

    const matchedUser = window.usersData.find(
        u => u.email.toLowerCase() === email && u.password === password
    );

    if (!matchedUser) {
        errEl?.classList.remove('hidden');
        return;
    }

    errEl?.classList.add('hidden');
    document.getElementById('signup-redirect-success-banner')?.classList.add('hidden');
    setCurrentClientUser(matchedUser);
    closeAuthModal();

    // Tampilkan pemberitahuan di kanan bawah: "Akun login"
    showToast("Akun login", `Selamat datang kembali, ${matchedUser.companyName}.`);
    navigateToRoute('/dashboard');
};

window.handleClientLogout = function() {
    setCurrentClientUser(null);
    if (window.currentRoute === '/dashboard') {
        navigateToRoute('/');
    }
    showToast("Sesi Berakhir", "Anda telah keluar dari akun perusahaan.");
};

// ---------------------------------------------------------
// 6. FORMULIR PEMBUATAN PROYEK WEBSITE BARU
// ---------------------------------------------------------
window.handleDraftInput = function() {
    const selectedPkg = document.querySelector('input[name="package_tier"]:checked')?.value || 'Paket Profesional';
    const meta = PACKAGE_META[selectedPkg] || PACKAGE_META['Paket Profesional'];
    const summaryEl = document.getElementById('modal-package-summary');
    if (summaryEl) summaryEl.textContent = meta.summary;
};

window.openProjectModal = function(preselectedPackage) {
    const backdrop = document.getElementById('project-modal-backdrop');
    const formView = document.getElementById('project-form-view');
    const successView = document.getElementById('project-success-view');

    formView?.classList.remove('hidden');
    successView?.classList.add('hidden');

    const pkgToUse = preselectedPackage || 'Paket Profesional';
    document.querySelectorAll('input[name="package_tier"]').forEach(r => {
        r.checked = (r.value === pkgToUse);
    });
    handleDraftInput();

    if (window.currentClientUser) {
        const nameEl = document.getElementById('input-client-name');
        const brandEl = document.getElementById('input-brand-name');
        const emailEl = document.getElementById('input-client-email');
        const waEl = document.getElementById('input-client-wa');
        if (nameEl) nameEl.value = window.currentClientUser.name || '';
        if (brandEl) brandEl.value = window.currentClientUser.companyName || '';
        if (emailEl) emailEl.value = window.currentClientUser.email || '';
        if (waEl) waEl.value = window.currentClientUser.whatsapp || '';
    }

    backdrop?.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function() {
    document.getElementById('project-modal-backdrop')?.classList.add('hidden');
};

window.handleProjectSubmit = function(e) {
    e.preventDefault();
    const clientName = (document.getElementById('input-client-name')?.value || '').trim();
    const brandName = (document.getElementById('input-brand-name')?.value || '').trim();
    const email = (document.getElementById('input-client-email')?.value || '').trim().toLowerCase();
    const whatsapp = (document.getElementById('input-client-wa')?.value || '').trim();
    const brief = (document.getElementById('input-client-brief')?.value || '').trim();
    const packageTier = document.querySelector('input[name="package_tier"]:checked')?.value || 'Paket Profesional';

    if (!clientName || !brandName || !email || !whatsapp || !brief) return;

    let ownerUser = window.currentClientUser;
    if (!ownerUser) {
        ownerUser = window.usersData.find(u => u.email.toLowerCase() === email);
        if (!ownerUser) {
            ownerUser = {
                id: "USR-" + Math.floor(1000 + Math.random() * 9000),
                name: clientName,
                companyName: brandName,
                email,
                whatsapp,
                password: "flexi123",
                createdAt: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
            };
            window.usersData.push(ownerUser);
        }
        setCurrentClientUser(ownerUser);
    }

    const pkgMeta = PACKAGE_META[packageTier] || PACKAGE_META['Paket Profesional'];
    const newId = `FLX-2026-${Math.floor(200 + Math.random() * 799)}`;
    const now = new Date();
    const createdAtStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
                         now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const slug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newProject = {
        id: newId,
        userId: ownerUser.id,
        clientName,
        brandName,
        email,
        whatsapp,
        packageTier,
        priceValue: pkgMeta.priceValue,
        priceText: pkgMeta.priceText,
        renewalText: pkgMeta.renewalText,
        brief,
        status: 'not_yet',
        progress: 10,
        adminNote: `Pendaftaran proyek website ${brandName} (${packageTier}) telah diterima di sistem.`,
        previewUrl: `https://staging.flexi.co/${slug || 'website'}`,
        createdAt: createdAtStr,
        removedFromAdmin: false
    };

    window.projectsData.unshift(newProject);
    saveDatabaseState();

    document.getElementById('input-client-brief').value = '';
    document.getElementById('project-form-view')?.classList.add('hidden');
    document.getElementById('project-success-view')?.classList.remove('hidden');
    document.getElementById('success-tracking-code').textContent = newId;

    showToast("Proyek Tersimpan", `Proyek ${brandName} (${newId}) berhasil didaftarkan.`);
    if (window.lucide) window.lucide.createIcons();
};

window.copyTrackingCode = function() {
    const codeText = document.getElementById('success-tracking-code')?.textContent || '';
    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).catch(() => {});
    }
    const label = document.getElementById('copy-btn-label');
    if (label) {
        label.textContent = "Tersalin!";
        setTimeout(() => { label.textContent = "Salin ID"; }, 2000);
    }
};

// ---------------------------------------------------------
// 7. RENDER TAMPILAN NAVBAR, BERANDA & PORTAL KLIEN
// ---------------------------------------------------------
function renderNavbarAuthUI() {
    const outDesktop = document.getElementById('nav-auth-logged-out');
    const inDesktop = document.getElementById('nav-auth-logged-in');
    const outMobile = document.getElementById('mobile-auth-logged-out');
    const inMobile = document.getElementById('mobile-auth-logged-in');
    const countBadge = document.getElementById('nav-my-project-count');

    if (window.currentClientUser) {
        const myProjects = getMyCompanyProjects();
        outDesktop?.classList.add('hidden');
        outDesktop?.classList.remove('flex');
        inDesktop?.classList.remove('hidden');
        inDesktop?.classList.add('flex');

        outMobile?.classList.add('hidden');
        inMobile?.classList.remove('hidden');

        const initials = (window.currentClientUser.companyName || 'FX')
            .split(' ')
            .filter(Boolean)
            .map(w => w[0])
            .join('')
            .slice(0, 2)
            .toUpperCase() || 'FX';

        const avatarEl = document.getElementById('nav-user-avatar');
        const compEl = document.getElementById('nav-company-name');
        const emailEl = document.getElementById('nav-user-email');
        const mobCompEl = document.getElementById('mobile-company-name');
        const mobEmailEl = document.getElementById('mobile-user-email');

        if (avatarEl) avatarEl.textContent = initials;
        if (compEl) compEl.textContent = window.currentClientUser.companyName;
        if (emailEl) emailEl.textContent = window.currentClientUser.email;
        if (mobCompEl) mobCompEl.textContent = window.currentClientUser.companyName;
        if (mobEmailEl) mobEmailEl.textContent = window.currentClientUser.email;

        if (countBadge) {
            countBadge.textContent = myProjects.length;
            countBadge.classList.remove('hidden');
        }
    } else {
        outDesktop?.classList.remove('hidden');
        outDesktop?.classList.add('flex');
        inDesktop?.classList.add('hidden');
        inDesktop?.classList.remove('flex');

        outMobile?.classList.remove('hidden');
        inMobile?.classList.add('hidden');

        if (countBadge) countBadge.classList.add('hidden');
    }

    requestAnimationFrame(() => {
        const key = window.currentRoute === '/dashboard' ? 'dashboard' : (window.activeScrollSection || 'beranda');
        updateSlidingPillPosition(key);
    });
}

function renderProjectStatusCardHTML(proj) {
    const sMeta = STATUS_META[proj.status] || STATUS_META.not_yet;
    const steps = [
        { idx: 1, title: "Not Yet", desc: "Brief Diterima" },
        { idx: 2, title: "In Progress", desc: "Pengerjaan" },
        { idx: 3, title: "Almost Done", desc: "Hampir Selesai" },
        { idx: 4, title: "Done", desc: "Selesai & Aktif" }
    ];

    return `
        <article class="theme-card bg-white rounded-2xl border border-blue-200 shadow-sm overflow-hidden">
            <div class="bg-[#EBF3FF] dark:bg-[#08152B] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200">
                <div>
                    <span class="text-xs text-[#0052FF] font-semibold">${escapeHtml(proj.id)} • ${escapeHtml(proj.packageTier)}</span>
                    <h3 class="theme-heading font-heading font-bold text-lg text-[#06152D] mt-0.5">${escapeHtml(proj.brandName)}</h3>
                </div>
                <span class="px-3.5 py-1.5 rounded-full text-xs font-bold border ${sMeta.badgeClass} self-start sm:self-auto">
                    ${sMeta.shortLabel}
                </span>
            </div>

            <div class="p-6 space-y-5">
                <div>
                    <div class="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span class="theme-heading font-semibold text-[#06152D]">Status: <strong class="text-[#0052FF]">${sMeta.label}</strong></span>
                        <span class="theme-heading font-bold text-[#06152D]">${proj.progress}%</span>
                    </div>
                    <div class="w-full h-3 bg-[#EBF3FF] rounded-full overflow-hidden p-0.5">
                        <div class="h-full rounded-full progress-bar-blue transition-all duration-500" style="width: ${proj.progress}%"></div>
                    </div>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    ${steps.map(step => {
                        const isActiveOrDone = step.idx <= sMeta.stepIndex;
                        return `
                            <div class="theme-subbox p-3 rounded-xl border ${isActiveOrDone ? 'bg-[#EBF3FF] border-[#0052FF] text-[#06152D]' : 'bg-slate-50 border-slate-200 text-slate-400'}">
                                <p class="theme-heading font-bold text-xs">${step.idx}. ${step.title}</p>
                                <p class="theme-text text-[11px] opacity-80 mt-0.5">${step.desc}</p>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="theme-subbox p-4 rounded-xl bg-[#F4F8FF] border border-blue-100 text-xs sm:text-sm space-y-1.5">
                    <p class="font-semibold text-[#0052FF]">Catatan Progres Tim Admin:</p>
                    <p class="theme-heading text-[#06152D]">"${escapeHtml(proj.adminNote)}"</p>
                    <p class="theme-text text-xs text-slate-500 pt-1">Konsep Klien: ${escapeHtml(proj.brief)}</p>
                </div>
            </div>
        </article>
    `;
}

function renderHomePrivateSections() {
    const heroWidget = document.getElementById('hero-portal-widget');
    const homeTrackerBox = document.getElementById('home-private-tracker-box');
    const myProjects = getMyCompanyProjects();

    if (window.currentClientUser) {
        const latestProj = myProjects[0];
        if (heroWidget) {
            if (latestProj) {
                const sMeta = STATUS_META[latestProj.status] || STATUS_META.not_yet;
                heroWidget.innerHTML = `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-[11px] font-bold uppercase text-[#0052FF]">PROYEK AKTIF (${escapeHtml(window.currentClientUser.companyName)})</span>
                            <h3 class="theme-heading font-heading font-bold text-base text-[#06152D] mt-0.5">${escapeHtml(latestProj.brandName)} — ${sMeta.label} (${latestProj.progress}%)</h3>
                            <p class="theme-text text-xs text-slate-600 mt-1">"${escapeHtml(latestProj.adminNote)}"</p>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            <button type="button" onclick="navigateToRoute('/dashboard')" class="btn-animated px-4 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs">
                                Buka Proyek Saya (${myProjects.length})
                            </button>
                        </div>
                    </div>
                `;
            } else {
                heroWidget.innerHTML = `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p class="theme-heading font-heading font-bold text-sm text-[#06152D]">Halo, ${escapeHtml(window.currentClientUser.companyName)}!</p>
                            <p class="theme-text text-xs text-slate-600">Belum ada proyek website yang diajukan pada akun Anda.</p>
                        </div>
                        <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated px-4 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs">
                            + Buat Proyek Baru
                        </button>
                    </div>
                `;
            }
        }

        if (homeTrackerBox) {
            homeTrackerBox.innerHTML = myProjects.length > 0
                ? renderProjectStatusCardHTML(myProjects[0])
                : `<div class="theme-card bg-[#F4F8FF] rounded-2xl border border-blue-200 p-8 text-center">
                        <p class="theme-heading font-heading font-bold text-base text-[#06152D]">Belum Ada Proyek di Akun ${escapeHtml(window.currentClientUser.companyName)}</p>
                        <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated mt-3 px-5 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs">+ Ajukan Proyek</button>
                   </div>`;
        }
    } else {
        if (heroWidget) {
            heroWidget.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <span class="text-xs font-bold text-[#0052FF]">Portal Klien &amp; Cek Progres Website</span>
                        <p class="theme-text text-xs text-slate-600 mt-0.5">
                            Masuk ke akun perusahaan Anda untuk memantau apakah proyek website Anda berstatus Not Yet, Almost Done, atau Done.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button type="button" onclick="openAuthModal('login')" class="btn-animated px-4 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs">
                            Masuk Akun
                        </button>
                        <button type="button" onclick="openAuthModal('signup')" class="btn-animated px-4 py-2.5 rounded-xl bg-[#EBF3FF] text-[#002B7F] font-bold text-xs border border-blue-200">
                            Daftar Akun
                        </button>
                    </div>
                </div>
            `;
        }

        if (homeTrackerBox) {
            homeTrackerBox.innerHTML = `
                <div class="theme-card bg-[#F4F8FF] rounded-2xl border border-blue-200 p-8 text-center max-w-2xl mx-auto">
                    <h3 class="theme-heading font-heading font-bold text-lg text-[#06152D]">Pantau Progres Pengerjaan Website Anda</h3>
                    <p class="theme-text text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                        Setiap perusahaan hanya dapat melihat progres website miliknya sendiri. Silakan masuk atau daftar akun perusahaan terlebih dahulu.
                    </p>
                    <div class="flex justify-center gap-3">
                        <button type="button" onclick="openAuthModal('login')" class="btn-animated px-5 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs sm:text-sm">Masuk Akun</button>
                        <button type="button" onclick="openAuthModal('signup')" class="btn-animated px-5 py-2.5 rounded-xl bg-white text-[#002B7F] border border-blue-200 font-bold text-xs sm:text-sm">Daftar Akun</button>
                    </div>
                </div>
            `;
        }
    }
    if (window.lucide) window.lucide.createIcons();
}

window.renderClientDashboardPage = function() {
    const container = document.getElementById('client-dashboard-content');
    if (!container) return;

    if (!window.currentClientUser) {
        container.innerHTML = `
            <div class="theme-card bg-white rounded-2xl border border-blue-100 p-10 text-center max-w-lg mx-auto shadow-sm">
                <h1 class="theme-heading font-heading font-extrabold text-2xl text-[#06152D]">Portal Klien Perusahaan</h1>
                <p class="theme-text text-slate-600 text-xs sm:text-sm mt-2">
                    Silakan masuk menggunakan akun perusahaan Anda untuk memantau seluruh progres website Anda.
                </p>
                <div class="mt-6 flex justify-center gap-3">
                    <button type="button" onclick="openAuthModal('login')" class="btn-animated px-6 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs sm:text-sm">Masuk</button>
                    <button type="button" onclick="openAuthModal('signup')" class="btn-animated px-6 py-2.5 rounded-xl bg-[#EBF3FF] text-[#002B7F] font-bold text-xs sm:text-sm border border-blue-200">Daftar Akun</button>
                </div>
            </div>
        `;
        return;
    }

    const myProjects = getMyCompanyProjects();
    container.innerHTML = `
        <div class="theme-card bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 shadow-sm mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
                <span class="text-[11px] font-bold uppercase tracking-wider bg-[#EBF3FF] text-[#002B7F] px-3 py-1 rounded-full">Portal Perusahaan</span>
                <h1 class="theme-heading font-heading font-extrabold text-2xl sm:text-3xl text-[#06152D] mt-2">${escapeHtml(window.currentClientUser.companyName)}</h1>
                <p class="theme-text text-slate-600 text-xs sm:text-sm mt-0.5">
                    PIC: ${escapeHtml(window.currentClientUser.name)} (${escapeHtml(window.currentClientUser.email)}) • ${myProjects.length} Proyek
                </p>
            </div>
            <div class="flex flex-wrap gap-2.5">
                <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated px-4 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs sm:text-sm">
                    + Proyek Baru
                </button>
                <button type="button" onclick="navigateToRoute('/')" class="btn-animated px-4 py-2.5 rounded-xl bg-[#EBF3FF] text-[#002B7F] font-semibold text-xs sm:text-sm">
                    Beranda
                </button>
            </div>
        </div>
        <div class="space-y-6">
            ${myProjects.length > 0
                ? myProjects.map(p => renderProjectStatusCardHTML(p)).join('')
                : `<div class="theme-card bg-white rounded-2xl border border-blue-100 p-10 text-center">
                        <p class="theme-heading font-heading font-bold text-base text-[#06152D]">Belum ada proyek website.</p>
                        <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated mt-4 px-5 py-2.5 rounded-xl bg-blue-gradient text-white font-bold text-xs">+ Buat Proyek Pertama</button>
                   </div>`
            }
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
};

// ---------------------------------------------------------
// 8. ADMIN PANEL RAHASIA + PROTEKSI BRUTE-FORCE 30 DETIK
// ---------------------------------------------------------
function getAdminLockoutUntil() {
    try {
        return Number(localStorage.getItem(STORAGE_KEYS.ADMIN_LOCKOUT) || 0);
    } catch (e) {
        return 0;
    }
}

function setAdminLockoutUntil(timestampMs) {
    try {
        localStorage.setItem(STORAGE_KEYS.ADMIN_LOCKOUT, String(timestampMs));
    } catch (e) {}
}

function checkAdminBruteForceLockout() {
    const errorBox = document.getElementById('admin-login-error');
    const errorText = document.getElementById('admin-login-error-text');
    const submitBtn = document.getElementById('admin-login-submit-btn');
    const passInput = document.getElementById('admin-password-input');
    const badge = document.getElementById('admin-attempt-badge');

    const lockUntil = getAdminLockoutUntil();
    const now = Date.now();

    if (lockUntil > now) {
        const remainingSec = Math.ceil((lockUntil - now) / 1000);
        if (errorText) errorText.textContent = `Terlalu banyak percobaan salah. Silakan tunggu ${remainingSec} detik lagi.`;
        errorBox?.classList.remove('hidden');
        if (submitBtn) submitBtn.disabled = true;
        if (passInput) passInput.disabled = true;
        if (badge) badge.textContent = `Terkunci (${remainingSec}d)`;

        if (window.adminLockoutTimer) clearTimeout(window.adminLockoutTimer);
        window.adminLockoutTimer = setTimeout(checkAdminBruteForceLockout, 1000);
        return true;
    } else {
        if (submitBtn) submitBtn.disabled = false;
        if (passInput) passInput.disabled = false;
        if (badge) badge.textContent = `Proteksi 30 Detik Aktif`;
        return false;
    }
}

window.handleAdminLoginSubmit = function(e) {
    e.preventDefault();
    if (checkAdminBruteForceLockout()) return;

    const passInput = document.getElementById('admin-password-input');
    const errorBox = document.getElementById('admin-login-error');
    const errorText = document.getElementById('admin-login-error-text');
    const entered = (passInput?.value || '').trim();

    if (ADMIN_PASSWORDS.includes(entered)) {
        window.isAdminAuthenticated = true;
        window.adminFailedAttempts = 0;
        setAdminLockoutUntil(0);
        sessionStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
        errorBox?.classList.add('hidden');
        if (passInput) passInput.value = '';
        navigateToRoute(SECRET_ADMIN_ROUTE, true);
        showToast("Akun login", "Berhasil masuk ke Konsol Admin flexi.co.");
    } else {
        window.adminFailedAttempts++;
        if (window.adminFailedAttempts >= 3) {
            window.adminFailedAttempts = 0;
            setAdminLockoutUntil(Date.now() + 30000);
            checkAdminBruteForceLockout();
        } else {
            const sisa = 3 - window.adminFailedAttempts;
            if (errorText) errorText.textContent = `Password salah. Sisa percobaan sebelum dikunci 30 detik: ${sisa}x.`;
            errorBox?.classList.remove('hidden');
        }
    }
};

window.handleAdminLogout = function() {
    window.isAdminAuthenticated = false;
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    navigateToRoute(SECRET_ADMIN_ROUTE, true);
    showToast("Admin Terkunci", "Anda telah keluar dari panel Admin.");
};

window.toggleAdminPasswordVisibility = function() {
    togglePasswordField('admin-password-input', 'password-eye-icon');
};

window.switchAdminMainTab = function(tabName) {
    window.adminMainTab = tabName;
    const pView = document.getElementById('admin-panel-projects-view');
    const aView = document.getElementById('admin-panel-accounts-view');
    const bProj = document.getElementById('adm-tab-projects');
    const bAcc = document.getElementById('adm-tab-accounts');

    pView?.classList.add('hidden');
    aView?.classList.add('hidden');

    const inactive = "px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 text-xs font-semibold";
    const active = "px-4 py-2 rounded-xl bg-blue-gradient text-white text-xs font-bold";

    if (bProj) bProj.className = inactive;
    if (bAcc) bAcc.className = inactive;

    if (tabName === 'accounts') {
        aView?.classList.remove('hidden');
        if (bAcc) bAcc.className = active;
        renderAdminAccountsTable();
    } else {
        pView?.classList.remove('hidden');
        if (bProj) bProj.className = active;
        renderAdminProjects();
    }
};

window.renderAdminAccountsTable = function() {
    const tbody = document.getElementById('admin-accounts-table-body');
    const badge = document.getElementById('adm-users-count-badge');
    if (badge) badge.textContent = window.usersData.length;
    if (!tbody) return;

    tbody.innerHTML = window.usersData.map(u => {
        const count = window.projectsData.filter(p => p.userId === u.id || (p.email && p.email.toLowerCase() === u.email.toLowerCase())).length;
        return `
            <tr class="hover:bg-[#F4F8FF]">
                <td class="p-4 font-bold text-[#0052FF]">${escapeHtml(u.id)}</td>
                <td class="p-4 font-bold text-[#06152D]">${escapeHtml(u.companyName)}</td>
                <td class="p-4 text-slate-700">${escapeHtml(u.name)}</td>
                <td class="p-4 text-[#0052FF]">${escapeHtml(u.email)}</td>
                <td class="p-4 text-slate-600">${escapeHtml(u.whatsapp)}</td>
                <td class="p-4"><span class="px-2.5 py-1 rounded-full bg-[#EBF3FF] text-[#002B7F] font-bold text-xs">${count} Proyek</span></td>
            </tr>
        `;
    }).join('');
};

window.setAdminFilter = function(filterKey) {
    window.adminFilter = filterKey;
    ['all', 'not_yet', 'in_progress', 'almost_done', 'done', 'removed'].forEach(k => {
        const btn = document.getElementById(`filter-btn-${k}`);
        if (!btn) return;
        btn.className = (k === filterKey)
            ? "px-3.5 py-2 rounded-lg text-xs font-bold bg-blue-gradient text-white"
            : "px-3.5 py-2 rounded-lg text-xs font-semibold text-[#06152D] hover:bg-blue-50";
    });
    renderAdminProjects();
};

window.quickChangeProjectStatus = function(projectId, newStatus) {
    const proj = window.projectsData.find(p => p.id === projectId);
    if (!proj) return;

    const sMeta = STATUS_META[newStatus] || STATUS_META.not_yet;
    proj.status = newStatus;
    proj.progress = sMeta.defaultProgress;

    const noteInput = document.getElementById(`admin-note-${projectId}`);
    proj.adminNote = (noteInput && noteInput.value.trim()) ? noteInput.value.trim() : sMeta.defaultNote;

    saveDatabaseState();
    showToast("Status Diperbarui", `${proj.brandName} kini berstatus ${sMeta.label}.`);
};

window.saveAdminCustomDetails = function(projectId) {
    const proj = window.projectsData.find(p => p.id === projectId);
    if (!proj) return;

    const progressInput = document.getElementById(`admin-progress-${projectId}`);
    const noteInput = document.getElementById(`admin-note-${projectId}`);

    if (progressInput) proj.progress = Math.min(100, Math.max(0, parseInt(progressInput.value, 10) || 0));
    if (noteInput) proj.adminNote = noteInput.value.trim();

    saveDatabaseState();
    showToast("Update Tersimpan", `Catatan progres untuk ${proj.brandName} berhasil disimpan.`);
};

window.openAdminRemoveModal = function(projectId) {
    const proj = window.projectsData.find(p => p.id === projectId);
    if (!proj) return;
    document.getElementById('remove-modal-project-name').textContent = `${proj.brandName} (${proj.id})`;
    document.getElementById('admin-remove-modal-backdrop')?.classList.remove('hidden');

    const confirmBtn = document.getElementById('confirm-admin-remove-btn');
    if (confirmBtn) {
        confirmBtn.onclick = function() {
            proj.removedFromAdmin = true;
            saveDatabaseState();
            closeAdminRemoveModal();
            showToast("Proyek Di-Remove", `${proj.brandName} dihapus dari daftar aktif Admin.`);
        };
    }
};

window.closeAdminRemoveModal = function() {
    document.getElementById('admin-remove-modal-backdrop')?.classList.add('hidden');
};

window.restoreProjectToAdmin = function(projectId) {
    const proj = window.projectsData.find(p => p.id === projectId);
    if (!proj) return;
    proj.removedFromAdmin = false;
    saveDatabaseState();
    showToast("Proyek Dikembalikan", `${proj.brandName} kembali tampil di daftar aktif Admin.`);
};

window.renderAdminProjects = function() {
    const activeProjects = window.projectsData.filter(p => !p.removedFromAdmin);
    const removedProjects = window.projectsData.filter(p => p.removedFromAdmin);

    const elTotal = document.getElementById('kpi-total');
    const elNotYet = document.getElementById('kpi-not-yet');
    const elAlmost = document.getElementById('kpi-almost-done');
    const elDone = document.getElementById('kpi-done');
    const elRemoved = document.getElementById('kpi-removed');
    const elRev = document.getElementById('kpi-revenue');
    const badgeUsers = document.getElementById('adm-users-count-badge');

    if (elTotal) elTotal.textContent = activeProjects.length;
    if (elNotYet) elNotYet.textContent = activeProjects.filter(p => p.status === 'not_yet').length;
    if (elAlmost) elAlmost.textContent = activeProjects.filter(p => p.status === 'almost_done' || p.status === 'in_progress').length;
    if (elDone) elDone.textContent = activeProjects.filter(p => p.status === 'done').length;
    if (elRemoved) elRemoved.textContent = removedProjects.length;

    const totalRev = window.projectsData.reduce((acc, p) => acc + (Number(p.priceValue) || 0), 0);
    if (elRev) elRev.textContent = "Rp " + totalRev.toLocaleString('id-ID');
    if (badgeUsers) badgeUsers.textContent = window.usersData.length;

    const searchVal = (document.getElementById('admin-search-input')?.value || '').trim().toLowerCase();
    const filtered = window.projectsData.filter(p => {
        if (window.adminFilter === 'removed') {
            if (!p.removedFromAdmin) return false;
        } else {
            if (p.removedFromAdmin) return false;
            if (window.adminFilter !== 'all' && p.status !== window.adminFilter) return false;
        }
        return !searchVal ||
            p.clientName.toLowerCase().includes(searchVal) ||
            p.brandName.toLowerCase().includes(searchVal) ||
            p.email.toLowerCase().includes(searchVal) ||
            p.id.toLowerCase().includes(searchVal);
    });

    const listContainer = document.getElementById('admin-projects-list');
    if (!listContainer) return;

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="bg-white rounded-2xl border border-blue-100 p-10 text-center text-sm text-slate-500">
                Tidak ada proyek pada kategori ini.
            </div>
        `;
        return;
    }

    listContainer.innerHTML = filtered.map(proj => {
        const sMeta = STATUS_META[proj.status] || STATUS_META.not_yet;
        return `
            <article class="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-blue-100">
                    <div>
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="font-bold text-xs px-2.5 py-1 rounded bg-[#06152D] text-white">${escapeHtml(proj.id)}</span>
                            <span class="px-2.5 py-1 rounded bg-[#EBF3FF] text-[#002B7F] font-bold text-xs">${escapeHtml(proj.packageTier)} (${escapeHtml(proj.priceText)})</span>
                            <span class="text-xs text-slate-400">• ${escapeHtml(proj.createdAt)}</span>
                        </div>
                        <h3 class="font-heading font-bold text-lg text-[#06152D] mt-1.5">
                            ${escapeHtml(proj.brandName)} <span class="font-normal text-sm text-slate-500">— PIC: ${escapeHtml(proj.clientName)} (${escapeHtml(proj.email)})</span>
                        </h3>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <span class="px-3 py-1 rounded-full text-xs font-bold border ${sMeta.badgeClass}">
                            ${sMeta.label} (${proj.progress}%)
                        </span>
                        ${proj.removedFromAdmin
                            ? `<button type="button" onclick="restoreProjectToAdmin('${proj.id}')" class="px-3 py-1.5 rounded-xl bg-[#EBF3FF] text-[#002B7F] text-xs font-bold">Kembalikan</button>`
                            : `<button type="button" onclick="openAdminRemoveModal('${proj.id}')" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-[#06152D] text-xs font-semibold">Remove Proyek</button>`
                        }
                    </div>
                </div>

                <p class="py-3 text-xs sm:text-sm text-slate-600 border-b border-blue-50">
                    <strong class="text-[#06152D]">Konsep Website:</strong> "${escapeHtml(proj.brief)}"
                </p>

                <div class="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    <div class="lg:col-span-5 space-y-2.5">
                        <label class="block text-xs font-bold text-[#06152D]">Ubah Status Progres:</label>
                        <div class="grid grid-cols-2 gap-2">
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'not_yet')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'not_yet' ? 'bg-blue-gradient text-white border-transparent' : 'bg-[#F4F8FF] text-[#06152D] border-blue-200'}">Not Yet (10%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'in_progress')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'in_progress' ? 'bg-blue-gradient text-white border-transparent' : 'bg-[#F4F8FF] text-[#06152D] border-blue-200'}">In Progress (50%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'almost_done')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'almost_done' ? 'bg-blue-gradient text-white border-transparent' : 'bg-[#F4F8FF] text-[#06152D] border-blue-200'}">Almost Done (85%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'done')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'done' ? 'bg-blue-gradient text-white border-transparent' : 'bg-[#F4F8FF] text-[#06152D] border-blue-200'}">Done (100%)</button>
                        </div>
                        <div class="pt-1">
                            <div class="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                                <span>Persentase Manual:</span>
                                <span id="slider-val-${proj.id}" class="font-bold text-[#0052FF]">${proj.progress}%</span>
                            </div>
                            <input type="range" id="admin-progress-${proj.id}" min="0" max="100" step="5" value="${proj.progress}" oninput="document.getElementById('slider-val-${proj.id}').textContent = this.value + '%'" class="w-full accent-[#0052FF] cursor-pointer">
                        </div>
                    </div>

                    <div class="lg:col-span-7 space-y-2">
                        <label for="admin-note-${proj.id}" class="block text-xs font-bold text-[#06152D]">Catatan Progres untuk Klien:</label>
                        <textarea id="admin-note-${proj.id}" rows="2" class="w-full px-3.5 py-2 rounded-xl bg-[#F4F8FF] border border-blue-200 text-xs sm:text-sm text-[#06152D] focus:bg-white focus:border-[#0052FF] focus:outline-none">${escapeHtml(proj.adminNote)}</textarea>
                        <div class="flex justify-end">
                            <button type="button" onclick="saveAdminCustomDetails('${proj.id}')" class="px-4 py-2 rounded-xl bg-blue-gradient text-white text-xs font-bold">
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
};

// ---------------------------------------------------------
// 9. UTILITAS UMUM & INISIALISASI SAAT HALAMAN DIMUAT
// ---------------------------------------------------------
window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
};

function refreshAllUI() {
    renderNavbarAuthUI();
    if (window.currentRoute === '/') renderHomePrivateSections();
    if (window.currentRoute === '/dashboard') renderClientDashboardPage();
    if (window.currentRoute === SECRET_ADMIN_ROUTE && window.isAdminAuthenticated) {
        renderAdminProjects();
        renderAdminAccountsTable();
    }
}

window.showToast = function(title, message) {
    const toast = document.getElementById('toast-notification');
    const tTitle = document.getElementById('toast-title');
    const tMsg = document.getElementById('toast-message');
    if (!toast) return;
    if (tTitle) tTitle.textContent = title;
    if (tMsg) tMsg.textContent = message;
    toast.classList.remove('hidden');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 4000);
};

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

['project-modal-backdrop', 'auth-modal-backdrop', 'admin-remove-modal-backdrop'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', (e) => {
        if (e.target.id === id) document.getElementById(id)?.classList.add('hidden');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    initThemeMode();
    initAppData();
    const initialRoute = detectRouteFromBrowserLocation();
    navigateToRoute(initialRoute, true);
    refreshAllUI();
});