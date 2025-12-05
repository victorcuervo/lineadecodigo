---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MB45PC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB%2FLYJZmptWSnST9MKu1Exo1ePbSRywF4bIhFYVGK5hgIhALHQeNkZNKDV%2Fjowpz%2FYDHO1UifbiKBhWBzllbbqnZZdKv8DCGAQABoMNjM3NDIzMTgzODA1IgxZYmqSM4BADLH6%2Bwsq3AOrU9qgbcs7aky7QZlh7E5COFxUE81AltB%2BFF2FByTcUz27zw9%2BoSVxWctDgUoRLfzTGalzadP3Oft3asy8IciHhjo5gdPvqVdEifpETxXKWdGy9O6IkfgaNi6K9FUTBhJFpOZfJzSOYWNdLjzD0dTFlDnHUSyvwEt6LD5118sOO7o9ewXYfu0SdGOquDaEum%2Bj6C3j1obVObdCXcpPW4JwAfriW%2Bu0USkH7U3xR1DNIZCWpNQLnf9odsPiBVkLh1XbHmSk0QMZgjGSI4BmvKZzhOB2ENPMcN4WBKnFNMPmhKH4njzkGpRyFwvhj%2F%2FdP7S3l75kaIry%2BHjeNPEAFMdCuhr1haG5PSoY9VcKTiyS5Ayec9Ld30iu6sErRHcv4ya2OSN%2FC7qTqiuMZyLIsjXgBf%2FUA56exAigT4VZokeDlRNneys6xHMsMG4VLXq5EwndJYoUYXpyhwnupLKwrHBNWZY7Su69ck0Pfm7Bw%2BBm7RfCawCGzPJe7ZAjGqRHVPx2sL4AsCN0Ll8MSsLW2DT0s1qOIkRGq8Dd5ddnc8f0iL0XD7h6Czc5dQ%2FA%2BFhaZK%2FXOQLekgQgxC5MrPejuXsfn0S%2B4PN8mWphAh%2FfGdj5NEwv1YJpIMH9CLapozC978vJBjqkAaH5v%2Fa5ch%2BHFxwccD8ez32eSD4gyBXIdq4UzKClFx%2Fd2BsXEi%2B6t3ktFMJvvllPRUEohuclRQO2h0dD9zbUw4Id9lcoZE%2BZHIFNaizy1gNuwITcwKGiuKWTSSNyIyev0zwfTgf%2FZDKBLlLDoL26RtB33BsN%2Bkg1rN56qUH%2B2xskGZKFqecmYxGS4Jo3zfuRdaaPOiDoxJdyzRfzbPcTIgNXp%2Bu%2F&X-Amz-Signature=e66cfa56d82b448e98c885aa95fa2ea586d5b529448a93b27d9d81e62152c647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MB45PC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB%2FLYJZmptWSnST9MKu1Exo1ePbSRywF4bIhFYVGK5hgIhALHQeNkZNKDV%2Fjowpz%2FYDHO1UifbiKBhWBzllbbqnZZdKv8DCGAQABoMNjM3NDIzMTgzODA1IgxZYmqSM4BADLH6%2Bwsq3AOrU9qgbcs7aky7QZlh7E5COFxUE81AltB%2BFF2FByTcUz27zw9%2BoSVxWctDgUoRLfzTGalzadP3Oft3asy8IciHhjo5gdPvqVdEifpETxXKWdGy9O6IkfgaNi6K9FUTBhJFpOZfJzSOYWNdLjzD0dTFlDnHUSyvwEt6LD5118sOO7o9ewXYfu0SdGOquDaEum%2Bj6C3j1obVObdCXcpPW4JwAfriW%2Bu0USkH7U3xR1DNIZCWpNQLnf9odsPiBVkLh1XbHmSk0QMZgjGSI4BmvKZzhOB2ENPMcN4WBKnFNMPmhKH4njzkGpRyFwvhj%2F%2FdP7S3l75kaIry%2BHjeNPEAFMdCuhr1haG5PSoY9VcKTiyS5Ayec9Ld30iu6sErRHcv4ya2OSN%2FC7qTqiuMZyLIsjXgBf%2FUA56exAigT4VZokeDlRNneys6xHMsMG4VLXq5EwndJYoUYXpyhwnupLKwrHBNWZY7Su69ck0Pfm7Bw%2BBm7RfCawCGzPJe7ZAjGqRHVPx2sL4AsCN0Ll8MSsLW2DT0s1qOIkRGq8Dd5ddnc8f0iL0XD7h6Czc5dQ%2FA%2BFhaZK%2FXOQLekgQgxC5MrPejuXsfn0S%2B4PN8mWphAh%2FfGdj5NEwv1YJpIMH9CLapozC978vJBjqkAaH5v%2Fa5ch%2BHFxwccD8ez32eSD4gyBXIdq4UzKClFx%2Fd2BsXEi%2B6t3ktFMJvvllPRUEohuclRQO2h0dD9zbUw4Id9lcoZE%2BZHIFNaizy1gNuwITcwKGiuKWTSSNyIyev0zwfTgf%2FZDKBLlLDoL26RtB33BsN%2Bkg1rN56qUH%2B2xskGZKFqecmYxGS4Jo3zfuRdaaPOiDoxJdyzRfzbPcTIgNXp%2Bu%2F&X-Amz-Signature=b2979c334bf5353c3d8ef281da3dcd1ccb85b35012d4bca09b5d6f3f1ab72046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

