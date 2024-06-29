$(document).ready(function () {
    var isLogged = localStorage.getItem('isLogged');
    if (isLogged == 'false' || isLogged == null) {
        window.location.href="../login/index.html";
    }
});