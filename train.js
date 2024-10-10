document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Mock train data
    const trainData = [
        { name: "Chemmozhi Express", number: "63582", from: "Chennai", to: "Bengalore", departure: "04:00 AM", arrival: "10:00 AM", price: "215" },
        { name: "Puducherry Chalukya Express", number: "29082", from: "Chennai", to: "Bengalore", departure: "09:30 AM", arrival: "11:30 AM", price: "300" },
        { name: "Guruvayur Express", number: "16127", from: "Chennai", to: "Kochi", departure: "09:45 AM", arrival: "07:40 PM", price: "215" },
        { name: "Ernakulam Jn. Express", number: "18189 ", from: "Trichy", to: "Coimbatore", departure: "01:00 AM", arrival: "12:30 PM", price: "85" },
        { name: "Palakkad Superfast Express", number: "42854", from: "Trichy", to: "Coimbatore", departure: "01:00 AM", arrival: "12:30 PM", price: "125" },
        { name: "Nagercoil Passenger", number: "44809", from: "Trichy", to: "Coimbatore", departure: "11:00 AM", arrival: "12:30 PM", price: "151" },
        { name: "Kovai Express", number: "10010", from: "Trichy", to: "Coimbatore", departure: "02:00 AM", arrival: "12:35 PM", price: "150" },
        { name: "Ernad Express", number: "73982", from: "Trichy", to: "Coimbatore", departure: "03:00 AM", arrival: "12:40 PM", price: "225" },
        { name: "Bangalore Double Decker Express", number: "49904", from: "Coimbatore", to: "Chennai", departure: "12:05 AM", arrival: "12:30 PM", price: "195" },
        { name: "Rameswaram Bhubaneswar Express", number: "10958", from: "Coimbatore", to: "Chennai", departure: "11:00 AM", arrival: "12:30 PM", price: "55" },
        { name: "Kaveri Express", number: "93457", from: "Coimbatore", to: "Trichy", departure: "01:30 AM", arrival: "12:35 PM", price: "75" },
        { name: "Cholan Express", number: "28740", from: "Coimbatore", to: "Trichy", departure: "11:00 AM", arrival: "12:30 PM", price: "90" },
        { name: "Local Train", number: "10983", from: "Coimbatore", to: "Tirupur", departure: "11:00 AM", arrival: "02:35 PM", price: "65" },
        { name: "Chennai Egmore Express", number: "81832", from: "Trichy", to: "Chennai", departure: "11:00 AM", arrival: "06:30 PM", price: "105" },
        { name: "Local Train", number: "30399", from: "Karur", to: "Trichy", departure: "11:00 AM", arrival: "12:30 PM", price: "40" },
        // Add more mock data as needed
    ];

    // Filter the train data based on user input
    const results = trainData.filter(train => 
        train.from.toLowerCase() === from.toLowerCase() &&
        train.to.toLowerCase() === to.toLowerCase()
    );

    // Display the results
    const trainResults = document.getElementById('trainResults');
    trainResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(train => {
            const trainItem = document.createElement('div');
            trainItem.classList.add('train-item');
            trainItem.innerHTML = `
                <strong>Train Name:</strong> ${train.name} <br>
                <strong>Train Number:</strong> ${train.number} <br>
                <strong>From:</strong> ${train.from} <br>
                <strong>To:</strong> ${train.to} <br>
                <strong>Departure:</strong> ${train.departure} <br>
                <strong>Arrival:</strong> ${train.arrival} <br>
                <strong>Price:</strong> ${train.price}
            `;
            trainResults.appendChild(trainItem);
        });
    } else {
        trainResults.innerHTML = '<p>No trains found for the selected route.</p>';
    }
});
