---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RBOCJRP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDx6RDReycyKzq2nBC1h2LSAk0zVK1c%2Bz5atND6tvpNmgIgSwd3BD%2BAZKjj0%2FesUhH3%2F4d0MkEQ1WhZUW6vZ%2BtBNtIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5du99golGAcmBVDircAxuJXHb3XkDp%2B%2BGWklo6OE7wZnHBXo780%2B5g0J9AePqoavJth3WqLELDubL6gvamdATuZS0%2Bb5I1DmgjHSDZ%2B8AuFNvuoX%2FZ0WVP7sRQ7%2FYpNiYqpBhMAD4Q0vOWlFd14gf0A8%2FiY0hgAkeMLdOmxftKeViUl7HXumvuNGCaEOTedHbMntnbPozdbFVgGeaKHk%2FnwYylhchXGk%2BlAEKyedPZwmBcNKms9U972aCkTg9PNUHGcju70m3YxeqMsyFZ%2BohW%2FGIrtEkbbjoe%2BnvPyuXMImCDBtgC1cI7L8OhbxZo4PX92JBXYJBy1P3A%2FtY%2BG1kHKwk31CGU1tuxtulVfFwezkWH5Gtqy3CnUyDHV00ywFFMScxTTH77AVoCwETh5uNfKIo7YunRpCRl3um%2F0lDOZRED7pZVNtc3T8oRAbS4mf%2BGfUDP010TNS0sc%2BppZe3am4%2BzhuAVBTiDjsuddL7NhNumnlvBe2CRZjxYsVEXPQJQwkElNeaeZvDn44kl8XFjMpWzhIw2PznEG0ZxesCzoGvEALtyzk8ZGLydDQix2nGgpT%2Bfqpn7OrZm1hpNlWmpQKNQRqhjkfz9WWNjhiQXjUtdJGk72OjrIdKJa7T5Ap9h95sdTeo9O%2B1EMPaUw8kGOqUB2Z%2F2n2X6nPYoDNAUBSnhQfQUSiBsDeltnX1Ow9QRGtjASQKk1adP1Uz6iMWQiDyB3lAtA6a%2B91y3ltrpesyb9YjgRV5Eg0CFY65tMU%2BfjUvuWGxaA1c5Gph%2BNHMxbrFi8x4HZqgFAucEr41A%2FQTCL2sJjA9JHsSi7aJmfNYedc2ye4jFstLHJsuXcYAkYCUmbg2Jun5ipELWVPyQoQALacolyhr5&X-Amz-Signature=f3aeef67df5c18bdc5ed035813c5f8569f80f99f0202733018464da83650e712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RBOCJRP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDx6RDReycyKzq2nBC1h2LSAk0zVK1c%2Bz5atND6tvpNmgIgSwd3BD%2BAZKjj0%2FesUhH3%2F4d0MkEQ1WhZUW6vZ%2BtBNtIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5du99golGAcmBVDircAxuJXHb3XkDp%2B%2BGWklo6OE7wZnHBXo780%2B5g0J9AePqoavJth3WqLELDubL6gvamdATuZS0%2Bb5I1DmgjHSDZ%2B8AuFNvuoX%2FZ0WVP7sRQ7%2FYpNiYqpBhMAD4Q0vOWlFd14gf0A8%2FiY0hgAkeMLdOmxftKeViUl7HXumvuNGCaEOTedHbMntnbPozdbFVgGeaKHk%2FnwYylhchXGk%2BlAEKyedPZwmBcNKms9U972aCkTg9PNUHGcju70m3YxeqMsyFZ%2BohW%2FGIrtEkbbjoe%2BnvPyuXMImCDBtgC1cI7L8OhbxZo4PX92JBXYJBy1P3A%2FtY%2BG1kHKwk31CGU1tuxtulVfFwezkWH5Gtqy3CnUyDHV00ywFFMScxTTH77AVoCwETh5uNfKIo7YunRpCRl3um%2F0lDOZRED7pZVNtc3T8oRAbS4mf%2BGfUDP010TNS0sc%2BppZe3am4%2BzhuAVBTiDjsuddL7NhNumnlvBe2CRZjxYsVEXPQJQwkElNeaeZvDn44kl8XFjMpWzhIw2PznEG0ZxesCzoGvEALtyzk8ZGLydDQix2nGgpT%2Bfqpn7OrZm1hpNlWmpQKNQRqhjkfz9WWNjhiQXjUtdJGk72OjrIdKJa7T5Ap9h95sdTeo9O%2B1EMPaUw8kGOqUB2Z%2F2n2X6nPYoDNAUBSnhQfQUSiBsDeltnX1Ow9QRGtjASQKk1adP1Uz6iMWQiDyB3lAtA6a%2B91y3ltrpesyb9YjgRV5Eg0CFY65tMU%2BfjUvuWGxaA1c5Gph%2BNHMxbrFi8x4HZqgFAucEr41A%2FQTCL2sJjA9JHsSi7aJmfNYedc2ye4jFstLHJsuXcYAkYCUmbg2Jun5ipELWVPyQoQALacolyhr5&X-Amz-Signature=a2a7b99c1ace5c3c04aaa776717ba1fe9ed8836a4bc13056e88278e7defa0dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
