---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBVLQSS2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNtReJlDtXApJgeelMPlItgiwIQjfJC0o6vc4HdwYOoAiEAkWuYmOrEqlPJeGCW%2Ffh62UJIspXH83uIre3JgW0eZL4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwjvBPcIVGEWHXg4yrcA5bCWNStnFofEl4YCofJqpEoDgRN0dTOjjuFj8LGAL8mmn2uCxzzB25SWFHEd4qXIdmBNaI3IHZ3fJ0qrsM3U9CWWYoiMKQknoxCadw8d4t7D8puo16tVic63V4Hxw12LorH%2FwlbeGDLlPnYMqtLXXWD54zS3jwYWrktD1oGN8IStZ%2FYnduReaDnMXKlA6Elouzgv0rl8zrpc3pzT%2FFEZkGjFXR%2Fag%2FvtSUUoIdv5zTJ1OtFGEQyVsxCI83C3GfgmbDj3Z4do8qKgaJ3AA3oIsoviQnuMUVxkh7d2EUuffS%2FlqmTRLIjDxvZVLEWeK679ZVSAdzNj%2FqK0fq8%2Fg0jDIJEut1kAXQ74%2FBwrTfNPQu9a0T8U4Kqv0%2F740hMTJXChhdZgw7j2AO4Tuk%2BFNlM0Z7ACMrW6ayepQ5rdFRwJt22erMcYZkUhD1G4IopEPRKmzNyfXPn3uvOwte8ZbtPKVXJzix1pPi8O7YG4%2FTBhDJdcyt5Kskf4P2FaSWvmGu%2FSdChcUuQPKlaCBFyLKZa9YarJc8oUu1XAQxT4ohJMqdhak0yvmH2oM3fXMTt7u37AmdgvUHSQHmkHCjy1tAkv13b%2Fu1tnIYnaikfhJpDLwzTj6wlaitO%2BdDfxgz%2FMN%2F90skGOqUB1LRj7X%2FRmnSYJIaVGXtA11uLf6MrKOhGRU2x%2FbGMghRrHXpKDhASekLh43N%2BTIPbeiXwzafSw5RIaNu%2BuV62QfcrNHT28yxPqxxM5P9oc1H6E8N3lQgs3ADHYeyojX4lHrHXAAT%2BinpPmPob%2BnkK3pjeK8SNjNoKHV9ECrL3mMDBw1JXiYMhBhye%2FHaEqkm1EPZdlrOrHLBiaDx1SnSdplyYgPLZ&X-Amz-Signature=8ba3dfc3c68d574b9820162eab149f0d58b95990d39c4e3c8a48375705607fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBVLQSS2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNtReJlDtXApJgeelMPlItgiwIQjfJC0o6vc4HdwYOoAiEAkWuYmOrEqlPJeGCW%2Ffh62UJIspXH83uIre3JgW0eZL4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwjvBPcIVGEWHXg4yrcA5bCWNStnFofEl4YCofJqpEoDgRN0dTOjjuFj8LGAL8mmn2uCxzzB25SWFHEd4qXIdmBNaI3IHZ3fJ0qrsM3U9CWWYoiMKQknoxCadw8d4t7D8puo16tVic63V4Hxw12LorH%2FwlbeGDLlPnYMqtLXXWD54zS3jwYWrktD1oGN8IStZ%2FYnduReaDnMXKlA6Elouzgv0rl8zrpc3pzT%2FFEZkGjFXR%2Fag%2FvtSUUoIdv5zTJ1OtFGEQyVsxCI83C3GfgmbDj3Z4do8qKgaJ3AA3oIsoviQnuMUVxkh7d2EUuffS%2FlqmTRLIjDxvZVLEWeK679ZVSAdzNj%2FqK0fq8%2Fg0jDIJEut1kAXQ74%2FBwrTfNPQu9a0T8U4Kqv0%2F740hMTJXChhdZgw7j2AO4Tuk%2BFNlM0Z7ACMrW6ayepQ5rdFRwJt22erMcYZkUhD1G4IopEPRKmzNyfXPn3uvOwte8ZbtPKVXJzix1pPi8O7YG4%2FTBhDJdcyt5Kskf4P2FaSWvmGu%2FSdChcUuQPKlaCBFyLKZa9YarJc8oUu1XAQxT4ohJMqdhak0yvmH2oM3fXMTt7u37AmdgvUHSQHmkHCjy1tAkv13b%2Fu1tnIYnaikfhJpDLwzTj6wlaitO%2BdDfxgz%2FMN%2F90skGOqUB1LRj7X%2FRmnSYJIaVGXtA11uLf6MrKOhGRU2x%2FbGMghRrHXpKDhASekLh43N%2BTIPbeiXwzafSw5RIaNu%2BuV62QfcrNHT28yxPqxxM5P9oc1H6E8N3lQgs3ADHYeyojX4lHrHXAAT%2BinpPmPob%2BnkK3pjeK8SNjNoKHV9ECrL3mMDBw1JXiYMhBhye%2FHaEqkm1EPZdlrOrHLBiaDx1SnSdplyYgPLZ&X-Amz-Signature=1fd14372da58021d27fc46b39a18458a579ed6894b16f5a3afacc7fff6435f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

