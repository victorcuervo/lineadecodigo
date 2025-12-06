---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGV7KV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv0ZwqNHT9CKVZEOXSYPH2VpeohSlxRrMfhP7nCl4TBAiBZo%2BejoFUBOqUTjuG4RAEy%2BuobhB9tTm3xyTOhMQEMqCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMT3%2B9%2B50cx9Tm3zraKtwDLAk0OMK1x8IjzCbCQeXGeehpb3iCER59JdcHKesCUzyC9j8L8%2FoxNZ9Nrl5F7cmvW1seKbBt%2FUwMGL3HA%2FTKy5gro8gWF%2BF6Re2JGy2CCEn2rQHeS2LbgCjxxoTfQV0ihaY28zZa0xIpOr7Hq7WkEBsE9Lp5EOEFlpLVApYlby6Ef%2FryOSsXSFNV5o49b66fT7rv2Zow44uvjbWPsSWrA0726Hk6nYxPLMGHutMI1PxCZOtZRE96tznxPcWtnuW1ZgTdpsBj8%2Frl%2Fu5lzYlcuXfSlozjOIx86A8%2BzMzEkvBsvf%2FHlPujBVVWlNmQQQ81UJ6PUn9nJ%2Blba4v8jmtQgSk88PoEBKNFlChKHL3PM7xW1318W2uUgzS8iRerzNy5HSjpyjFDUK1hI31RmZzwHp4VIo8MPiX5H8ZwrmIi%2F%2FRcuZcKQCssU%2Fnw%2BKDKj9anr0l7lnmG4cRlsAlMS235zyZhqTR8k6am8nJ%2FQlc3yOPPeAEmKoeR%2BGV7oT1J4V%2FdxrC3KB1y3IZ9ngKPtpET8gHmBKrWKUu7j%2FrZKtuevPyjsqkIrqoVBNqVwkbnnvMg1AEE8m3rPtffWVSzTl4CKMmW%2FCHU6NqnehH5s1Rmot79OtmBfwccTi0WQFgwgKfQyQY6pgEAX8fa5kKRxbDRv4M0P8gia2g6ndDQGjBoh3QrjT2Y9W63quiLW55NjYU40h1%2FP6%2FYuPh29jMx4t6Oqd%2FAdv%2Fg5kWrDvrcx5S7bZJakvyKrFGyRkgCCrF5ZDM864Sz15PPrz9tkwAUId8OF%2FQf%2BYjyNQOGvE8l%2FZ0FXWeaJN%2BnaFwxpobkn7WoDJEue3swnRwhyzTds2oZPvTHeynND0q2lp%2BoTwZw&X-Amz-Signature=fb59350eac658e7bf6b6ef5045b8567ac85e6679739e7ee85ffbfd009218a459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGV7KV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv0ZwqNHT9CKVZEOXSYPH2VpeohSlxRrMfhP7nCl4TBAiBZo%2BejoFUBOqUTjuG4RAEy%2BuobhB9tTm3xyTOhMQEMqCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMT3%2B9%2B50cx9Tm3zraKtwDLAk0OMK1x8IjzCbCQeXGeehpb3iCER59JdcHKesCUzyC9j8L8%2FoxNZ9Nrl5F7cmvW1seKbBt%2FUwMGL3HA%2FTKy5gro8gWF%2BF6Re2JGy2CCEn2rQHeS2LbgCjxxoTfQV0ihaY28zZa0xIpOr7Hq7WkEBsE9Lp5EOEFlpLVApYlby6Ef%2FryOSsXSFNV5o49b66fT7rv2Zow44uvjbWPsSWrA0726Hk6nYxPLMGHutMI1PxCZOtZRE96tznxPcWtnuW1ZgTdpsBj8%2Frl%2Fu5lzYlcuXfSlozjOIx86A8%2BzMzEkvBsvf%2FHlPujBVVWlNmQQQ81UJ6PUn9nJ%2Blba4v8jmtQgSk88PoEBKNFlChKHL3PM7xW1318W2uUgzS8iRerzNy5HSjpyjFDUK1hI31RmZzwHp4VIo8MPiX5H8ZwrmIi%2F%2FRcuZcKQCssU%2Fnw%2BKDKj9anr0l7lnmG4cRlsAlMS235zyZhqTR8k6am8nJ%2FQlc3yOPPeAEmKoeR%2BGV7oT1J4V%2FdxrC3KB1y3IZ9ngKPtpET8gHmBKrWKUu7j%2FrZKtuevPyjsqkIrqoVBNqVwkbnnvMg1AEE8m3rPtffWVSzTl4CKMmW%2FCHU6NqnehH5s1Rmot79OtmBfwccTi0WQFgwgKfQyQY6pgEAX8fa5kKRxbDRv4M0P8gia2g6ndDQGjBoh3QrjT2Y9W63quiLW55NjYU40h1%2FP6%2FYuPh29jMx4t6Oqd%2FAdv%2Fg5kWrDvrcx5S7bZJakvyKrFGyRkgCCrF5ZDM864Sz15PPrz9tkwAUId8OF%2FQf%2BYjyNQOGvE8l%2FZ0FXWeaJN%2BnaFwxpobkn7WoDJEue3swnRwhyzTds2oZPvTHeynND0q2lp%2BoTwZw&X-Amz-Signature=40af4bcbd9c549642c8c8d96dea1f66527bb279e7b96635a5fd221c74dee523a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

