---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAY6EC2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAX4GQQsrTCHFzrG9g5P2F%2FQeFv7vjEo1bZB9AuyEg7AiEA3us5wneBCGsiHq1dBdxNSnHbB2G2bb1Iqjbli6vhClkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMogi7b1HatvtOFQ1SrcA%2BXhIMChOdOs8yRPttwkHHrzbrdAd5zrT6fB2c6dzX02qOMNEdbfCQHL%2FDPANlceMgtqKjRE5Q6Qrt1XdDMPZvNxjxnMoB2KkOksWDiSe5EKqIicAWpny4T9L8aFkErX4LxrBIzGoGPZHe5%2B8u2WpCAvkfL9qSGejAXcfwCZGZ66c4vN4gMKQTXrmh6fKbGnwZiVlBhhagBTenA%2BOsFFmosHJQBuTgOdSTo%2FY9RoQ28VEiKOTjxl%2BfW6scWYdSpjgk0t2kEIFSQHBtB3hMO2koBsxU8VIBTALVIuL37L7auMO6RuxklSK%2Fx7CgWxQoUgHkaghtpsJX%2F1g72Mxodrp49jyPTH947IExVnKidq%2Bkjw9BTpQfrUIpLYcN52VDAJ29FIqpNf09mu0NvpR42IvEICz2LiJesL92saiDDrSEQQ1T65F6fzA7lIQsdbq0gxqfsJj6Lb0b%2BSDDo0Y2t80IRFzd6xY%2BhbIDNS0SUO96r2xV4Z7WobfWX%2FMkmJGwpZJagRi3ASxKfbW%2FzseIyVaZY%2FLtO6pSXrS9fK1s2hVBF99MFHVnnWzBApD3%2BgGMf03XBXfMULGGlyrQw6SOcWJ0ATWfcPaQ%2FKfaDOZNQQhlEQhsQaZkQ%2FvDpME7DsMMym0MkGOqUBUXg%2FxHpoJ2K4mRLlE70xMQlDaTJGiEb6IbGqcu1LSZzvE2VEU3FG%2ByLnpasvPs3yOTr5tQrSZBWUGdHobA6Ew0yVMnfDGWQhGY0poqK1gmxY6ZtMTuit8yz720tuRGHnVVUhRXD13tzkW7s5FRHz0pBrk88iOHhIh0yQ6GQqHSS3P9wOgekO7k3yiUZITxfZ3AvHZMA2Er78ECLH9eBtvYYTSf%2Fl&X-Amz-Signature=6416a1bec56ae9085163c09519c98bbdab612d0a4a2100bf0c0b556a9dfd068f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAY6EC2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAX4GQQsrTCHFzrG9g5P2F%2FQeFv7vjEo1bZB9AuyEg7AiEA3us5wneBCGsiHq1dBdxNSnHbB2G2bb1Iqjbli6vhClkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMogi7b1HatvtOFQ1SrcA%2BXhIMChOdOs8yRPttwkHHrzbrdAd5zrT6fB2c6dzX02qOMNEdbfCQHL%2FDPANlceMgtqKjRE5Q6Qrt1XdDMPZvNxjxnMoB2KkOksWDiSe5EKqIicAWpny4T9L8aFkErX4LxrBIzGoGPZHe5%2B8u2WpCAvkfL9qSGejAXcfwCZGZ66c4vN4gMKQTXrmh6fKbGnwZiVlBhhagBTenA%2BOsFFmosHJQBuTgOdSTo%2FY9RoQ28VEiKOTjxl%2BfW6scWYdSpjgk0t2kEIFSQHBtB3hMO2koBsxU8VIBTALVIuL37L7auMO6RuxklSK%2Fx7CgWxQoUgHkaghtpsJX%2F1g72Mxodrp49jyPTH947IExVnKidq%2Bkjw9BTpQfrUIpLYcN52VDAJ29FIqpNf09mu0NvpR42IvEICz2LiJesL92saiDDrSEQQ1T65F6fzA7lIQsdbq0gxqfsJj6Lb0b%2BSDDo0Y2t80IRFzd6xY%2BhbIDNS0SUO96r2xV4Z7WobfWX%2FMkmJGwpZJagRi3ASxKfbW%2FzseIyVaZY%2FLtO6pSXrS9fK1s2hVBF99MFHVnnWzBApD3%2BgGMf03XBXfMULGGlyrQw6SOcWJ0ATWfcPaQ%2FKfaDOZNQQhlEQhsQaZkQ%2FvDpME7DsMMym0MkGOqUBUXg%2FxHpoJ2K4mRLlE70xMQlDaTJGiEb6IbGqcu1LSZzvE2VEU3FG%2ByLnpasvPs3yOTr5tQrSZBWUGdHobA6Ew0yVMnfDGWQhGY0poqK1gmxY6ZtMTuit8yz720tuRGHnVVUhRXD13tzkW7s5FRHz0pBrk88iOHhIh0yQ6GQqHSS3P9wOgekO7k3yiUZITxfZ3AvHZMA2Er78ECLH9eBtvYYTSf%2Fl&X-Amz-Signature=32b2ea9ae034e949b4cc1af167ead4b71e62e3c4f50906a0919e993bc3d9e48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

