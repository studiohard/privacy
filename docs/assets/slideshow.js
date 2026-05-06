(function () {
    function setupSlideshow(root) {
        const track = root.querySelector("[data-slide-track]");
        const dots = Array.from(root.querySelectorAll("[data-slide-to]"));
        const captions = Array.from(root.querySelectorAll("[data-slide-caption]"));
        const slides = Array.from(root.querySelectorAll(".slide"));
        if (!track || slides.length === 0) return;

        let index = 0;
        let timer = 0;

        function render(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === index);
                dot.setAttribute("aria-pressed", String(dotIndex === index));
            });
            captions.forEach((caption, captionIndex) => {
                caption.hidden = captionIndex !== index;
            });
        }

        function start() {
            window.clearInterval(timer);
            timer = window.setInterval(() => render(index + 1), 4200);
        }

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                render(Number(dot.dataset.slideTo || 0));
                start();
            });
        });

        root.addEventListener("mouseenter", () => window.clearInterval(timer));
        root.addEventListener("mouseleave", start);
        render(0);
        start();
    }

    window.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-slideshow]").forEach(setupSlideshow);
    });
})();
