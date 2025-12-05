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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4V7OAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEHsk9JtyF3zhmcw2BTBto5lAmLUU%2FVAZ8ebAn8HWXXAiAQwqtK0ShftDXmcUflnf4L1KwIDAaqCBkbEHbI5fZIxyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyvUGs6%2F5ktSG45UbKtwD%2BNxNQlCO2P9N85DymAJcQMYVv7QOyrxIrnh9j1ykJGOdIXfiwB3eGhKwC3sv1lnGl4xX95DVRAYzUr4bSbh0tbEm1wGGabcr6WJr7eBYn8DJNyN7hSj1KxMcfSsAlDrHCprk9q1qpny8WRAh6f7lIgHkUNuZ%2BE1LmmRhtQMpEe6A6Mrv7Us8loRwjXfueoVpCeRtu1nAFPsog%2FWDIWdMI1k7LhPYqqxYOSaZS0pA0zfJj4dTews7nuHO29EHMTiPx%2FwLPVj7WD0jyJ8iwycR2U7y0cCXSufZej0evYbRL2j2%2BsBVWznl4Op0yec77z8wZSGDnwGlANn4%2BeApEOlo3eZtWcfDtSdudlBXPHwhfYxuh%2FS5FkKQnFzS0JyU%2BipsgmSZ%2BK4So1W5gNrNzMpsDN8zkC10HU3RiK8dby9Z3Dk2%2B7yVpN1HRLlE9QxPesv7r42f3ISuZcZMJgEdvO1AkY3yVTSKVD427Dzxo5984lsp2ZqbWbhhW%2Fo%2BrIKo7oaAU%2FCgPwKTyjLGwWAX7oaP1YvVnbBqMIsHSAt6QMzMqqyORZrQ19Zy1R8yyfLwo%2B3d57JE1kyjZHYeMUacc7S0km5xUVNr2IU68VAkk4wib1u4XzQH0xWva%2FOki9ow0q7JyQY6pgGtA%2FM8j4vUGrZNOA46zDAKHDi6J5CfRREWz7T914YBFOLyOFppFTBzPz6q8CHXQVnVYTpr4b%2Fe4TqCkVeuaLyevPdSmPBDbvjpQD4rK03tRb35YSiuJnpCKupXyjusR4VebPJdYE6eBJTIvxHIGnE%2F01BEfKnnBFY9lreeJgigp%2BbT2ZtTEC7NoElHWThznrv8sjtdrhOf50O2CetJNlz4LFZW6ebe&X-Amz-Signature=915eccf270d9c838c9ca1c2ac90f6c4286e4840b37d293df1a1f32a0e7991555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4V7OAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEHsk9JtyF3zhmcw2BTBto5lAmLUU%2FVAZ8ebAn8HWXXAiAQwqtK0ShftDXmcUflnf4L1KwIDAaqCBkbEHbI5fZIxyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyvUGs6%2F5ktSG45UbKtwD%2BNxNQlCO2P9N85DymAJcQMYVv7QOyrxIrnh9j1ykJGOdIXfiwB3eGhKwC3sv1lnGl4xX95DVRAYzUr4bSbh0tbEm1wGGabcr6WJr7eBYn8DJNyN7hSj1KxMcfSsAlDrHCprk9q1qpny8WRAh6f7lIgHkUNuZ%2BE1LmmRhtQMpEe6A6Mrv7Us8loRwjXfueoVpCeRtu1nAFPsog%2FWDIWdMI1k7LhPYqqxYOSaZS0pA0zfJj4dTews7nuHO29EHMTiPx%2FwLPVj7WD0jyJ8iwycR2U7y0cCXSufZej0evYbRL2j2%2BsBVWznl4Op0yec77z8wZSGDnwGlANn4%2BeApEOlo3eZtWcfDtSdudlBXPHwhfYxuh%2FS5FkKQnFzS0JyU%2BipsgmSZ%2BK4So1W5gNrNzMpsDN8zkC10HU3RiK8dby9Z3Dk2%2B7yVpN1HRLlE9QxPesv7r42f3ISuZcZMJgEdvO1AkY3yVTSKVD427Dzxo5984lsp2ZqbWbhhW%2Fo%2BrIKo7oaAU%2FCgPwKTyjLGwWAX7oaP1YvVnbBqMIsHSAt6QMzMqqyORZrQ19Zy1R8yyfLwo%2B3d57JE1kyjZHYeMUacc7S0km5xUVNr2IU68VAkk4wib1u4XzQH0xWva%2FOki9ow0q7JyQY6pgGtA%2FM8j4vUGrZNOA46zDAKHDi6J5CfRREWz7T914YBFOLyOFppFTBzPz6q8CHXQVnVYTpr4b%2Fe4TqCkVeuaLyevPdSmPBDbvjpQD4rK03tRb35YSiuJnpCKupXyjusR4VebPJdYE6eBJTIvxHIGnE%2F01BEfKnnBFY9lreeJgigp%2BbT2ZtTEC7NoElHWThznrv8sjtdrhOf50O2CetJNlz4LFZW6ebe&X-Amz-Signature=9d6d88600a8bede5479bcdc7abb31edffde0d451f6d224c62cb7ae16dbf8165a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
