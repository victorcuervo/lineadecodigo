---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4XW6Q6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkKlqwyQZJNsw0vJYclFS4RG6mHtW25RrYj%2FyKVLovAiAwyC0miekbI67HH0eTqXrZD2SRDPuqKBY%2FBkjsf3IDAyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgs%2B513L09kNRXEzKtwDwZJG87%2BS3HF%2Bn6ukeCS185ROHMuvOOTOoRMWAQ%2FNHqLWYYV2i4InlCTraAhzi95%2Blh3d3ewdMSJ5WcJJhqC9f6hJhLxc8PvYfaNmyROJrEhHsqqRl5bcOGlR%2FfKNRvfP%2BuMF5vFO6OX2Ex3MI0vTMYnCh5QO%2FI5jJ7A1Mpsocq1q2M7EEEfrSsSJmFpPw8b7faoGOuVLxLV4IfoGO43CMeXzczXfLwGEjCGNRf6wEiLTuNR5LJNiMkvtd3TN%2B8jDKUQjz%2F7ffn2Btn%2FHTTqsvFMH%2Fz3Ko40nTQOG2C%2FnGIdbYcJ6u8HZ6McwRBzx9XphMkf2D5aOHS%2F%2FmMGFNTuNYLZzhXm%2BV5msETcYYkUBlY4v83GDktSQdFChNxethwG8Z4MwUuw9NTbirw2GXfM1OE57kyZad0KrkuyC9iUeXLB0g2qOyYatPFF35dKpVMUXMb3ZACRxzyUqyABuUa8L9m4mPgWM%2BayLxUupZPZGHPUOgcR4oNZwVrsH9vXNiJSvfk6WwTAAuuLYkmjLKZPFxRQVwpy3Jn9%2Fk4skcm6UT4AdVzAU1wHQpJeL3ELizcf6vNviBjiRsoYTIDVmLNE5O5n9loMmdcYLag1vxmcMmT3vx%2FFj9%2FdPjERYlyQw3YbcyQY6pgE27nlUoyvl3L9a23%2BUKqZwS2pxvEkyYbrHU%2FpOaWorCTCSL%2FvRPNavGyYiYI7LWxwzthJIwfEi%2BOp71a43oueshjwzqrTJuHwy%2F3WZ9wG%2BcO1c5woD%2FcWRv27oZD9I9EBsxGqeJKH0VG1oGdaZCD2ROwtcSCUMo%2F%2BP%2BsM8W8Riri2tQFqY9Kvt63VSvmbKNk4zPmqY1OTdEWdC3wZPkSqoqqBr64sL&X-Amz-Signature=7a6be3aeb739b57896a921c2dbf155d4c48ea3ef1352a6275a1b3e2e5d784095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4XW6Q6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkKlqwyQZJNsw0vJYclFS4RG6mHtW25RrYj%2FyKVLovAiAwyC0miekbI67HH0eTqXrZD2SRDPuqKBY%2FBkjsf3IDAyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgs%2B513L09kNRXEzKtwDwZJG87%2BS3HF%2Bn6ukeCS185ROHMuvOOTOoRMWAQ%2FNHqLWYYV2i4InlCTraAhzi95%2Blh3d3ewdMSJ5WcJJhqC9f6hJhLxc8PvYfaNmyROJrEhHsqqRl5bcOGlR%2FfKNRvfP%2BuMF5vFO6OX2Ex3MI0vTMYnCh5QO%2FI5jJ7A1Mpsocq1q2M7EEEfrSsSJmFpPw8b7faoGOuVLxLV4IfoGO43CMeXzczXfLwGEjCGNRf6wEiLTuNR5LJNiMkvtd3TN%2B8jDKUQjz%2F7ffn2Btn%2FHTTqsvFMH%2Fz3Ko40nTQOG2C%2FnGIdbYcJ6u8HZ6McwRBzx9XphMkf2D5aOHS%2F%2FmMGFNTuNYLZzhXm%2BV5msETcYYkUBlY4v83GDktSQdFChNxethwG8Z4MwUuw9NTbirw2GXfM1OE57kyZad0KrkuyC9iUeXLB0g2qOyYatPFF35dKpVMUXMb3ZACRxzyUqyABuUa8L9m4mPgWM%2BayLxUupZPZGHPUOgcR4oNZwVrsH9vXNiJSvfk6WwTAAuuLYkmjLKZPFxRQVwpy3Jn9%2Fk4skcm6UT4AdVzAU1wHQpJeL3ELizcf6vNviBjiRsoYTIDVmLNE5O5n9loMmdcYLag1vxmcMmT3vx%2FFj9%2FdPjERYlyQw3YbcyQY6pgE27nlUoyvl3L9a23%2BUKqZwS2pxvEkyYbrHU%2FpOaWorCTCSL%2FvRPNavGyYiYI7LWxwzthJIwfEi%2BOp71a43oueshjwzqrTJuHwy%2F3WZ9wG%2BcO1c5woD%2FcWRv27oZD9I9EBsxGqeJKH0VG1oGdaZCD2ROwtcSCUMo%2F%2BP%2BsM8W8Riri2tQFqY9Kvt63VSvmbKNk4zPmqY1OTdEWdC3wZPkSqoqqBr64sL&X-Amz-Signature=c1811f0a15f46c09ee4c6fe1d62a8191f08bfe6ddc0b58d444e273ceff1e4ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

