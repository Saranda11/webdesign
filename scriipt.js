fetch("https://jsonplaceholder.typicode.com/posts/6", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Titulli i modifikuar nga nxënësi",
      userId: 10
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Gabim në përditësim!");
      }
    })
    .then(data => {
      console.log("Postimi u përditësua:", data);
      console.log("Përditësimi u krye me sukses!");
    })
    .catch(error => console.error("Gabim:", error)); // Kap gabimet
  