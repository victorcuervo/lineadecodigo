---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7MXYCK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARkrTgLEWuDycrkC7Z2nCoGOCEYMtNvWBrXHPaj5hdqAiEA8ATEEM83rxrGJPpzfdEgkUhIK5xccTnwOeon3HoXVgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNpU%2F70mBJHy2H4PbSrcAzbtkwd8QevPB9ZiCczBztCT2pUWa99Q1jRq37neC9Bok5tlxAUO7z87v7wDpMatuD35GII4rW%2BrveSryxOaiXkH029uqgiB%2F3FnmwbaFl9KHa0f3C5xYSaDkH%2F%2BOQb2%2FregJ%2BSdHkEHNaKqZEqcbkThyvK0LxMtWCn%2BIqOMKLs%2BWRtB27dvBaI3LphRpndrNJ4VZvFm53dZqbJwCYoFWzmdloeljIj6wwUbYeG5WZJZEGKW%2Bw67eYue4UT82UPvhlB23PjzFe0W63i8xbnlsnLK3Ei0oYBsjUR0Hjperu6ww56C6eH8tMgAE9pBVEUf4Gf1h7ZhQYwhRglQwjcqxmfCkn0pJUbMibxV0ICpSPmwzOwKQOCgsZy037%2FYR18lwFvfKYapkHlxy30k1ZDP71Ovg1ZUsQsiSoZZrXyaiwDYEYbpFtkToH6rMRUs%2FSVwEJT%2B484jkXUnvHxs5eGyKb9x3qvuAovnv4GbY7zmfKBzNJWftBOdSW3okvbxrHp5tP8avSUDqVLAFZ7ZIP4oR5aZ%2FVLXsnlcI%2BAzkHWyQaDgybnT9iplWjoni7oJqu3kFZA2kFXfkimTZOnf4jEIs7Cm%2B5q1B9%2BlaGhxLyDl9huukVeaSKSAFrlBuI9GMLaMyMkGOqUBWVY2ruAPuY74%2BZ%2FNlEBj5O2CthPMMKKRRSuob9j3EMFznLQwW%2FuhHW%2Bn%2BkHXuPlBrgdlOj4aire88hRLeqoTMugWuo%2FbyO5ZoOOfPxFQX%2B1q3NRtIzmwRXe51l5FCn9wFDbseqIl%2BUql4cU0olcEUkJWuRhNpjvf9uEcKcrERqynIRWYWkFr0N6tGCN4LLltYqo4q%2FGDixRfZ6EcdIsBhAMw0fpf&X-Amz-Signature=c05f93a259757fe354a7e65de6d7252b08fadb35492a79852f95bc02e4b9334e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7MXYCK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARkrTgLEWuDycrkC7Z2nCoGOCEYMtNvWBrXHPaj5hdqAiEA8ATEEM83rxrGJPpzfdEgkUhIK5xccTnwOeon3HoXVgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNpU%2F70mBJHy2H4PbSrcAzbtkwd8QevPB9ZiCczBztCT2pUWa99Q1jRq37neC9Bok5tlxAUO7z87v7wDpMatuD35GII4rW%2BrveSryxOaiXkH029uqgiB%2F3FnmwbaFl9KHa0f3C5xYSaDkH%2F%2BOQb2%2FregJ%2BSdHkEHNaKqZEqcbkThyvK0LxMtWCn%2BIqOMKLs%2BWRtB27dvBaI3LphRpndrNJ4VZvFm53dZqbJwCYoFWzmdloeljIj6wwUbYeG5WZJZEGKW%2Bw67eYue4UT82UPvhlB23PjzFe0W63i8xbnlsnLK3Ei0oYBsjUR0Hjperu6ww56C6eH8tMgAE9pBVEUf4Gf1h7ZhQYwhRglQwjcqxmfCkn0pJUbMibxV0ICpSPmwzOwKQOCgsZy037%2FYR18lwFvfKYapkHlxy30k1ZDP71Ovg1ZUsQsiSoZZrXyaiwDYEYbpFtkToH6rMRUs%2FSVwEJT%2B484jkXUnvHxs5eGyKb9x3qvuAovnv4GbY7zmfKBzNJWftBOdSW3okvbxrHp5tP8avSUDqVLAFZ7ZIP4oR5aZ%2FVLXsnlcI%2BAzkHWyQaDgybnT9iplWjoni7oJqu3kFZA2kFXfkimTZOnf4jEIs7Cm%2B5q1B9%2BlaGhxLyDl9huukVeaSKSAFrlBuI9GMLaMyMkGOqUBWVY2ruAPuY74%2BZ%2FNlEBj5O2CthPMMKKRRSuob9j3EMFznLQwW%2FuhHW%2Bn%2BkHXuPlBrgdlOj4aire88hRLeqoTMugWuo%2FbyO5ZoOOfPxFQX%2B1q3NRtIzmwRXe51l5FCn9wFDbseqIl%2BUql4cU0olcEUkJWuRhNpjvf9uEcKcrERqynIRWYWkFr0N6tGCN4LLltYqo4q%2FGDixRfZ6EcdIsBhAMw0fpf&X-Amz-Signature=0390e95b8b29c51af15ad407e38ff7ca4d041875a6415ea172dc0687f7df9123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

