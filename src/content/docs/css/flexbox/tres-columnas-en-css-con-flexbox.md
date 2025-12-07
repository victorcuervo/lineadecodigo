---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4UHWID%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5nwirONSgnqF4BfvqDI9svpqkrXhPcIjo0wikYk%2BRrgIhANA4Bb0Qvjvo98JrSpJEpRkQoqV9Zh36uVZPYsQEZOsRKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGeMgZHtgwE%2BbEOKkq3AN4Wsw95hThHWHs4YRDJENpebvsxS8Pa1ghSavKWpnELbdeJPOaY8PiMBEws%2FKxsqHl4U3vUD4LMxc%2FJwJ8WcQwgjF1e9CWeJet4mYG0mcs%2BXhhdln54DASwJAWLBOc%2FzsaGWaU4Dq6D3AQsPwZ%2BAW9p%2BZwB%2FHX%2BpZWy69qW2kR5b1PlZM1UuC7DmVLZUBhbYb%2FN%2F1PFDGkyDWkyob1wT6Q12M2Ll0GzT68Vg5jiXN0UKioeCCwCZWWRanRJDV%2BOloVQ0d23PDVHORtg8ZhSU5ABUrvP0sLtK5lN%2BygQfFHcKd5Fr%2FI9C63DhiC0zb%2FQw%2FyyfdrzWzFMAqgHmhIAQQpUqgtHq6RFM8SFvlzNDJsSTBMpTl9Zoqs1p9gLv0Mk%2FA52TCPuU0iS6eD0eb495mKIxfnC6dKsnt0ZZoaTqNCBrLEPeJXeWbnjHQ%2Btr%2Fme%2BqGZ4Vc34xyFjIW%2FTmpROzx3auF68sGlPhypfBMU4ofdPyGyg7OXJ9EikppCvXmZY06Cqc4yQJEHeDZy4L%2Bjv2%2Fu%2BPfEYka9fjozjLxq2nOl%2BAa1%2Fu%2FjQBXaT%2F7ShOJKVOpAh%2Fd4NRIKq3CV6qUT6eZ6VaweFeIGsTzueTbxnPpYQKYA5xFMIcqlIZu5zCqmtXJBjqkAahptrTIHqBK3UMb2cmdgQOxG4NQDAZDt8sgSPj60I4%2B%2FEePv%2BdHrI0fYqEgb%2BMZrLJEvBQOHJDVlkWe2jDTw2ZzszLPQzezaOGJHrNklVgm4sDFKv%2FWjTl%2ByBWF%2BCXI0kswgcD8q%2FmBDIsg2Xn2Td8DwcjxV0Tw4oQsEgeyErkqzSczivdprIQ8SlfDdIr7akYfWBnVguEPkL0dZbzQvNefs9Pp&X-Amz-Signature=93a22ab30eece467ddeb5fdeec98077faaa9cff32cf68bd9d15c8e68d86c8512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4UHWID%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5nwirONSgnqF4BfvqDI9svpqkrXhPcIjo0wikYk%2BRrgIhANA4Bb0Qvjvo98JrSpJEpRkQoqV9Zh36uVZPYsQEZOsRKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGeMgZHtgwE%2BbEOKkq3AN4Wsw95hThHWHs4YRDJENpebvsxS8Pa1ghSavKWpnELbdeJPOaY8PiMBEws%2FKxsqHl4U3vUD4LMxc%2FJwJ8WcQwgjF1e9CWeJet4mYG0mcs%2BXhhdln54DASwJAWLBOc%2FzsaGWaU4Dq6D3AQsPwZ%2BAW9p%2BZwB%2FHX%2BpZWy69qW2kR5b1PlZM1UuC7DmVLZUBhbYb%2FN%2F1PFDGkyDWkyob1wT6Q12M2Ll0GzT68Vg5jiXN0UKioeCCwCZWWRanRJDV%2BOloVQ0d23PDVHORtg8ZhSU5ABUrvP0sLtK5lN%2BygQfFHcKd5Fr%2FI9C63DhiC0zb%2FQw%2FyyfdrzWzFMAqgHmhIAQQpUqgtHq6RFM8SFvlzNDJsSTBMpTl9Zoqs1p9gLv0Mk%2FA52TCPuU0iS6eD0eb495mKIxfnC6dKsnt0ZZoaTqNCBrLEPeJXeWbnjHQ%2Btr%2Fme%2BqGZ4Vc34xyFjIW%2FTmpROzx3auF68sGlPhypfBMU4ofdPyGyg7OXJ9EikppCvXmZY06Cqc4yQJEHeDZy4L%2Bjv2%2Fu%2BPfEYka9fjozjLxq2nOl%2BAa1%2Fu%2FjQBXaT%2F7ShOJKVOpAh%2Fd4NRIKq3CV6qUT6eZ6VaweFeIGsTzueTbxnPpYQKYA5xFMIcqlIZu5zCqmtXJBjqkAahptrTIHqBK3UMb2cmdgQOxG4NQDAZDt8sgSPj60I4%2B%2FEePv%2BdHrI0fYqEgb%2BMZrLJEvBQOHJDVlkWe2jDTw2ZzszLPQzezaOGJHrNklVgm4sDFKv%2FWjTl%2ByBWF%2BCXI0kswgcD8q%2FmBDIsg2Xn2Td8DwcjxV0Tw4oQsEgeyErkqzSczivdprIQ8SlfDdIr7akYfWBnVguEPkL0dZbzQvNefs9Pp&X-Amz-Signature=4b19dc49c156cc4a92b2b8ad3fcce20aeefcb23ab3cbbc0d4fbd359115793abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

