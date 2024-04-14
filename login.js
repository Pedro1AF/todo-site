function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}