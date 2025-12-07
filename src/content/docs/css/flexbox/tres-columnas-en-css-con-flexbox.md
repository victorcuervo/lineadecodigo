---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPHCB2P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ4aqrZ%2BMht%2BvkoiMTm%2F32pm1l67X7DUOvltcw7yNpAiARorHipdYdUigtT13qS1d9iyQqu27rlqE5NyX0sR%2FY9yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwemharSR6HeFiXfKtwDLaoUJVYWlCpQKhEWsHBTJv6GW0W6K6gPCHvxgDT4fYPb8NyEDzuvVuWbm0ZpJYKyTC0K%2FGdO%2F7DfH0zVFnjFEOmWLurAXBdPWpXWbSxqo1p8Ypn%2F0FsjKO72EqpzlNSCOSNNDW%2FYAwHJ6HUeoZno5yLX%2FvzUrKf5VtM9zoL7NOTdNt37RXoScfodiXY%2BjGoYJxzbRKLOkzGHk0TNDAJbq%2FTxllskekFGsKul2aZ3ZQMjulT9if1fc8%2BKIPna%2FPQPdWHOq%2F%2Fu6%2BpzLt%2FxkWZPUM4VGH6pUEYvt8507T%2BR5YoW%2BV40XkAYbeAMHh3lq%2FEztI5gN6Jmxgvx4%2FbYZ9Rzw4LtkziV%2FrYx1TIq2H6QZcmURcumOegU4H2D81CeyNL%2FDGOUGM8uyj0JCSYa2b7BgD09%2FUOdLdz1yOV5iIwbgArduochNg2qU98CLnRcUAAlLWdeOPh6rR7%2F4AvJ3fZ5LZ0ycuOjScr1%2FGvmLZa%2FCD8Ph9uneEGRYUEFS3jcFkOELP7dX%2Bpfj%2BOZ551Op%2FGiwDvRshnn7yAV4oukrrJ%2BCg5wb7cCmgB5T0gvOY%2BL5234N4Ip4iGL5jd%2F9eYjwXe60rkIK5QdLAGKZV2KjiamUL8CvNZgZZuELY%2FXnCEwpZnUyQY6pgFHiqbJkh2P4OlLmhAIZHrfj552UdtsV3MUPk0phAM7yoyde2uR5ygFPuZ%2FJlU%2Fojw4TwEBa8ZH9HntsiIFn0IX4DBaFpibsTO49pPUh%2BSb8ZKJOFxDh5O%2BXDKOZhk%2FSZAg27a2NI0Yed3ltozg%2BSViIXv8W70SdXZhBbzE%2FuhsWNkfYXvgLTed1J72L0BDKHNZdCau6357%2FOcqi4xSFaTeqkSeCT7Q&X-Amz-Signature=253501027f7492fb3d78922580491d055711c7a5c56985faca290e3950d5db57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPHCB2P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ4aqrZ%2BMht%2BvkoiMTm%2F32pm1l67X7DUOvltcw7yNpAiARorHipdYdUigtT13qS1d9iyQqu27rlqE5NyX0sR%2FY9yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwemharSR6HeFiXfKtwDLaoUJVYWlCpQKhEWsHBTJv6GW0W6K6gPCHvxgDT4fYPb8NyEDzuvVuWbm0ZpJYKyTC0K%2FGdO%2F7DfH0zVFnjFEOmWLurAXBdPWpXWbSxqo1p8Ypn%2F0FsjKO72EqpzlNSCOSNNDW%2FYAwHJ6HUeoZno5yLX%2FvzUrKf5VtM9zoL7NOTdNt37RXoScfodiXY%2BjGoYJxzbRKLOkzGHk0TNDAJbq%2FTxllskekFGsKul2aZ3ZQMjulT9if1fc8%2BKIPna%2FPQPdWHOq%2F%2Fu6%2BpzLt%2FxkWZPUM4VGH6pUEYvt8507T%2BR5YoW%2BV40XkAYbeAMHh3lq%2FEztI5gN6Jmxgvx4%2FbYZ9Rzw4LtkziV%2FrYx1TIq2H6QZcmURcumOegU4H2D81CeyNL%2FDGOUGM8uyj0JCSYa2b7BgD09%2FUOdLdz1yOV5iIwbgArduochNg2qU98CLnRcUAAlLWdeOPh6rR7%2F4AvJ3fZ5LZ0ycuOjScr1%2FGvmLZa%2FCD8Ph9uneEGRYUEFS3jcFkOELP7dX%2Bpfj%2BOZ551Op%2FGiwDvRshnn7yAV4oukrrJ%2BCg5wb7cCmgB5T0gvOY%2BL5234N4Ip4iGL5jd%2F9eYjwXe60rkIK5QdLAGKZV2KjiamUL8CvNZgZZuELY%2FXnCEwpZnUyQY6pgFHiqbJkh2P4OlLmhAIZHrfj552UdtsV3MUPk0phAM7yoyde2uR5ygFPuZ%2FJlU%2Fojw4TwEBa8ZH9HntsiIFn0IX4DBaFpibsTO49pPUh%2BSb8ZKJOFxDh5O%2BXDKOZhk%2FSZAg27a2NI0Yed3ltozg%2BSViIXv8W70SdXZhBbzE%2FuhsWNkfYXvgLTed1J72L0BDKHNZdCau6357%2FOcqi4xSFaTeqkSeCT7Q&X-Amz-Signature=f42bc29a0c9a807996a087d46a3bfd3f1e01867917aa34c484c586bee729d36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

