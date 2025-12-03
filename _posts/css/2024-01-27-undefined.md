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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3KD7SQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC6mYRAFbaFfbVYgoi5MQgohuSL%2Fwu7wfivFKRrvIWXgwIhAOeeAFht292QRANh8VCYvf1udmcW7MQMAvaB5OA%2BKGHRKv8DCCIQABoMNjM3NDIzMTgzODA1IgwniR8cvS8jmOfvKh0q3AMGOEY%2B45m82lPN8%2BAGucwwWkqKzCrlHFFd6IyAzIax6sIG6CPEVYolAqokXvyXlKdVZKasHx9OrYjg5GbVQBT2%2FdWCbd7L27w94765KtrqPnwS8w0BzUDfv06XZ1%2FMpnjPaOg%2BwXF21aKYML8Aly3UPufY0ISISb9Fxq6Nw1pj0NdX322%2BOxr05ZOUlDZ6rnNhKp0zzBwrV%2FMOwcob%2FMzqUvzYYqCJZj4vCLNDKkRAwAZ0%2BgvV9rj%2Bv5c1ppsn5jXtGZ%2F%2Fyw6j3oR%2F1fsDRgE2oivXt9aRcPbFotDC3PtV%2BNupHMeJj7klyp6P8%2F1lholt%2FwxiKXGP9o16J5540Myyzh876MRED7HQJV2nIFQohwqwJxFGFu517Brsf3YhpQx12sqVzEgFZfN2mg3GYHIfm%2FzdHRY0bUAaAsmFNHwUa%2FLR9vzA31yhHEdXhsqcPNTKkbEsMLIymQyWRv2EujM0%2BXGjf8hf95GNS6CFvVyDVnIfZT0WuUV1dyZZKnRos8GRyI5GHVMpkR7Vp97T8KSN%2BlXsFze9TXiZbDH%2BVABzuj7PndWFFyHrbM2T2DCewFZocAtDinz1aP3ijEL7XdXkDAW%2FSDYdNM5W2WWeTwk9WevMuVbvyFyRBlvxQjDjlr7JBjqkAVSyo62PlXplPV0225dnRZp8o37rlh6N%2B6XM7ukSr7XGfjlBrLwy19hlV7dFsdmA45Yx5D8FZE7qFkopOX5kwutQJAKEkgyMADkZUCuaT5UPGmEL6%2F2xrXTPLMr7vQf43lYwbkqG%2BSJP5zQ79d5RH%2Bnnlxr5jAn7pDDSy8uqS8IcdxgTBxZSIhJ1aPmmbJDaz6k%2BxgJ%2FfqmgiQQDITt6px%2Be%2BOO8&X-Amz-Signature=58aa3b041fd7e7f16ed743d17f0d07cff4756d8563a9d7eb7585cf728fd5860f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3KD7SQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC6mYRAFbaFfbVYgoi5MQgohuSL%2Fwu7wfivFKRrvIWXgwIhAOeeAFht292QRANh8VCYvf1udmcW7MQMAvaB5OA%2BKGHRKv8DCCIQABoMNjM3NDIzMTgzODA1IgwniR8cvS8jmOfvKh0q3AMGOEY%2B45m82lPN8%2BAGucwwWkqKzCrlHFFd6IyAzIax6sIG6CPEVYolAqokXvyXlKdVZKasHx9OrYjg5GbVQBT2%2FdWCbd7L27w94765KtrqPnwS8w0BzUDfv06XZ1%2FMpnjPaOg%2BwXF21aKYML8Aly3UPufY0ISISb9Fxq6Nw1pj0NdX322%2BOxr05ZOUlDZ6rnNhKp0zzBwrV%2FMOwcob%2FMzqUvzYYqCJZj4vCLNDKkRAwAZ0%2BgvV9rj%2Bv5c1ppsn5jXtGZ%2F%2Fyw6j3oR%2F1fsDRgE2oivXt9aRcPbFotDC3PtV%2BNupHMeJj7klyp6P8%2F1lholt%2FwxiKXGP9o16J5540Myyzh876MRED7HQJV2nIFQohwqwJxFGFu517Brsf3YhpQx12sqVzEgFZfN2mg3GYHIfm%2FzdHRY0bUAaAsmFNHwUa%2FLR9vzA31yhHEdXhsqcPNTKkbEsMLIymQyWRv2EujM0%2BXGjf8hf95GNS6CFvVyDVnIfZT0WuUV1dyZZKnRos8GRyI5GHVMpkR7Vp97T8KSN%2BlXsFze9TXiZbDH%2BVABzuj7PndWFFyHrbM2T2DCewFZocAtDinz1aP3ijEL7XdXkDAW%2FSDYdNM5W2WWeTwk9WevMuVbvyFyRBlvxQjDjlr7JBjqkAVSyo62PlXplPV0225dnRZp8o37rlh6N%2B6XM7ukSr7XGfjlBrLwy19hlV7dFsdmA45Yx5D8FZE7qFkopOX5kwutQJAKEkgyMADkZUCuaT5UPGmEL6%2F2xrXTPLMr7vQf43lYwbkqG%2BSJP5zQ79d5RH%2Bnnlxr5jAn7pDDSy8uqS8IcdxgTBxZSIhJ1aPmmbJDaz6k%2BxgJ%2FfqmgiQQDITt6px%2Be%2BOO8&X-Amz-Signature=b4c050335e9d73531d1f3b5d4bdc67590186814ccfb4c8860284b49202e5d853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

