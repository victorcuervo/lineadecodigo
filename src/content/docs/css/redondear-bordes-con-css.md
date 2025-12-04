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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22EB37Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC27EPpxHsU%2FxXw%2BpU1efTMwJb%2BdH7DIIPKQBEsMMDP9gIgY%2F6AhxUeyyDGVuLkR8bgapgv93Xm1Hf79RarGduD6yAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDC6Rq%2FEjzsU4ONTJtSrcAyx8CEsZajoyLSbnMQuX6bsFpOnoMpYhLFPXItDBVW%2BoqBFECCfu7KSuYYPhVEirTMGAkpGwUVmxPGZt7E%2Bjg%2BpcKJEHf4jRF7UE5J7rxKIx6OTqqmZwtMJ1kP0UJ3jdnkBWA7tnctDjpI6RfhWVjbcVdY31d4tRCocWXS7T160L1%2BHDf5UejFuqu8YVMla7SRXWWIfc7pzQS9%2BzMSpR%2BdFfD%2Fdqd1iyA2wErgQSDTj88q6sbvGhcPUDciga1wcCxRhSd8huhjd%2Fr1K6JabXjvJYVuTSG5MZWA0frQXWy15fweKVd3vnOamaq1kmQryPMSeMJKljNk7hAIDGmrENjb5og2d2j04O51JgPLEjN1lzUHG2X0brvbSLYSwGXPjSkAeoTW5AgmJblo8nYLMx6c59Ruf9ddwXMDqt9EWaxMn6t6gSYI1DlQSDqsB8k08PMKUIxoJmv5YymtQoFsdFkp7E%2FaDCk9fLdgmi7B5hwhJgqniBPe0IYRXkCttJjimiTTt350YpaTnmjlUfMatjPGHybu1m07p8O33cX8Hu8sAAgxh4v%2Bn9O3Iu3sq9vbMmVXIsj9mueULO8JsdmjxOjkOl4XBUPda1VePhjCKDmHfgSz5viqtnm3vt8tiUMO2gxskGOqUBmROi9di84Qno0hxRGbG276WC83RybwkfuzttqtXwJ3a1dj9yizqPu%2BBscb7U25rh1csRhPHZKnXkAyqeEzzdSGkYKkr9O%2BNpblG897u8mp9KwQkoH%2F8vUhTkCuSHya6mUORS2ENsEwUkf%2B4yut6q4QtYxRdHerH%2BjVVZaEsBe8sjpj%2BjXWjpGyUz7lv4Z41rL6u19g1MDbIAyWsu7%2B%2B6pBROu2zG&X-Amz-Signature=784ce57a189a9cd3920b3049689558bc548f9885e848b5dea7d30c3c99ed5227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22EB37Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC27EPpxHsU%2FxXw%2BpU1efTMwJb%2BdH7DIIPKQBEsMMDP9gIgY%2F6AhxUeyyDGVuLkR8bgapgv93Xm1Hf79RarGduD6yAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDC6Rq%2FEjzsU4ONTJtSrcAyx8CEsZajoyLSbnMQuX6bsFpOnoMpYhLFPXItDBVW%2BoqBFECCfu7KSuYYPhVEirTMGAkpGwUVmxPGZt7E%2Bjg%2BpcKJEHf4jRF7UE5J7rxKIx6OTqqmZwtMJ1kP0UJ3jdnkBWA7tnctDjpI6RfhWVjbcVdY31d4tRCocWXS7T160L1%2BHDf5UejFuqu8YVMla7SRXWWIfc7pzQS9%2BzMSpR%2BdFfD%2Fdqd1iyA2wErgQSDTj88q6sbvGhcPUDciga1wcCxRhSd8huhjd%2Fr1K6JabXjvJYVuTSG5MZWA0frQXWy15fweKVd3vnOamaq1kmQryPMSeMJKljNk7hAIDGmrENjb5og2d2j04O51JgPLEjN1lzUHG2X0brvbSLYSwGXPjSkAeoTW5AgmJblo8nYLMx6c59Ruf9ddwXMDqt9EWaxMn6t6gSYI1DlQSDqsB8k08PMKUIxoJmv5YymtQoFsdFkp7E%2FaDCk9fLdgmi7B5hwhJgqniBPe0IYRXkCttJjimiTTt350YpaTnmjlUfMatjPGHybu1m07p8O33cX8Hu8sAAgxh4v%2Bn9O3Iu3sq9vbMmVXIsj9mueULO8JsdmjxOjkOl4XBUPda1VePhjCKDmHfgSz5viqtnm3vt8tiUMO2gxskGOqUBmROi9di84Qno0hxRGbG276WC83RybwkfuzttqtXwJ3a1dj9yizqPu%2BBscb7U25rh1csRhPHZKnXkAyqeEzzdSGkYKkr9O%2BNpblG897u8mp9KwQkoH%2F8vUhTkCuSHya6mUORS2ENsEwUkf%2B4yut6q4QtYxRdHerH%2BjVVZaEsBe8sjpj%2BjXWjpGyUz7lv4Z41rL6u19g1MDbIAyWsu7%2B%2B6pBROu2zG&X-Amz-Signature=9bda8c796b800dcb89fbb25f915d40bc3a1e254d289274f1905ff6ead2bd33c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
