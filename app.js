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

const PORTFOLIO_KEYS = ['bitemart', 'nusanet', 'aurelia', 'medikaplus', 'kopisenja'];
window.currentPortfolioIndex = 0;
window.currentPortfolioPopupKey = 'bitemart';
window.currentPortfolioViewport = 'desktop';

const PORTFOLIO_ARTICLES = {
    bitemart: {
        key: "bitemart",
        title: "BiteMart",
        domain: "https://bitemart.eu",
        badgeLabel: "Food Delivery"
    },
    nusanet: {
        key: "nusanet",
        title: "NusaNet",
        domain: "https://nusanet.id",
        badgeLabel: "ISP & Telco"
    },
    aurelia: {
        key: "aurelia",
        title: "Aurelia Suites",
        domain: "https://aureliasuites.com",
        badgeLabel: "Luxury Resort"
    },
    medikaplus: {
        key: "medikaplus",
        title: "MedikaPlus",
        domain: "https://medikaplus.co.id",
        badgeLabel: "Healthcare"
    },
    kopisenja: {
        key: "kopisenja",
        title: "Kopi Senja",
        domain: "https://kopisenjaroastery.id",
        badgeLabel: "E-Commerce"
    }
};

function renderHardcodedPortfolioMockup(projectKey, isFullPopup = false) {
    if (projectKey === 'bitemart') {
        return `
            <div class="live-mockup-canvas bg-[#FDFBF7] text-stone-900 select-none overflow-hidden font-sans">
                <div class="px-3.5 sm:px-5 py-2.5 bg-[#1C1917] text-stone-200 flex items-center justify-between gap-2 text-[10px] sm:text-xs">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="px-2 py-0.5 rounded bg-[#D97706] text-white font-extrabold text-[9px] tracking-wider uppercase shrink-0">BiteMart EU</span>
                        <span class="text-stone-300 truncate">📍 Via Torino 42, Milano • <strong class="text-amber-400">18m</strong></span>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[9px] sm:text-[10px]">2 Items • €24.40</span>
                    </div>
                </div>

                <div class="p-3.5 sm:p-5 grid grid-cols-12 gap-3.5 items-stretch bg-[#FDFBF7]">
                    <div class="pm-hide-mobile hidden sm:flex sm:col-span-3 flex-col justify-between rounded-xl bg-[#F5F0E6] border border-stone-200/80 p-3 text-left">
                        <div class="space-y-1.5">
                            <p class="text-[9px] font-extrabold uppercase tracking-wider text-stone-400 px-1.5">European Kitchens</p>
                            <div class="px-2.5 py-1.5 rounded-lg bg-[#1C1917] text-amber-300 font-bold text-[10px] flex items-center justify-between">
                                <span>🍕 Napoli Pizza</span>
                                <span>14</span>
                            </div>
                            <div class="px-2.5 py-1.5 rounded-lg text-stone-700 font-semibold text-[10px] flex items-center justify-between">
                                <span>🥐 Paris Bakery</span>
                                <span class="text-stone-400">9</span>
                            </div>
                            <div class="px-2.5 py-1.5 rounded-lg text-stone-700 font-semibold text-[10px] flex items-center justify-between">
                                <span>🍝 Roma Pasta</span>
                                <span class="text-stone-400">11</span>
                            </div>
                            <div class="px-2.5 py-1.5 rounded-lg text-stone-700 font-semibold text-[10px] flex items-center justify-between">
                                <span>🥩 Vienna Grill</span>
                                <span class="text-stone-400">7</span>
                            </div>
                        </div>
                        <div class="p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-left mt-3">
                            <p class="text-[9px] font-extrabold uppercase text-amber-800">Free Gelato</p>
                            <p class="text-[9px] font-semibold text-stone-700 leading-tight mt-0.5">Orders above €20 get artisan pistachio cup.</p>
                        </div>
                    </div>

                    <div class="pm-col-full-mobile col-span-12 sm:col-span-9 flex flex-col justify-between space-y-3 text-left">
                        <div class="pm-flex-col-mobile rounded-xl bg-[#292524] text-white p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <div class="space-y-1">
                                <span class="inline-block px-2 py-0.5 rounded bg-amber-400 text-stone-950 font-extrabold text-[8px] sm:text-[9px] uppercase tracking-wider">Michelin Street Partner</span>
                                <h4 class="font-heading font-extrabold text-xs sm:text-base text-white leading-snug">
                                    Artisan European Cravings, Delivered Hot.
                                </h4>
                                <p class="text-[10px] text-stone-300">Wood-fired Neapolitan dough, French butter pastries &amp; fresh handmade tagliatelle.</p>
                            </div>
                            <div class="shrink-0 text-right bg-black/30 px-3 py-2 rounded-xl border border-white/10">
                                <span class="block text-[8px] uppercase text-amber-300 font-bold">Delivery</span>
                                <span class="font-extrabold text-xs sm:text-sm text-white">18 Mins</span>
                            </div>
                        </div>

                        <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <div class="rounded-xl bg-white border border-stone-200 p-3 shadow-sm flex flex-col justify-between">
                                <div class="flex items-center justify-between">
                                    <span class="text-[8px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-700">Napoli</span>
                                    <span class="text-[9px] font-extrabold text-amber-600">★ 4.9</span>
                                </div>
                                <div class="my-1.5">
                                    <p class="font-bold text-[11px] text-stone-900">Truffle Burrata Pizza</p>
                                    <p class="text-[9px] text-stone-400">450°C Oak Fired</p>
                                </div>
                                <div class="flex items-center justify-between pt-1.5 border-t border-stone-100">
                                    <span class="font-extrabold text-[11px] text-stone-900">€13.50</span>
                                    <span class="px-2 py-0.5 rounded bg-[#1C1917] text-white text-[9px] font-bold">+ Add</span>
                                </div>
                            </div>

                            <div class="rounded-xl bg-white border border-stone-200 p-3 shadow-sm flex flex-col justify-between">
                                <div class="flex items-center justify-between">
                                    <span class="text-[8px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800">Paris</span>
                                    <span class="text-[9px] font-extrabold text-amber-600">★ 4.8</span>
                                </div>
                                <div class="my-1.5">
                                    <p class="font-bold text-[11px] text-stone-900">Almond Croissant Box</p>
                                    <p class="text-[9px] text-stone-400">Charentes Butter</p>
                                </div>
                                <div class="flex items-center justify-between pt-1.5 border-t border-stone-100">
                                    <span class="font-extrabold text-[11px] text-stone-900">€8.90</span>
                                    <span class="px-2 py-0.5 rounded bg-[#1C1917] text-white text-[9px] font-bold">+ Add</span>
                                </div>
                            </div>

                            <div class="rounded-xl bg-white border border-stone-200 p-3 shadow-sm flex flex-col justify-between">
                                <div class="flex items-center justify-between">
                                    <span class="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">Roma</span>
                                    <span class="text-[9px] font-extrabold text-amber-600">★ 5.0</span>
                                </div>
                                <div class="my-1.5">
                                    <p class="font-bold text-[11px] text-stone-900">Carbonara Guanciale</p>
                                    <p class="text-[9px] text-stone-400">Pecorino Romano</p>
                                </div>
                                <div class="flex items-center justify-between pt-1.5 border-t border-stone-100">
                                    <span class="font-extrabold text-[11px] text-stone-900">€11.90</span>
                                    <span class="px-2 py-0.5 rounded bg-[#1C1917] text-white text-[9px] font-bold">+ Add</span>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-xl bg-[#1C1917] text-white px-3.5 py-2.5 flex items-center justify-between gap-2 text-[10px]">
                            <div class="flex items-center gap-2 min-w-0">
                                <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                                <span class="font-semibold text-stone-200 truncate">Courier Marco R. picking up order at Via Torino</span>
                            </div>
                            <span class="font-extrabold text-amber-400 shrink-0">Live GPS →</span>
                        </div>
                    </div>
                </div>

                ${isFullPopup ? `
                <div class="px-4 sm:px-6 pb-6 pt-3 border-t border-stone-200/80 bg-[#F5F0E6] text-left space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <h5 class="font-heading font-extrabold text-xs sm:text-sm text-stone-900 uppercase tracking-wider">Featured European Partner Kitchens</h5>
                        <span class="text-[11px] font-bold text-amber-700">41 Kitchens Open Now</span>
                    </div>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div class="bg-white p-3.5 rounded-xl border border-stone-200">
                            <span class="text-[9px] font-bold uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded">Neapolitan</span>
                            <p class="font-bold text-xs text-stone-900 mt-2">L'Antica Pizzeria Da Michele</p>
                            <p class="text-[10px] text-stone-500 mt-0.5">Wood-fired Margherita &amp; Marinara • 15–20 mins</p>
                        </div>
                        <div class="bg-white p-3.5 rounded-xl border border-stone-200">
                            <span class="text-[9px] font-bold uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Patisserie</span>
                            <p class="font-bold text-xs text-stone-900 mt-2">Maison Kayser Artisan</p>
                            <p class="text-[10px] text-stone-500 mt-0.5">Croissants, Pain au Chocolat &amp; Tartes • 12–18 mins</p>
                        </div>
                        <div class="bg-white p-3.5 rounded-xl border border-stone-200">
                            <span class="text-[9px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Trattoria</span>
                            <p class="font-bold text-xs text-stone-900 mt-2">Osteria Romana Autentica</p>
                            <p class="text-[10px] text-stone-500 mt-0.5">Fresh Tonnarelli Cacio e Pepe • 20–25 mins</p>
                        </div>
                        <div class="bg-white p-3.5 rounded-xl border border-stone-200">
                            <span class="text-[9px] font-bold uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Gelateria</span>
                            <p class="font-bold text-xs text-stone-900 mt-2">Gelato Giolitti Bronte</p>
                            <p class="text-[10px] text-stone-500 mt-0.5">Sicilian Pistachio &amp; Hazelnut Tubs • 10–15 mins</p>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'nusanet') {
        return `
            <div class="live-mockup-canvas bg-white text-slate-900 select-none overflow-hidden">
                <div class="px-4 sm:px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                    <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-lg bg-[#E11D48] text-white font-extrabold text-xs flex items-center justify-center">N</span>
                        <span class="font-extrabold text-sm text-slate-900">Nusa<span class="text-[#E11D48]">Net</span></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white font-bold text-[10px]">
                            Langganan Sekarang
                        </span>
                        <span class="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 text-xs">
                            ≡
                        </span>
                    </div>
                </div>
                <div class="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-left bg-white">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                        <span class="w-2 h-2 rounded-full bg-[#E11D48] shrink-0"></span>
                        <span>Jaringan Fiber Optik Ultra Cepat 100% Simetris</span>
                    </div>
                    <h4 class="font-heading font-extrabold text-base sm:text-xl text-slate-900 leading-tight">
                        Koneksi Internet Tanpa Batas untuk <span class="text-[#E11D48]">Rumah &amp; Bisnis Anda.</span>
                    </h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        Nikmati kecepatan hingga <strong class="text-slate-800">1 Gbps True Unlimited</strong> tanpa kuota FUP. Bebas hambatan untuk streaming 4K, gaming latency rendah, dan kerja jarak jauh.
                    </p>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                            <p class="text-[9px] text-slate-500">Kecepatan Maksimal</p>
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 mt-0.5">Hingga 1 Gbps</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                            <p class="text-[9px] text-slate-500">Batas Kuota (FUP)</p>
                            <p class="font-extrabold text-xs sm:text-sm text-[#E11D48] mt-0.5">100% Unlimited</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                            <p class="text-[9px] text-slate-500">Uptime Jaringan</p>
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 mt-0.5">99.9% SLA</p>
                        </div>
                    </div>
                    <div class="pt-1 flex flex-wrap items-center gap-2">
                        <span class="px-4 py-2 rounded-xl bg-[#E11D48] text-white font-bold text-[11px]">
                            Pilih Paket Sekarang
                        </span>
                        <span class="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-[11px]">
                            Cek Jangkauan Lokasi
                        </span>
                    </div>
                </div>
                ${isFullPopup ? `
                <div class="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 text-left space-y-3">
                    <h5 class="font-heading font-extrabold text-xs sm:text-sm text-slate-900">Pilihan Paket Fiber Optik &amp; Top-Up Digital</h5>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <span class="text-[10px] font-bold text-slate-500 uppercase">Home Fiber 150</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">150 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#E11D48] mt-1">Rp 299.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">Gratis Router WiFi 6 Dual-Band &amp; Instalasi</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border-2 border-[#E11D48]">
                            <span class="text-[10px] font-bold text-[#E11D48] uppercase">Gamer Pro 500</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">500 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#E11D48] mt-1">Rp 499.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">IP Public Static + Prioritas Routing Gaming</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <span class="text-[10px] font-bold text-slate-500 uppercase">Dedicated 1 Gbps</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">1.000 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#E11D48] mt-1">Rp 899.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">SLA 99.9% + Dukungan Teknisi Prioritas 24/7</p>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'aurelia') {
        return `
            <div class="live-mockup-canvas bg-[#0C1917] text-[#F5EFE6] select-none overflow-hidden">
                <div class="px-4 sm:px-5 py-3 border-b border-emerald-900/60 flex items-center justify-between bg-[#091311]">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-full bg-[#D4AF37] text-[#091311] font-extrabold text-[10px] flex items-center justify-center">A</span>
                        <span class="font-heading font-bold tracking-widest text-xs sm:text-sm text-[#F5EFE6] uppercase">Aurelia Suites</span>
                    </div>
                    <div class="flex items-center gap-3 text-[10px] text-emerald-200/80">
                        <span class="pm-hide-mobile hidden sm:inline">Villas</span>
                        <span class="pm-hide-mobile hidden sm:inline">Dining</span>
                        <span class="px-3 py-1 rounded-full bg-[#D4AF37] text-[#091311] font-extrabold text-[10px]">Book Stay</span>
                    </div>
                </div>
                <div class="p-4 sm:p-6 space-y-4 text-left bg-[#0C1917]">
                    <div class="pm-flex-col-mobile flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <div class="space-y-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Uluwatu Cliffside Sanctuary • Bali</span>
                            <h4 class="font-heading font-extrabold text-base sm:text-xl text-white leading-snug">
                                Private Infinity Pool Villas Overlooking the Indian Ocean.
                            </h4>
                        </div>
                        <div class="shrink-0 bg-[#132623] border border-emerald-800/70 px-3 py-2 rounded-xl text-right">
                            <span class="block text-[8px] uppercase text-emerald-300">Direct Rate</span>
                            <span class="font-extrabold text-xs sm:text-sm text-[#D4AF37]">$320 / Night</span>
                        </div>
                    </div>

                    <div class="pm-stack-mobile grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#132623] border border-emerald-800/60 text-[10px]">
                        <div class="px-2 py-1 border-r border-emerald-800/50">
                            <p class="text-[8px] text-emerald-300/70 uppercase">Check-In</p>
                            <p class="font-bold text-white mt-0.5">14 Nov 2026</p>
                        </div>
                        <div class="px-2 py-1 border-r border-emerald-800/50">
                            <p class="text-[8px] text-emerald-300/70 uppercase">Check-Out</p>
                            <p class="font-bold text-white mt-0.5">18 Nov 2026</p>
                        </div>
                        <div class="px-2 py-1 flex items-center justify-between">
                            <div>
                                <p class="text-[8px] text-emerald-300/70 uppercase">Guests</p>
                                <p class="font-bold text-white mt-0.5">2 Adults</p>
                            </div>
                            <span class="px-2.5 py-1.5 rounded-lg bg-[#D4AF37] text-[#091311] font-extrabold text-[9px]">Search</span>
                        </div>
                    </div>

                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div class="p-3 rounded-xl bg-[#132623]/90 border border-emerald-800/50 flex items-center justify-between">
                            <div>
                                <span class="text-[8px] uppercase font-bold text-[#D4AF37]">180 m² • Ocean Front</span>
                                <p class="font-bold text-xs text-white mt-0.5">Sunset Cliff Pool Villa</p>
                                <p class="text-[9px] text-emerald-200/70">Floating Breakfast &amp; Private Butler</p>
                            </div>
                            <span class="px-2.5 py-1 rounded bg-white/10 text-white font-bold text-[10px]">Available</span>
                        </div>
                        <div class="p-3 rounded-xl bg-[#132623]/90 border border-emerald-800/50 flex items-center justify-between">
                            <div>
                                <span class="text-[8px] uppercase font-bold text-[#D4AF37]">260 m² • Two Bedroom</span>
                                <p class="font-bold text-xs text-white mt-0.5">Royal Sanctuary Residence</p>
                                <p class="text-[9px] text-emerald-200/70">Heated Infinity Pool &amp; Spa Pavilion</p>
                            </div>
                            <span class="px-2.5 py-1 rounded bg-white/10 text-white font-bold text-[10px]">2 Left</span>
                        </div>
                    </div>
                </div>
                ${isFullPopup ? `
                <div class="p-4 sm:p-6 bg-[#091311] border-t border-emerald-900/60 text-left space-y-3">
                    <h5 class="font-heading font-bold text-xs sm:text-sm text-[#D4AF37] uppercase tracking-wider">Complimentary Resort Privileges</h5>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3.5 rounded-xl bg-[#132623] border border-emerald-800/50">
                            <p class="font-bold text-white">Chauffeur Airport Transfer</p>
                            <p class="text-[10px] text-emerald-200/75 mt-1">Private luxury SUV pickup &amp; drop-off from Ngurah Rai Airport.</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-[#132623] border border-emerald-800/50">
                            <p class="font-bold text-white">Cliffside Sunset High Tea</p>
                            <p class="text-[10px] text-emerald-200/75 mt-1">Daily artisan Balinese &amp; French pastries served at 4:30 PM.</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-[#132623] border border-emerald-800/50">
                            <p class="font-bold text-white">60-Min Holistic Balinese Spa</p>
                            <p class="text-[10px] text-emerald-200/75 mt-1">Included for minimum 3-night direct booking via website.</p>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'medikaplus') {
        return `
            <div class="live-mockup-canvas bg-[#F0FDFA] text-slate-900 select-none overflow-hidden">
                <div class="px-4 sm:px-5 py-3 bg-white border-b border-teal-100 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-lg bg-[#0D9488] text-white font-extrabold text-xs flex items-center justify-center">+</span>
                        <span class="font-extrabold text-sm text-slate-900">Medika<span class="text-[#0D9488]">Plus</span></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="pm-hide-mobile hidden sm:inline-block px-2.5 py-1 rounded-md bg-teal-50 text-[#0D9488] font-bold text-[10px]">IGD 24 Jam: 1500-889</span>
                        <span class="px-3 py-1.5 rounded-lg bg-[#0D9488] text-white font-bold text-[10px]">Buat Janji Temu</span>
                    </div>
                </div>

                <div class="p-4 sm:p-5 space-y-3.5 text-left">
                    <div class="pm-flex-col-mobile bg-white p-4 rounded-2xl border border-teal-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div class="space-y-1">
                            <span class="inline-block px-2.5 py-0.5 rounded-full bg-teal-50 text-[#0D9488] font-bold text-[9px] uppercase">Tanpa Antre di RS</span>
                            <h4 class="font-heading font-extrabold text-sm sm:text-lg text-slate-900 leading-snug">
                                Konsultasi Dokter Spesialis &amp; Booking Lab Online
                            </h4>
                            <p class="text-[10px] text-slate-500">Pilih jadwal dokter, dapatkan nomor antrean real-time, dan akses hasil rekam medis digital.</p>
                        </div>
                        <div class="shrink-0 bg-[#0D9488] text-white px-3.5 py-2.5 rounded-xl text-center">
                            <span class="block text-[9px] uppercase opacity-85">Dokter Siaga</span>
                            <span class="font-extrabold text-sm">48 Spesialis</span>
                        </div>
                    </div>

                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div class="bg-white p-3 rounded-xl border border-teal-100 flex flex-col justify-between">
                            <div>
                                <span class="text-[8px] font-bold uppercase px-2 py-0.5 rounded bg-teal-50 text-[#0D9488]">Kardiologi</span>
                                <p class="font-bold text-xs text-slate-900 mt-1.5">dr. Hendra Wijaya, Sp.JP</p>
                                <p class="text-[9px] text-slate-500">Senin - Jumat • 09:00 - 14:00</p>
                            </div>
                            <span class="mt-2.5 inline-block text-center py-1 rounded-lg bg-[#0D9488] text-white font-bold text-[9px]">Pilih Jadwal</span>
                        </div>
                        <div class="bg-white p-3 rounded-xl border border-teal-100 flex flex-col justify-between">
                            <div>
                                <span class="text-[8px] font-bold uppercase px-2 py-0.5 rounded bg-teal-50 text-[#0D9488]">Spesialis Anak</span>
                                <p class="font-bold text-xs text-slate-900 mt-1.5">dr. Clara Santoso, Sp.A</p>
                                <p class="text-[9px] text-slate-500">Setiap Hari • 10:00 - 16:00</p>
                            </div>
                            <span class="mt-2.5 inline-block text-center py-1 rounded-lg bg-[#0D9488] text-white font-bold text-[9px]">Pilih Jadwal</span>
                        </div>
                        <div class="bg-white p-3 rounded-xl border border-teal-100 flex flex-col justify-between">
                            <div>
                                <span class="text-[8px] font-bold uppercase px-2 py-0.5 rounded bg-teal-50 text-[#0D9488]">Dermatologi</span>
                                <p class="font-bold text-xs text-slate-900 mt-1.5">dr. Nadia Putri, Sp.KK</p>
                                <p class="text-[9px] text-slate-500">Selasa - Sabtu • 13:00 - 19:00</p>
                            </div>
                            <span class="mt-2.5 inline-block text-center py-1 rounded-lg bg-[#0D9488] text-white font-bold text-[9px]">Pilih Jadwal</span>
                        </div>
                    </div>
                </div>

                ${isFullPopup ? `
                <div class="p-4 sm:p-6 bg-white border-t border-teal-100 text-left space-y-3">
                    <h5 class="font-heading font-extrabold text-xs sm:text-sm text-slate-900">Layanan Unggulan Klinik MedikaPlus</h5>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3.5 rounded-xl bg-[#F0FDFA] border border-teal-100">
                            <p class="font-bold text-[#0D9488]">Medical Check-Up Eksekutif</p>
                            <p class="text-[10px] text-slate-600 mt-1">Pemeriksaan darah lengkap, EKG, dan rontgen dengan hasil digital di hari yang sama.</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-[#F0FDFA] border border-teal-100">
                            <p class="font-bold text-[#0D9488]">Telekonsultasi Video HD</p>
                            <p class="text-[10px] text-slate-600 mt-1">Tanya jawab langsung dengan dokter dari rumah disertai pengiriman obat kurir instan.</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-[#F0FDFA] border border-teal-100">
                            <p class="font-bold text-[#0D9488]">Integrasi Asuransi &amp; BPJS</p>
                            <p class="text-[10px] text-slate-600 mt-1">Verifikasi klaim cashless otomatis untuk lebih dari 35 rekanan asuransi kesehatan.</p>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    return `
        <div class="live-mockup-canvas bg-[#FAF6F0] text-[#2C1E16] select-none overflow-hidden">
            <div class="px-4 sm:px-5 py-3 bg-[#2C1E16] text-[#FAF6F0] flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-[#C87D55] text-white font-extrabold text-[10px]">KS</span>
                    <span class="font-heading font-bold text-xs sm:text-sm tracking-tight">Kopi Senja Roastery</span>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                    <span class="px-2.5 py-1 rounded-full bg-[#C87D55] text-white font-bold">Cart (3) • Rp 285k</span>
                </div>
            </div>

            <div class="p-4 sm:p-5 space-y-3.5 text-left">
                <div class="pm-flex-col-mobile rounded-2xl bg-[#3E2723] text-[#FAF6F0] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="space-y-1">
                        <span class="inline-block px-2 py-0.5 rounded bg-[#C87D55] text-white font-bold text-[8px] uppercase tracking-wider">Small-Batch Micro Roastery</span>
                        <h4 class="font-heading font-extrabold text-sm sm:text-lg text-white leading-snug">
                            Biji Kopi Single-Origin Nusantara, Disangrai Segar Setiap Hari.
                        </h4>
                        <p class="text-[10px] text-amber-100/80">Pilih tingkat gilingan (Whole Bean, Espresso, V60, French Press) sesuai alat seduh Anda.</p>
                    </div>
                    <span class="shrink-0 px-3.5 py-2 rounded-xl bg-[#C87D55] text-white font-extrabold text-[10px]">
                        Langganan Kopi
                    </span>
                </div>

                <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div class="bg-white p-3 rounded-xl border border-amber-900/15 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center">
                                <span class="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">Aceh Gayo</span>
                                <span class="text-[9px] font-bold text-amber-700">250g</span>
                            </div>
                            <p class="font-bold text-xs text-[#2C1E16] mt-1.5">Gayo Wine Natural</p>
                            <p class="text-[9px] text-stone-500">Notes: Berry, Dark Choco, Winey</p>
                        </div>
                        <div class="flex items-center justify-between pt-2 mt-2 border-t border-stone-100">
                            <span class="font-extrabold text-[11px] text-[#2C1E16]">Rp 95.000</span>
                            <span class="px-2 py-0.5 rounded bg-[#2C1E16] text-white text-[9px] font-bold">+ Beli</span>
                        </div>
                    </div>

                    <div class="bg-white p-3 rounded-xl border border-amber-900/15 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center">
                                <span class="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">Flores</span>
                                <span class="text-[9px] font-bold text-amber-700">250g</span>
                            </div>
                            <p class="font-bold text-xs text-[#2C1E16] mt-1.5">Flores Bajawa Full Wash</p>
                            <p class="text-[9px] text-stone-500">Notes: Caramel, Nutty, Sweet</p>
                        </div>
                        <div class="flex items-center justify-between pt-2 mt-2 border-t border-stone-100">
                            <span class="font-extrabold text-[11px] text-[#2C1E16]">Rp 88.000</span>
                            <span class="px-2 py-0.5 rounded bg-[#2C1E16] text-white text-[9px] font-bold">+ Beli</span>
                        </div>
                    </div>

                    <div class="bg-white p-3 rounded-xl border border-amber-900/15 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center">
                                <span class="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">Bali</span>
                                <span class="text-[9px] font-bold text-amber-700">250g</span>
                            </div>
                            <p class="font-bold text-xs text-[#2C1E16] mt-1.5">Kintamani Citrus Honey</p>
                            <p class="text-[9px] text-stone-500">Notes: Orange Peel, Brown Sugar</p>
                        </div>
                        <div class="flex items-center justify-between pt-2 mt-2 border-t border-stone-100">
                            <span class="font-extrabold text-[11px] text-[#2C1E16]">Rp 92.000</span>
                            <span class="px-2 py-0.5 rounded bg-[#2C1E16] text-white text-[9px] font-bold">+ Beli</span>
                        </div>
                    </div>
                </div>
            </div>

            ${isFullPopup ? `
            <div class="p-4 sm:p-6 bg-[#F3ECE1] border-t border-amber-900/15 text-left space-y-3">
                <h5 class="font-heading font-extrabold text-xs sm:text-sm text-[#2C1E16]">Kustomisasi Gilingan &amp; Paket Langganan Bulanan</h5>
                <div class="pm-2col-mobile grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div class="bg-white p-3 rounded-xl border border-amber-900/15">
                        <p class="font-bold text-xs text-[#2C1E16]">Biji Utuh</p>
                        <p class="text-[10px] text-stone-500 mt-0.5">Simpan kesegaran maksimal</p>
                    </div>
                    <div class="bg-white p-3 rounded-xl border border-amber-900/15">
                        <p class="font-bold text-xs text-[#2C1E16]">Giling Halus</p>
                        <p class="text-[10px] text-stone-500 mt-0.5">Espresso &amp; Moka Pot</p>
                    </div>
                    <div class="bg-white p-3 rounded-xl border border-amber-900/15">
                        <p class="font-bold text-xs text-[#2C1E16]">Giling Sedang</p>
                        <p class="text-[10px] text-stone-500 mt-0.5">V60, Kalita &amp; AeroPress</p>
                    </div>
                    <div class="bg-white p-3 rounded-xl border border-amber-900/15">
                        <p class="font-bold text-xs text-[#2C1E16]">Giling Kasar</p>
                        <p class="text-[10px] text-stone-500 mt-0.5">French Press &amp; Cold Brew</p>
                    </div>
                </div>
            </div>
            ` : ''}
        </div>
    `;
}

function getPortfolioPerView() {
    return window.innerWidth >= 1024 ? 2 : 1;
}

window.renderPortfolioCarousel = function() {
    const gridEl = document.getElementById('portfolio-showcase-grid');
    const dotsEl = document.getElementById('portfolio-dots-indicator');
    const counterEl = document.getElementById('portfolio-slide-counter');
    if (!gridEl) return;

    const perView = getPortfolioPerView();
    const total = PORTFOLIO_KEYS.length;

    if (window.currentPortfolioIndex >= total) window.currentPortfolioIndex = 0;
    if (window.currentPortfolioIndex < 0) window.currentPortfolioIndex = total - 1;

    const visibleKeys = [];
    for (let i = 0; i < perView; i++) {
        visibleKeys.push(PORTFOLIO_KEYS[(window.currentPortfolioIndex + i) % total]);
    }

    gridEl.innerHTML = visibleKeys.map((key) => {
        const item = PORTFOLIO_ARTICLES[key];
        return `
            <article 
                onclick="openPortfolioArticleModal('${item.key}')" 
                class="portfolio-card theme-card rounded-3xl border border-blue-200 overflow-hidden bg-[#F2F7FF] flex flex-col justify-between shadow-sm page-transition"
            >
                <div class="p-3 sm:p-5">
                    <div class="portfolio-browser-frame rounded-2xl overflow-hidden border border-blue-200 bg-white shadow-sm">
                        <div class="portfolio-browser-bar px-3.5 sm:px-4 py-2.5 bg-[#E6F0FF] border-b border-blue-200 flex items-center justify-between gap-2">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                                <span class="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#0052FF]"></span>
                            </div>
                            <span class="text-[11px] font-semibold text-[#002B7F] truncate">${escapeHtml(item.domain)}</span>
                            <span class="px-2.5 py-0.5 rounded-md bg-solid-blue text-white text-[10px] font-bold uppercase tracking-wider shrink-0">
                                ${escapeHtml(item.badgeLabel)}
                            </span>
                        </div>
                        ${renderHardcodedPortfolioMockup(item.key, false)}
                    </div>
                </div>

                <div class="px-5 sm:px-6 pb-5 pt-1 flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <h3 class="theme-heading font-heading font-extrabold text-lg sm:text-xl text-[#06152D] truncate">
                            ${escapeHtml(item.title)}
                        </h3>
                        <span class="px-2.5 py-0.5 rounded-lg bg-[#E6F0FF] text-[#0052FF] text-[10px] font-bold shrink-0">
                            Desktop &amp; Mobile View
                        </span>
                    </div>
                    <span class="btn-animated shrink-0 px-4 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs shadow-sm">
                        Buka Web
                    </span>
                </div>
            </article>
        `;
    }).join('');

    if (dotsEl) {
        dotsEl.innerHTML = PORTFOLIO_KEYS.map((key, idx) => {
            const isActive = idx === window.currentPortfolioIndex;
            return `
                <button 
                    type="button" 
                    onclick="goToPortfolioSlide(${idx})"
                    aria-label="Slide Portofolio ${idx + 1}"
                    class="h-2.5 rounded-full transition-all ${isActive ? 'w-8 bg-[#0052FF]' : 'w-2.5 bg-blue-200 hover:bg-blue-400'}"
                ></button>
            `;
        }).join('');
    }

    if (counterEl) {
        if (perView === 2) {
            const firstNum = window.currentPortfolioIndex + 1;
            const secondNum = ((window.currentPortfolioIndex + 1) % total) + 1;
            counterEl.textContent = `Menampilkan ${firstNum} & ${secondNum} dari ${total} Portofolio`;
        } else {
            counterEl.textContent = `Menampilkan ${window.currentPortfolioIndex + 1} dari ${total} Portofolio`;
        }
    }

    if (window.lucide) window.lucide.createIcons();
};

window.slidePortfolio = function(step) {
    const total = PORTFOLIO_KEYS.length;
    window.currentPortfolioIndex = (window.currentPortfolioIndex + step + total) % total;
    renderPortfolioCarousel();
};

window.goToPortfolioSlide = function(index) {
    window.currentPortfolioIndex = index;
    renderPortfolioCarousel();
};

const HARDCODED_USERS = [
    {
        id: "USR-101",
        name: "Tim Internal Flexi",
        companyName: "flexi.co",
        email: "halo@flexi.co",
        whatsapp: "+62 813 7456 2098",
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

const HARDCODED_PROJECTS = [
    {
        id: "FLX-2026-101",
        userId: "USR-101",
        clientName: "Tim Internal Flexi",
        brandName: "flexi.co",
        email: "halo@flexi.co",
        whatsapp: "+62 813 7456 2098",
        packageTier: "Paket Profesional",
        priceValue: 5000000,
        priceText: "Rp 5.000.000+ (Negotiable)",
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
        priceText: "Rp 8.000.000+ (Negotiable)",
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
        priceText: "Rp 2.000.000+ (Negotiable)",
        renewalText: "Rp 1.000.000 / tahun",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 500MB, 5 Page Standard, Free SSL, SEO Onpage & Gratis 6 Bulan Maintenance."
    },
    "Paket Profesional": {
        priceValue: 5000000,
        priceText: "Rp 5.000.000+ (Negotiable)",
        renewalText: "Rp 1.500.000 / tahun",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 2GB, 5 Page Standard + Blog, Free SSL, SEO Onpage & Gratis 6 Bulan Maintenance."
    },
    "Paket Bisnis": {
        priceValue: 8000000,
        priceText: "Rp 8.000.000+ (Negotiable)",
        renewalText: "Rp 2.000.000 / tahun",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 5GB, 16 Paket Full Fitur, 1 Email Bisnis, Google Console & Analytic + 6 Bulan Maintenance."
    }
};

const STATUS_META = {
    not_yet: {
        label: "Not Yet (Belum Dimulai)",
        shortLabel: "NOT YET • 10%",
        badgeClass: "bg-[#E6F0FF] text-[#002B7F] border-blue-200",
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
        badgeClass: "bg-[#C7DCFF] text-[#06152D] border-[#0052FF]",
        defaultProgress: 85,
        stepIndex: 3,
        defaultNote: "Website Anda hampir selesai (Almost Done)! Saat ini sedang tahap pengecekan akhir & optimasi."
    },
    done: {
        label: "Done (Selesai & Live)",
        shortLabel: "DONE • 100%",
        badgeClass: "bg-solid-blue text-white border-blue-500",
        defaultProgress: 100,
        stepIndex: 4,
        defaultNote: "Selamat! Website perusahaan Anda telah 100% Selesai (Done) dan siap digunakan."
    }
};

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

function initThemeMode() {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } catch (e) {}
    updateThemeToggleUI();
}

window.toggleDarkMode = function() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
    } catch (e) {}
    updateThemeToggleUI();
};

function updateThemeToggleUI() {
    const isDark = document.documentElement.classList.contains('dark');
    const labelEl = document.getElementById('theme-toggle-label');
    const iconEl = document.getElementById('theme-toggle-icon');

    if (labelEl) labelEl.textContent = isDark ? 'Terang' : 'Gelap';
    if (iconEl) iconEl.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (window.lucide) window.lucide.createIcons();
}

function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }
}

window.openPortfolioArticleModal = function(projectKey) {
    const article = PORTFOLIO_ARTICLES[projectKey];
    if (!article) return;

    window.currentPortfolioPopupKey = projectKey;
    window.currentPortfolioViewport = 'desktop';

    const modalBackdrop = document.getElementById('portfolio-article-modal-backdrop');
    const contentBox = document.getElementById('portfolio-article-modal-content');
    if (!modalBackdrop || !contentBox) return;

    contentBox.innerHTML = `
        <div class="shrink-0 bg-[#06152D] text-white px-3.5 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-blue-900">
            <div class="flex items-center gap-2 min-w-0">
                <div class="hidden sm:flex items-center gap-1.5 shrink-0">
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#0052FF]"></span>
                </div>
                <span class="px-3 py-1 rounded-lg bg-[#0A1D37] text-blue-200 text-xs font-semibold truncate border border-blue-800">
                    ${escapeHtml(article.domain)}
                </span>
            </div>

            <div class="flex items-center gap-1.5 bg-[#0A1D37] p-1 rounded-xl border border-blue-800">
                <button 
                    type="button" 
                    id="popup-btn-desktop"
                    onclick="setPortfolioPopupViewport('desktop')" 
                    class="px-3 py-1.5 rounded-lg bg-solid-blue text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                    <i data-lucide="monitor" class="w-3.5 h-3.5"></i>
                    <span>Desktop View</span>
                </button>
                <button 
                    type="button" 
                    id="popup-btn-mobile"
                    onclick="setPortfolioPopupViewport('mobile')" 
                    class="px-3 py-1.5 rounded-lg text-blue-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                    <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
                    <span>Mobile View</span>
                </button>
            </div>

            <button 
                type="button" 
                onclick="closePortfolioArticleModal()" 
                aria-label="Tutup Halaman"
                class="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 shrink-0"
            >
                <span>Tutup</span>
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>

        <div class="flex-1 w-full bg-[#E6F0FF] dark:bg-[#0A1D37] overflow-hidden flex items-center justify-center">
            <div id="portfolio-live-stage" class="portfolio-live-stage modal-smooth-scroll">
                ${renderHardcodedPortfolioMockup(projectKey, true)}
            </div>
        </div>
    `;

    modalBackdrop.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
};

window.setPortfolioPopupViewport = function(mode) {
    window.currentPortfolioViewport = mode;
    const stageEl = document.getElementById('portfolio-live-stage');
    const btnDesktop = document.getElementById('popup-btn-desktop');
    const btnMobile = document.getElementById('popup-btn-mobile');
    if (!stageEl) return;

    if (mode === 'mobile') {
        stageEl.classList.add('is-mobile-preview');
        if (btnMobile) btnMobile.className = "px-3 py-1.5 rounded-lg bg-solid-blue text-white font-bold text-xs flex items-center gap-1.5 transition-all";
        if (btnDesktop) btnDesktop.className = "px-3 py-1.5 rounded-lg text-blue-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all";
    } else {
        stageEl.classList.remove('is-mobile-preview');
        if (btnDesktop) btnDesktop.className = "px-3 py-1.5 rounded-lg bg-solid-blue text-white font-bold text-xs flex items-center gap-1.5 transition-all";
        if (btnMobile) btnMobile.className = "px-3 py-1.5 rounded-lg text-blue-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all";
    }
    stageEl.scrollTop = 0;
};

window.closePortfolioArticleModal = function() {
    document.getElementById('portfolio-article-modal-backdrop')?.classList.add('hidden');
};

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
    ['project-modal-backdrop', 'auth-modal-backdrop', 'admin-remove-modal-backdrop', 'portfolio-article-modal-backdrop'].forEach(id => {
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
        mainContentWrapper?.classList.remove('pt-[72px]', 'sm:pt-[76px]');
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
        mainContentWrapper?.classList.add('pt-[72px]', 'sm:pt-[76px]');
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
            renderPortfolioCarousel();
            requestAnimationFrame(() => {
                updateSlidingPillPosition(window.activeScrollSection || 'beranda');
                initScrollReveal();
            });
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
    const sections = ['beranda', 'layanan', 'tentang-kami', 'portofolio', 'paket-harga', 'cara-kerja', 'faq'];
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

let lastPortfolioPerView = getPortfolioPerView();
window.addEventListener('resize', () => {
    const key = window.currentRoute === '/dashboard' ? 'dashboard' : (window.activeScrollSection || 'beranda');
    updateSlidingPillPosition(key);

    const currentPerView = getPortfolioPerView();
    if (currentPerView !== lastPortfolioPerView) {
        lastPortfolioPerView = currentPerView;
        renderPortfolioCarousel();
    }
});

window.addEventListener('hashchange', () => {
    const detected = detectRouteFromBrowserLocation();
    if (detected !== window.currentRoute) {
        navigateToRoute(detected, true);
    }
});

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
    const backdrop = document.getElementById('auth-modal-backdrop');
    backdrop?.classList.remove('hidden');
    if (backdrop) backdrop.scrollTop = 0;
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
        if (btnSignup) btnSignup.className = "py-2 rounded-lg font-bold text-xs sm:text-sm bg-solid-blue text-white transition-all";
        if (btnLogin) btnLogin.className = "theme-heading py-2 rounded-lg font-bold text-xs sm:text-sm text-[#06152D] hover:text-[#0052FF] transition-all";
        if (titleEl) titleEl.textContent = "Daftar Akun Perusahaan";
    } else {
        signupForm?.classList.add('hidden');
        loginForm?.classList.remove('hidden');
        if (btnLogin) btnLogin.className = "py-2 rounded-lg font-bold text-xs sm:text-sm bg-solid-blue text-white transition-all";
        if (btnSignup) btnSignup.className = "theme-heading py-2 rounded-lg font-bold text-xs sm:text-sm text-[#06152D] hover:text-[#0052FF] transition-all";
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
    if (backdrop) backdrop.scrollTop = 0;
    if (formView) formView.scrollTop = 0;
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

function renderNavbarAuthUI() {
    const outDesktop = document.getElementById('nav-auth-logged-out');
    const inDesktop = document.getElementById('nav-auth-logged-in');
    const outMobile = document.getElementById('mobile-auth-logged-out');
    const inMobile = document.getElementById('mobile-auth-logged-in');
    const countBadge = document.getElementById('nav-my-project-count');

    if (window.currentClientUser) {
        const myProjects = getMyCompanyProjects();
        outDesktop?.classList.add('hidden');
        outDesktop?.classList.remove('sm:flex');
        inDesktop?.classList.remove('hidden');
        inDesktop?.classList.add('sm:flex');

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
        outDesktop?.classList.add('sm:flex');
        inDesktop?.classList.add('hidden');
        inDesktop?.classList.remove('sm:flex');

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
        <article class="theme-card bg-white rounded-2xl border border-blue-200 overflow-hidden">
            <div class="theme-subbox bg-[#E6F0FF] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200">
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
                    <div class="w-full h-3 bg-[#E6F0FF] rounded-full overflow-hidden p-0.5">
                        <div class="h-full rounded-full progress-bar-blue transition-all duration-500" style="width: ${proj.progress}%"></div>
                    </div>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    ${steps.map(step => {
                        const isActiveOrDone = step.idx <= sMeta.stepIndex;
                        return `
                            <div class="theme-subbox p-3 rounded-xl border ${isActiveOrDone ? 'bg-[#E6F0FF] border-[#0052FF] text-[#06152D]' : 'bg-slate-50 border-slate-200 text-slate-400'}">
                                <p class="theme-heading font-bold text-xs">${step.idx}. ${step.title}</p>
                                <p class="theme-text text-[11px] opacity-80 mt-0.5">${step.desc}</p>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="theme-subbox p-4 rounded-xl bg-[#F2F7FF] border border-blue-100 text-xs sm:text-sm space-y-1.5">
                    <p class="font-semibold text-[#0052FF]">Catatan Progres Tim Admin:</p>
                    <p class="theme-heading text-[#06152D]">"${escapeHtml(proj.adminNote)}"</p>
                    <p class="theme-text text-xs text-slate-500 pt-1">Konsep Klien: ${escapeHtml(proj.brief)}</p>
                </div>
            </div>
        </article>
    `;
}

function renderHomePrivateSections() {
    const homeTrackerBox = document.getElementById('home-private-tracker-box');
    const myProjects = getMyCompanyProjects();

    if (window.currentClientUser) {
        if (homeTrackerBox) {
            homeTrackerBox.innerHTML = myProjects.length > 0
                ? renderProjectStatusCardHTML(myProjects[0])
                : `<div class="theme-card bg-white rounded-2xl border border-blue-200 p-8 text-center">
                        <p class="theme-heading font-heading font-bold text-base text-[#06152D]">Belum Ada Proyek di Akun ${escapeHtml(window.currentClientUser.companyName)}</p>
                        <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated mt-3 px-5 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs">+ Ajukan Proyek</button>
                   </div>`;
        }
    } else {
        if (homeTrackerBox) {
            homeTrackerBox.innerHTML = `
                <div class="theme-card bg-white rounded-2xl border border-blue-200 p-8 text-center max-w-2xl mx-auto">
                    <h3 class="theme-heading font-heading font-bold text-lg text-[#06152D]">Pantau Progres Pengerjaan Website Anda</h3>
                    <p class="theme-text text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                        Setiap perusahaan hanya dapat melihat progres website miliknya sendiri. Silakan masuk atau daftar akun perusahaan terlebih dahulu.
                    </p>
                    <div class="flex justify-center gap-3">
                        <button type="button" onclick="openAuthModal('login')" class="btn-animated px-5 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs sm:text-sm">Masuk Akun</button>
                        <button type="button" onclick="openAuthModal('signup')" class="btn-animated theme-subbox theme-heading px-5 py-2.5 rounded-xl bg-[#E6F0FF] text-[#002B7F] border border-blue-200 font-bold text-xs sm:text-sm">Daftar Akun</button>
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
            <div class="theme-card bg-white rounded-2xl border border-blue-200 p-10 text-center max-w-lg mx-auto">
                <h1 class="theme-heading font-heading font-extrabold text-2xl text-[#06152D]">Portal Klien Perusahaan</h1>
                <p class="theme-text text-slate-600 text-xs sm:text-sm mt-2">
                    Silakan masuk menggunakan akun perusahaan Anda untuk memantau seluruh progres website Anda.
                </p>
                <div class="mt-6 flex justify-center gap-3">
                    <button type="button" onclick="openAuthModal('login')" class="btn-animated px-6 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs sm:text-sm">Masuk</button>
                    <button type="button" onclick="openAuthModal('signup')" class="btn-animated theme-subbox theme-heading px-6 py-2.5 rounded-xl bg-[#E6F0FF] text-[#002B7F] font-bold text-xs sm:text-sm border border-blue-200">Daftar Akun</button>
                </div>
            </div>
        `;
        return;
    }

    const myProjects = getMyCompanyProjects();
    container.innerHTML = `
        <div class="theme-card bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
                <span class="theme-subbox text-[11px] font-bold uppercase tracking-wider bg-[#E6F0FF] text-[#0052FF] px-3 py-1 rounded-full">Portal Perusahaan</span>
                <h1 class="theme-heading font-heading font-extrabold text-2xl sm:text-3xl text-[#06152D] mt-2">${escapeHtml(window.currentClientUser.companyName)}</h1>
                <p class="theme-text text-slate-600 text-xs sm:text-sm mt-0.5">
                    PIC: ${escapeHtml(window.currentClientUser.name)} (${escapeHtml(window.currentClientUser.email)}) • ${myProjects.length} Proyek
                </p>
            </div>
            <div class="flex flex-wrap gap-2.5">
                <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated px-4 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs sm:text-sm">
                    + Proyek Baru
                </button>
                <button type="button" onclick="navigateToRoute('/')" class="btn-animated theme-subbox theme-heading px-4 py-2.5 rounded-xl bg-[#E6F0FF] text-[#002B7F] font-semibold text-xs sm:text-sm">
                    Beranda
                </button>
            </div>
        </div>
        <div class="space-y-6">
            ${myProjects.length > 0
                ? myProjects.map(p => renderProjectStatusCardHTML(p)).join('')
                : `<div class="theme-card bg-white rounded-2xl border border-blue-200 p-10 text-center">
                        <p class="theme-heading font-heading font-bold text-base text-[#06152D]">Belum ada proyek website.</p>
                        <button type="button" onclick="openProjectModal('Paket Profesional')" class="btn-animated mt-4 px-5 py-2.5 rounded-xl bg-solid-blue text-white font-bold text-xs">+ Buat Proyek Pertama</button>
                   </div>`
            }
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
};

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
    const active = "px-4 py-2 rounded-xl bg-solid-blue text-white text-xs font-bold";

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
            <tr class="hover:bg-[#F2F7FF]">
                <td class="p-4 font-bold text-[#0052FF]">${escapeHtml(u.id)}</td>
                <td class="p-4 font-bold text-[#06152D]">${escapeHtml(u.companyName)}</td>
                <td class="p-4 text-slate-700">${escapeHtml(u.name)}</td>
                <td class="p-4 text-[#0052FF]">${escapeHtml(u.email)}</td>
                <td class="p-4 text-slate-600">${escapeHtml(u.whatsapp)}</td>
                <td class="p-4"><span class="px-2.5 py-1 rounded-full bg-[#E6F0FF] text-[#002B7F] font-bold text-xs">${count} Proyek</span></td>
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
            ? "px-3.5 py-2 rounded-lg text-xs font-bold bg-solid-blue text-white"
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
    if (elRev) elRev.textContent = "Rp " + totalRev.toLocaleString('id-ID') + "+";
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
            <article class="bg-white rounded-2xl border border-blue-200 p-6">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-blue-100">
                    <div>
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="font-bold text-xs px-2.5 py-1 rounded bg-[#06152D] text-white">${escapeHtml(proj.id)}</span>
                            <span class="px-2.5 py-1 rounded bg-[#E6F0FF] text-[#002B7F] font-bold text-xs">${escapeHtml(proj.packageTier)} (${escapeHtml(proj.priceText)})</span>
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
                            ? `<button type="button" onclick="restoreProjectToAdmin('${proj.id}')" class="px-3 py-1.5 rounded-xl bg-[#E6F0FF] text-[#002B7F] text-xs font-bold">Kembalikan</button>`
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
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'not_yet')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'not_yet' ? 'bg-solid-blue text-white border-transparent' : 'bg-[#F2F7FF] text-[#06152D] border-blue-200'}">Not Yet (10%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'in_progress')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'in_progress' ? 'bg-solid-blue text-white border-transparent' : 'bg-[#F2F7FF] text-[#06152D] border-blue-200'}">In Progress (50%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'almost_done')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'almost_done' ? 'bg-solid-blue text-white border-transparent' : 'bg-[#F2F7FF] text-[#06152D] border-blue-200'}">Almost Done (85%)</button>
                            <button type="button" onclick="quickChangeProjectStatus('${proj.id}', 'done')" class="px-3 py-2 rounded-xl text-xs font-bold border ${proj.status === 'done' ? 'bg-solid-blue text-white border-transparent' : 'bg-[#F2F7FF] text-[#06152D] border-blue-200'}">Done (100%)</button>
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
                        <textarea id="admin-note-${proj.id}" rows="2" class="w-full px-3.5 py-2 rounded-xl bg-[#F2F7FF] border border-blue-200 text-xs sm:text-sm text-[#06152D] focus:bg-white focus:border-[#0052FF] focus:outline-none">${escapeHtml(proj.adminNote)}</textarea>
                        <div class="flex justify-end">
                            <button type="button" onclick="saveAdminCustomDetails('${proj.id}')" class="btn-animated px-4 py-2 rounded-xl bg-solid-blue text-white text-xs font-bold">
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

window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
};

function refreshAllUI() {
    renderNavbarAuthUI();
    if (window.currentRoute === '/') {
        renderHomePrivateSections();
        renderPortfolioCarousel();
    }
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

['project-modal-backdrop', 'auth-modal-backdrop', 'admin-remove-modal-backdrop', 'portfolio-article-modal-backdrop'].forEach(id => {
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
    initScrollReveal();
});