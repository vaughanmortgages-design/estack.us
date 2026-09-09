const button=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});}
