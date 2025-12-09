---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FK3OM2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb16s5qkL3iS6BXraH07BhVLOHNCTWYWz7%2F0v37l3T9AIgaTrHhsd9iGQXKtQDkXUUHQkR5hqUN%2BA8PFuLWpiBCXoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe%2BuhSxqZ%2B0IlolxyrcAwU5%2FpmdQHkZU3U0ESN%2BFcYjdOhuKJBic%2FlWhDKsZkjcpPvzNQhZ7Q20Uccz0KH05vPG%2B1xQW9p2fXo%2FhnSXG1n8VJRVIqRii4oljDOQvYnLipX1295KTeiBsEsbSOj%2BxhnxWCzue3G8mKR%2BCnlrF0qJEbHI6pSFOTFQ%2BUgXMFRuqeXVzpZwRSwjLy2VJ6tnMbtvVrdUMF5HJH84pbHhcIezg6GwjeekhlCaNuv9tEL61wmcZVDbrmIfB3mQByIEOqnKjMY%2B11vvCVwcusYOABKiXGHZfUBdlNxDMQ8kygg47Yfa0%2B9J8OPJpgkwZEDj%2Ff1YzURcB%2BTtAA0d3dYXpPyde%2FGnNokYQDt20GO6lKpxwuSelBDACyx5r%2BEX5y%2BJMcykzO4fBVJzqYH8HSxRLNkfpVPk4GoLdf7gr13EWKdTw5EvtQZAQIEdVFtI0JHUkNSyorJtO%2BhHbTBDHAM51GH6ytfbFa9ECrnPIMzXNvgY7D64%2FCj9pbPsARBi0BLq7MyKXk%2B%2BOuVEh%2FN9KO1YrVLadcPBeroxVTWMfW7kSf%2B7Io7Mj16okHiNLHntGYJTL0jePSq1adjWOJVLfFLj91PWlJYDgK4l87cAyTQBU0vFm9f5nyIxGPiFDcAJMMGO3skGOqUBYKEChU%2FQWJM71s2d3JoKuk0Rf5akz9B5CDAGfNiNp%2Fzf145WG%2B7Jqh9FkrNCPPkyaqO%2F89mHAXUUAeGTHMyBx8KMNcAycb4MKyd94iCvuHGgLaCpFVC5ebzI8IOjOyjJGXoomb10UfwxwvB9d97zf3%2BdP8rjicz0aFOQrKHWFwwpzSOVcZTabmtRZNxuHRlpuTVFtvehVSKHsx6RosS19CzCa2kU&X-Amz-Signature=ef932e8f044126c99055f1fe784557c6bf5cfe4c8b89acb4770a20d8f46dad4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FK3OM2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb16s5qkL3iS6BXraH07BhVLOHNCTWYWz7%2F0v37l3T9AIgaTrHhsd9iGQXKtQDkXUUHQkR5hqUN%2BA8PFuLWpiBCXoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe%2BuhSxqZ%2B0IlolxyrcAwU5%2FpmdQHkZU3U0ESN%2BFcYjdOhuKJBic%2FlWhDKsZkjcpPvzNQhZ7Q20Uccz0KH05vPG%2B1xQW9p2fXo%2FhnSXG1n8VJRVIqRii4oljDOQvYnLipX1295KTeiBsEsbSOj%2BxhnxWCzue3G8mKR%2BCnlrF0qJEbHI6pSFOTFQ%2BUgXMFRuqeXVzpZwRSwjLy2VJ6tnMbtvVrdUMF5HJH84pbHhcIezg6GwjeekhlCaNuv9tEL61wmcZVDbrmIfB3mQByIEOqnKjMY%2B11vvCVwcusYOABKiXGHZfUBdlNxDMQ8kygg47Yfa0%2B9J8OPJpgkwZEDj%2Ff1YzURcB%2BTtAA0d3dYXpPyde%2FGnNokYQDt20GO6lKpxwuSelBDACyx5r%2BEX5y%2BJMcykzO4fBVJzqYH8HSxRLNkfpVPk4GoLdf7gr13EWKdTw5EvtQZAQIEdVFtI0JHUkNSyorJtO%2BhHbTBDHAM51GH6ytfbFa9ECrnPIMzXNvgY7D64%2FCj9pbPsARBi0BLq7MyKXk%2B%2BOuVEh%2FN9KO1YrVLadcPBeroxVTWMfW7kSf%2B7Io7Mj16okHiNLHntGYJTL0jePSq1adjWOJVLfFLj91PWlJYDgK4l87cAyTQBU0vFm9f5nyIxGPiFDcAJMMGO3skGOqUBYKEChU%2FQWJM71s2d3JoKuk0Rf5akz9B5CDAGfNiNp%2Fzf145WG%2B7Jqh9FkrNCPPkyaqO%2F89mHAXUUAeGTHMyBx8KMNcAycb4MKyd94iCvuHGgLaCpFVC5ebzI8IOjOyjJGXoomb10UfwxwvB9d97zf3%2BdP8rjicz0aFOQrKHWFwwpzSOVcZTabmtRZNxuHRlpuTVFtvehVSKHsx6RosS19CzCa2kU&X-Amz-Signature=1d6fe1eeeb3faa0e23d20a4616f63746aab3797de4ba719bc1917750577528ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

