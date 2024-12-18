const scriptURL = 'https://script.google.com/macros/s/AKfycbymHfJq7Q-z0fMkDk6DghEkpr-Qk1i6R8fj8sFp0b4ngUa8hHDk603D_jPq5Gs_41xw/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Thank You For Sharig Your veiw, it will be shortly listed on Site !"
      setTimeout(function(){
          msg.innerHTML=""

      },5000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
  })
