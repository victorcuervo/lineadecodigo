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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZY2QW3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDreWO%2Bu46ke4JNvHGZxQrA4PqG%2FH14DVJC7Z%2Fwvko00AiBUz%2FmmUXzK9ZCBm93cTACRhbDc77kCYw97Crlc5ewa9ir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcsSEiMcRmBka9EOtKtwD%2Bii4VpqjdSjsljPViigIXDqiisHxyCbmDCU5HUFlVvSuKwvFQ7N3%2Fd6ieW7%2FJqXqDXPxSA0HC4nLMSrQ02NIJbp7hi4rkbAurN4Y%2F6axW50CAbe53o5TOi3vuY22%2BSFNE8pCwwDqtvURF4p0whEMjEhMeFMlP0nxB%2Fic0Z3CsYro%2Fvyapyzz25En6xDyXjYirv0pxqnA%2BXiHwuDULeaU2jtHrN6OZCNVT2q2lfXsfpgdgRc6RP2V1EAQrWVLIiI6HTyxp9UXRvxkAUxJcwP0S2AgxuZrhXr6FtngMq63SAI1aOQoKHpuzrskfqBFt%2F7L5AhuujAkjQQav2dieM3pQnAZBQydYB0iOVyaae9UFZ62lUXkJ%2FZ2Z7lCgd0QwZmLk7M023sDUFyRvJPN7vG%2BE37QxVVOW95jpik5WhxrLMhDw%2FMewpZSS1YVfbfUNd%2FEgMNzeykj05ARYwvOwzmMXDDCHkGrUmEEiPa7B8k%2BijsWXVQihEcwCn%2B6oh16GuPzqsVUt5J76M04Gqlk8C%2FTz159dqvJR4NnOJ2BWUPTwC9eTr6tGlyyoUXsx%2F0Zfhby6dSiI%2FhcpXXqd2scGFHjD6G03nTgU4AUTnl0IfhG8Rrs%2B3DXvwMK6nSLzYEwgN7OyQY6pgHomJc7sGkiyYl4EJswKdpcZghoC7UGxb6K%2Bb3H%2BKfWRsoF%2Fejpy%2BT1fWB384oAEXNDJSn2bLpineMv72B4irjLJqSQYxuR9dRc%2FeKp5n3NKtPeOM8x6G7ta9XBvIg9t4DNYh7GPLt3cI7z8JbvYQJvfzwJHrwfHjIvjhTkXZdJADQm%2FDTBQnrq7%2B4GOTS9K5twOEzp9CQ2GTKsaZ7zQ1yoX7x4scfc&X-Amz-Signature=f4486dceaaa770c805329713827deea12b26d2cd0371694be152c98471d70867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZY2QW3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDreWO%2Bu46ke4JNvHGZxQrA4PqG%2FH14DVJC7Z%2Fwvko00AiBUz%2FmmUXzK9ZCBm93cTACRhbDc77kCYw97Crlc5ewa9ir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcsSEiMcRmBka9EOtKtwD%2Bii4VpqjdSjsljPViigIXDqiisHxyCbmDCU5HUFlVvSuKwvFQ7N3%2Fd6ieW7%2FJqXqDXPxSA0HC4nLMSrQ02NIJbp7hi4rkbAurN4Y%2F6axW50CAbe53o5TOi3vuY22%2BSFNE8pCwwDqtvURF4p0whEMjEhMeFMlP0nxB%2Fic0Z3CsYro%2Fvyapyzz25En6xDyXjYirv0pxqnA%2BXiHwuDULeaU2jtHrN6OZCNVT2q2lfXsfpgdgRc6RP2V1EAQrWVLIiI6HTyxp9UXRvxkAUxJcwP0S2AgxuZrhXr6FtngMq63SAI1aOQoKHpuzrskfqBFt%2F7L5AhuujAkjQQav2dieM3pQnAZBQydYB0iOVyaae9UFZ62lUXkJ%2FZ2Z7lCgd0QwZmLk7M023sDUFyRvJPN7vG%2BE37QxVVOW95jpik5WhxrLMhDw%2FMewpZSS1YVfbfUNd%2FEgMNzeykj05ARYwvOwzmMXDDCHkGrUmEEiPa7B8k%2BijsWXVQihEcwCn%2B6oh16GuPzqsVUt5J76M04Gqlk8C%2FTz159dqvJR4NnOJ2BWUPTwC9eTr6tGlyyoUXsx%2F0Zfhby6dSiI%2FhcpXXqd2scGFHjD6G03nTgU4AUTnl0IfhG8Rrs%2B3DXvwMK6nSLzYEwgN7OyQY6pgHomJc7sGkiyYl4EJswKdpcZghoC7UGxb6K%2Bb3H%2BKfWRsoF%2Fejpy%2BT1fWB384oAEXNDJSn2bLpineMv72B4irjLJqSQYxuR9dRc%2FeKp5n3NKtPeOM8x6G7ta9XBvIg9t4DNYh7GPLt3cI7z8JbvYQJvfzwJHrwfHjIvjhTkXZdJADQm%2FDTBQnrq7%2B4GOTS9K5twOEzp9CQ2GTKsaZ7zQ1yoX7x4scfc&X-Amz-Signature=0610e59427dcd8479f723b58f0ddf0cb6afc74052fbf8afc2883fa58cceb0c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
