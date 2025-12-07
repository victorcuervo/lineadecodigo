---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ6L7G4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCk68jefX%2FRIfIgn9ha0%2Fz9ylbNU8VxwTNvtlkHmhlAIhAIWF3WGClWio%2FxPSxBSbMDfrQWyOTyuRIFQUUre5%2Bdr1KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIT05jFLV0pKWoBw8q3AP8qzAXhG5CeBzGctyMvO1W%2B69HsCTUt0iI2fPvnukz%2BdPdmrgMHZjVlGa3pBJKkUDUGk3JoHtk7%2BQCjOaKwqCcs3F4jPBKC%2FVHoKXYXmadvHQtnwqpirymGZkh8x4vBNTThP8BUh48kLJNuC%2FhxtdeNUaqJ8S0Elo1AZSHd7NXgcpmSDAZgHlekAC0wkBmzCEupCRGxN9Xvjmgys25bwP1h49uFO%2B3c4BRlhPDabX37mDk0sa8CaFSyl0QV6%2BAk8L2O56Qwv0EJVxapBLofds5p%2FYWR5jnleLLYdsVpTndn%2FJFhdBijmWo6BIMU3UPnzGszCs1UHOoJkOvRKBWrLmj0JMRvfdX7XUsVb3vOiIsRtiYrlJ8XNLxXIIEaQtdsSIzZJC3BQty4c8%2B9BlOGvb2ooql3U3xwH3JpqDtJvc7FqHOLEvGorA3iNGwYFIekWRcI5DRAZHZf1gwMhqNd8yfjt6IiPYiQiDUucuf9l1McURy9rsCBdvKRyLzZI6kM5IJenjaFDcDjI7zFc74sldMcicnctR5J8t%2Fbg8hD4NyPeBCctW%2B9FSFCBM4SnbB5trn%2BshHKe7xh%2Brfey3d%2FElry%2FYZFtrYExRpHv8u5P0bgrotScb7semXt%2BPrdDCcudbJBjqkAWIUPlmaI9YTUup6Z1ca0BEHb1aZTRgJAh1kJJ6Zo121QDHx5NkgSppO0iRVMAWKPK%2Fq7nyXt3y%2FAa49aB%2F%2F1dOLTV5XZBkfG1GBKZktxi2ORwcb29uJNeaaD2ZNS6%2F%2FSe%2Fu5ldDZpwNp%2BKcuc0S%2BWFW%2BTLjUCXdCPY9LQThk8xhxsFuYkghIGYRWJMm4h95VPS0ZyGIHX%2FwtlRlr5XI4Api%2FZd2&X-Amz-Signature=9006f90088b0a0365af07ffe34bbc6843720e088add9e174e4f0bae96e5ccede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ6L7G4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCk68jefX%2FRIfIgn9ha0%2Fz9ylbNU8VxwTNvtlkHmhlAIhAIWF3WGClWio%2FxPSxBSbMDfrQWyOTyuRIFQUUre5%2Bdr1KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIT05jFLV0pKWoBw8q3AP8qzAXhG5CeBzGctyMvO1W%2B69HsCTUt0iI2fPvnukz%2BdPdmrgMHZjVlGa3pBJKkUDUGk3JoHtk7%2BQCjOaKwqCcs3F4jPBKC%2FVHoKXYXmadvHQtnwqpirymGZkh8x4vBNTThP8BUh48kLJNuC%2FhxtdeNUaqJ8S0Elo1AZSHd7NXgcpmSDAZgHlekAC0wkBmzCEupCRGxN9Xvjmgys25bwP1h49uFO%2B3c4BRlhPDabX37mDk0sa8CaFSyl0QV6%2BAk8L2O56Qwv0EJVxapBLofds5p%2FYWR5jnleLLYdsVpTndn%2FJFhdBijmWo6BIMU3UPnzGszCs1UHOoJkOvRKBWrLmj0JMRvfdX7XUsVb3vOiIsRtiYrlJ8XNLxXIIEaQtdsSIzZJC3BQty4c8%2B9BlOGvb2ooql3U3xwH3JpqDtJvc7FqHOLEvGorA3iNGwYFIekWRcI5DRAZHZf1gwMhqNd8yfjt6IiPYiQiDUucuf9l1McURy9rsCBdvKRyLzZI6kM5IJenjaFDcDjI7zFc74sldMcicnctR5J8t%2Fbg8hD4NyPeBCctW%2B9FSFCBM4SnbB5trn%2BshHKe7xh%2Brfey3d%2FElry%2FYZFtrYExRpHv8u5P0bgrotScb7semXt%2BPrdDCcudbJBjqkAWIUPlmaI9YTUup6Z1ca0BEHb1aZTRgJAh1kJJ6Zo121QDHx5NkgSppO0iRVMAWKPK%2Fq7nyXt3y%2FAa49aB%2F%2F1dOLTV5XZBkfG1GBKZktxi2ORwcb29uJNeaaD2ZNS6%2F%2FSe%2Fu5ldDZpwNp%2BKcuc0S%2BWFW%2BTLjUCXdCPY9LQThk8xhxsFuYkghIGYRWJMm4h95VPS0ZyGIHX%2FwtlRlr5XI4Api%2FZd2&X-Amz-Signature=aeebffeb857f46d3bc71cf63c0c0750aa35e1499e27c37414e754b9af2ab6486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

