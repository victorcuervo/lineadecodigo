---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJ5WG2Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLvnnN8qJy61oKAoJLs6dILHNhpDPY7SLGmU9yYqq1%2BwIhAIlIKO019GIWgko16nELkmGqBaSco670KBrhh7kEF5bFKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMZ9vNXKldA9I%2BRpAq3AN86swZhw6XUb57t2YfmZ%2Bm0MB0vEmDNGvAbWBhp5h6chrXy1psv%2FJ0TZi%2BkjeImnKQOAB80u%2Fi65NmrvPfR9cjynuY70w%2FpxSM3IYjMe32sibKZhnxll1J3pjcIHLxNg0G8dUzLuGLpG8pVEFzwM57mDS2HiJ7kemQc9rYpQ9l0%2Bf%2FjHAKpz095nXI4Vn64UBcgPHTXIdN%2FR8WZfuuHL8KRr2wMMpkOTJnPRsucgizQ2N4uTYahxiegmB%2FGenmvaVSPJ4dZaCydNbaUTAqWjmBvgkoL6dmXTwRDhxGtep7exHzM7Rtb6SB%2BelWRcW3u5jAdbL%2BYUEsGqAz2XOkrZvbqlidY%2B6%2BveTKp2v%2BMVPXvN7Ouc6krrH8aUb38DG7pPmIqM6XCsmI4L0KYQPKtvLis7e6XPIX%2BzQKAKejOyah9X9M5N6XgrX%2BWSwLsUkJ9GHBYTMdDuoTBP6TETcSYBrOoh%2BlsGcWCzgNv9P6qRq91vR%2FnrV2pjQZAomPwYeR0ClUR6fUBeE%2BjQuDXfjv04HtCpihEiMQX7tUnYyHBVMG0gMh%2Bet7y0pCHT%2Blq0RHmb0kgNxJmr0Gw6UpjLXq%2FnvXWyNyTmxSnmvj3gscse3Qab7DB2sLxgJxmmZVXzDRqNfJBjqkAQBO1I%2F0ATqsXuG6vy2Ki3hbPeLfkXipC4VSLrOlxHb7wIXlmHHjgeTlX7%2FbMS967B3ZIQf6XSetnJHwkHML5J2JppbAHTqRkibYj0GSxHkEEEFjGQgmlBunjxWr86w4PP5QqfTwGzeZfFCbrizEhyUaVWuK021spQhtvrI8gbQfV8XRRpv200DJpkW6jRWEKfxfRWqWb%2BUVUoSkDuNdNCw%2Fa4f%2B&X-Amz-Signature=93d5fd02dba195f551bdb5e787e77a638ce1fe44b35c1a52e5471c05b1ebb97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJ5WG2Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLvnnN8qJy61oKAoJLs6dILHNhpDPY7SLGmU9yYqq1%2BwIhAIlIKO019GIWgko16nELkmGqBaSco670KBrhh7kEF5bFKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMZ9vNXKldA9I%2BRpAq3AN86swZhw6XUb57t2YfmZ%2Bm0MB0vEmDNGvAbWBhp5h6chrXy1psv%2FJ0TZi%2BkjeImnKQOAB80u%2Fi65NmrvPfR9cjynuY70w%2FpxSM3IYjMe32sibKZhnxll1J3pjcIHLxNg0G8dUzLuGLpG8pVEFzwM57mDS2HiJ7kemQc9rYpQ9l0%2Bf%2FjHAKpz095nXI4Vn64UBcgPHTXIdN%2FR8WZfuuHL8KRr2wMMpkOTJnPRsucgizQ2N4uTYahxiegmB%2FGenmvaVSPJ4dZaCydNbaUTAqWjmBvgkoL6dmXTwRDhxGtep7exHzM7Rtb6SB%2BelWRcW3u5jAdbL%2BYUEsGqAz2XOkrZvbqlidY%2B6%2BveTKp2v%2BMVPXvN7Ouc6krrH8aUb38DG7pPmIqM6XCsmI4L0KYQPKtvLis7e6XPIX%2BzQKAKejOyah9X9M5N6XgrX%2BWSwLsUkJ9GHBYTMdDuoTBP6TETcSYBrOoh%2BlsGcWCzgNv9P6qRq91vR%2FnrV2pjQZAomPwYeR0ClUR6fUBeE%2BjQuDXfjv04HtCpihEiMQX7tUnYyHBVMG0gMh%2Bet7y0pCHT%2Blq0RHmb0kgNxJmr0Gw6UpjLXq%2FnvXWyNyTmxSnmvj3gscse3Qab7DB2sLxgJxmmZVXzDRqNfJBjqkAQBO1I%2F0ATqsXuG6vy2Ki3hbPeLfkXipC4VSLrOlxHb7wIXlmHHjgeTlX7%2FbMS967B3ZIQf6XSetnJHwkHML5J2JppbAHTqRkibYj0GSxHkEEEFjGQgmlBunjxWr86w4PP5QqfTwGzeZfFCbrizEhyUaVWuK021spQhtvrI8gbQfV8XRRpv200DJpkW6jRWEKfxfRWqWb%2BUVUoSkDuNdNCw%2Fa4f%2B&X-Amz-Signature=136469a5b83e0a58a8b6142ab63823c5204fffe58e3be51d6b083c4d4f2dcd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

