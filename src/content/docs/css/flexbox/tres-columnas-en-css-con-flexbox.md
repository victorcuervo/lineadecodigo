---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMME6B6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDMJ8fXLFr4XqXfoMLRon%2FIYhYq5DffgJT8Wv%2FNQ5Wj2AIhALVit%2BK24hsx7aulfOrVaivSdQtNlXAUe9SVvmYNw3S%2BKv8DCD8QABoMNjM3NDIzMTgzODA1IgySQ1KHa8yKnvqaQOwq3AO4D3AdM%2FJBBOM18gPLg9sYisfyaQFOuveQm2QUTafjlnaYZP4SAZU4Kr5g4SB09%2BrvB8%2BJhezNdouMuBgOTqclENxpPz0DTeTSuHgcKvo8ymAc1Q6TXGTzCDIowrlY6Qh5Q8dHRROBGLw20gqgaPjjx%2BHaeQpAHh4bcy5xIcruZoHoyuhbPoIy5U9uHSYfqZDuIsj0b%2FMrwDjC%2Bh7pra839DFK7TZdh%2F2hZXHGZq4z9XK%2F0xNvzY6%2FEdlO4ygjdlDXHE2DYya7Lz8MYHq7jJIp0yFUrxJOKJ%2BDTHfZ39C7up2Noyqu1F%2BOnl1PZzvNsDP%2BkGIuClRptGpNyyrnemK3Bb5YV5RIbeECoYErXUQ8IBC%2FKj3gF9Fhmv8kPEUT7Kis9ullHEWzsXgKHKBZ0H0FBEGF8nLRzyTWteKcp0LxGOzTC46F0P%2FZjYW3f3HXk%2F6MOie8XZrCVxdk7S26Pp%2F2xzZ5Fkl6tRIxsUE39aOhU%2BV038%2B9xUY2ySybb0BCwq3%2BjakC3%2FraE8hCLRSkHZlmvNpuMLKW6IZni%2BppkqYYwfMHfUkxmTBWElL6HvowIrKC7ZJ9GvqSVgmJHN3OqQSsaT7dRVgZiNuzY1JdXwcOUQwyBYR6Oo9WyF3gkjCsy8TJBjqkAWCX9CVw5hDvBCO759qibrOu34y1X3iVPnPigCW8BBmxlTmM29QIwGbuw5pQkC2zHV1ZfmOO0IE2tIsFCSUatakGQORmm%2F9RzlrmEGOSJ8KrJ6qk6ggeXEj%2BMtj1O0J35N48COFu8lmS95u3suaSgZC0lQWSUT73M2UqfvN%2BUXYxpwrYivn76dvHfspSwFlkAZcK6ApyKwWaw687qh2BrgjZEMXt&X-Amz-Signature=7aa2dd866f5eda0a5022eb7598069daa0739c6a600ca643d50ef05d4fed5dbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMME6B6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDMJ8fXLFr4XqXfoMLRon%2FIYhYq5DffgJT8Wv%2FNQ5Wj2AIhALVit%2BK24hsx7aulfOrVaivSdQtNlXAUe9SVvmYNw3S%2BKv8DCD8QABoMNjM3NDIzMTgzODA1IgySQ1KHa8yKnvqaQOwq3AO4D3AdM%2FJBBOM18gPLg9sYisfyaQFOuveQm2QUTafjlnaYZP4SAZU4Kr5g4SB09%2BrvB8%2BJhezNdouMuBgOTqclENxpPz0DTeTSuHgcKvo8ymAc1Q6TXGTzCDIowrlY6Qh5Q8dHRROBGLw20gqgaPjjx%2BHaeQpAHh4bcy5xIcruZoHoyuhbPoIy5U9uHSYfqZDuIsj0b%2FMrwDjC%2Bh7pra839DFK7TZdh%2F2hZXHGZq4z9XK%2F0xNvzY6%2FEdlO4ygjdlDXHE2DYya7Lz8MYHq7jJIp0yFUrxJOKJ%2BDTHfZ39C7up2Noyqu1F%2BOnl1PZzvNsDP%2BkGIuClRptGpNyyrnemK3Bb5YV5RIbeECoYErXUQ8IBC%2FKj3gF9Fhmv8kPEUT7Kis9ullHEWzsXgKHKBZ0H0FBEGF8nLRzyTWteKcp0LxGOzTC46F0P%2FZjYW3f3HXk%2F6MOie8XZrCVxdk7S26Pp%2F2xzZ5Fkl6tRIxsUE39aOhU%2BV038%2B9xUY2ySybb0BCwq3%2BjakC3%2FraE8hCLRSkHZlmvNpuMLKW6IZni%2BppkqYYwfMHfUkxmTBWElL6HvowIrKC7ZJ9GvqSVgmJHN3OqQSsaT7dRVgZiNuzY1JdXwcOUQwyBYR6Oo9WyF3gkjCsy8TJBjqkAWCX9CVw5hDvBCO759qibrOu34y1X3iVPnPigCW8BBmxlTmM29QIwGbuw5pQkC2zHV1ZfmOO0IE2tIsFCSUatakGQORmm%2F9RzlrmEGOSJ8KrJ6qk6ggeXEj%2BMtj1O0J35N48COFu8lmS95u3suaSgZC0lQWSUT73M2UqfvN%2BUXYxpwrYivn76dvHfspSwFlkAZcK6ApyKwWaw687qh2BrgjZEMXt&X-Amz-Signature=99362ee94014961ac09df18099cb0dd67f404063ad8f9b2e76a772fbc9125404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

