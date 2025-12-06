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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HXNG6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRrnoEvsNrO65kO6NZ3WKSRe9vK2w9qMBudT9EV35aEgIgL9IRWcH7zGFep4EicIngHJvUmJMOcOp9OX7w7utJNeEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCbaRH6L1PXXsdfdnircA7OgCQZUwXHsjnx%2BeNwqRYdPgw2R%2F8mU8joVJkxr923kU%2BKBAxnrvP8hBzYFNgZpCLXgu17V7GHM3GH3Z3zrVckjwMrP2wrdm6Ki3O642TzG1mwaBkqnlVyRWKxdAv2bJDEQyIQ3wd1i6Lt9Ss449VCGNr4HoCZsN1BxWCbgJ1ZNzPSBvtkEMpvHmeAWgnZXmTMKCn2YddWcMNiHBK1wFbBi%2FRrJJ%2Fh%2BYjCZe636tCe9C3zvWHTpVi8TUQFgUryUlEw3BuQ8xpugcom1JAS823OcZs%2BN%2Buxu%2B6V0U5NzTmLVr4aEEJurm6iRF6NcdP2nSrIBBovjntKXebnJc6p%2F%2BCmU5QiXHRa5q68LvDMzxAL%2B07s7yjumb1kH70bzNjT%2FR1ThEnKqSP5Q8EMpyQD6lAZsSWw6N9bBUy1UVU5iH%2BdWalBEpIra%2FhrxmrKZtwo3pE2cBMNiOJ9SqkbEy%2F9qR74h4oSsHzjRUyprWbj5%2Fo%2B3%2BlVHu9TF%2BjXDDC1wwowPPJjYlA3cE%2BQorFQFsCgUfzhYpVjboZMHBg03Hmr8KnkH%2BFgMow%2B%2BA2%2BKNsLpwnEIU75TIq8pqjzw14zBwoLVDPK7%2Fv%2BjY7LOOOgFvpbl4PARndhHVpZFYlbQBn29MMHK0ckGOqUB14SFTtOgV9f2oeHrOLjHyo2KDqs8bYaBlmjDYJPbSbyt0niP1QnOT3ivCBittG7%2BorcEPaixwAfvkcoahRItbbZlkgKwkW%2BQ2%2FAcWdQMsN6BwCiYwZ4206MDzUjcDg6N4EjX1xaZdVos7e83XtkvLBI%2FygxQj1yZRZuBKMylm9cwvCT8Q6%2FZ7cT4IffP15LWdH5Cb6bs3NjmOhCB2WWmKsm9UA%2FU&X-Amz-Signature=a8db646e8f6d6c9776000a3419f986483b0650249379c4f12e701c415c955a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HXNG6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRrnoEvsNrO65kO6NZ3WKSRe9vK2w9qMBudT9EV35aEgIgL9IRWcH7zGFep4EicIngHJvUmJMOcOp9OX7w7utJNeEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCbaRH6L1PXXsdfdnircA7OgCQZUwXHsjnx%2BeNwqRYdPgw2R%2F8mU8joVJkxr923kU%2BKBAxnrvP8hBzYFNgZpCLXgu17V7GHM3GH3Z3zrVckjwMrP2wrdm6Ki3O642TzG1mwaBkqnlVyRWKxdAv2bJDEQyIQ3wd1i6Lt9Ss449VCGNr4HoCZsN1BxWCbgJ1ZNzPSBvtkEMpvHmeAWgnZXmTMKCn2YddWcMNiHBK1wFbBi%2FRrJJ%2Fh%2BYjCZe636tCe9C3zvWHTpVi8TUQFgUryUlEw3BuQ8xpugcom1JAS823OcZs%2BN%2Buxu%2B6V0U5NzTmLVr4aEEJurm6iRF6NcdP2nSrIBBovjntKXebnJc6p%2F%2BCmU5QiXHRa5q68LvDMzxAL%2B07s7yjumb1kH70bzNjT%2FR1ThEnKqSP5Q8EMpyQD6lAZsSWw6N9bBUy1UVU5iH%2BdWalBEpIra%2FhrxmrKZtwo3pE2cBMNiOJ9SqkbEy%2F9qR74h4oSsHzjRUyprWbj5%2Fo%2B3%2BlVHu9TF%2BjXDDC1wwowPPJjYlA3cE%2BQorFQFsCgUfzhYpVjboZMHBg03Hmr8KnkH%2BFgMow%2B%2BA2%2BKNsLpwnEIU75TIq8pqjzw14zBwoLVDPK7%2Fv%2BjY7LOOOgFvpbl4PARndhHVpZFYlbQBn29MMHK0ckGOqUB14SFTtOgV9f2oeHrOLjHyo2KDqs8bYaBlmjDYJPbSbyt0niP1QnOT3ivCBittG7%2BorcEPaixwAfvkcoahRItbbZlkgKwkW%2BQ2%2FAcWdQMsN6BwCiYwZ4206MDzUjcDg6N4EjX1xaZdVos7e83XtkvLBI%2FygxQj1yZRZuBKMylm9cwvCT8Q6%2FZ7cT4IffP15LWdH5Cb6bs3NjmOhCB2WWmKsm9UA%2FU&X-Amz-Signature=d0adc32d62afb5645c7f7924ecd56c0d7268b6d2618d5f6f9343e56c8aa2f229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
