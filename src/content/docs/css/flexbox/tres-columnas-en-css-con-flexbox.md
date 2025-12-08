---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNLKZF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCknIZKs8pk2Eij%2FFwjEReXrisT34FEDNl4mKiTKa1XAIgeJaaHKI9twzKboTXCT7zrzyr1sVgtnpniPAFrymLgA4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCts5Gei93BHfTO2SrcA8ftb%2B0EbIYEN2TK%2BiJInD%2BybPpk4QnYY0KATrEjisHUoh88eqGyCjyR2dJ3FS9DtF4tQmatMBnO7R5WFemoWbRyuOwW6U4gFguFljJFlURfWY8fZR2y7c28d4rFFezzxt7KSXkQchFfDWj8eyZn6PX5jEgdgz6mj2aLQOqPhMnwwpY0txaWvGrQezHTxOhRrFy3BaeZSt64n0%2BTZfwZ0Qqyqs5RA%2BVSKQVpUqFJUaXlXRgvXZimsxuoirtZ4RbzMc7yVs7b2hWg5g9dJjURiDwZmsj%2BXKRENxjGaszqyrQBwcRJx62FVzKk49BviQqat2A1KBcUVPKGkcsMLhTsYYDrXzLH2XKwuyqq5ndCFzWmfC%2Fm7hL4QcNcqmNkoBhQqum6PKz878axmvDu76i%2BqjHYL0xozXf%2BfQuDykyvPst%2FMVE7JqNDqDcX91KudY493SGwSQPa34zU11xgw1BC9XCekLQuCDYtQVyIJL4PtghWqAzpxW8dgPcsQ1Muc7YV79XgI%2BgV0jiAIrNDUZfaiLp9tGcd7KgudvEQHKajSXFahu0U5YbKC1DsaPBb9Yi%2FEOhg7Afw0wctIEI4oi%2B3Ch5o3MElxupFpTLR5eTHWH%2FJxp1x6zRVrbow1iRYMOfc3MkGOqUBqdfj4EqDJD6ke9zSjNwDNncqYRHMGAujKt%2FE9cMVPKwMA8sCe0AJEUUoVUwW3wZrddTxbm1CapV9%2FW0fGw22qvLhnkXBC4QCo5V4Z%2FG99a1vWV%2B5EzKtXq2Ji%2B7RJY2Jw11jsERHSScpZgPQqlffwxHbtnh8LHOuGGQcNaClvrV9LPl%2Fwgtw%2BPHoyg7qk4hsnJ1W5xjIumoVBXj8I4tXY58hRVQ0&X-Amz-Signature=a24b9625dbcb190389ee60485a89663ac74704c4dde7a93ad9dc0d69c0cb505f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXNLKZF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCknIZKs8pk2Eij%2FFwjEReXrisT34FEDNl4mKiTKa1XAIgeJaaHKI9twzKboTXCT7zrzyr1sVgtnpniPAFrymLgA4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCts5Gei93BHfTO2SrcA8ftb%2B0EbIYEN2TK%2BiJInD%2BybPpk4QnYY0KATrEjisHUoh88eqGyCjyR2dJ3FS9DtF4tQmatMBnO7R5WFemoWbRyuOwW6U4gFguFljJFlURfWY8fZR2y7c28d4rFFezzxt7KSXkQchFfDWj8eyZn6PX5jEgdgz6mj2aLQOqPhMnwwpY0txaWvGrQezHTxOhRrFy3BaeZSt64n0%2BTZfwZ0Qqyqs5RA%2BVSKQVpUqFJUaXlXRgvXZimsxuoirtZ4RbzMc7yVs7b2hWg5g9dJjURiDwZmsj%2BXKRENxjGaszqyrQBwcRJx62FVzKk49BviQqat2A1KBcUVPKGkcsMLhTsYYDrXzLH2XKwuyqq5ndCFzWmfC%2Fm7hL4QcNcqmNkoBhQqum6PKz878axmvDu76i%2BqjHYL0xozXf%2BfQuDykyvPst%2FMVE7JqNDqDcX91KudY493SGwSQPa34zU11xgw1BC9XCekLQuCDYtQVyIJL4PtghWqAzpxW8dgPcsQ1Muc7YV79XgI%2BgV0jiAIrNDUZfaiLp9tGcd7KgudvEQHKajSXFahu0U5YbKC1DsaPBb9Yi%2FEOhg7Afw0wctIEI4oi%2B3Ch5o3MElxupFpTLR5eTHWH%2FJxp1x6zRVrbow1iRYMOfc3MkGOqUBqdfj4EqDJD6ke9zSjNwDNncqYRHMGAujKt%2FE9cMVPKwMA8sCe0AJEUUoVUwW3wZrddTxbm1CapV9%2FW0fGw22qvLhnkXBC4QCo5V4Z%2FG99a1vWV%2B5EzKtXq2Ji%2B7RJY2Jw11jsERHSScpZgPQqlffwxHbtnh8LHOuGGQcNaClvrV9LPl%2Fwgtw%2BPHoyg7qk4hsnJ1W5xjIumoVBXj8I4tXY58hRVQ0&X-Amz-Signature=5aa19cd443a5c0f390c2c065235209965bf7c4bde502bebf37b0be334c9eed49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

