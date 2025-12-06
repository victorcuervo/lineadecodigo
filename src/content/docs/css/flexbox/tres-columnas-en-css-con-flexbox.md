---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VVE5NG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6TWZzc0kt%2FmmAToHyVdeIVAYDUxkcwEM0TWexCPY2NAiEAkgeULCxs9m0ApTzW7rVjIJw8qttbr18MK4dH%2BBYv4yMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCs4Mywu7fgu8FwBtircAxoXiRnUvs3X8G15m9eKYTS%2Bs3XKisX1St5fxvtN0ipkZMtMXZjiASUKwL%2BAyjNixE4pUc7640Yvc7yQ2iQED1gQBsxpr8txSj85LtCNuEzvDXstup7XNgH3hIJLHCkk%2BKS8pMTa4Jd7XBRf%2FlNVEQfHz55N%2BhawbFKClr9gvj7damhYYKvoFaXw49lVjNIaQCnUnqgzaAf7uZfj%2BGRhDn6v9xDi%2F5jlbHKDadX94xh4oUcC4nWmteAy%2B6xN1TpAsw6h3dZGqZZmueWFsqvnlqAjTk0mGIzN0TLoPk4Ikb%2FJEfILSgn%2F%2F8k%2B1r1qVhxnkcc%2BXmcm3bBQ3KrJypBdjLYv8g%2FZgtzCeUAM0yrYfzHZWPpChWUfotIc32H%2Bw7rzjSAVqTLHjIARVSTOtzQvqtVhUgx2tN1s2W1Ivwp5ENCcFsDoZDRXRdmKj5ccGQ2LsPxJcNt8fHiQAkWCqqroKDu0fuUi3d2TTEaxka%2F%2BLXr1hafqFlvS8xhyqCBGhyBLHBlTDu7t4kpJ5U8cyl0sr65l7gK2Z%2Fcwg6BSe8vTl%2FeWne%2BWeiKiEM%2F%2FceQgfGboGKzr8PxEAN31SXG7S1voeA4PvQmktKamzu0D6xoM19LwoQmp5giyHgshLv9eMJTT0skGOqUBV1rwupBCgmEsQb4NPDXti3OEAkO%2FWF0Uh%2FpAh0Fj5l8lp0r7H0mGmAwxIfzq%2F1sQdfyyMlCYdpk6VHU9bKyCzci0702jmEyWZIIUsmNIHhR3%2BNApE%2BazTx7YqXvxuhL53UYKUjmS4m0e7p6SQnrDXcXTa4umsjVJuq5dMSurOmj8KvRJ6yjrQL5ZCh7GnogNsPil74lny%2FatiTnwEHhz%2F%2B39dhm%2F&X-Amz-Signature=287cd04f854da5cfc1779c4673dbd291458e8c6988e5315a5bd8b0fe0dd3e2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VVE5NG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6TWZzc0kt%2FmmAToHyVdeIVAYDUxkcwEM0TWexCPY2NAiEAkgeULCxs9m0ApTzW7rVjIJw8qttbr18MK4dH%2BBYv4yMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCs4Mywu7fgu8FwBtircAxoXiRnUvs3X8G15m9eKYTS%2Bs3XKisX1St5fxvtN0ipkZMtMXZjiASUKwL%2BAyjNixE4pUc7640Yvc7yQ2iQED1gQBsxpr8txSj85LtCNuEzvDXstup7XNgH3hIJLHCkk%2BKS8pMTa4Jd7XBRf%2FlNVEQfHz55N%2BhawbFKClr9gvj7damhYYKvoFaXw49lVjNIaQCnUnqgzaAf7uZfj%2BGRhDn6v9xDi%2F5jlbHKDadX94xh4oUcC4nWmteAy%2B6xN1TpAsw6h3dZGqZZmueWFsqvnlqAjTk0mGIzN0TLoPk4Ikb%2FJEfILSgn%2F%2F8k%2B1r1qVhxnkcc%2BXmcm3bBQ3KrJypBdjLYv8g%2FZgtzCeUAM0yrYfzHZWPpChWUfotIc32H%2Bw7rzjSAVqTLHjIARVSTOtzQvqtVhUgx2tN1s2W1Ivwp5ENCcFsDoZDRXRdmKj5ccGQ2LsPxJcNt8fHiQAkWCqqroKDu0fuUi3d2TTEaxka%2F%2BLXr1hafqFlvS8xhyqCBGhyBLHBlTDu7t4kpJ5U8cyl0sr65l7gK2Z%2Fcwg6BSe8vTl%2FeWne%2BWeiKiEM%2F%2FceQgfGboGKzr8PxEAN31SXG7S1voeA4PvQmktKamzu0D6xoM19LwoQmp5giyHgshLv9eMJTT0skGOqUBV1rwupBCgmEsQb4NPDXti3OEAkO%2FWF0Uh%2FpAh0Fj5l8lp0r7H0mGmAwxIfzq%2F1sQdfyyMlCYdpk6VHU9bKyCzci0702jmEyWZIIUsmNIHhR3%2BNApE%2BazTx7YqXvxuhL53UYKUjmS4m0e7p6SQnrDXcXTa4umsjVJuq5dMSurOmj8KvRJ6yjrQL5ZCh7GnogNsPil74lny%2FatiTnwEHhz%2F%2B39dhm%2F&X-Amz-Signature=3d3e3b8248eed656862f768441a6dff16df5cb1a20753e2b22719bbe28e1870a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

