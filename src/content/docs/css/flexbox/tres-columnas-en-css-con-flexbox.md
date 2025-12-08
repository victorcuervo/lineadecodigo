---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJIXGCG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7V6XDfOvBZHHzuB6aM8sxAwL8bidH1m2DfT0qr259ZAiEA98GQLjJ7zGf4FWhAM%2FD394RYUufh8SxM69o3GrDdpPgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsCbVT6xy5UYfizoSrcA4tL%2FcUD%2FIGDzGoVZ6SIqP2xS3GhkF3cvBP%2FmakL8E3DfAu1ubrYnAGfHHep05qNahhQGDRrMi3pIthzpHemIbl6ZJPCBxXVtdpW3F%2FCtzpPDfxKP%2Fd7fwDi%2FXDj9XgqN2wONZ617TPfkun5G5OXel7ZB0Uv%2F5mdNLe4s9laddpLcbBLRWwtWRWD0Wu1hHTyrMdizGU5PwzGy910NKH3wBwurn5y3a4kOIHgeHlkQz4h6I%2FNUwKWeWKePXsrfi5GRqBDCEMrgBDU7wsEWdqCMUfk5Wx%2FO2TVegsnKHV0Y8RcRUWRIyX%2Bb78WgCwceocV7gecUeTx%2FLSi6orLdqAl5sTrjczkr2IcSLmvUTstCOCpfSbyMIFAtHUa8AjGvqrg89DQ10x2tdChZGx3r3y06fkSe0Z7Ro8Oiw1auRheCUEu3QaeJDcpJHc6o9mOPrMnygjLWVtwDEvUxblTrf2fD89nKDnyUnL2HNDij39ymfXNQqGS6xTD0ugW6iTajOXg6IP7bwQ9sOY3iqk359iPK0exdJMKJxz3h2vCBcqjoHlV3L6Ob7aZz9fbR5wkc1dYZ7d%2FkveBDizs5KdunpRN0xvzOXwm10%2FAcAwryG0B%2FyeX%2BYTR%2F4sP4UczuVRnMK%2Fk28kGOqUBU%2FUNjCzM4Z3VCgeb75O7PjXVwMzzWwauINo%2FRwzDYchEvU0%2F%2BCqpCvifVZucPC8ua5PKDX5f1x1KLn5gQeRawLL7Fil07oUdSI1OVCOk3u9Ut9QFGXttvdJiMZYp5Vfha9DHUw78t06Tm5PPZNDVhVnmnsbLDysu0rvh4S17ICRUbgvW4kpHqIZxpMyz2k4khur9pKmyvV5ClNq8SDm30xLxC4p%2B&X-Amz-Signature=4ceb232a52a39df30a2068304ddefd159a24d9bda061541fea30ae7babd1aba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJIXGCG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7V6XDfOvBZHHzuB6aM8sxAwL8bidH1m2DfT0qr259ZAiEA98GQLjJ7zGf4FWhAM%2FD394RYUufh8SxM69o3GrDdpPgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsCbVT6xy5UYfizoSrcA4tL%2FcUD%2FIGDzGoVZ6SIqP2xS3GhkF3cvBP%2FmakL8E3DfAu1ubrYnAGfHHep05qNahhQGDRrMi3pIthzpHemIbl6ZJPCBxXVtdpW3F%2FCtzpPDfxKP%2Fd7fwDi%2FXDj9XgqN2wONZ617TPfkun5G5OXel7ZB0Uv%2F5mdNLe4s9laddpLcbBLRWwtWRWD0Wu1hHTyrMdizGU5PwzGy910NKH3wBwurn5y3a4kOIHgeHlkQz4h6I%2FNUwKWeWKePXsrfi5GRqBDCEMrgBDU7wsEWdqCMUfk5Wx%2FO2TVegsnKHV0Y8RcRUWRIyX%2Bb78WgCwceocV7gecUeTx%2FLSi6orLdqAl5sTrjczkr2IcSLmvUTstCOCpfSbyMIFAtHUa8AjGvqrg89DQ10x2tdChZGx3r3y06fkSe0Z7Ro8Oiw1auRheCUEu3QaeJDcpJHc6o9mOPrMnygjLWVtwDEvUxblTrf2fD89nKDnyUnL2HNDij39ymfXNQqGS6xTD0ugW6iTajOXg6IP7bwQ9sOY3iqk359iPK0exdJMKJxz3h2vCBcqjoHlV3L6Ob7aZz9fbR5wkc1dYZ7d%2FkveBDizs5KdunpRN0xvzOXwm10%2FAcAwryG0B%2FyeX%2BYTR%2F4sP4UczuVRnMK%2Fk28kGOqUBU%2FUNjCzM4Z3VCgeb75O7PjXVwMzzWwauINo%2FRwzDYchEvU0%2F%2BCqpCvifVZucPC8ua5PKDX5f1x1KLn5gQeRawLL7Fil07oUdSI1OVCOk3u9Ut9QFGXttvdJiMZYp5Vfha9DHUw78t06Tm5PPZNDVhVnmnsbLDysu0rvh4S17ICRUbgvW4kpHqIZxpMyz2k4khur9pKmyvV5ClNq8SDm30xLxC4p%2B&X-Amz-Signature=d31b7df69a6556405794a96a93bfc8fad501e3ff8408da44b9854eb7b740aef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

