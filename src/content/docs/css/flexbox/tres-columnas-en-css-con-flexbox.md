---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2KUSU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDLrmO8JfSgkY%2FoI9watHK5RLCuvGEs%2FM99FLiOhvlFAiEA3MEDaCoyYhbB5yXEskZ73%2FxSrIbDicsNV5HaV1I9Rf4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvoRmeheBINE%2FPwOyrcA4bL9S10fv5eZL5d1pDAJikiQvak%2FCCsfPA4JO0RcYcKp6rXzlXrFeeYkxr%2BedICciG%2FX7RoyeUpcn%2BAN%2BCyiMvSOpnEK3KsdpAmQg8YTiEbj0iXbKvB1eddXcayci5bYpWx%2FSiLJMoUMNbfkOMRP%2FAnKcAEZL4U3m4oVru%2F29Aag9aO0k9zIKmCmamrMcbISrW5XgR%2F5jsPk7TC5un1BL8AoTi6X%2Fzuvu%2FMQKWEeu7r%2F7WiysJHNRyx7eboyVPER8POY40M6wRWVsUqg22oycQsRDAvCGE8%2BB09%2F%2BFiOx%2F%2F8aoDDkHrXv1JSIze8gI8pFNf3oVKj7bYvCLjijm96thldVPHJdnqq9Dc8mT%2BKxvOsNeXbmMRZ6lgKY5jg%2F6m07BWFeHuMrzTyOTT1CcnWJZpy3h0anqWRWiJ8yxCjvhy7Pv%2Fw6fdCq7sV8HtHd4xxmVafwxyp%2FuhNqHL2LQFvbdQTp1NtzJUiSBVRqCY6i9du3Hmzx78nYX5ZWjbwK0WM2xZtuQHkD7LTw2LT0FH5duXxv1DPnB0tX18Rcps2keFelJBS5I8GGK1vYAf17EIRQYaNaNYMIxOeb43D3OVQ%2BcSK3SKBVcnImBWalSdiPBojGAZLdtei4eB5HkWMIKH3MkGOqUBf%2FIJO0%2BlDSa2vlJnmcauTdxZ2DQNWuq3%2BkbKCMDs1wIT2S3ANKxPa1rZ1hrGNlJGh5oZ0X9Aq2kQyVbCLNzBo5MGu%2FpKyBS8x3wo5Ty0GITcctZtFMdbzhIm6yoento2BRmrptm1gQRZ%2Bh3FFzBaGf5bVnNDYJryIzODOZuMKxe1UbSU4SQqD22awQdJIhI8efLZh1Ty3KWuaihRY6fBUBjzjub6&X-Amz-Signature=10fe1da356c5205e339499c65d4ba4daed2badc586d686809cf56d426b429c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2KUSU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDLrmO8JfSgkY%2FoI9watHK5RLCuvGEs%2FM99FLiOhvlFAiEA3MEDaCoyYhbB5yXEskZ73%2FxSrIbDicsNV5HaV1I9Rf4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvoRmeheBINE%2FPwOyrcA4bL9S10fv5eZL5d1pDAJikiQvak%2FCCsfPA4JO0RcYcKp6rXzlXrFeeYkxr%2BedICciG%2FX7RoyeUpcn%2BAN%2BCyiMvSOpnEK3KsdpAmQg8YTiEbj0iXbKvB1eddXcayci5bYpWx%2FSiLJMoUMNbfkOMRP%2FAnKcAEZL4U3m4oVru%2F29Aag9aO0k9zIKmCmamrMcbISrW5XgR%2F5jsPk7TC5un1BL8AoTi6X%2Fzuvu%2FMQKWEeu7r%2F7WiysJHNRyx7eboyVPER8POY40M6wRWVsUqg22oycQsRDAvCGE8%2BB09%2F%2BFiOx%2F%2F8aoDDkHrXv1JSIze8gI8pFNf3oVKj7bYvCLjijm96thldVPHJdnqq9Dc8mT%2BKxvOsNeXbmMRZ6lgKY5jg%2F6m07BWFeHuMrzTyOTT1CcnWJZpy3h0anqWRWiJ8yxCjvhy7Pv%2Fw6fdCq7sV8HtHd4xxmVafwxyp%2FuhNqHL2LQFvbdQTp1NtzJUiSBVRqCY6i9du3Hmzx78nYX5ZWjbwK0WM2xZtuQHkD7LTw2LT0FH5duXxv1DPnB0tX18Rcps2keFelJBS5I8GGK1vYAf17EIRQYaNaNYMIxOeb43D3OVQ%2BcSK3SKBVcnImBWalSdiPBojGAZLdtei4eB5HkWMIKH3MkGOqUBf%2FIJO0%2BlDSa2vlJnmcauTdxZ2DQNWuq3%2BkbKCMDs1wIT2S3ANKxPa1rZ1hrGNlJGh5oZ0X9Aq2kQyVbCLNzBo5MGu%2FpKyBS8x3wo5Ty0GITcctZtFMdbzhIm6yoento2BRmrptm1gQRZ%2Bh3FFzBaGf5bVnNDYJryIzODOZuMKxe1UbSU4SQqD22awQdJIhI8efLZh1Ty3KWuaihRY6fBUBjzjub6&X-Amz-Signature=d6f528e4898dc5f3e6cf0f3b8ffd68c69003c7163f73430d280dae807d312368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

