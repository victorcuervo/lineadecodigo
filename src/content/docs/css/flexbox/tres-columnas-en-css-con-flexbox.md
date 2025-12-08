---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWRX4XK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8iUYjEF1nMCXLyT0sX6cEog%2Fuv4a9JzF6SVV146%2FrKAIhAL5dbdtspAitJ9Ebi4NDGLxbRbeMYYPTc6l8BdyeolgCKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoX9zLphUGZm%2BQhFYq3AO1FpDZtK8Mcj3Fa38YXm1qR8Sf5256uSmfwK2SDHuwyjedB9Zkme2SOkQpjk2teceUhd17Qwh%2F7EDGT09cmtqZFoIUSdt2vT0DXgnJorIPi%2Fi%2Bm4McihgKPyS5xViFFvv0G0%2FSwQkI6%2BbFgdYAxg2EvdxFW2JogbcqnzuiDFs2TgqKxxeguIxZJMHBfuyn3TTjwUk0%2FbWdovcirXgm0XPKRxRszw4rXPx7ZWGcw6i%2FcZYr5Ws58Pot46iMlzJffaYwRI7jK%2Fa6P3oS8oNuu8roKmTRbqEoyWb9fkDdOSVjsCaccmCqY7tQiF3S8Ek1tWE95XMbsLORG6NL2IfM4c9asi6BW9myfMJ3Laf3QIsXkCYv0RdVZ%2BZb%2BG2dYov%2BY6YPK3WgU83zOIm16ANvqSm8flS0SHoZ6WOutHtOWIZfIx6Zx6sGR%2F1rn%2B%2FdTRHuucoIOEXE3TzRIibZcQAYMDGrjfs%2BY0H7YeZ7YhlqpXSkleWOa3B0R8utnGyokzMTfvwBUkY55xHnxuudB8lgaR0qNA%2BO7UhTdVTagVSttTNww3QXk7qVLwlGj5s5rl%2Ff72wbl0WDlpv7LmceCTvnvMJucba2ASIPNFwq0CIeUi%2Bfy1xGTqsctzwO8kzPLDDhh9zJBjqkAZyxB%2Bk02lafsBkgc2is3yUGbdz7Ol0Ffpy7x8lO%2BJNs9WjAt%2F8xq37bR7HYdmcbUrk0eF6jbS4hQDTJpCt0UjQKdlK6TtxpYTlpiE84xT7yuUWoOrrw3uFaZpvqNBEnRop4PIMMstLNlgY0gni3TDefF8mDzjVo1PhVviTBI7hLSz5K8ZBTAeGo3va9SawZKwr6%2F50jkwSVpMqfDlwtdRbzfbbe&X-Amz-Signature=b2548977e2467ccbbb5972c7041bf52978229c4a8748b9b2b3137e13a3aedcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWRX4XK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8iUYjEF1nMCXLyT0sX6cEog%2Fuv4a9JzF6SVV146%2FrKAIhAL5dbdtspAitJ9Ebi4NDGLxbRbeMYYPTc6l8BdyeolgCKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoX9zLphUGZm%2BQhFYq3AO1FpDZtK8Mcj3Fa38YXm1qR8Sf5256uSmfwK2SDHuwyjedB9Zkme2SOkQpjk2teceUhd17Qwh%2F7EDGT09cmtqZFoIUSdt2vT0DXgnJorIPi%2Fi%2Bm4McihgKPyS5xViFFvv0G0%2FSwQkI6%2BbFgdYAxg2EvdxFW2JogbcqnzuiDFs2TgqKxxeguIxZJMHBfuyn3TTjwUk0%2FbWdovcirXgm0XPKRxRszw4rXPx7ZWGcw6i%2FcZYr5Ws58Pot46iMlzJffaYwRI7jK%2Fa6P3oS8oNuu8roKmTRbqEoyWb9fkDdOSVjsCaccmCqY7tQiF3S8Ek1tWE95XMbsLORG6NL2IfM4c9asi6BW9myfMJ3Laf3QIsXkCYv0RdVZ%2BZb%2BG2dYov%2BY6YPK3WgU83zOIm16ANvqSm8flS0SHoZ6WOutHtOWIZfIx6Zx6sGR%2F1rn%2B%2FdTRHuucoIOEXE3TzRIibZcQAYMDGrjfs%2BY0H7YeZ7YhlqpXSkleWOa3B0R8utnGyokzMTfvwBUkY55xHnxuudB8lgaR0qNA%2BO7UhTdVTagVSttTNww3QXk7qVLwlGj5s5rl%2Ff72wbl0WDlpv7LmceCTvnvMJucba2ASIPNFwq0CIeUi%2Bfy1xGTqsctzwO8kzPLDDhh9zJBjqkAZyxB%2Bk02lafsBkgc2is3yUGbdz7Ol0Ffpy7x8lO%2BJNs9WjAt%2F8xq37bR7HYdmcbUrk0eF6jbS4hQDTJpCt0UjQKdlK6TtxpYTlpiE84xT7yuUWoOrrw3uFaZpvqNBEnRop4PIMMstLNlgY0gni3TDefF8mDzjVo1PhVviTBI7hLSz5K8ZBTAeGo3va9SawZKwr6%2F50jkwSVpMqfDlwtdRbzfbbe&X-Amz-Signature=347cc3fbdded25706fc3a55bbde7af3291f24b716c8adb3965e0001fde1887e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

