---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M65F54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHkUmu95t1NdJnWPuBre8NeOY02Pxa6mCcxhuslszjKsAiEAoGaShbbOEHLYZnjB3K2IgNZFRqYSRfm17sieShAuyDIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEC3Xa67v2lkKIxlbyrcAxtmhpUmnb%2FnzN03H5tFbDzYjRYPGzoYvHv93uu4k%2BS%2BaP5dG8mx%2BZSJcv%2Bs6f1ONp8oRFkjBAbS3rTQmsFjDBYFdFh%2FUIW0BgE74enjw5%2BdiWLBi2sxMn%2B2iHmBIHVfjK68lCIWDpDZJ40a%2BV6MC%2FWxFrLMjBFwgtjlCawa5upGnq1BRmCHQx%2F8FMcfOEcOHGpxSBfSarq5UhstyjXSE6tPmwM3l%2FUrkthu7ynYlav9MvyGC8q1%2FtGSM91ZnYxnLfvZ8b%2Bu1g3DTKU01gSx5mt4xkhCts4%2BEocUUZlw32ygGZA%2FvlWoS3iAdS1HCXDdn1XvXPYHBJphkdnzrw01CVI0KRHOs52PCnWzfacXXU8GveRrDCtQCnStvcAQmFqsCLiJxKpaiZngY8AcAeI3avIYn4jqMDs%2BczbW0BKNphXtjTgxH0HVZX%2BwiK3ExhPPWhNoa7IcIJKay5MoYugQq0n18m1fe%2FjH4M%2BkLf7z62WomxZPE4zk7YoltBUkzW36r7MdWoDgtfOMUc%2BYOX3gq6CCngJ9cj4sblaOy9b8OzyNJH%2Bh5GKJJ47QZ5Wgja1u7zcSywo6myPfo8PxuzUZLrSyIROSuttWOJIdHf%2BqGVJCusHMMW%2BxFu2s28ygMLnBwckGOqUBKG0Vh8L%2BVM4%2BVJGjXasw4%2FL%2FeBZNz%2B%2Bl2ZePDSlo5FMUXj%2BpXxDPLLn%2BZ9WfDgZNNLhVbWAbE5hZxU4e7P67uatrxL2dLfiQQfeNtkr9E%2BghhVGCQHGBBgcgoAwZW%2BjE1FKTGf4G7dpxFVILdRCpC25HYoH6Y%2Ba67udMw7l4WOfUQzC5RjSkxXZ2ro0xoxMBUyjFcZimpiCGQm9doRR9hTH6Lvoc&X-Amz-Signature=c1757e145f546d5b74a137c3622918fed1b98b799c3046c9c188625f8a1dcc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M65F54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHkUmu95t1NdJnWPuBre8NeOY02Pxa6mCcxhuslszjKsAiEAoGaShbbOEHLYZnjB3K2IgNZFRqYSRfm17sieShAuyDIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEC3Xa67v2lkKIxlbyrcAxtmhpUmnb%2FnzN03H5tFbDzYjRYPGzoYvHv93uu4k%2BS%2BaP5dG8mx%2BZSJcv%2Bs6f1ONp8oRFkjBAbS3rTQmsFjDBYFdFh%2FUIW0BgE74enjw5%2BdiWLBi2sxMn%2B2iHmBIHVfjK68lCIWDpDZJ40a%2BV6MC%2FWxFrLMjBFwgtjlCawa5upGnq1BRmCHQx%2F8FMcfOEcOHGpxSBfSarq5UhstyjXSE6tPmwM3l%2FUrkthu7ynYlav9MvyGC8q1%2FtGSM91ZnYxnLfvZ8b%2Bu1g3DTKU01gSx5mt4xkhCts4%2BEocUUZlw32ygGZA%2FvlWoS3iAdS1HCXDdn1XvXPYHBJphkdnzrw01CVI0KRHOs52PCnWzfacXXU8GveRrDCtQCnStvcAQmFqsCLiJxKpaiZngY8AcAeI3avIYn4jqMDs%2BczbW0BKNphXtjTgxH0HVZX%2BwiK3ExhPPWhNoa7IcIJKay5MoYugQq0n18m1fe%2FjH4M%2BkLf7z62WomxZPE4zk7YoltBUkzW36r7MdWoDgtfOMUc%2BYOX3gq6CCngJ9cj4sblaOy9b8OzyNJH%2Bh5GKJJ47QZ5Wgja1u7zcSywo6myPfo8PxuzUZLrSyIROSuttWOJIdHf%2BqGVJCusHMMW%2BxFu2s28ygMLnBwckGOqUBKG0Vh8L%2BVM4%2BVJGjXasw4%2FL%2FeBZNz%2B%2Bl2ZePDSlo5FMUXj%2BpXxDPLLn%2BZ9WfDgZNNLhVbWAbE5hZxU4e7P67uatrxL2dLfiQQfeNtkr9E%2BghhVGCQHGBBgcgoAwZW%2BjE1FKTGf4G7dpxFVILdRCpC25HYoH6Y%2Ba67udMw7l4WOfUQzC5RjSkxXZ2ro0xoxMBUyjFcZimpiCGQm9doRR9hTH6Lvoc&X-Amz-Signature=5633ffd9a3a17ccebb9058e22cfaecf9c438e58b6d1bcebb0aa03aece18c497f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

