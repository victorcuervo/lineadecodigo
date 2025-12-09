---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZESNIUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUCvMdnXWsjqvyRG29Y8dl6HnLsJEfy2xv83%2FGyWo1iAiAEcfSvGGwkYZnEfN176jo6sOOmtEbovC5JLP3mK3U%2BTCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUDjnaS38eSW17E%2FKtwDLHwZu93Bzvs%2BKIiztkEk%2BsoDNDpbkr5r%2BU0ACNAEVCSWc0NlaRev78DFQdZMlfeXZu4JpIQGQR1QJriAjGyHpv62%2Bb9yBAt42YUPkob8407C5SVJ6U1h3kzBEWTAEsueykVFQw4OnUxZfRi8Xv8uPL8QTalQL7GT7zcZ1dVOr9GHA%2FzMDzlGXLjkHbIkMuqk25sSV5fQESQ2dlYYpWMHulD52%2BxnsnNB6eSpGcDhoEXYeK7ymYxhSfA9GyoVu6p5Vt276X9it67E7Wv4cLV7ymBLqKWfvq8vO6h9nQ%2BrDLwujVWwW0ZAAQjBzgALkboya8BbsrF2lcNpX7EVlH2irY8aPnEfMIwY0d%2Bu91O84rqssRFg0n48mKWEGb3nH%2F%2F6xRUQ19PyhvocsCVHCCMFrGlFYw%2BjaIP24MkvdMRGm3f7U4UYt%2FQXgV7aoqdT9ampMsWg5Z%2FIWwSAKjdtRpif4WPwV6%2BIa9bXh8BSFCnrsvbab4skzs0N4PH0%2Ff3u8d%2FEdG9p0kSRQPGH3WDLWQXijQk7PcKgjKq4MgmagfHY9QM0%2FQ5biBOFUVQwf89W%2Fh%2B%2FOqlg%2FmBW3QRNNCXIr3XMi%2FT4qAK%2BOG8zb5qaOytP8gbo2wiiHgfuWkWXUU0wqeTeyQY6pgEiDD0E9dyajqrcWrjagCdKZyT9Nxe0WqYt6KiYfUJXZ5yvhMe1ZwVz2yxok7weGMpgSXDGzbNpyscwyR17c1PSra25lWLvhYMtgaL1NM7t87iZWyv7U46YQMpKfG2rpbUvvsk6meFtDXgkjXpab4gtfWxp2WLKHTU6SNDxaE0x0E8WpsQXkzqEsydqTVsKActpTxOcraDOIOd%2F%2BzLwvGzrd5qf6wmx&X-Amz-Signature=aa62464a6a205ea6407c20a1a0f5a22c4bd9e1f8f90b2294644d848e1bd4e3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZESNIUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUCvMdnXWsjqvyRG29Y8dl6HnLsJEfy2xv83%2FGyWo1iAiAEcfSvGGwkYZnEfN176jo6sOOmtEbovC5JLP3mK3U%2BTCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUDjnaS38eSW17E%2FKtwDLHwZu93Bzvs%2BKIiztkEk%2BsoDNDpbkr5r%2BU0ACNAEVCSWc0NlaRev78DFQdZMlfeXZu4JpIQGQR1QJriAjGyHpv62%2Bb9yBAt42YUPkob8407C5SVJ6U1h3kzBEWTAEsueykVFQw4OnUxZfRi8Xv8uPL8QTalQL7GT7zcZ1dVOr9GHA%2FzMDzlGXLjkHbIkMuqk25sSV5fQESQ2dlYYpWMHulD52%2BxnsnNB6eSpGcDhoEXYeK7ymYxhSfA9GyoVu6p5Vt276X9it67E7Wv4cLV7ymBLqKWfvq8vO6h9nQ%2BrDLwujVWwW0ZAAQjBzgALkboya8BbsrF2lcNpX7EVlH2irY8aPnEfMIwY0d%2Bu91O84rqssRFg0n48mKWEGb3nH%2F%2F6xRUQ19PyhvocsCVHCCMFrGlFYw%2BjaIP24MkvdMRGm3f7U4UYt%2FQXgV7aoqdT9ampMsWg5Z%2FIWwSAKjdtRpif4WPwV6%2BIa9bXh8BSFCnrsvbab4skzs0N4PH0%2Ff3u8d%2FEdG9p0kSRQPGH3WDLWQXijQk7PcKgjKq4MgmagfHY9QM0%2FQ5biBOFUVQwf89W%2Fh%2B%2FOqlg%2FmBW3QRNNCXIr3XMi%2FT4qAK%2BOG8zb5qaOytP8gbo2wiiHgfuWkWXUU0wqeTeyQY6pgEiDD0E9dyajqrcWrjagCdKZyT9Nxe0WqYt6KiYfUJXZ5yvhMe1ZwVz2yxok7weGMpgSXDGzbNpyscwyR17c1PSra25lWLvhYMtgaL1NM7t87iZWyv7U46YQMpKfG2rpbUvvsk6meFtDXgkjXpab4gtfWxp2WLKHTU6SNDxaE0x0E8WpsQXkzqEsydqTVsKActpTxOcraDOIOd%2F%2BzLwvGzrd5qf6wmx&X-Amz-Signature=d6e9db4b3e48786c5cb1b7571ec3437749c3e5cad18809187103f77157543ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

