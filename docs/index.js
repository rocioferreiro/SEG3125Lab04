var inputService = document.getElementById('inputService');
var inputHairLength = document.getElementById('inputHairLength');
var inputs = document.getElementsByClassName('form-control');
inputService.addEventListener('change', calculatePrice);
inputHairLength.addEventListener('change', calculatePrice);

for (var i = 0; i < inputs.length; i++){
    if (i!=4 && i!=5){
    inputs[i].addEventListener('change', checkIfReady);}
}

/****Remove Navbar on Scroll Down****/
let navbar = document.querySelector('.scrollHide');
let previousPositionY = 0;
window.addEventListener('scroll', function() {
  let currentPositionY = window.scrollY;
  if(currentPositionY < previousPositionY){
    navbar.classList.remove('scrolled-down');
    navbar.classList.add('scrolled-up');
  } else {
    navbar.classList.remove('scrolled-up');
    navbar.classList.add('scrolled-down');
  }
  previousPositionY = currentPositionY;
});
/************************************/
function checkIfReady(){
    for (var i = 0; i < inputs.length; i++){
        
        if (inputs[i].value==""){
            document.getElementById("confirm-booking").disabled = true;
            return;
        }
        
    }
    document.getElementById("confirm-booking").disabled = false;
}
function calculatePrice(){
    if (inputService.value != "Service" && inputHairLength.value != "Hair Length"){
    var service = document.getElementById('inputService').value;
    var hairLength = document.getElementById('inputHairLength').value;
    var subtotal = 0;
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
    var hst = roundToHundredths(subtotal*0.05);
    var gst = roundToHundredths((hst+subtotal)*0.08);
    var total = roundToHundredths((subtotal+hst+gst));

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
    document.getElementById("subtotal").innerText = "";
    document.getElementById("hst").innerText = "";
    document.getElementById("gst").innerText = "";
    document.getElementById("total").innerText = "";
    document.getElementById("payment-disclaimer").innerHTML = "";
}

}
function roundToHundredths( number ){
    var result = Math.round(100*number)/100; 
    return result;
}
