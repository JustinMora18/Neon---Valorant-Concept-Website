const openBtn1 = document.getElementById('openBtn1')
const closeBtn1 = document.getElementById('closeBtn1')
const modal1 = document.getElementById('modal1')

openBtn1.addEventListener('click', ()=> {
    modal1.classList.add('open');
})


closeBtn1.addEventListener('click', ()=> {
    modal1.classList.remove('open');
})