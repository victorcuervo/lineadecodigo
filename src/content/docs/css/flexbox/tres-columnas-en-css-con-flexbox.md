---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P6A7C2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIX6kVFqkEvjz%2Fse%2FPjHoLVDBvMVSKJYBfz1myBlS5lAiA85k775EBYj6Brm98UIDk7OvqVb1i1xdQ8AHkh1uw2RiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3W8yvrvSYYLTJwpKtwDbmorNH%2BA%2Bugy1%2B%2FDh0ujT75hl1kqObfvSObjOlnbIk4hWwSGG1pFutwMPDixujqWco7L0w2nm1%2Fk176XTyjzAxt1l3okRc%2BuTAHJ5mhAX6CP0lFU9s7vPO13FTNYN%2B3xyAbONwO57RMM0jssaYatMf5dVZyX7Zm7c6Ig7BPTrT6T5S7jTNdJoRD2HiszmK3wGwLYcxA38lM5FwMfcNpTeEUzQ3gMT28PqdYYk%2FLXhNh8O0lysL04LnXxzG90vkohH%2FjtS7VDr%2BFU9Pj9U2ZjZ0CEgsxRu65zv3JmmX9O6xt2HrsD1VVQvdcYOUIdLr0vlXj%2B7l5LZn1Y%2B3eCYVrT%2FteGj5BeAPHC1cFsuhobhFRzNq1ATxuiPa1sgKkUYB1KxmMFTWxZCrbo8ObNpY9TJJISlyIjOPM15JMLA07m%2BpR%2FtZUXibkMl2Lv4J718uhzGoyvjqJ1gayKWnw7wXQ%2FcMgGAd3phs%2FvhDJxQSwZGJZYektauPBRCITA8SmQW4882XRHp67kE25My9f08S8GGnYha9ALLtolzlb9sGJmAfg5L1wW4040eOUPe4%2FybnjZ%2BEDSG9aUaD9wTrtbLcqjKhvh8jblEooYAmrgnyso2Lm24LDENxYTOFhEGYAw9P3SyQY6pgFgNrrPQHMZg9kKFM3Fj26oW4vqzcXXIO4MH8cGG0wwmsFACnxUcOUvREcgXjtuuODwmm3LloV3RyEdvo1T%2B8w9Sag0%2BCI1gBEpL95DaRoJ2CSXVcqJOaNN1mSwpJguTCS9Gc1hnE0Hp2yuoAF4OjGRllcSaSsTE4BMf6gRxzS1gsrNjmhxPt3Vgx7R29H8zSIDh52ncw4NqBrb9zHTmfoist00Jxvg&X-Amz-Signature=c3e8a00cab90842dc580fbcb04feb3350aba6320454ddb5db2fe8beffb89a7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P6A7C2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIX6kVFqkEvjz%2Fse%2FPjHoLVDBvMVSKJYBfz1myBlS5lAiA85k775EBYj6Brm98UIDk7OvqVb1i1xdQ8AHkh1uw2RiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3W8yvrvSYYLTJwpKtwDbmorNH%2BA%2Bugy1%2B%2FDh0ujT75hl1kqObfvSObjOlnbIk4hWwSGG1pFutwMPDixujqWco7L0w2nm1%2Fk176XTyjzAxt1l3okRc%2BuTAHJ5mhAX6CP0lFU9s7vPO13FTNYN%2B3xyAbONwO57RMM0jssaYatMf5dVZyX7Zm7c6Ig7BPTrT6T5S7jTNdJoRD2HiszmK3wGwLYcxA38lM5FwMfcNpTeEUzQ3gMT28PqdYYk%2FLXhNh8O0lysL04LnXxzG90vkohH%2FjtS7VDr%2BFU9Pj9U2ZjZ0CEgsxRu65zv3JmmX9O6xt2HrsD1VVQvdcYOUIdLr0vlXj%2B7l5LZn1Y%2B3eCYVrT%2FteGj5BeAPHC1cFsuhobhFRzNq1ATxuiPa1sgKkUYB1KxmMFTWxZCrbo8ObNpY9TJJISlyIjOPM15JMLA07m%2BpR%2FtZUXibkMl2Lv4J718uhzGoyvjqJ1gayKWnw7wXQ%2FcMgGAd3phs%2FvhDJxQSwZGJZYektauPBRCITA8SmQW4882XRHp67kE25My9f08S8GGnYha9ALLtolzlb9sGJmAfg5L1wW4040eOUPe4%2FybnjZ%2BEDSG9aUaD9wTrtbLcqjKhvh8jblEooYAmrgnyso2Lm24LDENxYTOFhEGYAw9P3SyQY6pgFgNrrPQHMZg9kKFM3Fj26oW4vqzcXXIO4MH8cGG0wwmsFACnxUcOUvREcgXjtuuODwmm3LloV3RyEdvo1T%2B8w9Sag0%2BCI1gBEpL95DaRoJ2CSXVcqJOaNN1mSwpJguTCS9Gc1hnE0Hp2yuoAF4OjGRllcSaSsTE4BMf6gRxzS1gsrNjmhxPt3Vgx7R29H8zSIDh52ncw4NqBrb9zHTmfoist00Jxvg&X-Amz-Signature=83a5d2b42de0bb9bec677390bda06c7f7632e15d22ad6af8413ebe71616712a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

