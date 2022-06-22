const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');

menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block';
})

const faqs = document.querySelectorAll('.faqs');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')
    })

    //changing icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.textContent === 'add'){
        icon.textContent = 'remove'
    }
    else{
        icon.textContent = 'add'
    }
    
})

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})