(function () {
    const header = document.getElementById('header');

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
        const track = carousel.querySelector('[data-carousel-track]');
        const prevBtn = carousel.querySelector('[data-carousel-prev]');
        const nextBtn = carousel.querySelector('[data-carousel-next]');
        const items = track.querySelectorAll('.carousel__item');

        if (!items.length) return;

        let currentIndex = 0;

        function getVisibleCount() {
            const itemWidth = items[0].offsetWidth + 16;
            const wrapper = carousel.querySelector('.carousel__track-wrapper');
            return Math.floor(wrapper.offsetWidth / itemWidth) || 1;
        }

        function getMaxIndex() {
            return Math.max(0, items.length - getVisibleCount());
        }

        function updateCarousel() {
            const itemWidth = items[0].offsetWidth + 16;
            track.style.transform = 'translateX(-' + currentIndex * itemWidth + 'px)';
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= getMaxIndex();
        }

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < getMaxIndex()) {
                currentIndex++;
                updateCarousel();
            }
        });

        window.addEventListener('resize', function () {
            currentIndex = Math.min(currentIndex, getMaxIndex());
            updateCarousel();
        });

        updateCarousel();
    });
})();
