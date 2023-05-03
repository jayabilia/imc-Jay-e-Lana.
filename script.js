btn = document.getElementById('bt')
altura = document.getElementById('altura')
peso = document.getElementById('peso')
genero = document.getElementById('gen-select')
msg = document.getElementById('span')
img = document.getElementById('img')

img.style.visibility = 'hidden'

btn.addEventListener('click', function(event){

    event.preventDefault()
    if (altura.value.length == 0 || peso.value.length == 0) {
        msg.innerHTML = 'não deixe espaços em branco!'
        msg.classList.Add = 'blank'
    } else {

        msg.classList.remove = 'blank'
        img.style.visibility = 'visible'
        imc = parseFloat((peso.value / (altura.value * altura.value)).toFixed(2))
        msg.innerHTML = `imc: ${imc}`

        if (genero.value == 'Male') {
            
            if (imc < 18.5) {
                img.src = './assets/1.png'
            } else if (imc >= 18.5 && imc < 25) {
                img.src = './assets/2.png'
            } else if (imc >= 25 && imc < 30) {
                img.src = './assets/3.png'
            } else if (imc >= 30 && imc < 40) {
                img.src = './assets/4.png'
            } else {
                img.src = './assets/5.png'
            }
        } else {
            if (imc < 18.5) {
                img.src = './assets/6.png'
            } else if (imc >= 18.5 && imc < 25) {
                img.src = './assets/7.png'
            } else if (imc >= 25 && imc < 30) {
                img.src = './assets/8.png'
            } else if (imc >= 30 && imc < 35) {
                img.src = './assets/9.png'
            } else if (imc >= 35 && imc < 40){
                img.src = './assets/10.png'
            } else {
                img.src = './assets/11.png'
            }
        }
    }
})