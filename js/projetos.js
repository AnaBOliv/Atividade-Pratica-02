const statusBtn = document.getElementById("statusBtn");

const statusPossiveis = [
    "Pendente",
    "Em Andamento",
    "Concluído"
];

statusBtn.addEventListener("click", () => {

    const listaStatus =
        document.querySelectorAll(".status");

    for(let i = 0; i < listaStatus.length; i++){

        const novoStatus =
            statusPossiveis[
                Math.floor(
                    Math.random() *
                    statusPossiveis.length
                )
            ];

        listaStatus[i].textContent =
            novoStatus;
    }

});
