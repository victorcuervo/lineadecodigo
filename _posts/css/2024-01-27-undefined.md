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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MAMHFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICB7%2B37KvjZHyGZrTn%2BReEY%2Fp5HSxlgUVRifXzIL2tmhAiBLHxB0X40fZZF323rkIy%2BndVJY5%2FCtAHH9S6NbK0HkXir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMsf6HDAO0ulJFMlqxKtwDDRL6xZn1Oxi4UItiP%2FMfOeJzxP1Vra16HFwB6CzrXr6gMQtOCShMueOiMDmT89qs%2BaXeImUA57w5jNGPUAZ%2FSf8hSlHZSPxGj5Ca4pKR5HyqUGA8wq2rAFpvcS3vrHJqFrXbKABrDFw28nokM8%2BVp1JdmLwooZboCSBjT1oRa5dERqJfQU9Hswsig4wACG9cvFeMeKQMvLG7qNcSnAx4eQs%2Bm%2Bm3l2UezyZz3rG0JCZENK8DBfbi%2BINN3F%2BONsgvN2Rxid04X%2F3upW1ctWrFm6iD376xq5ippDZwCQYtp3wOFATwQR%2FfWOQjQlhEfLM67Jr7eX4O3rFSR5bdfR9wvqZYxafLKXoP8p7Ydbu0%2FJ8w0%2F7ZuDHUA9xqdACxYS9%2FR6OlNN9NBixv6dCkdY6jm9wixvxeTJy3e%2FEJqT5oi0hUf4AnJ6ojhcha9%2FV6MsauIc97mJMc%2FdsA62qgxgjtCgWl%2BpeQw8BlwefclEqrTd5loXOQC8AbpIDartt%2FzYFfutfTex6ulQ5Xq18tm67xndoAo8W0KiiRgrlQqCco6plNqPMwgmt7cskHlt4gZm8Ca9ZVIvzxzC61rHIIPzoZPSTn54Wof6G80YH9y9ALFV5kDw1AZJZRNj2uP7ww2pS%2ByQY6pgHxlsd6QU98t3foJ46VqUpncbPiaKLRWn4TKa%2BQXpjeK0XB3nLoow%2Fy8qqb5TYgJUaC173on%2B7zMf9rv%2FE9GWVUd2lwPbGkCfqTwk1P%2FkdDuMt5E86OaGniCbSxwfKjpx4ZrVXO%2FQf4eEevdJKhXZpJlesB2JPmW7wjj3ykJCqInsIpN1Dky43qYYu2yGIfDk7hoRvTpBqb4trCfx4LCQjSK7ddB5sl&X-Amz-Signature=debe89bf7d8c09f502506a40a6485ebb20d6eb2eed137c2c09e70b81287b4ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MAMHFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICB7%2B37KvjZHyGZrTn%2BReEY%2Fp5HSxlgUVRifXzIL2tmhAiBLHxB0X40fZZF323rkIy%2BndVJY5%2FCtAHH9S6NbK0HkXir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMsf6HDAO0ulJFMlqxKtwDDRL6xZn1Oxi4UItiP%2FMfOeJzxP1Vra16HFwB6CzrXr6gMQtOCShMueOiMDmT89qs%2BaXeImUA57w5jNGPUAZ%2FSf8hSlHZSPxGj5Ca4pKR5HyqUGA8wq2rAFpvcS3vrHJqFrXbKABrDFw28nokM8%2BVp1JdmLwooZboCSBjT1oRa5dERqJfQU9Hswsig4wACG9cvFeMeKQMvLG7qNcSnAx4eQs%2Bm%2Bm3l2UezyZz3rG0JCZENK8DBfbi%2BINN3F%2BONsgvN2Rxid04X%2F3upW1ctWrFm6iD376xq5ippDZwCQYtp3wOFATwQR%2FfWOQjQlhEfLM67Jr7eX4O3rFSR5bdfR9wvqZYxafLKXoP8p7Ydbu0%2FJ8w0%2F7ZuDHUA9xqdACxYS9%2FR6OlNN9NBixv6dCkdY6jm9wixvxeTJy3e%2FEJqT5oi0hUf4AnJ6ojhcha9%2FV6MsauIc97mJMc%2FdsA62qgxgjtCgWl%2BpeQw8BlwefclEqrTd5loXOQC8AbpIDartt%2FzYFfutfTex6ulQ5Xq18tm67xndoAo8W0KiiRgrlQqCco6plNqPMwgmt7cskHlt4gZm8Ca9ZVIvzxzC61rHIIPzoZPSTn54Wof6G80YH9y9ALFV5kDw1AZJZRNj2uP7ww2pS%2ByQY6pgHxlsd6QU98t3foJ46VqUpncbPiaKLRWn4TKa%2BQXpjeK0XB3nLoow%2Fy8qqb5TYgJUaC173on%2B7zMf9rv%2FE9GWVUd2lwPbGkCfqTwk1P%2FkdDuMt5E86OaGniCbSxwfKjpx4ZrVXO%2FQf4eEevdJKhXZpJlesB2JPmW7wjj3ykJCqInsIpN1Dky43qYYu2yGIfDk7hoRvTpBqb4trCfx4LCQjSK7ddB5sl&X-Amz-Signature=aa720f92cd0c8f6abf303bb656f439edd627201d142c5e57f3d377f8438610f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

