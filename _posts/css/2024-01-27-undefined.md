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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSGPLD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFAlYGIiVV4%2FHp9dRWSJUDwLgqxBmwKGB5WEfi1zEEVkAiEAmGugg74aaxldynLT9%2BADiYfBQzqBIRpM0nmYwvlB0wwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPekY7kDyD6NVwW5%2BSrcA0scNhaqJIiv4enqgT2sTrGDh3KfkvUZHgc2GyqJaL4%2FKGEvERpCbICYEzepj4oViJh%2B1s7%2Bkee9V%2Fpooyi6XDtrmSxCkiXMNalDY0PyQGHEjpwB8m72Iv0iPj1mlgjv0wU9KCNnxJnVjqCFYJ0DcBGqBaxbE1acB3l92x%2B%2B6RUcB0VSIU%2FY3lEHpFPg2Gh9ZIZQSwHYlJrXxEu0TYse9561yAYcTGhrDTVfAXUKWczVBy97EmzndukbcYW9NLomBMyk5bGBIinONsjG%2FyAq9ll1bevvmxdDJwMECbmkmFvgAsvav26he0wWqM2R1J6ujV3A9%2Fl7%2BiuUA8y5EvIBJUkXmDXC4H5tyduHDurm2p%2B5WXqXXqQ1zZQQnyzD6yzfdfMjTScc33CsdR7xxORaV4yfIbIRUKfU6xGo3yNACRzXjiU0mC%2Ft4yMzM8v9TqCBSlKtbhYlcDi63nk64k7EfZ8oqd0zZLh5cx8T1kjrzgjeRm5iV5vVHNQ5pZYJKzKt4r5iJqxN%2Fay8ZLewS%2Bwmy2VDM32M7R1ORlFi3wb3kW3IUuWlR4FfMrHBEJqG21r4qWgaBYPjGDl4rA%2FRcTAoe05kP%2Fky9QRdpptHETxyiCBXx%2FtcYFSEZkcNd1UxMKShvskGOqUB8BL7gdzKw9u57btvHIqS64vGJNWiVig6bGWXlkisjLBAQPvPJU2FviZ6s0RLSH%2FJ5nq2JlZbS6Gk8dIhL9r7oyd8GdbgagHXdN9eC38SDFEwij5wQP7t0qucaSk2Xpo5BCOxLZEN6LoD5bymTVUSFY0XrZGhMoG5zhmVrJlmv6H%2BAFrh32v7XUxo9sC6v2kD19hMTxequQ%2B8I0Ws0ycNO8gur7XI&X-Amz-Signature=e0fdcec5275da8b70c76508ddfdadd4a33dbaf351d443ae4f59906b0eddff846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSGPLD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFAlYGIiVV4%2FHp9dRWSJUDwLgqxBmwKGB5WEfi1zEEVkAiEAmGugg74aaxldynLT9%2BADiYfBQzqBIRpM0nmYwvlB0wwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPekY7kDyD6NVwW5%2BSrcA0scNhaqJIiv4enqgT2sTrGDh3KfkvUZHgc2GyqJaL4%2FKGEvERpCbICYEzepj4oViJh%2B1s7%2Bkee9V%2Fpooyi6XDtrmSxCkiXMNalDY0PyQGHEjpwB8m72Iv0iPj1mlgjv0wU9KCNnxJnVjqCFYJ0DcBGqBaxbE1acB3l92x%2B%2B6RUcB0VSIU%2FY3lEHpFPg2Gh9ZIZQSwHYlJrXxEu0TYse9561yAYcTGhrDTVfAXUKWczVBy97EmzndukbcYW9NLomBMyk5bGBIinONsjG%2FyAq9ll1bevvmxdDJwMECbmkmFvgAsvav26he0wWqM2R1J6ujV3A9%2Fl7%2BiuUA8y5EvIBJUkXmDXC4H5tyduHDurm2p%2B5WXqXXqQ1zZQQnyzD6yzfdfMjTScc33CsdR7xxORaV4yfIbIRUKfU6xGo3yNACRzXjiU0mC%2Ft4yMzM8v9TqCBSlKtbhYlcDi63nk64k7EfZ8oqd0zZLh5cx8T1kjrzgjeRm5iV5vVHNQ5pZYJKzKt4r5iJqxN%2Fay8ZLewS%2Bwmy2VDM32M7R1ORlFi3wb3kW3IUuWlR4FfMrHBEJqG21r4qWgaBYPjGDl4rA%2FRcTAoe05kP%2Fky9QRdpptHETxyiCBXx%2FtcYFSEZkcNd1UxMKShvskGOqUB8BL7gdzKw9u57btvHIqS64vGJNWiVig6bGWXlkisjLBAQPvPJU2FviZ6s0RLSH%2FJ5nq2JlZbS6Gk8dIhL9r7oyd8GdbgagHXdN9eC38SDFEwij5wQP7t0qucaSk2Xpo5BCOxLZEN6LoD5bymTVUSFY0XrZGhMoG5zhmVrJlmv6H%2BAFrh32v7XUxo9sC6v2kD19hMTxequQ%2B8I0Ws0ycNO8gur7XI&X-Amz-Signature=8d44e3682a25ea6f47d413074e0c52cf38c9df0384421298a5ddc8995ad42be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

