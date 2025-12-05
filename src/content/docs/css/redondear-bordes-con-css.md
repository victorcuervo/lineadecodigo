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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGGW6K4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgdAe0m%2FRX2XFZpR5R30H15YNqWBVP731SGbERO1knGAiEA6KfqQvYu9C2imkOBSmQ1cJT2UG9Z1vDNSY0KrgVQ2J8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBuZkazXa6t8hJRhmSrcAxM3bJil2BeHgHIZ0Ym0R3EpmQC4sG76EnpV8blD5pjK2VfphYfP9Ecv%2BbME1l79MmUzcURbxzsaZIvJhvOhiWwAgP%2FPdJExmQLx6ogaJjkOmHCKxngDaTGiPrbXYElD5Pdy2eY6cYXMXHuxtGRhHWFOXxiiVaYQUQUxMZL6RK0Ai1ss6sqE02PVnk7OSN%2FfLfNQL8prGyBBBXDv794TzijRSih3ZOC9KZ7OXrt634w4wIXya34B%2B%2Fc0DdVx66GmSankG8DgdUyamH9r%2FUg6E%2FZjmiNuQOCBUlC6ufvAVTxaRU%2FJCNOM9h4BEIqrWzmVbeOr84TocjZFrPGanjd2%2F2i01dh8ALepC8fXzmxXrfGNEMBCWREcDfXl2xzap2HkI%2FVviIt4SUXw%2F0nvAb5%2F%2B4gq1axp%2BPy9OIZSm9ZufFExD0VhrgIFEE%2Bbbsg9J%2FAc4USRiSjhesvo9uRIRiqtQcC2JvWYYT%2FP%2F4l5SsFwXWMAM6qxOdLhnddhU3OFBJjgpGcztsGxy%2BCrhptE4QUDbjiIH4sY3MneqGqEyM2pVROqlN1JDulQYElASMVryg8uKMDa3J8tzAQVgGg4xQZmHMp3AulUl6xCHE1RKH6iiawFHHqDeXESDVdTwEYNMIvGzckGOqUB3Ewx5Ee3TCwEAXM5fhiyahx46AUcOmkhPiQSX6vlS0zVVI79o7P%2BBqDHuNCSVGKrfcevgvmvAHqKfo0tgUpyT%2FuEIBCeOCutZqTBwcDfA9vEZ1AOTWXPyaxdkCpUnuvCwoIwRelWNvZrlf3uw9sSLYncipD5TOCHIYiroaJx8LHA5yQy3G%2Fb9KfTg%2FcipXovN2zeI2e0mvNoWQ4S4rrrL7f6CfXH&X-Amz-Signature=e54a2535d6596e00ec468b89d3527657c0038f8b5f3c8eff437fee8420f49275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGGW6K4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgdAe0m%2FRX2XFZpR5R30H15YNqWBVP731SGbERO1knGAiEA6KfqQvYu9C2imkOBSmQ1cJT2UG9Z1vDNSY0KrgVQ2J8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBuZkazXa6t8hJRhmSrcAxM3bJil2BeHgHIZ0Ym0R3EpmQC4sG76EnpV8blD5pjK2VfphYfP9Ecv%2BbME1l79MmUzcURbxzsaZIvJhvOhiWwAgP%2FPdJExmQLx6ogaJjkOmHCKxngDaTGiPrbXYElD5Pdy2eY6cYXMXHuxtGRhHWFOXxiiVaYQUQUxMZL6RK0Ai1ss6sqE02PVnk7OSN%2FfLfNQL8prGyBBBXDv794TzijRSih3ZOC9KZ7OXrt634w4wIXya34B%2B%2Fc0DdVx66GmSankG8DgdUyamH9r%2FUg6E%2FZjmiNuQOCBUlC6ufvAVTxaRU%2FJCNOM9h4BEIqrWzmVbeOr84TocjZFrPGanjd2%2F2i01dh8ALepC8fXzmxXrfGNEMBCWREcDfXl2xzap2HkI%2FVviIt4SUXw%2F0nvAb5%2F%2B4gq1axp%2BPy9OIZSm9ZufFExD0VhrgIFEE%2Bbbsg9J%2FAc4USRiSjhesvo9uRIRiqtQcC2JvWYYT%2FP%2F4l5SsFwXWMAM6qxOdLhnddhU3OFBJjgpGcztsGxy%2BCrhptE4QUDbjiIH4sY3MneqGqEyM2pVROqlN1JDulQYElASMVryg8uKMDa3J8tzAQVgGg4xQZmHMp3AulUl6xCHE1RKH6iiawFHHqDeXESDVdTwEYNMIvGzckGOqUB3Ewx5Ee3TCwEAXM5fhiyahx46AUcOmkhPiQSX6vlS0zVVI79o7P%2BBqDHuNCSVGKrfcevgvmvAHqKfo0tgUpyT%2FuEIBCeOCutZqTBwcDfA9vEZ1AOTWXPyaxdkCpUnuvCwoIwRelWNvZrlf3uw9sSLYncipD5TOCHIYiroaJx8LHA5yQy3G%2Fb9KfTg%2FcipXovN2zeI2e0mvNoWQ4S4rrrL7f6CfXH&X-Amz-Signature=418dcb81b290fd5feac62c22a6b566f742009c0b19c2d80f473382e4fbbcde1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
