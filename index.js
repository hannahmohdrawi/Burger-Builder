let radioButtons = document.getElementsByClassName('radioBtn');
let radios = document.querySelectorAll('input[type="radio"]');

function reset(){
    let resetBtn = document.getElementsByClassName('resetBtn');
    radios.forEach((radio => {
        radio.checked = false;
    }))
    let order = [];
    document.getElementById('order-info').textContent = order;
}

function submitOrder(){
    let order = [];
    radios.forEach(radio => {
        if (radio.checked){
            order.push(radio.nextElementSibling.textContent)
        }
    });
    document.getElementById('order-info').textContent = order;
}


