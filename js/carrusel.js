
const imagenes = [
    { src: "img/Desayunos/box-combinado.jpeg", alt: "Box desayuno dulce y salado"},
    { src: "img/Desayunos/box-dulce.jpeg", alt: "Box desayuno dulce"},
    { src: "img/Desayunos/box-infantil.jpeg", alt: "Box desayuno infantil opción 1"},                               
    { src: "img/Desayunos/box-infantil2.jpeg", alt: "Box desayuno infantil opción 2"},
    
    { src: "img/Halloween/box-halloween.jpeg", alt: "Box Halloween"},
    { src: "img/Halloween/muffing-halloween.jpeg", alt: "Muffing Halloween"},
    { src: "img/Halloween/vasitos-halloween.jpeg", alt: "Vasitos de postres Halloween"},

    { src:  "img/Panaderia/pan-integral.jpeg", alt: "Pan integral"},
    { src:  "img/Panaderia/pan-remolacha.jpeg", alt: "Pan integral de remolacha"},
    { src:  "img/Panaderia/pancitos-bolsas.jpeg", alt: "Bolsita de pancitos x 12"},
    { src:  "img/Panaderia/pizzas-integrales.jpeg", alt: "Pizza integral"},
    { src:  "img/Panaderia/pizzetas-integrales.jpeg", alt: "Pizzetas integrales x 12"},

    { src:  "img/PorcionesChicas/carrot-chico.jpeg", alt: "Porción mini carrotcake"},
    { src:  "img/PorcionesChicas/ricota-chica.jpeg", alt: "Porción mini tarta ricota"},
    { src:  "img/PorcionesChicas/rogel-chica.jpeg", alt: "Porción mini rogel"},

    { src:  "img/Tartas/lemon.jpeg", alt: "Lemon pie"},
    { src:  "img/Tartas/pirineo.jpeg", alt: "Prineo"},
    { src:  "img/Tartas/rogel.jpeg", alt: "Rogel"},
    { src:  "img/Tartas/tarta-frutal.jpeg", alt: "Tarta frutal"},
    { src:  "img/Tartas/tarta-frutilla.jpeg", alt: "Tarta de frutillas"},
    { src:  "img/Tartas/tiramisu.jpeg", alt: "Tiramisú"},

    { src:  "img/Tortas/torta-argentina.jpeg", alt: "Torta de Argentina"},
    { src:  "img/Tortas/torta-blanca-con-rosa.jpeg", alt: "Torta blanca decorada con una rosa de color rosa"},
    { src:  "img/Tortas/torta-blanca.jpeg", alt: "Torta blanca decorada con rosas blancas"},
    { src:  "img/Tortas/torta-brillos.jpeg", alt: "Torta blanca decorada con moños y brillos dorados"},
    { src:  "img/Tortas/torta-chocolates.jpeg", alt: "Torta con chocolate alrededor"},
    { src:  "img/Tortas/torta-girasoles.jpeg", alt: "Torta girasoles"},
    { src:  "img/Tortas/torta-kitty.jpeg", alt: "Torta de Kitty"},
    { src:  "img/Tortas/torta-mariposas.jpeg", alt: "Torta lila decorada con mariposas"},
    { src:  "img/Tortas/torta-negra.jpeg", alt: "Torta negra con monos rojos"},
    { src:  "img/Tortas/torta-negra15.jpeg", alt: "Torta negra con número 15"},
    { src:  "img/Tortas/torta-selva.jpeg", alt: "Selva negra"},
    { src:  "img/Tortas/torta-verde.jpeg", alt: "Torta de colores decorada con mariposas y rosas"},
    { src:  "img/Tortas/torta.jpeg", alt: "Torta decorada con chocolates"}
];

let indiceActual = 0;

const imgElemento = document.getElementById("imagen-carrusel");
const btnAnterior = document.getElementById("boton-anterior");
const btnSiguiente = document.getElementById("boton-siguiente");

function actualizarCarrusel() {
    imgElemento.src = imagenes[indiceActual].src;
    imgElemento.alt = imagenes[indiceActual].alt;
}

btnSiguiente.addEventListener("click", () => {
    indiceActual++; //
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    actualizarCarrusel();
});

btnAnterior.addEventListener("click", () => {
    indiceActual--; 
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    actualizarCarrusel();
});