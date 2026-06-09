const temaBtn = document.getElementById("temaBtn");
const corBtn = document.getElementById("corBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("tema-escuro");

});

const cores = [
    "tema-verde",
    "tema-azul",
    "tema-laranja"
];

let indiceCor = 0;

corBtn.addEventListener("click", () => {

    document.body.classList.remove(
        "tema-verde",
        "tema-azul",
        "tema-laranja"
    );

    document.body.classList.add(
        cores[indiceCor]
    );

    indiceCor++;

    if(indiceCor >= cores.length){
        indiceCor = 0;
    }

});
