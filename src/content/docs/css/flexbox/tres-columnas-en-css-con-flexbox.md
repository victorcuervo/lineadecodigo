---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WN2FIC7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC79rEJMt4MBNtZ%2FBTw5I9x61Q7JE143oHhTNRNfBbWHwIgNwyy05hQnzBQlJbdAdP20A%2FnMp661WyxJi4c2UzEzF8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbZYmcgoiKztQzNzircA%2FxDXzYGxOD23keS%2FjaAN9aY%2FeZPYHLuQRknWb32vGn%2BvoCEKEiRWHXuqhZnKH3ErY2msqfE9p28S6P2OaZnwZe4Gl8AyfWwmcK%2BhQpYT0EN78%2FAGdT2m66Q7ImgwE4UF4NbQ3smHt3Wj4ZlZZUihi%2BBCUeiqdQuPjSLTA7CzJKkDmxmAK8fHkxP0EsIgyNj0SeJWj%2BEl0uaJJXKE6OjpdHoZPDHvG%2Fsfj3c5LbfjecHfgx%2F2hCXHZ914CsfTxoxjog76p%2FpL6oTHxLKq5f9%2FWgc0lbnnwPXLCEy2jOz8TCAgwM44i%2B%2FTeT4TuHnFM6CBsWJddpIgFI%2BKJ6ylu3G6NXa214qAfC3oiKXzwc1FirkF8Tj98Bsg3Fy71RZr%2FhwAXK7S0aGO36oBa7bO9UCgfTLdlxD8pRdFMvT0lJM35Ju%2FQ6R2PmWDbWndr6eGpRALBZZNOD%2FmeUnVvlSKraIxS3U1OY2c4W6%2B1Wk%2FClSqSzxnkkhaq1PtqHdkDeJUMG%2FQwfxJhfzMquWadb9IgdgSy0vKfpDMAPy9vvjNJ9XkR%2FPS4rWiy20Rw3B0dSw1wVdqLtG%2FcBrgnVW9%2BYGLf%2BNMj3AjrAEC4CI1TNo67qxEApk5s79wCwqH7gb1vNeMLTu2ckGOqUB4Bm4S4uhmJWRkt5heAVrVMWi%2FONY6ElrlQmWOUKb1PM6SnjVp974hxWjO9V3XBqCfNx7Sm8QUKZ0qoH2RL2bRaDfESkKbmcvv9%2FuScmvion3lb6FyCOiewYrtYvMQxWvEstjT8ZEcWiHXmfhHWwKOaYU1FLZdPuZ%2BW8shdryQSZzVWlyOeMTKSVvkGRCedZWCL5w8%2BbHJAAiq130ElxUpwTgUNZZ&X-Amz-Signature=acaa90238e494dcd85878a1df2cba85e159d18a6d9eead9156ebb49823597d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WN2FIC7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC79rEJMt4MBNtZ%2FBTw5I9x61Q7JE143oHhTNRNfBbWHwIgNwyy05hQnzBQlJbdAdP20A%2FnMp661WyxJi4c2UzEzF8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbZYmcgoiKztQzNzircA%2FxDXzYGxOD23keS%2FjaAN9aY%2FeZPYHLuQRknWb32vGn%2BvoCEKEiRWHXuqhZnKH3ErY2msqfE9p28S6P2OaZnwZe4Gl8AyfWwmcK%2BhQpYT0EN78%2FAGdT2m66Q7ImgwE4UF4NbQ3smHt3Wj4ZlZZUihi%2BBCUeiqdQuPjSLTA7CzJKkDmxmAK8fHkxP0EsIgyNj0SeJWj%2BEl0uaJJXKE6OjpdHoZPDHvG%2Fsfj3c5LbfjecHfgx%2F2hCXHZ914CsfTxoxjog76p%2FpL6oTHxLKq5f9%2FWgc0lbnnwPXLCEy2jOz8TCAgwM44i%2B%2FTeT4TuHnFM6CBsWJddpIgFI%2BKJ6ylu3G6NXa214qAfC3oiKXzwc1FirkF8Tj98Bsg3Fy71RZr%2FhwAXK7S0aGO36oBa7bO9UCgfTLdlxD8pRdFMvT0lJM35Ju%2FQ6R2PmWDbWndr6eGpRALBZZNOD%2FmeUnVvlSKraIxS3U1OY2c4W6%2B1Wk%2FClSqSzxnkkhaq1PtqHdkDeJUMG%2FQwfxJhfzMquWadb9IgdgSy0vKfpDMAPy9vvjNJ9XkR%2FPS4rWiy20Rw3B0dSw1wVdqLtG%2FcBrgnVW9%2BYGLf%2BNMj3AjrAEC4CI1TNo67qxEApk5s79wCwqH7gb1vNeMLTu2ckGOqUB4Bm4S4uhmJWRkt5heAVrVMWi%2FONY6ElrlQmWOUKb1PM6SnjVp974hxWjO9V3XBqCfNx7Sm8QUKZ0qoH2RL2bRaDfESkKbmcvv9%2FuScmvion3lb6FyCOiewYrtYvMQxWvEstjT8ZEcWiHXmfhHWwKOaYU1FLZdPuZ%2BW8shdryQSZzVWlyOeMTKSVvkGRCedZWCL5w8%2BbHJAAiq130ElxUpwTgUNZZ&X-Amz-Signature=4f1a7514b4d443e062f468c5b3a3028bbe34d67f0b472b10448a0211529396fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

