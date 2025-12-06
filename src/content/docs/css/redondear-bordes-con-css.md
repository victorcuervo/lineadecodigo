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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHFX6HF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLmmN%2FPI1D3uK2zE%2FBnZVRU1NIxKYndBa7EFPcsXhRsAiAQdxPQ9d9lcDddgMFZzkKjFWSNY0XQNLqtHivEwbdo2Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMq%2FGyggKCGVukhsYDKtwDjqgB4CjsK2AccUFlc8ugjKDO85xbc%2BdLxAB8%2BqL2QmwMqnlMu8GFFE4ISgOlsc9gsHm66mJGbvqH4JMeaq8EG0dAx%2B2smROEyFADtzZk10nJUeOp%2B19aR4drLrp2v0f5GH%2BPYZjc3hTfA43mdkY9gc8CPIxJ%2FTviRSy9Izy30pE3SPoBIVxF%2B0yjiJuGg9lg8ZimmtwIlwiXPN2xMtKHOwIJutKyvebBK%2BNJLwDlKrhtpdabZb6wZMKmbRCbWusZagK%2Ban7SbDW4BKUaf%2BmeOgPd41ubS8dzxqdj70SF2OLcRZZaT2iVxvJS0SFZPhVuChrcUIq%2FMKB1JHmhuQ%2BjJ667%2BXl66OUdE%2B4%2FICcyEeWabuOBeVyppYBC85MEZwOC61di%2Fg7IQdt4isKY6HQdSPxtZjS53XGLWngP02DXLG4qb9o9GSCeqW4vX3Auq4K7RjvI96N5loec3mjhfVDLBbtZW2GVoxy6jOFKOPEzqgtronopMp0e6vZi49O3I4B6pUx7kiP5K2y1pcVX1C5q5zFRKGn9ujpamYpptDaaFtAKvQeM%2FCiIlt1elvnqxu18P1%2BGhu6V7DzGyZuDOnFAUJz1ivCtUXyoiswUCZu2OQsKzNi7PKOPd3Un6bEw5MnRyQY6pgFjU9imGESd2yG5BsiLtaNDlXQbzV29ko2IpRYsOuKZza4uh3DGGRnQBM8eVSlHBHw69xSuOr7pgdDSblKAH0iyzIXlbyDZ1YBVZV81rsTOZt0SBQrlO9UWUiLO%2FQXIUiygTTYANY6eZCeHaDl5%2BSegfoHeb%2BnBWXe%2Beattc1CogOO7EBEOnCJTp1vIbWOsvQFS8JA6pxXLFToMdzkR0cxMc1UkrJgo&X-Amz-Signature=53c33bb7ca05a382a6b2d778b8506c81a0d873135c237f3205239384d0480dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHFX6HF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLmmN%2FPI1D3uK2zE%2FBnZVRU1NIxKYndBa7EFPcsXhRsAiAQdxPQ9d9lcDddgMFZzkKjFWSNY0XQNLqtHivEwbdo2Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMq%2FGyggKCGVukhsYDKtwDjqgB4CjsK2AccUFlc8ugjKDO85xbc%2BdLxAB8%2BqL2QmwMqnlMu8GFFE4ISgOlsc9gsHm66mJGbvqH4JMeaq8EG0dAx%2B2smROEyFADtzZk10nJUeOp%2B19aR4drLrp2v0f5GH%2BPYZjc3hTfA43mdkY9gc8CPIxJ%2FTviRSy9Izy30pE3SPoBIVxF%2B0yjiJuGg9lg8ZimmtwIlwiXPN2xMtKHOwIJutKyvebBK%2BNJLwDlKrhtpdabZb6wZMKmbRCbWusZagK%2Ban7SbDW4BKUaf%2BmeOgPd41ubS8dzxqdj70SF2OLcRZZaT2iVxvJS0SFZPhVuChrcUIq%2FMKB1JHmhuQ%2BjJ667%2BXl66OUdE%2B4%2FICcyEeWabuOBeVyppYBC85MEZwOC61di%2Fg7IQdt4isKY6HQdSPxtZjS53XGLWngP02DXLG4qb9o9GSCeqW4vX3Auq4K7RjvI96N5loec3mjhfVDLBbtZW2GVoxy6jOFKOPEzqgtronopMp0e6vZi49O3I4B6pUx7kiP5K2y1pcVX1C5q5zFRKGn9ujpamYpptDaaFtAKvQeM%2FCiIlt1elvnqxu18P1%2BGhu6V7DzGyZuDOnFAUJz1ivCtUXyoiswUCZu2OQsKzNi7PKOPd3Un6bEw5MnRyQY6pgFjU9imGESd2yG5BsiLtaNDlXQbzV29ko2IpRYsOuKZza4uh3DGGRnQBM8eVSlHBHw69xSuOr7pgdDSblKAH0iyzIXlbyDZ1YBVZV81rsTOZt0SBQrlO9UWUiLO%2FQXIUiygTTYANY6eZCeHaDl5%2BSegfoHeb%2BnBWXe%2Beattc1CogOO7EBEOnCJTp1vIbWOsvQFS8JA6pxXLFToMdzkR0cxMc1UkrJgo&X-Amz-Signature=67350397c68abbee658010823090f3248615c4cb340574432d896dc478d2a1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
