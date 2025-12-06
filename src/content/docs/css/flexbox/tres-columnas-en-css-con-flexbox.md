---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLQZMOP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv8yK8NjWhF96bLIqZuBMhZPZOv2XNrNnDcdCGe41d1wIgJnDpwRJkcz8pNzGBCqorUnd4oBBD8Dldw2PVqPUGBK4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOaukJ4ydosHEK5mQCrcA6BBdr3YhMzrl1R7EuXkj9UZ9ZGMbPBdiGL%2BbkmuH%2BzE8uLNLCbBMpKA2HYulzcO%2BfMvaBf7pp1NKIKJrsCfawzrjhbMQ9gnVBoGqJ8H9hhqVluY6OrDGjUm0MFlzG%2FiXVOtsTmgQazpjGG3fMWxf6SxUW52Y8EOtUUOkF29JXgss2ttx5yyn3KoZYQf%2Bz2GObsE4O69gJmCCLocZbwXICHwJOgyX63awQ4xtKKwwDBzyBzK4So%2BhbLQOiRNEJkwAPwE2crivJ5bTDcBYe3O3riWP4PQxW2SIGQw6wo3k6OScxh8%2Bcz4mn%2FbrAy5VZuI2r3zRAbQNnDG%2FkNxR%2BWTafsGe8cXwHuVJat4p3joQCf7Z%2B44VMaiJhglF5QoSapsKMvT3cqKsb1YcCV8gP617c19tCKzLevEK6masIu70ukh%2B82BBitlKqdESuNiL%2F0myOTChB%2BlXn3kvSjBzwypyNezja2vMPuEbWHt%2BeT9Kyht7nCxSoQi%2F%2Bh%2BNZi9IIJd9j1uBWMKGadysqSjknKMXvR0BQdcmCEfvBYqciRVDE9BU1v21PwsyfeLe78j2aLw7ZwZY37vRvIubiifcOmifrj6WDeafZ0ZsWqJt7%2BvWDlkzyFj7%2FA1UVsHqWiVMLDT0skGOqUBiP8mMwPkjSLDVeBH9LsxBocbyiHfWFVn83Mz4%2BDdcmVODc66WQamZ3tmirdnkaNoBU38bz3PuTBmx1i0Dh731ETExRICxHJaMy9sYIMlR2ZJG137oPuUvs0QZVld3DiWDeybUMUw2psPaxZvLEdUf88HtFwpA34hV30IwfXqANQCgedcvvu6rdyDYODui%2FiAtMav3SxrtMzlFyTKmvqLNdP1AZIw&X-Amz-Signature=b360e4b950a884702d0d9345e44ba3dc2249b2ee798e51e8deeaab03852ddc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLQZMOP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv8yK8NjWhF96bLIqZuBMhZPZOv2XNrNnDcdCGe41d1wIgJnDpwRJkcz8pNzGBCqorUnd4oBBD8Dldw2PVqPUGBK4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOaukJ4ydosHEK5mQCrcA6BBdr3YhMzrl1R7EuXkj9UZ9ZGMbPBdiGL%2BbkmuH%2BzE8uLNLCbBMpKA2HYulzcO%2BfMvaBf7pp1NKIKJrsCfawzrjhbMQ9gnVBoGqJ8H9hhqVluY6OrDGjUm0MFlzG%2FiXVOtsTmgQazpjGG3fMWxf6SxUW52Y8EOtUUOkF29JXgss2ttx5yyn3KoZYQf%2Bz2GObsE4O69gJmCCLocZbwXICHwJOgyX63awQ4xtKKwwDBzyBzK4So%2BhbLQOiRNEJkwAPwE2crivJ5bTDcBYe3O3riWP4PQxW2SIGQw6wo3k6OScxh8%2Bcz4mn%2FbrAy5VZuI2r3zRAbQNnDG%2FkNxR%2BWTafsGe8cXwHuVJat4p3joQCf7Z%2B44VMaiJhglF5QoSapsKMvT3cqKsb1YcCV8gP617c19tCKzLevEK6masIu70ukh%2B82BBitlKqdESuNiL%2F0myOTChB%2BlXn3kvSjBzwypyNezja2vMPuEbWHt%2BeT9Kyht7nCxSoQi%2F%2Bh%2BNZi9IIJd9j1uBWMKGadysqSjknKMXvR0BQdcmCEfvBYqciRVDE9BU1v21PwsyfeLe78j2aLw7ZwZY37vRvIubiifcOmifrj6WDeafZ0ZsWqJt7%2BvWDlkzyFj7%2FA1UVsHqWiVMLDT0skGOqUBiP8mMwPkjSLDVeBH9LsxBocbyiHfWFVn83Mz4%2BDdcmVODc66WQamZ3tmirdnkaNoBU38bz3PuTBmx1i0Dh731ETExRICxHJaMy9sYIMlR2ZJG137oPuUvs0QZVld3DiWDeybUMUw2psPaxZvLEdUf88HtFwpA34hV30IwfXqANQCgedcvvu6rdyDYODui%2FiAtMav3SxrtMzlFyTKmvqLNdP1AZIw&X-Amz-Signature=536dee9dfed066d33aa9d3909cdbd5f15a8ffb6117f9687840ceb9ef6041272f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

