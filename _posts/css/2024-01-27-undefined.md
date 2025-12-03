---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZHDRMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD6RvrAZK%2FIo7vU%2FFzQPM%2BPrVDn4%2BBR6oQ%2BaVH7rjHZgQIgQyBCHQBVkaZnqe85YGyGuL%2BKvGIFC3bJW6j6e35m1iEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFSMDUwMLVeh189qyircAy8lkjpsdv1HuhnhNc%2FiDmBM1a5R9D8tr7NrYlz8XvPLbouGxqv7nX9tDXr9CsU%2FbIUYrJWV2ESE3M8pxdeks5b%2Fy3Utsoy5ye%2BSkHCoi3%2Ftrun2VbSIm9aydila5lkBv8RReNxA0YkbpeQYb2o1iqlmacyvzavuXUMvqzTNxAINMjyXTKSsAWPa2nto%2F3c04VcsA0EZWGYjh81aUcA7zRi7dcHLmW3S2cTOrxrDKA%2FEDeTaR8n1%2F%2F%2Fs8OVT%2FU0yGCwPHq5YBAj43YLpt86f0X7EGD7%2Fob7jQrx9XgMZyCOhUlOBKNuzp9JDCgr112ko%2BbbA2EkfLvCCRfVNlO3tmHEoXIj3rc05sU4Duyw8h0LNISycQKGtzW1eCn3LShsabTat0ygyfK5hVsnoPJtiTVIZi37qNyybd8T21YnmvLGA8tnr6%2FcvLOUw5x0l6P2xRZYm%2Bj%2BA%2B8KUH4%2FKDupiRVoLPFY9yv8uulB84AcshkKgSSTWozZ76sPXP%2BX8I5a9v2lp2J7cmKYb7h5wF9h%2F%2B88WH5R%2BMywuKHpeNcGPbtCq95RHA5hQ1SBZ%2BSXIGYfoCmaCG84WJjwxvsSpy66FhKF4frhYKsDNq%2BGQzeFsaxoq7gMxdFIrYEcxq6YvMK7MwMkGOqUBdLVMDfUWYD6j%2FeTi%2Bz3ZWECT3FCxSnEfqHHhPuLNpUY3qGV6vLX4bXtZW8AhHRNEJ5Z7%2FdUxbx4BjxUZs0Q%2FqypLUVBzSxaq9m4UYMhL4%2BTeGjsdPx3EsqHO0Kn0ys%2BmMH3PYo0EA6411KFMXLR4rh58gs6heUjEaouizRg3phIVDhvJFndhDBqIdCUlNhxzwZ5q1P7ws2ReN2viw9e85ZnbT9pp&X-Amz-Signature=02b6c7081a08fc69c3f4fb6718de908b891c1ebf6aa32e7dedc72e12a9b4ecc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZHDRMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD6RvrAZK%2FIo7vU%2FFzQPM%2BPrVDn4%2BBR6oQ%2BaVH7rjHZgQIgQyBCHQBVkaZnqe85YGyGuL%2BKvGIFC3bJW6j6e35m1iEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFSMDUwMLVeh189qyircAy8lkjpsdv1HuhnhNc%2FiDmBM1a5R9D8tr7NrYlz8XvPLbouGxqv7nX9tDXr9CsU%2FbIUYrJWV2ESE3M8pxdeks5b%2Fy3Utsoy5ye%2BSkHCoi3%2Ftrun2VbSIm9aydila5lkBv8RReNxA0YkbpeQYb2o1iqlmacyvzavuXUMvqzTNxAINMjyXTKSsAWPa2nto%2F3c04VcsA0EZWGYjh81aUcA7zRi7dcHLmW3S2cTOrxrDKA%2FEDeTaR8n1%2F%2F%2Fs8OVT%2FU0yGCwPHq5YBAj43YLpt86f0X7EGD7%2Fob7jQrx9XgMZyCOhUlOBKNuzp9JDCgr112ko%2BbbA2EkfLvCCRfVNlO3tmHEoXIj3rc05sU4Duyw8h0LNISycQKGtzW1eCn3LShsabTat0ygyfK5hVsnoPJtiTVIZi37qNyybd8T21YnmvLGA8tnr6%2FcvLOUw5x0l6P2xRZYm%2Bj%2BA%2B8KUH4%2FKDupiRVoLPFY9yv8uulB84AcshkKgSSTWozZ76sPXP%2BX8I5a9v2lp2J7cmKYb7h5wF9h%2F%2B88WH5R%2BMywuKHpeNcGPbtCq95RHA5hQ1SBZ%2BSXIGYfoCmaCG84WJjwxvsSpy66FhKF4frhYKsDNq%2BGQzeFsaxoq7gMxdFIrYEcxq6YvMK7MwMkGOqUBdLVMDfUWYD6j%2FeTi%2Bz3ZWECT3FCxSnEfqHHhPuLNpUY3qGV6vLX4bXtZW8AhHRNEJ5Z7%2FdUxbx4BjxUZs0Q%2FqypLUVBzSxaq9m4UYMhL4%2BTeGjsdPx3EsqHO0Kn0ys%2BmMH3PYo0EA6411KFMXLR4rh58gs6heUjEaouizRg3phIVDhvJFndhDBqIdCUlNhxzwZ5q1P7ws2ReN2viw9e85ZnbT9pp&X-Amz-Signature=d161235857c91016d3f846769a967721a1b07a9977bf84228f273518b19449f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

