// Init AOS
AOS.init({
    duration: 800,
    once: true
});

// Preloader Logic (Shutter + Tux)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Delay 2 detik biar kelihatan animasi loadingnya
    setTimeout(() => {
        // Tambah class shutter-open untuk memicu CSS clip-path membuka
        preloader.classList.add('shutter-open');

        // Setelah animasi selesai, set display none
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000); // Waktu sesuai durasi transition CSS
    }, 2000);
});

// Mobile Menu
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.mobile-menu');
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.innerHTML = menu.classList.contains('active') ? '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

// Generate GitHub Contribution Grid (Randomized Monochrome)
const grid = document.getElementById('contrib-grid');
for (let i = 0; i < 140; i++) { // 7 rows x 20 cols
    const box = document.createElement('div');
    box.classList.add('contrib-box');

    // Randomly assign activity level (Monochrome theme: m-1 to m-4)
    const rand = Math.random();
    if (rand > 0.8) box.classList.add('m-4'); // White (High)
    else if (rand > 0.6) box.classList.add('m-3');
    else if (rand > 0.4) box.classList.add('m-2');
    else box.classList.add('m-1'); // Dark (Low/None)

    grid.appendChild(box);
}