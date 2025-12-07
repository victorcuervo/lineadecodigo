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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKIGHMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ye4d2OIEAATT2WOH171h79DOra0Ki2T%2BCGT2BYWLSAiAEcef47igQIx8BMqhVUGBvuC4mEsuyUkmK%2BqcUodF31iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMniuqRMkZjQb6DGIMKtwDBPbR9UJYy2Bu9BcrdpGIeESiHuHsFJ%2FzyR1Y4zFfgODeamgzwSxBfP7tU3yq1yo8OfJMbDf1qx4ZtFysIvG2KU60m2jgJNx7%2Faun2jf5v1u07cKVV2FU3yiGy4QVjm5gl94fkG6327ZRzfP86916cG2%2BhZby3cHWS%2BaDEfc6ov2xSc95uba%2FisEGlfEe5M0SvdKgk2v90jOBqzOjzsYVWK7iyhTTLisikI1UzTGeBzJigRlNKADyBcCUH7swxRcbnp6dSrtsn2S%2FGQzMF41WJi7tRm9j%2BNRV%2BmPRGoMYDC2%2FV9mFZGkIHqjRVKHovWOghHSQsB5FemmGwdnnDiIl0fw5oOw0cP7ZA0M75P2vorFJyUfGQ9cSl8lC0asImvFGEJoMeXSjnQ8WYDtAPlQVrRRKihha7ZxIqz7JqifVCw3w6vZ5v9GkJ%2BfkO%2FtvHWvQPPXfBKszWwpfJIsfOiFtYHMlWFqKH0PT5k6Heen3rmnliJrw3CRsCstOZV3sm1CrxIBKKWCfpFJU1RZdLlN9Hhfd1kGcT8bcBo8yBxWvY%2FD1NVShlkIF%2BIkKOJemaM2u05VKjc5B4Yu2icFOt1pnBQo17Yg%2BWufp%2B%2B%2Bbdx1X7hrjA%2BU92sGzU%2BQgdSowhsfXyQY6pgFxtV34%2BHzpTvkuM2CApXwPMtkHJFdI30ZYxTuix05p1U4gVB7YdmFlbWKp8J9O%2BWF6bgONzKEYDOWHyhyTEMNa0zDRn5J2sBs5%2FolqWq2iSuI4itpCwf6j%2FGUo%2BdiIUgoe73MZlNn8RV%2FNz766Sma%2FvGmVpQeFEQXqClqE5V9GPdtT2nKJAwBh5BkUmN1ZTiTJFAKIZtWID5TyAAy1yQVWYJWpX6Ip&X-Amz-Signature=e89332ea573bf40ac456ea5d5129b9f8b893a3bed14dbda394cde0ea43ad3a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKIGHMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ye4d2OIEAATT2WOH171h79DOra0Ki2T%2BCGT2BYWLSAiAEcef47igQIx8BMqhVUGBvuC4mEsuyUkmK%2BqcUodF31iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMniuqRMkZjQb6DGIMKtwDBPbR9UJYy2Bu9BcrdpGIeESiHuHsFJ%2FzyR1Y4zFfgODeamgzwSxBfP7tU3yq1yo8OfJMbDf1qx4ZtFysIvG2KU60m2jgJNx7%2Faun2jf5v1u07cKVV2FU3yiGy4QVjm5gl94fkG6327ZRzfP86916cG2%2BhZby3cHWS%2BaDEfc6ov2xSc95uba%2FisEGlfEe5M0SvdKgk2v90jOBqzOjzsYVWK7iyhTTLisikI1UzTGeBzJigRlNKADyBcCUH7swxRcbnp6dSrtsn2S%2FGQzMF41WJi7tRm9j%2BNRV%2BmPRGoMYDC2%2FV9mFZGkIHqjRVKHovWOghHSQsB5FemmGwdnnDiIl0fw5oOw0cP7ZA0M75P2vorFJyUfGQ9cSl8lC0asImvFGEJoMeXSjnQ8WYDtAPlQVrRRKihha7ZxIqz7JqifVCw3w6vZ5v9GkJ%2BfkO%2FtvHWvQPPXfBKszWwpfJIsfOiFtYHMlWFqKH0PT5k6Heen3rmnliJrw3CRsCstOZV3sm1CrxIBKKWCfpFJU1RZdLlN9Hhfd1kGcT8bcBo8yBxWvY%2FD1NVShlkIF%2BIkKOJemaM2u05VKjc5B4Yu2icFOt1pnBQo17Yg%2BWufp%2B%2B%2Bbdx1X7hrjA%2BU92sGzU%2BQgdSowhsfXyQY6pgFxtV34%2BHzpTvkuM2CApXwPMtkHJFdI30ZYxTuix05p1U4gVB7YdmFlbWKp8J9O%2BWF6bgONzKEYDOWHyhyTEMNa0zDRn5J2sBs5%2FolqWq2iSuI4itpCwf6j%2FGUo%2BdiIUgoe73MZlNn8RV%2FNz766Sma%2FvGmVpQeFEQXqClqE5V9GPdtT2nKJAwBh5BkUmN1ZTiTJFAKIZtWID5TyAAy1yQVWYJWpX6Ip&X-Amz-Signature=09fa35d01f01767faf3acd6d4390f3cd7062eb222b50dc22ed4906e0398c1aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
