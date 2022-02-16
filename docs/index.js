let inputService = document.getElementById('inputService');
let inputHairLength = document.getElementById('inputHairLength');
let inputs = document.getElementsByClassName('form-control');
let form = document.getElementById('modal-form');
let closeToastEl = document.getElementById('close-toast');
inputService.addEventListener('change', calculatePrice);
inputHairLength.addEventListener('change', calculatePrice);
form.addEventListener('submit', openToast);
closeToastEl.addEventListener('click', closeToast);


for (let i = 0; i < inputs.length; i++){
    if (i!==4 && i!==5){
    inputs[i].addEventListener('change', checkIfReady);}
}

function openToast() {
    $('#success-toast').toast('show');
    document.getElementById('exampleModal').classList.remove("show");
    document.getElementById('exampleModal').style.display = "none";
    document.getElementsByClassName('modal-backdrop')[0].style.display = "none";
    document.getElementsByClassName('modal-backdrop')[0].classList.remove("show");
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    inputService.value = "Service";
    inputHairLength.value = "Hair Length";
    emptyCalculations();
    return false;
}

function emptyCalculations() {
    document.getElementById("subtotal").innerText = "";
    document.getElementById("hst").innerText = "";
    document.getElementById("gst").innerText = "";
    document.getElementById("total").innerText = "";
    document.getElementById("payment-disclaimer").innerHTML = "";
}

function closeToast() {
    //document.getElementById("success-toast").classList.remove("show");
    $('#success-toast').toast('hide');
}

function checkIfReady(){
    for (let i = 0; i < inputs.length; i++){
        
        if (inputs[i].value===""){
            document.getElementById("confirm-booking").disabled = true;
            return;
        }
        
    }
    document.getElementById("confirm-booking").disabled = false;
}

function calculatePrice(){
    if (inputService.value !== "Service" && inputHairLength.value !== "Hair Length"){
    let service = document.getElementById('inputService').value;
    let hairLength = document.getElementById('inputHairLength').value;
    let subtotal = 0;
    switch(service){
        case "Wash, Cut & Style":
            switch(hairLength){
                case "Short":
                    subtotal = 53.00;
                    break;
                case "Medium":
                    subtotal = 55.00;
                    break;
                case "Long":
                    subtotal = 57.00;
                    break;
            }

            break;
        case "Shampoo & Blowdry":
            switch(hairLength){
                case "Short":
                    subtotal = 39.00;
                    break;
                case "Medium":
                    subtotal = 43.00;
                    break;
                case "Long":
                    subtotal = 48.00;
                    break;
            }
            break;
        case "Full Color":
            switch(hairLength){
                case "Short":
                    subtotal = 81.00;
                    break;
                case "Medium":
                    subtotal = 87.00;
                    break;
                case "Long":
                    subtotal = 95.00;
                    break;
            }
            break;
    }
    subtotal = roundToHundredths(subtotal);
    let hst = roundToHundredths(subtotal*0.05);
    let gst = roundToHundredths((hst+subtotal)*0.08);
    let total = roundToHundredths((subtotal+hst+gst));

    document.getElementById("subtotal").innerText = "$"+subtotal+".00";
    document.getElementById("hst").innerText = "$"+hst;
    document.getElementById("gst").innerText = "$"+gst;
    document.getElementById("total").innerText = "$"+total;
    document.getElementById("payment-disclaimer").innerHTML = 
    `<i>Accepted payments in-salon: Cash, Interact, Credit<br>
    No online payments accepted at this time
    </i>`;
}
else{
    emptyCalculations();
}

}
function roundToHundredths( number ){
    return Math.round(100*number)/100;
}
