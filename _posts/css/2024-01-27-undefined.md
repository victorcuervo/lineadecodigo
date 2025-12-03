---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQT3KQS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC9vQkDwxirQnVUE9M8a7beKDmoIKhEmIUOndYqwnWz9wIhAMTZUO%2Faq6KjS2BBf8R4toaBYKeS2LLRkmgGVAVLI%2F3yKv8DCCgQABoMNjM3NDIzMTgzODA1IgyLzHGBlzccmSq%2Bpfsq3AMMzTNDevMZuKphi3C9f9VGfpKgUtqoXcg95IWA5oHMX8pAihW%2FIzsIsAeVNfEYk6nNZWZlGSDAXikclmtyy%2FlekRoUU7IZY42F30Wiu%2FLZwRDMSYe0z%2Ff4d%2FkjNC71aDXpcUhZh3slDYE%2FJas%2F%2Fku8URY6gdC6mKE5Olrl3GYo8TC5iTx2YaAmw%2FMOzzW84GXJND6vMjyrnJvfNQgofJhP70y579prqxYs5XoFQOxYuW4sX6M9lIJUEpXYKePyjdWdOy%2BkG1Wzrj5ZDiUlKJp3bx1FsOkDxWyKEhnZV0O2xiYRlKrfxjCevrl0pVZzOjs4LoHO9EMkb9xF9h8RRkOfgpD%2FKJX15Oe3KVTe0prOvehm8A5MZ2QtHuWGWuN5DgKqH2NYxzGhb7h48g98CwQKeG4sogLmqLdmkrqbDavxgKTEO8OvVuUzeYftC41hFD%2BlUVrpddtJbXqBK28qyqEjn7PwhwX%2BK0stsgqOy0rBajpbSnL0JfpE2ogkcrGdHJIDLMgNyQUGWmFJ2FFBkUoAA4pL6POyi0fzjimTXUpw9Jo%2BgdOT37C28wN9nUz93B7JtI0WxFPyPooUrRDKLljnPpA5ZbDEqAjLjpX5Xv%2Fyg3urF464sym39B0PTjCyub%2FJBjqkAVLZ2aaBfbTpTss3VLcHV9b8VF9wYYw4r4zDIh%2F43ARIjmdWVwwtH22XRe%2BoIfGaNYTydD4Wu%2Fn7tjI7mpogYCGTvTGGdCbB75PR36ThvI5tzXVQFkoruZ7DmKVqkiJiVkBr0U6FBqpijU4Zks4nUkaPA%2BwuNnmIt3bvVt%2BhBWYBeGVPccYMFDiZm5%2FcCQSmEg0GSB%2FSCzL%2FJ7M%2B3IoGTYk1OQvB&X-Amz-Signature=81e048d4ab40d19aa15815cc78df48f3934d8ff155816a9fead2ad3de2524816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQT3KQS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC9vQkDwxirQnVUE9M8a7beKDmoIKhEmIUOndYqwnWz9wIhAMTZUO%2Faq6KjS2BBf8R4toaBYKeS2LLRkmgGVAVLI%2F3yKv8DCCgQABoMNjM3NDIzMTgzODA1IgyLzHGBlzccmSq%2Bpfsq3AMMzTNDevMZuKphi3C9f9VGfpKgUtqoXcg95IWA5oHMX8pAihW%2FIzsIsAeVNfEYk6nNZWZlGSDAXikclmtyy%2FlekRoUU7IZY42F30Wiu%2FLZwRDMSYe0z%2Ff4d%2FkjNC71aDXpcUhZh3slDYE%2FJas%2F%2Fku8URY6gdC6mKE5Olrl3GYo8TC5iTx2YaAmw%2FMOzzW84GXJND6vMjyrnJvfNQgofJhP70y579prqxYs5XoFQOxYuW4sX6M9lIJUEpXYKePyjdWdOy%2BkG1Wzrj5ZDiUlKJp3bx1FsOkDxWyKEhnZV0O2xiYRlKrfxjCevrl0pVZzOjs4LoHO9EMkb9xF9h8RRkOfgpD%2FKJX15Oe3KVTe0prOvehm8A5MZ2QtHuWGWuN5DgKqH2NYxzGhb7h48g98CwQKeG4sogLmqLdmkrqbDavxgKTEO8OvVuUzeYftC41hFD%2BlUVrpddtJbXqBK28qyqEjn7PwhwX%2BK0stsgqOy0rBajpbSnL0JfpE2ogkcrGdHJIDLMgNyQUGWmFJ2FFBkUoAA4pL6POyi0fzjimTXUpw9Jo%2BgdOT37C28wN9nUz93B7JtI0WxFPyPooUrRDKLljnPpA5ZbDEqAjLjpX5Xv%2Fyg3urF464sym39B0PTjCyub%2FJBjqkAVLZ2aaBfbTpTss3VLcHV9b8VF9wYYw4r4zDIh%2F43ARIjmdWVwwtH22XRe%2BoIfGaNYTydD4Wu%2Fn7tjI7mpogYCGTvTGGdCbB75PR36ThvI5tzXVQFkoruZ7DmKVqkiJiVkBr0U6FBqpijU4Zks4nUkaPA%2BwuNnmIt3bvVt%2BhBWYBeGVPccYMFDiZm5%2FcCQSmEg0GSB%2FSCzL%2FJ7M%2B3IoGTYk1OQvB&X-Amz-Signature=882b62aaeb8ae911e4e66c61497bca51e34eeb0bdb6eff151829f302eedb9951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

