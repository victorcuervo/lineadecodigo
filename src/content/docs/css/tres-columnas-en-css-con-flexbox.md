---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4Q6DTS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGbpULogd1qEK3PZYoLWFz9EyGlBJxpqfOEfYmGNkHskAiEApd2hxcVUFtyEqzJoDYQFozyR%2BOZg%2F%2BMTEu%2B0JvdVxEwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAratt41Q98LJVB5GSrcA2tisziQghDWgd0C9Qm1lRDpuDZ7eMgSh%2FgkUoaRWM3l02a1xsrt6tppUsjpuTdj7Z%2FS%2Bk7Gx8Z2ldYzZOnpoYJ8iSRAEAqIrQ71VJAqf48fi3jeTk1KK0poNcsUx3PetP1HPcUWeFYM2wi81hWBOoO6GV3pNzMle9AlYs7kyiU6UWm5bRcUo%2FfcWQsVVnOswjSzAc4Gg7EeoQUVD0NgWd5gPvCYvYxOvqXdXigI12jtMo65AEFcseqvbyrQarRDFg9doZCi%2FBmYVGvPrV9gt8ZG%2FCfC8nLWMtEZwtYFA0s4kj%2Bqj%2BRKnc0W72wT7msZDYlmrjd3eEeyFEX3HctEZeZMWlSS1P2X%2FowpVurQrEsymYCgU4fkoPgyAd0JCsNo3tMGLO9vleJbw%2Bas8R%2BO7jPAf5rII%2Bnrcpx9wYqAfbnKQUK3RtdH3YXSMWYTQnNe70ua9zj%2Bn0tGM78h7O3RMpjWYvWcnCNZxPuhdMwVfIyOFWeM7qVxh0jCkANUTwZQ2m5A46inOcJSjKQMLHgaVEfu8x%2FEdsZZ4Bq1xEcENQUDnHiRX03iAYrbYb4hXATvMnYW1SkowYaPx6nzZbYMvua34l0mvNfG3ndt9liaLSg5BA9k8Kn2ClOrwtwCMIS%2BwskGOqUBaHLmvJPRtfoYYGClSBt8uz1T5i%2FrpuFOvzbJPNGQJ2%2BAFEAcRHZ%2FZWTaIUDrqGhamuMp6JL9SK3X6R4IZuCJjPE4NXIiwtWOXaxD2zFvQXm4hyJuMglDl%2FOCmRZSHc9j3VzZQ4xHNOvGTXVtmrS4oWwShUitdyqh3qXKz5BEpduY%2Bs3cF4L1g0Lykaf%2FzJ%2BLtjYriCkBB3dtm5KsghJxFm69Wvmi&X-Amz-Signature=a85b440f2ceb193585acbf385eb8ff4efd525e6b3c7bac5651108ed4387a22cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4Q6DTS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGbpULogd1qEK3PZYoLWFz9EyGlBJxpqfOEfYmGNkHskAiEApd2hxcVUFtyEqzJoDYQFozyR%2BOZg%2F%2BMTEu%2B0JvdVxEwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAratt41Q98LJVB5GSrcA2tisziQghDWgd0C9Qm1lRDpuDZ7eMgSh%2FgkUoaRWM3l02a1xsrt6tppUsjpuTdj7Z%2FS%2Bk7Gx8Z2ldYzZOnpoYJ8iSRAEAqIrQ71VJAqf48fi3jeTk1KK0poNcsUx3PetP1HPcUWeFYM2wi81hWBOoO6GV3pNzMle9AlYs7kyiU6UWm5bRcUo%2FfcWQsVVnOswjSzAc4Gg7EeoQUVD0NgWd5gPvCYvYxOvqXdXigI12jtMo65AEFcseqvbyrQarRDFg9doZCi%2FBmYVGvPrV9gt8ZG%2FCfC8nLWMtEZwtYFA0s4kj%2Bqj%2BRKnc0W72wT7msZDYlmrjd3eEeyFEX3HctEZeZMWlSS1P2X%2FowpVurQrEsymYCgU4fkoPgyAd0JCsNo3tMGLO9vleJbw%2Bas8R%2BO7jPAf5rII%2Bnrcpx9wYqAfbnKQUK3RtdH3YXSMWYTQnNe70ua9zj%2Bn0tGM78h7O3RMpjWYvWcnCNZxPuhdMwVfIyOFWeM7qVxh0jCkANUTwZQ2m5A46inOcJSjKQMLHgaVEfu8x%2FEdsZZ4Bq1xEcENQUDnHiRX03iAYrbYb4hXATvMnYW1SkowYaPx6nzZbYMvua34l0mvNfG3ndt9liaLSg5BA9k8Kn2ClOrwtwCMIS%2BwskGOqUBaHLmvJPRtfoYYGClSBt8uz1T5i%2FrpuFOvzbJPNGQJ2%2BAFEAcRHZ%2FZWTaIUDrqGhamuMp6JL9SK3X6R4IZuCJjPE4NXIiwtWOXaxD2zFvQXm4hyJuMglDl%2FOCmRZSHc9j3VzZQ4xHNOvGTXVtmrS4oWwShUitdyqh3qXKz5BEpduY%2Bs3cF4L1g0Lykaf%2FzJ%2BLtjYriCkBB3dtm5KsghJxFm69Wvmi&X-Amz-Signature=224a570a215e891969a6a3c6b12fa932c6d7403f5138f273a89e9117ccbcd0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

