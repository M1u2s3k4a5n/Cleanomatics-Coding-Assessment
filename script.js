document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');

  if (!calculateBtn) {
    console.error('Calculate button not found.');
    return;
  }

  calculateBtn.addEventListener('click', function() {
    const distanceInput = document.getElementById('distance');
    const selectedVehicle = document.getElementById('vehicle');

    if (!distanceInput || !selectedVehicle) {
      console.error('Required elements not found.');
      return;
    }

    const distance = parseFloat(distanceInput.value);
    const vehicleName = selectedVehicle.value;

    if (isNaN(distance)) {
      console.error('Invalid distance input.');
      alert('Please enter a valid distance.');
      return;
    }

    const vehicleData = {
      Alto: { topSpeed: 140, efficiency: 22.05, tankCapacity: 35, maxRange: 771.75 },
      i20: { topSpeed: 180, efficiency: 20.35, tankCapacity: 37, maxRange: 753.05 },
      Nexon: { topSpeed: 180, efficiency: 17.57, tankCapacity: 44, maxRange: 772.68 },
      City: { topSpeed: 180, efficiency: 17.8, tankCapacity: 40, maxRange: 712.00 },
      Thar: { topSpeed: 155, efficiency: 15.2, tankCapacity: 57, maxRange: 866.40 },
      Innova: { topSpeed: 179, efficiency: 11.25, tankCapacity: 55, maxRange: 618.75 },
      Seltos: { topSpeed: 170, efficiency: 16.8, tankCapacity: 50, maxRange: 840.00 },
      Kwid: { topSpeed: 150, efficiency: 22.3, tankCapacity: 28, maxRange: 624.40 },
      EcoSport: { topSpeed: 182, efficiency: 15.9, tankCapacity: 52, maxRange: 826.80 },
      Tiago: { topSpeed: 150, efficiency: 23.84, tankCapacity: 35, maxRange: 834.40 }
    };

    const vehicle = vehicleData[vehicleName];
    if (!vehicle) {
      console.error('Selected vehicle data not found.');
      alert('Invalid vehicle selection.');
      return;
    }

    const time = calculateTime(distance, vehicle.topSpeed);
    const fuelConsumption = calculateFuelConsumption(distance, vehicle.efficiency);

    displayResults(distance, vehicleName, time, fuelConsumption, vehicle.tankCapacity);
  });

  function calculateTime(distance, topSpeed) {
    return distance / (topSpeed / 60);
  }

  function calculateFuelConsumption(distance, efficiency) {
    return distance / efficiency;
  }

  function displayResults(distance, vehicleName, time, fuelConsumption, tankCapacity) {
    const resultElement = document.getElementById('result');
    const fuelElement = document.getElementById('fuel-consumption');

    if (!resultElement || !fuelElement) {
      console.error('Result elements not found.');
      return;
    }

    let resultText = `Time to travel ${distance} km with ${vehicleName}: ${time.toFixed(2)} hours.`;
    let fuelText = `Fuel consumption: ${fuelConsumption.toFixed(2)} liters.`;

    if (fuelConsumption > tankCapacity) {
      resultText += " Out of range!";
      fuelText = "";
    }

    resultElement.textContent = resultText;
    fuelElement.textContent = fuelText;
  }
});
