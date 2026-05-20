document.getElementById('year').textContent = new Date().getFullYear();

(function mobileShell() {
    const menu = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('mobile-menu-close');
    if (!menu || !openBtn) return;

    const iconOpen = openBtn.querySelector('.menu-icon-open');
    const iconClose = openBtn.querySelector('.menu-icon-close');
    const desktopMq = window.matchMedia('(min-width: 768px)');

    function openMenu() {
        menu.classList.remove('hidden');
        menu.classList.add('is-open');
        document.body.classList.add('menu-open');
        openBtn.setAttribute('aria-expanded', 'true');
        iconOpen && iconOpen.classList.add('hidden');
        iconClose && iconClose.classList.remove('hidden');
    }

    function closeMenu() {
        menu.classList.add('hidden');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        openBtn.setAttribute('aria-expanded', 'false');
        iconOpen && iconOpen.classList.remove('hidden');
        iconClose && iconClose.classList.add('hidden');
    }

    openBtn.addEventListener('click', () => {
        const expanded = openBtn.getAttribute('aria-expanded') === 'true';
        expanded ? closeMenu() : openMenu();
    });

    closeBtn && closeBtn.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) closeMenu();
    });

    const handleMqChange = (e) => { if (e.matches) closeMenu(); };
    if (desktopMq.addEventListener) {
        desktopMq.addEventListener('change', handleMqChange);
    } else if (desktopMq.addListener) {
        desktopMq.addListener(handleMqChange);
    }
})();

(function mobileMap() {
    const mount = document.getElementById('mobile-map');
    if (!mount) return;
    const src = mount.getAttribute('data-map-src');
    if (!src) return;

    const mobileMq = window.matchMedia('(max-width: 767px)');
    let injected = false;

    function inject() {
        if (injected || !mobileMq.matches) return;
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.title = 'Map to 710 State Street';
        iframe.className = 'w-full h-full border-0';
        iframe.setAttribute('allowfullscreen', '');
        mount.appendChild(iframe);
        injected = true;
    }

    inject();

    const handle = (e) => { if (e.matches) inject(); };
    if (mobileMq.addEventListener) {
        mobileMq.addEventListener('change', handle);
    } else if (mobileMq.addListener) {
        mobileMq.addListener(handle);
    }
})();
