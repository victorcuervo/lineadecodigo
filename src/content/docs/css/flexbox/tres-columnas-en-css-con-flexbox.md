---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIZXLEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDuqtxGHZWmNR4IoQm4M%2BUegjv%2Bl0hIvNIymMY%2FZ%2B1hAIhAKdDt6eD8AcgqXYxjUVk5ugpFE%2BnyuVQ5o9pkk9EmU9DKv8DCHUQABoMNjM3NDIzMTgzODA1IgzeX%2FgfHeGH%2BbyG0Mcq3AMMf4DDt67xT51BSvGk%2FSP7MIEz40uExTlJPzvwGlZ33rMclfYvlBXxLVQ%2F%2FbJeDPF%2FXHoRSHjHzikYcqUe6IHTSl0%2B1THYrzpxC6k6KgOoJIc9gVqvG%2FDK%2F7BjAo42%2FMfo9iY%2BaJU9P5txnkpMTs4Z9JA5JOs0XUIJrpZkdETYgpnAY9rnjJI%2BngZ%2BUFQtOZ1lfj%2FAAhEqOcJdUOdzLy7c9zutq8QG0lKdd59F3Ya8HQLqD%2F7mEKTzLdFTKwGLI7zYguYaOgLq0ELY1UVJ3DQB1Aa4S6cL9VKQLUSZrrm7GsxFPb6V3T2cwCnBgBEsYYWvECfJ45qH8YU0THi0rMCtvFu9WKYtQeZU5Yrm3BPPq%2F5%2FCfvVLR1LIEgb9%2BJIr7XHn6vzPYpq7mzZKafcA5XnIB5Qc2o%2Bs5lENRCi7IuLE%2BtpuZNu4986C1gzdsP79IISR9bcXIhap2Xk3geKaP%2FwH19qiIPfUvxNWpTXpY3gD%2BYqGtyPy9Q%2FwY%2FecYbiwqOOXRMQB7x1eIpEqBJ%2F1U5QaEkOfSoye67MulqH%2Fid%2FC8WwjLjkjYmY4PLX735vNCQLMFvUkE0hr5aEl28UJ7Q70%2BO6XndWiH9lDHrxok9KC9wN5MWQKuz1GRzKJDCPp9DJBjqkASQPXL%2F7D0R4aXMYnRuzI9WKZ%2Bh6OOyliXYBhEDL6uvXbfE6V3IDy9l5eoqB0dLwvqCPvG0EZwQ%2FFmFwlc4MdEVBY%2FDJEiU%2FwqKQhJOVtK5y%2BdM74T2JlXSHw8z1W6pTyJx9gKIcF6yqcfF76MfX3OHWOZhV86G7VtZG57BRctWbwUGGa2ntWOY1JjkQxmB4MsqQEP%2Bykt6ILESx0fsAdVVoLStZ&X-Amz-Signature=642fa4227d097485fa09ccc3d9b1930b6790cfdcabf2d81bb0bc5f4e954ee7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIZXLEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDuqtxGHZWmNR4IoQm4M%2BUegjv%2Bl0hIvNIymMY%2FZ%2B1hAIhAKdDt6eD8AcgqXYxjUVk5ugpFE%2BnyuVQ5o9pkk9EmU9DKv8DCHUQABoMNjM3NDIzMTgzODA1IgzeX%2FgfHeGH%2BbyG0Mcq3AMMf4DDt67xT51BSvGk%2FSP7MIEz40uExTlJPzvwGlZ33rMclfYvlBXxLVQ%2F%2FbJeDPF%2FXHoRSHjHzikYcqUe6IHTSl0%2B1THYrzpxC6k6KgOoJIc9gVqvG%2FDK%2F7BjAo42%2FMfo9iY%2BaJU9P5txnkpMTs4Z9JA5JOs0XUIJrpZkdETYgpnAY9rnjJI%2BngZ%2BUFQtOZ1lfj%2FAAhEqOcJdUOdzLy7c9zutq8QG0lKdd59F3Ya8HQLqD%2F7mEKTzLdFTKwGLI7zYguYaOgLq0ELY1UVJ3DQB1Aa4S6cL9VKQLUSZrrm7GsxFPb6V3T2cwCnBgBEsYYWvECfJ45qH8YU0THi0rMCtvFu9WKYtQeZU5Yrm3BPPq%2F5%2FCfvVLR1LIEgb9%2BJIr7XHn6vzPYpq7mzZKafcA5XnIB5Qc2o%2Bs5lENRCi7IuLE%2BtpuZNu4986C1gzdsP79IISR9bcXIhap2Xk3geKaP%2FwH19qiIPfUvxNWpTXpY3gD%2BYqGtyPy9Q%2FwY%2FecYbiwqOOXRMQB7x1eIpEqBJ%2F1U5QaEkOfSoye67MulqH%2Fid%2FC8WwjLjkjYmY4PLX735vNCQLMFvUkE0hr5aEl28UJ7Q70%2BO6XndWiH9lDHrxok9KC9wN5MWQKuz1GRzKJDCPp9DJBjqkASQPXL%2F7D0R4aXMYnRuzI9WKZ%2Bh6OOyliXYBhEDL6uvXbfE6V3IDy9l5eoqB0dLwvqCPvG0EZwQ%2FFmFwlc4MdEVBY%2FDJEiU%2FwqKQhJOVtK5y%2BdM74T2JlXSHw8z1W6pTyJx9gKIcF6yqcfF76MfX3OHWOZhV86G7VtZG57BRctWbwUGGa2ntWOY1JjkQxmB4MsqQEP%2Bykt6ILESx0fsAdVVoLStZ&X-Amz-Signature=00ebf09e704daf08f96767dbe68fd180cce2d6ed95e92fc6fcc847766577c847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

