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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGZR2QG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICEJTy0fPdtj58dQE0iWdOK10eBvT%2BLRn7oBtrI1YVquAiAhq4XSZVJpgMw54GrL4dGukFo%2Bh1x2z0t4hLa62henaSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVR04ydPzOojLvIlBKtwDjp7CeIw4vDeyPT%2FIzOAaQ0%2F4w2i23LQsdtNf1gpLvb54iWrlsLuKv07tpatQ7vZ8%2BFrBw3yb5G5dYQrpL2NsYN%2BB%2F4%2Fzdw4ga42hdNV51v9tP8PdRYqUuI40hAE%2FFDE%2FrhBT8DBPeORSzmkK%2BVGDUKygXDW5%2B05pGI3m76NEPwvGyz2xWDwg6u9duQHULEtBMzFquu10d0%2F2tOucaUNEyf8LEXkyP3YiiluQKZYmlkwg5moNMgDxQDHqVlDeEjFHpfknmJFokTTpya%2BYNdU29V5E4JtosZ%2FT95sf4ZHVYbu0YiFXi5TZ5AaD4vjq%2B7jwjq37gAuxg9S5K%2FUqw0Y99r55QkwzxXWwOxDebRbtNh5glnDcykIq7SHVoxj6aKp5FufpCE%2Fxl%2Fdy64idHQQeTJsWBNEtrOtZxW49yqb28mrWXhmrfkWSupbQRkZZY%2FLRtkkEXRB66TWCAf0jopxMTfrk1RKQ2ZJdGcPonij7KJNbDnzOgf2D4ok6UZ0gzmapqX059iRzGBSLAOsilCAjO%2BZ%2FyKd3JGvuGhVQFvTWmZLCpoPUI0dU6%2Bvg41afV8BzhFyTVsFer%2FfDN260U3PxBo3%2Fra73BnzRtkZjU%2FJbjMHFLhuZcP%2BCesP72sow%2FJW%2ByQY6pgHHtcENXtwFX4NisuKkkuJhU0nc1EDJ%2BPzZiiugyKxB6ki5kjrUFKJKt6exJoDMzYzxGg617hS6j%2Bz4wxNOhkE19tfo%2F4SF%2Bq3A7oLKXOb%2Bj1nW5ZpadBaG3MQDbvEcHxlUWE74tYyeoQP%2FZvzIXS2nxrI%2Fq2ctvhnrlct0DaYUPhFqvqshhNYqATWLrtIS0e5%2FBmr78tp%2FXdpWtk72NchxQWTe62vc&X-Amz-Signature=9f126b8dbe77560ca3e7161367ed274b80d5c33c2079bd279a0692d1944b1ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGZR2QG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICEJTy0fPdtj58dQE0iWdOK10eBvT%2BLRn7oBtrI1YVquAiAhq4XSZVJpgMw54GrL4dGukFo%2Bh1x2z0t4hLa62henaSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVR04ydPzOojLvIlBKtwDjp7CeIw4vDeyPT%2FIzOAaQ0%2F4w2i23LQsdtNf1gpLvb54iWrlsLuKv07tpatQ7vZ8%2BFrBw3yb5G5dYQrpL2NsYN%2BB%2F4%2Fzdw4ga42hdNV51v9tP8PdRYqUuI40hAE%2FFDE%2FrhBT8DBPeORSzmkK%2BVGDUKygXDW5%2B05pGI3m76NEPwvGyz2xWDwg6u9duQHULEtBMzFquu10d0%2F2tOucaUNEyf8LEXkyP3YiiluQKZYmlkwg5moNMgDxQDHqVlDeEjFHpfknmJFokTTpya%2BYNdU29V5E4JtosZ%2FT95sf4ZHVYbu0YiFXi5TZ5AaD4vjq%2B7jwjq37gAuxg9S5K%2FUqw0Y99r55QkwzxXWwOxDebRbtNh5glnDcykIq7SHVoxj6aKp5FufpCE%2Fxl%2Fdy64idHQQeTJsWBNEtrOtZxW49yqb28mrWXhmrfkWSupbQRkZZY%2FLRtkkEXRB66TWCAf0jopxMTfrk1RKQ2ZJdGcPonij7KJNbDnzOgf2D4ok6UZ0gzmapqX059iRzGBSLAOsilCAjO%2BZ%2FyKd3JGvuGhVQFvTWmZLCpoPUI0dU6%2Bvg41afV8BzhFyTVsFer%2FfDN260U3PxBo3%2Fra73BnzRtkZjU%2FJbjMHFLhuZcP%2BCesP72sow%2FJW%2ByQY6pgHHtcENXtwFX4NisuKkkuJhU0nc1EDJ%2BPzZiiugyKxB6ki5kjrUFKJKt6exJoDMzYzxGg617hS6j%2Bz4wxNOhkE19tfo%2F4SF%2Bq3A7oLKXOb%2Bj1nW5ZpadBaG3MQDbvEcHxlUWE74tYyeoQP%2FZvzIXS2nxrI%2Fq2ctvhnrlct0DaYUPhFqvqshhNYqATWLrtIS0e5%2FBmr78tp%2FXdpWtk72NchxQWTe62vc&X-Amz-Signature=64b65c91ec7f19eb40b53296caf93ba4ab7a2082711f2e2de52fa8208c20f503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

