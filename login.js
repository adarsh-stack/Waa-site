const scriptURL = 'https://script.google.com/macros/s/AKfycbzHLBza034KiJj_5qp9AHlqsluOUwAlPaGUsm-LJJalcmpUvxl38a1CnZbdSRxQidim/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Thank You For Subscribing !"
      setTimeout(function(){
          msg.innerHTML=""

      },5000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
  })
