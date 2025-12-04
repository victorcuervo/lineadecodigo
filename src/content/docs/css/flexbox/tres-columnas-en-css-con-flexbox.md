---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTOPJT4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCkXbAFOwFq6uzZQaH5a910wNEo%2BjwRC4bVyW%2BhpqAEsQIhAJkPzSihyJVk9dEa4duiCBfz152OSXQLONKPuHzDc2LWKv8DCD8QABoMNjM3NDIzMTgzODA1IgzOAI3mSYkuQ2yku5Iq3AOxwC7LLiPNotlQi9E%2BYTgNPbvcmHUrfSZxkb1rEqX%2ByQ05jo9kfiEnUdL%2F2U8uwFA%2F5QyFOfuRBIbr1obUbPngEXm3q6OG7BUjpMn%2F0k5H0%2FbCdRFe14%2B1Yq6DEGiphh7bfourOttfY%2BqRKgKeO4dBWM2ASLgreU%2BRKChaNTSvXj1yj1PH616XgYNYi9bXfsmBInmA3%2FxbleSZ7qKFqEGW9JO1XkbdKckx6ZbFvCnO5tG%2FwF28n%2FVqD7KpPKZC0Qyfr6%2F6FcE0LXtexW5kfhFvUyIeDQroaCxnMTkibgQ%2FdPtsX2NF9Ik2bJOiPEg7EHjdKuvo25Mw6Plm3mTYyjTnIEHurqSpKlACa9jtrWUfguopnLb%2FJ1b52sxjgVhInz%2B4lQl5dwjcDJf443roFqGnDLIuH%2BOt4XPkwW4TyBgvI1G0%2F22MwVXpisQPuLIuGliwGTwFy9Cs3Le78tAaWXU6N7X1QlAYCtQT4W5fn8ffFk7AWQ7bJYW8clntelk%2BITl5T6EKkV3BZSoyaBxqOHydijquaEJYQkFEFpldJrFaVS1ifaHrJi7x%2Bft1Z7Ns%2F5AQU4OGykEHBpj5PYLtn%2FOS4FmlDcJJWSaoZzS6AbNi%2F21xMEghTbM8c%2Fo0rDCrycTJBjqkARHBpLM4cJhTSZXcY1hK9cJqNjOdjaDgsqEiunlYLyjWGx4R%2Bh5wETktsJxUvNpymNZvXtFef43U1UBhVW3Ggu4%2BmcgdmiM3%2BMoCKspisAzotD5QAaZR8977yBqA8T54IXxlyizOKxnyeGwZYWaKuPay0WQHkCWH1HI3OI4ElgO0el0YtnzQpqLd4HES76VSvLUvqNjFvaDWUjhQPzAWaRCGwem3&X-Amz-Signature=17cc25b5000eb606810d6947b0dee71338c9b339d7f2a3f440b7c211022e80f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTOPJT4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCkXbAFOwFq6uzZQaH5a910wNEo%2BjwRC4bVyW%2BhpqAEsQIhAJkPzSihyJVk9dEa4duiCBfz152OSXQLONKPuHzDc2LWKv8DCD8QABoMNjM3NDIzMTgzODA1IgzOAI3mSYkuQ2yku5Iq3AOxwC7LLiPNotlQi9E%2BYTgNPbvcmHUrfSZxkb1rEqX%2ByQ05jo9kfiEnUdL%2F2U8uwFA%2F5QyFOfuRBIbr1obUbPngEXm3q6OG7BUjpMn%2F0k5H0%2FbCdRFe14%2B1Yq6DEGiphh7bfourOttfY%2BqRKgKeO4dBWM2ASLgreU%2BRKChaNTSvXj1yj1PH616XgYNYi9bXfsmBInmA3%2FxbleSZ7qKFqEGW9JO1XkbdKckx6ZbFvCnO5tG%2FwF28n%2FVqD7KpPKZC0Qyfr6%2F6FcE0LXtexW5kfhFvUyIeDQroaCxnMTkibgQ%2FdPtsX2NF9Ik2bJOiPEg7EHjdKuvo25Mw6Plm3mTYyjTnIEHurqSpKlACa9jtrWUfguopnLb%2FJ1b52sxjgVhInz%2B4lQl5dwjcDJf443roFqGnDLIuH%2BOt4XPkwW4TyBgvI1G0%2F22MwVXpisQPuLIuGliwGTwFy9Cs3Le78tAaWXU6N7X1QlAYCtQT4W5fn8ffFk7AWQ7bJYW8clntelk%2BITl5T6EKkV3BZSoyaBxqOHydijquaEJYQkFEFpldJrFaVS1ifaHrJi7x%2Bft1Z7Ns%2F5AQU4OGykEHBpj5PYLtn%2FOS4FmlDcJJWSaoZzS6AbNi%2F21xMEghTbM8c%2Fo0rDCrycTJBjqkARHBpLM4cJhTSZXcY1hK9cJqNjOdjaDgsqEiunlYLyjWGx4R%2Bh5wETktsJxUvNpymNZvXtFef43U1UBhVW3Ggu4%2BmcgdmiM3%2BMoCKspisAzotD5QAaZR8977yBqA8T54IXxlyizOKxnyeGwZYWaKuPay0WQHkCWH1HI3OI4ElgO0el0YtnzQpqLd4HES76VSvLUvqNjFvaDWUjhQPzAWaRCGwem3&X-Amz-Signature=ab12a825a3424126fbed5210a22cc3b70bcc744e77b94c441cf413e4d581cab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

