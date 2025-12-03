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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFFDF2R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCl4fcHif7irPKo88dtg9FvEO5ASDCr0Cj6O88zZCuI6AIhALTWkieECbIBQbqmAzeK7pU1QG87plIZ%2FLihtyWnDEYXKv8DCCIQABoMNjM3NDIzMTgzODA1IgxNuOX40mJCvGX6qasq3AP3nns5XGvl6bay9qVjJfb4KhQTCxx93M%2ByEdRqsclWooakXyD1ZUZ32aGBUQFIwtEaeyq4UzdnAvDVb1Wvk3jZESGYm2Mf2hbLvw41TqOzjmsGLNKQn5uAE3T16rx2dmj34VE891hahlkC9bVJxRWFANJSabPnCwb%2FM0FmP0omi%2F97jYpKXzEhuEGRSlqTsd%2BzLrI6Ddvit81act3rTTFZz%2F70pjkB2OMO4%2BShvubDRRkv3cNzaQ0S5cSkqbKY2bjfP3aKdpwMI5MbnqRu4ORfJXO2xIFaT9fZcYzxqEVCjmjbOY%2F3vX%2B1c7tjPc%2FGk4WnhjVBRDCrtusNEULeWRwrJiwP6ZTj0MLOQ2jirMr8ltJ0ZGbvDFD5rInZzKB89i78ndxQQk5u%2Fn1Sy0tOlfVXXNVo5ZgJAEnLde89lkzIbIdCKAmD7cYVIL8Z%2FLsyJqviCxF6EeyqmDBz24zK3SuEAlMPJYvEPICOaPC8%2FBiemntgRZA9fi5yo6Z%2FP6tpCvwLiqMhNB7XmpUDBMemC53IvfPWPEsmuz%2F9kLebjLFAxWAx0isB3tVUG87z2hTfAU0o8PSCzOX9rWYhzWqmMVw5n%2FZyiqEwBjkrTIYp2tSASjwVsl1GqnX55twIejDklb7JBjqkATeKIwAbDGRbmMGDxBGAxpjEgcLNWRKapLn4GvH8Cu81yEhNXY4CxcxtsUJ%2FXODCP5s%2BMQdbbo8SMIG9y%2BlgE5YlVvLyzdC8aL6kWzo7RJUHtLNdTFgYkDAlkt1%2Bah5OGv96f37pyS7win35pmZOdKCYELlMe3nkWP2%2F9DMv7anEISgcrvqFivCL5WsubduNTYAtJrS2KGQECAhKMR9DeMsKDEsS&X-Amz-Signature=996a1a871a1ed66e3cddf561811429dae149dff4f78a062cef541540e0fabdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFFDF2R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCl4fcHif7irPKo88dtg9FvEO5ASDCr0Cj6O88zZCuI6AIhALTWkieECbIBQbqmAzeK7pU1QG87plIZ%2FLihtyWnDEYXKv8DCCIQABoMNjM3NDIzMTgzODA1IgxNuOX40mJCvGX6qasq3AP3nns5XGvl6bay9qVjJfb4KhQTCxx93M%2ByEdRqsclWooakXyD1ZUZ32aGBUQFIwtEaeyq4UzdnAvDVb1Wvk3jZESGYm2Mf2hbLvw41TqOzjmsGLNKQn5uAE3T16rx2dmj34VE891hahlkC9bVJxRWFANJSabPnCwb%2FM0FmP0omi%2F97jYpKXzEhuEGRSlqTsd%2BzLrI6Ddvit81act3rTTFZz%2F70pjkB2OMO4%2BShvubDRRkv3cNzaQ0S5cSkqbKY2bjfP3aKdpwMI5MbnqRu4ORfJXO2xIFaT9fZcYzxqEVCjmjbOY%2F3vX%2B1c7tjPc%2FGk4WnhjVBRDCrtusNEULeWRwrJiwP6ZTj0MLOQ2jirMr8ltJ0ZGbvDFD5rInZzKB89i78ndxQQk5u%2Fn1Sy0tOlfVXXNVo5ZgJAEnLde89lkzIbIdCKAmD7cYVIL8Z%2FLsyJqviCxF6EeyqmDBz24zK3SuEAlMPJYvEPICOaPC8%2FBiemntgRZA9fi5yo6Z%2FP6tpCvwLiqMhNB7XmpUDBMemC53IvfPWPEsmuz%2F9kLebjLFAxWAx0isB3tVUG87z2hTfAU0o8PSCzOX9rWYhzWqmMVw5n%2FZyiqEwBjkrTIYp2tSASjwVsl1GqnX55twIejDklb7JBjqkATeKIwAbDGRbmMGDxBGAxpjEgcLNWRKapLn4GvH8Cu81yEhNXY4CxcxtsUJ%2FXODCP5s%2BMQdbbo8SMIG9y%2BlgE5YlVvLyzdC8aL6kWzo7RJUHtLNdTFgYkDAlkt1%2Bah5OGv96f37pyS7win35pmZOdKCYELlMe3nkWP2%2F9DMv7anEISgcrvqFivCL5WsubduNTYAtJrS2KGQECAhKMR9DeMsKDEsS&X-Amz-Signature=e801cf396554e294b3054e1d7f04cf69c7ba035ea336f519c2a0b2ab17123b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

