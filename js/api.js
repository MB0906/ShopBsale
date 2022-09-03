/*
    *El import solicita las function descritas dentro de los corchetes, las cuales estan ubicadas en la dirección "./script.js".
    *El export es para que sean llamadas desde otros documentos dentro del proyecto.
*/
import { createProduct, viewCategory } from "./script.js";

/*
    *Se crea una const la cual capture el link de la api, asi llamar a la const y solo agregarle los ulitmos parametros de dirección.
*/
const APP_URL = 'https://shopbsale.herokuapp.com/api/v1';


/*
    *Se crea una function constante la cual hace la llamada a la api, esta espera la respuesta y esa respuesta se la manda a otra function la cual pinta los resultados en la vista.
    *Esta function recupera todos los productos, esta es llamada al momento de cargar la pagina con unos productos ya filtrado por una categoria en especifico.
*/
export const getProduct = async () => {
    await fetch(`${APP_URL}/products`)
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            createProduct(product)
        });
    });

};

/*
    *Se crea una function constante la cual hace la llamada a la api, esta espera la respuesta y esa respuesta se la manda a otra function la cual pinta los resultados en la vista.
    *Esta function recupera todos los productos de una categoria en especifico, dicha categoria es solicitada por el usuario y la api se encarga de enviar los datos solicitados.
*/
export const getProductByCategory = async (id) => {   
    await fetch(`${APP_URL}/products/${id}`)
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            createProduct(product)
        });
    });

};

/*
    *Se crea una function constante la cual hace la llamada a la api, esta espera la respuesta y esa respuesta se la manda a otra function la cual pinta los resultados en la vista.
    *Esta function recupera todos los productos con el nombre indicado por el usuario o solamente con las primeras letras. ej: "ron", recupera todos los productos que su nombre contenga "ron" y los devuelve.
*/
export const searchProduct = async (name) => {
    await fetch(`${APP_URL}/products/search/${name}`)
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            createProduct(product)
        });
    });
};

/*
    *Se crea una function constante la cual hace la llamada a la api, esta espera la respuesta y esa respuesta se la manda a otra function la cual pinta los resultados en la vista.
    *Esta function recupera los nombres de todas las categorias que existan en la base de datos cuya cual esta conectada con la api.
*/
export const getCategoryName = async () => {   
    await fetch(`${APP_URL}/category`)
    .then((response) => response.json())
    .then((categorys) => {
        categorys.forEach(category => {
            viewCategory(category)
        });
    });

};