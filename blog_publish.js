const scriptURL = 'https://script.google.com/macros/s/AKfycbxeBkijkFS4fiPXNAHTzDs_UAW4Z8Y4V9skIlepZV7pKGWPBS_9eFfxC6s1w-_TGtJ-Jw/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Thank You For Sharig Your Veiw, it will be shortly listed on Site !"
      setTimeout(function(){
          msg.innerHTML=""

      },5000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
  })
