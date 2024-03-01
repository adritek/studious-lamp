let count = 0; // Initialise count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
}

  function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue(){
    if (count === 10){
        alert("You have 10 followers!");
    } else if (count === 20){
        alert("You have 20 followers!");
    }
}