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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUGYZXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLyaqdXjqx%2Fty%2FWsQ2SRh7dOWX%2BI%2FL7afzVInnbNmjGwIgCM1xBV1NNa7oaF7IBWA1jZmrS4Q7lBCRRt1ZDKYa%2Bw4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNtmI4pj0GRYxA7csyrcA74t2bpAlK7W2xQvPz9EEwA3KI5X0AgfH5Ko3VQvB1RYQ%2BtZcWRF8I2MdY1LVtjZEeokJewuKRsXhIUtDT2%2B5HyLBxUAobBIUMKWpIFtnZGCPAs98HwCnylnK0R6uaTlCWa6ExaQy5WESc1gapyWnlXe7x6%2BYgpk5qW%2BlrsQAG90SZoIhXBVcziqNFdUbw07rP9nOFSk3OQIGgwzva4vlSKkN3gLkd6er1HBmVegtGE5lljVDAMXrP3FzSoc3GIar%2Fb445mtGrxQgj2UKhYTSo9mIMMHY%2FJG1fyWW5ZFcLjonDbNV%2BWzMXgR9Qb8ce7IoTB6IZTkT1FMTr6aMBoflfysiOYjyZPQLPng2WRAcbMT5vnKgPbk3kvVoRqZfL4o5pZmyjGaqTP7HLVKT2y5zc%2Bvg9Avr8ehSLhSbm2vhMmDRtm9KqjdFhFB5drGGWPFOn55KP7TGQ4YdCV3Yfi9Z%2Bwgjarmdkkn%2FZaY09LyPoAsZdNiG5bXqrM2AzFUQGmLjdq5YG2NzmO0a3Z70ur6Gb99MT%2BuHCcYf6oaVY1LyEcKfgQa%2F0nGWOva4bzTBzTD%2F7mbadw1ffiEwnAbPXWC6YuKAzFfxFCCqN2N4z2S5vKZ3JIHqGqWFxEOmIH7MJO8z8kGOqUBv6YyN1a%2FpX3wQc2lJdqCE5kB4aU2YTbiwfC2g3W8LbiduvO0T%2Fp6ok6lR%2FkTtOILnB1Em3Xhcxe3HE8TK%2FQd5Z%2BVwAOp%2Bt3pUFW0Hm55lXc7y%2FsAPsA8%2B84SwOnANEmX7MK1P2rsjz6sCqwdby%2BifguUsxK2Fh4NQD9y2%2FAfscQxZXs%2BFgdTLsd76ptUDDVevRLB%2BN6Xmt6mdF%2BXF%2B%2BVizdDmhym&X-Amz-Signature=bd0cd3e9ebb2cbb56c744ac72244dc23c2122c2b61f76ec54930841ea46308d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUGYZXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLyaqdXjqx%2Fty%2FWsQ2SRh7dOWX%2BI%2FL7afzVInnbNmjGwIgCM1xBV1NNa7oaF7IBWA1jZmrS4Q7lBCRRt1ZDKYa%2Bw4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNtmI4pj0GRYxA7csyrcA74t2bpAlK7W2xQvPz9EEwA3KI5X0AgfH5Ko3VQvB1RYQ%2BtZcWRF8I2MdY1LVtjZEeokJewuKRsXhIUtDT2%2B5HyLBxUAobBIUMKWpIFtnZGCPAs98HwCnylnK0R6uaTlCWa6ExaQy5WESc1gapyWnlXe7x6%2BYgpk5qW%2BlrsQAG90SZoIhXBVcziqNFdUbw07rP9nOFSk3OQIGgwzva4vlSKkN3gLkd6er1HBmVegtGE5lljVDAMXrP3FzSoc3GIar%2Fb445mtGrxQgj2UKhYTSo9mIMMHY%2FJG1fyWW5ZFcLjonDbNV%2BWzMXgR9Qb8ce7IoTB6IZTkT1FMTr6aMBoflfysiOYjyZPQLPng2WRAcbMT5vnKgPbk3kvVoRqZfL4o5pZmyjGaqTP7HLVKT2y5zc%2Bvg9Avr8ehSLhSbm2vhMmDRtm9KqjdFhFB5drGGWPFOn55KP7TGQ4YdCV3Yfi9Z%2Bwgjarmdkkn%2FZaY09LyPoAsZdNiG5bXqrM2AzFUQGmLjdq5YG2NzmO0a3Z70ur6Gb99MT%2BuHCcYf6oaVY1LyEcKfgQa%2F0nGWOva4bzTBzTD%2F7mbadw1ffiEwnAbPXWC6YuKAzFfxFCCqN2N4z2S5vKZ3JIHqGqWFxEOmIH7MJO8z8kGOqUBv6YyN1a%2FpX3wQc2lJdqCE5kB4aU2YTbiwfC2g3W8LbiduvO0T%2Fp6ok6lR%2FkTtOILnB1Em3Xhcxe3HE8TK%2FQd5Z%2BVwAOp%2Bt3pUFW0Hm55lXc7y%2FsAPsA8%2B84SwOnANEmX7MK1P2rsjz6sCqwdby%2BifguUsxK2Fh4NQD9y2%2FAfscQxZXs%2BFgdTLsd76ptUDDVevRLB%2BN6Xmt6mdF%2BXF%2B%2BVizdDmhym&X-Amz-Signature=d8bac369574c53a8a12a90bc771fefc345143cfaa7174e043be7e3fe54bfb5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
