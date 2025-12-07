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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBTPPFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQfJCZwk5wnOlx%2FVCmwzmd6pV5fCd1RYVLTQUT1Hb9gAiEA%2Bw%2FyDBtx62b%2BWxFP2b5MnUjxXbBMLOI%2BE%2FsO3%2Bt3mRcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoyj5saAMMwdTZPwSrcA2u4SL9S6HuCPRuQ0EopL%2BG%2BdgazzsTruQre3dWxFfWqlFKvpoiD0C0iVx8d887wjpBhS7o%2BxYbHNqOcqN%2F4N4d5KutHkCHRu92L%2B5bGEOMjq%2BsRXP%2BPCoUvCvJzm8KHHu9c08MLesd4qncNDNqm%2FPbJJaJPHgvHqu5Upl9Omm3Gt%2B0ls90Ef8qeOOaMlesgTquyh%2BYIVwwDfxWLltlvDqNE%2BelUKpt8VOYaSaEIivTUlhXUNqjOKfgZpRmTuW4g3qJ3OD9aDiUyw5mH5gDLP3cgY6nqDrvFM%2BI3V5DyPLMmxuqkLEm6GKvjqjhvGj91tzppCpsl6TnVqyAh0cDEriArOIck6s6ij1YEbWJGiRtlkGvI6xwwkJYYgyJTPTsupi9HOVJRE%2Bb3yfCPCxv%2B1mAPqSiJF1yaM%2FJAOmz%2FMj8NaEDqz3Or14S4iq45UZgMt4T6JpbAec1QF6pCf4wFO%2BqZqMLiO2cr%2BlxxnNi9wSPUwXJcyMwyREzS%2F53upUURRO2AnfcKjUzryLgJMzCxB9Uyw9zjeb%2FPrJ5C8wSkBW%2BqKsXsD5%2B90pGaYSf4KCObQySUot74csarF07DXSWb1zsUZvgmo%2By0yD74kO7U0KR%2F6zsAq1uHBgHXQVP4MKuf1MkGOqUB9NsXFJ7rgc59JSjBdMqMqN252wETrzAQyvFJuG9IYIR8ENA%2FqCaL02iqH%2FWEzFSpuSZRR2Yj24tCoXTG5gT%2FLAukKBFvjOjlrW1L1V6tAF%2BjmdxXvxoxPxcWML9FFwpcW3tZ0bIftFf21rz%2FUiyHyOSHdsdPG9%2FaJ%2FgAbPCoqf9w3efxhLLWvd0Ew291Z3SHAm%2F4kDvIfxYhzUaiT9MNAHIS4Nx%2F&X-Amz-Signature=6ab793007ddac0b26f264de822eed31cff86938c4e3cbcc8f34a45202ad5f2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBTPPFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQfJCZwk5wnOlx%2FVCmwzmd6pV5fCd1RYVLTQUT1Hb9gAiEA%2Bw%2FyDBtx62b%2BWxFP2b5MnUjxXbBMLOI%2BE%2FsO3%2Bt3mRcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoyj5saAMMwdTZPwSrcA2u4SL9S6HuCPRuQ0EopL%2BG%2BdgazzsTruQre3dWxFfWqlFKvpoiD0C0iVx8d887wjpBhS7o%2BxYbHNqOcqN%2F4N4d5KutHkCHRu92L%2B5bGEOMjq%2BsRXP%2BPCoUvCvJzm8KHHu9c08MLesd4qncNDNqm%2FPbJJaJPHgvHqu5Upl9Omm3Gt%2B0ls90Ef8qeOOaMlesgTquyh%2BYIVwwDfxWLltlvDqNE%2BelUKpt8VOYaSaEIivTUlhXUNqjOKfgZpRmTuW4g3qJ3OD9aDiUyw5mH5gDLP3cgY6nqDrvFM%2BI3V5DyPLMmxuqkLEm6GKvjqjhvGj91tzppCpsl6TnVqyAh0cDEriArOIck6s6ij1YEbWJGiRtlkGvI6xwwkJYYgyJTPTsupi9HOVJRE%2Bb3yfCPCxv%2B1mAPqSiJF1yaM%2FJAOmz%2FMj8NaEDqz3Or14S4iq45UZgMt4T6JpbAec1QF6pCf4wFO%2BqZqMLiO2cr%2BlxxnNi9wSPUwXJcyMwyREzS%2F53upUURRO2AnfcKjUzryLgJMzCxB9Uyw9zjeb%2FPrJ5C8wSkBW%2BqKsXsD5%2B90pGaYSf4KCObQySUot74csarF07DXSWb1zsUZvgmo%2By0yD74kO7U0KR%2F6zsAq1uHBgHXQVP4MKuf1MkGOqUB9NsXFJ7rgc59JSjBdMqMqN252wETrzAQyvFJuG9IYIR8ENA%2FqCaL02iqH%2FWEzFSpuSZRR2Yj24tCoXTG5gT%2FLAukKBFvjOjlrW1L1V6tAF%2BjmdxXvxoxPxcWML9FFwpcW3tZ0bIftFf21rz%2FUiyHyOSHdsdPG9%2FaJ%2FgAbPCoqf9w3efxhLLWvd0Ew291Z3SHAm%2F4kDvIfxYhzUaiT9MNAHIS4Nx%2F&X-Amz-Signature=88ebe2617175ee16c61361068841410b3e87ffea55c8a9b204180f32e72ba63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
