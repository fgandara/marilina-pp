const buttonLaSerie = document.getElementById("la-serie");

buttonLaSerie.addEventListener("mouseover", ()=> {
    buttonLaSerie.setAttribute("src", "img/button_serie_hover.png");
}
)

buttonLaSerie.addEventListener("mouseout", ()=> {
    buttonLaSerie.setAttribute("src", "img/button_serie_normal.png");
}
)

const buttonInteractivo = document.getElementById("interactivo");

buttonInteractivo.addEventListener("mouseover", ()=> {
    buttonInteractivo.setAttribute("src", "img/button_interactivo_hover.png");
}
)

buttonInteractivo.addEventListener("mouseout", ()=> {
    buttonInteractivo.setAttribute("src", "img/button_interactivo_normal.png");
}
)

const buttonPersonajes = document.getElementById("personajes");

buttonPersonajes.addEventListener("mouseover", ()=> {
    buttonPersonajes.setAttribute("src", "img/button_personajes_hover.png");
}
)

buttonPersonajes.addEventListener("mouseout", ()=> {
    buttonPersonajes.setAttribute("src", "img/button_personajes_normal.png");
}
)