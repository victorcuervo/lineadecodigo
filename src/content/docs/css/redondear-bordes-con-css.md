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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCOANJB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVhXfrRnTauxlalL7PgiaJwmdKcd0r2A68UyynS4H6lAiBI2oMKwG1pCA9vRN8SDYDDxF5vU7FqcgO81t8tB%2BwllyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NwOYcySxWe1%2BWNiKtwDGa0iSpqK9hm%2BRUPbP%2FRkvNevY%2F1evqWfloAYCJLKbBmxtV8rqlzMqdJXP6HXP%2BuEPuJqajvKwe2LaV82BU9e9n7IkqmUE1Cj9ZJ%2Bott68tiFmOkWBX9tah3M%2BZ5dgEoGf0xWHDYzCt2p4YjkFBPddpB7HNZubwfUO7hcBjyPkEMc7WfEOIabUBGVxsyjq3xRV7dLtymfvV3SpfWYEE62oIScxq45onhJtmxbXJtkOhqr8MScZin2O3W4DLSYe8eZlABJj08LYFBfjXoNcLxIjiKiZCRugvK88JNM2%2B0Vguk%2FxlA43%2ByM6yuJZy0t03iuZwUVPAnY3K8ruvZYACWsf70%2FeD7SFWQV1QC4TjHmaXrpLfStb89%2FCuLyxfr04r9uTkve%2FNkbcyxSlhX%2F0ShWF3%2BuclNrM85mazeoJT9iiVneRYvs9h8BYpn4t0X8kAB9MkgrcYcJKsWt%2B%2Bzf%2BhhnzSGcdT8mwVOddM1JjEF7v5ZAyM3vGMg4sohf%2FcD%2FfmTma8Q%2BpGjTDks2ky9j7veykXrSKasmrX3PT%2BNWnev2FILuDgvXaTO7VeQAn1WmUT7e2r%2BIU4WsEwSW%2F3LJNQo23mVO5mxUSOUY%2BI7MU85ApPt8Fvosi3Pi0oNPNXgw0cfXyQY6pgEa0kLeNstoONqClbJio0QN565yjMEl37%2BrGVZLMICU0cDPBX4HWump%2BFZ7oliNT3XEShI4c8vg02Cp%2BSzeVuGpbTN15lKe96Sq4%2BKaTqLYMdzUw8i6MAbJ0mnKIt0wjKQuMDb%2BD44Mm35RZ%2B0T3nJ2uWk%2BtEWaN5opG1tWT1U08SYHkYrS2uVMdPru%2B01eT%2BYXJn3keSpxeVd3WHWR9P6nubrBBjT%2F&X-Amz-Signature=25ff66689e915aba5fafde2ffbbd5036d3e78b414decbb196d9eb8b249611bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCOANJB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVhXfrRnTauxlalL7PgiaJwmdKcd0r2A68UyynS4H6lAiBI2oMKwG1pCA9vRN8SDYDDxF5vU7FqcgO81t8tB%2BwllyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NwOYcySxWe1%2BWNiKtwDGa0iSpqK9hm%2BRUPbP%2FRkvNevY%2F1evqWfloAYCJLKbBmxtV8rqlzMqdJXP6HXP%2BuEPuJqajvKwe2LaV82BU9e9n7IkqmUE1Cj9ZJ%2Bott68tiFmOkWBX9tah3M%2BZ5dgEoGf0xWHDYzCt2p4YjkFBPddpB7HNZubwfUO7hcBjyPkEMc7WfEOIabUBGVxsyjq3xRV7dLtymfvV3SpfWYEE62oIScxq45onhJtmxbXJtkOhqr8MScZin2O3W4DLSYe8eZlABJj08LYFBfjXoNcLxIjiKiZCRugvK88JNM2%2B0Vguk%2FxlA43%2ByM6yuJZy0t03iuZwUVPAnY3K8ruvZYACWsf70%2FeD7SFWQV1QC4TjHmaXrpLfStb89%2FCuLyxfr04r9uTkve%2FNkbcyxSlhX%2F0ShWF3%2BuclNrM85mazeoJT9iiVneRYvs9h8BYpn4t0X8kAB9MkgrcYcJKsWt%2B%2Bzf%2BhhnzSGcdT8mwVOddM1JjEF7v5ZAyM3vGMg4sohf%2FcD%2FfmTma8Q%2BpGjTDks2ky9j7veykXrSKasmrX3PT%2BNWnev2FILuDgvXaTO7VeQAn1WmUT7e2r%2BIU4WsEwSW%2F3LJNQo23mVO5mxUSOUY%2BI7MU85ApPt8Fvosi3Pi0oNPNXgw0cfXyQY6pgEa0kLeNstoONqClbJio0QN565yjMEl37%2BrGVZLMICU0cDPBX4HWump%2BFZ7oliNT3XEShI4c8vg02Cp%2BSzeVuGpbTN15lKe96Sq4%2BKaTqLYMdzUw8i6MAbJ0mnKIt0wjKQuMDb%2BD44Mm35RZ%2B0T3nJ2uWk%2BtEWaN5opG1tWT1U08SYHkYrS2uVMdPru%2B01eT%2BYXJn3keSpxeVd3WHWR9P6nubrBBjT%2F&X-Amz-Signature=1748aa4ef92e0d852a785f65d2140cbadbaf35d4ead018e6fa1bcaa805c9e335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
