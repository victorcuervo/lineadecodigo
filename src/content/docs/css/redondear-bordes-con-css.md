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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5WUMNV7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF%2B9xhNB1hgm6xCri2yIObo1tEcW%2BnGm7givTKDX3c4AiEAkVnj%2Bdglsvuz7aCROpFs8RlZ4PeyHZzrzIJdOuy5T40qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoghB8SDeG6ao%2FVTyrcA3I7%2FZyD6o2up00%2FwmlM1XKgF8QSFFHMSWjhk2yqDw5%2BY5MaV%2FWxYucxhEFzt2kcCE3JvL1HA32Dz2rpBG6vJXz9uZuYrof2pbPrANe8VsTnnNGChr6Afjj%2FVcTXF5fpQAis3%2Bw8gCaVGChO3%2B2rUIY49wIowzasFEPjUwchn71m2MPyOrjw27Fj%2BYhnUroJNumvAkrF8q1qeVq067bVNAMfaUYIENV9rxh0Qemb7HpEDgK%2Fr4tGJjOWCOT516poQO6ojLSftvgRp97nor%2B9TmP99F5CeU%2FumfpXdCMP76D6vuy%2BgVbjHrY07s%2BV%2FPndNNoUFydth63al5D2yGWepmP0nRPn9%2F92nOdv9Mri899Lo%2BLzVtrD36t6hO8omgW1ZojfkP%2F1SOOgRoNWzoWGfuxaJkX%2BgK4vdS5s3fHNZp7g2eYJYbQZrHW2mrGlm7gBX3t1Fay5vZt%2Ff2DWSeuP9scL2hO7mYyZijKdQu2%2BE0XO1lB0R%2FlH5oO%2BlFWZSkKyWh%2BqMiEGAWFdXpjnXBp2CX0H6PO3manPqfg8OUlHSnREo5ay51OF52SjI0SumTDj%2FALikUw9UlfPuW5jmGqla1kUseDaClQzXTwdVK4fG9jIbM4M6m56WWm1KajKMPrt2ckGOqUBK%2Fh8UcKXWiPjOLZMuqS4tJ7wUEmuUiLOPHXj1x7SwmxS5Z58ieXvRm0DAXOEHgYtV2NKn00khv5ILOfRwFPYGj7tcHoq%2Fk%2FnbqQuzukRIrgblHYFunDSxAvUpKDNWK61GVhzutO2sNZnrOcFQJ8yugUz9aqzLzjA5lJw5q1H1G9Jkplj%2Fygoiaeetvx7vAdPfAAWW7xQI3eeZSL8Cn%2Bmkvq0RVxB&X-Amz-Signature=109c8ecb78af05ec88fbbe3e0ec3fc61f890a7e00474203d18b6c7b69b6fd0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5WUMNV7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF%2B9xhNB1hgm6xCri2yIObo1tEcW%2BnGm7givTKDX3c4AiEAkVnj%2Bdglsvuz7aCROpFs8RlZ4PeyHZzrzIJdOuy5T40qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoghB8SDeG6ao%2FVTyrcA3I7%2FZyD6o2up00%2FwmlM1XKgF8QSFFHMSWjhk2yqDw5%2BY5MaV%2FWxYucxhEFzt2kcCE3JvL1HA32Dz2rpBG6vJXz9uZuYrof2pbPrANe8VsTnnNGChr6Afjj%2FVcTXF5fpQAis3%2Bw8gCaVGChO3%2B2rUIY49wIowzasFEPjUwchn71m2MPyOrjw27Fj%2BYhnUroJNumvAkrF8q1qeVq067bVNAMfaUYIENV9rxh0Qemb7HpEDgK%2Fr4tGJjOWCOT516poQO6ojLSftvgRp97nor%2B9TmP99F5CeU%2FumfpXdCMP76D6vuy%2BgVbjHrY07s%2BV%2FPndNNoUFydth63al5D2yGWepmP0nRPn9%2F92nOdv9Mri899Lo%2BLzVtrD36t6hO8omgW1ZojfkP%2F1SOOgRoNWzoWGfuxaJkX%2BgK4vdS5s3fHNZp7g2eYJYbQZrHW2mrGlm7gBX3t1Fay5vZt%2Ff2DWSeuP9scL2hO7mYyZijKdQu2%2BE0XO1lB0R%2FlH5oO%2BlFWZSkKyWh%2BqMiEGAWFdXpjnXBp2CX0H6PO3manPqfg8OUlHSnREo5ay51OF52SjI0SumTDj%2FALikUw9UlfPuW5jmGqla1kUseDaClQzXTwdVK4fG9jIbM4M6m56WWm1KajKMPrt2ckGOqUBK%2Fh8UcKXWiPjOLZMuqS4tJ7wUEmuUiLOPHXj1x7SwmxS5Z58ieXvRm0DAXOEHgYtV2NKn00khv5ILOfRwFPYGj7tcHoq%2Fk%2FnbqQuzukRIrgblHYFunDSxAvUpKDNWK61GVhzutO2sNZnrOcFQJ8yugUz9aqzLzjA5lJw5q1H1G9Jkplj%2Fygoiaeetvx7vAdPfAAWW7xQI3eeZSL8Cn%2Bmkvq0RVxB&X-Amz-Signature=6081502e8d5a76136d79dd0ed4370b34e6f01f61c515f90899697216a183e45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
