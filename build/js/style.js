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
    const mobileMenu = document.querySelector('#mobile-menu');
    const stickyNav = document.getElementById('stickyNav');
    const body = document.querySelector('#first');
    
    
    

    const toggleMenu = () => {        
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');   
        body.classList.toggle('overflow-y-hidden');
        
        
    }

    mobileMenu.addEventListener('click', toggleMenu)
    hamburgerBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const exploreSect1 = document.getElementById('exploreSect1');
const exploreDrop1 = document.getElementById('exploreDrop1');
const stickyNav = document.querySelector('#stickyNav');
const mobileMenu = document.querySelector('#mobile-menu');
const hamburgerBtn = document.querySelector('#hamburger-button');

hamburgerBtn.addEventListener('click', function(){
    stickyNav.classList.toggle('z-10') 
})


exploreSect1.addEventListener('mouseover', function(){
    exploreDrop1.classList.toggle('hidden')
})

exploreSect1.addEventListener('mouseout', function(){
    exploreDrop1.classList.toggle('hidden')
})

exploreDrop1.addEventListener('mouseover', function(){
    exploreDrop1.classList.remove('hidden')
    exploreDrop1.classList.add('block')
})
exploreDrop1.addEventListener('mouseout', function(){
    exploreDrop1.classList.add('hidden')
    exploreDrop1.classList.remove('block')
})
const exploreSect2 = document.getElementById('exploreSect2')
const exploreDrop2 = document.getElementById('exploreDrop2')


exploreSect2.addEventListener('mouseover', function(){
    exploreDrop2.classList.toggle('hidden')
})

exploreSect2.addEventListener('mouseout', function(){
    exploreDrop2.classList.toggle('hidden')
})

exploreDrop2.addEventListener('mouseover', function(){
    exploreDrop2.classList.remove('hidden')
    exploreDrop2.classList.add('block')
})
exploreDrop2.addEventListener('mouseout', function(){
    exploreDrop2.classList.add('hidden')
    exploreDrop2.classList.remove('block')
})
const exploreSect3 = document.getElementById('exploreSect3')
const exploreDrop3 = document.getElementById('exploreDrop3')





exploreSect3.addEventListener('mouseover', function(){
    exploreDrop3.classList.remove('hidden')
    exploreDrop3.classList.add('flex')
    stickyNav.classList.remove('z-10')
})

exploreSect3.addEventListener('mouseout', function(){
    exploreDrop3.classList.toggle('hidden')
    stickyNav.classList.add('z-10')
})

exploreDrop3.addEventListener('mouseover', function(){
    exploreDrop3.classList.remove('hidden')
    exploreDrop3.classList.add('flex')
    stickyNav.classList.remove('z-10')
   
})
exploreDrop3.addEventListener('mouseout', function(){
    exploreDrop3.classList.add('hidden')
    exploreDrop3.classList.remove('flex')
    stickyNav.classList.add('z-10')
})
    const dropDown1 = document.getElementById('dropDown1');
    const dropUp1 = document.getElementById('dropUp1');
    const mainDrop1 = document.getElementById('mainDrop1');
    const dropDown2 = document.getElementById('dropDown2');
    const dropUp2 = document.getElementById('dropUp2');
    const mainDrop2 = document.getElementById('mainDrop2');

    dropDown1.addEventListener('click', function(){
    dropUp1.classList.toggle('hidden');
    dropUp1.classList.toggle('flex')
    mainDrop1.classList.toggle('border-b')
})
    dropDown2.addEventListener('click', function(){
    dropUp2.classList.toggle('hidden');
    dropUp2.classList.toggle('flex')
    mainDrop2.classList.toggle('border-b')
})
