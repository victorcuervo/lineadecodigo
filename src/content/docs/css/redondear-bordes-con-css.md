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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77S6D67%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMPwg%2Fr56PfUCGNfmV7l8F6lq8yZ7hfmb9QxuVQNQWEAiB1owyRSnmOOfMsK7NJanCEDve6SB9EoVKtrgxx3rgCaCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnSGMz6aKwLC01wRKtwD2zsXcgZ9EW1WAkHVFrPHFACJ%2BFNhYXdkI56q7wHAhTMgslBcgJ6yc9jtLvBnD1%2F7X%2F5xsdhGVnoWMLyHq79d8xANp4Bma3uclzG%2BCpd2VSCVa7u%2BLVBdzRb5gUlpDgGUzoeX4qIGEWwS1KsqAB6TZbfD2bhBsd97%2FBtfYpGALbzitMFnZhHt4%2FwnWNd7ppqGJw3L8Y1FdxS%2FbWOTidI4RMUu0rZe92v3jNGYA%2Bm4%2BevCgPhoxWdUlXsYs5oYa0We8r3sFuZFHoi1PwZTLhT4DZRp1qhBJ3LG6cgmOmvJbEgwLTe5VmK4lThkptqfeRr3zrSkBvWsqbY6OLEbVxnezPw%2FpiNTygjdp8mEP9jrkd1TMhmK0J%2BYsFPMFbfdS2aX7R0ZyTRH9LB1ditQyX586mdQr3sh1D%2By5NBzx6iT0ZBwmoQgomXc1A%2FFvGZqvrc%2BdyR9MNZFO9zR3ps74MatYPMbHcIGS3300%2BoyA1zsq8D2%2FIXOECxOn%2F5Fx7W3lwR5kafJBxOM47E5zfnAGYpFv2jdc2YJkKK%2Befcmm%2F9LrYZau8qqp7t2nsb7o6oKJs0P43Tkq7l4CXx1BfPBRVsprMjTcTFMsJnFAlivwlyW%2FG0GYttr092EmRRrbe4w55nVyQY6pgEkX%2FkFDZneml%2FqA1BOMSy62WMJF8Hlke3HlbrmgaE0l327yt%2BcxeSE5R8Sc1ZT3zsV4ixuYJnyWEE%2F058bhS0fDp34XhFmpKwigeFchnCS7dXeonQhxTVC0UnPLE0W1195FgfeEA88wdHLO7GWkt4TQBCDLTyjipIeNETePHJnpl11ABdzZzzEADwIt5baVZdK7xyXU7f0tDFU%2Fn3w4I3vL68Ts3Kw&X-Amz-Signature=59df43b0654113f073f65c84970f036d88c6d2a8aad44c4f2db951040871195d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77S6D67%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMPwg%2Fr56PfUCGNfmV7l8F6lq8yZ7hfmb9QxuVQNQWEAiB1owyRSnmOOfMsK7NJanCEDve6SB9EoVKtrgxx3rgCaCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnSGMz6aKwLC01wRKtwD2zsXcgZ9EW1WAkHVFrPHFACJ%2BFNhYXdkI56q7wHAhTMgslBcgJ6yc9jtLvBnD1%2F7X%2F5xsdhGVnoWMLyHq79d8xANp4Bma3uclzG%2BCpd2VSCVa7u%2BLVBdzRb5gUlpDgGUzoeX4qIGEWwS1KsqAB6TZbfD2bhBsd97%2FBtfYpGALbzitMFnZhHt4%2FwnWNd7ppqGJw3L8Y1FdxS%2FbWOTidI4RMUu0rZe92v3jNGYA%2Bm4%2BevCgPhoxWdUlXsYs5oYa0We8r3sFuZFHoi1PwZTLhT4DZRp1qhBJ3LG6cgmOmvJbEgwLTe5VmK4lThkptqfeRr3zrSkBvWsqbY6OLEbVxnezPw%2FpiNTygjdp8mEP9jrkd1TMhmK0J%2BYsFPMFbfdS2aX7R0ZyTRH9LB1ditQyX586mdQr3sh1D%2By5NBzx6iT0ZBwmoQgomXc1A%2FFvGZqvrc%2BdyR9MNZFO9zR3ps74MatYPMbHcIGS3300%2BoyA1zsq8D2%2FIXOECxOn%2F5Fx7W3lwR5kafJBxOM47E5zfnAGYpFv2jdc2YJkKK%2Befcmm%2F9LrYZau8qqp7t2nsb7o6oKJs0P43Tkq7l4CXx1BfPBRVsprMjTcTFMsJnFAlivwlyW%2FG0GYttr092EmRRrbe4w55nVyQY6pgEkX%2FkFDZneml%2FqA1BOMSy62WMJF8Hlke3HlbrmgaE0l327yt%2BcxeSE5R8Sc1ZT3zsV4ixuYJnyWEE%2F058bhS0fDp34XhFmpKwigeFchnCS7dXeonQhxTVC0UnPLE0W1195FgfeEA88wdHLO7GWkt4TQBCDLTyjipIeNETePHJnpl11ABdzZzzEADwIt5baVZdK7xyXU7f0tDFU%2Fn3w4I3vL68Ts3Kw&X-Amz-Signature=0dcf77699d72ff1f7a6bf5042113dd1054e681014ecdb47ae098c3db4507716a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
