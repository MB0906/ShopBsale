/*
    *El import solicita las function descritas dentro de los corchetes, las cuales estan ubicadas en la dirección "./api.js".
    *El export es para que sean llamadas desde otros documentos dentro del proyecto.
*/
import { productViews } from "./main.js";

/*
    *Se crea una function la cual es encargada de pintar los datos recibidos de la api en el front-end.
*/
export function createProduct(product){
    if(product.url_image == '' || product.url_image == null){
        product.url_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png";
    }

    
    const div = document.createElement("div");
    div.className = "card";
    div.style = "width: 18rem; margin-top: 2rem";
    

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.alt = "20px";
    img.src = product.url_image;

    const div2 = document.createElement("div");
    div2.className = "card-body";
    

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = product.name;

    const p = document.createElement("p");
    p.className = "card-text font-monospace";
    p.textContent = `$${product.price}`;

    const col = document.createElement("div");
    col.className = "col";



    div2.appendChild(h5);
    div2.appendChild(p);

    div.appendChild(img);
    div.appendChild(div2);

    productViews.appendChild(div);
    productViews.appendChild(col);

    div.appendChild(div2);

};

/*
    *Se crea una function la cual es encargada de pintar los nombres de las categorias recibida de la api en el front-end.
*/
export function viewCategory(category){
    const ul = document.querySelector("#dropdown_category");

    const li = document.createElement("li");

    const a = document.createElement("a");
    a.className = "dropdown-item";
    a.textContent = category.name.toUpperCase();
    a.id = category.id;

    
    li.appendChild(a);
    ul.appendChild(li);
};