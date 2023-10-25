function hoverImage(element) {
    const images = document.querySelectorAll('.menu-image');
    element.style.width = '55%';

    const texts = element.getElementsByClassName("title");
    const browse = document.getElementById('browse-title');
    const generate = document.getElementById('generate-title');
    const browseBorder = document.getElementById('browse-border');
    const generateBorder = document.getElementById('generate-border');

    text = texts[0];
    

    for (const img of images) {
        if (img !== element) {
            img.style.width = '45%';
        }
    }

    if(text.id == 'browse-title')
    {
        browse.style.left = '2.5%';
        generate.style.left = '55.5%';
        browseBorder.style.opacity = '100%';
    }
    else
    {        
        browse.style.left = '-2.5%';
        generate.style.left = '47.5%'; 
        generateBorder.style.opacity = '100%';
    }
}


function resetImages() {
    const divs = document.getElementsByClassName('menu-image');
    const browse = document.getElementById('browse-title');
    const generate = document.getElementById('generate-title');
    const browseBorder = document.getElementById('browse-border');
    const generateBorder = document.getElementById('generate-border');
    
    for(const div of divs) {
        div.style.width = '50%';
    }
    browse.style.left = '0%';
    generate.style.left = '50%';
    browseBorder.style.opacity = '0%';
    generateBorder.style.opacity = '0%';
}

function clickImage(element) {
    const images = document.querySelector('.menu-image');

    images.style.width = "100%";
}