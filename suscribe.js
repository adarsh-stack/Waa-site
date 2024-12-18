  const scriptURL = 'https://script.google.com/macros/s/AKfycbxgW2Y2azalzfxdTV257QRB5hTD8-4wckHlH1HPGEVSY2-iL-MLSDaFOSLHIEk8UX7SwA/exec'
  const form = document.forms['subscirbe-form']
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
