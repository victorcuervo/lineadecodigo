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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DDBKE6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7IjkXfflqeQAkKD7YzM2J5F82%2BEC2jZBJ77g44KHE5wIgDzfVKs%2Bdo6upR0d%2FfudSaktQctLXf%2B9bCkgNPMtfcp8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBVR6IBrNqiGyrOlPCrcAz9iplguYkcjojfU8LcBNulPHsz9Droe8LQ%2F18syRCQHMtSHOKBXaJT7Yo4j2fEYZXwHKN%2B7Spsw1BRU2aW5EvwXGupoihZAoU%2Fow1w%2BLfkoXYimu2QqCqzzdY9N843aYK1gDJrj7aLkgOde%2BzkrXLeSo83lOCAhkqOm4yzonY5GgutGoOoKJel23EIO4IQl76CXZHKLLj4JFWlXneCAcKVTf7htUfwTG6a8Rd7t4pv0sfgtgURdpeZBhJAFtO8hLKU93gp6c9DIohq1wrxB%2FfkXRmnrYQsEWm4GzUra5akhY3CmtJXFojIykmLvbCoG0yYfwN7fH%2BcBLen6Bsm3EQakuIzyD7YsE%2BnYd6%2Fe11mXCbbOi53LSgeOdt07kasmcFNBiz7P6TdUprZRXNJkweLPHP%2BLenz7U1hoYekvEBxDY9N8BPpW%2FLqclzIkaF184r5vsAhA89eDTN4lasPUDXvn2sxT7BDXFyqjVYwalSte1z%2B83N1dZXM2VImdPAY3Grcglxc2i4s7QdDpSacBl7GSDB4FwZBHpf4QGzt1E7uehX38DEgyVuLV%2BDUjL7g24%2BTk3nZT7qJ%2Fm0l8pQVxFfX%2BEARLxO%2Ft71W5M7yxqrbWmoEb%2BX9cXhGY5VXHMOKm0MkGOqUBGqRDQAqV9l3k669fbFnMFs8lrkbK%2FluNTCB%2FIjy32iFj8cdYAB2i%2Fx3lTZsBl10X0dl8R1kCk5WUZTDGnyvly8t3PZw1Vwcez0mKRTZb0g2OM8%2BDKhfBsHulx10qyYwk1Gbzsczem0mHkBwEtWn20174XXp4DBfuzmdI5%2B6NHa0UslOSSUa8rRN9Ngrdjt9KKKniSsYcCuocDMCGm5aoed3f06II&X-Amz-Signature=3f8e26c60d435cd276c31ed7b7397a1c93789ee463a46a382721d7f6a6d477a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DDBKE6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7IjkXfflqeQAkKD7YzM2J5F82%2BEC2jZBJ77g44KHE5wIgDzfVKs%2Bdo6upR0d%2FfudSaktQctLXf%2B9bCkgNPMtfcp8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBVR6IBrNqiGyrOlPCrcAz9iplguYkcjojfU8LcBNulPHsz9Droe8LQ%2F18syRCQHMtSHOKBXaJT7Yo4j2fEYZXwHKN%2B7Spsw1BRU2aW5EvwXGupoihZAoU%2Fow1w%2BLfkoXYimu2QqCqzzdY9N843aYK1gDJrj7aLkgOde%2BzkrXLeSo83lOCAhkqOm4yzonY5GgutGoOoKJel23EIO4IQl76CXZHKLLj4JFWlXneCAcKVTf7htUfwTG6a8Rd7t4pv0sfgtgURdpeZBhJAFtO8hLKU93gp6c9DIohq1wrxB%2FfkXRmnrYQsEWm4GzUra5akhY3CmtJXFojIykmLvbCoG0yYfwN7fH%2BcBLen6Bsm3EQakuIzyD7YsE%2BnYd6%2Fe11mXCbbOi53LSgeOdt07kasmcFNBiz7P6TdUprZRXNJkweLPHP%2BLenz7U1hoYekvEBxDY9N8BPpW%2FLqclzIkaF184r5vsAhA89eDTN4lasPUDXvn2sxT7BDXFyqjVYwalSte1z%2B83N1dZXM2VImdPAY3Grcglxc2i4s7QdDpSacBl7GSDB4FwZBHpf4QGzt1E7uehX38DEgyVuLV%2BDUjL7g24%2BTk3nZT7qJ%2Fm0l8pQVxFfX%2BEARLxO%2Ft71W5M7yxqrbWmoEb%2BX9cXhGY5VXHMOKm0MkGOqUBGqRDQAqV9l3k669fbFnMFs8lrkbK%2FluNTCB%2FIjy32iFj8cdYAB2i%2Fx3lTZsBl10X0dl8R1kCk5WUZTDGnyvly8t3PZw1Vwcez0mKRTZb0g2OM8%2BDKhfBsHulx10qyYwk1Gbzsczem0mHkBwEtWn20174XXp4DBfuzmdI5%2B6NHa0UslOSSUa8rRN9Ngrdjt9KKKniSsYcCuocDMCGm5aoed3f06II&X-Amz-Signature=b299e1e8426a8b39b76a73715e351f971d6b61719e1d5e9efdd682a808174dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
