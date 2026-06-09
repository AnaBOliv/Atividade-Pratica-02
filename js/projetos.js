const projetos = [

    {
        nome:"Iniciar um novo projeto",
        status:"Pendente"
    },

    {
        nome:"Estudar independência financeira",
        status:"Pendente"
    },

    {
        nome:"Ler por 10 min",
        status:"Pendente"
    }

];

const listaProjetos =
document.getElementById("projetos");

const btnAdicionar =
document.getElementById("adicionarProjeto");

const inputProjeto =
document.getElementById("novoProjeto");

const btnMeta =
document.getElementById("salvarMeta");

const metaInput =
document.getElementById("metaInput");

const resultadoMeta =
document.getElementById("resultadoMeta");

let meta = 0;

btnAdicionar.addEventListener(
"click",
() => {

    const nome =
    inputProjeto.value.trim();

    if(nome === "") return;

    projetos.push({
        nome:nome,
        status:"Pendente"
    });

    inputProjeto.value="";

    renderizar();
}
);

btnMeta.addEventListener(
"click",
() => {

    meta =
    parseInt(metaInput.value);

    atualizarMeta();
}
);

function atualizarMeta(){

    let concluidos = 0;

    for(let i=0;
        i<projetos.length;
        i++){

        if(
            projetos[i].status
            === "Concluído"
        ){
            concluidos++;
        }
    }

    const faltam =
    Math.max(
        meta - concluidos,
        0
    );

    resultadoMeta.innerHTML =

    `Meta: ${meta}
    <br>
    Concluídos: ${concluidos}
    <br>
    Faltam: ${faltam}`;
}

function renderizar(){

    listaProjetos.innerHTML = "";

    for(let i=0;
        i<projetos.length;
        i++){

        const projeto =
        projetos[i];

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

        <h3>${projeto.nome}</h3>

        <p>
        Status:
        ${projeto.status}
        </p>

        <select
        onchange="alterarStatus(
        ${i},
        this.value
        )">

            <option
            ${projeto.status==="Pendente" ? "selected" : ""}>
            Pendente
            </option>

            <option
            ${projeto.status==="Em Andamento" ? "selected" : ""}>
            Em Andamento
            </option>

            <option
            ${projeto.status==="Concluído" ? "selected" : ""}>
            Concluído
            </option>

        </select>
        `;

        listaProjetos.appendChild(
            card
        );
    }

    atualizarMeta();
}

function alterarStatus(
indice,
novoStatus
){

    projetos[indice].status =
    novoStatus;

    renderizar();
}

renderizar();
