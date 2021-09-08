var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días. ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes. ";
} else {
    elSaludo = "Buenas noches. ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["Irlanda","Noruega","Australia","Canadá","Nueva Zelanda"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("Portada", "Portada").parent("vinculos");
    createA("la página", "Página").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        página();
    }
}

function portada() {
    createSpan("Estás en la portada").parent("title");
    createElement('p','Y he pensado que '+random(lorenIpsum)+' sería un excelente lugar para vivir').parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}

function página() {
    createSpan("Estás en la página").parent("title");
    createElement('p','Y he pensado que '+random(lorenIpsum)+' sería un excelente lugar para vivir').parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}
