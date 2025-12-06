---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645XORLI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B4CcWqF3DH%2BNrIGa%2FTVBbma82aZk5Y5xdefWj%2BuUxDAiEAs4iUQ2QWxmZ5ewv1MTvcj4WLv1QhMk3Vn%2FiQ%2FLKukmwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyEK0P6niU%2FYMhUjyrcA0ySS5xsJI1Cs%2FzKTTI45Q8NFXoXL0tYTcjiP7gGEOmXI9GDqAiPmMRXsS8%2F53VUxckIJ%2BzBGAqfjRyud79A3DCUridESAIBUsf3UoOM0W0bB0PZ%2Fxd6Ni3fZ3%2FAgkHVfpS0tnbvuo8KlTFATcR0JO0YaL%2BBlAOTr8xw9OmofrOlD7Gn3Eil5%2BWw%2FeGiLVDFdE9kQVvWMzzIC5l6menTX7q0ZgN1165KCs6hScKyUNYy6OM4JcAvPLaIZ9V0t69nTp3p9W9RGGiGS80UwJevOH27B6GMBa0%2B2hJeFQAyQTZSUA2hHFLaDQBzjFOZbvJDYBu2egnZGi0NrQcJIpj5YMyjU3ZuQmitiO1gCOVxhTjn7ymvUodUVDCM34%2FZgS9BF%2FxVPKQ7mwzAzY1PNTMp85VDGJiPyrp1rYAfKhj4AFpNVXwSsq1F9%2FUNi1J4729eLvbv%2BKsV9Pl3Oz%2BizkHL3ZrApcn3NnwSVSMQompAfAWEYG3GRwttT3SBa1tALGr%2BcFPbIgSQfRhZRu4EGSrYmuuh%2FoEylwQtCLOaS8Am5cXmkD2FA2vGYHHnp8G9f9BdH9PUNAEJU3xtclRMiZDZm7qZ0Q1lLI26j4Ers8wrGUl%2BIqBR4zufyX5bLC7yMJ7DzskGOqUBXabD9JnYAtBJUNlkrAMqYLh%2BRJjgdgqND037IUtyFVbE9n1gCGmuyd%2F%2B2v0uvG07%2Bj4GFztiR28puQotw0SypN8%2BJ%2FMX8qCl4qaCw7hCe6mYdipC1pOHPUyjyilzQDBo8a85HUw4xWvyBz1d5nDgFA76%2FtF4Wtj8wCybVk1x6nI7xSt8XeAQBQV3Q0%2ByFy2n3AMsvSMVX8YulBgooYbUerXprQ5v&X-Amz-Signature=8d3fd32af9f16943069e86b8ed23ce4dbdb8457c48ed09e3379cbe6a37644b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645XORLI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2B4CcWqF3DH%2BNrIGa%2FTVBbma82aZk5Y5xdefWj%2BuUxDAiEAs4iUQ2QWxmZ5ewv1MTvcj4WLv1QhMk3Vn%2FiQ%2FLKukmwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyEK0P6niU%2FYMhUjyrcA0ySS5xsJI1Cs%2FzKTTI45Q8NFXoXL0tYTcjiP7gGEOmXI9GDqAiPmMRXsS8%2F53VUxckIJ%2BzBGAqfjRyud79A3DCUridESAIBUsf3UoOM0W0bB0PZ%2Fxd6Ni3fZ3%2FAgkHVfpS0tnbvuo8KlTFATcR0JO0YaL%2BBlAOTr8xw9OmofrOlD7Gn3Eil5%2BWw%2FeGiLVDFdE9kQVvWMzzIC5l6menTX7q0ZgN1165KCs6hScKyUNYy6OM4JcAvPLaIZ9V0t69nTp3p9W9RGGiGS80UwJevOH27B6GMBa0%2B2hJeFQAyQTZSUA2hHFLaDQBzjFOZbvJDYBu2egnZGi0NrQcJIpj5YMyjU3ZuQmitiO1gCOVxhTjn7ymvUodUVDCM34%2FZgS9BF%2FxVPKQ7mwzAzY1PNTMp85VDGJiPyrp1rYAfKhj4AFpNVXwSsq1F9%2FUNi1J4729eLvbv%2BKsV9Pl3Oz%2BizkHL3ZrApcn3NnwSVSMQompAfAWEYG3GRwttT3SBa1tALGr%2BcFPbIgSQfRhZRu4EGSrYmuuh%2FoEylwQtCLOaS8Am5cXmkD2FA2vGYHHnp8G9f9BdH9PUNAEJU3xtclRMiZDZm7qZ0Q1lLI26j4Ers8wrGUl%2BIqBR4zufyX5bLC7yMJ7DzskGOqUBXabD9JnYAtBJUNlkrAMqYLh%2BRJjgdgqND037IUtyFVbE9n1gCGmuyd%2F%2B2v0uvG07%2Bj4GFztiR28puQotw0SypN8%2BJ%2FMX8qCl4qaCw7hCe6mYdipC1pOHPUyjyilzQDBo8a85HUw4xWvyBz1d5nDgFA76%2FtF4Wtj8wCybVk1x6nI7xSt8XeAQBQV3Q0%2ByFy2n3AMsvSMVX8YulBgooYbUerXprQ5v&X-Amz-Signature=a98b7fedf8c47538fc21433b86ae31cb1d6ab651a3c6711c2a1b8b8c48c86a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

