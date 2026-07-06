(function () {
    const header = document.getElementById('header');
    const desktopQuery = window.matchMedia('(min-width: 768px)');

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
        const wrapper = carousel.querySelector('.carousel__track-wrapper');
        const prevBtn = carousel.querySelector('[data-carousel-prev]');
        const nextBtn = carousel.querySelector('[data-carousel-next]');
        const items = track.querySelectorAll('.carousel__item');

        if (!items.length) return;

        let currentIndex = 0;

        function isDesktop() {
            return desktopQuery.matches;
        }

        function getGap() {
            return isDesktop() ? 16 : 12;
        }

        function getVisibleCount() {
            const itemWidth = items[0].offsetWidth + getGap();
            return Math.floor(wrapper.offsetWidth / itemWidth) || 1;
        }

        function getMaxIndex() {
            return Math.max(0, items.length - getVisibleCount());
        }

        function resetMobileScroll() {
            track.style.transform = 'none';
            wrapper.scrollLeft = 0;
            currentIndex = 0;
        }

        function updateCarousel() {
            if (!isDesktop()) {
                resetMobileScroll();
                return;
            }

            const itemWidth = items[0].offsetWidth + getGap();
            track.style.transform = 'translateX(-' + currentIndex * itemWidth + 'px)';
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= getMaxIndex();
        }

        prevBtn.addEventListener('click', function () {
            if (!isDesktop() || currentIndex === 0) return;
            currentIndex--;
            updateCarousel();
        });

        nextBtn.addEventListener('click', function () {
            if (!isDesktop() || currentIndex >= getMaxIndex()) return;
            currentIndex++;
            updateCarousel();
        });

        function handleViewportChange() {
            currentIndex = Math.min(currentIndex, getMaxIndex());
            updateCarousel();
        }

        window.addEventListener('resize', handleViewportChange);
        desktopQuery.addEventListener('change', handleViewportChange);

        updateCarousel();
    });
})();
