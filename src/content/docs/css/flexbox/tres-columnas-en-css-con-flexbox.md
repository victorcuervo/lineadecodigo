---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEWQN77%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY8Q83zQk4iuZXE27fNl0NXyQdgXUQ5aj8QyLsO49vgAiAJKrKT4L7I3VHqOKUbb6wsIEXRTh6%2FkfX4PLGcVEyp5Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMU7k%2Fhn7M09R8ztwJKtwDPxt8GYbCP8VmmU9FfON8ZN0CaWj68ycXPkJgoABeSdOCzspbxbwGyVz154rtLCpyZCOlG3W3EONvxF2EdlxEosf7O2BhigY%2BK44VRI2mQDvoTJ2EP6FiRRQjkhuoP3TUzrX9FoIyf0bufWfOcjFhqBPs86EtnJZu5kVjWlktlpeasdteNqmArJuzH3SEOFjvKe%2F02ppeC9o8G%2FchK37x05lfGT%2FA1cFJD7Wma0NxJb9RHDSYVrHcorTA5h2OvWYSdPbUVdraFCxgGYORxBYbAAg7d6SVQu9YfI1Fh7FF%2Fh75e416VQg2xvMPuDi6S%2BSM9bu8acFGbVEB8mdAipt0CmCpBsPY47cGYJXzX8nmeS%2F6tIiGrZn3vyhJuX%2ByFIquFVfXLiNVAq41PXmM9xYrqZrriBWzBOq1D0hhcH89rgTK6XuBN%2BQ1XQRmCosPCBmbmaQYzeIc1qF5WvqHcONqSy9pbGThD8PL3aPlDHUxTikg8ntKgvBJYbgCWULg65zjkrdzGX10A1fJDCt4fbls4J1PIKlOJcsDneI%2FuupwoqKZFsSRC41x8HSXSf9waJlje%2F6ZZXgpHbq2m88EwjkSN81ddY22C%2F55tBOJ2QLYR%2FfcRHWaqRR%2BhEu%2Fk0AwnsPOyQY6pgH3VGWdJR8wWx0z2xHyNctTJwN6WFZa%2BdLnN7U%2Fv0H%2FZUgn6yWmIJ5IVCqDrC4JYRJc7dkWqWrSzki%2FkJzOpt8HG7PKF5QnCCGPFZZFy9437zlmH2EHQO%2FCDynp8SBNIMJse0nJlxHaAQoH7C%2FLzJ6s34eToVkXZGw9IwirqPfJiOdnVJKAMEo6oalnQQg5MOgHyq71SqIK0eRY86lA6ftf%2BKRTE9A9&X-Amz-Signature=bb7cd505fcdea1e6892c35f78a3d5395c696e71c525bb73f73872e3fc09c9dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEWQN77%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY8Q83zQk4iuZXE27fNl0NXyQdgXUQ5aj8QyLsO49vgAiAJKrKT4L7I3VHqOKUbb6wsIEXRTh6%2FkfX4PLGcVEyp5Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMU7k%2Fhn7M09R8ztwJKtwDPxt8GYbCP8VmmU9FfON8ZN0CaWj68ycXPkJgoABeSdOCzspbxbwGyVz154rtLCpyZCOlG3W3EONvxF2EdlxEosf7O2BhigY%2BK44VRI2mQDvoTJ2EP6FiRRQjkhuoP3TUzrX9FoIyf0bufWfOcjFhqBPs86EtnJZu5kVjWlktlpeasdteNqmArJuzH3SEOFjvKe%2F02ppeC9o8G%2FchK37x05lfGT%2FA1cFJD7Wma0NxJb9RHDSYVrHcorTA5h2OvWYSdPbUVdraFCxgGYORxBYbAAg7d6SVQu9YfI1Fh7FF%2Fh75e416VQg2xvMPuDi6S%2BSM9bu8acFGbVEB8mdAipt0CmCpBsPY47cGYJXzX8nmeS%2F6tIiGrZn3vyhJuX%2ByFIquFVfXLiNVAq41PXmM9xYrqZrriBWzBOq1D0hhcH89rgTK6XuBN%2BQ1XQRmCosPCBmbmaQYzeIc1qF5WvqHcONqSy9pbGThD8PL3aPlDHUxTikg8ntKgvBJYbgCWULg65zjkrdzGX10A1fJDCt4fbls4J1PIKlOJcsDneI%2FuupwoqKZFsSRC41x8HSXSf9waJlje%2F6ZZXgpHbq2m88EwjkSN81ddY22C%2F55tBOJ2QLYR%2FfcRHWaqRR%2BhEu%2Fk0AwnsPOyQY6pgH3VGWdJR8wWx0z2xHyNctTJwN6WFZa%2BdLnN7U%2Fv0H%2FZUgn6yWmIJ5IVCqDrC4JYRJc7dkWqWrSzki%2FkJzOpt8HG7PKF5QnCCGPFZZFy9437zlmH2EHQO%2FCDynp8SBNIMJse0nJlxHaAQoH7C%2FLzJ6s34eToVkXZGw9IwirqPfJiOdnVJKAMEo6oalnQQg5MOgHyq71SqIK0eRY86lA6ftf%2BKRTE9A9&X-Amz-Signature=6e2d2d9950dc54489429d6c711e15fe43720259c1cf34213e3fb9bd43572e539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

