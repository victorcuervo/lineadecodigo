---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQH54XR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFxpic8Hb3IkIhypbM6U16MhrdrW09Hq24Uj2x7NxGAIgXQxq0Kk5oU331ia8LZFjpNksMc3PwZsqio0ceTHvE84q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ37V09oNvYRSCpAJircA9Pglza25Yag5k0yNMO0KS5w9Wv%2BV4pD9KRIxW2i4vwG%2BqC1Kqb2Mr7NfpsjT69OXUw%2FQXKATNaecBK4rC46bdirKULrGKdzSpCdHtEgz86IS9UZRzFaGu14NBavA2dj0DqKWbQsN7PglMMyu41VuTvzb4nRMjzCXgyavVDPAQ7p%2BFSGQavVEUGjCQXLB16VY4QjOxxxkI8kIvyV9%2FyiIeI%2FN%2BWCzLzMVYD3YCG%2B5UL4Pn%2F%2FZa7dkChln73xglZxzPbUK4Fo1P%2B6dhYs%2BMkAxTaSWsKHer%2Bw815ZU9ejDtdUhud6P%2FGNjlq%2F5xgzNRmlOAQYm5ciP719wUFyzL%2B79ZB%2Ftx5FBeX%2F3Ma1oTxW4rha60GjJ2aYKuV7997Mh4HH2joFmjMYL35eHRDyGpfUXFc44WkutIeQpryScz46%2F%2FiIwETuz9pnD7QJ0Z1je%2F4kI5ctFi9mlhnmYUnxibxJKUXTrO9nvYOWE9LtZvzJa%2FV%2FDZhpDgt3NvTFvuf4ZwXV6kja1aelGiGzltgdqijfjQyY3gmSr9MgRsi3JQVQtv%2FIKGXi39Uuddy8TWWmfXzdQIg7%2BfJrwP8rMCTeu1d6gtV1bLhKapDJE7alRGYmJL1CTm2h3i4RozLnZSmzMMWJ0MkGOqUBzte6Z67teiJ8CCnw%2Ff0dwPD5eWQYUEGKAQPxYUr5%2Fuc1M%2F4zzard0XjU1aObxOaTN7KyVFGe2R5u2UZl2mIS1kioj4P21kigUcrzBQ%2B8oFlyJuV3y%2BM11b64EPH%2FWiTyScG%2BIMoWUUHsZVoHsKl4Yql2sq2%2B7x%2BJs1V9cpyckG2QJm2CoQJ%2F312aGJCe28z%2FPozm3%2BIngVXKpOQr%2Fq4zhCGicMU%2B&X-Amz-Signature=b3d8791278e297107b3278c9d71b6eb12d917c6d8b74c48bbc83fbe0c38b7059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQH54XR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFxpic8Hb3IkIhypbM6U16MhrdrW09Hq24Uj2x7NxGAIgXQxq0Kk5oU331ia8LZFjpNksMc3PwZsqio0ceTHvE84q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ37V09oNvYRSCpAJircA9Pglza25Yag5k0yNMO0KS5w9Wv%2BV4pD9KRIxW2i4vwG%2BqC1Kqb2Mr7NfpsjT69OXUw%2FQXKATNaecBK4rC46bdirKULrGKdzSpCdHtEgz86IS9UZRzFaGu14NBavA2dj0DqKWbQsN7PglMMyu41VuTvzb4nRMjzCXgyavVDPAQ7p%2BFSGQavVEUGjCQXLB16VY4QjOxxxkI8kIvyV9%2FyiIeI%2FN%2BWCzLzMVYD3YCG%2B5UL4Pn%2F%2FZa7dkChln73xglZxzPbUK4Fo1P%2B6dhYs%2BMkAxTaSWsKHer%2Bw815ZU9ejDtdUhud6P%2FGNjlq%2F5xgzNRmlOAQYm5ciP719wUFyzL%2B79ZB%2Ftx5FBeX%2F3Ma1oTxW4rha60GjJ2aYKuV7997Mh4HH2joFmjMYL35eHRDyGpfUXFc44WkutIeQpryScz46%2F%2FiIwETuz9pnD7QJ0Z1je%2F4kI5ctFi9mlhnmYUnxibxJKUXTrO9nvYOWE9LtZvzJa%2FV%2FDZhpDgt3NvTFvuf4ZwXV6kja1aelGiGzltgdqijfjQyY3gmSr9MgRsi3JQVQtv%2FIKGXi39Uuddy8TWWmfXzdQIg7%2BfJrwP8rMCTeu1d6gtV1bLhKapDJE7alRGYmJL1CTm2h3i4RozLnZSmzMMWJ0MkGOqUBzte6Z67teiJ8CCnw%2Ff0dwPD5eWQYUEGKAQPxYUr5%2Fuc1M%2F4zzard0XjU1aObxOaTN7KyVFGe2R5u2UZl2mIS1kioj4P21kigUcrzBQ%2B8oFlyJuV3y%2BM11b64EPH%2FWiTyScG%2BIMoWUUHsZVoHsKl4Yql2sq2%2B7x%2BJs1V9cpyckG2QJm2CoQJ%2F312aGJCe28z%2FPozm3%2BIngVXKpOQr%2Fq4zhCGicMU%2B&X-Amz-Signature=df477e3697419601c02403e27220d06cdf0f95dd1555e154ac16e1cbe34cc97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

