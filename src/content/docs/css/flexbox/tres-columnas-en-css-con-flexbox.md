---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773ZN4K3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJVOFm%2Fh2Bkgl7srXMpeEEHhrHyVB0D4%2F%2BNU1DRFrrMAiAP8SkoaNHKqRVw4qXkY8WtdVrIjW522FrCC0Lk%2BJ1faSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMSZdpwtW40a56PS6YKtwDPVZOSW%2FT3MFpUo7WT7OatUh4%2BpMD9rXTJ73Yw0ydPWiZTLjm6ogh5quxRG7sVNE0fVLNc7lcZNaDxpDdG06S%2FXW1RhuIt9Fy3vYiFi5ZvAJahTzwzPHtL%2FOfOx0A7ha932o62I4Rb5INm3eWPqfpDbmERiQ%2B3wrKiVmIYsm6PLYYTS6LYYR3vJ%2F2VhiESiFm4FgyLhkMNAqHosEjc8QF0vpQLVdq8WSvR3SpxjeWKMnwEKDurVAfd2XeryC1vVrw%2F5wg5CwO7eHm0F6kaLqVGTGJRak%2FnZa2Vpq1sksvv4uKgfY8e6PupOfgNpAAimgCNNILgA%2BaCvC1m%2BRUuWhe3PRCPu7w8a67Ew%2F3NgffK%2BAKbysAIvjfylHUmkpcHHI6bXuLOaqYTfGQT7CojwjCfJmaKjDU%2BZpss8dW4SZPy4sGQKGRv7N0FD4MsbuCAd0JRKtqPKcA8RnN0P4KfCGQFy6FKUt1s8jYkq50uN3IhbRkR9hlXXtGy2OI1yXjmYT61K5iSDIMfJfC9vknrGUWSAwDOqvv84lHmJIYXfBwUgn0gSyF%2FJv3VR1hmIYZTZmwf7pMu3f5Z%2FzMSyduN0pTMXYKovGxHnYTAJja%2F2rHg%2FlzShBCCOILLX2lXfgwh4nQyQY6pgEnifTh2ZHQ16rCEC7fAWuElMjFRVDFy44gYOPIYqKuzFoTF5%2F%2BgIF1Q4aBu6W%2FNvrrlP3s%2FiuegX5u18C99lGfOJK3lCEy1EXVTJqA8Sy%2BESUB4ojdm5id9MZWOl5lgruFw238%2BvzogT%2FUB2TN%2BtS6so3RC1jWk9jg5rBra8VR%2Fwk%2F%2B35u6qdKcDzWGFOwzrF4OeDSq6y%2BWYr89UcEBH6AEgXB9KMj&X-Amz-Signature=4df991c3b1f1cd8b05664c828642590b2521b011ef1d5811c03295093aa76496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773ZN4K3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJVOFm%2Fh2Bkgl7srXMpeEEHhrHyVB0D4%2F%2BNU1DRFrrMAiAP8SkoaNHKqRVw4qXkY8WtdVrIjW522FrCC0Lk%2BJ1faSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMSZdpwtW40a56PS6YKtwDPVZOSW%2FT3MFpUo7WT7OatUh4%2BpMD9rXTJ73Yw0ydPWiZTLjm6ogh5quxRG7sVNE0fVLNc7lcZNaDxpDdG06S%2FXW1RhuIt9Fy3vYiFi5ZvAJahTzwzPHtL%2FOfOx0A7ha932o62I4Rb5INm3eWPqfpDbmERiQ%2B3wrKiVmIYsm6PLYYTS6LYYR3vJ%2F2VhiESiFm4FgyLhkMNAqHosEjc8QF0vpQLVdq8WSvR3SpxjeWKMnwEKDurVAfd2XeryC1vVrw%2F5wg5CwO7eHm0F6kaLqVGTGJRak%2FnZa2Vpq1sksvv4uKgfY8e6PupOfgNpAAimgCNNILgA%2BaCvC1m%2BRUuWhe3PRCPu7w8a67Ew%2F3NgffK%2BAKbysAIvjfylHUmkpcHHI6bXuLOaqYTfGQT7CojwjCfJmaKjDU%2BZpss8dW4SZPy4sGQKGRv7N0FD4MsbuCAd0JRKtqPKcA8RnN0P4KfCGQFy6FKUt1s8jYkq50uN3IhbRkR9hlXXtGy2OI1yXjmYT61K5iSDIMfJfC9vknrGUWSAwDOqvv84lHmJIYXfBwUgn0gSyF%2FJv3VR1hmIYZTZmwf7pMu3f5Z%2FzMSyduN0pTMXYKovGxHnYTAJja%2F2rHg%2FlzShBCCOILLX2lXfgwh4nQyQY6pgEnifTh2ZHQ16rCEC7fAWuElMjFRVDFy44gYOPIYqKuzFoTF5%2F%2BgIF1Q4aBu6W%2FNvrrlP3s%2FiuegX5u18C99lGfOJK3lCEy1EXVTJqA8Sy%2BESUB4ojdm5id9MZWOl5lgruFw238%2BvzogT%2FUB2TN%2BtS6so3RC1jWk9jg5rBra8VR%2Fwk%2F%2B35u6qdKcDzWGFOwzrF4OeDSq6y%2BWYr89UcEBH6AEgXB9KMj&X-Amz-Signature=f5bfcbf59e1865755de440827b1957a5452af03869c10d576d0910d536db2ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

