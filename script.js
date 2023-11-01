document.addEventListener("DOMContentLoaded", function () {
    function fetchData() {
        // Simulated sensor data (replace with real data)
        const temperature = getRandomValue(15, 30).toFixed(2);
        const humidity = getRandomValue(40, 70).toFixed(2);

        document.getElementById("temperature").textContent = `${temperature} °C`;
        document.getElementById("humidity").textContent = `${humidity} %`;
    }

    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    fetchData(); // Initial data load

    // Update data every 2 seconds for real-time feel
    setInterval(fetchData, 2000);
});
