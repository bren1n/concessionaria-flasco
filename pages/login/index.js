$(document).ready(function() {
    localStorage.setItem('isLogged', 'false');

    $("#form").on("submit", function(e) {
        e.preventDefault();
        logar();
    })
});

function logar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login==="admin") {
        if (senha=="admin") {
            window.location.href="../listar/index.html";
            localStorage.setItem('isLogged', 'true');
        } else {
            alert("Login ou senha incorretos!");
        }
    } else {
        alert("Usuário não encontrado!");
    }
}