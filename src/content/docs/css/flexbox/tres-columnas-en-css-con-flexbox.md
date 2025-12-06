---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5TCNMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCP5ylhl47VBBKDT3Kwr23ryE8eiIhaS8p1OGM%2BmrdbQIhANC7fysSSV%2Fqt%2FRXjnC9V2ImGfyko9hDH1wna7%2FuglmPKv8DCG4QABoMNjM3NDIzMTgzODA1IgwCyS43fjPdmHj4idYq3APff8C6DQBBf9VUfrEEIZUU%2FxrVcYeoMWI2Zl4Rz9EUKrrjhf1P2%2B9A0FJ6yfQi2SXcfyrkcnLU7n%2FM4hbfwlkqdxB48q4fn5om3lrjKMmMEusRNBnwju1eeY6dfGD3D3nzQXt7rKMhkDrqymSA339eqLJ5EwfswBqcqpMcU48n0v3buwRiCr2SfBrBtii%2BfCuEgrTloTFv1cMOPkbVq54bvrG5rOa%2B1atLCAvUIvpUMyp1EunAWNTNB0vr84Hgm6Y7s23Y5B8dCWaZL9xrCyQ7k%2FaWLGegTJJica4OWtdzELwQ0y4u%2Bn43TJs0%2FY4VlX28x2j7H2zHe0nG5fv7cwqwlNHMHVvWr0S%2BmqZOnrUa0fS0HRh5byF0jz7Tq1uMeRyC6%2FZZFwTzHWb8kthKkGYL4G3Frr4sZntdP%2FLHtBjE3RTZvk3vwdToJj7ToCrBQSiLl6FiubVqwhh26DwT5CzhJeHeYjXKoQgTBHQWUXWhfT%2BAzOXG56H%2BjgSA9pJwpJP6K8rOGeb2py2iNhWq7bAgNC50Fh9cPk%2Fr%2BiSxD6If6%2FqfAPXNg8l%2B%2BEbVsIc6ezNxgDkLa8rDASorbEzBY6hC4feMVdUiGntQY4FhhF3koA9xObWWzCxO88yTaTCe%2Fc7JBjqkAWS7HLzbAJ5uOVzjkcpODSbrIC9g3rrQ7nuunCwFMHXXZx0nPI9o92htijUN4Zky0S9OPll5dlDkTpZ46uauRkcSYQkLNwMjd3yB4TEm%2BRzRZ7SeZO8QOX4Kw9msMwN3qG0o2ssz917HnqSvil5DEKmG9vspo0WSnSZvuUpp12kRlXLixEakPF9kdIE9r%2Finh1kQqCUNDh9z20GZSelzsy5NAL2n&X-Amz-Signature=e1bdca6031c7fb74761e4ffda79ebf1723f0d025bad5bb1c488fc065525e53c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5TCNMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCP5ylhl47VBBKDT3Kwr23ryE8eiIhaS8p1OGM%2BmrdbQIhANC7fysSSV%2Fqt%2FRXjnC9V2ImGfyko9hDH1wna7%2FuglmPKv8DCG4QABoMNjM3NDIzMTgzODA1IgwCyS43fjPdmHj4idYq3APff8C6DQBBf9VUfrEEIZUU%2FxrVcYeoMWI2Zl4Rz9EUKrrjhf1P2%2B9A0FJ6yfQi2SXcfyrkcnLU7n%2FM4hbfwlkqdxB48q4fn5om3lrjKMmMEusRNBnwju1eeY6dfGD3D3nzQXt7rKMhkDrqymSA339eqLJ5EwfswBqcqpMcU48n0v3buwRiCr2SfBrBtii%2BfCuEgrTloTFv1cMOPkbVq54bvrG5rOa%2B1atLCAvUIvpUMyp1EunAWNTNB0vr84Hgm6Y7s23Y5B8dCWaZL9xrCyQ7k%2FaWLGegTJJica4OWtdzELwQ0y4u%2Bn43TJs0%2FY4VlX28x2j7H2zHe0nG5fv7cwqwlNHMHVvWr0S%2BmqZOnrUa0fS0HRh5byF0jz7Tq1uMeRyC6%2FZZFwTzHWb8kthKkGYL4G3Frr4sZntdP%2FLHtBjE3RTZvk3vwdToJj7ToCrBQSiLl6FiubVqwhh26DwT5CzhJeHeYjXKoQgTBHQWUXWhfT%2BAzOXG56H%2BjgSA9pJwpJP6K8rOGeb2py2iNhWq7bAgNC50Fh9cPk%2Fr%2BiSxD6If6%2FqfAPXNg8l%2B%2BEbVsIc6ezNxgDkLa8rDASorbEzBY6hC4feMVdUiGntQY4FhhF3koA9xObWWzCxO88yTaTCe%2Fc7JBjqkAWS7HLzbAJ5uOVzjkcpODSbrIC9g3rrQ7nuunCwFMHXXZx0nPI9o92htijUN4Zky0S9OPll5dlDkTpZ46uauRkcSYQkLNwMjd3yB4TEm%2BRzRZ7SeZO8QOX4Kw9msMwN3qG0o2ssz917HnqSvil5DEKmG9vspo0WSnSZvuUpp12kRlXLixEakPF9kdIE9r%2Finh1kQqCUNDh9z20GZSelzsy5NAL2n&X-Amz-Signature=e7045b5204ff4263d94b8b0c08b978bd26bdb1281379ac64aee0d4863a29b983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

