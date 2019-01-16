
function calculateConsumption(){
    var distance = document.getElementById('distance').value;
        // distance in kilometers
    var fuelConsum = document.getElementById('fuelConsumption').value;
        // average fuel consumption
    var costPerL = document.getElementById('costper').value;
        // cost per 1l
    var consumed =  fuelConsum / 100 * distance;
        // fuel needed
    document.getElementById('consumption').innerHTML = `Costs of fuel: ${(consumed*costPerL)} zł`;
}
calculateConsumption();