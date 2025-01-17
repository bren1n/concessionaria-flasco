$(document).ready(function() {
    var isLogged = localStorage.getItem('isLogged');
    if (isLogged == 'false' || isLogged == null) {
        window.location.href="../login/index.html";
    }
    
    $("#formAdd").on('submit', function(e) {
        e.preventDefault();

        const marca = $("#marca").val();
        const tipo = $("#tipo").val();
        const modelo = $("#modelo").val();
        const anoFabricacao = $("#anoFabricacao").val();
        const cor = $("#cor").val();
        const km = $("#km").val();
        const numeroPortas = $("#numeroPortas").val();
        const preco = $("#preco").val();

        const obj = {
            marca: marca,
            tipo: tipo,
            modelo: modelo,
            anoFabricacao: anoFabricacao,
            cor: cor,
            km: km,
            numeroPortas: numeroPortas,
            preco: preco
        };


        
        var listaCarros = JSON.parse(localStorage.getItem("carros"));
        
        if (Array.isArray(listaCarros)) {
            listaCarros.push(obj);
    
            localStorage.setItem("carros", JSON.stringify(listaCarros));

            alert('Veículo cadastrado com sucesso!');
            window.location.href="../listar/index.html";
        } else {
            localStorage.setItem("carros", JSON.stringify([obj]));

            alert('Erro ao cadastrar veículo!');
        }
    });
})