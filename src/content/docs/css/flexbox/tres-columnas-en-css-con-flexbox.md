---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLHFO2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzk7CvTyzMVVjM6bGm12l3XdgaNcO5barOW%2Bj44LIFeAiEApYhEhX4mzIfuJ7ztCM9sxjWd9mQv0B5YG6MM8F2AfTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS5OluSK1vcPGbPeyrcAxvtlCZ4sCOK%2BD4LC8Y%2BnzHUDAJE7GIXrIGS4u6dnEIZ75vHfbz2XtOTDglonRxlxbseo1QOTflvJM2Dke63xZl3CaxsSExPu10CJJmJBQKrR34E9I4Nm519qKGyDas0fsxkM4HEIMWGhDuRXf5sCEXhRD1IlIfy658UdK6rW34enm2hz8a0VotMIQKc1NTOoVrB5tfVeeEQsh9z8K9oEhjTNH2gT7ljt9L%2BynGMgCF9EFmwr0MAMTqa7RWns2rnibL5DhwErcy7gFhu3zc8BE66Z%2FryemLA6RFue7gAe%2BIh6iJLGa3LkiiJjnoHq9SNaNnLZttnV35FG0oIaErBgOXN5X0IGhnhuEVZ17WHm07l3GEseqG3gwqt9UfGp4WOj2ZH8W4kNVXWi1aEdYKHREpejDfs2FUNO2X4mLbfKZznKCpjpYeCgMkWdCogozcl0zzi%2BQ9pi7sM3mvIkQwfpdF6uf2qvvhtb9nfeIE6FfO%2B3BtbgviHeNWCE4BTyEtIA96T9NqHlTzLmu1pbmBqWG6F8FOHlX6hkQmJE%2BFZL1rH6M4uDE4g1EQgK%2FdU5TYqDyw9koWm2YpSvjdmBWqpSqAFuJsq8iCbyHnTNsEmuSq1uZllDHGt1gXwTO6eMN%2Ft2ckGOqUB1%2FEMrdMSGtmdAdEnz8LnrZzJFFWSn8YqxxCu6w%2F9iQnvH0mo6QHYx5oq1JK%2BcEOyR6RPa14MII23kyMlpyKAt3IYI3YFaXy7kr9ywpjq58sroNhp37JCjWkCqn%2Fqn7rDdNbz8kKUqXVQ4R8u7McTGHKj8HnHDS0ZAluOqFmXVf7Gq1p%2FbHbwPh910JKnjJU%2B%2BLdwf%2FlQQRdxD%2FNO0hEiVHfw4hFi&X-Amz-Signature=533ab5342d8c4104bcbc5f7cbcbf5dd7e81fda4dee0f382c68ae5922419340cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLHFO2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzk7CvTyzMVVjM6bGm12l3XdgaNcO5barOW%2Bj44LIFeAiEApYhEhX4mzIfuJ7ztCM9sxjWd9mQv0B5YG6MM8F2AfTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS5OluSK1vcPGbPeyrcAxvtlCZ4sCOK%2BD4LC8Y%2BnzHUDAJE7GIXrIGS4u6dnEIZ75vHfbz2XtOTDglonRxlxbseo1QOTflvJM2Dke63xZl3CaxsSExPu10CJJmJBQKrR34E9I4Nm519qKGyDas0fsxkM4HEIMWGhDuRXf5sCEXhRD1IlIfy658UdK6rW34enm2hz8a0VotMIQKc1NTOoVrB5tfVeeEQsh9z8K9oEhjTNH2gT7ljt9L%2BynGMgCF9EFmwr0MAMTqa7RWns2rnibL5DhwErcy7gFhu3zc8BE66Z%2FryemLA6RFue7gAe%2BIh6iJLGa3LkiiJjnoHq9SNaNnLZttnV35FG0oIaErBgOXN5X0IGhnhuEVZ17WHm07l3GEseqG3gwqt9UfGp4WOj2ZH8W4kNVXWi1aEdYKHREpejDfs2FUNO2X4mLbfKZznKCpjpYeCgMkWdCogozcl0zzi%2BQ9pi7sM3mvIkQwfpdF6uf2qvvhtb9nfeIE6FfO%2B3BtbgviHeNWCE4BTyEtIA96T9NqHlTzLmu1pbmBqWG6F8FOHlX6hkQmJE%2BFZL1rH6M4uDE4g1EQgK%2FdU5TYqDyw9koWm2YpSvjdmBWqpSqAFuJsq8iCbyHnTNsEmuSq1uZllDHGt1gXwTO6eMN%2Ft2ckGOqUB1%2FEMrdMSGtmdAdEnz8LnrZzJFFWSn8YqxxCu6w%2F9iQnvH0mo6QHYx5oq1JK%2BcEOyR6RPa14MII23kyMlpyKAt3IYI3YFaXy7kr9ywpjq58sroNhp37JCjWkCqn%2Fqn7rDdNbz8kKUqXVQ4R8u7McTGHKj8HnHDS0ZAluOqFmXVf7Gq1p%2FbHbwPh910JKnjJU%2B%2BLdwf%2FlQQRdxD%2FNO0hEiVHfw4hFi&X-Amz-Signature=898a551e3f8692e4fae9b3de41aaadabd5abc3ad2e7c068d40d1f717efb3c7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

