---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3I7W4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpu37JBBQ1s2HsQvorAGS0Nc4Caj1bwMdIIdhxXbW90wIgcJloxPpKcIrHWsxw4YIjCtnNCrrcG5TDn4LQ2218FQsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCzjI%2Bxu7%2BHB22%2FdCrcA6m3K4h30laQ6cShJ6VFuqnVCnpxB1WrTlerX68NoZF1wzDvkQP0bGL5q1NYvc%2FBB%2BWUd64d95eVEzZzY3bdf%2BdvLvu9dAoRe8PNFnskZh%2BUSlluIJttadEr1eZFUbpUwszhGjtIIHZZoft%2F0XgwgawkMSUy68bj0XdfMBkauKKZumciej6R2tBPBXmEn5oEygqaqWpzXzgo5a1FppYLTlUEAitIPNwJG7OAb3IzvlAx2OH%2FO64Y64QDjNf2l2a%2B4brvLJwUdTIZdOK8%2FSr07jpQeQ3X%2FMN2Zj1HcdtHhqq0mCAbtVw%2FU69gVwkoWiUw8KliCvbflh1l1CpF2orxhpKqnuvEq%2B3wEhCRe7N0LkIDdr0GWsjvzxWWmnoZzCUNWU9dlVjhkeW%2FGtJGzZJx2gQXrSyshJeg8RMKBDap5qxfbc9iMXt2JWZX3oJVtk7dZgCC6hhzHl1PjUovmZOA9zmPILPHkbZ1p2e1bmZ8uNe09dIBwToLKKivAyoIv7Kjj%2BbH2a0TNj3JfAYlRCYCFU8yKm3y%2Bz%2F7Lb2IISIGrUJwcUzMDbZEHhtFdCx14W31J51%2FgXsn0pvZRTxclIFplr9QNlry9GoO8TR9Vz%2FTMTa3pqeRbOZLEqyvcYGgMP%2Ft2ckGOqUB8fjvKOrj3pxZ14d32QBv%2Bmx7WecLvJNfyqmpYHF3DwUW%2BwnYO%2FyYxlCmp9eE1%2F4QiPBEJb7mYjiaYKPQBwZCmWGCcAzAF6f39OYIkQs923Y9vLRg%2FjO6SDqddqvNuPxXt7ROBDokBYTBK3UEpk8kDZ60uOfTTqz1Xr6Coj6xseXGhWywSaOs3Zv5v6cGun7JLJG%2BWUu5OnsN4SSZNGmYHOg9dPwi&X-Amz-Signature=17971688878b73498e346137b9254a2c26dc635bf703f42673e944c0550ff9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3I7W4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpu37JBBQ1s2HsQvorAGS0Nc4Caj1bwMdIIdhxXbW90wIgcJloxPpKcIrHWsxw4YIjCtnNCrrcG5TDn4LQ2218FQsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCzjI%2Bxu7%2BHB22%2FdCrcA6m3K4h30laQ6cShJ6VFuqnVCnpxB1WrTlerX68NoZF1wzDvkQP0bGL5q1NYvc%2FBB%2BWUd64d95eVEzZzY3bdf%2BdvLvu9dAoRe8PNFnskZh%2BUSlluIJttadEr1eZFUbpUwszhGjtIIHZZoft%2F0XgwgawkMSUy68bj0XdfMBkauKKZumciej6R2tBPBXmEn5oEygqaqWpzXzgo5a1FppYLTlUEAitIPNwJG7OAb3IzvlAx2OH%2FO64Y64QDjNf2l2a%2B4brvLJwUdTIZdOK8%2FSr07jpQeQ3X%2FMN2Zj1HcdtHhqq0mCAbtVw%2FU69gVwkoWiUw8KliCvbflh1l1CpF2orxhpKqnuvEq%2B3wEhCRe7N0LkIDdr0GWsjvzxWWmnoZzCUNWU9dlVjhkeW%2FGtJGzZJx2gQXrSyshJeg8RMKBDap5qxfbc9iMXt2JWZX3oJVtk7dZgCC6hhzHl1PjUovmZOA9zmPILPHkbZ1p2e1bmZ8uNe09dIBwToLKKivAyoIv7Kjj%2BbH2a0TNj3JfAYlRCYCFU8yKm3y%2Bz%2F7Lb2IISIGrUJwcUzMDbZEHhtFdCx14W31J51%2FgXsn0pvZRTxclIFplr9QNlry9GoO8TR9Vz%2FTMTa3pqeRbOZLEqyvcYGgMP%2Ft2ckGOqUB8fjvKOrj3pxZ14d32QBv%2Bmx7WecLvJNfyqmpYHF3DwUW%2BwnYO%2FyYxlCmp9eE1%2F4QiPBEJb7mYjiaYKPQBwZCmWGCcAzAF6f39OYIkQs923Y9vLRg%2FjO6SDqddqvNuPxXt7ROBDokBYTBK3UEpk8kDZ60uOfTTqz1Xr6Coj6xseXGhWywSaOs3Zv5v6cGun7JLJG%2BWUu5OnsN4SSZNGmYHOg9dPwi&X-Amz-Signature=ecc0c77d6a37025863c787147a946b28085957af6e52f6f0118670b7b7b034cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

