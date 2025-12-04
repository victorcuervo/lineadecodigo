---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5Z6CEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKIdRiF6Gq6hqz0DlJmKaLr2Svb3hHpzAmy5N4fkjNRAiEAo6mYQEVHq%2FoPrpvVCMYu5AmZsSrkCy7TI0aUlbXeepQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOj6Ia0dDdYeqBHHmyrcAyMF%2Byi20Mc7%2BLca1U%2Fk1s%2FN0gxD9w2xnAUzW%2FUByEBZow%2BhVq4u63HAfBCHdCU5XBqrJNSE7hOKg9W5u5ztMOwenKLj9rZoFeUGKHhbUkHFHWS%2BXJqS81vwsW68yKQSKZiZ8DAus4f4y1OqERDgW0zVbtJ0%2FWKet%2FWz0cT2T1XdtVxZDs%2F7aTDF6DFg331sCN8OE1pXShGLFlYAbUsK7K%2FgQCmHrw2Y7p2tcyiMptVmBR%2Fgt4BUrGlmiyB%2Fnu1BvAgtp26SFNTi6zAirWYwvx%2BXJyIPtM1kDFfK15d8pjOZycNY0xSsiWuI3cyjAZpv8LT1ugCispsoXrl5AmvuThoCt%2F5%2BuswUwDZnuiVRsVFqy2%2BpwMh1twKAFI%2BSsx4WBQChaIocZmaoBi0%2FkKNUGbe6Q8RUAuI2%2BqNi3ncHpp2ES8qzZoYF4DU8XHFJtau%2Bfu%2Fzlh6ycpnk4Tz1H9Bjw%2BVvCKIigb6Vqy14HRaiiNODDKiuHn53kziUZuVj3FgRS7P6vKii2paJZfxNQa%2FMi3MKetyhzFc27e%2BggWTPHfyOPsvIMRp8xGRF4DOcBT93kL%2FO2pLuG8hvsfD7Br4B5hAK7nnzYq9COb0%2BTD%2BsCH9WrUHllsmms8E%2F2aRCMKGMyMkGOqUBgBvJ4GGrocpIjh57QXbTJ4Iltywh6iU4Mh8liN%2B1WPdbIrQIYzmNyGTb4sj%2B%2FZeN%2FpzRXSErs08GiXaN1MKyKgtJhily9Khd%2Ff8xPXovXI2OIb%2FaAJ3PlC%2FJv0tNJD%2BuHKIKQspbozs4gkiuKGDAxteSa8pNe1mbBDl6g1L3ftyK4j6YbbWUYuAohoSHhC9QbTnXjDMi9wkp4vwgkhtPTUoJls9n&X-Amz-Signature=922b0fc9c250311ac818d5bbe46e30728f666cee577eb9ca19444ec2e6889d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5Z6CEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKIdRiF6Gq6hqz0DlJmKaLr2Svb3hHpzAmy5N4fkjNRAiEAo6mYQEVHq%2FoPrpvVCMYu5AmZsSrkCy7TI0aUlbXeepQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOj6Ia0dDdYeqBHHmyrcAyMF%2Byi20Mc7%2BLca1U%2Fk1s%2FN0gxD9w2xnAUzW%2FUByEBZow%2BhVq4u63HAfBCHdCU5XBqrJNSE7hOKg9W5u5ztMOwenKLj9rZoFeUGKHhbUkHFHWS%2BXJqS81vwsW68yKQSKZiZ8DAus4f4y1OqERDgW0zVbtJ0%2FWKet%2FWz0cT2T1XdtVxZDs%2F7aTDF6DFg331sCN8OE1pXShGLFlYAbUsK7K%2FgQCmHrw2Y7p2tcyiMptVmBR%2Fgt4BUrGlmiyB%2Fnu1BvAgtp26SFNTi6zAirWYwvx%2BXJyIPtM1kDFfK15d8pjOZycNY0xSsiWuI3cyjAZpv8LT1ugCispsoXrl5AmvuThoCt%2F5%2BuswUwDZnuiVRsVFqy2%2BpwMh1twKAFI%2BSsx4WBQChaIocZmaoBi0%2FkKNUGbe6Q8RUAuI2%2BqNi3ncHpp2ES8qzZoYF4DU8XHFJtau%2Bfu%2Fzlh6ycpnk4Tz1H9Bjw%2BVvCKIigb6Vqy14HRaiiNODDKiuHn53kziUZuVj3FgRS7P6vKii2paJZfxNQa%2FMi3MKetyhzFc27e%2BggWTPHfyOPsvIMRp8xGRF4DOcBT93kL%2FO2pLuG8hvsfD7Br4B5hAK7nnzYq9COb0%2BTD%2BsCH9WrUHllsmms8E%2F2aRCMKGMyMkGOqUBgBvJ4GGrocpIjh57QXbTJ4Iltywh6iU4Mh8liN%2B1WPdbIrQIYzmNyGTb4sj%2B%2FZeN%2FpzRXSErs08GiXaN1MKyKgtJhily9Khd%2Ff8xPXovXI2OIb%2FaAJ3PlC%2FJv0tNJD%2BuHKIKQspbozs4gkiuKGDAxteSa8pNe1mbBDl6g1L3ftyK4j6YbbWUYuAohoSHhC9QbTnXjDMi9wkp4vwgkhtPTUoJls9n&X-Amz-Signature=63d40e606c2a16e7ef5582d2282a4ab4850f269652b8ba377326bf6515a8d08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

