---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZK6MGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0Qx2AEf2wSA8EnKb%2F8lN7PLr8xsUZySkG68I3QAuQAiADEJBh6FDPIOGa0xr6Ou1fGoSi5eSgmrBhv9NjstgzwiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjEVZtG8Wr6efDHsKtwD6lmBTIThju9E%2Fi9Osi%2BGB8Jmy3nJl79jwHzGngLTD08zyGYwCOYSdFK4YjREhXA33n1mklZMPSUNW97kMklGbkkDV890ix0pjmLo9RduUvn6IDn6W8jD2Hx9grrfehx1VXDG70Z7N2zkyKc7gXjsK2XVKDDZrUb%2BwjeSk8N5ndwyxiPQjvYEc0QmC3i3WUIKU5Scg1hU0Yp3%2FiZ4gFlBEqnlyW%2BubLgBzbf7LrbBb3ywhPLyfFx7ZuqpDivT5gd0sJnb6pzGalLVcUxAIGKjglWvaK36udIG%2BtHqXeFRG3pRPZvWmDRJKy8AnfN%2BBoreODfQ%2F37W8HapUeVHebV8E8tAOgFbGG1cs0lDprq66dVkSdlq3p8Ii%2BrNI6k2Q7ibohzuXTtHkavzMWUk9aBcrfCwImAQ9Z50DtgoNFR8Z5KS8Yg%2FiaCd%2F%2F8inTY%2Fjpzq1AqCSfN7uPVGamQ1OPxUM3IRt4%2F8r39q6ycFADPgemsNcsKnHWWm%2BvTykvpOZ%2FOvgBrPh498BlM08eBuSibZCs%2BNIq3Uwmw0GabmJVIjHhBzLFM7msNyrAvR3yi7uwf96R4VWoFr5BZ6Qdc1tJLYe6ZjUKPHIxBQB0d1zpk0PzVaMbr0BOH4IB7oEcIwv7TcyQY6pgFodx9wW4FxCAo4uLB2JsRohBcEJWItUEP1vnyTPPgm8R6y4iMgjLMK%2BHqKtt6Hw3g6FjItWNy%2FGsXrSebz%2FSGywZy%2B0BThhhN6cgb9bIJyFzv6KXEYyv5tvrkAjkZjqLdwP5BZ%2BzKvXR4UmeJ4MbyuifkNDxyYuwfHFQr%2Bl9Qs%2FsayIFevZugwW12Vxzf0dqbmI%2BWlXpygkl0vTOUczsb649CxVd1g&X-Amz-Signature=9f59db54bf90ec4a5a120f500dd1d35f538f7eb9fca05456bf31fe9f31525c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZK6MGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0Qx2AEf2wSA8EnKb%2F8lN7PLr8xsUZySkG68I3QAuQAiADEJBh6FDPIOGa0xr6Ou1fGoSi5eSgmrBhv9NjstgzwiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjEVZtG8Wr6efDHsKtwD6lmBTIThju9E%2Fi9Osi%2BGB8Jmy3nJl79jwHzGngLTD08zyGYwCOYSdFK4YjREhXA33n1mklZMPSUNW97kMklGbkkDV890ix0pjmLo9RduUvn6IDn6W8jD2Hx9grrfehx1VXDG70Z7N2zkyKc7gXjsK2XVKDDZrUb%2BwjeSk8N5ndwyxiPQjvYEc0QmC3i3WUIKU5Scg1hU0Yp3%2FiZ4gFlBEqnlyW%2BubLgBzbf7LrbBb3ywhPLyfFx7ZuqpDivT5gd0sJnb6pzGalLVcUxAIGKjglWvaK36udIG%2BtHqXeFRG3pRPZvWmDRJKy8AnfN%2BBoreODfQ%2F37W8HapUeVHebV8E8tAOgFbGG1cs0lDprq66dVkSdlq3p8Ii%2BrNI6k2Q7ibohzuXTtHkavzMWUk9aBcrfCwImAQ9Z50DtgoNFR8Z5KS8Yg%2FiaCd%2F%2F8inTY%2Fjpzq1AqCSfN7uPVGamQ1OPxUM3IRt4%2F8r39q6ycFADPgemsNcsKnHWWm%2BvTykvpOZ%2FOvgBrPh498BlM08eBuSibZCs%2BNIq3Uwmw0GabmJVIjHhBzLFM7msNyrAvR3yi7uwf96R4VWoFr5BZ6Qdc1tJLYe6ZjUKPHIxBQB0d1zpk0PzVaMbr0BOH4IB7oEcIwv7TcyQY6pgFodx9wW4FxCAo4uLB2JsRohBcEJWItUEP1vnyTPPgm8R6y4iMgjLMK%2BHqKtt6Hw3g6FjItWNy%2FGsXrSebz%2FSGywZy%2B0BThhhN6cgb9bIJyFzv6KXEYyv5tvrkAjkZjqLdwP5BZ%2BzKvXR4UmeJ4MbyuifkNDxyYuwfHFQr%2Bl9Qs%2FsayIFevZugwW12Vxzf0dqbmI%2BWlXpygkl0vTOUczsb649CxVd1g&X-Amz-Signature=f13a4fb96899e3e4c0ba83fc6392ae7bd63a0fa67bdd1bf5842a55e3f58dde3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
