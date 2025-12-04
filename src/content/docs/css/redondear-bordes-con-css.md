---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTFOV7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDhyptLwSjGUWuuTOZWg2MVAxOQO%2FJoxRePVQ9jJWzCsAIhALGx5JYvdORo43WcNlWwtLc9HZZEJ2RuI2U8R61Avwc%2FKv8DCDsQABoMNjM3NDIzMTgzODA1IgxZFbRMjepTjpxWeYwq3ANFocJ%2BEh0RUoGMFDJa88pTik8PZq7ktJlUncdiOIMME39feFiEyWbiKIMXi7IW1WFlAQ1%2FRQ0U7TMzvsIiMcIkQGFhsU0RupWISbpBRhJrtegADFQSXw98LTzfKs1Lho3SsxG4rvIpSqTXyijGs9HDiL1aRFoBAvw%2BntMHBCDTOg1kt6EL06oPVdg%2Be%2BFxMH2ud%2BWR7GXRiOQOEJsatHBaXcXervz1qMCEpPdAc%2FRZiu5RUVDUQdt2sHjM%2F8xwY3wTyqH%2FPrZz%2B7cAbiU1hbnqPDMRD7I8E2kNbLVXdVHWv8gaIiT0frbU2lXbVSsnoaomIyZLnt14Ap9w4b3YyPgplbm1K0dDBAtvNbX7s4BOj6n%2BEzdgQ5RgJgiqEaEZ99DNASQiMutQU4KdJkz3P3uIbdreVauuIt%2FYElO%2BT15mLEPJZpmDygGA90y3FIGkk16B33zM2xyr5SlBgUl2Eb%2BgADpy38Wr2H30xN15e6CsCxdivz%2FoKY5itfZxGd7zlncrlt8dPZEg7vFBOJ%2BvYbxa1Mdpxsi81gISMZNRSdpfH97N%2BCEfzaYrjxp4ECnQcFVhcSoaQ8zXukTefeH3jaA7hXgty9aKj6wCeF9LRWTZREMT8mx9%2BF9Lm%2B0ySDDo08PJBjqkAY5T69RBe5OMDuGJIURG6wWh%2BmyyUsNvfUvNMK1M2RZ84izUi3UN5qerq62YZwaVh59eGIFuJDWw3AGu0yG9IJ7xlwFGTwv1TrGIQr2cScRrSajSIWqCs8rB3V7U4jKkd1cBAUefYAgsiJsk6il4Rv1OJuAoFAeKFACutUQSBtY6jrWWul9hoi6Bd5a1bDyOz%2FMbT6r7M0H4Tz0qW52Gw91xvnFi&X-Amz-Signature=74c5868c84f118ffcc895300d33309640dbe830ea51d9b9d27dcf2b021bb3f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTFOV7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDhyptLwSjGUWuuTOZWg2MVAxOQO%2FJoxRePVQ9jJWzCsAIhALGx5JYvdORo43WcNlWwtLc9HZZEJ2RuI2U8R61Avwc%2FKv8DCDsQABoMNjM3NDIzMTgzODA1IgxZFbRMjepTjpxWeYwq3ANFocJ%2BEh0RUoGMFDJa88pTik8PZq7ktJlUncdiOIMME39feFiEyWbiKIMXi7IW1WFlAQ1%2FRQ0U7TMzvsIiMcIkQGFhsU0RupWISbpBRhJrtegADFQSXw98LTzfKs1Lho3SsxG4rvIpSqTXyijGs9HDiL1aRFoBAvw%2BntMHBCDTOg1kt6EL06oPVdg%2Be%2BFxMH2ud%2BWR7GXRiOQOEJsatHBaXcXervz1qMCEpPdAc%2FRZiu5RUVDUQdt2sHjM%2F8xwY3wTyqH%2FPrZz%2B7cAbiU1hbnqPDMRD7I8E2kNbLVXdVHWv8gaIiT0frbU2lXbVSsnoaomIyZLnt14Ap9w4b3YyPgplbm1K0dDBAtvNbX7s4BOj6n%2BEzdgQ5RgJgiqEaEZ99DNASQiMutQU4KdJkz3P3uIbdreVauuIt%2FYElO%2BT15mLEPJZpmDygGA90y3FIGkk16B33zM2xyr5SlBgUl2Eb%2BgADpy38Wr2H30xN15e6CsCxdivz%2FoKY5itfZxGd7zlncrlt8dPZEg7vFBOJ%2BvYbxa1Mdpxsi81gISMZNRSdpfH97N%2BCEfzaYrjxp4ECnQcFVhcSoaQ8zXukTefeH3jaA7hXgty9aKj6wCeF9LRWTZREMT8mx9%2BF9Lm%2B0ySDDo08PJBjqkAY5T69RBe5OMDuGJIURG6wWh%2BmyyUsNvfUvNMK1M2RZ84izUi3UN5qerq62YZwaVh59eGIFuJDWw3AGu0yG9IJ7xlwFGTwv1TrGIQr2cScRrSajSIWqCs8rB3V7U4jKkd1cBAUefYAgsiJsk6il4Rv1OJuAoFAeKFACutUQSBtY6jrWWul9hoi6Bd5a1bDyOz%2FMbT6r7M0H4Tz0qW52Gw91xvnFi&X-Amz-Signature=0cd7ec5db6db219aa120591acae549e88080d082a908302d5644b74a578a8e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
