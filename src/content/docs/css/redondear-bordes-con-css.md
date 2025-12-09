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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IA6QXXX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLc9SHMjzfHKOjzCh9iCf4gUxmPC5rRLLS5%2FUVvML7yAIhANs80yw7o0JHNoi%2FXxhJ891ue6I%2BBXABalXnVgvHoeJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYf6jLF6FyQnMjsVcq3ANx%2Brr6CrOqma%2B4ykq1onhbJh6p92x6NtLnONHIbWjF6K6Rvhtze0dQx7vbD1p1FbtQeaGkTjPrJa6rmub1oFh%2BnrR5H2iD2%2BfdwjS1xZXGN%2BFfcv6%2F8YEjtLsfmhc8uqWm9Cd2K6QEuBze%2FsU74mGHLlJ7%2B5YeeMd9%2FYGnBrwxXeMs4MtDbfE1aSbaPMoIsxgY1nvM7WOe8aUkM2wOKLbiZES8lQfgHBw5MyLmwCkgYnZU5slaN6iy3F8ex3%2F0wM3mC60rZi4Z1Gx%2BnjZKVxCCUr2kgt%2Fr42wulbEwhlpCNTq0ivfxWDlb1oQENP7RREcyyZMR6dyLK3o8NZSTwPVx66Lxu3vIKd0pkLKs2RjpSua1lTsDzSKKD7Jefhhn3ORc93IUBRpvvcsbdkXcUBqdgFKj%2B6bMeeojyfUGsfcXHivZyv%2BHvhAGcLghZq7GX2GmDHHbMwcOtyXukHmXcEGFyR%2FPjtRZqNZoiU55dGEdpLfx%2BqQNU4sB6Gvbph%2Bgras6zyKF895BB8ik84bniGETMOy4MrnfncY1KpXs2SWsil5oDvX9jTKf6rj1PNREoSDCIH8KcW7qLdnLmIs6DD4nvaxXxmw4FFnLMiXoqEEpPVrcEnqd2tMrBeTz4jDP5d7JBjqkAUO9vKYQWUg5Ph1EZrqJO39exfs6km0qUxXTuAALBEnuU5S24%2FfrlVkb3g%2F5v05OeOVUmYSVjyFakdcRYomJBsdlxdcMITqPsu95qi%2BsLm5VG2FqQ%2FAXXCULReK7F5R6cAEXAH7WtX4%2Bcbc7DIT3y3G4W1axxBH8YpheD%2FUohxcQ4T7iMwBP1IEGambWzVQebo2MW78JIEwcZEYnaMGDROB0YMDl&X-Amz-Signature=8a6eeeaae33798474a07b66cd95332ce48498326c484b353fd0f9bcbaee8c7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IA6QXXX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLc9SHMjzfHKOjzCh9iCf4gUxmPC5rRLLS5%2FUVvML7yAIhANs80yw7o0JHNoi%2FXxhJ891ue6I%2BBXABalXnVgvHoeJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYf6jLF6FyQnMjsVcq3ANx%2Brr6CrOqma%2B4ykq1onhbJh6p92x6NtLnONHIbWjF6K6Rvhtze0dQx7vbD1p1FbtQeaGkTjPrJa6rmub1oFh%2BnrR5H2iD2%2BfdwjS1xZXGN%2BFfcv6%2F8YEjtLsfmhc8uqWm9Cd2K6QEuBze%2FsU74mGHLlJ7%2B5YeeMd9%2FYGnBrwxXeMs4MtDbfE1aSbaPMoIsxgY1nvM7WOe8aUkM2wOKLbiZES8lQfgHBw5MyLmwCkgYnZU5slaN6iy3F8ex3%2F0wM3mC60rZi4Z1Gx%2BnjZKVxCCUr2kgt%2Fr42wulbEwhlpCNTq0ivfxWDlb1oQENP7RREcyyZMR6dyLK3o8NZSTwPVx66Lxu3vIKd0pkLKs2RjpSua1lTsDzSKKD7Jefhhn3ORc93IUBRpvvcsbdkXcUBqdgFKj%2B6bMeeojyfUGsfcXHivZyv%2BHvhAGcLghZq7GX2GmDHHbMwcOtyXukHmXcEGFyR%2FPjtRZqNZoiU55dGEdpLfx%2BqQNU4sB6Gvbph%2Bgras6zyKF895BB8ik84bniGETMOy4MrnfncY1KpXs2SWsil5oDvX9jTKf6rj1PNREoSDCIH8KcW7qLdnLmIs6DD4nvaxXxmw4FFnLMiXoqEEpPVrcEnqd2tMrBeTz4jDP5d7JBjqkAUO9vKYQWUg5Ph1EZrqJO39exfs6km0qUxXTuAALBEnuU5S24%2FfrlVkb3g%2F5v05OeOVUmYSVjyFakdcRYomJBsdlxdcMITqPsu95qi%2BsLm5VG2FqQ%2FAXXCULReK7F5R6cAEXAH7WtX4%2Bcbc7DIT3y3G4W1axxBH8YpheD%2FUohxcQ4T7iMwBP1IEGambWzVQebo2MW78JIEwcZEYnaMGDROB0YMDl&X-Amz-Signature=7b88f3131cadd4d01719ef3c171d60c6ac6d9337382be022eda328d2df7b6de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
