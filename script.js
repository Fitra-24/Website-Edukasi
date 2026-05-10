// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Memilih semua tautan (link) di dalam menu navigasi yang berawalan '#'
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    // Menambahkan event (kejadian) klik pada setiap tautan navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Mencegah perilaku default klik link (yakni melompat langsung secara kasar)
            e.preventDefault();

            // Mengambil ID tujuan dari atribut 'href' pada tautan yang diklik (misal: '#materi')
            const targetId = this.getAttribute('href');
            
            // Mencari elemen tujuan di dalam HTML berdasarkan ID tersebut
            const targetElement = document.querySelector(targetId);

            // Jika elemen tujuan ditemukan, lakukan scroll halus (smooth scroll)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Posisikan elemen tujuan di bagian atas layar
                });
            }
        });
    });

});
