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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLABIKCD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFmI5PJ7XX0LaT0trlFYu3HDABcDlsKUYtlTLsG4jghSAiAe1WPchoBnVqcsGPUZp8arcbigeEhXwaqvsELxFLgS%2Bir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM%2Bf8u5KaikCi3JWHxKtwDKuNB%2B%2B5BRWTQ4VAhKC0hQuGBF6SE%2F2E5%2Bf2s8VD6dJkYEUyKBZ01o6k8kDR8DZj67oav2R0yPSafPcD5ocAiF7M3Gbk%2BTfTRbgxG13mDHT0B%2BxwpmoiX8QBFffVFX6uke5xjFgAAGiXtCY4PgxtYSmgtBFotuJ7%2BJBEjJug%2FoCs7MH343qnlCZu6UraJRQkEGj3Fup9ZyEp5JCiwu%2FU1AJK%2FK9diM%2BmA2MG3mCnEdCLV0VBR70rgGfxXwpj9dHoZxP9wsfGQ4tgNcmHUEYTnj7Mr2zbQXhu98kZChg0xJXGIVDjyJBxERuRE93vg4sfBk5f198ylkmyM1wrvFj26%2B5demute0XjZHgXxz%2FsqmsOzn1w2X5OTHsPmWRA%2FlZaNJ2k7YCHvX75l4hOkbVIM6HFcrRh5gkfErmbaZblteV9XAtuxOxuD6t3SWgU4R3AMy403yZQPTDxKp7%2Bo86UoE1O4AOGLzCwb1EltLnrAawkiSwi2Ofj8SaRRBJclq8y9QWQt1HdjnkfI8H66JjjO8Gds%2FSJra3CcBLXxLyJFRhAQobTdDQybfqxwM6PjRkeReB%2FX8o6Fgh7rO8RS6o7Lcokvu3KaNWKfL6O6Z2%2FLINg3QK8LVn2awr1oYFEwoJa%2ByQY6pgEGXvwnGoQ0TIk7w1u39YxISvAqSPJzQvyUa0IgiZ%2BfYfdl%2BKZApZ2ojJ4lKbGYsPtRdarwTFVth7XGAackbKWacz81EC%2FJlBzXLduZt6ZFwEtrcolKnwGiKOcwqo5h8j30h3KZumK1P3P%2BQn%2FTbTQOI7y84diwq9vFqW9d1%2FjiSLOH1lqYoOp0aV1WI3SWWAxhRcrVwuAt%2BMweaSsEnoPhWh2VOGoJ&X-Amz-Signature=355f4d26a2dfa613c427d32a7b5a8ebb835b9708160952470300bc88f2e29091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLABIKCD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFmI5PJ7XX0LaT0trlFYu3HDABcDlsKUYtlTLsG4jghSAiAe1WPchoBnVqcsGPUZp8arcbigeEhXwaqvsELxFLgS%2Bir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM%2Bf8u5KaikCi3JWHxKtwDKuNB%2B%2B5BRWTQ4VAhKC0hQuGBF6SE%2F2E5%2Bf2s8VD6dJkYEUyKBZ01o6k8kDR8DZj67oav2R0yPSafPcD5ocAiF7M3Gbk%2BTfTRbgxG13mDHT0B%2BxwpmoiX8QBFffVFX6uke5xjFgAAGiXtCY4PgxtYSmgtBFotuJ7%2BJBEjJug%2FoCs7MH343qnlCZu6UraJRQkEGj3Fup9ZyEp5JCiwu%2FU1AJK%2FK9diM%2BmA2MG3mCnEdCLV0VBR70rgGfxXwpj9dHoZxP9wsfGQ4tgNcmHUEYTnj7Mr2zbQXhu98kZChg0xJXGIVDjyJBxERuRE93vg4sfBk5f198ylkmyM1wrvFj26%2B5demute0XjZHgXxz%2FsqmsOzn1w2X5OTHsPmWRA%2FlZaNJ2k7YCHvX75l4hOkbVIM6HFcrRh5gkfErmbaZblteV9XAtuxOxuD6t3SWgU4R3AMy403yZQPTDxKp7%2Bo86UoE1O4AOGLzCwb1EltLnrAawkiSwi2Ofj8SaRRBJclq8y9QWQt1HdjnkfI8H66JjjO8Gds%2FSJra3CcBLXxLyJFRhAQobTdDQybfqxwM6PjRkeReB%2FX8o6Fgh7rO8RS6o7Lcokvu3KaNWKfL6O6Z2%2FLINg3QK8LVn2awr1oYFEwoJa%2ByQY6pgEGXvwnGoQ0TIk7w1u39YxISvAqSPJzQvyUa0IgiZ%2BfYfdl%2BKZApZ2ojJ4lKbGYsPtRdarwTFVth7XGAackbKWacz81EC%2FJlBzXLduZt6ZFwEtrcolKnwGiKOcwqo5h8j30h3KZumK1P3P%2BQn%2FTbTQOI7y84diwq9vFqW9d1%2FjiSLOH1lqYoOp0aV1WI3SWWAxhRcrVwuAt%2BMweaSsEnoPhWh2VOGoJ&X-Amz-Signature=5d09079d8b114e535c1cc083551868786e14a6fadf049e327f80a9ca5cce558d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

