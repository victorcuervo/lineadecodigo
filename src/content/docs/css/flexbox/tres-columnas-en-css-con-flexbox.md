---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU56TLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCAm1O8KPY9XOvUSkrG66jYWHHr4IA%2BcJfoFFciC%2Bz7AiEAv1QeLM8d%2FwhAlq5Jhf0hu9ciVHO%2FVFtN7uxnqlRGyRYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPMnka80SoahqnmLCrcA8jVENECuf6wFYBMYHQMkmIdv5%2F5ssuu2E6IrIRe7rx3jtJgjEq2nR6inXuBDQakczHZAnEzDJpIRJ%2FO5CO3KT%2FQ4zT7gq8RMb3F2%2BGtUvBFL7yPHzqCFPascnOQjzHCr3I9Xah7Jm5jt4TON%2BwfU6FJ8ECa9bmu7fQPg4fxto1lPgsv1c6XEmxclc6xxHbSwDDA3xFJ6mkVvWn8AvTdrpSiZwc794%2B5eDh3%2BCsaYQERJDgQGX0zdcbDvqubYmsXZ3lg2GzajGxEC%2FniZBCYOJnS48tWVLYY1unt7ooJopZNgal37es6tC8eM%2BRKlUKrT9w048Pb31H3dsgsJ%2BsuRmLWrAiMnPTO3bgXKZ%2FD%2FidAVhmyMKCfzJcOfLcMc%2FDio76o8MLHDwHYZfywUVQvULhvpTZ%2B573%2BgnzIXC0cEpNi4y506iE0h2FC%2Bzz1LdCoK%2FdrUE7Xb708vGqt%2BKsF%2BJSaO%2Bt%2Fos1exn%2F%2F0D%2Bof51ND52ZlmwWx4h3A3xM%2FTk8l8wCMxjskD6itNcstlbQym16nwWrdwcC2yEtdPYX9NWCDpE%2Bbvg8KKueoRPf3JkcQRDjJuH883XsbPf6UQGYAx5dgYhKfLASKoCiQM37Xbfkaz2suZajF3jOawuEMN2b1MkGOqUBPuFpsBZkhlQpaHt8GmjQ22IoQkrVqEr8iU0wQaD9op1%2BQaUPaCgwph%2BuhXvkXOIYPBwvCrfktSktHMDayliYFShv661CN4lZroCbqT9EnB2uG8AEeKy2btZNI7qVZ4u9fHLKPlXfS0XAeu8%2F4XipLM2KwAdctjgfuKBsq8N381vQJxoUC2CZzASulfGtNDNxwN%2FPld3QQ9UcVjPDugb8beBCgPr1&X-Amz-Signature=eaa09d0ff6d66fe4372a88ce3f404eafa3323d3789f62124219977d64a0f7e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU56TLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCAm1O8KPY9XOvUSkrG66jYWHHr4IA%2BcJfoFFciC%2Bz7AiEAv1QeLM8d%2FwhAlq5Jhf0hu9ciVHO%2FVFtN7uxnqlRGyRYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPMnka80SoahqnmLCrcA8jVENECuf6wFYBMYHQMkmIdv5%2F5ssuu2E6IrIRe7rx3jtJgjEq2nR6inXuBDQakczHZAnEzDJpIRJ%2FO5CO3KT%2FQ4zT7gq8RMb3F2%2BGtUvBFL7yPHzqCFPascnOQjzHCr3I9Xah7Jm5jt4TON%2BwfU6FJ8ECa9bmu7fQPg4fxto1lPgsv1c6XEmxclc6xxHbSwDDA3xFJ6mkVvWn8AvTdrpSiZwc794%2B5eDh3%2BCsaYQERJDgQGX0zdcbDvqubYmsXZ3lg2GzajGxEC%2FniZBCYOJnS48tWVLYY1unt7ooJopZNgal37es6tC8eM%2BRKlUKrT9w048Pb31H3dsgsJ%2BsuRmLWrAiMnPTO3bgXKZ%2FD%2FidAVhmyMKCfzJcOfLcMc%2FDio76o8MLHDwHYZfywUVQvULhvpTZ%2B573%2BgnzIXC0cEpNi4y506iE0h2FC%2Bzz1LdCoK%2FdrUE7Xb708vGqt%2BKsF%2BJSaO%2Bt%2Fos1exn%2F%2F0D%2Bof51ND52ZlmwWx4h3A3xM%2FTk8l8wCMxjskD6itNcstlbQym16nwWrdwcC2yEtdPYX9NWCDpE%2Bbvg8KKueoRPf3JkcQRDjJuH883XsbPf6UQGYAx5dgYhKfLASKoCiQM37Xbfkaz2suZajF3jOawuEMN2b1MkGOqUBPuFpsBZkhlQpaHt8GmjQ22IoQkrVqEr8iU0wQaD9op1%2BQaUPaCgwph%2BuhXvkXOIYPBwvCrfktSktHMDayliYFShv661CN4lZroCbqT9EnB2uG8AEeKy2btZNI7qVZ4u9fHLKPlXfS0XAeu8%2F4XipLM2KwAdctjgfuKBsq8N381vQJxoUC2CZzASulfGtNDNxwN%2FPld3QQ9UcVjPDugb8beBCgPr1&X-Amz-Signature=7c4732c34111f0411f5dd2c47ef6bf3fcbc1e7e157db1790df2f989fec88bfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

