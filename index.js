function hoverImage(element) {
    const images = document.querySelectorAll('.menu-image');
    element.style.width = '55%';

    const texts = element.getElementsByClassName("title");
    const browse = document.getElementById('browse-title');
    const generate = document.getElementById('generate-title');

    text = texts[0];
    

    for (const img of images) {
        if (img !== element) {
            img.style.width = '45%';
        }
    }

    if(text.id == 'browse-title')
    {
        browse.style.left = '27.5%';
        generate.style.left = '77.5%';
    }
    else
    {        
        browse.style.left = '22.5%';
        generate.style.left = '72.5%'; 
    }
}


function resetImages() {
    const divs = document.getElementsByClassName('menu-image');
    
    for(const div of divs) {
        div.style.width = '50%';
    }
}

function clickImage(element) {
    const images = document.querySelector('.menu-image');

    images.style.width = "100%";
}