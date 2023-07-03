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


const initApp = (e) => {
    
    const hamburgerBtn = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const stickyNav = document.getElementById('stickyNav');
    const body = document.querySelector('body');
    const credentials = document.querySelector('#credentials')
    
    
    

    const toggleMenu = () => {        
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');   
        body.classList.toggle('overflow-y-hidden');
        credentials.classList.toggle('z-[7]')
        
    }

    // mobileMenu.addEventListener('click', toggleMenu)
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

    mainDrop1.addEventListener('click', function(){
    
    dropUp1.classList.toggle('hidden');
    dropUp1.classList.toggle('flex')
    mainDrop1.classList.toggle('border-b')
})
    mainDrop2.addEventListener('click', function(){
    
    dropUp2.classList.toggle('hidden');
    dropUp2.classList.toggle('flex')
    mainDrop2.classList.toggle('border-b')
})


  const connectBtn1 = document.getElementById('connectBtn1')
const connectBtn2 = document.getElementById('connectBtn2')
const connectBtn3 = document.getElementById('connectBtn3')
const connectBtn4 = document.getElementById('connectBtn4')
const connectBtn5 = document.getElementById('connectBtn5')
const connectBtn6 = document.getElementById('connectBtn6')
const connectBtn7 = document.getElementById('connectBtn7')


const connectWallet = document.getElementById("connectWallet")
const opaqueBody = document.querySelector('#opaqueBody')
const times = document.getElementById('times')
const walletCon = document.getElementById('walletCon')
const body = document.querySelector('#first');

connectBtn1.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  body.classList.toggle('overflow-y-hidden')
 
})
connectBtn2.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  body.classList.toggle('overflow-y-hidden')
 
})
connectBtn3.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  body.classList.toggle('overflow-y-hidden')
 
})
connectBtn4.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  body.classList.add('overflow-y-hidden')
 
})
connectBtn5.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  body.classList.add('overflow-y-hidden')
 
})
connectBtn6.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  
  body.classList.add('overflow-y-hidden')
 
})
connectBtn7.addEventListener("click", function(){
  console.log('uwvycilry')
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  if(walletCon.classList.contains('flex')){
    walletCon.classList.remove('flex')
    walletCon.classList.add('hidden')
  }else{
    walletCon.classList.add('flex')
    walletCon.classList.remove('hidden')
  }
  if(!body.classList.contains('overflow-y-hidden')){
    body.classList.add('overflow-y-hidden')
  }

  
 
})


times.addEventListener('click', function(){
  connectWallet.classList.toggle('hidden')
  opaqueBody.classList.toggle('hidden')
  times.classList.toggle('hidden')
  
  if(walletCon.classList.contains('hidden')){
    walletCon.classList.remove('hidden')
    walletCon.classList.add('flex')
  }else{
    walletCon.classList.add('hidden')
    walletCon.classList.remove('flex')
  }
    if(mobileMenu.classList.contains('hidden')){
      body.classList.remove('overflow-y-hidden')
    }else{
      body.classList.add('overflow-y-hidden')
    }
})



var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: {
      delay: 6000,
      speed: 500
  },
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     dynamicBullets: 'true',
  // },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },


  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
console.log("Bin")

{/* <section
        class="mx-auto flex max-w-full items-center justify-center"
      >
        <div class="relative w-full border">
          <div class="flex">
            <div class="lfloat absolute h-80 w-1/2"></div>
            <div class="rfloat absolute left-1/2 h-80 w-1/2"></div>
          </div>
          <div
            class="lbutton absolute top-1/3 h-16 w-16 rounded-full bg-transparent"
          ></div>
          <div
            class="rbutton absolute top-1/3 left-[96%] h-16 w-16 rounded-full bg-transparent"
          ></div>
          <div class="mx-0 flex space-x-4 md:mx-8 xl:space-x-8 border">
            <div class="md:w-88 mb-9 w-full xl:w-full border">
              <div class="bg-gray-950 rounded-2xl border border-gray-700 p-3">
                <img
                  src="./img/rubic icon.webp"
                  alt=""
                  class="h-72 w-full rounded-t-2xl object-cover md:h-52 lg:h-40 xl:h-60"
                />
                <h2 class="mt-2 text-left text-2xl font-thin">Rubic</h2>
                <p class="text-md mt-2 truncate text-left font-bold xl:text-lg">
                  Swap to Earn: The Innovative Way
                </p>
              </div>
            </div>
            <div class="md:w-88 hidden w-full lg:block xl:w-full">
              <div class="bg-gray-950 rounded-2xl border border-gray-700 p-3">
                <img
                  src="./img/1678799057122-Frame 1171274652.webp"
                  alt=""
                  class="h-72 w-full rounded-t-2xl object-cover md:h-52 lg:h-40 xl:h-60"
                />
                <h2 class="mt-2 text-left text-2xl font-thin">Galxe</h2>
                <p class="text-md mt-2 truncate text-left font-bold xl:text-lg">
                  Galxe Community Missions- Season 2
                </p>
              </div>
            </div>
            <div class="md:w-88 hidden w-full md:block xl:w-full">
              <div class="bg-gray-950 rounded-2xl border border-gray-700 p-3">
                <img
                  src="./img/1679625102518-image (3).webp"
                  alt=""
                  class="h-72 w-full rounded-t-2xl object-cover md:h-52 lg:h-40 xl:h-60"
                />
                <h2 class="mt-2 text-left text-2xl font-thin">SPACE ID</h2>
                <p class="text-md mt-2 truncate text-left font-bold xl:text-lg">
                  SPACE ID Voyage season-2 Calling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
