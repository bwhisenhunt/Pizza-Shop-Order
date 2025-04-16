// Global variables
var crust = document.getElementById('crust');
var sauce = document.getElementById('sauce');
var toppings = [];
var formButton = document.getElementById('btn');

// Event listener
formButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Reset previous order
    toppings = [];
    document.getElementById('total').innerHTML = '$';

    // Get topping values
    var topping1 = document.getElementById('topping1').value;
    var topping2 = document.getElementById('topping2').value;
    var topping3 = document.getElementById('topping3').value;

    // Push toppings to array
    toppings.push(topping1, topping2, topping3);

    // Calculate total
    calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // Create order string
    let orderString = `${crust.value} pizza with ${sauce.value}`;
    let toppingString = "Toppings: ";

    // Process toppings
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i] !== "") {
            total += toppingCost;
            toppingString += `${toppingArray[i]} `;
        }
    }

    // Add base cost
    total += baseCost;

    // Update DOM
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('pizzaOrder').innerHTML = orderString;
    document.getElementById('toppings').innerHTML = toppingString;
}