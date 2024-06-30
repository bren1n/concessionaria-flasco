$(document).ready(function () {
    var isLogged = localStorage.getItem('isLogged');
    if (isLogged == 'false' || isLogged == null) {
        window.location.href="../login/index.html";
    }

    exibeCarros();

    $("#buscar").on("click", function (e) {
        console.log('cliquei no buscar');
        const marcaFiltro = $("#marca").val();
        const tipoFiltro = $("#tipo").val();
        const modeloFiltro = $("#modelo").val();
        const anoFabricacaoFiltro = $("#anoFabricacao").val();
        const corFiltro = $("#cor").val();
        const kmFiltro = $("#km").val();
        const numeroPortasFiltro = $("#numeroPortas").val();
        const precoFiltro = $("#preco").val();

        var filtroBusca = {
            marca: marcaFiltro, 
            tipo: tipoFiltro, 
            modelo: modeloFiltro, 
            ano: anoFabricacaoFiltro, 
            cor: corFiltro, 
            km: kmFiltro, 
            portas: numeroPortasFiltro, 
            preco: precoFiltro
        }

        filtrarCarros(filtroBusca);
    });
});

function excluirVeiculo(id) {
    var listaCarros = JSON.parse(localStorage.getItem("carros"));
    listaCarros.splice(id, 1);
    localStorage.setItem("carros", JSON.stringify(listaCarros));
    alert('Veículo removido com sucesso');
    window.location.href="../listar/index.html";
}

function exibeCarros(p_listaCarros = null){
    var listaCarros = JSON.parse(localStorage.getItem("carros"));
    if (Array.isArray(listaCarros)) {
        listaCarros.forEach((element, i) => {
            $("#tableCars").append(
                `<tr>
                    <td>
                        ${i + 1}
                    </td>
                    <td>
                        ${element.marca}
                    </td>
                    <td>
                        ${element.tipo}
                    </td>
                    <td>
                        ${element.modelo}
                    </td>
                    <td>
                        ${element.anoFabricacao}
                    </td>
                    <td>
                        ${element.cor}
                    </td>
                    <td>
                        ${element.km}
                    </td>
                    <td>
                        ${element.numeroPortas}
                    </td>
                    <td>
                        ${element.preco}
                    </td>
                    <td>
                        <svg onclick="excluirVeiculo(${i})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </td>
                </tr>`);
        });
    }
}

function filtrarCarros(filtro) {
    var listaCarros = JSON.parse(localStorage.getItem("carros"));

    var newList = listaCarros.filter(carro => {
        return Object.keys(filtro).every(key => {
            if (filtro[key] != '' && carro[key] != '') {
                return carro[key] == filtro[key];
            }
            return true;
        });
    });

    console.log(newList);

    $("#tableCars > tbody").empty();

    newList.forEach((element, i) => {
        $("#tableCars").append(
            `<tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    ${element.marca}
                </td>
                <td>
                    ${element.tipo}
                </td>
                <td>
                    ${element.modelo}
                </td>
                <td>
                    ${element.anoFabricacao}
                </td>
                <td>
                    ${element.cor}
                </td>
                <td>
                    ${element.km}
                </td>
                <td>
                    ${element.numeroPortas}
                </td>
                <td>
                    ${element.preco}
                </td>
            </tr>`);
    });
}