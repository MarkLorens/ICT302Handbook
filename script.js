const swup = new Swup();

function hoverImage(element) {
    const images = document.querySelectorAll('.menu-image-index');
    element.style.width = '55%';

    const texts = element.getElementsByClassName("title-index");
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
    const divs = document.getElementsByClassName('menu-image-index');
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

// Category.js

function hoverImageCategory(element) {
    const images = document.querySelectorAll('.menu-image');
    element.style.width = '55%';

    const texts = element.getElementsByClassName("title");
    const college = document.getElementById('college-title');
    const major =  document.getElementById('major-title');
    const unit = document.getElementById('unit-title');
    const course = document.getElementById('course-title');

    text = texts[0];
    

    for (const img of images) {
        if (img !== element) {
            img.style.width = '45%';
        }
    }

    if(text.id === 'college-title')
    {
        college.style.left = '1.5%';
        major.style.left = '27%';
        unit.style.left = '52%';
        course.style.left = '75.5%';
    }
    else if(text.id === 'major-title')
    {
        college.style.left = '-1%';
        major.style.left = '25.5%';
        unit.style.left = '52%';
        course.style.left = '75.5%';   
    }
    else if(text.id === 'unit-title')
    {
        college.style.left = '-1%';
        major.style.left = '23.5%';
        unit.style.left = '49.75%';
        course.style.left = '75.5%';
    }
    else if(text.id === 'course-title')
    {
        college.style.left = '-1%';
        major.style.left = '23.5%';
        unit.style.left = '47%';
        course.style.left = '74%';
    }
    else
    {
        return;
    }
}


function resetImagesCategory() {
    const divs = document.getElementsByClassName('menu-image');
    const college = document.getElementById('college-title');
    const major =  document.getElementById('major-title');
    const unit = document.getElementById('unit-title');
    const course = document.getElementById('course-title');
    
    for(const div of divs) {
        div.style.width = '25%';
    }
    
    college.style.left = '0%';
    major.style.left = '25%';
    unit.style.left = '50%';
    course.style.left = '75%';
}