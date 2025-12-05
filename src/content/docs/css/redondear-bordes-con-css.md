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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EI2VPEH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuqLnbBOeMqvvTViESDTAoyg7bi1EQpOsIoYOVerQVCAiEA7rLzcINzKf7oRY5BHN%2BnBe90EnP7P2ZhumA24UemUbkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAR0MAuwD4JgoUgPrSrcA9ePyZjs%2BAJlNRMLxnBQ%2FV570UVuXeDCTiCXkTYzsn71m%2FUOvSjjtEMxOrrlxgvYXGAcwQ994j%2F2%2ByZNUNZ8c8XDlAAFyqCg%2B3F9h9wybZsimF7y7YDkxFd%2F66Qyl%2BbijGqgkf9loPDyb%2F9xbSApJ4UpP7S4YNZQ9swjVNrNPMdw2kNLj6mrSmWI6%2BDjj5PukEbqyPNN5KvGcZDB1wYAga6gZWDOsEhs35B%2FCZz9QTVZhZidI24WbmKyeSfPlvLZ3eYd68Z9f0OMp71OInPBdlmcGA4EGVS0HNqo50TGL4DLPV4Oq5f6959F%2Fl6A9634%2BMDrJg9%2BPmLaJcx%2FDcuI81WT2oIUF8JGt91WqY%2BibQO3RWqhhUICPAEJYSKsyNp9C%2FybMXeQ0pAcG6vpsHJ507hd%2BDPnaZha4XEBdiXOfaO7cZ7%2B5dK%2FV0f3QtazAgHrN3VB%2F%2B0DpMB08ny6YnBBQoWthdrpW4rB1yTCkI7B1NJm745yHSpT1OI8efwcC67%2BgL1r17np2sW9ZaKJ70otOfOIjNj%2BI%2Bk3jp0SDLsudVTBGF6qJEa8aWsN%2BwuwHCDuvtmCmDhhln%2BZ8UUuiR1p%2Bmrajc5Irh5dB8DglTq5t4qQ9CBwgBfAJxZ%2BwUWBMJqsyckGOqUBB4%2FBWIChxRDzt5UH55G%2Fcc56V5LWyuORA9FlV%2FVqe83CeVGQrb%2BddULnG0HRU2o1rXc4Ec5KUTg2wH%2Bt45rTnUiZ0ptWL1nvoPpm3%2F%2Fx11CO7a%2Fr5ukFG1K5I1%2BTKimIxPR1qGDOg04IohfGtTDoMZuoHl2RNE8Ho%2FJb2rkBV23fBWNoNsLjoy%2F57Gsn%2BF6XpwXThIJR87WGLqD1%2FXPYIYCXBmF6&X-Amz-Signature=b562e3a8c7a390e5d8fd372b541b35ed1d73babd0d0a9c515b5fa3e8269c8c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EI2VPEH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuqLnbBOeMqvvTViESDTAoyg7bi1EQpOsIoYOVerQVCAiEA7rLzcINzKf7oRY5BHN%2BnBe90EnP7P2ZhumA24UemUbkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAR0MAuwD4JgoUgPrSrcA9ePyZjs%2BAJlNRMLxnBQ%2FV570UVuXeDCTiCXkTYzsn71m%2FUOvSjjtEMxOrrlxgvYXGAcwQ994j%2F2%2ByZNUNZ8c8XDlAAFyqCg%2B3F9h9wybZsimF7y7YDkxFd%2F66Qyl%2BbijGqgkf9loPDyb%2F9xbSApJ4UpP7S4YNZQ9swjVNrNPMdw2kNLj6mrSmWI6%2BDjj5PukEbqyPNN5KvGcZDB1wYAga6gZWDOsEhs35B%2FCZz9QTVZhZidI24WbmKyeSfPlvLZ3eYd68Z9f0OMp71OInPBdlmcGA4EGVS0HNqo50TGL4DLPV4Oq5f6959F%2Fl6A9634%2BMDrJg9%2BPmLaJcx%2FDcuI81WT2oIUF8JGt91WqY%2BibQO3RWqhhUICPAEJYSKsyNp9C%2FybMXeQ0pAcG6vpsHJ507hd%2BDPnaZha4XEBdiXOfaO7cZ7%2B5dK%2FV0f3QtazAgHrN3VB%2F%2B0DpMB08ny6YnBBQoWthdrpW4rB1yTCkI7B1NJm745yHSpT1OI8efwcC67%2BgL1r17np2sW9ZaKJ70otOfOIjNj%2BI%2Bk3jp0SDLsudVTBGF6qJEa8aWsN%2BwuwHCDuvtmCmDhhln%2BZ8UUuiR1p%2Bmrajc5Irh5dB8DglTq5t4qQ9CBwgBfAJxZ%2BwUWBMJqsyckGOqUBB4%2FBWIChxRDzt5UH55G%2Fcc56V5LWyuORA9FlV%2FVqe83CeVGQrb%2BddULnG0HRU2o1rXc4Ec5KUTg2wH%2Bt45rTnUiZ0ptWL1nvoPpm3%2F%2Fx11CO7a%2Fr5ukFG1K5I1%2BTKimIxPR1qGDOg04IohfGtTDoMZuoHl2RNE8Ho%2FJb2rkBV23fBWNoNsLjoy%2F57Gsn%2BF6XpwXThIJR87WGLqD1%2FXPYIYCXBmF6&X-Amz-Signature=a07ddcf351b0337db4feaf62c4f8556d62671d018d3e1426ce32a174254db60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
