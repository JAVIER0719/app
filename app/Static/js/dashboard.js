const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slider = document.getElementById('slider')

prev.addEventListener('click', ()=>{
    slider.scrollLeft -=300
})

next.addEventListener('click', ()=>{
    slider.scrollLeft +=300
})

