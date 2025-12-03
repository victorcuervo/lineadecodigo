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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLPYZNP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGBJf8bq%2FFLj8O4F4IWH0aKY5hCR8pkNuTn7emNqgKSBAiAbTBcXsbKztL1dgFDwlCEtzbiQc2E7iVSL4BrL4FdG0Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM3HhPNXt7WVtrUyVtKtwDQznIWyG2z213HLCmq4ByXNDhIzxKcUSsx6kAeo%2B27QXtBZ8Zxp3Et60ss97vyZwQ4OvTI3O7UrryWGQEOxSpp%2Fph80%2Fx68HdwW1zs0hpr7%2BdVJegEBwFRGaEQWFuGYaimOllFq%2BPTmjrltSgloT%2FeaoT%2F0dUPoyO%2BTuXk83op7Ic2WAcmysDWwQV9ephHmo081VbckOxyvUTTvC%2FSDbZSaEurPABoNEychfSngr4XMKMqQV8O5ROg6d7Eo0XKsiyjFk5PBLaNgYl4iZaZ2ZCB7LDycyQp%2BFRQeY31AMz58KycOiE6os2f0g%2F%2FLU0VNgH2xe1w%2FKGAMIuYHb%2B7NNXr%2B0IoRFzpjxeqE7rHL2wZj9hnvDVlmx%2FerRww2UCoBMMId%2FFmJ%2FMyDf0ymuGV8z9Kebqu%2BGsxWD8%2FRQHatVsiLCtTgTS3gT%2F%2FiLQQp7mtGySai6KCbg8u9MH9CzwDjBuYyTp1lME0ojBRINznUmAyDNCwCKCFFBUzHAsUzIIASSPSJxCHHcmEgC5S1lerg1SxH5vkJ%2BOikGNV2IeT3GeTQ3X9sPwMposyCJ%2Fjk2zK0PB9IJmqSbpf0Vw13dSDLYuSII0cEnronoeYuV%2BxVoXX0owAKLvw%2FI%2BSCz97B4wwZa%2ByQY6pgGTWtMcmBCRW1vYor0GDuIsgzW9HPY5IQZbWX9DJulqgbr0pMT90DbWOFn2jh8aqhsvfOoXYlBPcpMHEdUYXLqsepwtPdg52mBV4%2BlIynlhiE8GEEt1z0aGc%2F6nt1iAqt0feMlq8OPF1W0WNIih4l3B14%2FTeZJOnDHpiR38yzIti0ZbH8SXzCvlCp%2FIhW3UP78EKQYCcFwnbQTJ2mvIiz1ssoRX1vUs&X-Amz-Signature=717fa58fb85cb86a108de94acbd6a60ef0d8b7fc862df1c0af5bc2466a1eeba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLPYZNP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGBJf8bq%2FFLj8O4F4IWH0aKY5hCR8pkNuTn7emNqgKSBAiAbTBcXsbKztL1dgFDwlCEtzbiQc2E7iVSL4BrL4FdG0Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM3HhPNXt7WVtrUyVtKtwDQznIWyG2z213HLCmq4ByXNDhIzxKcUSsx6kAeo%2B27QXtBZ8Zxp3Et60ss97vyZwQ4OvTI3O7UrryWGQEOxSpp%2Fph80%2Fx68HdwW1zs0hpr7%2BdVJegEBwFRGaEQWFuGYaimOllFq%2BPTmjrltSgloT%2FeaoT%2F0dUPoyO%2BTuXk83op7Ic2WAcmysDWwQV9ephHmo081VbckOxyvUTTvC%2FSDbZSaEurPABoNEychfSngr4XMKMqQV8O5ROg6d7Eo0XKsiyjFk5PBLaNgYl4iZaZ2ZCB7LDycyQp%2BFRQeY31AMz58KycOiE6os2f0g%2F%2FLU0VNgH2xe1w%2FKGAMIuYHb%2B7NNXr%2B0IoRFzpjxeqE7rHL2wZj9hnvDVlmx%2FerRww2UCoBMMId%2FFmJ%2FMyDf0ymuGV8z9Kebqu%2BGsxWD8%2FRQHatVsiLCtTgTS3gT%2F%2FiLQQp7mtGySai6KCbg8u9MH9CzwDjBuYyTp1lME0ojBRINznUmAyDNCwCKCFFBUzHAsUzIIASSPSJxCHHcmEgC5S1lerg1SxH5vkJ%2BOikGNV2IeT3GeTQ3X9sPwMposyCJ%2Fjk2zK0PB9IJmqSbpf0Vw13dSDLYuSII0cEnronoeYuV%2BxVoXX0owAKLvw%2FI%2BSCz97B4wwZa%2ByQY6pgGTWtMcmBCRW1vYor0GDuIsgzW9HPY5IQZbWX9DJulqgbr0pMT90DbWOFn2jh8aqhsvfOoXYlBPcpMHEdUYXLqsepwtPdg52mBV4%2BlIynlhiE8GEEt1z0aGc%2F6nt1iAqt0feMlq8OPF1W0WNIih4l3B14%2FTeZJOnDHpiR38yzIti0ZbH8SXzCvlCp%2FIhW3UP78EKQYCcFwnbQTJ2mvIiz1ssoRX1vUs&X-Amz-Signature=b879c98d11b7b09b9a48228d58fc10debba481e34142e7350e664e5843f3a927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

