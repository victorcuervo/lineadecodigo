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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDKVNMA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCuGDOqsimXYIU0RACcLkWgozeguTocw5dPgam%2FV3xOOAIgVMqEN%2BWgKmfFWp6jldpmOeOqZzJdB8VY2hNC9jRWEX4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlDP%2FCpF%2F0aBTuu%2FircA01JguZfT1aoMTQt%2BKxwxNPhSx6XNhhdPcdlXf21x4tDlpxwDMTn8jf5iA2Gvgi9ddKNNIUCdf0%2FcnS0742OufMKaZSKQK41jlwVaJQvoxWCppnH%2BXV7SNcFF2mFNvje%2FE%2B%2BEs3k7iX%2F%2FX19vCm80xd0NumSP3ry8hw43gSi3bR9pHvAD3qRRa%2BIQvcgaZmynV0Lmk4GLvfBVjiRtUyIt58z138Ga5gk3boVDjnabzMmJIZ6tH3XFQI648HxKj%2FMr9BIqC9EewKg23gy8BpNUw2QeOHpHuIb08M%2BuW4X1I9ycHB%2FmiBzVGfPLA2IYUt19cVSz48Ou9ffxQKrgIIeAm0KB3JPjk%2FMXdCrzuElTKZ433T0ni7ofGsq0Bz1rL%2FQzZZwqWNjGOqfhXW%2Bi63arrzNGwWUkVFZpE8hn52v1GAuuZBoj7WwgZBQak7XwtFyBbxLuzxJC8TgQ11QWKvpflLmAa6%2BXBot%2B88t98TIR63v1SZwsRlB68aTtTmA5tNI13hoqQQKKxFO6QU5Kgy72SoQ0QcY0K9Aw8%2BnWIgkm3HJv9yR3eeX%2B0o3ybWMCfQ%2BlasSegkJ7qYQ7MT5NY09q7jNl8wNz%2Bm3e%2BNWdHzjgu2eaHzKDG8m6IPjjqh%2FMPyZv8kGOqUBlaVl7vu6dJlRYh5MshF2tscTkUzIwbqyaOH1Yg7T5OTDyF8c%2B8sFH%2FtXJxfu5axWPIiy4vYbQZO35S6LKdgCg8ImirFQYZZssnHSwBMiu6B3X%2B0Nh6WqjdRsR9iQGkI81yoW2zn2qaVMnvUB%2BwCV7J5l4GHEsrdV9tZaKQf9NFJiaYlUlWF%2BgwyxtxNcrnAG0Q%2B%2F3H1YxlbVYYkd6dHh2PkLZPWy&X-Amz-Signature=ca1cde5b7b88df88c82593515cf1f50cc3fd9c855b686e830359f6f29d829fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDKVNMA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCuGDOqsimXYIU0RACcLkWgozeguTocw5dPgam%2FV3xOOAIgVMqEN%2BWgKmfFWp6jldpmOeOqZzJdB8VY2hNC9jRWEX4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlDP%2FCpF%2F0aBTuu%2FircA01JguZfT1aoMTQt%2BKxwxNPhSx6XNhhdPcdlXf21x4tDlpxwDMTn8jf5iA2Gvgi9ddKNNIUCdf0%2FcnS0742OufMKaZSKQK41jlwVaJQvoxWCppnH%2BXV7SNcFF2mFNvje%2FE%2B%2BEs3k7iX%2F%2FX19vCm80xd0NumSP3ry8hw43gSi3bR9pHvAD3qRRa%2BIQvcgaZmynV0Lmk4GLvfBVjiRtUyIt58z138Ga5gk3boVDjnabzMmJIZ6tH3XFQI648HxKj%2FMr9BIqC9EewKg23gy8BpNUw2QeOHpHuIb08M%2BuW4X1I9ycHB%2FmiBzVGfPLA2IYUt19cVSz48Ou9ffxQKrgIIeAm0KB3JPjk%2FMXdCrzuElTKZ433T0ni7ofGsq0Bz1rL%2FQzZZwqWNjGOqfhXW%2Bi63arrzNGwWUkVFZpE8hn52v1GAuuZBoj7WwgZBQak7XwtFyBbxLuzxJC8TgQ11QWKvpflLmAa6%2BXBot%2B88t98TIR63v1SZwsRlB68aTtTmA5tNI13hoqQQKKxFO6QU5Kgy72SoQ0QcY0K9Aw8%2BnWIgkm3HJv9yR3eeX%2B0o3ybWMCfQ%2BlasSegkJ7qYQ7MT5NY09q7jNl8wNz%2Bm3e%2BNWdHzjgu2eaHzKDG8m6IPjjqh%2FMPyZv8kGOqUBlaVl7vu6dJlRYh5MshF2tscTkUzIwbqyaOH1Yg7T5OTDyF8c%2B8sFH%2FtXJxfu5axWPIiy4vYbQZO35S6LKdgCg8ImirFQYZZssnHSwBMiu6B3X%2B0Nh6WqjdRsR9iQGkI81yoW2zn2qaVMnvUB%2BwCV7J5l4GHEsrdV9tZaKQf9NFJiaYlUlWF%2BgwyxtxNcrnAG0Q%2B%2F3H1YxlbVYYkd6dHh2PkLZPWy&X-Amz-Signature=b77f3e1deb9ca8a0e96f53193b6a12ec98090dbba78d46aa4680d31d6577c8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

