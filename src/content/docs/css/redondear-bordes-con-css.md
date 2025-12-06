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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYYTXTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBV%2FONWYc1vBrSHVXinZpptM5PnpCYDN5Kw00suyD6QIhAJnsDZ23R3MRIepMTJdUyri9dmibYHAXTw8UHN4Ilr8JKv8DCHoQABoMNjM3NDIzMTgzODA1IgyKAUjsBGFaz4Q%2BGjUq3AMRRVr%2F1OtjjgHI9wpk%2FJiraQPIw%2FrUh2pW%2BtomPqKHiFpZjUX0toQYM8XOAgU0o9ci62b3%2BPy3mlIiQgPefCC3599%2BdxUazGwIK3gdlDegoKJw62eWwEeeczSgB0kiFQaWQTdMbgbQsBp4hmVkRzjPsbRTwGDfcbHhgymMenwURoLUT6agT6uTj6Blk9SYz0Y9zOxmupRv35j%2BhuzJ1qLIxWZuHlVCUcB6Sc%2BGZwkpKd1fX%2Fs5fADXEYpUD90DWbju2%2BVQyk%2FJ40fVjwY1hJbOOwFFcHlrvcH0dO%2FQIEyqPAVrPdzCD8es1QWJhFcvVD4imiihQlfAYCIFCu3VNoQ%2BI3GZLhHKN24l6ONQaSCgy5trvNbLyAqGgjwsA4lWw%2FMBrQ%2BrD67USSOFMPL2DjKZoS%2FHukMY4titkA1slRQVK5n7s8xJxJv4JDwWZ0YRBRORh%2F5MZMQmtTCgKjZNArdKkzWX6fdL0NWRNDdmAIWW7Ev8iRPcrxDr%2FIvgJ0g6WV3SjcNOHfJnQrNf2eMgZQTYHwr6KzRwt%2BsCD1HTSTHNF2PMo9dvOgbEE0NbgkzmaxAKOTvzAIHbBDPak%2FaxpkWyypxnuoP6FmayY0L5HlVTf0gxHrqrvNAKwf0ENzCVx9HJBjqkAciDJVOoMwmSDe4Ce6iGIHlrknpa%2BMMult7rS%2FAUOnBruXczDbuRE7Tqwv5dwb%2FiIpnynoIXmBypLomW2RvsjzD4c4fwA6Tq2toxfQtsBu8Gco9%2BuAitQ78MKza%2Fvd7ADHJ4i7N7pQX2DjIpg%2F5T476zc89ARLAr%2FKFVDb12fYygwd0lFdVmKMD%2BiDbzMF%2FNw1QeQwASwc6MOogChXPhx6%2F69r8O&X-Amz-Signature=30cf6e145752a733139b0e9a4511ed3e4ab1ece232cfa97f87a7667af71e1d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYYTXTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBV%2FONWYc1vBrSHVXinZpptM5PnpCYDN5Kw00suyD6QIhAJnsDZ23R3MRIepMTJdUyri9dmibYHAXTw8UHN4Ilr8JKv8DCHoQABoMNjM3NDIzMTgzODA1IgyKAUjsBGFaz4Q%2BGjUq3AMRRVr%2F1OtjjgHI9wpk%2FJiraQPIw%2FrUh2pW%2BtomPqKHiFpZjUX0toQYM8XOAgU0o9ci62b3%2BPy3mlIiQgPefCC3599%2BdxUazGwIK3gdlDegoKJw62eWwEeeczSgB0kiFQaWQTdMbgbQsBp4hmVkRzjPsbRTwGDfcbHhgymMenwURoLUT6agT6uTj6Blk9SYz0Y9zOxmupRv35j%2BhuzJ1qLIxWZuHlVCUcB6Sc%2BGZwkpKd1fX%2Fs5fADXEYpUD90DWbju2%2BVQyk%2FJ40fVjwY1hJbOOwFFcHlrvcH0dO%2FQIEyqPAVrPdzCD8es1QWJhFcvVD4imiihQlfAYCIFCu3VNoQ%2BI3GZLhHKN24l6ONQaSCgy5trvNbLyAqGgjwsA4lWw%2FMBrQ%2BrD67USSOFMPL2DjKZoS%2FHukMY4titkA1slRQVK5n7s8xJxJv4JDwWZ0YRBRORh%2F5MZMQmtTCgKjZNArdKkzWX6fdL0NWRNDdmAIWW7Ev8iRPcrxDr%2FIvgJ0g6WV3SjcNOHfJnQrNf2eMgZQTYHwr6KzRwt%2BsCD1HTSTHNF2PMo9dvOgbEE0NbgkzmaxAKOTvzAIHbBDPak%2FaxpkWyypxnuoP6FmayY0L5HlVTf0gxHrqrvNAKwf0ENzCVx9HJBjqkAciDJVOoMwmSDe4Ce6iGIHlrknpa%2BMMult7rS%2FAUOnBruXczDbuRE7Tqwv5dwb%2FiIpnynoIXmBypLomW2RvsjzD4c4fwA6Tq2toxfQtsBu8Gco9%2BuAitQ78MKza%2Fvd7ADHJ4i7N7pQX2DjIpg%2F5T476zc89ARLAr%2FKFVDb12fYygwd0lFdVmKMD%2BiDbzMF%2FNw1QeQwASwc6MOogChXPhx6%2F69r8O&X-Amz-Signature=f80104fa41221ae26c2ac0f4977611115bd85b656aada636ee9334000bcf46d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
