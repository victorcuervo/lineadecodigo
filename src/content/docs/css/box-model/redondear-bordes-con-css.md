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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4FCVCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbrpCEn8eZmF2lDMyygN5p56MWkqPENllTEGys9hH6HAiEAivY0lS2hHcVqQI2aEGUKLv%2Bv8Wnu6eNdNPETe8kgJQAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMHpEzmH6eM8LRAIqircA%2FgGF%2FSKFtN5zsvJroP8qC9tYqKRVK6qcFdrG1szVuRhuksDvt%2FeBuKnYL1sKUFF4wAMnkYlkedgtQfqla3NsdTBVIuEjXTUzcuOt%2B0ds27FdMa0WP5TK7UupHuVZ5UFTLk2evkVZhXSzIU0GLoflsARZhkFXylpRwLl7plFKP%2FcN2lRH52UASf1d%2ByE8dctNqg%2BmUyeLBThhM7G7RpeLN3mgUJwTCGZ39SOilsPxcvq1yMOiZA7eH105h%2BggTidgvg9%2BvtuSP2qc0K7HfsIPlbcbCgJmEqMTI5Dq96cWj6K2FIuwpO1N4cV496lEjpSu%2BZmLHDna4SW%2Fg4Qom2wA545yOchrsdoab0J0JnplQHu4AoY7B7OPP9xbsaGeyDhIXoXaj5H7UTK%2Fjw%2Fj2PIVOPmC7N10TTszc02ZvYr5NQBNCsACn2TN9UQAy2Z55%2BeVHW649mRQImQDxCwpqLrU6gjk0wjqYrs6FnH9RGIGxvK7WDHO81rQ3n9KgXODasy4FvRDZWlVrY6VFt9UNUf4Fj43BvAvSiLMFPmZJ2gmPAKPGMdRw4Xn5kmQIOecRiG%2B4oL%2BKcruYDTjvP3yniYxUEUu0bqJQc%2B0Zn49wS1V8aS%2FavSdIsOMqtZnZRaMNaWiMoGOqUB7i0K8u%2BtPISITe1j6tuV8TsbYm9rDRVcKHZMCP2CB1gnCoWczpG9nTi44mbg1vhL41tRUXdkHZWcZnE6cCehqyyi9d0%2Blqk4uvbsNcQcZkaZGE%2BPfFB%2FbbhP7mJ1K%2BmcNmmvFg1YKE6qCgXOl4B5GB0HKJfsDyzRZ9rqPwuYf7HxUc5ZMynHdB3AxiuILcKylRj8W6pzn53OGyNB6fmzSbAxc%2Fqk&X-Amz-Signature=76410ae070604c10966a37c84fa5feadfc86e9e7deeac53368b588661c1517d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4FCVCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbrpCEn8eZmF2lDMyygN5p56MWkqPENllTEGys9hH6HAiEAivY0lS2hHcVqQI2aEGUKLv%2Bv8Wnu6eNdNPETe8kgJQAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMHpEzmH6eM8LRAIqircA%2FgGF%2FSKFtN5zsvJroP8qC9tYqKRVK6qcFdrG1szVuRhuksDvt%2FeBuKnYL1sKUFF4wAMnkYlkedgtQfqla3NsdTBVIuEjXTUzcuOt%2B0ds27FdMa0WP5TK7UupHuVZ5UFTLk2evkVZhXSzIU0GLoflsARZhkFXylpRwLl7plFKP%2FcN2lRH52UASf1d%2ByE8dctNqg%2BmUyeLBThhM7G7RpeLN3mgUJwTCGZ39SOilsPxcvq1yMOiZA7eH105h%2BggTidgvg9%2BvtuSP2qc0K7HfsIPlbcbCgJmEqMTI5Dq96cWj6K2FIuwpO1N4cV496lEjpSu%2BZmLHDna4SW%2Fg4Qom2wA545yOchrsdoab0J0JnplQHu4AoY7B7OPP9xbsaGeyDhIXoXaj5H7UTK%2Fjw%2Fj2PIVOPmC7N10TTszc02ZvYr5NQBNCsACn2TN9UQAy2Z55%2BeVHW649mRQImQDxCwpqLrU6gjk0wjqYrs6FnH9RGIGxvK7WDHO81rQ3n9KgXODasy4FvRDZWlVrY6VFt9UNUf4Fj43BvAvSiLMFPmZJ2gmPAKPGMdRw4Xn5kmQIOecRiG%2B4oL%2BKcruYDTjvP3yniYxUEUu0bqJQc%2B0Zn49wS1V8aS%2FavSdIsOMqtZnZRaMNaWiMoGOqUB7i0K8u%2BtPISITe1j6tuV8TsbYm9rDRVcKHZMCP2CB1gnCoWczpG9nTi44mbg1vhL41tRUXdkHZWcZnE6cCehqyyi9d0%2Blqk4uvbsNcQcZkaZGE%2BPfFB%2FbbhP7mJ1K%2BmcNmmvFg1YKE6qCgXOl4B5GB0HKJfsDyzRZ9rqPwuYf7HxUc5ZMynHdB3AxiuILcKylRj8W6pzn53OGyNB6fmzSbAxc%2Fqk&X-Amz-Signature=bd0b5b2aafb5ef166dffa7d431f7bacc42422e2ce70289ab957dd471461a29c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
