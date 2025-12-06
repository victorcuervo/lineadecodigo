---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7JHNWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgfz8Bi8%2FHxo4a1X23daYFvuXWJoAOaf91Kv1MKeRGNgIgdb4gMk1AFu8gjUrtDhE8kpjoiFTwliyOiv3zFYrbRfcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD8KZj4DfFoDIJfATCrcAyW%2BL8TddvuDXX8l2sDaDkUPuZtkD9SQ%2BJS7cqCnNSZVlmKqonRugwzj5vycQ8FS8o0IL3YLXJldyJsFveqTCdbfh%2B%2FTvZQdv7C4VhSg3%2FEbk7I5eNu5P%2BkE2DlBPyh1L34ahx034kvz5Cc04jsTlrGP9WM7t0lMB8rC9phVlk2sW%2FG2soUuydpKgRHjIHji50EAv%2FI6nwTjSf%2Bp8PTUPxSAqL%2FqpA7uvT5LIjrkMkj1%2F%2BQZwjKnQn4xz2YmY%2BUyiogbqKFlHgN9f10LynBwpif6AeOLi6MfU%2FBNBDotbffmMadQPlONQzr%2FRzfsUt8bytnaRVKAWsJ7Y4MXNNUKTJMDltydOxt6p32zfzjAYMIaZ1hh9KZbSVH2hiB32F8J8cxX9dtSq7Ke3lwRIriUafB6%2FqsHeTtEsESIL332nZvxupLSh2KB%2FrEq91mz9zCymkw%2Bdt%2BbURRV1yl3An1E4hRY8%2BzehQ8SkieqcoLpHOA%2FdODUbAv%2FWjZvI%2BttSmiBBtOUC5VspRxgcN0zY845Pt6dnaOQsR6wtKmc8ghMxGpMscWW54Oi%2FmYEoF2VO6IAoKehgk%2F7FBlgBUQHitBAZNxTHCojkSOn5ALhlFWCVWE6YIS9XozgBkWQg5%2B5MIGozskGOqUBRWmIf6vY4KUJyXkBtHEVISxUh9rf%2B0bfVojYdHSOzZPnxH6BF4y4%2FOgJuvv3JL4NPMPnwtBIH5VGGRK%2BkGhm91quxJO8VlPXJ%2F13pTjSPrVDNWmx0PHoFJcWaAsEynK3Eyrjab%2BuOD7ih44DIW4ZGx6EYe4MX4SbtPq1ATpU0pQpdfch5M7P%2FP7jlqjDpuMwk3GNVzoZixMczsRY3Iw86DD01Lnj&X-Amz-Signature=0363e952a8d57593e05fa2b119c8e551b4979c2156887fea1aea281b4f06fa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7JHNWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgfz8Bi8%2FHxo4a1X23daYFvuXWJoAOaf91Kv1MKeRGNgIgdb4gMk1AFu8gjUrtDhE8kpjoiFTwliyOiv3zFYrbRfcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD8KZj4DfFoDIJfATCrcAyW%2BL8TddvuDXX8l2sDaDkUPuZtkD9SQ%2BJS7cqCnNSZVlmKqonRugwzj5vycQ8FS8o0IL3YLXJldyJsFveqTCdbfh%2B%2FTvZQdv7C4VhSg3%2FEbk7I5eNu5P%2BkE2DlBPyh1L34ahx034kvz5Cc04jsTlrGP9WM7t0lMB8rC9phVlk2sW%2FG2soUuydpKgRHjIHji50EAv%2FI6nwTjSf%2Bp8PTUPxSAqL%2FqpA7uvT5LIjrkMkj1%2F%2BQZwjKnQn4xz2YmY%2BUyiogbqKFlHgN9f10LynBwpif6AeOLi6MfU%2FBNBDotbffmMadQPlONQzr%2FRzfsUt8bytnaRVKAWsJ7Y4MXNNUKTJMDltydOxt6p32zfzjAYMIaZ1hh9KZbSVH2hiB32F8J8cxX9dtSq7Ke3lwRIriUafB6%2FqsHeTtEsESIL332nZvxupLSh2KB%2FrEq91mz9zCymkw%2Bdt%2BbURRV1yl3An1E4hRY8%2BzehQ8SkieqcoLpHOA%2FdODUbAv%2FWjZvI%2BttSmiBBtOUC5VspRxgcN0zY845Pt6dnaOQsR6wtKmc8ghMxGpMscWW54Oi%2FmYEoF2VO6IAoKehgk%2F7FBlgBUQHitBAZNxTHCojkSOn5ALhlFWCVWE6YIS9XozgBkWQg5%2B5MIGozskGOqUBRWmIf6vY4KUJyXkBtHEVISxUh9rf%2B0bfVojYdHSOzZPnxH6BF4y4%2FOgJuvv3JL4NPMPnwtBIH5VGGRK%2BkGhm91quxJO8VlPXJ%2F13pTjSPrVDNWmx0PHoFJcWaAsEynK3Eyrjab%2BuOD7ih44DIW4ZGx6EYe4MX4SbtPq1ATpU0pQpdfch5M7P%2FP7jlqjDpuMwk3GNVzoZixMczsRY3Iw86DD01Lnj&X-Amz-Signature=9339d87fad70c399339cb42a9592f9fa0ed35d6a3420321f331a640a5a7edf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

