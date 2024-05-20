const btn = document.querySelector('.btn')
const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')





btn.addEventListener('click', ()=>{
      image1.classList.toggle('hidden')
      image2.classList.toggle('hidden')

      if(btn.textContent.includes('ON')){
            btn.textContent = 'TURN OFF'
      }else{
            btn.textContent = 'TURN ON'
      }
})