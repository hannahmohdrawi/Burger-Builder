let radioButtons = document.getElementsByClassName('radioBtn');
let radios = document.querySelectorAll('input[type="radio"]');

function reset(){
    let resetBtn = document.getElementsByClassName('resetBtn');
    radios.forEach((radio => {
        radio.checked = false;
    }))
    let order = [];
    document.getElementById('order-info').textContent = order;

    submittedOrder.textContent = "";
}

const submittedOrder = document.getElementById('order-submitted');

/*
function showSubmitMessage(){
    let submitMessage = document.getElementsByClassName("submitMessage");
    submitMessage.classList.add("submitMessage-open");
    
}
*/


function submitOrder(){
    let order = [];
    radios.forEach(radio => {
        if (radio.checked){
            order.push(radio.nextElementSibling.textContent)
        }
    });
    document.getElementById('order-info').textContent = order;
    submittedOrder.textContent = "Your order has been submitted! 🍔 "

    toggleResults();
}

function toggleResults(){
    let burgerSelectorContainer=document.getElementsByClassName(".burger-builder-container")
    let resultsContainer=document.getElementsByClassName(".order-results");
    
    
}

console.log(toggleResults())

//Function to show each burger image item
function displayBurger(){
    let burgerContainer = document.getElementsByClassName("burger-image");
    
}

function displayCustomItems(){
    let customItemsButton = document.getElementsByClassName("customRadioButton");
    let customTextBox = document.getElementsByClassName("customTexbox")
    if(customItemsButton.checked){
        customTextBox.classList.add("displayTextbox");

    }
}

