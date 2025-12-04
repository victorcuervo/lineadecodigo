---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4SZTQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCHwtjrpyrBLT1Q6TyuNTPwQ7xs03wQBFeWhf7xJDa%2B%2BwIgAOApmQFxTSN7Fccq%2FliX1Zws0nbAhzYQzJf7aQncejMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJkL4vAXmhVeIIQrBircA%2FSYdG0e1ZqrCkFmQ2%2F1ULxM7J0xAluaTsYMwmhHJGLkBWvdo9tv9FL4j5ZxCNeOxazqSbyfvS5yRjcYfpSkFIq3EK7OsCLrRiT9sTWvP2gyhzLGwpXwyatjBJQKEy8EFGqHOkg6980TQIuApW55esOcylXEsGvVFParO307Ry7OMu3IeqcMNmC96IW2dsxnP0aSAgcmUrYJI8nhKXiiZhBBooC62NpBFU%2F%2FEgE1rtW93Oa%2FoZ4qhKOandkdNWm8gdJywEYC0ByoY%2FL1bg9J0aJFf9c1GEOP1Npy%2FGVxKHvPa6%2BiHYbDOa59z0A%2B%2BRA3o51oMKDQDX%2FHbEgmJChm9I11rDsjq7p6womlPRxDVU5sCEGcZ8nLcVB6Ve3ybh20osVUAn2gbHGUrE18e9zHPDmjKNveOd6pizHrLF5v9Jahru6GhlPnIE4KGJbmsrD8QUMFL5a2mwUK1yLXK2ezZPHcR5POlFnCUJh%2BWuoyvYR0xypPlWIUTkekkwaQRTUldVRniy6Ji93leXAcVe5Je3y2JpGSCYGGq7Vjo4k2%2FZHvtV1VBer%2FKsjca%2B3q5IwUYI35kyoalSEIbQGYmEJXxpyr0uM86pn0e%2Fvq1DvjKmBFacX6lEiEGklpX4O0MOehxskGOqUBASNMPoVsPSbgqmZjC3hv%2F9iGkASwXgbGJ%2BScgA4Xh0dJj1uWD1fpTFxk1l8YWcwzaxzd4lZHuVw9ZQuce1UHxRoDz86u42Rc6ADGSK1XWkB5lNXXplOfgEubHZtyEfE6H8vLYJjethmQA4K2GfO2z%2BG8rlNcSJTv9eqnjb50qn%2Bto8NkVJkCXFdF%2BJxPtV%2Fuy6Z3RVo7DCTzp23IJgJ%2BIBXJVHU5&X-Amz-Signature=cbf6bcf136d65d3b57d6f56a2145e9b686a7658bca47b5975ed0d7ecda35d019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4SZTQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCHwtjrpyrBLT1Q6TyuNTPwQ7xs03wQBFeWhf7xJDa%2B%2BwIgAOApmQFxTSN7Fccq%2FliX1Zws0nbAhzYQzJf7aQncejMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJkL4vAXmhVeIIQrBircA%2FSYdG0e1ZqrCkFmQ2%2F1ULxM7J0xAluaTsYMwmhHJGLkBWvdo9tv9FL4j5ZxCNeOxazqSbyfvS5yRjcYfpSkFIq3EK7OsCLrRiT9sTWvP2gyhzLGwpXwyatjBJQKEy8EFGqHOkg6980TQIuApW55esOcylXEsGvVFParO307Ry7OMu3IeqcMNmC96IW2dsxnP0aSAgcmUrYJI8nhKXiiZhBBooC62NpBFU%2F%2FEgE1rtW93Oa%2FoZ4qhKOandkdNWm8gdJywEYC0ByoY%2FL1bg9J0aJFf9c1GEOP1Npy%2FGVxKHvPa6%2BiHYbDOa59z0A%2B%2BRA3o51oMKDQDX%2FHbEgmJChm9I11rDsjq7p6womlPRxDVU5sCEGcZ8nLcVB6Ve3ybh20osVUAn2gbHGUrE18e9zHPDmjKNveOd6pizHrLF5v9Jahru6GhlPnIE4KGJbmsrD8QUMFL5a2mwUK1yLXK2ezZPHcR5POlFnCUJh%2BWuoyvYR0xypPlWIUTkekkwaQRTUldVRniy6Ji93leXAcVe5Je3y2JpGSCYGGq7Vjo4k2%2FZHvtV1VBer%2FKsjca%2B3q5IwUYI35kyoalSEIbQGYmEJXxpyr0uM86pn0e%2Fvq1DvjKmBFacX6lEiEGklpX4O0MOehxskGOqUBASNMPoVsPSbgqmZjC3hv%2F9iGkASwXgbGJ%2BScgA4Xh0dJj1uWD1fpTFxk1l8YWcwzaxzd4lZHuVw9ZQuce1UHxRoDz86u42Rc6ADGSK1XWkB5lNXXplOfgEubHZtyEfE6H8vLYJjethmQA4K2GfO2z%2BG8rlNcSJTv9eqnjb50qn%2Bto8NkVJkCXFdF%2BJxPtV%2Fuy6Z3RVo7DCTzp23IJgJ%2BIBXJVHU5&X-Amz-Signature=47bbb581d3cd94f9865ab809398242436fcd64599aab543af15b8ee1d4da4409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

