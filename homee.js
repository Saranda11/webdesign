<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validimi i Formularit</title>
</head>
<body>

    <form id="myForm">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email">
        <span id="emailError" style="color: red;"></span>
        <br><br>

        <label for="password">Fjalëkalimi:</label>
        <input type="password" id="password" name="password">
        <span id="passwordError" style="color: red;"></span>
        <br><br>

        <button type="submit">Dërgo</button>
    </form>

    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Parandalon dërgimin e formularit

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let emailError = document.getElementById("emailError");
            let passwordError = document.getElementById("passwordError");

            emailError.textContent = "";
            passwordError.textContent = "";

            let isValid = true;

            // Validimi i email-it (duhet të ketë strukturën e duhur)
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Email-i nuk është i vlefshëm!";
                isValid = false;
            }

            // Validimi i fjalëkalimit (duhet të jetë të paktën 6 karaktere)
            if (password.length < 6) {
                passwordError.textContent = "Fjalëkalimi duhet të ketë të paktën 6 karaktere!";
                isValid = false;
            }

            // Nëse të dhënat janë të sakta, formulari mund të dërgohet
            if (isValid) {
                alert("Formulari u dërgua me sukses!");
                // Mund të dërgohet në server me `form.submit()`
            }
        });
    </script>

</body>
</html>
