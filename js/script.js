const form_section = document.querySelector('#form-section')

form_section.addEventListener('submit', function(e){
  e.preventDefault()

  const inputCpf = document.forms['form-section']['cpf']
  const spanCpf = inputCpf.nextSibling.nextSibling

  const inputEmail = document.forms['form-section']['email']
  const spanEmail = inputEmail.nextSibling.nextSibling

  const inputName = document.forms['form-section']['name']
  const span = inputName.nextSibling.nextSibling

  const check_gender = document.forms['form-section']['gender']

  const btn_form= document.querySelector('#btn-section')

  const radio_male = document.querySelector('#male')
  const radio_female = document.querySelector('#female')


  if(!inputName.value || !inputEmail.value || !inputCpf.value || !check_gender.value){

    btn_form.classList.remove('button-done')
    btn_form.textContent = 'Enviar'
    span.classList.add('error')
    span.innerHTML = 'Preencher todos os campos'
  }
  else{
    span.classList.remove('error')
    span.innerHTML = ''

    btn_form.classList.add('button-done')
    btn_form.textContent = 'Dados Enviados! =)'

    inputName.value =''
    inputEmail.value = ''
    inputCpf.value = ''
    radio_female.checked = false
    radio_male.checked = false
    
  }
})


fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
.then(res => res.json())
.then(data => {
 
    const list = data.products
  
    const container = document.querySelector('#wrapper-container')

    list.map((item)=>{

    const priceFixed = item.price.toFixed(2)
    const oldPriceFixed = item.oldPrice.toFixed(2)
    const pricexFixed = item.installments.value.toFixed(2)


      container.innerHTML +=
       `<div class="wrapper-products">
          <img id="image" src="${item.image}" alt="Products">
            <div id="details">
              <span id="name-product">${item.name}</span>

              <span id="description-product">${item.description}</span>

              <span id="old-price"> De: ${oldPriceFixed}</span>

              <span id="price"> Por: ${priceFixed}</span>

              <span id="pricex">ou ${item.installments.count}x de ${pricexFixed}</span>

              <button id="btnBuy" class="buy">Comprar</button>
            </div>
        </div>
        `
    })
})

const btn_plus = document.querySelector('#btn-plus')
btn_plus.addEventListener('click', function(){

  fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2')
  .then(res => res.json())
  .then(data=>{

    const list = data.products

    const container = document.querySelector('#wrapper-container2')

    list.map(item =>{

      const priceFixed = item.price.toFixed(2)
      const oldPriceFixed = item.oldPrice.toFixed(2)
      const pricexFixed = item.installments.value.toFixed(2)

      container.innerHTML +=

      `<div class="wrapper-products">
      <img id="image" src="${item.image}" alt="Products">
        <div id="details">
          <span id="name-product">${item.name}</span>

          <span id="description-product">${item.description}</span>

          <span id="old-price"> De: ${oldPriceFixed}</span>

          <span id="price"> Por: ${priceFixed}</span>

          <span id="pricex">ou ${item.installments.count}x de ${pricexFixed}</span>

          <button id="btnBuy" class="buy">Comprar</button>
        </div>
    </div>
    `
        
        container.classList.add('visible')
    })

})
  btn_plus.setAttribute('disabled', '')
  btn_plus.textContent = 'Consulta realizada!'
})


const btn_footer = document.querySelector('#btn-footer')
const friend = document.forms['form-footer']['friend']
const email = document.forms['form-footer']['email']
const span_footer = document.querySelector('#span-footer')


btn_footer.addEventListener('click', function(e){
  e.preventDefault()

  if(!friend.value || !email.value){

    btn_footer.classList.remove('button-done')
    btn_footer.textContent = 'Enviar Agora'
    span_footer.classList.add('error-footer')
    span_footer.textContent = 'Preencher todos os campos'
  }else{

    span_footer.classList.remove('error-footer')
    friend.value = ''
    email.value = ''

    btn_footer.classList.add('button-done')
    btn_footer.textContent = 'Dados Enviados =D'
    span_footer.textContent = ''
  }


})