---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDCGRQL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4I4FSMmuXHoUIXP%2BU3GG7j76OKHgUT4PfRlj53fSEZAIhAJtFQhtU9NyC7ya%2FilCJ2mhdDGyQ%2F8UpR8bIQq7RhaHoKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnYJi8QaX32mE%2BJYkq3ANkTvkzZ4mKzWLlpN0Y0FVYdY%2BzCQC9L3s%2Fz7AgamRRcASxfwGGxwk7tGKdxvnTpdAm%2BTiquAbVQ9Ovzu4zmY9Uqf9YNoUPDh1ASdGYx8RCfpaxxYyKbEs2dcp9skUlaLMarHdSQTg3VRS7KDQNn2SvKpEqbjJln%2BqdKolWE%2BfL5FQ3U6QQF0Be435QSqspHk0rgqH44yGFUK%2BpEH7EU7VuBopDw1GiYCCDJPCyQdSyog5lOViF82rbvptslpXCjCU2NSht0r7tbpOV%2FcDh8%2FJtGrRm%2BjqU%2FdbE5n08Docdac6t8DpOHkMRHqwL5ofLzYnPBra%2BQGMTw1FgPAwfW1dIO66acHFC6kQ0Onb9W70%2FvaGMIjSOE%2Fb0F2NTYExaltn8P%2Bw3etfptJnR%2FduKY2E9F2LjDUpqumORC1gapb4%2Bs2dH6UyH4h7QX91mcqT%2BhFwsdPxB0I9OxhCcrgAJXEL89M4aahGVHtTQhbh7LpdaXaksIXfrQO2yCeNqjXe3okPefUzxWr1kVAjwF7iKU7CNoCVXDOBt6gO8tfWE7KzNP7A9FJG5RxxBXllWv5cGGzSw2YdpgaMHkhem%2B3TVdmVBt3S753rRj9fKRgg2nllt%2FbY89qaFBYFj%2FhfayzDHkMTJBjqkARDcQZVBUJ7uYjwFAneWpVx6JmYNltfFZkjT9oOPgVnzHBF76LNMra4firE5Hp8xYo3ipLyS8hIYdek2ibjoiL6AOtt32lm3a5Jwqf0TCCbsZvRrXcc9khw1ndfgL%2B5Sgr26HiqpHbAX1z3BvtQnHMSXxsVddJWiiwFROqf9Ss0bcvCxHNNVbmf6EBWWR4Y3iCUF1D5J%2B4QIN9kexEgMImbhfzi9&X-Amz-Signature=d7b68392d31d699fa9316e1605aa7c9f43debecd0ff9476b0a1a8de582f29c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDCGRQL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4I4FSMmuXHoUIXP%2BU3GG7j76OKHgUT4PfRlj53fSEZAIhAJtFQhtU9NyC7ya%2FilCJ2mhdDGyQ%2F8UpR8bIQq7RhaHoKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnYJi8QaX32mE%2BJYkq3ANkTvkzZ4mKzWLlpN0Y0FVYdY%2BzCQC9L3s%2Fz7AgamRRcASxfwGGxwk7tGKdxvnTpdAm%2BTiquAbVQ9Ovzu4zmY9Uqf9YNoUPDh1ASdGYx8RCfpaxxYyKbEs2dcp9skUlaLMarHdSQTg3VRS7KDQNn2SvKpEqbjJln%2BqdKolWE%2BfL5FQ3U6QQF0Be435QSqspHk0rgqH44yGFUK%2BpEH7EU7VuBopDw1GiYCCDJPCyQdSyog5lOViF82rbvptslpXCjCU2NSht0r7tbpOV%2FcDh8%2FJtGrRm%2BjqU%2FdbE5n08Docdac6t8DpOHkMRHqwL5ofLzYnPBra%2BQGMTw1FgPAwfW1dIO66acHFC6kQ0Onb9W70%2FvaGMIjSOE%2Fb0F2NTYExaltn8P%2Bw3etfptJnR%2FduKY2E9F2LjDUpqumORC1gapb4%2Bs2dH6UyH4h7QX91mcqT%2BhFwsdPxB0I9OxhCcrgAJXEL89M4aahGVHtTQhbh7LpdaXaksIXfrQO2yCeNqjXe3okPefUzxWr1kVAjwF7iKU7CNoCVXDOBt6gO8tfWE7KzNP7A9FJG5RxxBXllWv5cGGzSw2YdpgaMHkhem%2B3TVdmVBt3S753rRj9fKRgg2nllt%2FbY89qaFBYFj%2FhfayzDHkMTJBjqkARDcQZVBUJ7uYjwFAneWpVx6JmYNltfFZkjT9oOPgVnzHBF76LNMra4firE5Hp8xYo3ipLyS8hIYdek2ibjoiL6AOtt32lm3a5Jwqf0TCCbsZvRrXcc9khw1ndfgL%2B5Sgr26HiqpHbAX1z3BvtQnHMSXxsVddJWiiwFROqf9Ss0bcvCxHNNVbmf6EBWWR4Y3iCUF1D5J%2B4QIN9kexEgMImbhfzi9&X-Amz-Signature=b3c74f3b512ce07c89e12aa289e33e07e0b97e6f5db4933a1379b20821d43e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

