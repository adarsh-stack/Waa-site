
const scriptURL = 'https://script.google.com/macros/s/AKfycbzzBoHyy6cYc0Y-hlNLRwIcZxuVSaM9K9cqwFXQgmqQFtdvommZdFLq7ny6rWNL8-9EdQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Thank You For Contacting ! We Will be soon reaching You....."
      setTimeout(function(){
          msg.innerHTML=""

      },5000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
  })
