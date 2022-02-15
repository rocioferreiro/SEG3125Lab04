var saveChanges = document.getElementById('save-changes');
saveChanges.addEventListener('click', calculatePrice);
document.getElementById('inputService').addEventListener('change', calculatePrice);
document.getElementById('inputHairLength').addEventListener('change', calculatePrice);
function calculatePrice(){
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

}
function roundToHundredths( number ){
    var result = Math.round(100*number)/100; 
    return result;
}