const destinations = ["Paris", "Tokyo", "New York", "Rio de Janeiro", "Sydney", "Rome", "Cape Town", "Bangkok", "Barcelona", "Dubai"];

document.getElementById("randomize").addEventListener("click", function() {
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    document.getElementById("destination").textContent = `Pack your bags for: ${randomDestination}!`;
});
