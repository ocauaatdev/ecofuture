const link = document.querySelectorAll('.link');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let cSlide = 0;

function hideSlider(){
    link.forEach(item=> item.classList.remove('on'));
}
function showSlider(){
    link[cSlide].classList.add('on');
}

function nextSlide(){
    hideSlider()
    if(cSlide === link.length -1){
        cSlide = 0
    }else{
        cSlide++
    }
    showSlider()
}

function prevSlide(){
    hideSlider()
    if(cSlide ===  0){
        cSlide = link.length -1
    }else{
        cSlide--
    }
    showSlider()
}
nxtBtn.addEventListener('click', nextSlide)
prvBtn.addEventListener('click', prevSlide)


setInterval(nextSlide, 7000);