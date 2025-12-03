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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6DEBFY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFz4Civ%2B91c%2BKJ2liEvbRyJ%2BJ5SdhfPwbMdc9XgZzHv9AiAz5uph0OjV8kwghIHqoHV2Ola4D9ZPdHIkic1TE5jtfSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtfqW8ChIN283OYnrKtwDmG3DUyUH09ND70yKRYnGtFA1XGYCQFTH9Ds98JII82%2FfWI3hVmmGI2KuUhisIu54yO%2BF5CBF2Zb9c26LeiMBGbQvijPOLBwBXrXvp%2BmmeVT%2BpEl9gl4CSn35VfnTdOgnuw2c89nY4MxUJuuqVjqXbTTKIozf%2FiR6kihhOhooZnrj4JshdFAT8kGKXN0faOgtAs1HmNxnPQ0LyZP7URw8tXYK%2FlAQKqYzU%2BgknHOQpjGuoNccqOhPOQOLecwzibwiL60AuMrzohjkyLbr%2ByzaL%2FINxTuYq1UVFjbNXWgIJGy0BU8nmf1sHpfEZQA9hLT%2Fa05nLvejCdZUlj0rJSww6D2YfqTcOVIS9rkA7xd%2BuUkbVR5oa90huKsiYQDmwhExZrlbYkjMGVrqBLqvTN98k%2FBIW9wTTipROTCSPr9vKtsrAitJNdk7gdKanYUL8IfdeuVt2UwavxA7gIhyQ6%2FKZEQXAR2Eream%2BMGpFh2x7YQiuf6tcKAyyooxM%2FrAArzusb%2BUdi8X9axl4h5m5PF2v7kpmdH8LTcP8xCdDh5fzmqD1dAwZheIBO0qbNoDcnjq%2FYz6G%2B9kjMjKciaVfvgk64EmphppK9o2Sv023qtWUjNLqcLX4Y6GkjvP37gwh5W%2ByQY6pgGFO2XR0e8CpjRkJyD7U741tn6tOS4ZUxcp38E0H4gS6pPAufyq8A18gBWHtg9Is1vN4uVFrE4ExLD5IEY85APQ2uDSRZOhtm52ssqI4Bq%2BihS3KtmD%2FT%2FStlydKpqRAqSRjM1ED2ng3pFQCjH2hIoo%2BbuzK36UuOgolhbUqLfUUpYSU3W3yEy1U5nTJX0z5LANQYeLE5bru5IqNiv09cG9osn7cpMu&X-Amz-Signature=148a3b6cde190a3cd5709cfcad7842fd77c13f0a43c3daa7b8a80aaa7bf1bd24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6DEBFY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFz4Civ%2B91c%2BKJ2liEvbRyJ%2BJ5SdhfPwbMdc9XgZzHv9AiAz5uph0OjV8kwghIHqoHV2Ola4D9ZPdHIkic1TE5jtfSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtfqW8ChIN283OYnrKtwDmG3DUyUH09ND70yKRYnGtFA1XGYCQFTH9Ds98JII82%2FfWI3hVmmGI2KuUhisIu54yO%2BF5CBF2Zb9c26LeiMBGbQvijPOLBwBXrXvp%2BmmeVT%2BpEl9gl4CSn35VfnTdOgnuw2c89nY4MxUJuuqVjqXbTTKIozf%2FiR6kihhOhooZnrj4JshdFAT8kGKXN0faOgtAs1HmNxnPQ0LyZP7URw8tXYK%2FlAQKqYzU%2BgknHOQpjGuoNccqOhPOQOLecwzibwiL60AuMrzohjkyLbr%2ByzaL%2FINxTuYq1UVFjbNXWgIJGy0BU8nmf1sHpfEZQA9hLT%2Fa05nLvejCdZUlj0rJSww6D2YfqTcOVIS9rkA7xd%2BuUkbVR5oa90huKsiYQDmwhExZrlbYkjMGVrqBLqvTN98k%2FBIW9wTTipROTCSPr9vKtsrAitJNdk7gdKanYUL8IfdeuVt2UwavxA7gIhyQ6%2FKZEQXAR2Eream%2BMGpFh2x7YQiuf6tcKAyyooxM%2FrAArzusb%2BUdi8X9axl4h5m5PF2v7kpmdH8LTcP8xCdDh5fzmqD1dAwZheIBO0qbNoDcnjq%2FYz6G%2B9kjMjKciaVfvgk64EmphppK9o2Sv023qtWUjNLqcLX4Y6GkjvP37gwh5W%2ByQY6pgGFO2XR0e8CpjRkJyD7U741tn6tOS4ZUxcp38E0H4gS6pPAufyq8A18gBWHtg9Is1vN4uVFrE4ExLD5IEY85APQ2uDSRZOhtm52ssqI4Bq%2BihS3KtmD%2FT%2FStlydKpqRAqSRjM1ED2ng3pFQCjH2hIoo%2BbuzK36UuOgolhbUqLfUUpYSU3W3yEy1U5nTJX0z5LANQYeLE5bru5IqNiv09cG9osn7cpMu&X-Amz-Signature=a0dfee647a4674d3e88d499dcbb316949bddc695c50a449e9c6a74552c43517b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

