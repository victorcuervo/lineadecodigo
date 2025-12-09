---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHISTOAL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb1V33CDgq63Uq4%2Ft3KLiA20iT7VkXMBe6BtkQA4brOAiEAo0QHMvS4wM2OSOc9m%2FcnCAV5csth5T2TeZ2VNF6955UqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB721ObBxPtProR6iyrcA9FBye0yEvPsvQVqwqpN34vKVqVi5NcFLO%2FbGM6Rxw9nihGtDJv%2BN7Ke9PiEr4uM0rASuE44m%2B0LgvljM%2B72x5OWEe8PxtGMqAHoJRgMjLTT7KUq9f7KGmJUM9LCPdgfPlFB7ghTiZhr4CuEIPxVxIePdzOr7RVTvyqDQbRvx3E7%2BJU8brcaDwIWAT2LnpOsLM2V9K0PxMPdrWzXvsTNfW5lvvISNJoc8bDtzQcGJ0GV8z5CUhkJk0fBx4u5Vo44eaWHGoQJvJRfE%2FqmJSORHUmHb9LEqpYsmImYhRtUwZ1KV13bT7KKuF8POi3xYTBKooQvZLzLcQuYDB%2BbhxRoqPmtTtLvrLihBxNWIWa7gAAOYVQa77TlAfTgGPTTMWJAWrRvTNEHu3gBZU%2BOmByaNlDd6XTckmowpxitQgrTk1L0pBbossBzywRkPgbepW6BVqPoboWGFpcsj1ngJU2bGVjUdexnuKA%2Fco0dzBUlDRz91DoulXGlpnY9hSpEQWApBhIjknbjMt5oNAadWQ1pJgp2vTGRd7bk5KQYQvDudGE2hyXESIBL80AeuS9n5GjFnP0wHKX64T%2BLEAV0L3GV0FMwk%2B95EgwtFgLzpPn875haVEopJVnJDsJ4VwqgMLiN3skGOqUBMaCuYDXtQxK%2BnTLdqDhNdQG4hnpRzkDDpR9PK9jvjRbsdcQ7YlVN3lUYRtGO2tM2qW2V8xyLzmoi3%2B98ZErGSUufk2ia2lOXXIhuDsTXWW8ukA1hTnMxYnfW6pRdflSSGNTVJafSUokRiqTtxEgRf%2FrzscKBCeksfO06U%2BToko4ugoEU2I4CkX00i3o5ivXV2taAerf5POF6V3sVlmY%2BgDC%2Bp5K8&X-Amz-Signature=075e4d6bdbbefac5ec82635f281df0d456a4f5b099155ff4355e76cb63b1b79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHISTOAL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb1V33CDgq63Uq4%2Ft3KLiA20iT7VkXMBe6BtkQA4brOAiEAo0QHMvS4wM2OSOc9m%2FcnCAV5csth5T2TeZ2VNF6955UqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB721ObBxPtProR6iyrcA9FBye0yEvPsvQVqwqpN34vKVqVi5NcFLO%2FbGM6Rxw9nihGtDJv%2BN7Ke9PiEr4uM0rASuE44m%2B0LgvljM%2B72x5OWEe8PxtGMqAHoJRgMjLTT7KUq9f7KGmJUM9LCPdgfPlFB7ghTiZhr4CuEIPxVxIePdzOr7RVTvyqDQbRvx3E7%2BJU8brcaDwIWAT2LnpOsLM2V9K0PxMPdrWzXvsTNfW5lvvISNJoc8bDtzQcGJ0GV8z5CUhkJk0fBx4u5Vo44eaWHGoQJvJRfE%2FqmJSORHUmHb9LEqpYsmImYhRtUwZ1KV13bT7KKuF8POi3xYTBKooQvZLzLcQuYDB%2BbhxRoqPmtTtLvrLihBxNWIWa7gAAOYVQa77TlAfTgGPTTMWJAWrRvTNEHu3gBZU%2BOmByaNlDd6XTckmowpxitQgrTk1L0pBbossBzywRkPgbepW6BVqPoboWGFpcsj1ngJU2bGVjUdexnuKA%2Fco0dzBUlDRz91DoulXGlpnY9hSpEQWApBhIjknbjMt5oNAadWQ1pJgp2vTGRd7bk5KQYQvDudGE2hyXESIBL80AeuS9n5GjFnP0wHKX64T%2BLEAV0L3GV0FMwk%2B95EgwtFgLzpPn875haVEopJVnJDsJ4VwqgMLiN3skGOqUBMaCuYDXtQxK%2BnTLdqDhNdQG4hnpRzkDDpR9PK9jvjRbsdcQ7YlVN3lUYRtGO2tM2qW2V8xyLzmoi3%2B98ZErGSUufk2ia2lOXXIhuDsTXWW8ukA1hTnMxYnfW6pRdflSSGNTVJafSUokRiqTtxEgRf%2FrzscKBCeksfO06U%2BToko4ugoEU2I4CkX00i3o5ivXV2taAerf5POF6V3sVlmY%2BgDC%2Bp5K8&X-Amz-Signature=2d454ba8ee7b1613f5c8873d5394b973468d4892d7ddab4671b5fc6c76405f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

