---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6FCBOJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu0qKW57pCZACftihsaeD9Oy%2Bgr8E5wLIPo0BFx9I%2B4AiBgmbH8mePzIdi4eVqHtzDRmgEewdcNyM16OSmxpCwQtir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMPJudpXZqUlxaC4rdKtwDjrpBSgOmSHbI8McZi%2F4qvgF9THHv2AZk3hqOBJPyRLr50esvHk%2F5q2xN9St%2B4QOkLV5C6Fz%2FuP5RjwM7EBYBK5EyK%2FssMRK8QYFKRCY4Yi9qe%2BnJ4AeD%2B0qUV7HSXvEKWmc0kM5k6YcuZxvmjbdCQGFrJxJyRQ0Y6HgQxndtXmcYJb8gLJXfJXP%2Fj1tGAUtGUMrlxzqHp5SktRW5uybNttja4Jkn8SCPKHjZpcaNdVpl8%2BhvZTYwGkDglpRAUBN3fVjctS12yrBIif3lF4gYgJ6oPepsKi6B8S55D5Ky0MhBK9IyZc0Wsx7RqguOBHsk8uxTgRbVNHyqRaxRjuQA5JOdUBDLl%2BYF3mI5rCwa6YvW8jCJEjStfA1qaVpbEZ7BOapIxUGRWFOj7AMdZaugLL2kN3KZiJZ1eIES%2BXToc%2B%2BZqV%2Fn54k10XMWKRwC%2FRPmKsNsY51zLkQ6BPmkiCM63BurExx%2FNOHrGfxZmLgsv4kyo72CQGTFiBby0iYcYmTt%2FqjZDhsGy48Wp%2BNeHmHjFwv7w%2F2KeLgqvWmxTnZtjSjJCzHWQ8pqcXHgC6VsFY%2FqXW%2BWsq16WLwL6DpaYWrqdUi%2BAz0jlrzSYYCL7nB1EY%2FhdKo9OxTsV4i7U78wqozIyQY6pgFulNgQYB%2BjvIkhbXKjQg956R%2BAJEAHusHLpyxwZcjuUyVaaLcok2HUZi5Hq25jrVq4%2FHJwRdht3LG96kHa9TzcmyDiUInYt6BAtnkrfgDIOKAmhAQnNAZqrTpzwUaZJZWr%2B%2FpgSZQugyiOLfV5qzr376joGVBe%2BLsCb1BdvdXJCrdwasB0PVWX3n%2BvlSL1Yo%2FXsMQ%2By5aWWvIom6qXtdSXf%2FrKRLBK&X-Amz-Signature=3f4978f42d16dd398f9b5c3986768179cb7169049e6a979e08a1dbdf3bf34b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6FCBOJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu0qKW57pCZACftihsaeD9Oy%2Bgr8E5wLIPo0BFx9I%2B4AiBgmbH8mePzIdi4eVqHtzDRmgEewdcNyM16OSmxpCwQtir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMPJudpXZqUlxaC4rdKtwDjrpBSgOmSHbI8McZi%2F4qvgF9THHv2AZk3hqOBJPyRLr50esvHk%2F5q2xN9St%2B4QOkLV5C6Fz%2FuP5RjwM7EBYBK5EyK%2FssMRK8QYFKRCY4Yi9qe%2BnJ4AeD%2B0qUV7HSXvEKWmc0kM5k6YcuZxvmjbdCQGFrJxJyRQ0Y6HgQxndtXmcYJb8gLJXfJXP%2Fj1tGAUtGUMrlxzqHp5SktRW5uybNttja4Jkn8SCPKHjZpcaNdVpl8%2BhvZTYwGkDglpRAUBN3fVjctS12yrBIif3lF4gYgJ6oPepsKi6B8S55D5Ky0MhBK9IyZc0Wsx7RqguOBHsk8uxTgRbVNHyqRaxRjuQA5JOdUBDLl%2BYF3mI5rCwa6YvW8jCJEjStfA1qaVpbEZ7BOapIxUGRWFOj7AMdZaugLL2kN3KZiJZ1eIES%2BXToc%2B%2BZqV%2Fn54k10XMWKRwC%2FRPmKsNsY51zLkQ6BPmkiCM63BurExx%2FNOHrGfxZmLgsv4kyo72CQGTFiBby0iYcYmTt%2FqjZDhsGy48Wp%2BNeHmHjFwv7w%2F2KeLgqvWmxTnZtjSjJCzHWQ8pqcXHgC6VsFY%2FqXW%2BWsq16WLwL6DpaYWrqdUi%2BAz0jlrzSYYCL7nB1EY%2FhdKo9OxTsV4i7U78wqozIyQY6pgFulNgQYB%2BjvIkhbXKjQg956R%2BAJEAHusHLpyxwZcjuUyVaaLcok2HUZi5Hq25jrVq4%2FHJwRdht3LG96kHa9TzcmyDiUInYt6BAtnkrfgDIOKAmhAQnNAZqrTpzwUaZJZWr%2B%2FpgSZQugyiOLfV5qzr376joGVBe%2BLsCb1BdvdXJCrdwasB0PVWX3n%2BvlSL1Yo%2FXsMQ%2By5aWWvIom6qXtdSXf%2FrKRLBK&X-Amz-Signature=7af1b8debaffcf0a5e235bd6c7695e28928138e4e34c97834da35d6146833499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

