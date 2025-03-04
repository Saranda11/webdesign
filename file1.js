fetch("https://jsonplaceholder.typicode.com/posts/2", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Postimi i përditësuar",
      body: "Ky postim është modifikuar nga nxënësi",
      userId: 5
    })
  })
    .then(response => response.json()) // Konverto përgjigjen në JSON
    .then(data => console.log("Postimi u përditësua:", data)) // Shfaq të dhënat e përditësuara
    .catch(error => console.error("Gabim:", error)); // Kap gabimet
  