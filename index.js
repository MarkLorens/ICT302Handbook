function hoverImage(element) {
    const images = document.querySelectorAll('.menu-image');
    element.style.width = '55%';

    const texts = element.getElementsByClassName("title");
    const browse = document.getElementById('browse-title');
    const generate = document.getElementById('generate-title');
    const bDesc = document.getElementById('browse-description');
    const gDesc = document.getElementById('generate-description');

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
        bDesc.style.left = '2.5%';
        bDesc.style.opacity = '100%';
        bDesc.style.top = '30%';
    }
    else if(text.id == 'generate-title')
    {        
        browse.style.left = '-2.5%';
        generate.style.left = '47.5%'; 
        gDesc.style.left = '47.5%';
        gDesc.style.opacity = '100%';
        gDesc.style.top = '30%';
    }
}


function resetImages() {
    const divs = document.getElementsByClassName('menu-image');
    const browse = document.getElementById('browse-title');
    const generate = document.getElementById('generate-title');
    const bDesc = document.getElementById('browse-description');
    const gDesc = document.getElementById('generate-description');
    
    for(const div of divs) {
        div.style.width = '50%';
    }
    browse.style.left = '0%';
    generate.style.left = '50%';
    bDesc.style.left = '0%';
    bDesc.style.opacity = '0%';
    bDesc.style.top = '20%';
    gDesc.style.left = '50%';
    gDesc.style.opacity = '0%';
    gDesc.style.top = '20%';
}

function clickImage(element) {
    const images = document.querySelector('.menu-image');

    images.style.width = "100%";
}