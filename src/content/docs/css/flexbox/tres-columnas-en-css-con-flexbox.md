---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T6KNG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMBO1jhbB5UQaxSKeyURWRCQQuZYCliKIgr0krt6NkDAiBpjWmM8g1d7WHNG0Qk4ubtX7tjA0A41xBql6jL2znJ%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoaAcDvXbYLnPfkxwKtwDad0DsG3Od8SqdDqh7jxQlAthD28qIXMefNSXhyVKVkb3sVnWcn5JaFTxPMbwMqxz8uiTjNY%2Fctv2sRQCVxWSh6lkY1r46tWj9NkHwnppeo1HalNCEv6GLpmrDtRnHmpp2L5mDSWJIxDTV898W3RM4raYnQLiyxJOAK5x4Lx2vWtw7fzJvHEoQzGmsmdwG1hZAMLHCKVnBy19VKTcvLDyWEfahA2k5u0bBPcTEX2OqWRKLeo5HWSP4J7nVZhhmxxtzBw26%2BNQbDUOm4PTQNcLxDbEbY5hfOEiNPqD%2BCgvvOT970EsnPSujwyGoFxS4pZi5sll8JztZiV9WyIa1pkj6KMlFD0fzcA067kB7bUnHAHrn5rlASHay6650HWcRZisRJC4DPiGk5FP%2FdTzuiETZQOxjaGr4vu%2BebRPaALeyaLW3E1BG5WSMz3d9tATvI6gbzOj38HlgfRQj%2FosBELZgrOzzWdO9Tnvb1%2BgmbbhSOZGZc4Ra%2Fh5Ifq22CMYxcDdwo2AOUpFtdkYU9Jk25EYnxkSgN7duMmJmovRriN5ZNMr%2B1pJs0Gs%2FMPZ5q1qYigMEcNtnsedUtI5ip%2B44T2NuCVsZv34raX0Oiqgco6hlXhjMp8HSL2D03r5sl4wiKLUyQY6pgFjq1WuiIJ%2BoHuUf%2BupKJVMZWJv2f%2BIlUl%2FkqFtCDlDdaxhYeJS8oeFIC4XMu4vp3OTd0%2BWrePmbLDlszJBn9HBcfwsRXZN1XMg5Za1BP11WNo9aZeiVXGN7VD7RS7qiEc4Za%2FgvBZ3l%2BITrBdPlnnCs4QOUsONJrEY8F0wOS94e%2F4bErmBqVU0q7sURpx4HYwHr%2FcklmnHhYGsvut6pRvFd1xn%2F4CE&X-Amz-Signature=088da4c9e4aa2e9d7b9d237fe9f43d28b5dad17242db9e12f678d9225823bb2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T6KNG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMBO1jhbB5UQaxSKeyURWRCQQuZYCliKIgr0krt6NkDAiBpjWmM8g1d7WHNG0Qk4ubtX7tjA0A41xBql6jL2znJ%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoaAcDvXbYLnPfkxwKtwDad0DsG3Od8SqdDqh7jxQlAthD28qIXMefNSXhyVKVkb3sVnWcn5JaFTxPMbwMqxz8uiTjNY%2Fctv2sRQCVxWSh6lkY1r46tWj9NkHwnppeo1HalNCEv6GLpmrDtRnHmpp2L5mDSWJIxDTV898W3RM4raYnQLiyxJOAK5x4Lx2vWtw7fzJvHEoQzGmsmdwG1hZAMLHCKVnBy19VKTcvLDyWEfahA2k5u0bBPcTEX2OqWRKLeo5HWSP4J7nVZhhmxxtzBw26%2BNQbDUOm4PTQNcLxDbEbY5hfOEiNPqD%2BCgvvOT970EsnPSujwyGoFxS4pZi5sll8JztZiV9WyIa1pkj6KMlFD0fzcA067kB7bUnHAHrn5rlASHay6650HWcRZisRJC4DPiGk5FP%2FdTzuiETZQOxjaGr4vu%2BebRPaALeyaLW3E1BG5WSMz3d9tATvI6gbzOj38HlgfRQj%2FosBELZgrOzzWdO9Tnvb1%2BgmbbhSOZGZc4Ra%2Fh5Ifq22CMYxcDdwo2AOUpFtdkYU9Jk25EYnxkSgN7duMmJmovRriN5ZNMr%2B1pJs0Gs%2FMPZ5q1qYigMEcNtnsedUtI5ip%2B44T2NuCVsZv34raX0Oiqgco6hlXhjMp8HSL2D03r5sl4wiKLUyQY6pgFjq1WuiIJ%2BoHuUf%2BupKJVMZWJv2f%2BIlUl%2FkqFtCDlDdaxhYeJS8oeFIC4XMu4vp3OTd0%2BWrePmbLDlszJBn9HBcfwsRXZN1XMg5Za1BP11WNo9aZeiVXGN7VD7RS7qiEc4Za%2FgvBZ3l%2BITrBdPlnnCs4QOUsONJrEY8F0wOS94e%2F4bErmBqVU0q7sURpx4HYwHr%2FcklmnHhYGsvut6pRvFd1xn%2F4CE&X-Amz-Signature=ce2f1ac99937ea230615f93a215277e7fd7f53c36f18c1fc1e7d0edb30326e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

