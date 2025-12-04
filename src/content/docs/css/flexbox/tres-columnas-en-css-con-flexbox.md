---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJUT6FE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4uVppbPa5SP97Owl%2FJvEQ0AY94atZFXCtdtgykNLOygIgaCBpSqJad2c1W9EoZGXdTgHh5U0LdfKrIJIH8FMZqUsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdXj%2BArDY8d%2FqkWkCrcA9JtNqn00e2mhsSJWeDbDoWMdkB%2FVCtS8hTY2JZLTPwePTXG%2F7Od%2Fr5RJGovUSpGRJpECIFeoKVgrTE%2Fyq%2F98y2pa6HsqOVqJy487qkyNTAhTpA27wjE4DsHoy3v1u6OND3foTKBFGHEACHrD%2FKVb3kPo9L52HKJVH8UhkHdLoEWqR6ZYUnMl9jZqAVNl5uv1UZYWn%2FI%2BxATHD%2BYsGxGsknUMvTHQ%2FuyanKGQ54ix2TtWZpPZLgFBzniZ8MLa3%2Fv2zaDxrZu3AdT9dWKOmkTdJR015odvNnq2KHVCGpi3M%2FbPFJiz4vQtyfKuaobyujyN7jbiZ1TU%2FUOZ%2BCCNbScpLLzzVc%2FFGuc7Xo%2FfDy5Dinn3hGzKjw3E2h1V7jekPCZDZFCdMBl%2F3rSFfN2icmhrzH4BCqRcrhCx27FHvvtxiZ4pA%2FoT3ea6W7NzCzhDi41EdvBuTF%2FUX5YON0TDDL%2FTloHIMsuXK%2BTu1Np3iKMTooIIqRL9bPimwaVQz%2BjHgHFXEFG3377hqu6R2NC94PW8R9YV8gGWzi35gyFxhEiwgim2WU4yt3%2Bnuf9Op8vUYyUCb9iZqtwaOsxlVEytIvhYt7nNp5O4AsQsW6JUGqXpxD1ZqqxZc2a3aAoRqS6MOehxskGOqUBze3TEbo%2FymIdlvuUVmljq2rHq3oniXVhOkiWGeMWSTOXFa5tZo9R9HOkPc4PUc7AHWHi2p93DBEL8oPKrPyWY3nrTABznwVn1f6QZFcvOAuhQHMUZV32eEwPURJsvUj0jn%2FsI%2F8VmsJkaRk2cSo6KNDgQ2AnE%2BmeTP6bkD5RmcbmREu37Y%2FkxqASoOkId2v%2B8tGRkbDQqsMDDNLCgdYmQJprEbV2&X-Amz-Signature=6ebf4c1debd1aa2d094b6dd7a17867799c88c567fbad077025b78b208d208ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJUT6FE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4uVppbPa5SP97Owl%2FJvEQ0AY94atZFXCtdtgykNLOygIgaCBpSqJad2c1W9EoZGXdTgHh5U0LdfKrIJIH8FMZqUsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdXj%2BArDY8d%2FqkWkCrcA9JtNqn00e2mhsSJWeDbDoWMdkB%2FVCtS8hTY2JZLTPwePTXG%2F7Od%2Fr5RJGovUSpGRJpECIFeoKVgrTE%2Fyq%2F98y2pa6HsqOVqJy487qkyNTAhTpA27wjE4DsHoy3v1u6OND3foTKBFGHEACHrD%2FKVb3kPo9L52HKJVH8UhkHdLoEWqR6ZYUnMl9jZqAVNl5uv1UZYWn%2FI%2BxATHD%2BYsGxGsknUMvTHQ%2FuyanKGQ54ix2TtWZpPZLgFBzniZ8MLa3%2Fv2zaDxrZu3AdT9dWKOmkTdJR015odvNnq2KHVCGpi3M%2FbPFJiz4vQtyfKuaobyujyN7jbiZ1TU%2FUOZ%2BCCNbScpLLzzVc%2FFGuc7Xo%2FfDy5Dinn3hGzKjw3E2h1V7jekPCZDZFCdMBl%2F3rSFfN2icmhrzH4BCqRcrhCx27FHvvtxiZ4pA%2FoT3ea6W7NzCzhDi41EdvBuTF%2FUX5YON0TDDL%2FTloHIMsuXK%2BTu1Np3iKMTooIIqRL9bPimwaVQz%2BjHgHFXEFG3377hqu6R2NC94PW8R9YV8gGWzi35gyFxhEiwgim2WU4yt3%2Bnuf9Op8vUYyUCb9iZqtwaOsxlVEytIvhYt7nNp5O4AsQsW6JUGqXpxD1ZqqxZc2a3aAoRqS6MOehxskGOqUBze3TEbo%2FymIdlvuUVmljq2rHq3oniXVhOkiWGeMWSTOXFa5tZo9R9HOkPc4PUc7AHWHi2p93DBEL8oPKrPyWY3nrTABznwVn1f6QZFcvOAuhQHMUZV32eEwPURJsvUj0jn%2FsI%2F8VmsJkaRk2cSo6KNDgQ2AnE%2BmeTP6bkD5RmcbmREu37Y%2FkxqASoOkId2v%2B8tGRkbDQqsMDDNLCgdYmQJprEbV2&X-Amz-Signature=ca0e981c5bc978f2dabc565e246182c41db7594e1d6be44d943326c9371bfbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

