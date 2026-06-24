/**
 * main.js — Comportamentos de UI comuns a todas as páginas
 * gladstonfreire.com.br
 */
(function () {

    // ── Menu hambúrguer ──────────────────────────────────────
    const menuToggle = document.querySelector('.menu-toggle');
    const menu       = document.querySelector('.menu');
    const overlay    = document.querySelector('.menu-overlay');

    if (menuToggle && menu && overlay) {
        const closeMenu = () => {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        menuToggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            overlay.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        overlay.addEventListener('click', closeMenu);
        menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }

    // ── Header scroll ────────────────────────────────────────
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 100);
        }, { passive: true });
    }

    // ── Botão voltar ao topo ─────────────────────────────────
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Scroll Reveal ────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (revealEls.length) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

            revealEls.forEach(el => observer.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('active'));
        }
    }

    // ── Lazy loading com fade-in ─────────────────────────────
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
        }
    });

})();
