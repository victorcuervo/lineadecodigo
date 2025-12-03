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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RGRCGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC0h9dWfr4pMzDqcXHGbaLoS4Pw1A5qZ4Gpt35fcsR0YQIhANdwPfB1B9w3AGOjO9n2uYUAHjK3SEwcqRBH8kbalLpMKv8DCCkQABoMNjM3NDIzMTgzODA1IgwbLipQSeeD5rjjx2kq3AMyu9a4VvtXTsUzPDwVy7IpCj6xW01QLOvtlWYfvSXVHk%2F1SnqA6eutYG%2B9B1G1IvknSudamkcISxE7N0CCdgkAraqWiJVTFb49qjRLUhgftYwZoY%2FmUD7aaRqE7vGrGV8U0X%2FaYN%2FZYihG4nhwF0CIjgbEQQ2rSYeALycrdBAIc%2FaRBH9ytemfAbihLCKdsZrtOqgNm75pxaNRc0KTAo%2FfU9X7drA4Nzfo0uVNdPGxj7cEGEwMA6RnAdm40FEKaDeXVPjG6665nhDjVfKvFitNtPH%2FvxZhFCTAUELn%2FNF5ejAh%2BKLAqw8O5BOeet6F0uv6ube7TqFWIaeRM1h6vVOUvKWX5jxu7sfCiQAkTnPTYJmUt9RIEJ6TfcKBRaIO%2ByO625zOE3xI23GTwHzLTkhyHtPnGuFpU19nI0pRHJH93xvQz1IKj1SNSRgGHfq4pAgQJPFi2s8E81PTra8PwQVYQWnLLAExcQF6ywuJNJmvhy5EYN3ogt6jKSlzZfOnU6GzjPyNEqBEM3FUFmcPxfVfrq%2FQL44J8Mw4watMOv%2B3pX2w%2Fjy1cudlTGZdwP70%2BXFxjQBMibqF4ST%2F3tOuLR%2Bg1rbi5yNaf0iFbYrQLZcAMofiGXbE2zwR8Rsg9jC81b%2FJBjqkATyanC5GLFpRidUdWqn9ZTvfuIaPZM5GNLoexbrsWpYlQ900VsHYVUUQkyRwKA5mnahIE4ILlaToWWGDLSKhH6jiSwqtGOm4pyAGugoYNfAgSFVmksvchNb2LphocYg1Zw4RfWz%2BK98%2Bc3ulxDEpVe%2FJLms4Q6e393G%2Fvg6TZNOPgmBQynZ%2FrkT0eKAdavTXoJec0LKJnjFLt0lqLBenRDxMS0vt&X-Amz-Signature=f148d276fcf6326c7a01f09936a6988a55aedca4421a121b9be6ae7dc882b814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RGRCGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC0h9dWfr4pMzDqcXHGbaLoS4Pw1A5qZ4Gpt35fcsR0YQIhANdwPfB1B9w3AGOjO9n2uYUAHjK3SEwcqRBH8kbalLpMKv8DCCkQABoMNjM3NDIzMTgzODA1IgwbLipQSeeD5rjjx2kq3AMyu9a4VvtXTsUzPDwVy7IpCj6xW01QLOvtlWYfvSXVHk%2F1SnqA6eutYG%2B9B1G1IvknSudamkcISxE7N0CCdgkAraqWiJVTFb49qjRLUhgftYwZoY%2FmUD7aaRqE7vGrGV8U0X%2FaYN%2FZYihG4nhwF0CIjgbEQQ2rSYeALycrdBAIc%2FaRBH9ytemfAbihLCKdsZrtOqgNm75pxaNRc0KTAo%2FfU9X7drA4Nzfo0uVNdPGxj7cEGEwMA6RnAdm40FEKaDeXVPjG6665nhDjVfKvFitNtPH%2FvxZhFCTAUELn%2FNF5ejAh%2BKLAqw8O5BOeet6F0uv6ube7TqFWIaeRM1h6vVOUvKWX5jxu7sfCiQAkTnPTYJmUt9RIEJ6TfcKBRaIO%2ByO625zOE3xI23GTwHzLTkhyHtPnGuFpU19nI0pRHJH93xvQz1IKj1SNSRgGHfq4pAgQJPFi2s8E81PTra8PwQVYQWnLLAExcQF6ywuJNJmvhy5EYN3ogt6jKSlzZfOnU6GzjPyNEqBEM3FUFmcPxfVfrq%2FQL44J8Mw4watMOv%2B3pX2w%2Fjy1cudlTGZdwP70%2BXFxjQBMibqF4ST%2F3tOuLR%2Bg1rbi5yNaf0iFbYrQLZcAMofiGXbE2zwR8Rsg9jC81b%2FJBjqkATyanC5GLFpRidUdWqn9ZTvfuIaPZM5GNLoexbrsWpYlQ900VsHYVUUQkyRwKA5mnahIE4ILlaToWWGDLSKhH6jiSwqtGOm4pyAGugoYNfAgSFVmksvchNb2LphocYg1Zw4RfWz%2BK98%2Bc3ulxDEpVe%2FJLms4Q6e393G%2Fvg6TZNOPgmBQynZ%2FrkT0eKAdavTXoJec0LKJnjFLt0lqLBenRDxMS0vt&X-Amz-Signature=551304f32211ce6b3fa409e7d0dcd9368d16c69b7a078a5152c3bc9ccc72f400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

