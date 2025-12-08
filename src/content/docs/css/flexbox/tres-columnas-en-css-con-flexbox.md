---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOH44QP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBG8KBlkcX6c5wO1ugrWeR5JjkLk77w%2F%2BszVu3KGmwIhAOGayamLQdybUcL6x0qCVjUteHXy3kTy7%2Bkd5ukD%2Bt8lKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6%2FyH6nNj9ubrMn0q3APP0wXSLpKTjJKKhcTjLAOqnOjnJneqqxKGzCR59fc1DgfnjY1q7eZGlvlo15yE%2FhNGlG4YMVnKLj1e2YRWvcYcUgbXMbjf%2B6%2FjG0Y%2BVxNpoSl84PqvnLTprOxvSleWHcqq32oUCL96lfaghEa%2BnZ4HQTtR5V8ROrmZeliyuOBtb1yToD0zI4XdQuLivIazNlOp6BN3AXptnUwR6LanlBM7rXs6UlJ2A1lxNFxTMhNbYIHwjdIN6nl7Y4DhfNSxcUZlita%2FvbP6T6p%2BHW7NmQSjM3CIxPinBMriPRoPZSzbYf%2F5N5rfoTs1PzNq%2Fy0bJ0bTXYz1E6F7hoCdX3iOLvzfEHk6GenSU97RDBrozYFr%2Fq8WNoE2xMTP1Up4Cmk81h5%2FW0yebIPKqChWyifZMltrocj6F96WXPd6XjQmC7AVhJGl8j%2FAuRBedSUHE9QImqLmKo320dSS3dh%2BfwADfO8geOU9bqz3%2BiUBnrybNEIQM6aIFyYM5IWW0TZ7d6qgAJPVtiM5jYZfhmcfgKQSPaJwYOCtwpV11U9jvAItfRu5zYZHebPBUJEYS1va4rHgvQ015cFgZkA8ft9vQ%2BLYZSbgmY95yPU3DVhHrMwYuJEVKosTv6QZHqWUuaZcZzDR7tnJBjqkAdH%2BPM66DzE8uJ5NIqOK2OlX58zTzKgXuKTYvKcP63o5JMKGIFQ8Y6F79OlLpb%2BOF39XdhlMFjcIY0DnwYBXiNjTKNgpd4FRoueDoDt1soTqoa7PW0hYbpwzfbKevFcxkjSOXf27VOh8pHFOMyZVYNefRtOp8YwEwzz1HburFkkuAQBmdVPOdzb6O2WL2KjkKqWmu6toBcsOtTLzX6682KpDMe7H&X-Amz-Signature=8e690433a41b57f7b29799ab174e4f895699ee76df5b9584deb5c1a6c37d1778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOH44QP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBG8KBlkcX6c5wO1ugrWeR5JjkLk77w%2F%2BszVu3KGmwIhAOGayamLQdybUcL6x0qCVjUteHXy3kTy7%2Bkd5ukD%2Bt8lKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6%2FyH6nNj9ubrMn0q3APP0wXSLpKTjJKKhcTjLAOqnOjnJneqqxKGzCR59fc1DgfnjY1q7eZGlvlo15yE%2FhNGlG4YMVnKLj1e2YRWvcYcUgbXMbjf%2B6%2FjG0Y%2BVxNpoSl84PqvnLTprOxvSleWHcqq32oUCL96lfaghEa%2BnZ4HQTtR5V8ROrmZeliyuOBtb1yToD0zI4XdQuLivIazNlOp6BN3AXptnUwR6LanlBM7rXs6UlJ2A1lxNFxTMhNbYIHwjdIN6nl7Y4DhfNSxcUZlita%2FvbP6T6p%2BHW7NmQSjM3CIxPinBMriPRoPZSzbYf%2F5N5rfoTs1PzNq%2Fy0bJ0bTXYz1E6F7hoCdX3iOLvzfEHk6GenSU97RDBrozYFr%2Fq8WNoE2xMTP1Up4Cmk81h5%2FW0yebIPKqChWyifZMltrocj6F96WXPd6XjQmC7AVhJGl8j%2FAuRBedSUHE9QImqLmKo320dSS3dh%2BfwADfO8geOU9bqz3%2BiUBnrybNEIQM6aIFyYM5IWW0TZ7d6qgAJPVtiM5jYZfhmcfgKQSPaJwYOCtwpV11U9jvAItfRu5zYZHebPBUJEYS1va4rHgvQ015cFgZkA8ft9vQ%2BLYZSbgmY95yPU3DVhHrMwYuJEVKosTv6QZHqWUuaZcZzDR7tnJBjqkAdH%2BPM66DzE8uJ5NIqOK2OlX58zTzKgXuKTYvKcP63o5JMKGIFQ8Y6F79OlLpb%2BOF39XdhlMFjcIY0DnwYBXiNjTKNgpd4FRoueDoDt1soTqoa7PW0hYbpwzfbKevFcxkjSOXf27VOh8pHFOMyZVYNefRtOp8YwEwzz1HburFkkuAQBmdVPOdzb6O2WL2KjkKqWmu6toBcsOtTLzX6682KpDMe7H&X-Amz-Signature=96be5d117e66ca8420c7956a896d37a9bacac2cd4b2eed0507fe15615f550c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

