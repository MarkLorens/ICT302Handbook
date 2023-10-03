function hoverImage(element) {
    const images = document.querySelectorAll('.menu-image');
    element.style.flex = '0.6';
    element.style.zIndex = '2';

    for (const img of images) {
        if (img !== element) {
            img.style.flex = '0.4';
            img.style.zIndex = '1';
        }
    }
}

function resetImages() {
    const images = document.querySelectorAll('.menu-image');
    
    for (const img of images) {
        img.style.flex = '1';
        img.style.zIndex = '0';
    }
}

function clickImage(element) {
    const images = document.querySelector('.menu-image');

    images.style.width = "100%";
}