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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMIWIAQS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFHhnXo%2Bm4c5277PAMOvSfOFwiUS95ykmjyVnuOrV1jAiA7nsfo%2F5o4dUDDedRhvrh%2BjL0RpMcnPm9tfCy8chadhSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZfUnhsxzpfKp8R4KtwDpHk%2By3z%2BcvGs56MLwe9gJLPfa5AQbQ8VFSBbbd24opaDS%2FA8PKXoyn6D03MQlgv3yIQ8hyxbawCCwxbgjpq7v4AV%2BGBrp2FTeeOR6CbxDVPmQyUQis6KrgGbRlkYPBBVSeyQ7NR8zqoQ5Mbk697KslEPkoJDOv24vLsWgG4tVI0uh9AyK%2Bvwnx3ks6WUlz%2FN01fyptHosvS4mCSXeJE7mc1z%2FL%2B8SyfXp3l26fI9mN61f49%2B4%2FDew58MuFgNAJQxI3PNdlJFHMSrntOUp1XU103Qz4NN0X20ie%2Fo%2BBT%2B6%2FoNG3NUX9mwv6L6jYIemUa2FTEfqFlAJgc4uQy%2FHrF%2BrezV4cnOGuahiGh6RX2LlzFUGdAhWOM5fjZ2zsoYQ6zUP12o2%2BvOOZczuCPaEAl6JmsoRnKEKJQiXZjLUmMbg6OHG36YTmWgeHuMm7sCsVHSS7x%2BPUy%2F99U%2FIsND%2Fjrjjpsr0d9dzIYLLApuvQ%2BCGiqhmLYBjKfGjV0lqa5JQJjviCFQLZccf%2F20GO3btanND5Y9PLG9qd%2F%2F1e0yA3wkHmuWU%2FoZFZwmUxtR257PCNELkTZKfZ%2FFx%2BctAop0lVE4eKBs6LYpIdfzgQnco6%2Fip09%2FBHAMssPc6Sn2y0kwvMfXyQY6pgFLgeiki5J8YAKQLbfOTtm6lOigcbvSRW%2BB10OEBD6zG5S4hoYKDiGiduIuRMzZ855BJQXM8%2Bi13cLsUrUk5uj96K1dIxoKs%2F3y0vJ3f4wamq%2FofIa0q1A0E09uo5NWORYhvgo3vGkbC761FCzugFWaEW8QVGRRWiHnwYXmf4pPmmpKceZXDJqeLpK%2B1TfKqO099DnirgGF3oVPbOFwyVgPxvLo36gU&X-Amz-Signature=ca918e3e4d58e37ee1a66cbec46dfe8b8a2ba0cfbae2981001f32cb0ba724dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMIWIAQS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFHhnXo%2Bm4c5277PAMOvSfOFwiUS95ykmjyVnuOrV1jAiA7nsfo%2F5o4dUDDedRhvrh%2BjL0RpMcnPm9tfCy8chadhSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZfUnhsxzpfKp8R4KtwDpHk%2By3z%2BcvGs56MLwe9gJLPfa5AQbQ8VFSBbbd24opaDS%2FA8PKXoyn6D03MQlgv3yIQ8hyxbawCCwxbgjpq7v4AV%2BGBrp2FTeeOR6CbxDVPmQyUQis6KrgGbRlkYPBBVSeyQ7NR8zqoQ5Mbk697KslEPkoJDOv24vLsWgG4tVI0uh9AyK%2Bvwnx3ks6WUlz%2FN01fyptHosvS4mCSXeJE7mc1z%2FL%2B8SyfXp3l26fI9mN61f49%2B4%2FDew58MuFgNAJQxI3PNdlJFHMSrntOUp1XU103Qz4NN0X20ie%2Fo%2BBT%2B6%2FoNG3NUX9mwv6L6jYIemUa2FTEfqFlAJgc4uQy%2FHrF%2BrezV4cnOGuahiGh6RX2LlzFUGdAhWOM5fjZ2zsoYQ6zUP12o2%2BvOOZczuCPaEAl6JmsoRnKEKJQiXZjLUmMbg6OHG36YTmWgeHuMm7sCsVHSS7x%2BPUy%2F99U%2FIsND%2Fjrjjpsr0d9dzIYLLApuvQ%2BCGiqhmLYBjKfGjV0lqa5JQJjviCFQLZccf%2F20GO3btanND5Y9PLG9qd%2F%2F1e0yA3wkHmuWU%2FoZFZwmUxtR257PCNELkTZKfZ%2FFx%2BctAop0lVE4eKBs6LYpIdfzgQnco6%2Fip09%2FBHAMssPc6Sn2y0kwvMfXyQY6pgFLgeiki5J8YAKQLbfOTtm6lOigcbvSRW%2BB10OEBD6zG5S4hoYKDiGiduIuRMzZ855BJQXM8%2Bi13cLsUrUk5uj96K1dIxoKs%2F3y0vJ3f4wamq%2FofIa0q1A0E09uo5NWORYhvgo3vGkbC761FCzugFWaEW8QVGRRWiHnwYXmf4pPmmpKceZXDJqeLpK%2B1TfKqO099DnirgGF3oVPbOFwyVgPxvLo36gU&X-Amz-Signature=83dd0dc1d9f1ed63ca8ae4ef5e9bef364c9ff88b4f2dc6b289f0e9c6ba133f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
