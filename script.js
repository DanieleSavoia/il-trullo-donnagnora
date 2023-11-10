let currentIndex = 0;
        const images = document.querySelectorAll(".carousel img");
        const carousel = document.querySelector(".carousel");

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            const translateX = -currentIndex * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
        }

        setInterval(nextSlide, 5000); // Cambia immagine ogni 10 secondi

        // Esegui la funzione per la prima volta
        nextSlide();