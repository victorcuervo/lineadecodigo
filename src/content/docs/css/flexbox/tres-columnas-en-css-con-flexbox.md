---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMKQL44U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU4HhYPRT0kboj%2FkB1pI6NBhiLFyxf8nkZtQtOj1JywIgfx6m4zmfPc17LEPHwaUmU5qzex%2BXSsiMAOjsehjJHdoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESY%2Bi%2BcDV4zCIqfQyrcA5%2BivrOmB0vyD17EJhtaOnANO0H5ZSIHKhGv%2Fn6D7BnG%2BI8sDH1q7lzKHwA8m04Dg8GBtRVZ2q2GCB2mK7YVPZhbN%2BowAklmASKs5Xb3GrvCet2Na6VnqjX%2FO2jfdNsoHrk%2FjgKKJ1NF%2B5t3ZD9LY2eKLyC0YCgTmoINaaSfiB14lAScAvesJDuXwR4hR0ugkxzuNQz8vCl3lKX8RDNALP3bihEiTnZrTSluSLJGo9ueN65vo5GjXZOEb2eTlWagq8YUyLoKk78x31SG6oVgUx%2Bv57BRDBYiv9zrLqH59jPpS3Cg9MiIKod%2F7qVCt0rzWjmfOZSklDXpdvXzbwU9red3hFJVxCDioxoFsf3A2n0bukGoQrCa9G1UxFbSng3AaAGpk9LUS0R%2B%2BJ9SpGaPSUTLRlPoQAKZAi2hpjhdcvWMDqJpqvtfWQted03WWEaz%2B9kTyLjTBnAEuqXNEeAk%2FY8QVMK2L%2Fljbaq9ZCUnhzLuYiQDXZ5iNNxxXH160%2BeBSaUyIBZN%2FSjAc%2BSLBiJsM98e7l8s3KUp1PWFgk7nNkzvzt8TBF9D9SybpxxhOzz6xCtDvlQm2LYpN5kKrjdXRFKr6HdCgGjRGN9cpBKEQkg2n3oezW5MC7Xlx0HnMIfl3skGOqUBxaRuGBWtorm7BQ%2BAW0%2FaWBJ5H7hyLidbYRCU9N0D5hBsVvmPx7xgoI3pbqZfipnhkkl1K%2BP0q7o%2BTfn1Pu5bgnJJ2Y1jriSuzXZ%2BX%2Bf6cVd5okAHu%2FGJeQsKZEjyEofCgW9UARgHqaJpNhqBpPANdg4Z5nYzwUM41gHIRWO5JRxTT%2FfS%2BU%2FQZ7wYG8qeEyBaCLEHyr1vH6GqBaojheLvwG8AA0n0&X-Amz-Signature=da3bb7c2b488b345e9611bc437171cbd661886d002ec4079e9e544e54add032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMKQL44U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU4HhYPRT0kboj%2FkB1pI6NBhiLFyxf8nkZtQtOj1JywIgfx6m4zmfPc17LEPHwaUmU5qzex%2BXSsiMAOjsehjJHdoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESY%2Bi%2BcDV4zCIqfQyrcA5%2BivrOmB0vyD17EJhtaOnANO0H5ZSIHKhGv%2Fn6D7BnG%2BI8sDH1q7lzKHwA8m04Dg8GBtRVZ2q2GCB2mK7YVPZhbN%2BowAklmASKs5Xb3GrvCet2Na6VnqjX%2FO2jfdNsoHrk%2FjgKKJ1NF%2B5t3ZD9LY2eKLyC0YCgTmoINaaSfiB14lAScAvesJDuXwR4hR0ugkxzuNQz8vCl3lKX8RDNALP3bihEiTnZrTSluSLJGo9ueN65vo5GjXZOEb2eTlWagq8YUyLoKk78x31SG6oVgUx%2Bv57BRDBYiv9zrLqH59jPpS3Cg9MiIKod%2F7qVCt0rzWjmfOZSklDXpdvXzbwU9red3hFJVxCDioxoFsf3A2n0bukGoQrCa9G1UxFbSng3AaAGpk9LUS0R%2B%2BJ9SpGaPSUTLRlPoQAKZAi2hpjhdcvWMDqJpqvtfWQted03WWEaz%2B9kTyLjTBnAEuqXNEeAk%2FY8QVMK2L%2Fljbaq9ZCUnhzLuYiQDXZ5iNNxxXH160%2BeBSaUyIBZN%2FSjAc%2BSLBiJsM98e7l8s3KUp1PWFgk7nNkzvzt8TBF9D9SybpxxhOzz6xCtDvlQm2LYpN5kKrjdXRFKr6HdCgGjRGN9cpBKEQkg2n3oezW5MC7Xlx0HnMIfl3skGOqUBxaRuGBWtorm7BQ%2BAW0%2FaWBJ5H7hyLidbYRCU9N0D5hBsVvmPx7xgoI3pbqZfipnhkkl1K%2BP0q7o%2BTfn1Pu5bgnJJ2Y1jriSuzXZ%2BX%2Bf6cVd5okAHu%2FGJeQsKZEjyEofCgW9UARgHqaJpNhqBpPANdg4Z5nYzwUM41gHIRWO5JRxTT%2FfS%2BU%2FQZ7wYG8qeEyBaCLEHyr1vH6GqBaojheLvwG8AA0n0&X-Amz-Signature=a20c6d54434dd9089142aca2ee3f54be251eb4eb67c370948b8561a7026064a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

