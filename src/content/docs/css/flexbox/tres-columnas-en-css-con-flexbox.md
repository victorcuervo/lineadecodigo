---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2PFEHJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQzDqFQipuMGfXM1nJLm1OBV%2BXsQrcso%2FFuJh%2Fa%2BAGtgIhAMwaUklehOrYdoG%2FiCao95Slxaj1aMIeES5wakpTh%2FG7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwA0H4kcwK1hY59Pgkq3APyH0hikRWN5qL5K1TnY0CGvaj3RGY77XY5%2FjWBCXkrVfKelLP%2BAw%2F%2F4AiZJPic6jUB7OeGFqiFsj1fqFWb%2FNY9l5ZiPXAHCjebLSLLy6fjedT33bq1jYzItN9gBtq0vR%2F4ZLFy9QznlgOnmqrIfUFIwmF%2BKCmDTXfeAJ5O4GBqj1d6aHXWS5qQmmNb0%2FXByQxgmokVda37yauJnHpswLiA0yMmQQlPknzw4TU346Q%2BlzpZatzWKoHF%2BmqShH%2FTp3KFDjMInpC%2FNyl7k4LxR8r5PLLwm0yd5jYAYnNjAWh9wxj2zaJDMWUL%2BpP0rnOaX5wayneU3KdC%2BLU6Y7Pit12zESojSTw%2FCoQ3ZegB4yNxNB2uUOf2WD3YEJO4pvdX8VSfz9qn7l3T3SLVt2wiCVKmSlMP4auHcl4p3js8Lw0bmfQK9AwjD6lQk6o1nptskD%2BJRTVBN9EvNRhx9b0me%2B1igfkevNxMrYBw0g4yIL4dSWGcDIAGuC7nE4fQVHYPxW6pbQ3Zxh6nIGN90gVGZdn1%2BKA0vebSSxw25iB7HuJIO91ow2Q7SvEOhsQTQnYKJns38CIZ61Intcp4YsBe1tb4WNn3xFsecG4VVtM0%2BceWSulRhVpxqzSfpSlTyTC%2FvM%2FJBjqkAfD2veOqsqh63rtbG2oaglUplOIjppYT17btV2IJ2ZM0vl7AzQd3DcH4I5noKXvV%2F6xd2DyuveEg4BtcRIrtAUNLEH0vXI0w80L2dM06suEOZRbWjdir1QojIGZOaqiOd8%2BgBYBtedfefFJ5Awnuw%2FuSCA3lOG45MPTG1GwaasLF4qJTD2uO62rQjfkGAmyF00JC3JzbBHZzS4lpsh9%2B3wK8ixq0&X-Amz-Signature=1c6028380fc2183d155d8388721cd58452732fa9788200d30e694310f4d3757b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2PFEHJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQzDqFQipuMGfXM1nJLm1OBV%2BXsQrcso%2FFuJh%2Fa%2BAGtgIhAMwaUklehOrYdoG%2FiCao95Slxaj1aMIeES5wakpTh%2FG7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwA0H4kcwK1hY59Pgkq3APyH0hikRWN5qL5K1TnY0CGvaj3RGY77XY5%2FjWBCXkrVfKelLP%2BAw%2F%2F4AiZJPic6jUB7OeGFqiFsj1fqFWb%2FNY9l5ZiPXAHCjebLSLLy6fjedT33bq1jYzItN9gBtq0vR%2F4ZLFy9QznlgOnmqrIfUFIwmF%2BKCmDTXfeAJ5O4GBqj1d6aHXWS5qQmmNb0%2FXByQxgmokVda37yauJnHpswLiA0yMmQQlPknzw4TU346Q%2BlzpZatzWKoHF%2BmqShH%2FTp3KFDjMInpC%2FNyl7k4LxR8r5PLLwm0yd5jYAYnNjAWh9wxj2zaJDMWUL%2BpP0rnOaX5wayneU3KdC%2BLU6Y7Pit12zESojSTw%2FCoQ3ZegB4yNxNB2uUOf2WD3YEJO4pvdX8VSfz9qn7l3T3SLVt2wiCVKmSlMP4auHcl4p3js8Lw0bmfQK9AwjD6lQk6o1nptskD%2BJRTVBN9EvNRhx9b0me%2B1igfkevNxMrYBw0g4yIL4dSWGcDIAGuC7nE4fQVHYPxW6pbQ3Zxh6nIGN90gVGZdn1%2BKA0vebSSxw25iB7HuJIO91ow2Q7SvEOhsQTQnYKJns38CIZ61Intcp4YsBe1tb4WNn3xFsecG4VVtM0%2BceWSulRhVpxqzSfpSlTyTC%2FvM%2FJBjqkAfD2veOqsqh63rtbG2oaglUplOIjppYT17btV2IJ2ZM0vl7AzQd3DcH4I5noKXvV%2F6xd2DyuveEg4BtcRIrtAUNLEH0vXI0w80L2dM06suEOZRbWjdir1QojIGZOaqiOd8%2BgBYBtedfefFJ5Awnuw%2FuSCA3lOG45MPTG1GwaasLF4qJTD2uO62rQjfkGAmyF00JC3JzbBHZzS4lpsh9%2B3wK8ixq0&X-Amz-Signature=51709199586e404858fdb017614419f81867050fb08c5a9bb92970d9f7625961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

