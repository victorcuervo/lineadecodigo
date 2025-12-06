---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KI7F77O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7%2FkFC5lt5wftDXF%2Fg8DwQw28%2F6LbD36Om8lPjEGW6%2FAiEAp%2B6uuw%2Fkt2ag3jeb9ScMwktWtB4eMvGSHRzepXz6960q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGaGKqxuDqPmFun5uircA8YdHDheaUT0Z%2F%2BWTs%2FRtX9kh4LYMkzu%2FRTjUNdIXZBPuBoVT%2BkXXeFGeyzPHrgSiJABR%2BUZoGV97C5icuUBrrJ9eKVU0j8%2FVAXG80Aesd60SQmQCUQostibNXEc5QcCw5JtsAOzrPGpYqk9%2Bi5FGGMnUzRiwKWEgLIgHQIPKYH9PJ8WkjZfPpqZT9aSyByMnhNKVHGQcN8hdDv6SmpKouhkWRazvdgUxzIFl%2BmEo25bnPaYzrCNX4de2jQ6WlrnPrd58qiyg4%2BxNZ2oML1MZGRP8GtTYHn8%2BQLeHKB0Ya9A8vxPYv9hRJ25IxzfyTrxN31ng6pgdydal7YvWOug3IDs%2BXuLlDvib2cMpTmkkuVkCHG%2FMn69kk%2BuiLZZK1jqlz9Ggn5Ao8%2FM2v%2BzNvDqBZnuAF9%2FmAsl6Ewx%2F5Brvu8mzkkg3hv8P1lVTMJ2FQ3wcx%2BENNsGpic3B5vODz3ySUsJtRo9J7B2WK%2BxTG3%2Fh%2BPxjY%2F8QLPyRupKKytp7npqsm9ZB1JRTFOlbJyaBwZ%2B6C6pzz2ahguedPhvVOnUq1yP1XfdfronsQwRia0EChnJ9%2FBQeid9iphavXLb%2F4iXlUNKJ35W7u0HSgQppYn1gsR%2Bb%2Fryg3tojO%2FNi8eZMOKm0MkGOqUB8kvIAfJTvYGyYyJ5zMu8fzspBe3t%2BK%2Fj8nLsefVTql076IZyJexKdT89f2023wcj7dqDpdfpdHE4pbgVAZ05vNsoa00Lq7oiUUcBX9Jm4VxBP4a9Zfh9Pgji0%2BZChgLPNRxmA4EU7Cs1WjoDqZwyMejXWwv9iDz1SPmffqoglEWB0spP61Mm7MAmBf8xe8TppFZU4%2BecSDYET31yAM4Woj35NfzN&X-Amz-Signature=e0b843cdd1007095f65771d05e989bf303c1d1e2db86e97a126715afcfec7dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KI7F77O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7%2FkFC5lt5wftDXF%2Fg8DwQw28%2F6LbD36Om8lPjEGW6%2FAiEAp%2B6uuw%2Fkt2ag3jeb9ScMwktWtB4eMvGSHRzepXz6960q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGaGKqxuDqPmFun5uircA8YdHDheaUT0Z%2F%2BWTs%2FRtX9kh4LYMkzu%2FRTjUNdIXZBPuBoVT%2BkXXeFGeyzPHrgSiJABR%2BUZoGV97C5icuUBrrJ9eKVU0j8%2FVAXG80Aesd60SQmQCUQostibNXEc5QcCw5JtsAOzrPGpYqk9%2Bi5FGGMnUzRiwKWEgLIgHQIPKYH9PJ8WkjZfPpqZT9aSyByMnhNKVHGQcN8hdDv6SmpKouhkWRazvdgUxzIFl%2BmEo25bnPaYzrCNX4de2jQ6WlrnPrd58qiyg4%2BxNZ2oML1MZGRP8GtTYHn8%2BQLeHKB0Ya9A8vxPYv9hRJ25IxzfyTrxN31ng6pgdydal7YvWOug3IDs%2BXuLlDvib2cMpTmkkuVkCHG%2FMn69kk%2BuiLZZK1jqlz9Ggn5Ao8%2FM2v%2BzNvDqBZnuAF9%2FmAsl6Ewx%2F5Brvu8mzkkg3hv8P1lVTMJ2FQ3wcx%2BENNsGpic3B5vODz3ySUsJtRo9J7B2WK%2BxTG3%2Fh%2BPxjY%2F8QLPyRupKKytp7npqsm9ZB1JRTFOlbJyaBwZ%2B6C6pzz2ahguedPhvVOnUq1yP1XfdfronsQwRia0EChnJ9%2FBQeid9iphavXLb%2F4iXlUNKJ35W7u0HSgQppYn1gsR%2Bb%2Fryg3tojO%2FNi8eZMOKm0MkGOqUB8kvIAfJTvYGyYyJ5zMu8fzspBe3t%2BK%2Fj8nLsefVTql076IZyJexKdT89f2023wcj7dqDpdfpdHE4pbgVAZ05vNsoa00Lq7oiUUcBX9Jm4VxBP4a9Zfh9Pgji0%2BZChgLPNRxmA4EU7Cs1WjoDqZwyMejXWwv9iDz1SPmffqoglEWB0spP61Mm7MAmBf8xe8TppFZU4%2BecSDYET31yAM4Woj35NfzN&X-Amz-Signature=e390d9a54445e5e60ad4ec379baab53702c617c40e1d073ca26df46d1a1b9fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

