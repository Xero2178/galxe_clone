// const rightFloat = document.querySelector('.rfloat');
// const leftFloat = document.querySelector('.lfloat');
// const rightButton = document.querySelector('.rbutton');
// const leftButton = document.querySelector('.lbutton');

// rightFloat.addEventListener('mouseover', function(){
//     rightButton.classList.remove('bg-transparent');
//     rightButton.classList.add('bg-slate-200');
// });
// leftFloat.addEventListener('mouseover', function(){
//     leftButton.classList.remove('bg-transparent');
    // leftButton.classList.add('bg-slate-200');
// });
// rightFloat.addEventListener('mouseout', function(){
//     rightButton.classList.remove('bg-slate-200');
//     rightButton.classList.add('bg-transparent');
// });
// leftFloat.addEventListener('mouseout', function(){
//     leftButton.classList.remove('bg-slate-200');
//     leftButton.classList.add('bg-transparent');
// })

const initApp = () => {
    const hamburgerBtn = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    mobileMenu.addEventListener('click', toggleMenu)
    hamburgerBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
