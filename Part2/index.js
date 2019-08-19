let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')
console.log(idInput)
console.log(colorInput)


function setCard() {
    let card = document.getElementById(idInput.value)
    console.log(card)
}

function setColor(){
    let card = document.getElementById(idInput.value)
    
card.style.color = document.getElementById('colorInput').value

console.log(document.getElementById('colorInput').value)
console.log(card.style)

}

function reset (){
    let card = document.getElementById(idInput.value)
    console.log(idInput.value)
    
    
    card.style.color = ''
    console.dir(card.style)
    
}


