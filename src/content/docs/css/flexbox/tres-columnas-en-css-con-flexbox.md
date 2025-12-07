---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XKJZST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5kNVYMS%2BQ7HrA2Rj33%2FHZ6P2CBtOTqvnNp83v1X6lAiB5K6pu49TP41SIh%2FMsjBRSZOKfopPxHYwq%2FTiadZX%2BryqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhpx4OzxInOMfRkLKtwDxTabmiXcmpFTJeWvjOAQYUy7octUnc6YXwzXeMttE4Q2sDyIPX8CufwBuM3FqVSunAkfLrpl6EwQpKhCpLEMvOc0V6I14RIbfbISI6QVB1lnQBpUugq5MQgvgxCjL3r0MNka%2BMJee0J44gyKUYb83NmAzEUNtRg7c0GWBqUy2cU6VFzGCwqIu0Y3Epe%2BQbCf3PS5TuLbPnJG0dd4k1uzmEfgEYSWE9r%2FQTORsNVX3kK%2FNlNRkD72hM7UMhzuH8HNI1bDB7yi3dYvxTVglBoPoPxoG0EB8ya6KtaYAm%2BbmyhzxiBC9mRcUDRq0MhtgKm1WMWt9w%2B5LlWshz0LYEJ2ks5JOCt5bqttKqg%2BOkEqiXl7YYdI0l4uJptAXpkgKJ6q92Os11CCwi2KHLcAVX1%2BpAdff%2B72EdeapGcYYQ1LDe3NHm7zSfwAV3VZrYjXd4liaHbS2ixO1sFtHloodLRyh5DLRlbEyA3U9w2besI1q1Uaj5IArkNVHlm10Wbq5ZFb%2BNpWtEEEgD8xBzybDyc9LbaDK5JvZOGexyjL%2FDDiBsy3BhYj%2Fvh98XDxOje8rErerIQBHYL%2FuUGT33yoLmQ%2FWTKwa%2FmbdJ7StOxwgj%2B1sMlHdQVprU%2BxvAuIJiQwmv3SyQY6pgEGryBQrbj0oYFAN42paRr5kgFCkd3mKXNu3IzhbRDvyYqxzdDkcNGWe3Cd9YTJJbxJZd1YOtWwGyCGmj3hZCACPhccL%2B5GlJMtBA3BBbiCOeqmeGOLB56%2Ba1D0J66Efj0NBgqnHIzPHzlu1HgOgtZ%2BL1uhmXyAFDiq%2FZHGkVBxH5wpgprxJ25ZjHCD3Ms0LmX9XzFBS7m0j8fQ2txlJyKXaZmCW3SF&X-Amz-Signature=f84cfb94e1cde02ba2e59de51f14d9f6f8e7046597ad5f6b75fb297f255d1f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XKJZST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5kNVYMS%2BQ7HrA2Rj33%2FHZ6P2CBtOTqvnNp83v1X6lAiB5K6pu49TP41SIh%2FMsjBRSZOKfopPxHYwq%2FTiadZX%2BryqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhpx4OzxInOMfRkLKtwDxTabmiXcmpFTJeWvjOAQYUy7octUnc6YXwzXeMttE4Q2sDyIPX8CufwBuM3FqVSunAkfLrpl6EwQpKhCpLEMvOc0V6I14RIbfbISI6QVB1lnQBpUugq5MQgvgxCjL3r0MNka%2BMJee0J44gyKUYb83NmAzEUNtRg7c0GWBqUy2cU6VFzGCwqIu0Y3Epe%2BQbCf3PS5TuLbPnJG0dd4k1uzmEfgEYSWE9r%2FQTORsNVX3kK%2FNlNRkD72hM7UMhzuH8HNI1bDB7yi3dYvxTVglBoPoPxoG0EB8ya6KtaYAm%2BbmyhzxiBC9mRcUDRq0MhtgKm1WMWt9w%2B5LlWshz0LYEJ2ks5JOCt5bqttKqg%2BOkEqiXl7YYdI0l4uJptAXpkgKJ6q92Os11CCwi2KHLcAVX1%2BpAdff%2B72EdeapGcYYQ1LDe3NHm7zSfwAV3VZrYjXd4liaHbS2ixO1sFtHloodLRyh5DLRlbEyA3U9w2besI1q1Uaj5IArkNVHlm10Wbq5ZFb%2BNpWtEEEgD8xBzybDyc9LbaDK5JvZOGexyjL%2FDDiBsy3BhYj%2Fvh98XDxOje8rErerIQBHYL%2FuUGT33yoLmQ%2FWTKwa%2FmbdJ7StOxwgj%2B1sMlHdQVprU%2BxvAuIJiQwmv3SyQY6pgEGryBQrbj0oYFAN42paRr5kgFCkd3mKXNu3IzhbRDvyYqxzdDkcNGWe3Cd9YTJJbxJZd1YOtWwGyCGmj3hZCACPhccL%2B5GlJMtBA3BBbiCOeqmeGOLB56%2Ba1D0J66Efj0NBgqnHIzPHzlu1HgOgtZ%2BL1uhmXyAFDiq%2FZHGkVBxH5wpgprxJ25ZjHCD3Ms0LmX9XzFBS7m0j8fQ2txlJyKXaZmCW3SF&X-Amz-Signature=082e715e5cd0dd9c9aec311f3199258359962afd20fcc51ed8063d071353a570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

