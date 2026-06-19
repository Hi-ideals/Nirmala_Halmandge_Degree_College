/**
 * main.js
 * Shared site behavior: renders header/footer/ticker from content.js,
 * handles mobile menu, scroll reveals, back-to-top, and active nav state.
 * Include AFTER content.js on every page.
 */

(function () {
  const SITE = window.SITE;
  if (!SITE) {
    console.error('content.js must be loaded before main.js');
    return;
  }

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html');

  /* ============================================================
     ICONS (inline SVG strings, used by highlight cards on home)
  ============================================================ */
  const ICONS = {
    cap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-7 h-7"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M5 10v5c0 1.5 3 3 7 3s7-1.5 7-3v-5"/><path d="M21 10v6"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-7 h-7"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    chat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-7 h-7"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'
  };

  /* Social brand icons (inline SVG, fill=currentColor so they inherit text color) */
  const SOCIAL_ICONS = {
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M18.9 2H22l-7.2 8.23L23 22h-6.9l-5.4-7.06L4.2 22H1l7.74-8.85L1 2h7.06l4.88 6.46L18.9 2zm-2.42 18h1.9L7.6 4H5.58l10.9 16z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.84 1.02 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47C15.06 21.99 14.72 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.92.04-1.46.18-1.85.33-.45.17-.78.4-1.13.74-.34.35-.57.68-.74 1.13-.15.39-.29.93-.33 1.85-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.92.18 1.46.33 1.85.17.45.4.78.74 1.13.35.34.68.57 1.13.74.39.15.93.29 1.85.33 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.92-.04 1.46-.18 1.85-.33.45-.17.78-.4 1.13-.74.34-.35.57-.68.74-1.13.15-.39.29-.93.33-1.85.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.92-.18-1.46-.33-1.85a3.1 3.1 0 0 0-.74-1.13 3.1 3.1 0 0 0-1.13-.74c-.39-.15-.93-.29-1.85-.33-1.05-.05-1.37-.06-4.04-.06zm0 4.6a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm5.65-3.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.95-1.91-.95-2.37-1C16.9 3 12 3 12 3h-.01s-4.89 0-8.18.14c-.46.05-1.47.05-2.37 1C.73 4.86.5 6.5.5 6.5S.27 8.42.27 10.34v1.8c0 1.92.23 3.84.23 3.84s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.89.18 8.06.23 8.06.23s4.9-.01 8.19-.15c.46-.06 1.47-.06 2.37-1.02.71-.72.94-2.36.94-2.36s.23-1.92.23-3.84v-1.8c0-1.92-.23-3.84-.23-3.84zM9.55 14.96V8.4l6.27 3.28-6.27 3.28z"/></svg>'
  };

  /* ============================================================
     HEADER
  ============================================================ */
  function buildDesktopNav() {
    return SITE.nav.map((item) => {
      const isActive = item.href === currentPage || (item.children && item.children.some(c => c.href === currentPage));
      const activeClass = isActive ? 'active text-maroon' : 'text-ink';

      if (item.children) {
        return `
          <div class="nav-item relative">
            <a href="${item.href}" class="nav-link ${activeClass} flex items-center gap-1 py-2 font-medium text-[15px] hover:text-maroon transition-colors">
              ${item.label}
              <svg class="w-3.5 h-3.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <div class="nav-dropdown absolute left-0 top-full pt-2 w-64 z-40">
              <div class="bg-white rounded-lg shadow-xl border border-sand overflow-hidden">
                ${item.children.map(c => `
                  <a href="${c.href}" class="block px-5 py-3 text-sm text-ink hover:bg-cream hover:text-maroon border-b border-sand last:border-b-0 transition-colors">
                    ${c.label}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>`;
      }
      return `
        <a href="${item.href}" class="nav-link ${activeClass} py-2 font-medium text-[15px] hover:text-maroon transition-colors">
          ${item.label}
        </a>`;
    }).join('');
  }

  function buildMobileNav() {
    return SITE.nav.map((item, idx) => {
      const isActive = item.href === currentPage || (item.children && item.children.some(c => c.href === currentPage));
      const activeClass = isActive ? 'text-maroon' : 'text-ink';

      if (item.children) {
        return `
          <div class="border-b border-sand">
            <button type="button" data-mobile-toggle="${idx}" class="w-full flex items-center justify-between py-3.5 text-left font-medium ${activeClass}">
              <span>${item.label}</span>
              <svg data-chevron="${idx}" class="mobile-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div data-submenu="${idx}" class="mobile-submenu pl-4">
              ${item.children.map(c => `<a href="${c.href}" class="block py-2.5 text-sm text-ink/80 hover:text-maroon">${c.label}</a>`).join('')}
              <div class="pb-2"></div>
            </div>
          </div>`;
      }
      return `
        <a href="${item.href}" class="block py-3.5 border-b border-sand font-medium ${activeClass}">${item.label}</a>`;
    }).join('');
  }

  function buildTicker() {
    const items = SITE.notices.map(n => `<span class="ticker-item">${n}</span>`).join('');
    // duplicate content for seamless infinite scroll
    return `<div class="ticker-track">${items}${items}</div>`;
  }

  function renderHeader() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    mount.innerHTML = `
      <!-- Top contact strip -->
      <div class="bg-forest text-cream/90 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap items-center gap-4">
            <a href="tel:${SITE.meta.phone.replace(/\s/g, '')}" class="flex items-center gap-1.5 hover:text-marigold transition-colors">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${SITE.meta.phoneDisplay}
            </a>
            <a href="mailto:${SITE.meta.email}" class="hidden sm:flex items-center gap-1.5 hover:text-marigold transition-colors">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4V4z"/><path d="M22 6l-10 7L2 6"/></svg>
              ${SITE.meta.email}
            </a>
            <span class="hidden lg:flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${SITE.meta.addressLine1}, ${SITE.meta.place}
            </span>
          </div>
         
        </div>
      </div>

      <!-- Main header -->
      <div class="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="./images/logo.webp" alt="${SITE.meta.name} logo"
                   class="h-20 w-auto max-w-[160px] object-contain bg-white p-0.5"
                                   />
              </a>
            <nav class="hidden lg:flex items-center gap-4 xl:gap-7 text-[15px] xl:text-base">
              ${buildDesktopNav()}
            </nav>

            <div class="flex items-center gap-3">
              <a href="contact.html" class="hidden lg:inline-flex items-center bg-maroon text-cream px-4 xl:px-5 py-2.5 rounded-full text-sm font-medium hover:bg-maroon-dark transition-colors shrink-0 whitespace-nowrap">
                Enquire Now
              </a>
              <button id="mobileMenuBtn" aria-label="Open menu" aria-expanded="false" class="lg:hidden p-2 text-ink">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu drawer -->
      <div id="mobileMenu" class="lg:hidden fixed inset-0 z-[60] hidden">
        <div id="mobileMenuOverlay" class="absolute inset-0 bg-ink/60"></div>
        <div class="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-2xl overflow-y-auto">
          <div class="flex items-center justify-between p-5 border-b border-sand">
            <span class="font-display font-bold text-maroon">Menu</span>
            <button id="mobileMenuClose" aria-label="Close menu" class="p-1 text-ink">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="px-5">
            ${buildMobileNav()}
          </div>
          <div class="p-5">
            <a href="contact.html" class="block text-center bg-maroon text-cream px-5 py-3 rounded-full text-sm font-medium">Enquire Now</a>
          </div>
        </div>
      </div>

      <!-- Noticeboard ticker (signature element) -->
      <div class="noticeboard flex items-stretch">
        <div class="noticeboard-label flex items-center px-4 sm:px-6 py-2 text-xs sm:text-sm shrink-0">
          NOTICE BOARD
        </div>
        <div class="flex-1 overflow-hidden flex items-center py-2">
          ${buildTicker()}
        </div>
      </div>
    `;

    attachHeaderEvents();
  }

  function attachHeaderEvents() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('mobileMenuClose');
    const overlay = document.getElementById('mobileMenuOverlay');

    function openMenu() {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
    }
    function closeMenu() {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    }

    btn && btn.addEventListener('click', openMenu);
    closeBtn && closeBtn.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);

    // mobile submenu accordion
    SITE.nav.forEach((item, idx) => {
      if (!item.children) return;
      const toggle = document.querySelector(`[data-mobile-toggle="${idx}"]`);
      const submenu = document.querySelector(`[data-submenu="${idx}"]`);
      const chevron = document.querySelector(`[data-chevron="${idx}"]`);
      if (!toggle || !submenu) return;
      toggle.addEventListener('click', () => {
        submenu.classList.toggle('open');
        chevron && chevron.classList.toggle('open');
      });
    });
  }

  /* ============================================================
     FOOTER
  ============================================================ */
  function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;

    const linksCol = SITE.footer.links.map(l => `<li><a href="${l.href}" class="hover:text-marigold transition-colors">${l.label}</a></li>`).join('');
    const companyCol = SITE.footer.company.map(l => `<li><a href="${l.href}" class="hover:text-marigold transition-colors">${l.label}</a></li>`).join('');

    mount.innerHTML = `
      <footer class="bg-[#1c150e] text-cream/80 pattern-dots">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div class="lg:col-span-2">
              <a href="index.html" class="flex items-center gap-3 group">
                <img src="./images/logo.webp" alt="${SITE.meta.name} logo"
                   class="h-21 w-auto max-w-[180px] object-contain bg-white p-0.5"
                                   />
              </a>
              <p class="text-sm leading-relaxed text-cream/65 max-w-md">${SITE.footer.about}</p>
            
            </div>

            <div>
              <h4 class="font-display text-cream font-semibold mb-4 text-[15px]">Links</h4>
              <ul class="space-y-2.5 text-sm">${linksCol}</ul>
            </div>

            <div>
              <h4 class="font-display text-cream font-semibold mb-4 text-[15px]">Company</h4>
              <ul class="space-y-2.5 text-sm">${companyCol}</ul>
            </div>

            <div>
              <h4 class="font-display text-cream font-semibold mb-4 text-[15px]">Connect Us</h4>
              <ul class="space-y-3 text-sm">
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-0.5 text-marigold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:${SITE.meta.phone.replace(/\s/g, '')}" class="hover:text-marigold transition-colors">${SITE.meta.phoneDisplay}</a>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-0.5 text-marigold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>${SITE.meta.addressLine1}, ${SITE.meta.addressLine2}</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-0.5 text-marigold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4V4z"/><path d="M22 6l-10 7L2 6"/></svg>
                  <a href="mailto:${SITE.meta.email}" class="hover:text-marigold transition-colors break-all">${SITE.meta.email}</a>
                </li>
              </ul>
            </div>
          </div>


          <div class="hairline-ornament my-8 opacity-20"></div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/55">
            <p>${SITE.footer.copyright}</p>
            <p>${SITE.meta.affiliation}</p>
          </div>
        </div>
      </footer>

      <!-- Back to top -->
      <button id="backToTop" aria-label="Back to top" class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-maroon text-cream flex items-center justify-center shadow-lg hover:bg-maroon-dark transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <!-- Lightbox (gallery pages use it; harmless elsewhere) -->
      <div id="lightbox">
        <button id="lightboxClose" aria-label="Close" class="lightbox-btn absolute top-5 right-5 w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <button id="lightboxPrev" aria-label="Previous image" class="lightbox-btn absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <img id="lightboxImg" src="" alt="" />
        <button id="lightboxNext" aria-label="Next image" class="lightbox-btn absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    `;

    attachFooterEvents();
  }

  function attachFooterEvents() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
      });
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const lightboxClose = document.getElementById('lightboxClose');
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        document.getElementById('lightbox').classList.remove('open');
      });
    }
  }

  /* ============================================================
     SCROLL REVEAL
  ============================================================ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initReveal();
  });

  // expose icon map for pages that build their own card markup
  window.SITE_ICONS = ICONS;
})();