fetch("https://jsonplaceholder.typicode.com/posts/3", {
    method: "DELETE"
  })
    .then(() => console.log("Postimi u fshi me sukses")) // Shfaq mesazhin nëse fshirja është e suksesshme
    .catch(error => console.error("Gabim:", error)); // Kap gabimet
  