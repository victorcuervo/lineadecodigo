---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVN6FCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuLAxjyURBUs3sEGfVTWO2aS0DY5wJ2mc6zmJg5JGvAiEApaVSuIhzlLHX6HeHU1JMblG39CIqOtGLMm91aeL1OfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLDxKKjeUNP0C6j6yrcA3FNw%2BEIGz6rgjxR%2BrUx%2By%2FFQ%2BKQ78X%2FVuuHoAVZupR1NiCMHGi0j%2FUazF%2FNZhG%2BTlXvrvKmXfNuMRxEw3xnoI5DvXKP55KzKNPyOK7HBHOCXRFSqnsRuQjMl0XDN4o6J9SkWdubNlBkKXLgy5xD02qlmurJXmZX7cm0Q8EeVUG%2BxA3qLf%2Fi%2BZmGkPQHcVez6KjfBvC1A262b5ks7YliAtUhfbaZXtfqU6PttQLcI9t4elFHibnY0StVhOSIteFbjhKl0sNTjDu9MWa6VlelSlyirkzgD6hQUwT8PTN%2BtRbv3%2B1MEOLYDOpSD%2FSaA2deHUO1l%2FyHa%2Bn00NlnpJRDgWZ623lenzFj0DEY8xf%2FYdFG7l8MKim8HkyDheWDEP0CRQaOUoaNJ6Nr%2FGcbRaTPGNqQB54Au4U9LZ8YOkZUmUweM%2BjZ3sOgm5ouk3OJ8oBoHR56XvptNSnxhTn74yzP9HcLOmd6KdCOan4hxsi2mlF%2FKsQ09aqgmbbYK37Cc5bZY1piZkfStgZAHejw2Xpox9%2B2Klgk5ql8K27Ki7AmfUj7uL6nSxNVgyitkig57fzrSwfoDAWHY8N1yGQx3kw%2FAxcWtYnT2V%2FqtQV8zNFoUO20rrRrkvYCDH9KmphjMNam0MkGOqUB0juyC5P%2Fyi4MLOzOI2YhCvN6VreN%2B2KjX%2FoHV5EvIzaOXiaWPbBmBfb%2FHkFmAe4yymeEW%2BNFg%2FqLL3qFtJpLJwswx4cQ3s%2FuTGcRhWXw9eGX3IrvmLs8vMdMWT4yxWlmcRd%2FTKqlu0QmqOqIZUbLasFLjXFHivXYqadjrnQtPaDIW3R46yGQQfSOn9RMyV3qTieJXguvlR%2FGaAVGYwuef5yIQZE1&X-Amz-Signature=f54e61b193f320ba296f190dd07421327b2f1db189272b08ec2162b752f8b074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVN6FCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuLAxjyURBUs3sEGfVTWO2aS0DY5wJ2mc6zmJg5JGvAiEApaVSuIhzlLHX6HeHU1JMblG39CIqOtGLMm91aeL1OfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLDxKKjeUNP0C6j6yrcA3FNw%2BEIGz6rgjxR%2BrUx%2By%2FFQ%2BKQ78X%2FVuuHoAVZupR1NiCMHGi0j%2FUazF%2FNZhG%2BTlXvrvKmXfNuMRxEw3xnoI5DvXKP55KzKNPyOK7HBHOCXRFSqnsRuQjMl0XDN4o6J9SkWdubNlBkKXLgy5xD02qlmurJXmZX7cm0Q8EeVUG%2BxA3qLf%2Fi%2BZmGkPQHcVez6KjfBvC1A262b5ks7YliAtUhfbaZXtfqU6PttQLcI9t4elFHibnY0StVhOSIteFbjhKl0sNTjDu9MWa6VlelSlyirkzgD6hQUwT8PTN%2BtRbv3%2B1MEOLYDOpSD%2FSaA2deHUO1l%2FyHa%2Bn00NlnpJRDgWZ623lenzFj0DEY8xf%2FYdFG7l8MKim8HkyDheWDEP0CRQaOUoaNJ6Nr%2FGcbRaTPGNqQB54Au4U9LZ8YOkZUmUweM%2BjZ3sOgm5ouk3OJ8oBoHR56XvptNSnxhTn74yzP9HcLOmd6KdCOan4hxsi2mlF%2FKsQ09aqgmbbYK37Cc5bZY1piZkfStgZAHejw2Xpox9%2B2Klgk5ql8K27Ki7AmfUj7uL6nSxNVgyitkig57fzrSwfoDAWHY8N1yGQx3kw%2FAxcWtYnT2V%2FqtQV8zNFoUO20rrRrkvYCDH9KmphjMNam0MkGOqUB0juyC5P%2Fyi4MLOzOI2YhCvN6VreN%2B2KjX%2FoHV5EvIzaOXiaWPbBmBfb%2FHkFmAe4yymeEW%2BNFg%2FqLL3qFtJpLJwswx4cQ3s%2FuTGcRhWXw9eGX3IrvmLs8vMdMWT4yxWlmcRd%2FTKqlu0QmqOqIZUbLasFLjXFHivXYqadjrnQtPaDIW3R46yGQQfSOn9RMyV3qTieJXguvlR%2FGaAVGYwuef5yIQZE1&X-Amz-Signature=4500da9fb3e1a085e3c9d42fe362d3e2a18175bc987c44bbd22cd5de395042ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

