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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKFNKKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzJI3JmxMu4BV032Nx0hDpbowKrNiMP8IksROQFm52AiBE99RVZX%2B1%2BS1AuX22KM2KIa2t0IEUPhzlOKf6m5cydCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMhb4cbY%2BIw8Ih%2B0VpKtwDR3YSdH8PCnpDHRdaBtfGD2x2QfXdsstmjQrEiVkuJS8DxJFFgLZqZBLh22Ka4mxlllbEStVr3oiNaam6V%2B3pMbhJfEpHDFPA4HLgs04yKM1vvn76XU6SyEV64J5kBcB4E5%2BQI6AyvYOAjLEiVTFv9VZIcA9NwUAA3fuZlclmneKJffu%2BAsOR%2Fdon%2FtpxUT5qkjj0MoLSwwvMudpOf0tJWmCihO2tR%2FDzL9h9C%2BWabXE6%2Bz9qSIjfvgqm16KQW8qpxdP5jqz1WJhCV0RzyDNL%2FJmvLl0qrLGgVGv8oOFs8hIwsTgB7BBZWkI7RpM2b9NTv2Nw8rPjCiAlHJXFvTBpdHxYR1L7FvzyYoOzUwLeeAMhSA%2BeTqV7NO9ICVPbL7zxY5X3mOA9N0hiabx91GGncIhLDywRHi4QmZhIoi1fUTSkPtm9RexkMPuvVV949M0xaWfGcCw0oYIHrX3ywVCNZduaOOTgqtty8k5WlbSY95xWg6S1dAkeRwbsSsuGnUArZjyDHrCNRFMv48ZGZCFdJ%2FVdQ7n63o8oYp9L5R7OUzH1Xp%2F26sME1OrmjhQN8zZaMpVzJrCSykPSKzlc0yrDd%2B%2BmI0Y0EkcycowYG9GaKno0Z0uc3MPof0oA56ww7Y7NyQY6pgHPupj%2BqD6Satzkh0j4ZcVqgFclTcThnx%2BwqVmXCPKlx9ebt8%2Fbd1hw2BmfvxaLtGUBFCWjmq3bAiqmFt3%2BThqtoaWv0NoZufpJ1n3ROAe02z2v8%2BOH%2BXlCao%2BZWR7ghfbW4becX7zBqLtF1nndvtFkWnzlqsA8VNPHobcaH30k9oB8ERIfwzEP5P55VDS2Zn5t0EPMEqfB0N8hG5byBruLXQE9pXS8&X-Amz-Signature=9b6530a46230fff9e51f16d53c5454fbfe88f586d411ce215eb14dc4ef569122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKFNKKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzJI3JmxMu4BV032Nx0hDpbowKrNiMP8IksROQFm52AiBE99RVZX%2B1%2BS1AuX22KM2KIa2t0IEUPhzlOKf6m5cydCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMhb4cbY%2BIw8Ih%2B0VpKtwDR3YSdH8PCnpDHRdaBtfGD2x2QfXdsstmjQrEiVkuJS8DxJFFgLZqZBLh22Ka4mxlllbEStVr3oiNaam6V%2B3pMbhJfEpHDFPA4HLgs04yKM1vvn76XU6SyEV64J5kBcB4E5%2BQI6AyvYOAjLEiVTFv9VZIcA9NwUAA3fuZlclmneKJffu%2BAsOR%2Fdon%2FtpxUT5qkjj0MoLSwwvMudpOf0tJWmCihO2tR%2FDzL9h9C%2BWabXE6%2Bz9qSIjfvgqm16KQW8qpxdP5jqz1WJhCV0RzyDNL%2FJmvLl0qrLGgVGv8oOFs8hIwsTgB7BBZWkI7RpM2b9NTv2Nw8rPjCiAlHJXFvTBpdHxYR1L7FvzyYoOzUwLeeAMhSA%2BeTqV7NO9ICVPbL7zxY5X3mOA9N0hiabx91GGncIhLDywRHi4QmZhIoi1fUTSkPtm9RexkMPuvVV949M0xaWfGcCw0oYIHrX3ywVCNZduaOOTgqtty8k5WlbSY95xWg6S1dAkeRwbsSsuGnUArZjyDHrCNRFMv48ZGZCFdJ%2FVdQ7n63o8oYp9L5R7OUzH1Xp%2F26sME1OrmjhQN8zZaMpVzJrCSykPSKzlc0yrDd%2B%2BmI0Y0EkcycowYG9GaKno0Z0uc3MPof0oA56ww7Y7NyQY6pgHPupj%2BqD6Satzkh0j4ZcVqgFclTcThnx%2BwqVmXCPKlx9ebt8%2Fbd1hw2BmfvxaLtGUBFCWjmq3bAiqmFt3%2BThqtoaWv0NoZufpJ1n3ROAe02z2v8%2BOH%2BXlCao%2BZWR7ghfbW4becX7zBqLtF1nndvtFkWnzlqsA8VNPHobcaH30k9oB8ERIfwzEP5P55VDS2Zn5t0EPMEqfB0N8hG5byBruLXQE9pXS8&X-Amz-Signature=8a21c17798549c598bce9548297afb938cb0fa8d6ff1317bf72df4611b3db59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
