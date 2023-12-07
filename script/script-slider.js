let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

function nextSlide() {
    const step = window.innerWidth < 820 ? 1 : 2;
    currentIndex += step;
    if (currentIndex > totalCards - 1) {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    const step = window.innerWidth < 820 ? 1 : 2;
    currentIndex -= step;
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    }
    updateSlider();
}


function updateSlider() {
    if (window.innerWidth < 600){
        document.querySelector('.slider').style.transform = `translateX(${-currentIndex * (305   +15)}px)`;
    }
    else if(window.innerWidth < 820){
        document.querySelector('.slider').style.transform = `translateX(${-currentIndex * (400 + 30)}px)`;
    }
    else{
        document.querySelector('.slider').style.transform = `translateX(${-currentIndex * (500 + 10)}px)`;
    }
}

