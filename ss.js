fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH", // Vetëm përditëson fushat specifike
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Titulli i ri", // Ndryshojmë vetëm titullin
        userId: 2 // Ndryshojmë userId
    })
})
.then(response => response.json()) // Konverton përgjigjen në JSON
.then(data => console.log("Postimi u përditësua me PATCH:", data)) // Shfaq të dhënat e përditësuara
.catch(error => console.error("Gabim:", error)); // Kap dhe shfaq gabimet
