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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRH6RBXA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZpOlfo%2BvPK8rD1c2Kv1bY2KBKL65bcxVroYr48K%2FyTAiAP0%2BHSSOfYChfCNjlsUC0Fjsl8VEPyIwEGXuxAic2wHir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMH0IDzz8gZnPNpA0FKtwDiqOclcu6YgZh5BvO1Kvrv%2BmdsttZav2%2BKbp%2BLRW7nNBe5D%2FxO4udWx2VYsqBcHRuxRqmLSdPVuaSkAkqG2Okr86mrZS42DhiAZb2CdVkQKu%2Baga006n2jF43V39Bz2Q%2BKLjBGpql7C%2BCMpVEbEvKYGajA6ZvqfDZYzg9ghPFuEPC31xt1HdmVZTIsCXmNB0AL%2FyWdxzb3ntuqnZdDOmV4y40mYjUtESlAf3LebQImqtscBFIEFxr3L9WBiFB1tR5XeYOQKT6WZJ44uea97k%2FYhh6VmwUlZ5RRVcw3tOAdgprqBGhplUMxB7V4OTxL%2BAumQTva4DmYcQVIXKp271i9zTzrabvvOaeDo6%2FQueJFRFjC19uMR6RNVNGb6P9cyCRKdWPEWbkSQluh3svEGjaf19Lbigx1FjoPdzpGhH7Hd3JdvlifdvBG83yf3odj7jN%2BPTgCGK%2B%2FdrXlk0wqYn20H1lo7BhAWolwPUfYTohjjQGmJUgnJH%2F12Stg8Fay6xKqiKuhfbPRxPvpeSF4sH%2Fwgp70vHwhqgzd5cpoCytyHlP54UON6DeR4798FS%2BzBJ%2BYFjV6O0NY78fRNPDdeCnVnFvZbL7I33S188QKKidigbLlXJk8XvJ7JmCbJUwpfLLyQY6pgHH%2BAIzrlDr7SVvuh5GREvuJAcYo6uEztjJdGQYXVc0QkIIbvIlR7rN7jE8iqEZaQkIjLV16SQkrQb5ZYpFbcLcT1IN5JHBCa2APN4WXdxyrJltX5sTruOAxG1x05BaMRGn2sK1QxRYFt%2Frk%2FQBTz74%2FwHa4CVwNYvgWDgjkp%2FSUGKcnqXzmcIby%2FU5e%2FJd%2FANyoHE27fgZ0ud5nv%2B4%2FLoKXBZ0rw3y&X-Amz-Signature=9febaeb9ef46d3a15e7bdc350d0ecbd2d5fe3519ca0da525cecdfa2c0736f7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRH6RBXA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZpOlfo%2BvPK8rD1c2Kv1bY2KBKL65bcxVroYr48K%2FyTAiAP0%2BHSSOfYChfCNjlsUC0Fjsl8VEPyIwEGXuxAic2wHir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMH0IDzz8gZnPNpA0FKtwDiqOclcu6YgZh5BvO1Kvrv%2BmdsttZav2%2BKbp%2BLRW7nNBe5D%2FxO4udWx2VYsqBcHRuxRqmLSdPVuaSkAkqG2Okr86mrZS42DhiAZb2CdVkQKu%2Baga006n2jF43V39Bz2Q%2BKLjBGpql7C%2BCMpVEbEvKYGajA6ZvqfDZYzg9ghPFuEPC31xt1HdmVZTIsCXmNB0AL%2FyWdxzb3ntuqnZdDOmV4y40mYjUtESlAf3LebQImqtscBFIEFxr3L9WBiFB1tR5XeYOQKT6WZJ44uea97k%2FYhh6VmwUlZ5RRVcw3tOAdgprqBGhplUMxB7V4OTxL%2BAumQTva4DmYcQVIXKp271i9zTzrabvvOaeDo6%2FQueJFRFjC19uMR6RNVNGb6P9cyCRKdWPEWbkSQluh3svEGjaf19Lbigx1FjoPdzpGhH7Hd3JdvlifdvBG83yf3odj7jN%2BPTgCGK%2B%2FdrXlk0wqYn20H1lo7BhAWolwPUfYTohjjQGmJUgnJH%2F12Stg8Fay6xKqiKuhfbPRxPvpeSF4sH%2Fwgp70vHwhqgzd5cpoCytyHlP54UON6DeR4798FS%2BzBJ%2BYFjV6O0NY78fRNPDdeCnVnFvZbL7I33S188QKKidigbLlXJk8XvJ7JmCbJUwpfLLyQY6pgHH%2BAIzrlDr7SVvuh5GREvuJAcYo6uEztjJdGQYXVc0QkIIbvIlR7rN7jE8iqEZaQkIjLV16SQkrQb5ZYpFbcLcT1IN5JHBCa2APN4WXdxyrJltX5sTruOAxG1x05BaMRGn2sK1QxRYFt%2Frk%2FQBTz74%2FwHa4CVwNYvgWDgjkp%2FSUGKcnqXzmcIby%2FU5e%2FJd%2FANyoHE27fgZ0ud5nv%2B4%2FLoKXBZ0rw3y&X-Amz-Signature=c45032a5b89e3965a2e7b85a715d14cc533283c934c309d454edeb6452d31bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
