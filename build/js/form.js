const snakeCont = document.getElementById('container')
const snakeHead = document.getElementById('snakeHead')
const button = document.querySelector('button')

button.addEventListener('click', async()=>{

   const newBody = await document.createElement('div');
   newBody.className = await 'w-20 h-20 bg-green-400 rounded-r-full';
   await snakeCont.append(newBody);
})