---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEBIJQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr%2FLxkqpW1DBEZaSWlGxBT9zltMyGDE9NZrudXzLnuCAiEAmH1Uk1ubqBR%2BptK1XXKjmeVLkfz02YEVozVf5ktJUd0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqWi8j8zLxqvkcnyircA9rIiQzJlrGJA7IG4SXkDWgesLVBVt8eY99b2mHTOf9ktFId%2FcSlUNDNHDiv2kIk8CSq%2B6QJ0tGExyryhUsBdzj7P1LHU0Q6QS9telb9O0xJoDgrc9gZGiG8%2BxPrwzJLRQWHbKdBJ5YlWvzuFkPNrO95gu%2FLJW1%2BHBQscSPh206LUTfTt0F02ue%2BBrFIwrihik7Rc92w28heADKDEszERpprfkHbrn%2BXpGgno9Tuc%2BMtTU0izM%2F%2BBQEOGD2a7F1kQcu09%2BqPA%2BRbWVrPzFQCo9e0BfM6Igc7DyXqg9FQhxR%2BUkktdCNGlMWXAZZ3yJXXeG4mbE3L3ihOCdicy2k1n1GJYIL7ewA6RsmtIjh4v7P07m5nWP3kzulCraj5NDTZtps3z%2Bed0dsfP58pSWxXPt22%2F4lLuD5HHurEUVJoDLWzJrFDUz1uWb9%2B%2B1lHYWGSqVFqf408xupFg5Bx51QW21NDiXI%2FFQkVowyj3LC36SFBYcHYbQGnRWk3uKBB2prijA5aukCXTLyQH7VonW7ehvAV%2FvQ0KD0Koy7bCFu3NT5yYMNtCBPxnNCxKAMd7%2BpM5ohcmP2%2F7JsYktvWu8RhKN%2FYnpINiNGU1zGZ9Ub3kOZe6uDBa9PM9wo%2Bl3zPMIzrz8kGOqUByNp1MAlOmKPO%2FmlZPV8msswjHC2H9S4HsweqNNGRWVzx%2Bq%2B9XAAWgpqdg6OdH3gXiV3I1Enqgb4ta7QewcumLEjXn1rkT9lpICDLGgRvxUgK1wj53teNgQRFeE97uP7teXKkmutAob4YUwtJ5r1xAxrunJ4shcrS%2F7Vb0%2BrrFpIAoYEWUNnZ4FLEb4Q%2FCURr%2BRJGHsyNS3YDHnFGYLRyKmItVYtm&X-Amz-Signature=84f6a9ba035d78135a36bd321372af2f4155136790fc9496649f271e77a632a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEBIJQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr%2FLxkqpW1DBEZaSWlGxBT9zltMyGDE9NZrudXzLnuCAiEAmH1Uk1ubqBR%2BptK1XXKjmeVLkfz02YEVozVf5ktJUd0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqWi8j8zLxqvkcnyircA9rIiQzJlrGJA7IG4SXkDWgesLVBVt8eY99b2mHTOf9ktFId%2FcSlUNDNHDiv2kIk8CSq%2B6QJ0tGExyryhUsBdzj7P1LHU0Q6QS9telb9O0xJoDgrc9gZGiG8%2BxPrwzJLRQWHbKdBJ5YlWvzuFkPNrO95gu%2FLJW1%2BHBQscSPh206LUTfTt0F02ue%2BBrFIwrihik7Rc92w28heADKDEszERpprfkHbrn%2BXpGgno9Tuc%2BMtTU0izM%2F%2BBQEOGD2a7F1kQcu09%2BqPA%2BRbWVrPzFQCo9e0BfM6Igc7DyXqg9FQhxR%2BUkktdCNGlMWXAZZ3yJXXeG4mbE3L3ihOCdicy2k1n1GJYIL7ewA6RsmtIjh4v7P07m5nWP3kzulCraj5NDTZtps3z%2Bed0dsfP58pSWxXPt22%2F4lLuD5HHurEUVJoDLWzJrFDUz1uWb9%2B%2B1lHYWGSqVFqf408xupFg5Bx51QW21NDiXI%2FFQkVowyj3LC36SFBYcHYbQGnRWk3uKBB2prijA5aukCXTLyQH7VonW7ehvAV%2FvQ0KD0Koy7bCFu3NT5yYMNtCBPxnNCxKAMd7%2BpM5ohcmP2%2F7JsYktvWu8RhKN%2FYnpINiNGU1zGZ9Ub3kOZe6uDBa9PM9wo%2Bl3zPMIzrz8kGOqUByNp1MAlOmKPO%2FmlZPV8msswjHC2H9S4HsweqNNGRWVzx%2Bq%2B9XAAWgpqdg6OdH3gXiV3I1Enqgb4ta7QewcumLEjXn1rkT9lpICDLGgRvxUgK1wj53teNgQRFeE97uP7teXKkmutAob4YUwtJ5r1xAxrunJ4shcrS%2F7Vb0%2BrrFpIAoYEWUNnZ4FLEb4Q%2FCURr%2BRJGHsyNS3YDHnFGYLRyKmItVYtm&X-Amz-Signature=6ad97b78fed3a7a9531462308dedd3660cf767fc96339cb5c20ed27f805cc2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

