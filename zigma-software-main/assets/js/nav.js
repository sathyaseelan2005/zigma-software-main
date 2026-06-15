document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    const headerHTML = `
    <!-- Top Contact Bar -->
    <div class="hidden md:flex bg-[#001D35] text-white h-10 px-container-margin-desktop items-center justify-between text-label-sm font-label-sm relative z-50 border-b border-white/10">
        <div class="flex items-center gap-md">
            <span class="flex items-center gap-xs"><span class="material-symbols-outlined text-[16px] text-primary-fixed-dim">mail</span> info@zigmasoftware.in</span>
        </div>
        <div class="flex items-center gap-md">
            <span class="flex items-center gap-xs"><span class="material-symbols-outlined text-[16px] text-primary-fixed-dim">call</span> +91 99941 40474</span>
        </div>
    </div>

    <!-- Navigation Header -->
    <nav class="sticky top-0 w-full z-50 bg-white shadow-md border-b border-gray-200/80 h-20 flex items-center" id="main-nav">
        <div class="max-w-[1280px] mx-auto w-full px-container-margin-desktop flex items-center justify-between h-full">
            <a href="index.html" class="flex items-center gap-base cursor-pointer shrink-0">
                <img src="assets/images/logo.png" alt="Zigma Software Logo" class="h-14 w-auto object-contain">
            </a>
            <div class="hidden lg:flex items-center gap-md xl:gap-xl font-poppins text-label-md h-full">
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="index.html">Home</a>
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="about.html">About Us</a>
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="products.html">Products</a>
                <!-- Services Dropdown container -->
                <div class="relative group h-full flex items-center">
                    <button class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent flex items-center gap-xs focus:outline-none whitespace-nowrap">
                        <span>Services</span>
                        <span class="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180 font-bold">expand_more</span>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1 text-left">
                        <a href="web-development.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary whitespace-nowrap" role="menuitem">Web Design & Development</a>
                        <a href="mobile-development.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary whitespace-nowrap" role="menuitem">Mobile App Development</a>
                        <a href="seo-services.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary whitespace-nowrap" role="menuitem">SEO Services</a>
                        <a href="social-marketing.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary whitespace-nowrap" role="menuitem">Social Media Marketing</a>
                        <a href="software-support.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary whitespace-nowrap" role="menuitem">Software Support</a>
                    </div>
                </div>
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="customer.html">Customers</a>
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="testimonials.html">Testimonials</a>
                <a class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap" href="blog.html">Blogs</a>
                <a href="contact.html" class="text-[#00497b] hover:text-[#EC3F43] transition-all duration-200 px-md py-xs rounded font-bold bg-transparent whitespace-nowrap">contact us</a>
            </div>
            <button class="lg:hidden text-[#00497b]" id="mobile-menu-toggle">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu (Overlay) -->
    <div class="fixed inset-0 z-[100] bg-[#001D35]/95 hidden lg:hidden flex flex-col items-center justify-center gap-lg text-white text-title-lg font-bold" id="mobile-menu">
        <button class="absolute top-6 right-6 text-white" id="mobile-menu-close">
            <span class="material-symbols-outlined text-[32px]">close</span>
        </button>
        <a class="hover:text-secondary transition-colors" href="index.html">Home</a>
        <a class="hover:text-secondary transition-colors" href="about.html">About Us</a>
        <a class="hover:text-secondary transition-colors" href="products.html">Products</a>
        <div class="flex flex-col items-center gap-sm">
            <span class="text-white/60 text-sm uppercase tracking-wider">Services</span>
            <a class="text-white hover:text-secondary text-base transition-colors" href="web-development.html">Web Design & Development</a>
            <a class="text-white hover:text-secondary text-base transition-colors" href="mobile-development.html">Mobile App Development</a>
            <a class="text-white hover:text-secondary text-base transition-colors" href="seo-services.html">SEO Services</a>
            <a class="text-white hover:text-secondary text-base transition-colors" href="social-marketing.html">Social Media Marketing</a>
            <a class="text-white hover:text-secondary text-base transition-colors" href="software-support.html">Software Support</a>
        </div>
        <a class="hover:text-secondary transition-colors" href="customer.html">Customers</a>
        <a class="hover:text-secondary transition-colors" href="testimonials.html">Testimonials</a>
        <a class="hover:text-secondary transition-colors" href="blog.html">Blogs</a>
        <a href="contact.html" class="bg-[#EC3F43] text-white px-xl py-md rounded-full font-semibold hover:brightness-110 transition-all mt-md">contact us</a>
    </div>
    `;

    placeholder.innerHTML = headerHTML;

    // Mobile menu toggle logic
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenuClose && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Active page detection and highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const servicePaths = [
        'web-development.html',
        'mobile-development.html',
        'seo-services.html',
        'social-marketing.html',
        'software-support.html'
    ];

    // 1. Highlight Desktop Nav Items
    const desktopLinks = document.querySelectorAll('#main-nav a:not(.shrink-0), #main-nav button');
    desktopLinks.forEach(link => {
        let isActive = false;
        const href = link.getAttribute('href');
        if (href) {
            const linkPath = href.split('/').pop();
            if (linkPath === currentPath) {
                isActive = true;
            } else if ((currentPath === '' || currentPath === '/') && linkPath === 'index.html') {
                isActive = true;
            }
        } else {
            // Services dropdown parent button
            if (link.textContent.trim().toLowerCase().includes('services') && servicePaths.includes(currentPath)) {
                isActive = true;
            }
        }

        if (isActive) {
            link.classList.remove('bg-transparent', 'text-[#00497b]', 'hover:text-[#EC3F43]');
            link.classList.add('bg-[#EC3F43]', 'text-white', 'hover:brightness-110');
        } else {
            link.classList.remove('bg-[#EC3F43]', 'text-white', 'hover:brightness-110');
            link.classList.add('bg-transparent', 'text-[#00497b]', 'hover:text-[#EC3F43]');
        }
    });

    // 2. Highlight Mobile Nav Items
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        let isActive = false;
        const href = link.getAttribute('href');
        if (href) {
            const linkPath = href.split('/').pop();
            if (linkPath === currentPath) {
                isActive = true;
            } else if ((currentPath === '' || currentPath === '/') && linkPath === 'index.html') {
                isActive = true;
            }
        }

        if (isActive) {
            if (link.classList.contains('rounded-full')) {
                // Mobile Contact button when active
                link.classList.add('bg-[#EC3F43]', 'text-white', 'hover:brightness-110');
            } else {
                // Other mobile items when active
                link.classList.add('bg-[#EC3F43]', 'text-white', 'px-6', 'py-2', 'rounded-full', 'hover:brightness-110');
                link.classList.remove('hover:text-secondary');
            }
        } else {
            if (link.classList.contains('rounded-full') && href && href.endsWith('contact.html')) {
                // Mobile Contact button when inactive (bordered layout)
                link.classList.remove('bg-[#EC3F43]', 'hover:brightness-110');
                link.classList.add('border', 'border-white/20', 'text-white', 'hover:bg-white/10');
            } else {
                // Other mobile items when inactive
                link.classList.remove('bg-[#EC3F43]', 'px-6', 'py-2', 'rounded-full', 'hover:brightness-110');
                link.classList.add('hover:text-secondary');
            }
        }
    });
});
