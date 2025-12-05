---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEH2YWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqtD9FCTRubOekKgYPe42I4sa9Rn4KAtZHzbXXgLnAgIhAI1d8wv9jpW1FYTm0QscDPNPX0DRK7XftP2%2B2IKlzoxgKv8DCE8QABoMNjM3NDIzMTgzODA1IgyY2jquK24REhV%2Buooq3APTZBIo%2FkZbGfCUwrlFndPawjPJLAH%2FamyVFud%2BFjx4WSrdWP4r4diV3xgxNnC9PB0kK%2BLrfK68zXRqqJsS0CWsldOAuFiYQOhxFL1%2BTP6ZOQM9d7EF1LNzupqickiJhtFI5%2FSsfF%2BH4mTL%2B%2F3iQOkNayBJFZGp%2F5VOM8L8KkC9d3QaqcMZtqxJskKctXeTTa9JhuG2%2FjJOd3ysWYNnri4ObToUSj1ZdXuLCbxm6QLvQJAxYP2nPYKklPjAsY97F9cnaXcDQxHOyDwpIJMtlF0s6IZJlOVLslF8kIujUmeCTs0TF%2Bqu79TaKFBObiDjEyuqlc6GM24VTmlu9UGhMjVzfotPyl9nYD2mlhLw5SqZUTl470K%2FOHJk%2BswgKnY%2BB5KjVxSJtIHosjhOiZ5MqLi5UVKJ6nVg%2BipTWYTZkT0yFAWowfilBCbi4o9V1XI6h9LRZGbBf8qfj12TD444p%2BdeSs6Q3CBHSfd26yrEfLKMCCVlqbJOH7MickKw1BLmrNBFONejsnGPe0mOGnqeqIoVQVf3b%2F89%2FC1zdQghTGTkiIjV5zcdEd9xc2F5IBDJuRiLS%2BZq0yHN256OeRf1aLhCCDlDno8aBRi%2F5VOAxKZSdAwHlhHDngQeQQxIrTCqjMjJBjqkAWC1RX0ne8FRJUS6s3xvpQi5jl4VmzqOxyAguZrJE%2F0IK9OHyL%2Ft9qY50hDZ2rwjSFRHyVHci7VFRJ9qJBWUgfUOTZXwbzGHTkig3Hacn8C5Rux8Y%2F7ujW8bK2prYTv2yv%2F9zLyOTdk8h9C8uYr50s3pMjzJQHWzlX7mE960hpxhBHfO0aG4EDXMIF8shlfk8m4YjADDnpT3FvowZM%2FBbqr7YTER&X-Amz-Signature=27ad0e3a82af52816e85121ed33893856a77b5ed6b545d2a1c62bc3abc3790d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEH2YWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqtD9FCTRubOekKgYPe42I4sa9Rn4KAtZHzbXXgLnAgIhAI1d8wv9jpW1FYTm0QscDPNPX0DRK7XftP2%2B2IKlzoxgKv8DCE8QABoMNjM3NDIzMTgzODA1IgyY2jquK24REhV%2Buooq3APTZBIo%2FkZbGfCUwrlFndPawjPJLAH%2FamyVFud%2BFjx4WSrdWP4r4diV3xgxNnC9PB0kK%2BLrfK68zXRqqJsS0CWsldOAuFiYQOhxFL1%2BTP6ZOQM9d7EF1LNzupqickiJhtFI5%2FSsfF%2BH4mTL%2B%2F3iQOkNayBJFZGp%2F5VOM8L8KkC9d3QaqcMZtqxJskKctXeTTa9JhuG2%2FjJOd3ysWYNnri4ObToUSj1ZdXuLCbxm6QLvQJAxYP2nPYKklPjAsY97F9cnaXcDQxHOyDwpIJMtlF0s6IZJlOVLslF8kIujUmeCTs0TF%2Bqu79TaKFBObiDjEyuqlc6GM24VTmlu9UGhMjVzfotPyl9nYD2mlhLw5SqZUTl470K%2FOHJk%2BswgKnY%2BB5KjVxSJtIHosjhOiZ5MqLi5UVKJ6nVg%2BipTWYTZkT0yFAWowfilBCbi4o9V1XI6h9LRZGbBf8qfj12TD444p%2BdeSs6Q3CBHSfd26yrEfLKMCCVlqbJOH7MickKw1BLmrNBFONejsnGPe0mOGnqeqIoVQVf3b%2F89%2FC1zdQghTGTkiIjV5zcdEd9xc2F5IBDJuRiLS%2BZq0yHN256OeRf1aLhCCDlDno8aBRi%2F5VOAxKZSdAwHlhHDngQeQQxIrTCqjMjJBjqkAWC1RX0ne8FRJUS6s3xvpQi5jl4VmzqOxyAguZrJE%2F0IK9OHyL%2Ft9qY50hDZ2rwjSFRHyVHci7VFRJ9qJBWUgfUOTZXwbzGHTkig3Hacn8C5Rux8Y%2F7ujW8bK2prYTv2yv%2F9zLyOTdk8h9C8uYr50s3pMjzJQHWzlX7mE960hpxhBHfO0aG4EDXMIF8shlfk8m4YjADDnpT3FvowZM%2FBbqr7YTER&X-Amz-Signature=d09b479c5321a14c3d86e04d49d7c73d59acd320bdb9d1a18d27c9b0d86b5a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

