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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQDAKB7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCE3uRnp4gswCLitF0FEb2Dqh2PKQCZoGF0YSuYIEFFxgIgLibSq3HgNXXGjbpDP%2F%2FMwQ5R0MJ0viX06vraVGX9AsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBtfayZ7HGzAQXlMyircAx50N9NOvB15s0LeenT80Mpk3pxn2aYFoKE9r408n%2BAYhcjCpRMwjhw4ZA2OpJ15XN8IOJwlj%2FvZOmVfyejEqv7f%2BjgBk5Q0MxHYyqwVsLejnPLtkxpwRcUJGQ2Sr7SaS%2Fawgd9TV1sL33K3K2YHyicEi8tqSvIMWdiKSFHPR5Qy45zyewQadujgVAbnZFwUd4t6%2BIeB7VmGk2390Tv%2FNOkK%2Beh7IC2wBnTYpEj7qslPrSnUrgSC1mdSCBqqhV%2FgKUzHZgrhlbAHWtbouYTv0FJmHL97LCcvQHh55a7YbDEaD9xrP8H3PnTCxo%2F2L8IIrPc4%2B7A%2Bkiv3qV0s5kEPwNOlQTW4%2BAGf0m1QWJ5kNZGxXNcRZYeCX4dAruG2I3SDc3ZPHvK5NjOdvoe9%2BhKFyeqDnDLfbKUAIqktrZ3JwAmdJqP0JFPUAskk%2B9x7IJ%2BPPQnsJRFZ%2Bs1YpkLWe%2Fx%2F9YPzBWNCSqFr9yFv0E6LxNib3vnTzfWbJxGJuWpg430rZLVw1A1rDmQc5VAHYgTVt%2Bsq81hxUx93mYATDTr%2B%2FZb%2BbWGYiDYk37Ul7JiatjTup5DhugPoCW7CoR3rtLut5WNgBaYNd863ZRwdtRUdFKTdg4Z0lF9FpD%2Fk7eqgMMqUvskGOqUBwaoqmChkQDQ4O5rW3yJJCNEec5VPXmpGnz0yol6HklKZwzeeZjSvgFr4KlEPvecrrlFWKmpUzzNDF6Ut3NQWcv%2FUYlYyXxswpCIb3nZsaDpIwTNRaqdRzFaB%2BZLMl6%2FkTI3xlLRJ9zrUDv2Mj8h1FEyistmmu7X%2BsnzB48S5Idv8H%2F5DSEjY066q3V3f5zwVm%2F%2Bsa3snN2pM8Qga%2F%2BcG3ZxOD9Hh&X-Amz-Signature=653fb316f8f080ec3150889ec4a4fa0157171af58d42f746c87b44eef1dd3dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQDAKB7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCE3uRnp4gswCLitF0FEb2Dqh2PKQCZoGF0YSuYIEFFxgIgLibSq3HgNXXGjbpDP%2F%2FMwQ5R0MJ0viX06vraVGX9AsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBtfayZ7HGzAQXlMyircAx50N9NOvB15s0LeenT80Mpk3pxn2aYFoKE9r408n%2BAYhcjCpRMwjhw4ZA2OpJ15XN8IOJwlj%2FvZOmVfyejEqv7f%2BjgBk5Q0MxHYyqwVsLejnPLtkxpwRcUJGQ2Sr7SaS%2Fawgd9TV1sL33K3K2YHyicEi8tqSvIMWdiKSFHPR5Qy45zyewQadujgVAbnZFwUd4t6%2BIeB7VmGk2390Tv%2FNOkK%2Beh7IC2wBnTYpEj7qslPrSnUrgSC1mdSCBqqhV%2FgKUzHZgrhlbAHWtbouYTv0FJmHL97LCcvQHh55a7YbDEaD9xrP8H3PnTCxo%2F2L8IIrPc4%2B7A%2Bkiv3qV0s5kEPwNOlQTW4%2BAGf0m1QWJ5kNZGxXNcRZYeCX4dAruG2I3SDc3ZPHvK5NjOdvoe9%2BhKFyeqDnDLfbKUAIqktrZ3JwAmdJqP0JFPUAskk%2B9x7IJ%2BPPQnsJRFZ%2Bs1YpkLWe%2Fx%2F9YPzBWNCSqFr9yFv0E6LxNib3vnTzfWbJxGJuWpg430rZLVw1A1rDmQc5VAHYgTVt%2Bsq81hxUx93mYATDTr%2B%2FZb%2BbWGYiDYk37Ul7JiatjTup5DhugPoCW7CoR3rtLut5WNgBaYNd863ZRwdtRUdFKTdg4Z0lF9FpD%2Fk7eqgMMqUvskGOqUBwaoqmChkQDQ4O5rW3yJJCNEec5VPXmpGnz0yol6HklKZwzeeZjSvgFr4KlEPvecrrlFWKmpUzzNDF6Ut3NQWcv%2FUYlYyXxswpCIb3nZsaDpIwTNRaqdRzFaB%2BZLMl6%2FkTI3xlLRJ9zrUDv2Mj8h1FEyistmmu7X%2BsnzB48S5Idv8H%2F5DSEjY066q3V3f5zwVm%2F%2Bsa3snN2pM8Qga%2F%2BcG3ZxOD9Hh&X-Amz-Signature=b0a373e0d91f9e9da0d5dbcc84fe444e53c742962762286e760ca0677d9730f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

