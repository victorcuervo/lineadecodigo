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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DD55WEQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTJA09GZja6gFdQFHJzM2tQJHkJx40lUZZ6k8VuWGCCAiBT7TzjxaKBKIbfHmndZxIa6R8to5RpaUIfDEZMvdf9PiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDC8ARIb6GtVzr54YKtwDJ4sGKHUNeerBe2wOWofUuHnk6IGRPFp3K%2B%2FnOUJIwy%2Bbz1RUxXMtGQXH4wQW7E7oFBIW%2F2eULgx%2FLQ98%2FmmdBO41B%2BA%2FxQMaJOULlNZf8RBWiHDGKb4KOci%2BRIG%2BXDUcyXHMp2gpQI5U8%2BPofJwr7taVEkJT2mU9DxSk1h1iel%2BOWNO0vhZBnnKB8ZLBC3sIrXL3DYBY2nmpy%2BPb%2FgxVqa0D4x3qXRfI2p1Rk3odBq0MLrfWwdevVyp6WPbXZPNNdytIqV%2FD9kN8qhh7R38G6IXByUJPDHDt6jDpPIxQY2ZCBJcFGWo4qFOHfuKdva8XB2E91WsgVfek5BWpv1TlF%2F3Uty6ta4KB%2B4hS6kjuqt0pa4%2BA0RCOCFVUycVlYdOOpZ2JeSPFAFd5C2qdn8sS9uxyldB7d14x2qVSPthoanutM2S4%2FcGhnH5tkXgu8t7ccCSgPPQkgj%2B9QhNHoI5RxJuK%2FeV3MR1awQmY0BM%2BY0%2BcoU2w1IFx6Zq2BaySu3BZt8cfzODj593X6qvWKEyXCB8ozxJ9pUdn%2FZIFjMejacwapiCkcjptewvAPiVYVPH2qPGFE0ijyYK9hBA%2B7S0pTQ9%2FiiuJRccPeFi2A3Qgi0AB6KMRpRrERG1UNQYws%2BXeyQY6pgHCqqYxd1zTI6k4zBn9ybVp1mnq5zPcjmqtEobGEvAGqhL6s3L7cD608XBY1lgMbnrQ0QX2BuXg%2FffyesfeI9w%2FrRUEcT%2Fd1c5gvRGW7OHBLK56k3fi6%2BB%2FC36bx0jW3aNMC5BajzbcG0nm1BIWcVuRKI5YsjSz%2BsAZd0Cp8yd7OJ31Rmi8UOTXDlWfUimcsuxl2kK7AQ6DLQEOsghauRuEnFjZmE8p&X-Amz-Signature=969a21a88a78b44ec5f4e398ecfa4c09cb480ceaf64c0cd5589c9a2a6818f9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DD55WEQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTJA09GZja6gFdQFHJzM2tQJHkJx40lUZZ6k8VuWGCCAiBT7TzjxaKBKIbfHmndZxIa6R8to5RpaUIfDEZMvdf9PiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDC8ARIb6GtVzr54YKtwDJ4sGKHUNeerBe2wOWofUuHnk6IGRPFp3K%2B%2FnOUJIwy%2Bbz1RUxXMtGQXH4wQW7E7oFBIW%2F2eULgx%2FLQ98%2FmmdBO41B%2BA%2FxQMaJOULlNZf8RBWiHDGKb4KOci%2BRIG%2BXDUcyXHMp2gpQI5U8%2BPofJwr7taVEkJT2mU9DxSk1h1iel%2BOWNO0vhZBnnKB8ZLBC3sIrXL3DYBY2nmpy%2BPb%2FgxVqa0D4x3qXRfI2p1Rk3odBq0MLrfWwdevVyp6WPbXZPNNdytIqV%2FD9kN8qhh7R38G6IXByUJPDHDt6jDpPIxQY2ZCBJcFGWo4qFOHfuKdva8XB2E91WsgVfek5BWpv1TlF%2F3Uty6ta4KB%2B4hS6kjuqt0pa4%2BA0RCOCFVUycVlYdOOpZ2JeSPFAFd5C2qdn8sS9uxyldB7d14x2qVSPthoanutM2S4%2FcGhnH5tkXgu8t7ccCSgPPQkgj%2B9QhNHoI5RxJuK%2FeV3MR1awQmY0BM%2BY0%2BcoU2w1IFx6Zq2BaySu3BZt8cfzODj593X6qvWKEyXCB8ozxJ9pUdn%2FZIFjMejacwapiCkcjptewvAPiVYVPH2qPGFE0ijyYK9hBA%2B7S0pTQ9%2FiiuJRccPeFi2A3Qgi0AB6KMRpRrERG1UNQYws%2BXeyQY6pgHCqqYxd1zTI6k4zBn9ybVp1mnq5zPcjmqtEobGEvAGqhL6s3L7cD608XBY1lgMbnrQ0QX2BuXg%2FffyesfeI9w%2FrRUEcT%2Fd1c5gvRGW7OHBLK56k3fi6%2BB%2FC36bx0jW3aNMC5BajzbcG0nm1BIWcVuRKI5YsjSz%2BsAZd0Cp8yd7OJ31Rmi8UOTXDlWfUimcsuxl2kK7AQ6DLQEOsghauRuEnFjZmE8p&X-Amz-Signature=083da3be34b91799412f85c32de65ee3ea7fb6d02049ed0ca566f3f2517d47cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
