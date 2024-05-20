const btn = document.querySelector('.btn')
const image1 = document.querySelector('.image1')


let action = true


btn.addEventListener('click', ()=>{
      if(action){
            image1.src =  './img1.jpg'
            action = false
            btn.textContent = 'TURN OFF'
      }else{
            image1.src =  './img2.jpg'
            action = true
            btn.textContent = 'TURN ON'
      }
})


let text = document.querySelector('.text')

console.log(text.classList);