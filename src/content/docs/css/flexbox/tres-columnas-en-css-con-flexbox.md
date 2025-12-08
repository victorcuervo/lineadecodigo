---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INFHPXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaJ0p3F4LZ9ZsWmCChV7cHsGkyNUkwyFLl5%2BKO0tWYhAIgX5yId5xXEKZ%2FvK048m3qU7ycLT75sw1Zbizshz6Lr%2FUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6sz9kbOk16JyXJSrcA90pPLFUbTnHu69Iz91BbNF%2Fw7AzwDiR1Bt2fCgPu2YFl3p9FLI1sKTE2zER2VYaahG24EbFOuUduflA8k1Eem2y44ympbtSBk2tPRN9DMI5T%2B8VviwCQtTp2MjAFJ7dCjVsNr7%2B8ffPV5do%2FkTS5j7ajeczOQiqld4VHK7iVu1Y7L8G9y5pQJqgEfU8llq%2B4bgo8WBNk1fqj%2BsaG%2FAb0EYIqmsaOCrevn%2FhcUUBO9VUs%2FPW1HN8uA0nRq3Su4ixM%2BnKfOKWPrOgsCc%2Fj62LOdjd3Z0jWOOnwVx7d0JoihAoDHQY0Z47WMDASsALMLOYDjrwR5cvPFSHXqCsrcnPiLEoNJwrg%2FNF%2Bdm9MBrYVdBq0BVSSiXlxyaYmUjaCoJoXqXVKbBIox77A3%2Be80qDODwbzlnAgeB8280QWuBlPd91vE0rkGmkb%2BAvN6YK15Uk881qJMlCaRw3ielMCgshGGzMKXlQzLxNSY6ezPVsP9NpXHGLS7bimKLk9anSOlaQvx5H%2BHvNF8h0EwqDtNhB3HyrxvQzTn%2FpWRh9i%2BdGyW7rjpuXq5Q%2FOmhrbv%2FBCpMi0uB7AloV1wnpuIOIq3twuBzG5h47NREZLfqSoPd754oEfsCEQi6S8kj0BSz8MO6z2ckGOqUB1g8a4cnGt%2BYSJBWxlpAJBe684dPJ9t1GuMlq3UnG85PbACGZLPpqtsCvvRNnN4uJ3NMwKEVVk0ZJOuykYMwVWNvyfv5PD7206%2BxXgeiSroG4pTawM9YCFi0TqxsSuQWxpdjJwgPuqNtj8zf57WxuAxvJolBUKBPtDaI7dabJ4HVY%2FVXUeylOHN0VUwAJ4eWnXRaQFN3UH5sBZg%2BJYPqh36sO52%2B5&X-Amz-Signature=6c67dad69257721d5623e87dfe01dab8f271ef2271e0ea400abc262b32fd2069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INFHPXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaJ0p3F4LZ9ZsWmCChV7cHsGkyNUkwyFLl5%2BKO0tWYhAIgX5yId5xXEKZ%2FvK048m3qU7ycLT75sw1Zbizshz6Lr%2FUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6sz9kbOk16JyXJSrcA90pPLFUbTnHu69Iz91BbNF%2Fw7AzwDiR1Bt2fCgPu2YFl3p9FLI1sKTE2zER2VYaahG24EbFOuUduflA8k1Eem2y44ympbtSBk2tPRN9DMI5T%2B8VviwCQtTp2MjAFJ7dCjVsNr7%2B8ffPV5do%2FkTS5j7ajeczOQiqld4VHK7iVu1Y7L8G9y5pQJqgEfU8llq%2B4bgo8WBNk1fqj%2BsaG%2FAb0EYIqmsaOCrevn%2FhcUUBO9VUs%2FPW1HN8uA0nRq3Su4ixM%2BnKfOKWPrOgsCc%2Fj62LOdjd3Z0jWOOnwVx7d0JoihAoDHQY0Z47WMDASsALMLOYDjrwR5cvPFSHXqCsrcnPiLEoNJwrg%2FNF%2Bdm9MBrYVdBq0BVSSiXlxyaYmUjaCoJoXqXVKbBIox77A3%2Be80qDODwbzlnAgeB8280QWuBlPd91vE0rkGmkb%2BAvN6YK15Uk881qJMlCaRw3ielMCgshGGzMKXlQzLxNSY6ezPVsP9NpXHGLS7bimKLk9anSOlaQvx5H%2BHvNF8h0EwqDtNhB3HyrxvQzTn%2FpWRh9i%2BdGyW7rjpuXq5Q%2FOmhrbv%2FBCpMi0uB7AloV1wnpuIOIq3twuBzG5h47NREZLfqSoPd754oEfsCEQi6S8kj0BSz8MO6z2ckGOqUB1g8a4cnGt%2BYSJBWxlpAJBe684dPJ9t1GuMlq3UnG85PbACGZLPpqtsCvvRNnN4uJ3NMwKEVVk0ZJOuykYMwVWNvyfv5PD7206%2BxXgeiSroG4pTawM9YCFi0TqxsSuQWxpdjJwgPuqNtj8zf57WxuAxvJolBUKBPtDaI7dabJ4HVY%2FVXUeylOHN0VUwAJ4eWnXRaQFN3UH5sBZg%2BJYPqh36sO52%2B5&X-Amz-Signature=4c0137cdf4c348b2dbe75382c40bb88716eac6e50b94bbf39eb7de501cd06728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

