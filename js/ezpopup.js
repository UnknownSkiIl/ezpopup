function ezPopUp(btn, num = 0) {
    let ezbtns = document.querySelectorAll(btn),
        ezbtn = ezbtns[num],
        overlay = document.querySelector('.ezOverlay'),
        close = document.querySelector('.ezClose');

    ezbtn.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        ezbtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
};
