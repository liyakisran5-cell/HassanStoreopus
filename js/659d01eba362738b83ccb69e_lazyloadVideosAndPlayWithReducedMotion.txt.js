"use strict";
// lazyload videos
(function () {
    const observer = lozad();
    observer.observe();
})();
// play videos with reduced motion
(function () {
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting && video.paused) {
                if (video.readyState >= 2) {
                    video.play();
                    observer.unobserve(video);
                }
                else {
                    video.addEventListener('loadeddata', () => {
                        video.play();
                        observer.unobserve(video);
                    }, { once: true });
                }
            }
        });
    }
    function setupIntersectionObserver(video) {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0,
        });
        observer.observe(video);
    }
    function init() {
        if (prefersReducedMotion()) {
            const videos = document.querySelectorAll('video[autoplay]');
            videos.forEach((video) => {
                setupIntersectionObserver(video);
            });
        }
    }
    init();
    window.addEventListener('load', init);
})();
