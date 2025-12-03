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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3TY667%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCmkXNAIHgYrjht2MLkma0lyNSnTHQ7J0h%2FGnBOUCR9kQIgEH4FCwHvqH01JeRuCFIza5P%2F9rfHHZkFsN6PbyJLi%2FYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAiQZOqLbWsBlZk7rSrcA%2BJXZ59pKrsksY3SPzSF%2FIFhO7jOV6JUAiwOvZU911OW3LpCFaSmvW%2FJxkGVLdSw9R2W53icqv3Ip7cbjxwOTDgHqHNLu6OAE%2B0L2i5QrJEjXOp6UCqrolGqb5piG%2BqOZAxhZfFaSpsECV3KYV3YyAh9usGyFjRU7FEzzg2RE%2FIsnANOS6sC175%2BpI2qO6otz2Jx7HX8Bwc9cyxmdbKIBHfBxC2JsDTGysYxv4JiGOJV%2Bsy6J5EFW4jkPGAxLhIsjc4yLy4zK7bgE0jB3B%2BIiHbUX5ShEBnem7db5UD7u%2FnTgzF3VubC%2FLaZU8GV296IuiRYz1T%2FEso7Vb8yzOTKgnbYpbFuxrO4PzIadfXquwKV2VB9X2%2Bii5zz%2B1WGb5pp9RFoOPFAb7R9eMMM%2BRJK6ejqmI%2BkAREivyGCkRoSnKzlnfFKz4KXPLslwEO2uFv1ttVHSfoJBNn6IsnI4NwICdwO06XfpyHmHmb1I7h%2FM4Um88tFVieH3EE8b8oB2Ut7YpHhsJirU9SlDz0PrfUGz55zZWql3jg1u2Li%2BNo3md247MkYrPtYu6j4Wrq5HlSV8mnq98a2LM7%2BQ%2FYpEqQlEeXPgLOYNPkvxX9%2BVjj3r%2ButGRq7f7%2BPQdmPKX6lMJWuwMkGOqUBujsMMGvkGIYOVNz430RqBscnx7%2BS6b7VjYDBf1NsDrQzbla%2FoGOijE3Gh2BEVyD6tcRm2Fja7uA5umBvhwBYlKYG8gVQFYhmgNqd%2F3Pa1JkabEag8SnJO4ZY3fmAHAA7yl%2BeCzSTZi48UKiF5KeJjJUwe85qzYYX0%2BFO6SlzPmQU8TnEfCb%2FtUPBGQXtRfQddHkBjsZRryCr2Ng4RJ%2Fj1q9j5ojX&X-Amz-Signature=476861e16ed2a8285fea95e49cb606ec9e16275644cc4875bf9fd8c38f357400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3TY667%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCmkXNAIHgYrjht2MLkma0lyNSnTHQ7J0h%2FGnBOUCR9kQIgEH4FCwHvqH01JeRuCFIza5P%2F9rfHHZkFsN6PbyJLi%2FYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAiQZOqLbWsBlZk7rSrcA%2BJXZ59pKrsksY3SPzSF%2FIFhO7jOV6JUAiwOvZU911OW3LpCFaSmvW%2FJxkGVLdSw9R2W53icqv3Ip7cbjxwOTDgHqHNLu6OAE%2B0L2i5QrJEjXOp6UCqrolGqb5piG%2BqOZAxhZfFaSpsECV3KYV3YyAh9usGyFjRU7FEzzg2RE%2FIsnANOS6sC175%2BpI2qO6otz2Jx7HX8Bwc9cyxmdbKIBHfBxC2JsDTGysYxv4JiGOJV%2Bsy6J5EFW4jkPGAxLhIsjc4yLy4zK7bgE0jB3B%2BIiHbUX5ShEBnem7db5UD7u%2FnTgzF3VubC%2FLaZU8GV296IuiRYz1T%2FEso7Vb8yzOTKgnbYpbFuxrO4PzIadfXquwKV2VB9X2%2Bii5zz%2B1WGb5pp9RFoOPFAb7R9eMMM%2BRJK6ejqmI%2BkAREivyGCkRoSnKzlnfFKz4KXPLslwEO2uFv1ttVHSfoJBNn6IsnI4NwICdwO06XfpyHmHmb1I7h%2FM4Um88tFVieH3EE8b8oB2Ut7YpHhsJirU9SlDz0PrfUGz55zZWql3jg1u2Li%2BNo3md247MkYrPtYu6j4Wrq5HlSV8mnq98a2LM7%2BQ%2FYpEqQlEeXPgLOYNPkvxX9%2BVjj3r%2ButGRq7f7%2BPQdmPKX6lMJWuwMkGOqUBujsMMGvkGIYOVNz430RqBscnx7%2BS6b7VjYDBf1NsDrQzbla%2FoGOijE3Gh2BEVyD6tcRm2Fja7uA5umBvhwBYlKYG8gVQFYhmgNqd%2F3Pa1JkabEag8SnJO4ZY3fmAHAA7yl%2BeCzSTZi48UKiF5KeJjJUwe85qzYYX0%2BFO6SlzPmQU8TnEfCb%2FtUPBGQXtRfQddHkBjsZRryCr2Ng4RJ%2Fj1q9j5ojX&X-Amz-Signature=8d644ad56a2e2864e7c7f92ae0b526c529d8ae904acfbe9874684c6f01d68bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

