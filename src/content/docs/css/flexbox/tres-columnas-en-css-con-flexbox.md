---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVIB225%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFe9RefGRgqVyZN2lZopAHWR47oiq3dFX8JAvzwzbOn%2FAiBj003ANxUnNehMwM021hoSYKQ1j9RDWof4LC5Trd8kOCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXTcr%2BYGqoV3iJlOQKtwDoGDAoIg4qzhb7YDXmYn%2Fgzu1rBEFdu0HWR0w20NkRSA%2FE9b5a20QZHMnA6NUq3TdPcEfnkmxxSk72J%2FSvdY0uy2YU%2BoNum0CQVQAczFXU3IFWhIgMEAUtiRI7D6zwlhT7ZhqtFCQQQqMKg7uQ73YVsWth7g2aoZRSuMWyPaO%2Fw2OOkGK0NuWkNqHbHgAyiwm2%2FKjzqKo0xEU2ZhZAliMubrzgZUL9vOn%2BZkcaHx4f8JcqavheFbUJdjwt9bL8TeYwDiu7lfQWiMa9mdWcWPpp5aJINViSTsvrVDiIGLS1Xcjsn6SWKaKWsFhI6ZLnLZz55BuZwL69cLBiaeG%2FNC2xhkkJ57G%2Flk%2B8ehgdCxp%2FutJKSVAk4JB9xSOaSq1UbFejvwp%2FEOiBUwtcKCh0SucJMFqs3nwFs9DqluEKBxmT5FeQmtJfzh5z7ren1YwXEqVmbH%2Fat1hsoARwXffOx4Rj7NRkIeXUhyIBuEWdT6ceS%2FtMzBG1apUwMxARKdPvjJ9Ax5h1QvZNEgvjduxV4sUGfVxVZyfwbek1w8kF%2Bdrmd1NrNhCejizgowlc%2BWUk3YZA%2BXD0wJ0p8ICVhK9cBptJfL33Jg%2B8%2BRPa1hX1B%2FTWHVNLWvFn4l3FFMPpdEwxKTfyQY6pgEIMm4PmlAGmVqV3JJL6IaOA3JN7x7Fa0tZgg01VX3aMJs8SCgybYvsBqyQ3ArSxDphfM8Bnllwom6JxOZhJ%2FHYHwFjrdFBtJ97r72dP3og7AZDo%2FJQ2TAIcCllNIfmTy4i2tZLasU7%2Fc1ydiJ%2BFReHkmKQntl4P0d50mlq5QhH6ZHHwf6ImpkhVBdr7Md01LQK%2BgFSAs70DkfbGOdlYDpI5ZeDXoao&X-Amz-Signature=f3033746059456dc21c6698d4ae77b5361dda0cb9d52e818cd7fd6bff833b6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVIB225%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFe9RefGRgqVyZN2lZopAHWR47oiq3dFX8JAvzwzbOn%2FAiBj003ANxUnNehMwM021hoSYKQ1j9RDWof4LC5Trd8kOCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXTcr%2BYGqoV3iJlOQKtwDoGDAoIg4qzhb7YDXmYn%2Fgzu1rBEFdu0HWR0w20NkRSA%2FE9b5a20QZHMnA6NUq3TdPcEfnkmxxSk72J%2FSvdY0uy2YU%2BoNum0CQVQAczFXU3IFWhIgMEAUtiRI7D6zwlhT7ZhqtFCQQQqMKg7uQ73YVsWth7g2aoZRSuMWyPaO%2Fw2OOkGK0NuWkNqHbHgAyiwm2%2FKjzqKo0xEU2ZhZAliMubrzgZUL9vOn%2BZkcaHx4f8JcqavheFbUJdjwt9bL8TeYwDiu7lfQWiMa9mdWcWPpp5aJINViSTsvrVDiIGLS1Xcjsn6SWKaKWsFhI6ZLnLZz55BuZwL69cLBiaeG%2FNC2xhkkJ57G%2Flk%2B8ehgdCxp%2FutJKSVAk4JB9xSOaSq1UbFejvwp%2FEOiBUwtcKCh0SucJMFqs3nwFs9DqluEKBxmT5FeQmtJfzh5z7ren1YwXEqVmbH%2Fat1hsoARwXffOx4Rj7NRkIeXUhyIBuEWdT6ceS%2FtMzBG1apUwMxARKdPvjJ9Ax5h1QvZNEgvjduxV4sUGfVxVZyfwbek1w8kF%2Bdrmd1NrNhCejizgowlc%2BWUk3YZA%2BXD0wJ0p8ICVhK9cBptJfL33Jg%2B8%2BRPa1hX1B%2FTWHVNLWvFn4l3FFMPpdEwxKTfyQY6pgEIMm4PmlAGmVqV3JJL6IaOA3JN7x7Fa0tZgg01VX3aMJs8SCgybYvsBqyQ3ArSxDphfM8Bnllwom6JxOZhJ%2FHYHwFjrdFBtJ97r72dP3og7AZDo%2FJQ2TAIcCllNIfmTy4i2tZLasU7%2Fc1ydiJ%2BFReHkmKQntl4P0d50mlq5QhH6ZHHwf6ImpkhVBdr7Md01LQK%2BgFSAs70DkfbGOdlYDpI5ZeDXoao&X-Amz-Signature=be3a6b9cbe5aea958b467978a72bc62ab26a234663e5026d413acac43f00f30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

