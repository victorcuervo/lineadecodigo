---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFCPBZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdZLYO3qqxXCeI5rmE%2F0sE0NuNdAdItIM%2FgQLyc%2BLziwIhAIY0F2VMQtNSoqIgJ%2BkojsFCxR5vXG%2BS1oyHEsXLWdIgKv8DCH8QABoMNjM3NDIzMTgzODA1IgxohfvyUgoLZpOKQvAq3AMnnpePcK%2BkZ1i2rV%2FVX77O4VpFdUgahvN%2FZXeHH%2F1hRVVA7XVRasR7sdaN%2FAG7Dw8YpB468FiAxqajvmVKl3XBnie5GrsO07Q9qSZW7SAyBuCmiTTp5ZpgoRfQ5KRKeieD6reiQHyN%2BXcQ%2FgSPKGXH9FU1EmS1oS1DTRNpnWQ4G8kNVvJV%2FR7RUOW7nQdlmn2J8pPGC6%2Bir%2BfBsuHFA5WUrYzu11I20HEfRNd6Z423Tk1RW4rTIqM%2F%2F2gx3afLfkCvh6qSR3rTdMbsG0qPRU7qJ8gP6jeO9HTZZK8i8LOhlfVhEkG8jfXYusNIoj1PpQVj7Y7U7ZkgIxsXjmgLq%2FzkmkimqR2zplrwFK6o02aWfmFSYfQz0tSQdKPHIEFYbogkBRl9YiNO6wQF0aZADAypo8oPbA0ySWb0jqHAUZ7R16VvCT%2FX714XDcKZMAyFmmmEEe8T53TKZ%2BtH1FZ4V6SpyHjbC8Tot088SaS6Qd7Sdu3jNTF1rgMVgGdO0yEPf80G%2BSbU759CTswtO28CpQ5BLObHMJ9uDxa0AlU5JbeynRijNEpr6JMm2a3xZMS8GOg8vjFFZTL3u%2F710NyOIEUU4TyUAhVMrjZHptmV5Fv9wY5CBiIyChGUgI2GRjC709LJBjqkAWuyajpnXHHkQh7j5EGrJy05FLnF4OVKr55lvWsSAKVEZCPr1qldCC%2FdK%2FZBjmR%2FWtD%2FQcWQKO0Ab14JyC3Q%2B4HFB%2BZGgD4r9nGxrt7ZUUCqXXKLyqbMpg410VSMRkCeZ6YTBNSQq3lttaAvyhnbGszpgBPGH4om4qlsDpo3DNw1hJzaVtuY%2BhrA4lzLQqSwZ%2Ft9NGobNlffCw2J3inlNFn%2FISUp&X-Amz-Signature=ff42d12c35f18d49545b939272bf8e3be1c721507a3b0072a05e83a2adad202a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFCPBZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdZLYO3qqxXCeI5rmE%2F0sE0NuNdAdItIM%2FgQLyc%2BLziwIhAIY0F2VMQtNSoqIgJ%2BkojsFCxR5vXG%2BS1oyHEsXLWdIgKv8DCH8QABoMNjM3NDIzMTgzODA1IgxohfvyUgoLZpOKQvAq3AMnnpePcK%2BkZ1i2rV%2FVX77O4VpFdUgahvN%2FZXeHH%2F1hRVVA7XVRasR7sdaN%2FAG7Dw8YpB468FiAxqajvmVKl3XBnie5GrsO07Q9qSZW7SAyBuCmiTTp5ZpgoRfQ5KRKeieD6reiQHyN%2BXcQ%2FgSPKGXH9FU1EmS1oS1DTRNpnWQ4G8kNVvJV%2FR7RUOW7nQdlmn2J8pPGC6%2Bir%2BfBsuHFA5WUrYzu11I20HEfRNd6Z423Tk1RW4rTIqM%2F%2F2gx3afLfkCvh6qSR3rTdMbsG0qPRU7qJ8gP6jeO9HTZZK8i8LOhlfVhEkG8jfXYusNIoj1PpQVj7Y7U7ZkgIxsXjmgLq%2FzkmkimqR2zplrwFK6o02aWfmFSYfQz0tSQdKPHIEFYbogkBRl9YiNO6wQF0aZADAypo8oPbA0ySWb0jqHAUZ7R16VvCT%2FX714XDcKZMAyFmmmEEe8T53TKZ%2BtH1FZ4V6SpyHjbC8Tot088SaS6Qd7Sdu3jNTF1rgMVgGdO0yEPf80G%2BSbU759CTswtO28CpQ5BLObHMJ9uDxa0AlU5JbeynRijNEpr6JMm2a3xZMS8GOg8vjFFZTL3u%2F710NyOIEUU4TyUAhVMrjZHptmV5Fv9wY5CBiIyChGUgI2GRjC709LJBjqkAWuyajpnXHHkQh7j5EGrJy05FLnF4OVKr55lvWsSAKVEZCPr1qldCC%2FdK%2FZBjmR%2FWtD%2FQcWQKO0Ab14JyC3Q%2B4HFB%2BZGgD4r9nGxrt7ZUUCqXXKLyqbMpg410VSMRkCeZ6YTBNSQq3lttaAvyhnbGszpgBPGH4om4qlsDpo3DNw1hJzaVtuY%2BhrA4lzLQqSwZ%2Ft9NGobNlffCw2J3inlNFn%2FISUp&X-Amz-Signature=59265a69280c08d60319621a5881d488bab320ac6ede2a88cecd2c8850535e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

