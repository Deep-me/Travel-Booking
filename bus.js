document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Mock bus data
    const busData = [
        { from: "Karur", to: "Chennai", departure: "01:00 PM", arrival: "10:00 PM" },
        { from: "Karur", to: "Trichy", departure: "06:00 AM", arrival: "08:00 AM" },
        { from: "Karur", to: "Trichy", departure: "09:45 PM", arrival: "11:15 PM" },
        { from: "Karur", to: "Coimbatore", departure: "01:00 pM", arrival: "04:00 PM" },
        { from: "Chennai", to: "Trichy", departure: "09:00 AM", arrival: "02:00 AM" },
        { from: "Chennai", to: "Trichy", departure: "09:00 PM", arrival: "02:00 AM" },
        { from: "Chennai", to: "Trichy", departure: "01:00 PM", arrival: "06:00 PM" },
        { from: "Trichy", to: "Coimbatore", departure: "09:00 AM", arrival: "02:00 PM" },
        { from: "Trichy", to: "Coimbatore", departure: "09:30 AM", arrival: "02:30 PM" },
        { from: "Trichy", to: "Coimbatore", departure: "10:00 AM", arrival: "03:00 PM" },
        { from: "Trichy", to: "Coimbatore", departure: "12:00 PM", arrival: "05:00 PM" },
        // Add more mock data as needed
    ];

    // Filter the bus data based on user input
    const results = busData.filter(bus => 
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );

    // Display the results
    const busResults = document.getElementById('busResults');
    busResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(bus => {
            const busItem = document.createElement('div');
            busItem.classList.add('bus-item');
            busItem.innerHTML = `
                <strong>From:</strong> ${bus.from} <br>
                <strong>To:</strong> ${bus.to} <br>
                <strong>Departure:</strong> ${bus.departure} <br>
                <strong>Arrival:</strong> ${bus.arrival}
            `;
            busResults.appendChild(busItem);
        });
    } else {
        busResults.innerHTML = '<p>No buses found for the selected route.</p>';
    }
});
