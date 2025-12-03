---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMZOHAQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDwfvfmDFpF6FG%2BKIEpHXep0n1irG2MHtU5yba4r%2FpiRAiBgil%2BkR3UcKCZevOwiaFI%2B%2FRzSRFHqOXVJUZwIQG4WVir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMD4l1xdnL9JQlyKsJKtwDBXtbN6Vktcy3bz99kpx0POtCyidn8Ss6XiLp8VtHcQ%2F8h5AY5P%2FasNrTwZrTkkGELSX1EL48FfVyGOfiMPj1NVTp9JeoAsNa6UUV1qMuGZstlCAIlzz%2FzDPCECYnSDFhNSQcrl7NOx%2BWWaPacftkLxFzl7QRZsQr%2FKntn%2BX8G8vIVr%2BagbZzYvmlL7KXAvsXxLRuUtQARooEZe1ORE%2FNoTOkCwQ%2F5k1d1%2FExydhD3cSpab%2Bl33FFbDlHdiMNKcRWd%2BhzjenUh6y03dADLcceddYgDDk95J5arrt8f43iKmvQefzUjRa0fx4Hx3lVq2lflP4TOF4voDDvuVVZbFjvRnLdi%2FzWkijELWPx7oF19zhaItyLPV0E6trL%2FwtC8ieu9wOOjC%2F5Wger5s0s27Qgwnx7GNw2OKPGMRr8%2Bp4xcj%2FDVPxurk2oDd4SxdQ9Ljg8cJd8R4RqjeU6yBXSzBQIx9s6C%2FcpjiSRm6%2BdpLNbN0lUCoXgKzwlmRAqAIJbni3WlxZiOBv68e326KfKLZc7KW8jfuW7D9AIzBPIhV%2BFoigRWtUJsEcDKFHnPHvOKQyhgOqD6pZREGS%2FqWNzxqOsRkZRlBGXzNViSDUay8jh98yLFyXtXYmEYMkq8Msw5sDByQY6pgHCuTttviKk300jeuxROa5PyE8xw9RpxSUXgR7kN9C25nwdJqTvJ5xqdV%2Fkxm%2Fe8ktJeMPRRpqqCblMoWtL53ISQhkvtP2Cwk2ax3RHrvI%2BvuDK9yisB2e3P%2B7xzvyktbR5ExTeYf7U%2BRRQ%2BBK%2BIDKicpGYX67EjQLQRFVCX7S7F620mnUd03Au1hLoYyStUHoAagCA95zQa9yr9xb9zt03k65r9V7h&X-Amz-Signature=3433f4d5faa46b9a2033ebbc0a2500c6f3dbaa28e83a71cc3ae419997f1c467d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMZOHAQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDwfvfmDFpF6FG%2BKIEpHXep0n1irG2MHtU5yba4r%2FpiRAiBgil%2BkR3UcKCZevOwiaFI%2B%2FRzSRFHqOXVJUZwIQG4WVir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMD4l1xdnL9JQlyKsJKtwDBXtbN6Vktcy3bz99kpx0POtCyidn8Ss6XiLp8VtHcQ%2F8h5AY5P%2FasNrTwZrTkkGELSX1EL48FfVyGOfiMPj1NVTp9JeoAsNa6UUV1qMuGZstlCAIlzz%2FzDPCECYnSDFhNSQcrl7NOx%2BWWaPacftkLxFzl7QRZsQr%2FKntn%2BX8G8vIVr%2BagbZzYvmlL7KXAvsXxLRuUtQARooEZe1ORE%2FNoTOkCwQ%2F5k1d1%2FExydhD3cSpab%2Bl33FFbDlHdiMNKcRWd%2BhzjenUh6y03dADLcceddYgDDk95J5arrt8f43iKmvQefzUjRa0fx4Hx3lVq2lflP4TOF4voDDvuVVZbFjvRnLdi%2FzWkijELWPx7oF19zhaItyLPV0E6trL%2FwtC8ieu9wOOjC%2F5Wger5s0s27Qgwnx7GNw2OKPGMRr8%2Bp4xcj%2FDVPxurk2oDd4SxdQ9Ljg8cJd8R4RqjeU6yBXSzBQIx9s6C%2FcpjiSRm6%2BdpLNbN0lUCoXgKzwlmRAqAIJbni3WlxZiOBv68e326KfKLZc7KW8jfuW7D9AIzBPIhV%2BFoigRWtUJsEcDKFHnPHvOKQyhgOqD6pZREGS%2FqWNzxqOsRkZRlBGXzNViSDUay8jh98yLFyXtXYmEYMkq8Msw5sDByQY6pgHCuTttviKk300jeuxROa5PyE8xw9RpxSUXgR7kN9C25nwdJqTvJ5xqdV%2Fkxm%2Fe8ktJeMPRRpqqCblMoWtL53ISQhkvtP2Cwk2ax3RHrvI%2BvuDK9yisB2e3P%2B7xzvyktbR5ExTeYf7U%2BRRQ%2BBK%2BIDKicpGYX67EjQLQRFVCX7S7F620mnUd03Au1hLoYyStUHoAagCA95zQa9yr9xb9zt03k65r9V7h&X-Amz-Signature=29eedd90cbfcf0990399f80b02b8de76f38e5ec751a3fb58c975b4ce919b1728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

