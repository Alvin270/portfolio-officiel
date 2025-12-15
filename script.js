// Animation au scroll avec Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer toutes les sections avec la classe slide-up
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide-up');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Gestion des modals
    const modalSlam = document.getElementById('modal-slam');
    const modalSisr = document.getElementById('modal-sisr');
    const btnSlam = document.getElementById('btn-slam');
    const btnSisr = document.getElementById('btn-sisr');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Ouvrir modal SLAM
    btnSlam.addEventListener('click', () => {
        modalSlam.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Ouvrir modal SISR
    btnSisr.addEventListener('click', () => {
        modalSisr.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Fermer les modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalSlam.classList.remove('show');
            modalSisr.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });

    // Fermer les modals en cliquant en dehors
    window.addEventListener('click', (event) => {
        if (event.target === modalSlam) {
            modalSlam.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (event.target === modalSisr) {
            modalSisr.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Fermer les modals avec la touche Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalSlam.classList.remove('show');
            modalSisr.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Gestion du bouton de veille technologique MVC
    const btnVeilleMvc = document.getElementById('btn-veille-mvc');
    const keywordsMvc = document.getElementById('keywords-mvc');

    if (btnVeilleMvc && keywordsMvc) {
        btnVeilleMvc.addEventListener('click', () => {
            const isOpen = keywordsMvc.classList.contains('show');
            
            if (isOpen) {
                keywordsMvc.classList.remove('show');
                btnVeilleMvc.classList.remove('active');
            } else {
                keywordsMvc.classList.add('show');
                btnVeilleMvc.classList.add('active');
            }
        });
    }
});



