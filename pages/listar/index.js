$(document).ready(function () {
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

    $("#tableCarsFiltered > tbody").empty();

    newList.forEach((element, i) => {
        $("#tableCarsFiltered").append(
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