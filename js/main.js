/*
    *El import solicita las function descritas dentro de los corchetes, las cuales estan ubicadas en la dirección "./api.js".
    *El export es para que sean llamadas desde otros documentos dentro del proyecto.
*/
import { getCategoryName, getProduct, getProductByCategory, searchProduct } from "./api.js";
export let productViews = document.querySelector("#productViews");

/*
    *Se crea una function la cual es encargada de estar comprobando si el usuario hace click dentro de la lista de categorias.
    *Esta function es encargada de enviar la variable "id" de la categoria seleccionada, esta es enviada a la function encargada de conectarse con la api.
*/
function eventCategory(){
    const category = document.querySelector("#dropdown_category");

    category.addEventListener('click', (e) => {
        productViews.innerHTML = "";
        getProductByCategory(e.srcElement.id);
    });
};

/*
    *Se crea una function la cual es encargada de estar comprobando si el usuario hace click en el boton de buscar.
    *Esta function es encargada de enviar el texto introducido por el usuario, esta es enviada a la function encargada de conectarse con la api.
*/
function eventSearch(){
    const btn = document.querySelector("#searchBtn");
    const input = document.querySelector("#searchInput");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if(input.value == "" || input.value == null) return alert("No ingresaste nada para buscar");
        productViews.innerHTML = "";
        searchProduct(input.value);
    });
};

/*
    *Se hace el llamado a las function, las cuales se ejecutaran al momento de cargar la web.
*/
eventSearch();
getCategoryName();
getProduct();
eventCategory();