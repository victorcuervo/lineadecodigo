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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGQHTYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDotE5h9yb%2BSxsQ3VF4WjvVNmvSPa7%2B6bTbYxLpoMN6UAiBgL0TDbVb9jajpaDXPFLmnD3jcO%2F%2Fpn4LtzvwxkJkL9ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxaObvY3vQ7jTHBTfKtwDhTKMflkJoKz2qJF9KVKrCHIk0OpKad65RaKoHGBoinSVvmdSDq89xzszMAZuBMHY9felBXq0EFAqfYCx3yVyAkMb1IlHeleyS%2B%2FPMCQ0Ei0by%2FPAKTs11Ppu4XwydRt4YpQdRWLKTL9CxZU96ICFzagvVQCjamwfhngRzC1Grdnl49JDwQKheL3ob%2BmNgbLgcd1wSe132nZfsrafQpS6vnFiktu7GaSs15hDM0P9xt4l2nHB8y8y41%2FP35KaWTAWdsy7aMnxdAbsPVR%2BjxrUACHxY%2Bjh9Qlnajfth3H%2BevjMDAQvCnl86SS7O10C8RzS%2FCdcWa%2F%2FmF8ypr96Hk16XEFKK%2Bgq9kgoYHO%2FUF%2BM4Qa0rCO7Mbyne2t8QdBz%2FxH9xGWnaXhnh3x4%2FEP9FdIBepc4DnmUdSoZVqefbI2Wwmsp9bVAROOxsvt3ptxGH9ViybB4DGAe8uFSv1cJUhEnol86Sw%2FQOZ3pxaPfM5nlZltFnyzG%2F9bjYBxN6JseC2n26qPoohngE90oth6QBJ1N5XML2n19Pll4gKAXaktgwCGMqIZ4%2FCz1Ph8XUqPWYi5n5j2cuVrSDzxmUFsOwNWfa2BrAOG%2FcjvA0AbcxvqUZ5uwXQK4rnc1%2FhpIac4wqa7AyQY6pgHIBAgomUHlcKGRq7vfAuyu9r1b8eJ0X7RPfgbXhE03obno1XKRs0V6suyfREAbm7AVr9ci0f6nvbOsioy9F5O51ToR4C%2BM5nupTAwAgE7N60j5t0fDve7pirLTJUzAVdBAhVWl05T50qKoucvwNdZFiT1vzE0seoD5%2Bj46vkHeQQpT5plPQZf4GP%2BKi%2F3rgNahTPfN0Eq5BcJ%2B0KoVeloyuvOMPCR8&X-Amz-Signature=2e83d5840d204f3a7bf22f5c018679f26713ccf6b8a487697bf9187fd5471891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGQHTYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDotE5h9yb%2BSxsQ3VF4WjvVNmvSPa7%2B6bTbYxLpoMN6UAiBgL0TDbVb9jajpaDXPFLmnD3jcO%2F%2Fpn4LtzvwxkJkL9ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxaObvY3vQ7jTHBTfKtwDhTKMflkJoKz2qJF9KVKrCHIk0OpKad65RaKoHGBoinSVvmdSDq89xzszMAZuBMHY9felBXq0EFAqfYCx3yVyAkMb1IlHeleyS%2B%2FPMCQ0Ei0by%2FPAKTs11Ppu4XwydRt4YpQdRWLKTL9CxZU96ICFzagvVQCjamwfhngRzC1Grdnl49JDwQKheL3ob%2BmNgbLgcd1wSe132nZfsrafQpS6vnFiktu7GaSs15hDM0P9xt4l2nHB8y8y41%2FP35KaWTAWdsy7aMnxdAbsPVR%2BjxrUACHxY%2Bjh9Qlnajfth3H%2BevjMDAQvCnl86SS7O10C8RzS%2FCdcWa%2F%2FmF8ypr96Hk16XEFKK%2Bgq9kgoYHO%2FUF%2BM4Qa0rCO7Mbyne2t8QdBz%2FxH9xGWnaXhnh3x4%2FEP9FdIBepc4DnmUdSoZVqefbI2Wwmsp9bVAROOxsvt3ptxGH9ViybB4DGAe8uFSv1cJUhEnol86Sw%2FQOZ3pxaPfM5nlZltFnyzG%2F9bjYBxN6JseC2n26qPoohngE90oth6QBJ1N5XML2n19Pll4gKAXaktgwCGMqIZ4%2FCz1Ph8XUqPWYi5n5j2cuVrSDzxmUFsOwNWfa2BrAOG%2FcjvA0AbcxvqUZ5uwXQK4rnc1%2FhpIac4wqa7AyQY6pgHIBAgomUHlcKGRq7vfAuyu9r1b8eJ0X7RPfgbXhE03obno1XKRs0V6suyfREAbm7AVr9ci0f6nvbOsioy9F5O51ToR4C%2BM5nupTAwAgE7N60j5t0fDve7pirLTJUzAVdBAhVWl05T50qKoucvwNdZFiT1vzE0seoD5%2Bj46vkHeQQpT5plPQZf4GP%2BKi%2F3rgNahTPfN0Eq5BcJ%2B0KoVeloyuvOMPCR8&X-Amz-Signature=f1fd2d7f214fa9b542cbf7107e41a2f8a33126f80359205a07d7a5cae5667e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

