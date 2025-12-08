---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ORLTST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EmK39CGPOCXgeWjgj4%2BlCR%2FNMLdaJFuS9hXRp1WQNwIgMmBd1krmYNyi%2B81%2B16Ey3qu2B8tMxv6D5ws0rfDbcIwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw2kpki%2FGIc4h8VDyrcA9ZHon7OtRWokLNrsmiarjsc4AIHq7C%2BZjrYWWHr%2Fat4DSggUKmtLgGXwCageQmEN4v37N4ELXjvoQezklVXeswxhs%2BOmS%2FAaQ7S1%2BERrfuge6C7NWeMQ1Y54cmfamVHX1xcJaTKU39rLnnzBpKrFTf7oj1qLWqBlCq1kShXLNJrY72t6BeDzsFwGH5qKbB1AV5leGbRmp1B1c0qeTlMvlTO3utzAQ694jNI8t24s6v%2FbasRbhlizBHOJbsow%2BoXaqsryUdS0DnS6jTCHDmaY00uA5VxIagz27xAZxKEeeXRjAGjifLPAy1LS2OtFlmmbj1H3ceMQrep1StSRmI86kKOYHe62YiEN6JGBnaUWvio82Gfxur2NUBD5mGtYRFJoVEusc%2Bu4Zt5Eo5z2RNbQ8L6jLDM3zB9F0YtCCU9k2OgRs8P0BaUeJJ5TAT6az3nxcMwJynmIQlkWJwHYoUTlKTBXrkbk1gsUo1XWEen4fH9XjyRXFyRF9NDpg6ZA%2BLGxkwe%2F4mc1jise%2B%2FRhbNcI2EDwp7rzWieAGyfTDomf6BvOxVop9sLpX%2F7ZNCtWF2LNvYTd2CSop3s6o7xBaCVPOZUKN1FWqEQQjIi%2FuPRX%2FJUQ1oRXeseP0Vl%2B0TYMPOh3ckGOqUBQyQ3qib0qxtDT2X5AV8tI2MhHTX3i2VNk2b4KaW5jtA%2BY%2FYGYl%2FBuLDhqH5qtvRc5DsZU9u0IojoqQ1vK%2Ffg5CrZ0IhSx2yl66HBLhR%2BMn2FhC5OUy%2FLQUUxRgxrH9NKt8%2F0f1%2Bi7%2FOvAJNHqIrlTepcFLvUl0M2SBmxRzDwxa9l7Uzs92U7Y5ZukMCZe7ZhVmmDgSKFBK9F9CbH3aOJSo%2Bxf0Vn&X-Amz-Signature=dca0eff83e16ffc3c3dcb7388e4aba83cd1e1b7d7d246f4202cea831107654da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ORLTST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EmK39CGPOCXgeWjgj4%2BlCR%2FNMLdaJFuS9hXRp1WQNwIgMmBd1krmYNyi%2B81%2B16Ey3qu2B8tMxv6D5ws0rfDbcIwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw2kpki%2FGIc4h8VDyrcA9ZHon7OtRWokLNrsmiarjsc4AIHq7C%2BZjrYWWHr%2Fat4DSggUKmtLgGXwCageQmEN4v37N4ELXjvoQezklVXeswxhs%2BOmS%2FAaQ7S1%2BERrfuge6C7NWeMQ1Y54cmfamVHX1xcJaTKU39rLnnzBpKrFTf7oj1qLWqBlCq1kShXLNJrY72t6BeDzsFwGH5qKbB1AV5leGbRmp1B1c0qeTlMvlTO3utzAQ694jNI8t24s6v%2FbasRbhlizBHOJbsow%2BoXaqsryUdS0DnS6jTCHDmaY00uA5VxIagz27xAZxKEeeXRjAGjifLPAy1LS2OtFlmmbj1H3ceMQrep1StSRmI86kKOYHe62YiEN6JGBnaUWvio82Gfxur2NUBD5mGtYRFJoVEusc%2Bu4Zt5Eo5z2RNbQ8L6jLDM3zB9F0YtCCU9k2OgRs8P0BaUeJJ5TAT6az3nxcMwJynmIQlkWJwHYoUTlKTBXrkbk1gsUo1XWEen4fH9XjyRXFyRF9NDpg6ZA%2BLGxkwe%2F4mc1jise%2B%2FRhbNcI2EDwp7rzWieAGyfTDomf6BvOxVop9sLpX%2F7ZNCtWF2LNvYTd2CSop3s6o7xBaCVPOZUKN1FWqEQQjIi%2FuPRX%2FJUQ1oRXeseP0Vl%2B0TYMPOh3ckGOqUBQyQ3qib0qxtDT2X5AV8tI2MhHTX3i2VNk2b4KaW5jtA%2BY%2FYGYl%2FBuLDhqH5qtvRc5DsZU9u0IojoqQ1vK%2Ffg5CrZ0IhSx2yl66HBLhR%2BMn2FhC5OUy%2FLQUUxRgxrH9NKt8%2F0f1%2Bi7%2FOvAJNHqIrlTepcFLvUl0M2SBmxRzDwxa9l7Uzs92U7Y5ZukMCZe7ZhVmmDgSKFBK9F9CbH3aOJSo%2Bxf0Vn&X-Amz-Signature=fb4921bda5fee308f20b8c9e0d193aa4ea68af54c131b163ba481ce2958a8f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

