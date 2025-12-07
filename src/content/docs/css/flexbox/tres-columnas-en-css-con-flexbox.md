---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7MQWU7N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7D624lXPOxQeUChh2KHmuXsqpTYXXZzBVKErSHnFpQIgCb6b%2F0wOlATzVQ4u7LMPyOLfqaSEmeElxXQCqffIZpgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaNV78GztjGMq0uTCrcAy8bG7Ii4dGaPZEudel1yylKR1w8N%2FpeVWum1Cr0sf%2FN5sak8SmZP5jCIdYXcUOCmvqXYoaPHQkZNRT5XE9wtV2IK%2BwIFLFg%2FyLEVSQg7KvD2e75JuOAqCloTcCZODRIvvjkOYWLxD3cCtPqHENCPDXUsEzE9tq9k7O2qfswx9j%2FT0g0ffPLs76Sv2xjEzw84cbZgF20pOeRE0bvKjQDTRJIiDeezbq87rOcbhYlTHOcrMycNak%2BzR9gGJERNaaSUo58VI0VnTnpdLD95GkK94t91G22x6NheJyhXc%2BK7HUwGqQNGZ2gA3KeFm1EU6pGuVWkIcze9asL2SCCwIITL6cO4xA0JAq%2FkhS9QAoit8KjWPkcojnmz5bmJ5kuE0x8ZjoeNxcZF7x1BTLPmjb2DYrjC7CThANWxzVl3jC2%2B%2BE8kmqF12wJTCbGEa2njZZlvUn4PWt%2FVfpUJZhP14QtOe18i5heEK1PvI4ic%2BXUkPXkd76h7gwrRwZGZWYZSYseciHz6RSRnnj8j5OzD%2FHb3cpzUSa%2FcMp2zpt4%2FBqccnY3luKZDxtRzATaQYH9UfpSqXHwM2vUgmDdfBUwaul1WrgEJMPxRoiy8yONfPjXRyqjHxzPYNfklbGaZmy9MPeE2MkGOqUB8zjTERIlDKA8QXIJH9Y6Hc89u15zxCG2bY9opgUskVoY7jvZ%2F%2FGwXOOu5yAx2CuJrK46h1p8%2FZlLNERJUCjJj6ypkPbZBeQkdpG2n4sL9WhmStvX571Qwvc9flEx0GO2k31cHjkD%2B5dpdy9SNS4oDOLqPmvOO6KPQPptGQ9lXItFb4hGnpkXmeF3kaMaqDYC2nncYocl8rqH9M799LV2QnnnBJfX&X-Amz-Signature=a7f19e3da9418f7ad4dd2fa57346ddc1e2827b56efac0b8dec6ead7785edc639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7MQWU7N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7D624lXPOxQeUChh2KHmuXsqpTYXXZzBVKErSHnFpQIgCb6b%2F0wOlATzVQ4u7LMPyOLfqaSEmeElxXQCqffIZpgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaNV78GztjGMq0uTCrcAy8bG7Ii4dGaPZEudel1yylKR1w8N%2FpeVWum1Cr0sf%2FN5sak8SmZP5jCIdYXcUOCmvqXYoaPHQkZNRT5XE9wtV2IK%2BwIFLFg%2FyLEVSQg7KvD2e75JuOAqCloTcCZODRIvvjkOYWLxD3cCtPqHENCPDXUsEzE9tq9k7O2qfswx9j%2FT0g0ffPLs76Sv2xjEzw84cbZgF20pOeRE0bvKjQDTRJIiDeezbq87rOcbhYlTHOcrMycNak%2BzR9gGJERNaaSUo58VI0VnTnpdLD95GkK94t91G22x6NheJyhXc%2BK7HUwGqQNGZ2gA3KeFm1EU6pGuVWkIcze9asL2SCCwIITL6cO4xA0JAq%2FkhS9QAoit8KjWPkcojnmz5bmJ5kuE0x8ZjoeNxcZF7x1BTLPmjb2DYrjC7CThANWxzVl3jC2%2B%2BE8kmqF12wJTCbGEa2njZZlvUn4PWt%2FVfpUJZhP14QtOe18i5heEK1PvI4ic%2BXUkPXkd76h7gwrRwZGZWYZSYseciHz6RSRnnj8j5OzD%2FHb3cpzUSa%2FcMp2zpt4%2FBqccnY3luKZDxtRzATaQYH9UfpSqXHwM2vUgmDdfBUwaul1WrgEJMPxRoiy8yONfPjXRyqjHxzPYNfklbGaZmy9MPeE2MkGOqUB8zjTERIlDKA8QXIJH9Y6Hc89u15zxCG2bY9opgUskVoY7jvZ%2F%2FGwXOOu5yAx2CuJrK46h1p8%2FZlLNERJUCjJj6ypkPbZBeQkdpG2n4sL9WhmStvX571Qwvc9flEx0GO2k31cHjkD%2B5dpdy9SNS4oDOLqPmvOO6KPQPptGQ9lXItFb4hGnpkXmeF3kaMaqDYC2nncYocl8rqH9M799LV2QnnnBJfX&X-Amz-Signature=5371b88ddcf368bdef1c82bf7eb31a7882d49835d7af3c4110b444a9711ce2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

