const STORAGE_KEYS = {
    THEME: 'flexi_theme_mode_v1'
};

const WHATSAPP_NUMBER = '6281374562098';

const PORTFOLIO_KEYS = ['kopisenja', 'hohomatcha', 'nusanet', 'bitemart', 'aurelia'];
window.currentPortfolioIndex = 0;
window.currentPortfolioPopupKey = 'kopisenja';
window.currentPortfolioViewport = 'desktop';
window.portfolioSlideDirection = 'next';

const PORTFOLIO_ARTICLES = {
    kopisenja: {
        key: "kopisenja",
        title: "Kopi Senja Braga",
        domain: "https://kopisenjabraga.id",
        badgeLabel: "Kedai Kopi • Editorial"
    },
    hohomatcha: {
        key: "hohomatcha",
        title: "Ho-Ho Matcha!",
        domain: "https://hohomatcha.jp",
        badgeLabel: "Artisan Matcha Bar"
    },
    nusanet: {
        key: "nusanet",
        title: "NusaNet Fiber",
        domain: "https://nusanet.id",
        badgeLabel: "ISP & Telco"
    },
    bitemart: {
        key: "bitemart",
        title: "BiteMart Cucina",
        domain: "https://bitemart.eu",
        badgeLabel: "European Culinary"
    },
    aurelia: {
        key: "aurelia",
        title: "Aurelia Cliff Resort",
        domain: "https://aureliasuites.com",
        badgeLabel: "Luxury Villa Bali"
    }
};

const PACKAGE_META = {
    "Paket Starter": {
        priceValue: 2000000,
        priceText: "Rp 2.000.000+ (Negotiable)",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 500MB, 5 Page Standard, Free SSL, SEO Onpage & Gratis 6 Bulan Maintenance."
    },
    "Paket Profesional": {
        priceValue: 5000000,
        priceText: "Rp 5.000.000+ (Negotiable)",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 2GB, 5 Page Standard + Blog, Free SSL, SEO Onpage & Gratis 6 Bulan Maintenance."
    },
    "Paket Bisnis": {
        priceValue: 8000000,
        priceText: "Rp 8.000.000+ (Negotiable)",
        summary: "Gratis Domain .COM/.NET/.ORG, Penyimpanan 5GB, 16 Paket Full Fitur, 1 Email Bisnis, Google Console & Analytic + 6 Bulan Maintenance."
    }
};

window.activeScrollSection = 'beranda';
window.isProgrammaticScroll = false;
window.programmaticScrollTimer = null;
let toastTimer = null;

function renderHardcodedPortfolioMockup(projectKey, isFullPopup = false) {
    if (projectKey === 'kopisenja') {
        return `
            <div class="live-mockup-canvas bg-[#16120E] text-[#FAF6F0] select-none overflow-hidden">
                <div class="relative flex-1 min-h-[340px] sm:min-h-[370px] flex flex-col justify-between p-5 sm:p-7 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85" 
                        alt="Kedai Kopi Bandung" 
                        class="absolute inset-0 w-full h-full object-cover object-center scale-105"
                    >
                    <div class="absolute inset-0 bg-gradient-to-r from-[#14100C]/90 via-[#14100C]/65 to-[#14100C]/30"></div>

                    <div class="relative z-10 flex items-center justify-between">
                        <span class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F3C68F]">
                            KEDAI KOPI • BANDUNG
                        </span>
                        <div class="pm-hide-mobile hidden sm:flex items-center gap-5 text-[11px] text-[#EDE4D7]/85 font-medium">
                            <span>Cerita Kami</span>
                            <span>Seduhan Manual</span>
                            <span>Ruang Baca</span>
                            <span class="px-3 py-1 rounded-full border border-[#F3C68F]/50 text-[#F3C68F]">Reservasi Meja</span>
                        </div>
                    </div>

                    <div class="relative z-10 max-w-md text-left my-auto py-3">
                        <h4 class="font-editorial text-2xl sm:text-4xl font-semibold text-white leading-[1.12] tracking-tight">
                            Singgah sebentar,<br>
                            <em class="italic font-normal text-[#F5CBA7]">tinggal lebih lama.</em>
                        </h4>
                        <p class="font-display-clean text-xs sm:text-sm text-[#EAE0D5]/90 mt-2.5 leading-relaxed max-w-sm line-clamp-2">
                            Kopi pilihan, kudapan hangat, dan sudut nyaman di tengah ramainya Jalan Braga.
                        </p>
                        <div class="mt-4 inline-flex items-center gap-2 pb-1 border-b border-[#F5CBA7] text-[#F5CBA7] text-xs font-medium">
                            <span>Jelajahi menu</span>
                            <span>↓</span>
                        </div>
                    </div>

                    <div class="relative z-10 flex items-center justify-between text-[10px] text-[#D8CBB8]/80 pt-2 border-t border-white/10">
                        <span>Jl. Braga No. 58, Bandung</span>
                        <span>07.00 – 22.00 WIB</span>
                    </div>
                </div>

                ${isFullPopup ? `
                <div class="flex-1 p-5 sm:p-8 bg-[#1E1813] border-t border-stone-800 text-left space-y-5">
                    <div class="flex flex-wrap items-end justify-between gap-2">
                        <div>
                            <span class="text-[10px] uppercase tracking-[0.2em] text-[#F5CBA7]">Pilihan Barista Pagi Ini</span>
                            <h5 class="font-editorial text-lg sm:text-2xl text-white mt-0.5">Seduhan Hangat &amp; Kudapan Sore</h5>
                        </div>
                        <span class="text-xs text-stone-400">Sangrai Segar Mingguan</span>
                    </div>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="rounded-2xl bg-[#27201A] border border-stone-800 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" alt="Filter Coffee" class="w-full h-36 object-cover">
                            <div class="p-4">
                                <div class="flex justify-between items-center">
                                    <p class="font-editorial text-base text-white">Flores Manggarai V60</p>
                                    <span class="text-xs font-bold text-[#F5CBA7]">Rp 34k</span>
                                </div>
                                <p class="text-[11px] text-stone-400 mt-1">Aroma gula aren, jeruk manis, dan cokelat hitam.</p>
                            </div>
                        </div>
                        <div class="rounded-2xl bg-[#27201A] border border-stone-800 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" alt="Butter Croissant" class="w-full h-36 object-cover">
                            <div class="p-4">
                                <div class="flex justify-between items-center">
                                    <p class="font-editorial text-base text-white">Kouign-Amann Kayu Manis</p>
                                    <span class="text-xs font-bold text-[#F5CBA7]">Rp 28k</span>
                                </div>
                                <p class="text-[11px] text-stone-400 mt-1">Dipanggang hangat setiap pukul 07.00 pagi.</p>
                            </div>
                        </div>
                        <div class="rounded-2xl bg-[#27201A] border border-stone-800 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" alt="Kopi Susu Braga" class="w-full h-36 object-cover">
                            <div class="p-4">
                                <div class="flex justify-between items-center">
                                    <p class="font-editorial text-base text-white">Es Kopi Susu Braga</p>
                                    <span class="text-xs font-bold text-[#F5CBA7]">Rp 26k</span>
                                </div>
                                <p class="text-[11px] text-stone-400 mt-1">Perpaduan house blend Arabika Jawa Barat &amp; susu segar.</p>
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'hohomatcha') {
        return `
            <div class="live-mockup-canvas bg-[#3B5926] text-white select-none overflow-hidden">
                <div class="px-4 sm:px-6 py-2.5 bg-[#0F190C] text-white flex items-center justify-between gap-3 shrink-0">
                    <span class="font-display-clean font-extrabold text-xs sm:text-sm tracking-tight text-white shrink-0">
                        Ho-Ho Matcha!
                    </span>
                    <div class="pm-hide-mobile hidden sm:flex items-center w-44 lg:w-60 px-3 py-1 rounded-full bg-[#1C2B17] border border-emerald-900/80 text-[10px] text-stone-300">
                        <span>Search ceremonial matcha...</span>
                    </div>
                    <div class="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium text-stone-200">
                        <span>Home</span>
                        <span>Products</span>
                        <span class="px-2.5 py-0.5 rounded-full bg-[#689348] text-white font-bold">Cart (2)</span>
                    </div>
                </div>

                <div class="flex-1 p-4 sm:p-6 grid grid-cols-12 gap-3.5 items-center bg-gradient-to-br from-[#4D7034] to-[#3B5926]">
                    <div class="pm-col-full-mobile col-span-6 sm:col-span-5 text-left space-y-2">
                        <span class="inline-block px-2 py-0.5 rounded-full bg-[#1D3013]/70 text-[#CBE8B0] text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                            First Harvest • Uji
                        </span>
                        <div class="space-y-0.5">
                            <p class="font-display-clean font-extrabold text-sm sm:text-xl text-[#182910] leading-none">
                                Welcome to
                            </p>
                            <h4 class="font-display-clean font-extrabold text-lg sm:text-3xl text-white leading-tight tracking-tight">
                                Ho-Ho Matcha!
                            </h4>
                        </div>
                        <p class="text-[10px] sm:text-xs text-[#E8F4DC] leading-relaxed line-clamp-2 sm:line-clamp-3">
                            Experience the authentic taste of premium, stone-ground Japanese matcha. Freshly sourced and whisked to perfection.
                        </p>
                        <div class="pt-1">
                            <span class="inline-block px-3.5 py-1.5 rounded-full bg-[#182910] text-white font-bold text-[10px] sm:text-[11px] shadow-md">
                                Explore Products
                            </span>
                        </div>
                    </div>

                    <div class="pm-col-full-mobile col-span-6 sm:col-span-7 grid grid-cols-3 gap-2 sm:gap-2.5 items-center">
                        <div class="rounded-xl overflow-hidden h-36 sm:h-44 border border-white/15 shadow-md">
                            <img 
                                src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=500&q=80" 
                                alt="Rich Matcha Bowl" 
                                class="w-full h-full object-cover"
                            >
                        </div>
                        <div class="rounded-2xl overflow-hidden h-44 sm:h-52 border-2 border-white shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=85" 
                                alt="Matcha Latte Art" 
                                class="w-full h-full object-cover"
                            >
                        </div>
                        <div class="rounded-xl overflow-hidden h-36 sm:h-44 border border-white/15 shadow-md">
                            <img 
                                src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=500&q=80" 
                                alt="Stone Ground Matcha Powder" 
                                class="w-full h-full object-cover"
                            >
                        </div>
                    </div>
                </div>

                ${isFullPopup ? `
                <div class="flex-1 p-5 sm:p-7 bg-[#F4F7F0] text-[#182910] border-t border-emerald-900/15 text-left space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-widest text-[#4A6B32]">Ceremonial &amp; Culinary Grade</span>
                            <h5 class="font-display-clean font-extrabold text-base sm:text-xl text-[#182910]">Signature Kyoto Matcha Collection</h5>
                        </div>
                        <span class="text-xs font-bold text-[#4A6B32]">100% Shade-Grown Tencha</span>
                    </div>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div class="bg-white p-4 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between">
                            <div>
                                <span class="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#E6F0DC] text-[#355121]">Ceremonial First Flush</span>
                                <p class="font-bold text-sm text-[#182910] mt-2">Uji Hikari Tin (30g)</p>
                                <p class="text-[11px] text-stone-500 mt-0.5">Sweet umami finish, zero bitterness, vibrant emerald crema.</p>
                            </div>
                            <div class="flex items-center justify-between pt-3 mt-3 border-t border-stone-100">
                                <span class="font-extrabold text-sm text-[#182910]">$28.00</span>
                                <span class="px-3 py-1 rounded-full bg-[#182910] text-white text-[10px] font-bold">Add to Bag</span>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between">
                            <div>
                                <span class="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#E6F0DC] text-[#355121]">Handcrafted Tool</span>
                                <p class="font-bold text-sm text-[#182910] mt-2">100-Prong Bamboo Chasen</p>
                                <p class="text-[11px] text-stone-500 mt-0.5">Traditional golden bamboo whisk for micro-foam perfection.</p>
                            </div>
                            <div class="flex items-center justify-between pt-3 mt-3 border-t border-stone-100">
                                <span class="font-extrabold text-sm text-[#182910]">$22.00</span>
                                <span class="px-3 py-1 rounded-full bg-[#182910] text-white text-[10px] font-bold">Add to Bag</span>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between">
                            <div>
                                <span class="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#E6F0DC] text-[#355121]">Barista Café Blend</span>
                                <p class="font-bold text-sm text-[#182910] mt-2">Oat Matcha Latte Pouch (100g)</p>
                                <p class="text-[11px] text-stone-500 mt-0.5">Rich full-bodied cultivar crafted to pair with oat or dairy milk.</p>
                            </div>
                            <div class="flex items-center justify-between pt-3 mt-3 border-t border-stone-100">
                                <span class="font-extrabold text-sm text-[#182910]">$34.00</span>
                                <span class="px-3 py-1 rounded-full bg-[#182910] text-white text-[10px] font-bold">Add to Bag</span>
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'nusanet') {
        return `
            <div class="live-mockup-canvas bg-slate-50 text-slate-900 select-none overflow-hidden">
                <div class="px-4 sm:px-5 py-2.5 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#B91C1C] text-white font-extrabold text-xs flex items-center justify-center">N</span>
                        <span class="font-extrabold text-xs sm:text-sm text-slate-900">Nusa<span class="text-[#B91C1C]">Net</span></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-1 rounded-lg bg-[#B91C1C] text-white font-bold text-[10px]">
                            Langganan Sekarang
                        </span>
                    </div>
                </div>
                <div class="flex-1 p-4 sm:p-6 flex flex-col justify-between text-left bg-gradient-to-br from-white via-slate-50 to-slate-100">
                    <div class="space-y-2.5">
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-semibold text-slate-700">
                            <span class="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0"></span>
                            <span>Jaringan Fiber Optik Ultra Cepat 100% Simetris</span>
                        </div>
                        <h4 class="font-heading font-extrabold text-base sm:text-xl text-slate-900 leading-tight">
                            Koneksi Internet Tanpa Batas untuk <span class="text-[#B91C1C]">Rumah &amp; Bisnis Anda.</span>
                        </h4>
                        <p class="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                            Nikmati kecepatan hingga <strong class="text-slate-900">1 Gbps True Unlimited</strong> tanpa kuota FUP untuk streaming 4K &amp; kerja jarak jauh.
                        </p>
                    </div>

                    <div class="grid grid-cols-3 gap-2 my-auto py-2">
                        <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <p class="text-[8px] sm:text-[9px] text-slate-500">Kecepatan</p>
                            <p class="font-extrabold text-[11px] sm:text-sm text-slate-900 mt-0.5">1 Gbps</p>
                        </div>
                        <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <p class="text-[8px] sm:text-[9px] text-slate-500">Kuota (FUP)</p>
                            <p class="font-extrabold text-[11px] sm:text-sm text-[#B91C1C] mt-0.5">Unlimited</p>
                        </div>
                        <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <p class="text-[8px] sm:text-[9px] text-slate-500">Uptime</p>
                            <p class="font-extrabold text-[11px] sm:text-sm text-slate-900 mt-0.5">99.9% SLA</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <span class="px-3.5 py-1.5 rounded-xl bg-[#B91C1C] text-white font-bold text-[10px] sm:text-[11px]">
                            Pilih Paket Sekarang
                        </span>
                        <span class="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-[10px] sm:text-[11px]">
                            Cek Lokasi
                        </span>
                    </div>
                </div>
                ${isFullPopup ? `
                <div class="flex-1 p-4 sm:p-6 bg-slate-100 border-t border-slate-200 text-left space-y-3">
                    <h5 class="font-heading font-extrabold text-xs sm:text-sm text-slate-900">Pilihan Paket Fiber Optik &amp; Top-Up Digital</h5>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <span class="text-[10px] font-bold text-slate-500 uppercase">Home Fiber 150</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">150 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#B91C1C] mt-1">Rp 299.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">Gratis Router WiFi 6 Dual-Band &amp; Instalasi</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border-2 border-[#B91C1C]">
                            <span class="text-[10px] font-bold text-[#B91C1C] uppercase">Gamer Pro 500</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">500 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#B91C1C] mt-1">Rp 499.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">IP Public Static + Prioritas Routing Gaming</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <span class="text-[10px] font-bold text-slate-500 uppercase">Dedicated 1 Gbps</span>
                            <p class="font-extrabold text-base text-slate-900 mt-1">1.000 Mbps <span class="text-xs font-normal text-slate-500">/ bln</span></p>
                            <p class="text-xs font-bold text-[#B91C1C] mt-1">Rp 899.000</p>
                            <p class="text-[10px] text-slate-500 mt-1">SLA 99.9% + Dukungan Teknisi Prioritas 24/7</p>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    if (projectKey === 'bitemart') {
        return `
            <div class="live-mockup-canvas bg-[#FAF6F0] text-[#1C1613] select-none overflow-hidden">
                <div class="px-4 sm:px-6 py-2.5 bg-[#1C1613] text-[#FAF6F0] flex items-center justify-between text-[10px] sm:text-xs shrink-0">
                    <div class="flex items-center gap-2">
                        <span class="font-editorial italic font-bold text-sm sm:text-base text-[#E07A5F]">BiteMart</span>
                        <span class="text-stone-400">• Milano &amp; Roma</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="px-2.5 py-0.5 rounded-full bg-[#E07A5F] text-white font-bold text-[10px]">Order • €24.50</span>
                    </div>
                </div>

                <div class="flex-1 grid grid-cols-12 items-stretch overflow-hidden">
                    <div class="pm-col-full-mobile col-span-7 sm:col-span-6 p-4 sm:p-6 flex flex-col justify-between text-left bg-[#FAF6F0]">
                        <div class="space-y-2">
                            <span class="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#B84A27]">
                                CUCINA ARTIGIANALE
                            </span>
                            <h4 class="font-editorial text-lg sm:text-2xl text-[#1C1613] font-bold leading-[1.15]">
                                Neapolitan Sourdough,<br>
                                <em class="italic font-normal text-[#B84A27]">Straight from oak oven.</em>
                            </h4>
                            <p class="font-display-clean text-[10px] sm:text-xs text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                                48-hour fermented dough, San Marzano D.O.P. tomatoes, and fresh burrata from Puglia at your door in 20 minutes.
                            </p>
                        </div>
                        <div class="pt-2 flex items-center gap-3">
                            <span class="px-3.5 py-1.5 rounded-xl bg-[#1C1613] text-white font-bold text-[10px] sm:text-[11px]">
                                Explore Menu
                            </span>
                        </div>
                    </div>

                    <div class="pm-col-full-mobile col-span-5 sm:col-span-6 relative overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85" 
                            alt="Artisan Neapolitan Pizza" 
                            class="w-full h-full object-cover"
                        >
                        <div class="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#1C1613]/90 backdrop-blur-sm text-white flex items-center justify-between gap-1">
                            <div class="min-w-0">
                                <p class="text-[8px] uppercase tracking-wider text-[#F4A261] font-bold truncate">Chef's Signature</p>
                                <p class="font-editorial text-[11px] sm:text-xs font-semibold truncate">Margherita D.O.P.</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-lg bg-[#E07A5F] text-white font-extrabold text-[10px] shrink-0">€13.90</span>
                        </div>
                    </div>
                </div>

                ${isFullPopup ? `
                <div class="flex-1 p-5 sm:p-7 bg-[#F3EDE2] border-t border-stone-200 text-left space-y-4">
                    <div class="flex items-center justify-between">
                        <h5 class="font-editorial font-bold text-base sm:text-xl text-[#1C1613]">Tonight's Wood-Fired &amp; Trattoria Specials</h5>
                        <span class="text-xs font-bold text-[#B84A27]">18–22 Min Delivery</span>
                    </div>
                    <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="rounded-2xl border border-stone-200 overflow-hidden bg-[#FAF6F0]">
                            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" alt="Diavola Pizza" class="w-full h-36 object-cover">
                            <div class="p-3.5">
                                <div class="flex justify-between font-bold text-xs text-[#1C1613]">
                                    <span>Diavola Piccante</span>
                                    <span class="text-[#B84A27]">€14.50</span>
                                </div>
                                <p class="text-[10px] text-stone-500 mt-1">Spianata Calabrese salami, fior di latte &amp; chili honey.</p>
                            </div>
                        </div>
                        <div class="rounded-2xl border border-stone-200 overflow-hidden bg-[#FAF6F0]">
                            <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" alt="Tagliatelle Truffle" class="w-full h-36 object-cover">
                            <div class="p-3.5">
                                <div class="flex justify-between font-bold text-xs text-[#1C1613]">
                                    <span>Tajarin al Tartufo Nero</span>
                                    <span class="text-[#B84A27]">€16.90</span>
                                </div>
                                <p class="text-[10px] text-stone-500 mt-1">Handmade egg pasta with Umbrian black truffle butter.</p>
                            </div>
                        </div>
                        <div class="rounded-2xl border border-stone-200 overflow-hidden bg-[#FAF6F0]">
                            <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" alt="Tiramisu Classico" class="w-full h-36 object-cover">
                            <div class="p-3.5">
                                <div class="flex justify-between font-bold text-xs text-[#1C1613]">
                                    <span>Tiramisù Treviso</span>
                                    <span class="text-[#B84A27]">€7.50</span>
                                </div>
                                <p class="text-[10px] text-stone-500 mt-1">Mascarpone crema, espresso-soaked savoiardi &amp; Valrhona cocoa.</p>
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    return `
        <div class="live-mockup-canvas bg-[#0B1517] text-[#F5EFE6] select-none overflow-hidden">
            <div class="relative flex-1 min-h-[340px] sm:min-h-[370px] flex flex-col justify-between p-5 sm:p-7 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85" 
                    alt="Aurelia Cliffside Suites Bali" 
                    class="absolute inset-0 w-full h-full object-cover object-center"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#071012]/95 via-[#071012]/55 to-[#071012]/40"></div>

                <div class="relative z-10 flex items-center justify-between border-b border-white/15 pb-2.5">
                    <span class="font-luxury font-bold tracking-[0.28em] text-xs sm:text-sm uppercase text-[#E9D5A1]">
                        AURELIA • ULUWATU
                    </span>
                    <span class="px-3 py-1 rounded-full bg-[#E9D5A1] text-[#0B1517] font-bold text-[10px]">Reserve Villa</span>
                </div>

                <div class="relative z-10 text-left max-w-lg my-auto py-3">
                    <span class="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#E9D5A1] block mb-1">
                        PRIVATE SANCTUARY ABOVE THE TIDES
                    </span>
                    <h4 class="font-luxury text-2xl sm:text-4xl font-semibold text-white leading-[1.08]">
                        Where the limestone cliff meets <em class="italic font-normal text-[#E9D5A1]">endless horizon.</em>
                    </h4>
                    <p class="font-display-clean text-[11px] sm:text-xs text-stone-200/90 mt-2 max-w-md leading-relaxed line-clamp-2">
                        Twelve private infinity-pool residences handcrafted with reclaimed teak and volcanic stone in southern Bali.
                    </p>
                </div>

                <div class="relative z-10 grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-[#0B1517]/85 backdrop-blur-md border border-white/15 text-left text-[10px]">
                    <div>
                        <span class="text-[8px] uppercase tracking-wider text-[#E9D5A1] block">Check-In</span>
                        <span class="font-bold text-white">18 Dec 2026</span>
                    </div>
                    <div>
                        <span class="text-[8px] uppercase tracking-wider text-[#E9D5A1] block">Villa</span>
                        <span class="font-bold text-white truncate block">Cliff Pool Suite</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-[8px] uppercase tracking-wider text-[#E9D5A1] block">Rate</span>
                            <span class="font-bold text-white">$340/N</span>
                        </div>
                        <span class="px-2 py-1 rounded-lg bg-[#E9D5A1] text-[#0B1517] font-extrabold text-[9px]">Book</span>
                    </div>
                </div>
            </div>

            ${isFullPopup ? `
            <div class="flex-1 p-5 sm:p-7 bg-[#0F1E21] border-t border-white/10 text-left space-y-4">
                <h5 class="font-luxury text-lg sm:text-2xl text-[#E9D5A1]">Private Pool Residences &amp; Privileges</h5>
                <div class="pm-stack-mobile grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div class="p-4 rounded-2xl bg-[#15282C] border border-white/10">
                        <span class="text-[9px] uppercase tracking-widest text-[#E9D5A1]">190 Sqm • Sunset View</span>
                        <p class="font-luxury text-lg text-white mt-1">The Horizon Pool Suite</p>
                        <p class="text-[11px] text-stone-300 mt-1">14-meter cantilevered infinity pool, outdoor sunken bath, and 24-hour butler.</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-[#15282C] border border-white/10">
                        <span class="text-[9px] uppercase tracking-widest text-[#E9D5A1]">Culinary Experience</span>
                        <p class="font-luxury text-lg text-white mt-1">Ombak Cliffside Dining</p>
                        <p class="text-[11px] text-stone-300 mt-1">Wood-fired Jimbaran seafood and botanical cocktails 80 meters above the sea.</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-[#15282C] border border-white/10">
                        <span class="text-[9px] uppercase tracking-widest text-[#E9D5A1]">Direct Booking Benefit</span>
                        <p class="font-luxury text-lg text-white mt-1">Private Chauffeur &amp; Spa</p>
                        <p class="text-[11px] text-stone-300 mt-1">Complimentary airport transfer and 60-minute Balinese boreh ritual for 2 guests.</p>
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
    const dotsEl = document.getElementById('portfolio-slide-dots');
    if (!gridEl) return;

    const perView = getPortfolioPerView();
    const total = PORTFOLIO_KEYS.length;

    if (window.currentPortfolioIndex >= total) window.currentPortfolioIndex = 0;
    if (window.currentPortfolioIndex < 0) window.currentPortfolioIndex = total - 1;

    const visibleIndices = [];
    const visibleKeys = [];
    for (let i = 0; i < perView; i++) {
        const idx = (window.currentPortfolioIndex + i) % total;
        visibleIndices.push(idx);
        visibleKeys.push(PORTFOLIO_KEYS[idx]);
    }

    const animClass = window.portfolioSlideDirection === 'prev' ? 'portfolio-slide-prev' : 'portfolio-slide-next';

    gridEl.innerHTML = visibleKeys.map((key) => {
        const item = PORTFOLIO_ARTICLES[key];
        return `
            <article 
                onclick="openPortfolioArticleModal('${item.key}')" 
                class="portfolio-card ${animClass} theme-card rounded-3xl border border-blue-200 overflow-hidden bg-[#F2F7FF] flex flex-col justify-between shadow-sm"
            >
                <div class="p-2.5 sm:p-4">
                    <div class="portfolio-browser-frame rounded-2xl overflow-hidden border border-blue-200 shadow-sm">
                        <div class="portfolio-browser-bar px-3 sm:px-4 py-2 bg-[#E6F0FF] border-b border-blue-200 flex items-center justify-between gap-2">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                                <span class="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#0052FF]"></span>
                            </div>
                            <span class="text-[10px] sm:text-[11px] font-semibold text-[#002B7F] truncate">${escapeHtml(item.domain)}</span>
                            <span class="px-2.5 py-0.5 rounded-md bg-solid-blue text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0">
                                ${escapeHtml(item.badgeLabel)}
                            </span>
                        </div>
                        <div class="portfolio-card-viewport">
                            ${renderHardcodedPortfolioMockup(item.key, false)}
                        </div>
                    </div>
                </div>

                <div class="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2 min-w-0">
                        <h3 class="theme-heading font-heading font-extrabold text-base sm:text-xl text-[#06152D] truncate">
                            ${escapeHtml(item.title)}
                        </h3>
                        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-lg bg-[#E6F0FF] text-[#0052FF] text-[10px] font-bold shrink-0">
                            Desktop &amp; Mobile View
                        </span>
                    </div>
                    <span class="btn-animated shrink-0 px-3.5 sm:px-4 py-2 rounded-xl bg-solid-blue text-white font-bold text-xs shadow-sm">
                        Preview
                    </span>
                </div>
            </article>
        `;
    }).join('');

    if (dotsEl) {
        dotsEl.innerHTML = PORTFOLIO_KEYS.map((key, idx) => {
            const isActive = idx === window.currentPortfolioIndex;
            const item = PORTFOLIO_ARTICLES[key];
            return `
                <button
                    type="button"
                    onclick="goToPortfolioSlide(${idx})"
                    aria-label="Lihat Portofolio ${escapeHtml(item.title)}"
                    title="${escapeHtml(item.title)}"
                    class="portfolio-dot ${isActive ? 'is-active' : ''}"
                ></button>
            `;
        }).join('');
    }

    if (window.lucide) window.lucide.createIcons();
};

window.goToPortfolioSlide = function(targetIndex) {
    if (targetIndex === window.currentPortfolioIndex) return;
    window.portfolioSlideDirection = targetIndex > window.currentPortfolioIndex ? 'next' : 'prev';
    window.currentPortfolioIndex = targetIndex;
    renderPortfolioCarousel();
};

window.slidePortfolio = function(step) {
    const total = PORTFOLIO_KEYS.length;
    window.portfolioSlideDirection = step < 0 ? 'prev' : 'next';
    window.currentPortfolioIndex = (window.currentPortfolioIndex + step + total) % total;
    renderPortfolioCarousel();
};

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
        }, { threshold: 0.08 });

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

        <div class="flex-1 w-full bg-[#06152D] overflow-hidden flex items-center justify-center">
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
    stageEl.scrollTo({ top: 0, behavior: 'smooth' });
};

window.closePortfolioArticleModal = function() {
    document.getElementById('portfolio-article-modal-backdrop')?.classList.add('hidden');
};

window.navigateToSection = function(sectionId) {
    window.activeScrollSection = sectionId;
    window.isProgrammaticScroll = true;
    if (window.programmaticScrollTimer) clearTimeout(window.programmaticScrollTimer);

    updateSlidingPillPosition(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

    window.programmaticScrollTimer = setTimeout(() => {
        window.isProgrammaticScroll = false;
    }, 850);
};

window.scrollToOrderForm = function(preselectedPackage) {
    const pkgToUse = preselectedPackage || 'Paket Profesional';
    document.querySelectorAll('input[name="package_tier"]').forEach(r => {
        r.checked = (r.value === pkgToUse);
    });
    handleDraftInput();
    navigateToSection('order-website');
    setTimeout(() => {
        document.getElementById('order-client-name')?.focus();
    }, 650);
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
    if (window.isProgrammaticScroll) return;
    const sections = ['beranda', 'layanan', 'tentang-kami', 'portofolio', 'paket-harga', 'cara-kerja', 'faq', 'order-website'];
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
    updateSlidingPillPosition(window.activeScrollSection || 'beranda');

    const currentPerView = getPortfolioPerView();
    if (currentPerView !== lastPortfolioPerView) {
        lastPortfolioPerView = currentPerView;
        renderPortfolioCarousel();
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

window.handleDraftInput = function() {
    const selectedPkg = document.querySelector('input[name="package_tier"]:checked')?.value || 'Paket Profesional';
    const meta = PACKAGE_META[selectedPkg] || PACKAGE_META['Paket Profesional'];
    const summaryEl = document.getElementById('order-package-summary');
    if (summaryEl) summaryEl.textContent = meta.summary;
};

window.handleWhatsAppOrderSubmit = function(e) {
    e.preventDefault();
    const clientName = (document.getElementById('order-client-name')?.value || '').trim();
    const brandName = (document.getElementById('order-brand-name')?.value || '').trim();
    const email = (document.getElementById('order-client-email')?.value || '').trim();
    const whatsapp = (document.getElementById('order-client-wa')?.value || '').trim();
    const brief = (document.getElementById('order-client-brief')?.value || '').trim();
    const packageTier = document.querySelector('input[name="package_tier"]:checked')?.value || 'Paket Profesional';

    if (!clientName || !brandName || !email || !whatsapp || !brief) return;

    const pkgMeta = PACKAGE_META[packageTier] || PACKAGE_META['Paket Profesional'];

    const messageLines = [
        `Halo *flexi.co*, saya ingin memesan pembuatan website:`,
        ``,
        `• *Paket Pilihan:* ${packageTier} (${pkgMeta.priceText})`,
        `• *Nama PIC:* ${clientName}`,
        `• *Nama Perusahaan / Brand:* ${brandName}`,
        `• *Email:* ${email}`,
        `• *No. WhatsApp:* ${whatsapp}`,
        `• *Konsep & Ide Website:*`,
        `${brief}`
    ];

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    showToast("Mengarahkan ke WhatsApp", `Membuka chat WhatsApp untuk ${brandName}...`);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
};

window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
};

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

document.getElementById('portfolio-article-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'portfolio-article-modal-backdrop') {
        closePortfolioArticleModal();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    initThemeMode();
    renderPortfolioCarousel();
    requestAnimationFrame(() => {
        updateSlidingPillPosition('beranda');
        initScrollReveal();
    });
    if (window.lucide) window.lucide.createIcons();
});