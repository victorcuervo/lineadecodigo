---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPSPLSA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkKdcj%2FHnX5gwqdcYMac0tuA6xqHkg8vJChforhdunnAiEAwzzZBeyLugvt1L0ghg%2BTC3WDqOlljqKbXXdHs5gvLBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDO1Ia%2FhouNMBbw2CrcA4FhoIVBKbDs7dfmauAsV8F9fR7rvAqBeNKjhWuepWLUK%2FHFlmgj8x7lrhcDF9vz2pjxW0di%2FWNCuJ86d7HNRXn0Cd2l5BPnUJm14JdD9F3KmU5nyRJxNwxuRR6CTad0aDGjbb2uGo7ALQ9SNA9%2F46dyjOkVD86eX7ssB%2Ftoy40UQ0GWMmn16bMGHXYB1GtjWJ1IqtS1h%2BMPO4yM9%2BSY7CV1dEiqlRPHe2NwrQvbYVDG%2Bc63tWjfdZgNUoc6ignTEJPS7r48LDIcmM9Ru2z0%2BmdRbiWb43SDHsFqpuv%2BXwN%2FSxc5z2CLJnVgTP0969w%2Bk2BUJZsGDbpauRjVd20U%2F2Kf1aE%2B1f8MirA4HOH%2FEfikzuBkqfchC%2BzeMZu%2B4aUQPCrnmp8fbvgBCziN1w%2FAEXYDkz4%2FXLPGcsx6JLo%2BseLfbycvLL9b5uXRJkgdZ4H0XHncqMERp20PB6DqjdcxDwmKMrmzl4R%2F1iUWOl5g5kKW4ikZa3p32jBXwUcqxSTZgHp139eigVf9m4lXik%2FTu0QK%2FH6RmNWWKXaJwftJc6OeKuz5DrSZAqz0wu%2BpxjojwcLxPoxDtbent93ZirSwTXHnbRGkfOoLSU64S8SW4hL0FkyNlTs4MpOIIhO2MKegi8oGOqUB0CNxu2zVifjpVv7c0F%2BoUQBXU8c2GYv2V3DPGw0vrRfcJ86e5X7Cecp9ctxAvEwuFHGdPBodOz6DrHaLnp1lCgRbsMd0xYUkCRPelVQgFTPZa7Ay6Mkg4wOGc%2FDHIw4Oifepf6BHU1moMdDMMXpKOwD9g6zdR4A4x1P79aQK5jkPGQ8K%2F8Q8BGafkPr%2BDiiUmAWxlxcE78qagQWDq5vN6%2Ftd6Ov2&X-Amz-Signature=67958e9689a6c350912b7454d6de55ac4de24fb0ac8b7a9e8a5639272151d2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPSPLSA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkKdcj%2FHnX5gwqdcYMac0tuA6xqHkg8vJChforhdunnAiEAwzzZBeyLugvt1L0ghg%2BTC3WDqOlljqKbXXdHs5gvLBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDO1Ia%2FhouNMBbw2CrcA4FhoIVBKbDs7dfmauAsV8F9fR7rvAqBeNKjhWuepWLUK%2FHFlmgj8x7lrhcDF9vz2pjxW0di%2FWNCuJ86d7HNRXn0Cd2l5BPnUJm14JdD9F3KmU5nyRJxNwxuRR6CTad0aDGjbb2uGo7ALQ9SNA9%2F46dyjOkVD86eX7ssB%2Ftoy40UQ0GWMmn16bMGHXYB1GtjWJ1IqtS1h%2BMPO4yM9%2BSY7CV1dEiqlRPHe2NwrQvbYVDG%2Bc63tWjfdZgNUoc6ignTEJPS7r48LDIcmM9Ru2z0%2BmdRbiWb43SDHsFqpuv%2BXwN%2FSxc5z2CLJnVgTP0969w%2Bk2BUJZsGDbpauRjVd20U%2F2Kf1aE%2B1f8MirA4HOH%2FEfikzuBkqfchC%2BzeMZu%2B4aUQPCrnmp8fbvgBCziN1w%2FAEXYDkz4%2FXLPGcsx6JLo%2BseLfbycvLL9b5uXRJkgdZ4H0XHncqMERp20PB6DqjdcxDwmKMrmzl4R%2F1iUWOl5g5kKW4ikZa3p32jBXwUcqxSTZgHp139eigVf9m4lXik%2FTu0QK%2FH6RmNWWKXaJwftJc6OeKuz5DrSZAqz0wu%2BpxjojwcLxPoxDtbent93ZirSwTXHnbRGkfOoLSU64S8SW4hL0FkyNlTs4MpOIIhO2MKegi8oGOqUB0CNxu2zVifjpVv7c0F%2BoUQBXU8c2GYv2V3DPGw0vrRfcJ86e5X7Cecp9ctxAvEwuFHGdPBodOz6DrHaLnp1lCgRbsMd0xYUkCRPelVQgFTPZa7Ay6Mkg4wOGc%2FDHIw4Oifepf6BHU1moMdDMMXpKOwD9g6zdR4A4x1P79aQK5jkPGQ8K%2F8Q8BGafkPr%2BDiiUmAWxlxcE78qagQWDq5vN6%2Ftd6Ov2&X-Amz-Signature=abb6e917f89f418b6710e93f23a4882f58e60e7c98bd20bfba993d51f7f6dcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
