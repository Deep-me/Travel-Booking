document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Mock flight data
    const flightData = [
        { name: "Sky High Airlines", number: "SKY63582", from: "Chennai", to: "Bengalore", departure: "04:00 AM", arrival: "10:00 AM", price: "215" },
        { name: "Southern Jet", number: "SJT29082", from: "Chennai", to: "Bengalore", departure: "09:30 AM", arrival: "11:30 AM", price: "300" },
        { name: "Aero Star", number: "AST16127", from: "Chennai", to: "Kochi", departure: "09:45 AM", arrival: "07:40 PM", price: "215" },
        { name: "Trichy Air", number: "TCA18189", from: "Trichy", to: "Coimbatore", departure: "01:00 AM", arrival: "12:30 PM", price: "85" },
        { name: "Palakkad Wings", number: "PKD42854", from: "Trichy", to: "Coimbatore", departure: "01:00 AM", arrival: "12:30 PM", price: "125" },
        { name: "Nagercoil Skyways", number: "NAG44809", from: "Trichy", to: "Coimbatore", departure: "11:00 AM", arrival: "12:30 PM", price: "151" },
        { name: "Kovai Flights", number: "KOV10010", from: "Trichy", to: "Coimbatore", departure: "02:00 AM", arrival: "12:35 PM", price: "150" },
        { name: "Ernad Aviation", number: "ERN73982", from: "Trichy", to: "Coimbatore", departure: "03:00 AM", arrival: "12:40 PM", price: "225" },
        { name: "Bangalore Airlink", number: "BGL49904", from: "Coimbatore", to: "Chennai", departure: "12:05 AM", arrival: "12:30 PM", price: "195" },
        { name: "Rameswaram Air", number: "RAM10958", from: "Coimbatore", to: "Chennai", departure: "11:00 AM", arrival: "12:30 PM", price: "55" },
        { name: "Kaveri Airlines", number: "KAV93457", from: "Coimbatore", to: "Trichy", departure: "01:30 AM", arrival: "12:35 PM", price: "75" },
        { name: "Cholan Air", number: "CHO28740", from: "Coimbatore", to: "Trichy", departure: "11:00 AM", arrival: "12:30 PM", price: "90" },
        { name: "Local Airlines", number: "LOC10983", from: "Coimbatore", to: "Tirupur", departure: "11:00 AM", arrival: "02:35 PM", price: "65" },
        { name: "Chennai FlyExpress", number: "CFE81832", from: "Trichy", to: "Chennai", departure: "11:00 AM", arrival: "06:30 PM", price: "105" },
        { name: "Regional Air", number: "REG30399", from: "Karur", to: "Trichy", departure: "11:00 AM", arrival: "12:30 PM", price: "40" },
    ];
    
    // Filter the flight data based on user input
    const results = flightData.filter(flight => 
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
    );

    // Display the results
    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(flight => {
            const flightItem = document.createElement('div');
            flightItem.classList.add('flight-item');
            flightItem.innerHTML = `
                <strong>flight Name:</strong> ${flight.name} <br>
                <strong>flight Number:</strong> ${flight.number} <br>
                <strong>From:</strong> ${flight.from} <br>
                <strong>To:</strong> ${flight.to} <br>
                <strong>Departure:</strong> ${flight.departure} <br>
                <strong>Arrival:</strong> ${flight.arrival} <br>
                <strong>Price:</strong> ${flight.price}
            `;
            flightResults.appendChild(flightItem);
        });
    } else {
        flightResults.innerHTML = '<p>No flights found for the selected route.</p>';
    }
});
