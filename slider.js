document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('slider-container');
    let activeSlideIndex = 0;
    const slides = document.querySelectorAll('.position-image-and-text-box');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    sliderContainer.addEventListener('click', (event) => {
        if (event.target.id === 'next') {
            activeSlideIndex = (activeSlideIndex + 1) % slides.length;
            showSlide(activeSlideIndex);
        } else if (event.target.id === 'prev') {
            activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
            showSlide(activeSlideIndex);
        }
    });

    // Initialize the first slide
    showSlide(activeSlideIndex);
});
