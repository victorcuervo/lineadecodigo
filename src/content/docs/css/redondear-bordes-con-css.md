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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OPVSQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCrlGo8WPCGhgS2%2B8ymYOw7eKvSb4%2F7fs2taB9oKiRBgIgcRBUGgLy4weGbJjQFj8vP0AxeuV4sfzhaKFVrDgQsesqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGOdysfeFNfl7LGXSrcA3p3CuFpJvX0IcYANY9JqwH5Jtd0Yvb6hShPy4AIGGK1JOhMpzGhZocZbzGJZmMGyCjzvM%2BOH%2FdVzcjCkg6%2F8rxyIo4Rro8VoOo2m8OzgfHnJXWk5vi5RvitchLPNFQ%2BejIX5V8RkiMKDCqez%2Ffwk1NIL3u8NyhAh2ojOFnH4Lud0UI8sKfI3cTd0%2FaPUpPMK6XaxZkRTzc7tCLiFr6jX9efdksUGjdTulX6TwqsC%2F01kcSE%2BwqTy9QcVLu8GqPioCPNcMI6p8%2B%2F7dtnP5jMndDie82%2BhqUpSYqQMUxNwPh5MTTnM1752xFkLXDIrF35fBTN6pgxT6OSJxumG77jWe0qpt5%2BtkU7u7hWwTGTmacXYKEqf17UCwl0%2B7GSK%2BD4PNvKQuKCJZ%2Bb6%2BNX0aUeeYzEi7gFvTwvbrrvCSEAySxxZbqaH5tsn1wjlPBGQlypNOwdQgzTHBBbQj4Ex3aeOIwcLQ15KHSTNcZ5%2FFaBscZW6o7qR8jYyaX%2B6QSR%2BM1cIDBROpcxW%2BbclJltPsdT5pcj5AmakkeyYue82lqG5I%2Bimk1HdxIP53ZGg5HrbazNSNINwxURYFqaEwrqhIFCzLmWVAvC4O%2BuobtBeyqiaWzyPQ1QtZSkXtvgmilOMNTt2ckGOqUBTxr8uQePsCtHoIeylZRglkQaaVFMwSW22jaQxm04DT7l%2F%2BfdPMt43DDruWgMZPQdPREF5GPtvQrvpfbEHUhzGfg3hUdqcSrqEg2cPkI7V8Df4VByXX70MSK56S1rkqiG15UOVR%2FzbJCXhw6N%2FlD%2BhNqoyQoxmOqy1wMihi5wPkQPVOAxbl3QofBApbLhiN2H3A0jmGWnSRUZD9T61Dzi28t1%2BfcI&X-Amz-Signature=20e92b436dc5839ea0cedd3cbb97195c95e6a821becccfe4e9907166617ea269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OPVSQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCrlGo8WPCGhgS2%2B8ymYOw7eKvSb4%2F7fs2taB9oKiRBgIgcRBUGgLy4weGbJjQFj8vP0AxeuV4sfzhaKFVrDgQsesqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGOdysfeFNfl7LGXSrcA3p3CuFpJvX0IcYANY9JqwH5Jtd0Yvb6hShPy4AIGGK1JOhMpzGhZocZbzGJZmMGyCjzvM%2BOH%2FdVzcjCkg6%2F8rxyIo4Rro8VoOo2m8OzgfHnJXWk5vi5RvitchLPNFQ%2BejIX5V8RkiMKDCqez%2Ffwk1NIL3u8NyhAh2ojOFnH4Lud0UI8sKfI3cTd0%2FaPUpPMK6XaxZkRTzc7tCLiFr6jX9efdksUGjdTulX6TwqsC%2F01kcSE%2BwqTy9QcVLu8GqPioCPNcMI6p8%2B%2F7dtnP5jMndDie82%2BhqUpSYqQMUxNwPh5MTTnM1752xFkLXDIrF35fBTN6pgxT6OSJxumG77jWe0qpt5%2BtkU7u7hWwTGTmacXYKEqf17UCwl0%2B7GSK%2BD4PNvKQuKCJZ%2Bb6%2BNX0aUeeYzEi7gFvTwvbrrvCSEAySxxZbqaH5tsn1wjlPBGQlypNOwdQgzTHBBbQj4Ex3aeOIwcLQ15KHSTNcZ5%2FFaBscZW6o7qR8jYyaX%2B6QSR%2BM1cIDBROpcxW%2BbclJltPsdT5pcj5AmakkeyYue82lqG5I%2Bimk1HdxIP53ZGg5HrbazNSNINwxURYFqaEwrqhIFCzLmWVAvC4O%2BuobtBeyqiaWzyPQ1QtZSkXtvgmilOMNTt2ckGOqUBTxr8uQePsCtHoIeylZRglkQaaVFMwSW22jaQxm04DT7l%2F%2BfdPMt43DDruWgMZPQdPREF5GPtvQrvpfbEHUhzGfg3hUdqcSrqEg2cPkI7V8Df4VByXX70MSK56S1rkqiG15UOVR%2FzbJCXhw6N%2FlD%2BhNqoyQoxmOqy1wMihi5wPkQPVOAxbl3QofBApbLhiN2H3A0jmGWnSRUZD9T61Dzi28t1%2BfcI&X-Amz-Signature=eefd115559c828f1c923a5e3f9a714778d109ce00c12ed337842f89ec57975ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
