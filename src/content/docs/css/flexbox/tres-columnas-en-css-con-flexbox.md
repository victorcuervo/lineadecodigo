---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGOTSIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJCrxk3Vp5ukctPzjsQcWohzUnj%2FOPssC05SWLjmaeTAiBmImG308cLbn5HRTYD7JdcH7JYB8aNWSU5ADEoerwIYyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yKf2U7No0hXXXEWKtwDF1Spg%2FLiYuICYI4pfQcybNZSyHjWNqfPKkkkgxkiUsZeY764%2Fxe3mU0mwsFmz7E%2BWaiGNABU3hPuLuaQyLbX%2F0%2FTN356LXRtlfXqNdNgZ5%2Fiw3dGcUPyX3T5t8aWyPUOAfE%2Fv%2Bz4rWDYVIjULnmXiauJOi13nklc7mfvdBLxzBVSJad%2B5fBqJ1Ml4JagMbp8haXD8K%2FfsOBwHAtjyFFq9WuKNefYxnFWbaf%2FTd4YnDbL3L%2FHx%2F01aWhGXi2jRotH%2B9Fzz3a%2FL0AUHJhUbf64f5hgeFCUxzb0Uhf5wyYZ56wVoFUqotubnQkjSS2Cph%2FMLfVJoqTGE5Hl1kXdyZUHTvf5A1Zw%2FL6Z%2FHyJUD2QvltaOxBYB2twnFzsZ5VTOkWN9zlbDoXoWfm96gPF%2FSidKB4mylIIlcDPXJZFfmOgRV1DtH61CKKpUM3NpSF%2FYCMrfB%2BZykuhjnY5P4kWvb7%2F2GPW714faOYkGvsjeui3uVqDxYQ%2B29pF2RkgO%2B5JYNqZGuZe4%2F1ejynkPQ3QrCGfsNMvR95XJCD6DbLz%2FaMSZdTCzhYJICrqx7E%2BKegc4PP6ZczfuXxliRrrTgvX1qCVCa%2BSZDack7ocZBuE65W%2BR5p9EyipEvx37st4Ru8w6f%2FcyQY6pgFkolKVXtEMwF8Qyi8gWw0LNnklFZv9DEqHvKgYdxEpO3Xh59t3FytUgnk0Wz9LN1KvCraAJmcK9Wk8BoTyQwgCI5v25FBXwqlj9vpx6umeCLgRl8IbwC7JHFAWzTu8r5lAjWd0Dl%2BQ%2F0JcSd%2Fpdj2IzFmzoddgSu8XVhSsQoAeTXvIeUYB%2BR%2FkWJTH9YrTdUOLPoVEGZDg9rjgIUrMBQbiZV%2FLuBS5&X-Amz-Signature=1b54c8f71e1e106462a0bee02869e5af4947424c03657950bd0aa1a6e91ac910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGOTSIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJCrxk3Vp5ukctPzjsQcWohzUnj%2FOPssC05SWLjmaeTAiBmImG308cLbn5HRTYD7JdcH7JYB8aNWSU5ADEoerwIYyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yKf2U7No0hXXXEWKtwDF1Spg%2FLiYuICYI4pfQcybNZSyHjWNqfPKkkkgxkiUsZeY764%2Fxe3mU0mwsFmz7E%2BWaiGNABU3hPuLuaQyLbX%2F0%2FTN356LXRtlfXqNdNgZ5%2Fiw3dGcUPyX3T5t8aWyPUOAfE%2Fv%2Bz4rWDYVIjULnmXiauJOi13nklc7mfvdBLxzBVSJad%2B5fBqJ1Ml4JagMbp8haXD8K%2FfsOBwHAtjyFFq9WuKNefYxnFWbaf%2FTd4YnDbL3L%2FHx%2F01aWhGXi2jRotH%2B9Fzz3a%2FL0AUHJhUbf64f5hgeFCUxzb0Uhf5wyYZ56wVoFUqotubnQkjSS2Cph%2FMLfVJoqTGE5Hl1kXdyZUHTvf5A1Zw%2FL6Z%2FHyJUD2QvltaOxBYB2twnFzsZ5VTOkWN9zlbDoXoWfm96gPF%2FSidKB4mylIIlcDPXJZFfmOgRV1DtH61CKKpUM3NpSF%2FYCMrfB%2BZykuhjnY5P4kWvb7%2F2GPW714faOYkGvsjeui3uVqDxYQ%2B29pF2RkgO%2B5JYNqZGuZe4%2F1ejynkPQ3QrCGfsNMvR95XJCD6DbLz%2FaMSZdTCzhYJICrqx7E%2BKegc4PP6ZczfuXxliRrrTgvX1qCVCa%2BSZDack7ocZBuE65W%2BR5p9EyipEvx37st4Ru8w6f%2FcyQY6pgFkolKVXtEMwF8Qyi8gWw0LNnklFZv9DEqHvKgYdxEpO3Xh59t3FytUgnk0Wz9LN1KvCraAJmcK9Wk8BoTyQwgCI5v25FBXwqlj9vpx6umeCLgRl8IbwC7JHFAWzTu8r5lAjWd0Dl%2BQ%2F0JcSd%2Fpdj2IzFmzoddgSu8XVhSsQoAeTXvIeUYB%2BR%2FkWJTH9YrTdUOLPoVEGZDg9rjgIUrMBQbiZV%2FLuBS5&X-Amz-Signature=e7ffc8441d51178e425ef42a269c7ccc845e1a833235ee4dcdf327dbd3c34790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

