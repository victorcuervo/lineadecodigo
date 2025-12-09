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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYXEGG7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSE8x1mGst9Tu%2FNsyDrOT%2FsiNi6k%2BADR2aY3tgN88l8wIgNIDOK5VKHdSB%2Bsq%2BZst6eXU4KB%2B%2FiwbQh3iVIcxz15QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUKTfaB1Ndnr373XircA3p%2F362ruYsaDD9BfOR8O5yUpCSFkB4kLfImkiDelGOLBqefu%2FhefVvGM7teusxQtlZVrfbyfY02ctqFqYlqfxmtCBTS8W6lxszvec%2F8QIE3G0eaCy2LngA3sE0V3blNBnXslI7rzWByldpR%2FqxtjyVct7ctCgP%2B7vCTx7%2ForMG5yIev53AStvI459jIKmBh9cFnJEXXwd7AlAY5RgxIge7q1%2BQRk0LDQhyvz7csdV6rM0XTlFsT8GYbHzq3IBPdvMj%2B%2FD554ZbVd35VwAcoJl%2FCbDrYVkIxxk1LVSL1K6qHYyeuKg0RExGV2ZtMcFASzvqYz07U7nEZVmnn7VywN0PtJ2d9%2BYBoZlsl15oMNpaovQ4NgDIED65GtMWPFfd%2F4RWG38axmjlFgVLJCI6bBeVjyiw3Eon79OXurCERhaQQ39qPmyH8DjngRLe08GVvcsKQmu0gonVFtj5%2BIPOmJzeoIeKNLc5qE%2FgKZbUmSpesgvQQLmT1EoPBYt8L7f%2B1WysODC1mgf4cpu4nFa4jqbFUvOVfsBOZcACXtwzGca1OteoQhdlO47HnffhJvWdipINzgj8eAaK4qWAflREuGbZu8Pi7bYsMdxvFE0AMyI0VpjBsGGZxbahEB3OeMKaO3skGOqUBTwyP0nyHNWpXpMDsiFQnAysc0eSN4kpDD%2B1ag7hYaSiBAnAh4xlC2GTcI%2FwVfaazgyAZANeYL6xRK47f5OldEMJjAIpHTZP9fiylij28sR43lmqfSYdYLvuTLdlcAhnd%2FTbp5TTcp%2F86HqyCje8%2BCgq1fmYAoaAdVcPGiuWx4c0PpblCjVp9b4%2BT17KXhDUnGAKZMgpnpwUHweZ%2BL5DdxSOQuRVG&X-Amz-Signature=752bde38f6614c5bf8e70323e0c16899b7b1e4c14cd3a32d64eaeb0a41ce659d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYXEGG7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSE8x1mGst9Tu%2FNsyDrOT%2FsiNi6k%2BADR2aY3tgN88l8wIgNIDOK5VKHdSB%2Bsq%2BZst6eXU4KB%2B%2FiwbQh3iVIcxz15QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUKTfaB1Ndnr373XircA3p%2F362ruYsaDD9BfOR8O5yUpCSFkB4kLfImkiDelGOLBqefu%2FhefVvGM7teusxQtlZVrfbyfY02ctqFqYlqfxmtCBTS8W6lxszvec%2F8QIE3G0eaCy2LngA3sE0V3blNBnXslI7rzWByldpR%2FqxtjyVct7ctCgP%2B7vCTx7%2ForMG5yIev53AStvI459jIKmBh9cFnJEXXwd7AlAY5RgxIge7q1%2BQRk0LDQhyvz7csdV6rM0XTlFsT8GYbHzq3IBPdvMj%2B%2FD554ZbVd35VwAcoJl%2FCbDrYVkIxxk1LVSL1K6qHYyeuKg0RExGV2ZtMcFASzvqYz07U7nEZVmnn7VywN0PtJ2d9%2BYBoZlsl15oMNpaovQ4NgDIED65GtMWPFfd%2F4RWG38axmjlFgVLJCI6bBeVjyiw3Eon79OXurCERhaQQ39qPmyH8DjngRLe08GVvcsKQmu0gonVFtj5%2BIPOmJzeoIeKNLc5qE%2FgKZbUmSpesgvQQLmT1EoPBYt8L7f%2B1WysODC1mgf4cpu4nFa4jqbFUvOVfsBOZcACXtwzGca1OteoQhdlO47HnffhJvWdipINzgj8eAaK4qWAflREuGbZu8Pi7bYsMdxvFE0AMyI0VpjBsGGZxbahEB3OeMKaO3skGOqUBTwyP0nyHNWpXpMDsiFQnAysc0eSN4kpDD%2B1ag7hYaSiBAnAh4xlC2GTcI%2FwVfaazgyAZANeYL6xRK47f5OldEMJjAIpHTZP9fiylij28sR43lmqfSYdYLvuTLdlcAhnd%2FTbp5TTcp%2F86HqyCje8%2BCgq1fmYAoaAdVcPGiuWx4c0PpblCjVp9b4%2BT17KXhDUnGAKZMgpnpwUHweZ%2BL5DdxSOQuRVG&X-Amz-Signature=ae5a1b831c6207e3ea58d94044c52c02ad4ed0b6376baba063f9d779e8691a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
