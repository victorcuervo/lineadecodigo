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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5NJ5CU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCBMn9CPD4GS0B5ONC3zJ%2FmdYdcWcx8JvWYYYG0p1y%2FIwIhANwp5bdVX4i72Z5DwW23yiReNvxga2sBUmQb6wE0noEfKv8DCDEQABoMNjM3NDIzMTgzODA1IgxLT6PrtDW4k42xViwq3APSRZIKIigJzHgw7rQIjw4J6r6Jy8LWY3VOsx9hUOCAQhi2S0UjnhBkWlAyeb5lCD55Ue9xNYQ4vhG0GD3WntOkWpCKOShoDxfzLKt9n%2F0RdHpTv8pNh45DJeR%2FsEJLCo5%2BaUhyab%2F1jeoSE0HteMbMugqQURzduM6c9zTQxO5eFCvhD4vybnV6nLDLHArYCvFmplc2J%2Fv5EYIc2xWkWHDtatwWR2qYohe5uY9bv05%2BE6o7VzKCvW7xxzPkKC6AiAPZWd740bMqwRaRPNm49e5x4%2BKIJKjXJ66GlGnRSoEbExfMHnU560zX9ft7KT%2FCSWziQGy7BB4bPXbqBnq3wt%2BT7eFx96y5MV03CBVcIHJagOGo4EDFxwBPXOyg7GYk9mPd0J1cNdeOgn60QHsdshf71v7%2Fag2A65ERRo7LvP8fzcVanljjbJ9sbf2NdVtmIwD1NWmbfdq8l61xZR1kgKkZ2WlEu5OlxfiPvbdjKzAHNDaYHiBRbyQd5C7JfUuj4R5%2BC0BR6Wsa4ccpkDdtDVu5VPR0zGdL0soeQxSZ1e6VNa%2B7b%2Bm3LSwGxEJ9gY9DrhAFVBTb5FrgXgKPwzKfnaMPkXEUnZ1iCXQbERwTdV3mMb5C0LYbsgUoe1KURzD6wMHJBjqkAT2HLpcsQGAke2lOIO5md4ttS6r8jLXTpeBmf4cWtCCVKVAscel74MD%2BPnTVMuQDzZlD%2F6akcbnXgNBjgGnwugu2NLWjdQqcrgP1ni40X7PdpXtjacj8JLKPrLu%2FhL%2FkthaO9GDqo1uRYIvskgF6OdKRDWPbYXU5o4hjRTbXD3cd7teAq9ZX4%2BcwIk%2BkB4ziFUksw1dCggJSIbhNzt%2FskUJovemV&X-Amz-Signature=e9b980af528b797000cf2caa5c2bc626b3582efa28bc8210b5d206ea45eb84a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5NJ5CU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCBMn9CPD4GS0B5ONC3zJ%2FmdYdcWcx8JvWYYYG0p1y%2FIwIhANwp5bdVX4i72Z5DwW23yiReNvxga2sBUmQb6wE0noEfKv8DCDEQABoMNjM3NDIzMTgzODA1IgxLT6PrtDW4k42xViwq3APSRZIKIigJzHgw7rQIjw4J6r6Jy8LWY3VOsx9hUOCAQhi2S0UjnhBkWlAyeb5lCD55Ue9xNYQ4vhG0GD3WntOkWpCKOShoDxfzLKt9n%2F0RdHpTv8pNh45DJeR%2FsEJLCo5%2BaUhyab%2F1jeoSE0HteMbMugqQURzduM6c9zTQxO5eFCvhD4vybnV6nLDLHArYCvFmplc2J%2Fv5EYIc2xWkWHDtatwWR2qYohe5uY9bv05%2BE6o7VzKCvW7xxzPkKC6AiAPZWd740bMqwRaRPNm49e5x4%2BKIJKjXJ66GlGnRSoEbExfMHnU560zX9ft7KT%2FCSWziQGy7BB4bPXbqBnq3wt%2BT7eFx96y5MV03CBVcIHJagOGo4EDFxwBPXOyg7GYk9mPd0J1cNdeOgn60QHsdshf71v7%2Fag2A65ERRo7LvP8fzcVanljjbJ9sbf2NdVtmIwD1NWmbfdq8l61xZR1kgKkZ2WlEu5OlxfiPvbdjKzAHNDaYHiBRbyQd5C7JfUuj4R5%2BC0BR6Wsa4ccpkDdtDVu5VPR0zGdL0soeQxSZ1e6VNa%2B7b%2Bm3LSwGxEJ9gY9DrhAFVBTb5FrgXgKPwzKfnaMPkXEUnZ1iCXQbERwTdV3mMb5C0LYbsgUoe1KURzD6wMHJBjqkAT2HLpcsQGAke2lOIO5md4ttS6r8jLXTpeBmf4cWtCCVKVAscel74MD%2BPnTVMuQDzZlD%2F6akcbnXgNBjgGnwugu2NLWjdQqcrgP1ni40X7PdpXtjacj8JLKPrLu%2FhL%2FkthaO9GDqo1uRYIvskgF6OdKRDWPbYXU5o4hjRTbXD3cd7teAq9ZX4%2BcwIk%2BkB4ziFUksw1dCggJSIbhNzt%2FskUJovemV&X-Amz-Signature=c12a8e2bfd29e1d5845f7879660e2cae1c326ecafed98986754bb07665385037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

