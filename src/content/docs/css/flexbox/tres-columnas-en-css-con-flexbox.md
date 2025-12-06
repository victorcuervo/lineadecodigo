---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VILECZF6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB31MNhtsEdSeheTKpJD7PAJmP9tGMcTzWGRM06tGRHLAiEAhf9kNRIeLjgs6FOTr0c01V00IQrUMsRAu3W%2Ftcn77e8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDM9V1%2BIFjqOOCvoydSrcA65ePFK462Mf7xu827FXQmAao1HKadjuM27IVDA4DOsLeL3H7BNAsQJPepZHQIMJk9SMf5kfqUMO%2BIgrkqsfIsvvkdipzMjAX6MVbn1zDwdJOlOg%2BcRWdE6GZ%2BD3WZIb0hqeITZpzuQ9W8095x713LkNrD6ATkA0gws36ToHSgNzhGi0ba89lc8MvOq9NLvuapJE2WYMbrxF7j3lJlYMAReZRoifL1hSJ5RgqaWla1hnoKljPSqpreUODew%2FW9BNMCPS1LYTTfiNM8eVmKVliIb7hD65yKfcbjW9J%2FK6DrRqEChn8Cq7Y%2BX%2FnGhURISs2ejot%2FUbiDGIdCpSJWG0oCli2xvqPylmWBIGDuX1Qza5RPuX6x%2B7%2FapoRU0TfZSyA%2FD9cjO04hQHMZwaqWcsl7AWGikiLhWh%2Fih0W5GXYLjrRIruP7mikxDB1O6ht6bJOJFp6JC2fgO3qSnfvQjwJf1%2FH94N7%2Bf66qveHvubd0M6%2B2COQk1gD2Eu2%2FIGxY0C4VO8yQLneATRkUnietLkao9rEjeEDCmm0abNr1EpqdXrgttcvAf%2FYs6IGVcSesVt9Mi5OySKuDw8LUIP%2BB5Jnnu9KEPmzgYgpqdi%2F98XTtSNplHT6m3rN3drVA1zMLLF0ckGOqUBFPeBEIfj6WIBjfnNjr9iIST1ea3n9quFOsZKXlniWV%2BqJgNLzVz%2BnmoBPbGBEWhCgeopsmXrc23r%2B3xLdb103lOAMBSUqBAnqplRjw%2BJgnt8VJESUO43zX0Q8lGKwrCGHWUNZt93GUJCyJXtmcLpRsRCs%2B%2B0dQ2zGJ0PKHoGMpq3KbSAlB0m%2BhwIJrPHNwH4lELutH7gakBZBzLS9EFFxsW4P7RO&X-Amz-Signature=9d9a81daf08ef8a48543c50f21b0466e90b7b2f646c1d5ad5692fbde5a4c624d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VILECZF6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB31MNhtsEdSeheTKpJD7PAJmP9tGMcTzWGRM06tGRHLAiEAhf9kNRIeLjgs6FOTr0c01V00IQrUMsRAu3W%2Ftcn77e8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDM9V1%2BIFjqOOCvoydSrcA65ePFK462Mf7xu827FXQmAao1HKadjuM27IVDA4DOsLeL3H7BNAsQJPepZHQIMJk9SMf5kfqUMO%2BIgrkqsfIsvvkdipzMjAX6MVbn1zDwdJOlOg%2BcRWdE6GZ%2BD3WZIb0hqeITZpzuQ9W8095x713LkNrD6ATkA0gws36ToHSgNzhGi0ba89lc8MvOq9NLvuapJE2WYMbrxF7j3lJlYMAReZRoifL1hSJ5RgqaWla1hnoKljPSqpreUODew%2FW9BNMCPS1LYTTfiNM8eVmKVliIb7hD65yKfcbjW9J%2FK6DrRqEChn8Cq7Y%2BX%2FnGhURISs2ejot%2FUbiDGIdCpSJWG0oCli2xvqPylmWBIGDuX1Qza5RPuX6x%2B7%2FapoRU0TfZSyA%2FD9cjO04hQHMZwaqWcsl7AWGikiLhWh%2Fih0W5GXYLjrRIruP7mikxDB1O6ht6bJOJFp6JC2fgO3qSnfvQjwJf1%2FH94N7%2Bf66qveHvubd0M6%2B2COQk1gD2Eu2%2FIGxY0C4VO8yQLneATRkUnietLkao9rEjeEDCmm0abNr1EpqdXrgttcvAf%2FYs6IGVcSesVt9Mi5OySKuDw8LUIP%2BB5Jnnu9KEPmzgYgpqdi%2F98XTtSNplHT6m3rN3drVA1zMLLF0ckGOqUBFPeBEIfj6WIBjfnNjr9iIST1ea3n9quFOsZKXlniWV%2BqJgNLzVz%2BnmoBPbGBEWhCgeopsmXrc23r%2B3xLdb103lOAMBSUqBAnqplRjw%2BJgnt8VJESUO43zX0Q8lGKwrCGHWUNZt93GUJCyJXtmcLpRsRCs%2B%2B0dQ2zGJ0PKHoGMpq3KbSAlB0m%2BhwIJrPHNwH4lELutH7gakBZBzLS9EFFxsW4P7RO&X-Amz-Signature=3cdffa11bc4e3f97c17a024a00ff4792490ea49c8575c1f377d77d719e9f98b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

