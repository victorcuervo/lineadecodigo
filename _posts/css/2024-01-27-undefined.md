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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6UGW7E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFG4fTiEQkWjPS6kqhUu6ikQiYLnfYnS3S71Xf2gugLAIhAI1VLRvOvoKps%2BKXgo2NgOsAaT%2BlN9EKIkZ78pMp6Td1Kv8DCDEQABoMNjM3NDIzMTgzODA1IgwtPDSWf09wKDxRzH0q3AMlIEQ%2Bk9ZeN800Spw%2FAG4c1FtjrYQWKCykRGbaLEIRFVkWJzAzYZL%2FeBZqT7Mqy4SmuejTLKMVj%2BT%2BvX3%2FLBaPjkGKmRFgJoeNAu2soZGxrOjy%2B2rE0OrF2vWVGJVxXQqxbgdUcrZmK6VCKOir1juoAs6PJSZPIUJH0w63iOZgdbWK0r3Lq46VxWYjEo84bOXklJhLupfspHjd02zlv1DxsS9%2BfHMc0Z2xl0PKhP91RfrKbT3TFX36Ej8pxQtonRCt%2BN%2BNDMF8sjr3IX2fmB%2BSSgyaZ6wml7ZTz991%2Fq8s%2BCF%2B24%2B%2BsFcTDroiXC%2BFyuhyg5VgTdUvRgrESZ%2BytvXJeCHlzjDnVBXn7F40YcZ7yKs%2Bz1FOwGxGM29yS5CfGTFH4py3JS5dhpLhGb9r16Kidd0ATVPF0%2FKPiMMB5HASLlokcyLyX8kcyQWaJGpld2N4eUdepHIicOiwdnqtcZk7FIcGAwzpjm2JI1UaieIODyieJKKmSWLsqoU7QI61h4njVyVHXiXo3tRc3rgnHdD%2BaX6KFZ%2FEBfBeGx1pCM2PNYfFu0Fv24%2FVjU4YKZYn3Ou41nUQ0KUDBIaNlOzoF6NclP9hk2x9FBIrdCZzfhBCL1wpuOIvze4tEZWpSzC3wcHJBjqkATASRBmhxu5Vpcg%2BCWeeNI4HG67klkk9eEiPxqVIp6kQutjF2A%2BKHFFOok2JslWzqf4KZ0EG4oxZQ7SwmINYQglHZUsMEGWd1Lgkz12dD%2BAnVR8d9%2FMVVoR3objmgCrbPqXyV0PrXeNYzb34nr8%2B5%2Fd9quRc6gVlyl7xhpUTi4BqvEutBpdWySIPG3UoqZJpkiAsutMGyRVc0AcsxvX%2BUCVTxrQ%2B&X-Amz-Signature=2516af17fae2014e4ae197bafe9c3fe0a7d2c8fe8d2659afc15a66df063c6203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6UGW7E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCFG4fTiEQkWjPS6kqhUu6ikQiYLnfYnS3S71Xf2gugLAIhAI1VLRvOvoKps%2BKXgo2NgOsAaT%2BlN9EKIkZ78pMp6Td1Kv8DCDEQABoMNjM3NDIzMTgzODA1IgwtPDSWf09wKDxRzH0q3AMlIEQ%2Bk9ZeN800Spw%2FAG4c1FtjrYQWKCykRGbaLEIRFVkWJzAzYZL%2FeBZqT7Mqy4SmuejTLKMVj%2BT%2BvX3%2FLBaPjkGKmRFgJoeNAu2soZGxrOjy%2B2rE0OrF2vWVGJVxXQqxbgdUcrZmK6VCKOir1juoAs6PJSZPIUJH0w63iOZgdbWK0r3Lq46VxWYjEo84bOXklJhLupfspHjd02zlv1DxsS9%2BfHMc0Z2xl0PKhP91RfrKbT3TFX36Ej8pxQtonRCt%2BN%2BNDMF8sjr3IX2fmB%2BSSgyaZ6wml7ZTz991%2Fq8s%2BCF%2B24%2B%2BsFcTDroiXC%2BFyuhyg5VgTdUvRgrESZ%2BytvXJeCHlzjDnVBXn7F40YcZ7yKs%2Bz1FOwGxGM29yS5CfGTFH4py3JS5dhpLhGb9r16Kidd0ATVPF0%2FKPiMMB5HASLlokcyLyX8kcyQWaJGpld2N4eUdepHIicOiwdnqtcZk7FIcGAwzpjm2JI1UaieIODyieJKKmSWLsqoU7QI61h4njVyVHXiXo3tRc3rgnHdD%2BaX6KFZ%2FEBfBeGx1pCM2PNYfFu0Fv24%2FVjU4YKZYn3Ou41nUQ0KUDBIaNlOzoF6NclP9hk2x9FBIrdCZzfhBCL1wpuOIvze4tEZWpSzC3wcHJBjqkATASRBmhxu5Vpcg%2BCWeeNI4HG67klkk9eEiPxqVIp6kQutjF2A%2BKHFFOok2JslWzqf4KZ0EG4oxZQ7SwmINYQglHZUsMEGWd1Lgkz12dD%2BAnVR8d9%2FMVVoR3objmgCrbPqXyV0PrXeNYzb34nr8%2B5%2Fd9quRc6gVlyl7xhpUTi4BqvEutBpdWySIPG3UoqZJpkiAsutMGyRVc0AcsxvX%2BUCVTxrQ%2B&X-Amz-Signature=1beb3bd8453b017d8ba08addf7b7bf5124b1466df87816e8bff64cf0fa707846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

