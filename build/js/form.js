const chooseCont = document.getElementById('chooseCont');
const changeImg = document.getElementById('changeImg')
const register = document.getElementById('register');
const nigeria = document.getElementById('nigeria');
const ghana = document.getElementById('ghana');
const bolivia = document.getElementById('bolivia');
const australia = document.getElementById('australia');
const croatia = document.getElementById('croatia');
const qatar = document.getElementById('qatar');
const israel = document.getElementById('israel');
const ireland = document.getElementById('ireland');
const portugal = document.getElementById('portugal');
const uruguay = document.getElementById('uruguay');
const romania = document.getElementById('romania');
const denmark = document.getElementById('denmark');
const south = document.getElementById('south-africa');
const belgium = document.getElementById('belgium');
const philippines = document.getElementById('philippines');
const registered = document.getElementById('registered')
const button = document.getElementById('button')


register.addEventListener('click', ()=>{
    chooseCont.classList.remove('hidden')
})
nigeria.addEventListener('click', ()=>{
    const value = nigeria.children[1].children[1].innerText
    const image = nigeria.children[0].src
    register.innerText = value
    chooseCont.classList.add('hidden')
})
ghana.addEventListener('click', ()=>{
    const value = ghana.children[1].children[1].innerText;
    const image = ghana.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
bolivia.addEventListener('click', ()=>{
    const value = bolivia.children[1].children[1].innerText;
    const image = bolivia.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
australia.addEventListener('click', ()=>{
    const value = australia.children[1].children[1].innerText;
    const image = australia.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
croatia.addEventListener('click', ()=>{
    const value = croatia.children[1].children[1].innerText;
    const image = croatia.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
qatar.addEventListener('click', ()=>{
    const value = qatar.children[1].children[1].innerText;
    const image = qatar.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
israel.addEventListener('click', ()=>{
    const value = israel.children[1].children[1].innerText;
    const image = israel.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
ireland.addEventListener('click', ()=>{
    const value = ireland.children[1].children[1].innerText;
    const image = ireland.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
portugal.addEventListener('click', ()=>{
    const value = portugal.children[1].children[1].innerText;
    const image = portugal.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
ghana.addEventListener('click', ()=>{
    const value = ghana.children[1].children[1].innerText;
    const image = ghana.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
romania.addEventListener('click', ()=>{
    const value = romania.children[1].children[1].innerText;
    const image = romania.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
belgium.addEventListener('click', ()=>{
    const value = belgium.children[1].children[1].innerText;
    const image = belgium.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
denmark.addEventListener('click', ()=>{
    const value = denmark.children[1].children[1].innerText;
    const image = denmark.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
south.addEventListener('click', ()=>{
    const value = south.children[1].children[1].innerText;
    const image = south.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
philippines.addEventListener('click', ()=>{
    const value = philippines.children[1].children[1].innerText;
    const image = philippines.children[0].children[0].src
    register.innerText = value
    changeImg.src = image;
    
    chooseCont.classList.add('hidden')
})
button.addEventListener('click', ()=>{
    setTimeout(()=>{
        registered.classList.remove('hidden')
        registered.classList.add('flex')
        console.log('rouf')
        setTimeout(()=>{
            registered.classList.remove('flex')
        registered.classList.add('hidden')
        console.log('rouf')
        location.reload()
        },2000)
    }, 2000)
    console.log('tyieqw')
})
