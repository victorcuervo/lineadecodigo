---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYM7M7WB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21NOWykzbmbhEvPVgc5cEOzUR%2ByKuYfdr7RnrBjOPKwIgcoyr25TqGha%2FFtVcEkv3iaAEhYV1NKtJtVIomnttookq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNPFUVzWfHgJxzTs7SrcA2mh%2BTWmMqgc4xgNkZmpk%2B7gLAZChgd47bIybLFGEem7NnP65Y0%2BB%2BKqGbap48dIEmhMc9FJGp419XgeIIh2Qqjd%2BUqpDC%2B6%2B427wkwoZC0WlcrC4VOrUXv%2BjRCP9HD41MlvajO7ZDRyCBDqB8L2cd%2F5KfTZ027NaTubP6dm0SB5l0%2FW4kzBTawK%2BSLwZyEZKCQuIznQoxiIcctNFdP4%2FsDdCsU9jIj0OSaJcvxA%2BnrSvqcP3JVKngo1C%2F9Oi0YNUdxUi0jl83KFDHpDDU23GtSbC7O%2FzI7lQi%2FrzgQ3AXxb%2FF%2FoYssbk%2BGhUKSZdEXyXCClr1uinaqJSveA3kw%2Bwo7yDJJEPVNVLewoHT06FBFG9KewivHZ4cJ6bR334bY9ALR%2FVc0uEd1CbFGoDUJ5%2B38Z%2FeY04AX3tzHIsc8CkPyAn0F9EWUdQOqRfUAN7l1j6qgPWX0wks1%2BTh9U0c0KxCr1NGk48kvqxrcwFdcE46ddOHnxAz%2F3av1h03ZWCQWu83MwEPtjf%2Fl134Il3MDkWTM%2BlgDq8HfoJUl5Yi3R6IQVYEsCvJzNJ4f33gXwazezsqb1JozRQ3ok1hDTrGwphvRGFylh7NBIwN1QEmzPvzVDREFZzgCwfwt%2F5amVMIjQyskGOqUB6%2Bxv9MxakjblzBpgSvwIBwRhMT65EQgUk5e2DNSUtpwHGgb52XvTXdCUr8yAboKsZ6Ai4qXIyWKUVnfoEUbuhr9JQXNAz17C4ZGZq%2FGKPQWvu8ocupXVa8o8rHawn3g9yGMGyu64USFMSqfQt6yxRXMzmVeVuHOIoOOQrDOhM879QPFs0esVG9yidaJC8PqnMGtSGYjMM3tn90pT7%2Ba6zK8EsGH3&X-Amz-Signature=51735dd23795e0431b6065b9c5b3fbd7af6d4ff7dd00d78468e8776a136acc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYM7M7WB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21NOWykzbmbhEvPVgc5cEOzUR%2ByKuYfdr7RnrBjOPKwIgcoyr25TqGha%2FFtVcEkv3iaAEhYV1NKtJtVIomnttookq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNPFUVzWfHgJxzTs7SrcA2mh%2BTWmMqgc4xgNkZmpk%2B7gLAZChgd47bIybLFGEem7NnP65Y0%2BB%2BKqGbap48dIEmhMc9FJGp419XgeIIh2Qqjd%2BUqpDC%2B6%2B427wkwoZC0WlcrC4VOrUXv%2BjRCP9HD41MlvajO7ZDRyCBDqB8L2cd%2F5KfTZ027NaTubP6dm0SB5l0%2FW4kzBTawK%2BSLwZyEZKCQuIznQoxiIcctNFdP4%2FsDdCsU9jIj0OSaJcvxA%2BnrSvqcP3JVKngo1C%2F9Oi0YNUdxUi0jl83KFDHpDDU23GtSbC7O%2FzI7lQi%2FrzgQ3AXxb%2FF%2FoYssbk%2BGhUKSZdEXyXCClr1uinaqJSveA3kw%2Bwo7yDJJEPVNVLewoHT06FBFG9KewivHZ4cJ6bR334bY9ALR%2FVc0uEd1CbFGoDUJ5%2B38Z%2FeY04AX3tzHIsc8CkPyAn0F9EWUdQOqRfUAN7l1j6qgPWX0wks1%2BTh9U0c0KxCr1NGk48kvqxrcwFdcE46ddOHnxAz%2F3av1h03ZWCQWu83MwEPtjf%2Fl134Il3MDkWTM%2BlgDq8HfoJUl5Yi3R6IQVYEsCvJzNJ4f33gXwazezsqb1JozRQ3ok1hDTrGwphvRGFylh7NBIwN1QEmzPvzVDREFZzgCwfwt%2F5amVMIjQyskGOqUB6%2Bxv9MxakjblzBpgSvwIBwRhMT65EQgUk5e2DNSUtpwHGgb52XvTXdCUr8yAboKsZ6Ai4qXIyWKUVnfoEUbuhr9JQXNAz17C4ZGZq%2FGKPQWvu8ocupXVa8o8rHawn3g9yGMGyu64USFMSqfQt6yxRXMzmVeVuHOIoOOQrDOhM879QPFs0esVG9yidaJC8PqnMGtSGYjMM3tn90pT7%2Ba6zK8EsGH3&X-Amz-Signature=25b3d7dda859fb0c97485e27ab92d0333a4d840584f662d8bc5a656ab13d1b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

