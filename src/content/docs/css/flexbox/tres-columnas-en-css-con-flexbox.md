---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKGIPE4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhlMrijjyfa%2Bn3vHGdONcOfKiASBJJoFWfn65O%2B%2Bz%2BrAiBc8KlvobKJARxCan2AA919hYhek9gEaSZlTo%2FUoDYNQCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMIZRpZ36QmJYtqJFgKtwDC8vui7tRX08T1o4cOStSiOGDdY8XnOhN7w3vJs5%2BrDjyu6Cy%2BlushDK1%2Fq7o4GHynR%2FPgft2EU%2Bla9mf5nFqDUwlULptFysLDV6Il72kof4g2fCp%2BWNbOJX7SdV9ykWX5XD%2FJObTZBVCDIwWRkKRLJpbTmHOdabvVLs7%2Fb%2FrQJQqSxOnUsNXtv7rFIDwi%2BqwRuE2qa4b0eGMtcRN0foZVGZpKhoq0R1Y1ueaizGadT0vArhnFPpkkq%2BJZOjRmQ6OO5QoyNB0rjYrVPfMOH5ncUwE2zjwCBDF0rlj8JnifExJhStb9Bw2tYs8P93Zri4tjX%2FT067X62LnZBi9EyK0ARLdCK4NhKvAPdWymTeu%2BN%2Fp5VDRctXDM52Dl6VckAr%2F7dUyP2486IqWfT7WPnCg0B5VGC7owyd6vCE1nu%2BmajJS9Tt3B5j1ZWKWoc0NmyizwvTmspOq4RpGzMrfIkPlOapqCBKFZbQG9uOtfYE6TTST5WZUsLbVAA1Y8hbwNAC8QAnCDULnf5NQSGTNjbr%2Bv%2BcW%2BosDWN4Yz9IrJ9X2SwiHggTEq%2FUBwX4QWm99yuIbqHBWWRQSn8N6vXfcdoU57naAVpP97t4pCqiLEx6Jh%2B2UPnYQS4FFSJUj2U0w5PzOyQY6pgF2TKYRzebEcXsiAFryouUdCBhnMaol2fi5LugMab%2BwdkltFU1btxaF9bwkxISe13JzzAM%2FzsorE748ROxNIZ%2BAT8wuU3qzR1CvSf%2BG5qQ0ozFZ7xl85PLJeDYGjvYQaQt5lGsFwTdIvf%2FKSLT136gMiSZ46vzaWUjZ6%2FckCzqKMdvyzef90n7D68c2uxkwtyGipY6cl9u08tlDBp1Bri1TXRo4HCiw&X-Amz-Signature=8374819bf18e4ddda9545b0615a0175e609c63f20bf1f83a7cc16e0c7b14cd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKGIPE4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhlMrijjyfa%2Bn3vHGdONcOfKiASBJJoFWfn65O%2B%2Bz%2BrAiBc8KlvobKJARxCan2AA919hYhek9gEaSZlTo%2FUoDYNQCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMIZRpZ36QmJYtqJFgKtwDC8vui7tRX08T1o4cOStSiOGDdY8XnOhN7w3vJs5%2BrDjyu6Cy%2BlushDK1%2Fq7o4GHynR%2FPgft2EU%2Bla9mf5nFqDUwlULptFysLDV6Il72kof4g2fCp%2BWNbOJX7SdV9ykWX5XD%2FJObTZBVCDIwWRkKRLJpbTmHOdabvVLs7%2Fb%2FrQJQqSxOnUsNXtv7rFIDwi%2BqwRuE2qa4b0eGMtcRN0foZVGZpKhoq0R1Y1ueaizGadT0vArhnFPpkkq%2BJZOjRmQ6OO5QoyNB0rjYrVPfMOH5ncUwE2zjwCBDF0rlj8JnifExJhStb9Bw2tYs8P93Zri4tjX%2FT067X62LnZBi9EyK0ARLdCK4NhKvAPdWymTeu%2BN%2Fp5VDRctXDM52Dl6VckAr%2F7dUyP2486IqWfT7WPnCg0B5VGC7owyd6vCE1nu%2BmajJS9Tt3B5j1ZWKWoc0NmyizwvTmspOq4RpGzMrfIkPlOapqCBKFZbQG9uOtfYE6TTST5WZUsLbVAA1Y8hbwNAC8QAnCDULnf5NQSGTNjbr%2Bv%2BcW%2BosDWN4Yz9IrJ9X2SwiHggTEq%2FUBwX4QWm99yuIbqHBWWRQSn8N6vXfcdoU57naAVpP97t4pCqiLEx6Jh%2B2UPnYQS4FFSJUj2U0w5PzOyQY6pgF2TKYRzebEcXsiAFryouUdCBhnMaol2fi5LugMab%2BwdkltFU1btxaF9bwkxISe13JzzAM%2FzsorE748ROxNIZ%2BAT8wuU3qzR1CvSf%2BG5qQ0ozFZ7xl85PLJeDYGjvYQaQt5lGsFwTdIvf%2FKSLT136gMiSZ46vzaWUjZ6%2FckCzqKMdvyzef90n7D68c2uxkwtyGipY6cl9u08tlDBp1Bri1TXRo4HCiw&X-Amz-Signature=ef54816d9a1138b1d692a07fcf99dde104de3ed506e71d0f89638aed86e8e99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

