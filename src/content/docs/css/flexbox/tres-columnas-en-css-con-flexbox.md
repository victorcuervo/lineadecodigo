---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676DO2MB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDURCz5jBk1ie1r1rmgK7zZ2zQYL11EVSMfkykjH5y4gIhAJpctQJOVCzz5x8R3jN6QJ9FMPjA%2BofEaJpyQaVGg8JdKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn5h7mQndpcGfny90q3AP5kYm5Gt8qXZWPffpvpD9nNv6PA0HPZpsaL8%2BR0ZejIb981lAfps4DavwnwLMAyoUqiMC18bgUexjtDiezMesqcH%2BRPDmGTmobzGIUFa%2BtnTDqL6JnSFr0GXzsbokUHb0n0aDcm5ffZn22Zjb%2BpD0EdYePWm%2BQlfsFlH7HrbHV8Nlk51Lbw9lwosZtlXyFfomrj%2BfeBNt0G2vWYH9%2B3HN6wIik63pmjObINUhye0UN7s2B92bpzEpFKdSgHKIJdl9Ngqqq1ubZu57XMMS4DKb7GnfSwQ2kRybKkDUXwuqbx3diL6OPTHlcjRVoUJ0HOfpxuveGKf%2BxRTHnkPPOca5d9i9Y01PReLPdt5FqfLl3pqkl9Y1BwYOaHbB%2FSQu0kSBTamDIFliJVPi2TRLiQ29e49z%2B3OH0yiotbttGyDJxQNwcIRNXqglxQBA3Uhmw5osdwbJSdDjwDUoQPvv%2BoxIb6PHKJTZgMjHp29t%2FVOAMpy%2BKME5CYP3qmaa1ExaVdcpu4i0iKdgLoIFxU3ngkd%2BfYtL9VPWVp2sD6LBI4sBUh6x4zGvyaeZpTCHF0RmfxwTm1tdW%2BDcYzbfpwraWJqcW7kMs1Yb%2BGS07pafJfcs8VBqIXHhCWqPV8fkJvzC2mdXJBjqkAaEptACm79G9ybR%2F0Q9fHPlIOFI5ZNU2TA2yvtXWGsPjJV1N2irhiAD9PrkrZEuZRon65dkG6EdJ7%2B6VAPiwfC%2FyFjgy9TnHAo8XRFcS%2FnHDDrc%2Bkzm0lep%2Bzlo2Lo8wNHm3s8bDJiA%2FbFPdbxS5bpaLHSRfOVOd%2F28srv6U%2BMHz43vR0pHgkXmlWC%2BheGoz947uTYPcv1Z5jz%2Fm7aOLZXPRA90k&X-Amz-Signature=f185b124af47c4b15ce5af6da30a2e5ac08793d0efc5c2d23783b4489182b816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676DO2MB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDURCz5jBk1ie1r1rmgK7zZ2zQYL11EVSMfkykjH5y4gIhAJpctQJOVCzz5x8R3jN6QJ9FMPjA%2BofEaJpyQaVGg8JdKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn5h7mQndpcGfny90q3AP5kYm5Gt8qXZWPffpvpD9nNv6PA0HPZpsaL8%2BR0ZejIb981lAfps4DavwnwLMAyoUqiMC18bgUexjtDiezMesqcH%2BRPDmGTmobzGIUFa%2BtnTDqL6JnSFr0GXzsbokUHb0n0aDcm5ffZn22Zjb%2BpD0EdYePWm%2BQlfsFlH7HrbHV8Nlk51Lbw9lwosZtlXyFfomrj%2BfeBNt0G2vWYH9%2B3HN6wIik63pmjObINUhye0UN7s2B92bpzEpFKdSgHKIJdl9Ngqqq1ubZu57XMMS4DKb7GnfSwQ2kRybKkDUXwuqbx3diL6OPTHlcjRVoUJ0HOfpxuveGKf%2BxRTHnkPPOca5d9i9Y01PReLPdt5FqfLl3pqkl9Y1BwYOaHbB%2FSQu0kSBTamDIFliJVPi2TRLiQ29e49z%2B3OH0yiotbttGyDJxQNwcIRNXqglxQBA3Uhmw5osdwbJSdDjwDUoQPvv%2BoxIb6PHKJTZgMjHp29t%2FVOAMpy%2BKME5CYP3qmaa1ExaVdcpu4i0iKdgLoIFxU3ngkd%2BfYtL9VPWVp2sD6LBI4sBUh6x4zGvyaeZpTCHF0RmfxwTm1tdW%2BDcYzbfpwraWJqcW7kMs1Yb%2BGS07pafJfcs8VBqIXHhCWqPV8fkJvzC2mdXJBjqkAaEptACm79G9ybR%2F0Q9fHPlIOFI5ZNU2TA2yvtXWGsPjJV1N2irhiAD9PrkrZEuZRon65dkG6EdJ7%2B6VAPiwfC%2FyFjgy9TnHAo8XRFcS%2FnHDDrc%2Bkzm0lep%2Bzlo2Lo8wNHm3s8bDJiA%2FbFPdbxS5bpaLHSRfOVOd%2F28srv6U%2BMHz43vR0pHgkXmlWC%2BheGoz947uTYPcv1Z5jz%2Fm7aOLZXPRA90k&X-Amz-Signature=214c6f4a2c1a60ab4cfdf43403f0c2a696aa8695abbc9c7d8481227d39faf4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

