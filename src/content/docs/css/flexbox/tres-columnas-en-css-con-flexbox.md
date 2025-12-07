---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXNXL55%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOgo84cMTqt5i0vEaHYVk17WbwOikQ3jUZvEFhq3tcKgIhAJdWh6awACW5s6XD8iywOIACCu7dTEEYWpt9A%2BmMb7mJKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGo%2BOHxxx0vbbju64q3AO%2BNa8npXesaE1Y8bdVVJKZXA4pzUBDVwBT%2Fm6Mz1unqP626AnHM0Z4VOqw03Hx3WHNVauPjb9LBszXrILsoqoNFUIzSsfMVOnGP%2BroJp5SP%2BthHGQrADiGVqAjiUe98JaSZ9NyBAVxh8r0Q3USADUXNZNcMR9GRTd4wyhiSBBodm5IAFN%2FpAu7dVdSLnY3EftoCNjceq%2FOfmCoMPZ030WFpPupjKw%2F3wq1qGB8FT5mYIv%2BGYHRWCLlvpQk1FshSY%2FUD0HO3zwb0rkl5Lm94WBihDX5pyNFuGS5neNp3s7%2Fmd1rn3BW%2FlJO35DM90fq3DQ3I6uWy1c6394ZCpevx5LWYRD77d8DO1zBZxBQREa%2F4syFevjhpC4d9V%2BsiifiptC%2FHekAnDLEdMQbQc0GkMKrdxOMcHtTr%2BLelC5AOl8nGFVyoDx8VL%2FXYmfoMkTm7nfWJF6d3CvWvw1M2qCYLcpOx484FjvKNyqU8X%2BZQIwJ4Z7t2sxH9iB%2F64qNH0qeOnmMmoAoTAvzuRdqLWslxamHTQ6vtXMc%2BUteOvkIZyBE2PCR7R%2BZcm4%2FtYuJkjj%2Fzefo1n%2BpGxSsdSTqxAxSQG8egAyGMuouYQgChb1x%2FXWv1R7WvoUXcgY9myCUcDCVqdfJBjqkAVAEkjtyxN6c8%2BCMZM2cVN0tUGt1Bn00wIOR4an45bZ9HWAOvhO56ROvKpnYDMduHUW%2FP6GJrkzvV2GwoO97W5fJguUf0ghVF6e9W20hAU0%2FV%2FTrr6eK4NN9uzaq0%2FcKyN5aLte2rsIcJX8VAH819%2BHymM9yDX1SwysNeHhafmnALLTCztu%2FH1P591Td%2BC3uXPDz8jS3xBRmymWDTYsZwRsf0Tzk&X-Amz-Signature=8cf35f5f90a56f757c1e016c659556e6696fe876f9f5cf55f7e07d518a9f06cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXNXL55%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOgo84cMTqt5i0vEaHYVk17WbwOikQ3jUZvEFhq3tcKgIhAJdWh6awACW5s6XD8iywOIACCu7dTEEYWpt9A%2BmMb7mJKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGo%2BOHxxx0vbbju64q3AO%2BNa8npXesaE1Y8bdVVJKZXA4pzUBDVwBT%2Fm6Mz1unqP626AnHM0Z4VOqw03Hx3WHNVauPjb9LBszXrILsoqoNFUIzSsfMVOnGP%2BroJp5SP%2BthHGQrADiGVqAjiUe98JaSZ9NyBAVxh8r0Q3USADUXNZNcMR9GRTd4wyhiSBBodm5IAFN%2FpAu7dVdSLnY3EftoCNjceq%2FOfmCoMPZ030WFpPupjKw%2F3wq1qGB8FT5mYIv%2BGYHRWCLlvpQk1FshSY%2FUD0HO3zwb0rkl5Lm94WBihDX5pyNFuGS5neNp3s7%2Fmd1rn3BW%2FlJO35DM90fq3DQ3I6uWy1c6394ZCpevx5LWYRD77d8DO1zBZxBQREa%2F4syFevjhpC4d9V%2BsiifiptC%2FHekAnDLEdMQbQc0GkMKrdxOMcHtTr%2BLelC5AOl8nGFVyoDx8VL%2FXYmfoMkTm7nfWJF6d3CvWvw1M2qCYLcpOx484FjvKNyqU8X%2BZQIwJ4Z7t2sxH9iB%2F64qNH0qeOnmMmoAoTAvzuRdqLWslxamHTQ6vtXMc%2BUteOvkIZyBE2PCR7R%2BZcm4%2FtYuJkjj%2Fzefo1n%2BpGxSsdSTqxAxSQG8egAyGMuouYQgChb1x%2FXWv1R7WvoUXcgY9myCUcDCVqdfJBjqkAVAEkjtyxN6c8%2BCMZM2cVN0tUGt1Bn00wIOR4an45bZ9HWAOvhO56ROvKpnYDMduHUW%2FP6GJrkzvV2GwoO97W5fJguUf0ghVF6e9W20hAU0%2FV%2FTrr6eK4NN9uzaq0%2FcKyN5aLte2rsIcJX8VAH819%2BHymM9yDX1SwysNeHhafmnALLTCztu%2FH1P591Td%2BC3uXPDz8jS3xBRmymWDTYsZwRsf0Tzk&X-Amz-Signature=07faba9f9f28750aaf9d6cc6b048310a0234a298db9a9dfc5935bbe72e11a62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

