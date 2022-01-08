let tipBtns = document.querySelectorAll('.selectTip button')
let tipPrecente;
tipBtns.forEach(button => {
    button.addEventListener('click', function() {
        tipBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        tipPrecente = this.value
    })
})



// Calculate total


let price = document.getElementById('billNumber').value

if(price != "") {
    console.log(price)
}