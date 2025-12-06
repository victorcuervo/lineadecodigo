---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDCGO72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDhthRoo9ngp2%2FCqty%2FIQI%2F%2FsrJaL0lB251HgOzNSxsAiAjNnwEWUq72ExFMiJyVUk5WQzLXEEYqtdD4ydSOs3YSSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMwJqgihP2a8bev5hfKtwDDBdrXXlnwfBUKbmqICHb2N%2BuZiJbRm3Yiii8t5wEXnsBMEN7I%2BH73IjPQ1m3GAoO%2F%2B2kdGIDDxKslHr4OAtVY%2FLBq1InABO5P1paQHht%2BOq%2BPUCl5gk5faN9Fw1499cYOzf5E6T5hlVL5UMY27Aoc3Bs46R73uA%2FjeDTmj7FdNCZz0evCpXwdIaT6eohUPDid%2F4K9R0AOt7%2BVZF%2FYQITR5zQM0JlxqYP7LxtdJ31XKSR6lB5LHwmVcsph2%2BhV844rGhrB5KY7Ghmd1bnt6PQXn26Uy4SfqyQS4tS5xhueTviVx90TIs2MmhenQDLfRpxv8hX8I95bsrhVD5h4y8BC5dz69QhA0Y1eaL6Ym%2FMppq%2Bj7%2F36SZ2feK3cYxKXkh50ULsnKI5uHsbVNuIHpJvLmPc4hxM44xA8G123kKz3mzTyTq6uGxr4wjWWQqK3%2BF86kjqLfLg9Lb40b%2FM1CpE9402J%2FwXs0U%2BOdQ3ECCcRcnKUtDKBsgurxR%2BJb4PQXIDTUvmNJKFT5sq0lcxi1cXloYOvlUdiGbd%2FDV4DEVYdJCJRvz%2FcAXZmoNUbwfBJV4En6S1%2BQO%2F%2FTPSCW8FbYzwPwWLqaZb8ww%2F8APh6mgT3f8zzG2gxzvkWXsgw1wwuN7OyQY6pgF3A1Xsl%2FQWApvDW3P95WHpVrbXLayAUytpNCqNCcMmUIuCCgZ1hRhR7jzCp%2FHIYTmqTGHPhyMmXT%2BosONkcBEX7G%2BEr6Bt5AxQiVR1o624XA3b61GS4dVoyGuf9OkoX3jSE%2BGQ5ZDE9mFN3oU8MqwNwBBwDORe2c02RyN3Y9XBYWEJdP2D8IeY4hXSN1Yfhskroat0BCE4WTf9B0cssX48xdCEBNa0&X-Amz-Signature=6c449f253711485daddc9825d98262d0ed5dad86933d7fbdcea42c62b4442230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDCGO72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDhthRoo9ngp2%2FCqty%2FIQI%2F%2FsrJaL0lB251HgOzNSxsAiAjNnwEWUq72ExFMiJyVUk5WQzLXEEYqtdD4ydSOs3YSSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMwJqgihP2a8bev5hfKtwDDBdrXXlnwfBUKbmqICHb2N%2BuZiJbRm3Yiii8t5wEXnsBMEN7I%2BH73IjPQ1m3GAoO%2F%2B2kdGIDDxKslHr4OAtVY%2FLBq1InABO5P1paQHht%2BOq%2BPUCl5gk5faN9Fw1499cYOzf5E6T5hlVL5UMY27Aoc3Bs46R73uA%2FjeDTmj7FdNCZz0evCpXwdIaT6eohUPDid%2F4K9R0AOt7%2BVZF%2FYQITR5zQM0JlxqYP7LxtdJ31XKSR6lB5LHwmVcsph2%2BhV844rGhrB5KY7Ghmd1bnt6PQXn26Uy4SfqyQS4tS5xhueTviVx90TIs2MmhenQDLfRpxv8hX8I95bsrhVD5h4y8BC5dz69QhA0Y1eaL6Ym%2FMppq%2Bj7%2F36SZ2feK3cYxKXkh50ULsnKI5uHsbVNuIHpJvLmPc4hxM44xA8G123kKz3mzTyTq6uGxr4wjWWQqK3%2BF86kjqLfLg9Lb40b%2FM1CpE9402J%2FwXs0U%2BOdQ3ECCcRcnKUtDKBsgurxR%2BJb4PQXIDTUvmNJKFT5sq0lcxi1cXloYOvlUdiGbd%2FDV4DEVYdJCJRvz%2FcAXZmoNUbwfBJV4En6S1%2BQO%2F%2FTPSCW8FbYzwPwWLqaZb8ww%2F8APh6mgT3f8zzG2gxzvkWXsgw1wwuN7OyQY6pgF3A1Xsl%2FQWApvDW3P95WHpVrbXLayAUytpNCqNCcMmUIuCCgZ1hRhR7jzCp%2FHIYTmqTGHPhyMmXT%2BosONkcBEX7G%2BEr6Bt5AxQiVR1o624XA3b61GS4dVoyGuf9OkoX3jSE%2BGQ5ZDE9mFN3oU8MqwNwBBwDORe2c02RyN3Y9XBYWEJdP2D8IeY4hXSN1Yfhskroat0BCE4WTf9B0cssX48xdCEBNa0&X-Amz-Signature=19f93ea8d3e586421592edf53e1228eba6e5948d87c9a8f56488af8837c41cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

