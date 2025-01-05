document.addEventListener('DOMContentLoaded', () => {
    const caucelSlides = document.querySelectorAll('.caucel-slide'); // Selección específica
    const caucelPrevButton = document.getElementById('prev-slide'); // Botón anterior
    const caucelNextButton = document.getElementById('next-slide'); // Botón siguiente
    let caucelCurrentIndex = 0; // Índice actual

    const showCaucelSlide = (index) => {
        caucelSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    caucelPrevButton.addEventListener('click', () => {
        caucelCurrentIndex = (caucelCurrentIndex - 1 + caucelSlides.length) % caucelSlides.length;
        showCaucelSlide(caucelCurrentIndex);
    });

    caucelNextButton.addEventListener('click', () => {
        caucelCurrentIndex = (caucelCurrentIndex + 1) % caucelSlides.length;
        showCaucelSlide(caucelCurrentIndex);
    });

    showCaucelSlide(caucelCurrentIndex);
});
