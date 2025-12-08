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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPNSFIU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu5wO6GjzgflSiU1MWZ5GgBLzn30S4d9sVJjihXb8avAiEAiOKbSYAxruZNl5Z87HPnJsiv1fPcT2w2RBKFVA00YCgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Z%2F8H4BKEi%2FoO%2BWCrcAz9gUbez62qOl%2FqZfPO%2FmE1cdz1j1y1MBwr3h1cNklzoGtj4OCq75VpDmurCTh9k2Soh52ogPKiBEVjNBWNMjoAZxko7nLzNbugXmo%2BydPklOmHsgeJkfzHd6FTImZOqAzXkKMrP%2FP9zlqeBU2Cf%2BVY12eOYUiU5C%2B5bryeSaDtZcruDj3gvQVtFUa28Svy1C0VydaUfTsvPs2GICJuJytowFVgUhOstPJDMR1JduYW1dto3owoQXFjsgqG%2FUju1NmMjQgNRwdb4z61nqO%2BDWG1aealJkI39ECejdD5z%2FdpDr7FbJ3ObPHWUKv0SDwWfdUNAAnI2f%2BdtyFG669wDQtQ3SnOiqGKOie64MtKrIZDCTsiJAZRE3%2BWr%2FFE0A6vf7a80H1kHRAw76h1GONV4pIwFTOCBUVentPYxxdJxfFVuKTqTeI5cEqsC9HsYh6fuy3S3AVi%2FeEHKrht0UviwKdiuUqUtqROzvk8YiZkBvMxKhNwJPdCegpL50B0onDQpbZupFotuEtHfUiLS9b6GmGGxujAlKGFZStG6wLG8%2F62o5KKlKOs%2FLAbiRwsrlfzX6ZyX996pISeiKwk%2Bs6Km8nRPvoQoKELPynrzmSep1e6PX6xwJsqXH2%2FW7q6hMP7s2ckGOqUBE%2BJyuSomWyH39qkzSQ47awPh6VMYAyxhBYZYg24RiWnkqY21eyUKiKNNoReHBa6dUwf8xTUDtvrwau%2BZYdfvZu4mtewmeEFgU5AY%2Bly5fJY7Hkr7gSZHx7x%2FaavgEZ0sN9RfE7az8Bvc4mPfIN6KVHPfKJZ%2FSmsKDQxfkPoUtTlBokmFpU5fp8gCk5pZjwtpBY4Z4Kt7A0iqselgg8Uc2ktf07tC&X-Amz-Signature=74b50ee816bb48a9672ecc072d880085f550841255811a319a3a5fc70c6bc736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPNSFIU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu5wO6GjzgflSiU1MWZ5GgBLzn30S4d9sVJjihXb8avAiEAiOKbSYAxruZNl5Z87HPnJsiv1fPcT2w2RBKFVA00YCgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Z%2F8H4BKEi%2FoO%2BWCrcAz9gUbez62qOl%2FqZfPO%2FmE1cdz1j1y1MBwr3h1cNklzoGtj4OCq75VpDmurCTh9k2Soh52ogPKiBEVjNBWNMjoAZxko7nLzNbugXmo%2BydPklOmHsgeJkfzHd6FTImZOqAzXkKMrP%2FP9zlqeBU2Cf%2BVY12eOYUiU5C%2B5bryeSaDtZcruDj3gvQVtFUa28Svy1C0VydaUfTsvPs2GICJuJytowFVgUhOstPJDMR1JduYW1dto3owoQXFjsgqG%2FUju1NmMjQgNRwdb4z61nqO%2BDWG1aealJkI39ECejdD5z%2FdpDr7FbJ3ObPHWUKv0SDwWfdUNAAnI2f%2BdtyFG669wDQtQ3SnOiqGKOie64MtKrIZDCTsiJAZRE3%2BWr%2FFE0A6vf7a80H1kHRAw76h1GONV4pIwFTOCBUVentPYxxdJxfFVuKTqTeI5cEqsC9HsYh6fuy3S3AVi%2FeEHKrht0UviwKdiuUqUtqROzvk8YiZkBvMxKhNwJPdCegpL50B0onDQpbZupFotuEtHfUiLS9b6GmGGxujAlKGFZStG6wLG8%2F62o5KKlKOs%2FLAbiRwsrlfzX6ZyX996pISeiKwk%2Bs6Km8nRPvoQoKELPynrzmSep1e6PX6xwJsqXH2%2FW7q6hMP7s2ckGOqUBE%2BJyuSomWyH39qkzSQ47awPh6VMYAyxhBYZYg24RiWnkqY21eyUKiKNNoReHBa6dUwf8xTUDtvrwau%2BZYdfvZu4mtewmeEFgU5AY%2Bly5fJY7Hkr7gSZHx7x%2FaavgEZ0sN9RfE7az8Bvc4mPfIN6KVHPfKJZ%2FSmsKDQxfkPoUtTlBokmFpU5fp8gCk5pZjwtpBY4Z4Kt7A0iqselgg8Uc2ktf07tC&X-Amz-Signature=da0e9fd3e09c969f078ca1f2bd23dca0b5dbf876fd15ae82ebf2de6037828302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
