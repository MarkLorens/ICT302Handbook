function hoverImage(element) {
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


function resetImages() {
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

function clickImage(element) {
    const images = document.querySelector('.menu-image');

    images.style.width = "100%";
}