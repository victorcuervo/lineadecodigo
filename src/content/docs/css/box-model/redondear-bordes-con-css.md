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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMGTWAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlYX5mJaU03IleuuNPLS9SmIS3icgsSfHxBWHYEk2%2BgIhAMP69QMRHddpXM3juTYUX781EEBi%2BEwSFX4FIfYK78fEKv8DCHgQABoMNjM3NDIzMTgzODA1IgwntZosQYIolniKfsAq3APISeRHyBDL9zjCcPNf%2FUthkRT1%2F15Mvw3xFW2m7osOPvl6u%2FHpkodHCXWi%2Frxvt%2FlB06xUJeUdjLbFjvVlJ6k9v0FZeBWTqne3j906oLuspXN%2B0diQCBrpB03Lbd%2BbkC8NgaDYrvHkw1a71i8M463UqxMWSdLoUIxGSSHypdOUMlZmq2ycqX4UhG%2BlhlnKMWNuw4OO%2FAQeTgRDkOo6uUdkOuBybPsZJVTJ4g%2B3z%2FefKRcAoLCs4MJ%2FP9GV42bx6J1S7gi5d%2FfIKGqdUhORio%2B6sYfmUSfbOW27Jh9pB6o1K7Fdul6AFTvJeOQOecyqWduBGGafuhaFb%2FT1cXFlfhy0TulNuJgneG2V5N3gwZjPNKdVfr2SWwDAecnGYadSInfqxZ7DO0AS5TiZj1voGkCv7xajtP3FRX8%2FnYeqgj9pq1Ax%2F1PciQC%2FCz3xyPI9X%2FZTc%2FMYbtUtj%2FTKjk60fE8dWumK63zmTnkphtWxpP%2BtLQYzRJR1lOjMRZvkLrildvcf0x9t8ZbQbsLkgwRJc7S0Tn%2B0uIBs%2B6M3h3tNirmA9jh7lRasDMCePkxFtu5o%2F%2Bu%2FIBuDRuG3ycmQqKRzfMSpqujqawhL2WRhZjZ1amknweEqbxqlrugqVSSTpDDDnYnKBjqkAZ5eMYyOY2mwpux0zFLj9JwgPit%2F2KpfDXA0oo%2BKWOc18VZiPv%2FWfl%2FYwjTUWcCGQr8t%2BBsxjxMGLe8b0zl1tZvL8sfDrub4qNZxw3q3UeWngfT379X%2Bj45V173qO9K%2Bb28oK9xo4QJRxZtNkBK5%2BvkMPFPLqAkUBE9vm01zaVv%2Bg3w6WWy%2FJHRSVSTg6MvKtWYrS2Cq75nz2e5oQ6Ja1I5o42pJ&X-Amz-Signature=170c53cf96c5c44998679a9ab11c2c2045cd668410e4b42fca9a97a8bbd4a68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMGTWAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlYX5mJaU03IleuuNPLS9SmIS3icgsSfHxBWHYEk2%2BgIhAMP69QMRHddpXM3juTYUX781EEBi%2BEwSFX4FIfYK78fEKv8DCHgQABoMNjM3NDIzMTgzODA1IgwntZosQYIolniKfsAq3APISeRHyBDL9zjCcPNf%2FUthkRT1%2F15Mvw3xFW2m7osOPvl6u%2FHpkodHCXWi%2Frxvt%2FlB06xUJeUdjLbFjvVlJ6k9v0FZeBWTqne3j906oLuspXN%2B0diQCBrpB03Lbd%2BbkC8NgaDYrvHkw1a71i8M463UqxMWSdLoUIxGSSHypdOUMlZmq2ycqX4UhG%2BlhlnKMWNuw4OO%2FAQeTgRDkOo6uUdkOuBybPsZJVTJ4g%2B3z%2FefKRcAoLCs4MJ%2FP9GV42bx6J1S7gi5d%2FfIKGqdUhORio%2B6sYfmUSfbOW27Jh9pB6o1K7Fdul6AFTvJeOQOecyqWduBGGafuhaFb%2FT1cXFlfhy0TulNuJgneG2V5N3gwZjPNKdVfr2SWwDAecnGYadSInfqxZ7DO0AS5TiZj1voGkCv7xajtP3FRX8%2FnYeqgj9pq1Ax%2F1PciQC%2FCz3xyPI9X%2FZTc%2FMYbtUtj%2FTKjk60fE8dWumK63zmTnkphtWxpP%2BtLQYzRJR1lOjMRZvkLrildvcf0x9t8ZbQbsLkgwRJc7S0Tn%2B0uIBs%2B6M3h3tNirmA9jh7lRasDMCePkxFtu5o%2F%2Bu%2FIBuDRuG3ycmQqKRzfMSpqujqawhL2WRhZjZ1amknweEqbxqlrugqVSSTpDDDnYnKBjqkAZ5eMYyOY2mwpux0zFLj9JwgPit%2F2KpfDXA0oo%2BKWOc18VZiPv%2FWfl%2FYwjTUWcCGQr8t%2BBsxjxMGLe8b0zl1tZvL8sfDrub4qNZxw3q3UeWngfT379X%2Bj45V173qO9K%2Bb28oK9xo4QJRxZtNkBK5%2BvkMPFPLqAkUBE9vm01zaVv%2Bg3w6WWy%2FJHRSVSTg6MvKtWYrS2Cq75nz2e5oQ6Ja1I5o42pJ&X-Amz-Signature=c2eda2a350941eefc0a3b424d651bb8b84ffa3f1599a9c7b066fb8a7993a3767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
