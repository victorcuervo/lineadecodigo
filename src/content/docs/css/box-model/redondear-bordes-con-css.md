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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAYMGNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfbqakFDvgrn%2FPKwDLyH9BFlDIebx%2B4d3PB38TgIFKbAiA02c5fef1AScilWlRVhg3eJ7x3tTug2vTg28bpNUkgPyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQUD1Oqvji4x9RXKsKtwD9wJv4eB1t7HiOALN%2Bxd2QMsgk8ztED%2FnBvOdKdIzpUJxfqDaOmEOBT8Q5at5LDqxSgVRHCbx6AvoCNq1LlQ6G0fm8kBMpki9z8Nyxjz%2FfevQhswdOoS9wAFvOv4Xy%2BKU8ZHnogiBpqmTB%2Frk6DVuiZakaS4zMyk%2FVMJFtKqmgd%2Bzh0LG2zeWRPWPzWU5jsnfLRzkZDXLPwXRTOBKYrpPQYszZCOkxJb4dITbs4upPTBiP7pb0kxvaMr7RuqOLDV%2FUAu3elHV7OKyP96JxtQ74cRA%2B6qrJQK24VJSdl13%2FHWhvKv6oPvtbXNxLlR%2FljoYOdAuT0PU76pqlhWHXknXNRkEgTL7wsEM09Fg4d1EgLYC7VRBj6ktYJn9PGC%2F%2F2%2FPBm40ZJn9pDD6A3B2pqYVausxNdntThVDnnGuXn%2BLwanf4MGDC8mkGmfi8Q6Q3bShTsjT23OMbq3gDXG%2Fox7TkkZYKY3P8Ws1Wwuk8tJPycNPO1%2Bxh22DGl355%2BgOJ9lUmfJRjDr9WdmySryQAFHma8HFJpQ04k6xKwB2J4gmaXVTeZST27al2l9kMEPcnLPJZbrBHSXPClkmiMNlQkA%2Fia%2FvysDuFnJD%2Bj4P00WEp3kBP9uDqNoLUtX4TOcwzYCLygY6pgF55lp%2Bp2R%2FF2AJqSGraO%2BnBFb2hZoL8e0pkPGSr%2BIL0zNXLupICjD%2F5P7mtKPvVeYybiMyhsMMqe8cgGk3dMqYBkXldErEm0a7NXYhL4Oj0sgSdg0WvH1u14ytEeZUnjfRzvc6diOS4cecFuhpb%2FQz%2FDFZoBfF6U8aYRVF8hI0Fp9oMpPqR4xBP5SoHs40IOG6j9vznl2yXXokUCOgXxYmBAuRcFQ1&X-Amz-Signature=ddf0e2b2314d4e1d88420ed1d28dc9aec48682a10a2cf833f0e855097b44c509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAYMGNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfbqakFDvgrn%2FPKwDLyH9BFlDIebx%2B4d3PB38TgIFKbAiA02c5fef1AScilWlRVhg3eJ7x3tTug2vTg28bpNUkgPyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQUD1Oqvji4x9RXKsKtwD9wJv4eB1t7HiOALN%2Bxd2QMsgk8ztED%2FnBvOdKdIzpUJxfqDaOmEOBT8Q5at5LDqxSgVRHCbx6AvoCNq1LlQ6G0fm8kBMpki9z8Nyxjz%2FfevQhswdOoS9wAFvOv4Xy%2BKU8ZHnogiBpqmTB%2Frk6DVuiZakaS4zMyk%2FVMJFtKqmgd%2Bzh0LG2zeWRPWPzWU5jsnfLRzkZDXLPwXRTOBKYrpPQYszZCOkxJb4dITbs4upPTBiP7pb0kxvaMr7RuqOLDV%2FUAu3elHV7OKyP96JxtQ74cRA%2B6qrJQK24VJSdl13%2FHWhvKv6oPvtbXNxLlR%2FljoYOdAuT0PU76pqlhWHXknXNRkEgTL7wsEM09Fg4d1EgLYC7VRBj6ktYJn9PGC%2F%2F2%2FPBm40ZJn9pDD6A3B2pqYVausxNdntThVDnnGuXn%2BLwanf4MGDC8mkGmfi8Q6Q3bShTsjT23OMbq3gDXG%2Fox7TkkZYKY3P8Ws1Wwuk8tJPycNPO1%2Bxh22DGl355%2BgOJ9lUmfJRjDr9WdmySryQAFHma8HFJpQ04k6xKwB2J4gmaXVTeZST27al2l9kMEPcnLPJZbrBHSXPClkmiMNlQkA%2Fia%2FvysDuFnJD%2Bj4P00WEp3kBP9uDqNoLUtX4TOcwzYCLygY6pgF55lp%2Bp2R%2FF2AJqSGraO%2BnBFb2hZoL8e0pkPGSr%2BIL0zNXLupICjD%2F5P7mtKPvVeYybiMyhsMMqe8cgGk3dMqYBkXldErEm0a7NXYhL4Oj0sgSdg0WvH1u14ytEeZUnjfRzvc6diOS4cecFuhpb%2FQz%2FDFZoBfF6U8aYRVF8hI0Fp9oMpPqR4xBP5SoHs40IOG6j9vznl2yXXokUCOgXxYmBAuRcFQ1&X-Amz-Signature=8e4050b82a18219331eaea05e78b180c5d8cc9704df8bac0827b920b46101ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
