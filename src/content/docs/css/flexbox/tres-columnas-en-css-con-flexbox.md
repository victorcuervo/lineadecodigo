---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY2Z37V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaK9iAohJU6xysVT%2BMY5boGuo%2B%2F6SCGCjDrztS7MQA3gIgKoQ%2BqyHWCJj%2BDRiC%2BhjqDBwF%2B5EIHw5mpVAFwoDn%2FtkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9x9UUltBl61CKQJyrcA8f0G7NJNzExqnyV1zL8abwYUbrgLOutCgD%2B1ObZHw0URDH0mL6Ec7SM97VAPBzBbLdC%2FmCsjgSNU9jbkzBRTWUKYVcJb9IAumz763s4QqHebR2%2F6lfALJAikE2gCHfYAeAFACxfcB1ozD2oqW6ABKfR7djyDsU4oXNmNuApMHW7aZvg27V%2BG5qGrNgsClhDjkzR5SZGYIFGkqjgnjDujKsH3qU42EkpDVjkKpdLkVg63%2BdKYTUV8xYU8aVsnfYQJ%2BiF9b6CMW6KynQCGKzAZ3jQZLe10apHDXv4TXKwkoPtZX7bJwmjylgRhq6m9VyRUGpNNU8ErJrQyhkS4E4%2FGlggP0s73g9rj6ObT14T0dtyFUtEE88sRGgiYkFyj3AWO%2FFJE9Khc8BUi%2BkEe3QydHasj5vN60eiYkfkHwNJNeBef2%2FDGgwlhgynRMM5YQ0RLxBLjQX4a5YP2BoSzOlHf04RfmujGYNZPDvfe235fF9u4%2FIqLYf%2By8VzsbfyOf5XPSvjJbq1KHCyxh1Yc6P4ruqaO4DqShQdF7sFagEkOUcUi4Er751AjIGdffnXbaLcNk1oN33B%2Fh8Pn82SVeeNH8gy6fhrRBqQhSe%2BSEcctSFGCZXDE7BAQWrv%2BsC8MMSh2MkGOqUBF9R2Z7Rg1XA9i6mqBglkp4oKuV1wu8OI9Sjamc9CQvE9hDBKReQfAazW9zHepXAAVl85DqpjcUT3JDh2RRkjPYPB%2FEBRW48DOpqukSnLSGA6Hdfcgvi9eL72o6yJtJ%2BeVojhjUzMwkWtzeqrXrBLUa%2Brpz5d7%2Bae6IK2Mq7Ey4X7i0vWaZILvBnw6MtR%2FrnVGUAFhsDIfDMaJnuQNkSYw3VGgLfK&X-Amz-Signature=438ed71543c30841c21fbe51a9f3b991be13e10ddf7af01476159aa47fcaec23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY2Z37V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaK9iAohJU6xysVT%2BMY5boGuo%2B%2F6SCGCjDrztS7MQA3gIgKoQ%2BqyHWCJj%2BDRiC%2BhjqDBwF%2B5EIHw5mpVAFwoDn%2FtkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9x9UUltBl61CKQJyrcA8f0G7NJNzExqnyV1zL8abwYUbrgLOutCgD%2B1ObZHw0URDH0mL6Ec7SM97VAPBzBbLdC%2FmCsjgSNU9jbkzBRTWUKYVcJb9IAumz763s4QqHebR2%2F6lfALJAikE2gCHfYAeAFACxfcB1ozD2oqW6ABKfR7djyDsU4oXNmNuApMHW7aZvg27V%2BG5qGrNgsClhDjkzR5SZGYIFGkqjgnjDujKsH3qU42EkpDVjkKpdLkVg63%2BdKYTUV8xYU8aVsnfYQJ%2BiF9b6CMW6KynQCGKzAZ3jQZLe10apHDXv4TXKwkoPtZX7bJwmjylgRhq6m9VyRUGpNNU8ErJrQyhkS4E4%2FGlggP0s73g9rj6ObT14T0dtyFUtEE88sRGgiYkFyj3AWO%2FFJE9Khc8BUi%2BkEe3QydHasj5vN60eiYkfkHwNJNeBef2%2FDGgwlhgynRMM5YQ0RLxBLjQX4a5YP2BoSzOlHf04RfmujGYNZPDvfe235fF9u4%2FIqLYf%2By8VzsbfyOf5XPSvjJbq1KHCyxh1Yc6P4ruqaO4DqShQdF7sFagEkOUcUi4Er751AjIGdffnXbaLcNk1oN33B%2Fh8Pn82SVeeNH8gy6fhrRBqQhSe%2BSEcctSFGCZXDE7BAQWrv%2BsC8MMSh2MkGOqUBF9R2Z7Rg1XA9i6mqBglkp4oKuV1wu8OI9Sjamc9CQvE9hDBKReQfAazW9zHepXAAVl85DqpjcUT3JDh2RRkjPYPB%2FEBRW48DOpqukSnLSGA6Hdfcgvi9eL72o6yJtJ%2BeVojhjUzMwkWtzeqrXrBLUa%2Brpz5d7%2Bae6IK2Mq7Ey4X7i0vWaZILvBnw6MtR%2FrnVGUAFhsDIfDMaJnuQNkSYw3VGgLfK&X-Amz-Signature=a43692d20f2088eb77a1f79bed8b08711fb49e2278ce5a0e1715c76b3f0401a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

