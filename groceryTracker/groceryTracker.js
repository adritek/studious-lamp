function calculateTotal(){
    let g1 = parseFloat(document.getElementById("grocery1").value);
    let g2 = parseFloat(document.getElementById("grocery2").value);
    let g3 = parseFloat(document.getElementById("grocery3").value);
    
    let addTotal = (g1 + g2 + g3).toFixed(2);

    document.getElementById("result").innerText = `Your total is: $${addTotal}`;
}