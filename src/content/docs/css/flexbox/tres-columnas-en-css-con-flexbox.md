---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWCB6UO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhbs5yjwOA1I5AeZgadAdfxKORLHlib10cIC56WAPyiwIhAPlhhlgcXJqmIgXQ3nE%2FIAodvKDTlcj%2BXsDW10rEeayiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9yeF1QsWORE2yu8q3APj7NGG5IA7aU0cx%2Fn186XEkIQLoXWlv2Ps5DQHERgG0Tc3WAGMPa7TaZfp1PqcTQylGiRBWa5Jbw4L1GE7jmGwBDAZ4WVNetxIJ6cVR73Tz1kJFTBD5Sr%2FTUPskV4xVKb4YA1x52TlVyLOespH8etxkGAowSM6gfq%2FRbQpzayMAdKCjA0igkIzCQb%2F7oiVVtQwoybv9SHS4MRuq5BYYmYLoo7Mxz%2Fga0JdYLhRKl%2F2fZhXXrn2sbkkdof60BDJR6qX9rxuTWf1v4kSnemSux3%2BgP7wmu2H%2BYJSn9H76clwBtnwC7nA2PuCqqk4EbILhBSric98X3xU8kbS8kJuzbkW3seM4GcGBndZwpeNwqAbhy1z1j%2FT3XxJ2LM8H1%2BsqQGhBPSkbPXHOZsx7qwUt9Lu9646ftHB3s4WjKkCm8Gan62znXFeS6ZVXEgGt1SD57ch2buqxgA7JBJbUpQN4MFDhy4%2F37T4G7tt9GP%2Flq4TGRXWfNzqNpmsxh54CBtdVjLDqXcNj%2BAdR%2BWsrcoqLCXC7IyjSy6dmhd7oJAq3gpu01d55zUCU3AHyqaiDRW9%2Fcq7Poe22Io7r7OJ7qd%2Fu2aIloPvDdvnvgtYQ2pck%2Fr3bdx8GWN6lLk8nGb7IjCFwtvJBjqkAXbsdJoC8dkTJY89ZOkJU8qG7C635rVzzT8UmLjQIehFf4lGwb4da1QPg%2BdV34zJ%2B4evGKEUY2VLO%2BMVnynj9hCPaW7mU4WtyPVGg8qjKfImXxWm4A4b8prcwRnAiLbKN9VB%2BmoJfnbp%2B%2FmbMAmbMcuhOY4XrkQDmr9nRs%2B3rOX3xVfWYBQ0qu%2B6dd%2Fwn8PRlAayCM9HXG3AlNFl0%2B58jJ%2BXkl8N&X-Amz-Signature=193d02adbc3de89ecfe8080f6018ca5145dfc5696b6d3fc9ef3fdd0aba1be6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWCB6UO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhbs5yjwOA1I5AeZgadAdfxKORLHlib10cIC56WAPyiwIhAPlhhlgcXJqmIgXQ3nE%2FIAodvKDTlcj%2BXsDW10rEeayiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9yeF1QsWORE2yu8q3APj7NGG5IA7aU0cx%2Fn186XEkIQLoXWlv2Ps5DQHERgG0Tc3WAGMPa7TaZfp1PqcTQylGiRBWa5Jbw4L1GE7jmGwBDAZ4WVNetxIJ6cVR73Tz1kJFTBD5Sr%2FTUPskV4xVKb4YA1x52TlVyLOespH8etxkGAowSM6gfq%2FRbQpzayMAdKCjA0igkIzCQb%2F7oiVVtQwoybv9SHS4MRuq5BYYmYLoo7Mxz%2Fga0JdYLhRKl%2F2fZhXXrn2sbkkdof60BDJR6qX9rxuTWf1v4kSnemSux3%2BgP7wmu2H%2BYJSn9H76clwBtnwC7nA2PuCqqk4EbILhBSric98X3xU8kbS8kJuzbkW3seM4GcGBndZwpeNwqAbhy1z1j%2FT3XxJ2LM8H1%2BsqQGhBPSkbPXHOZsx7qwUt9Lu9646ftHB3s4WjKkCm8Gan62znXFeS6ZVXEgGt1SD57ch2buqxgA7JBJbUpQN4MFDhy4%2F37T4G7tt9GP%2Flq4TGRXWfNzqNpmsxh54CBtdVjLDqXcNj%2BAdR%2BWsrcoqLCXC7IyjSy6dmhd7oJAq3gpu01d55zUCU3AHyqaiDRW9%2Fcq7Poe22Io7r7OJ7qd%2Fu2aIloPvDdvnvgtYQ2pck%2Fr3bdx8GWN6lLk8nGb7IjCFwtvJBjqkAXbsdJoC8dkTJY89ZOkJU8qG7C635rVzzT8UmLjQIehFf4lGwb4da1QPg%2BdV34zJ%2B4evGKEUY2VLO%2BMVnynj9hCPaW7mU4WtyPVGg8qjKfImXxWm4A4b8prcwRnAiLbKN9VB%2BmoJfnbp%2B%2FmbMAmbMcuhOY4XrkQDmr9nRs%2B3rOX3xVfWYBQ0qu%2B6dd%2Fwn8PRlAayCM9HXG3AlNFl0%2B58jJ%2BXkl8N&X-Amz-Signature=860c31fdde3ef6b5a14d6a914d980685fa6f772cb30f4eaa3f92748bb620b31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

