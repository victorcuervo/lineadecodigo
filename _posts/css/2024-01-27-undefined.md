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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3V5WLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCdO9EbNrK1%2F7wROgVkfxLdqmWnGUDU2fNA%2BUrY2gxXZAIgWeqOv0QfEwDUedgG%2F%2BrlpbLCp6tAKoi%2Fr%2F5WscUgp1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHvolBm3YoS5TooWWyrcA%2FvzDqmjeB6LqDdkDck18BDNCykgNVClKU4BzjtWrYcrbIuE%2Ba8V6xTvtA6EnqD0jMXIUFUdiuigGMMoMy%2FT5bGCLDi8MhUZZKol7HzECkINl49PCLZ%2BzzUg5z%2FpzZHfZpC%2FQXhUa7NXkjKqM%2FKdzVzj%2BBR%2BbG5jZCvnG%2FEX4JVsg97NzYJlfMqjjITaPH5i4fGDMcY3I%2BwUQWXLaMqalQ0DLj1rNVG1InNH9KZjQLiHZCLfqsnU4TZdpWLOHEkcWLB0XHU%2BsMz2MDI9OjP7vdPxPRH4TzAzVOji5J6S3aKk25F8IqQvmStUxdrniBA5UWgWCYtApfu6ZldvZYIwpFkGqSiNvck3k7Zt2eM2MWkBwjugVxr3FC1sxcilVzDKb8QGQdtCv1eSxRBekSntC9shZxdaly8seV5GjlDtmWnIw%2BMsOM77%2BN5cTS9qMPFxc96haYhABJ38%2BvtERmv17Uu8KAc0xhvQzammcsbss9%2Ff%2BnrQqE0QOk4GMspOs%2B0GNHZptwvirMzSiMB8l%2F2W9WeMlvHIsFxcoCSQH%2B%2F0iZ0HjMEh%2BCIFg29seHTlGLO0dERhYj0ks%2FBsbjQjk%2FiI6mgwI5bUkqTu2VXxs3Ik1MCn2PyY%2BiobmuGGyMT4MMaUvskGOqUBQWOKf%2FHoXF7d0Muv3ISzlUpA19M5TOB3nEe0Hy2YbvtcTmegvaLjmev%2B9Tv%2B1EtKvxE9nFpER%2Bel3SafyI777FlaWK4LuH%2FPgQq7PybI72aIDTM6BLkA6puNyVOlolDIR1U2NgZO2oenN9Iq4LGRUD0nemkjPTOcFQd59H2BSw2%2FfGdpMl47kMyxyRO%2FjkRnoBjR0fndoDNFZ9sfwE9nuzRkTUlG&X-Amz-Signature=5eb14510bec1645950dca669f127d19d00614a9f25df8dc03360b952b3d9d18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3V5WLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCdO9EbNrK1%2F7wROgVkfxLdqmWnGUDU2fNA%2BUrY2gxXZAIgWeqOv0QfEwDUedgG%2F%2BrlpbLCp6tAKoi%2Fr%2F5WscUgp1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHvolBm3YoS5TooWWyrcA%2FvzDqmjeB6LqDdkDck18BDNCykgNVClKU4BzjtWrYcrbIuE%2Ba8V6xTvtA6EnqD0jMXIUFUdiuigGMMoMy%2FT5bGCLDi8MhUZZKol7HzECkINl49PCLZ%2BzzUg5z%2FpzZHfZpC%2FQXhUa7NXkjKqM%2FKdzVzj%2BBR%2BbG5jZCvnG%2FEX4JVsg97NzYJlfMqjjITaPH5i4fGDMcY3I%2BwUQWXLaMqalQ0DLj1rNVG1InNH9KZjQLiHZCLfqsnU4TZdpWLOHEkcWLB0XHU%2BsMz2MDI9OjP7vdPxPRH4TzAzVOji5J6S3aKk25F8IqQvmStUxdrniBA5UWgWCYtApfu6ZldvZYIwpFkGqSiNvck3k7Zt2eM2MWkBwjugVxr3FC1sxcilVzDKb8QGQdtCv1eSxRBekSntC9shZxdaly8seV5GjlDtmWnIw%2BMsOM77%2BN5cTS9qMPFxc96haYhABJ38%2BvtERmv17Uu8KAc0xhvQzammcsbss9%2Ff%2BnrQqE0QOk4GMspOs%2B0GNHZptwvirMzSiMB8l%2F2W9WeMlvHIsFxcoCSQH%2B%2F0iZ0HjMEh%2BCIFg29seHTlGLO0dERhYj0ks%2FBsbjQjk%2FiI6mgwI5bUkqTu2VXxs3Ik1MCn2PyY%2BiobmuGGyMT4MMaUvskGOqUBQWOKf%2FHoXF7d0Muv3ISzlUpA19M5TOB3nEe0Hy2YbvtcTmegvaLjmev%2B9Tv%2B1EtKvxE9nFpER%2Bel3SafyI777FlaWK4LuH%2FPgQq7PybI72aIDTM6BLkA6puNyVOlolDIR1U2NgZO2oenN9Iq4LGRUD0nemkjPTOcFQd59H2BSw2%2FfGdpMl47kMyxyRO%2FjkRnoBjR0fndoDNFZ9sfwE9nuzRkTUlG&X-Amz-Signature=1d4a13356c8cbb49316cf29e7224aa6c549e17f098f32e37a683dbc13e1d1dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

