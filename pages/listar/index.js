$(document).ready(function () {
    exibeCarros();

    $("#buscar").on("click", function (e) {
        const marcaFiltro = $("#marca").val();
        const tipoFiltro = $("#tipo").val();
        const modeloFiltro = $("#modelo").val();
        const anoFabricacaoFiltro = $("#anoFabricacao").val();
        const corFiltro = $("#cor").val();
        const kmFiltro = $("#km").val();
        const numeroPortasFiltro = $("#numeroPortas").val();
        const precoFiltro = $("#preco").val();

        filtrarCarros(marcaFiltro, tipoFiltro, modeloFiltro, anoFabricacaoFiltro, corFiltro, kmFiltro, numeroPortasFiltro, precoFiltro);
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

function filtrarCarros(marca, tipo, modelo, ano, cor, km, portas, preco) {
    var listaCarros = JSON.parse(localStorage.getItem("carros"));
    var newList = [];

    if (Array.isArray(listaCarros)) {
        listaCarros.forEach((element) => {
            if (marca!= "" && marca!= null) {
                if (element.marca == marca) {
                    newList.push(element);
                }
            }
            if (tipo!= "" && tipo!= null) {
                if (element.tipo == tipo) {
                    newList.push(element);
                }
            }
            if (modelo!= "" && modelo!= null) {
                if (element.modelo == modelo) {
                    newList.push(element);
                }
            }
            if (ano!= "" && ano!= null) {
                if (element.ano == ano) {
                    newList.push(element);
                }
            }
            if (cor!= "" && cor!= null) {
                if (element.cor == cor) {
                    newList.push(element);
                }
            }
            if (km!= "" && km!= null) {
                if (element.km == km) {
                    newList.push(element);
                }
            }
            if (portas!= "" && portas!= null) {
                if (element.portas == portas) {
                    newList.push(element);
                }
            }
            if (preco!= "" && preco!= null) {
                if (element.preco == preco) {
                    newList.push(element);
                }
            }
        });
    }

    console.log(newList);

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