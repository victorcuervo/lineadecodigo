---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO2E7KO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGw39XttWi1%2Brn39eeQRu4UXWnwXonIt9SbJuXmDKU53AiAiDkuGXGYzvQZR4F5NmCc%2B9oqfyT2oUEgimIYz6EW80iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2yp9Bcrb1pg6dsoYKtwDCbHzN3NKnF8Yq%2Fw4n8EPpXnmptx9Pcc80Si3XU62db%2BqYK9oPiz5kBUDPHh%2FPKEttAvbXYE4fLUO%2Bct1GC8pjcivcimn8%2FGm%2FVzmYA4W7SLQq1FNdp9%2FdUgRFUtB%2BzYtxpaLScJi%2BnpBGeTDVHtC5wlGSX69kM%2BnJQ9Cc6YtJi4ldawVSRCMouanHCKXoVjV98%2F9K76BRSLwOc5MT9cQr91tSm%2Bg1MEvfyzgxoEzcInCjyHjzTKAAjHhrdSwJoSjE2WkQEGOWeVsDWYMW0Uibiun90jwBR7TT1eG8s%2F%2F3%2By2SPY0z%2BP6SoaT9KtkjBi6rBLkl4iSNbVE82gBZpqW4hYq5uvSogKWDVRDmalQLOCY95eIBmAqaLBHQqLHYzYTOHbV3XhLPWkNbEUOGub10Opmh8utP2kjT0D75TicB9sTeAjtZ4TiHm%2BBLUSDBCvgWkUBRvs0wpAQ3WJbjzfrtczVRVFBcdyvmMU26hltg1VUGwYGxWnKoUBax6%2FHwOPEHn563bjFRVIDxze0e59%2FFNbrI3w2Vp59kTSXV0efjW8t1tmnWnOGe8%2B7DU2Ush0UiOcBiEwY8%2FztGs97yasK6k1kp3exQpeFL%2Bmcf%2F5idgiWGYaX%2BDMHNUvZaJMw%2FsbXyQY6pgHuUSySkiYZiP328lgW5U5JLD90mURPUTQB7MlGRDxABdh0gwF9D6vAfAr8pHpSj6e5dx2DzNk%2FmK2TDcGKnQoJ1duPKpauPLxQSK4fLOrNzmUYC4W7QgMYaex6SGgbcNeyEg8KjHzYx4qMQdC4S64CkzxPoyzvgkZ7oPzh9UGRysEpkbeLDlAltJ4HyN10oQ2Uf5J%2BV7G%2BvWQt6RTNdJfctrT5cnsG&X-Amz-Signature=0a0487e7499fde92203544d103884d7afc7218678ecdc177814cef72ed4a3530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO2E7KO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGw39XttWi1%2Brn39eeQRu4UXWnwXonIt9SbJuXmDKU53AiAiDkuGXGYzvQZR4F5NmCc%2B9oqfyT2oUEgimIYz6EW80iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2yp9Bcrb1pg6dsoYKtwDCbHzN3NKnF8Yq%2Fw4n8EPpXnmptx9Pcc80Si3XU62db%2BqYK9oPiz5kBUDPHh%2FPKEttAvbXYE4fLUO%2Bct1GC8pjcivcimn8%2FGm%2FVzmYA4W7SLQq1FNdp9%2FdUgRFUtB%2BzYtxpaLScJi%2BnpBGeTDVHtC5wlGSX69kM%2BnJQ9Cc6YtJi4ldawVSRCMouanHCKXoVjV98%2F9K76BRSLwOc5MT9cQr91tSm%2Bg1MEvfyzgxoEzcInCjyHjzTKAAjHhrdSwJoSjE2WkQEGOWeVsDWYMW0Uibiun90jwBR7TT1eG8s%2F%2F3%2By2SPY0z%2BP6SoaT9KtkjBi6rBLkl4iSNbVE82gBZpqW4hYq5uvSogKWDVRDmalQLOCY95eIBmAqaLBHQqLHYzYTOHbV3XhLPWkNbEUOGub10Opmh8utP2kjT0D75TicB9sTeAjtZ4TiHm%2BBLUSDBCvgWkUBRvs0wpAQ3WJbjzfrtczVRVFBcdyvmMU26hltg1VUGwYGxWnKoUBax6%2FHwOPEHn563bjFRVIDxze0e59%2FFNbrI3w2Vp59kTSXV0efjW8t1tmnWnOGe8%2B7DU2Ush0UiOcBiEwY8%2FztGs97yasK6k1kp3exQpeFL%2Bmcf%2F5idgiWGYaX%2BDMHNUvZaJMw%2FsbXyQY6pgHuUSySkiYZiP328lgW5U5JLD90mURPUTQB7MlGRDxABdh0gwF9D6vAfAr8pHpSj6e5dx2DzNk%2FmK2TDcGKnQoJ1duPKpauPLxQSK4fLOrNzmUYC4W7QgMYaex6SGgbcNeyEg8KjHzYx4qMQdC4S64CkzxPoyzvgkZ7oPzh9UGRysEpkbeLDlAltJ4HyN10oQ2Uf5J%2BV7G%2BvWQt6RTNdJfctrT5cnsG&X-Amz-Signature=bac71bc77d414f6959bc3e8e4201ffd0e839b61bc0d635772834925d18ea230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

