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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNECZDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9FfIWsLPuUPVaK%2B60tOPIbhNkQ%2FQNwWuv%2BX44vKPA1AiA0Wed%2BDR6YMfY0edcU%2Bn1BXdJ%2FjSBiLqSbCi5By2UZVCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMm9PpMGfrTq17yi1dKtwDo3vL5tfTBSlkA7AfsIug95WG070VPtAIJbVmvB3IGRRwo1tk%2B1RaSGwJCDo3NdekX7xNo9RAPkr4FxaKIXSXrZFAJJFPphV4g4gTCmjcEvSdfI5DqedIssnoxBrEkgviZ0lWiH7E38x9S33wLyo3kFILg8YATlI8eo7MFpX2D23MvubsK8bBAtfyJ%2FRKNMRfdw9WWU%2FaVvndigL3qaR3Y65g3d%2FFc0%2BNZjksjyvmGqYEop77FwSbUJPHDVnGbsJnirx%2B1kR3odj3e5UHNyRU8%2FdTlQAT6B24vQ7v%2FFzI%2Br4lTA7e5hoEasTmYQauqdvIGKbcISflcnW2RDbUOosRMk5STIIAbiqOi5dEf3kmDycmU%2FcNvCyqfban%2BJ9AQ3A%2BMoEa9GsIdcrb0HcEe5vBmZcGKzwaoqJfAMKN8XD7vM26on7A8o0tYbPKnb%2FpZk4ZZOGptCaYXfJp84RnbBTevt21tL9S2fEc7XXU%2FfN5twvTxQNTUXWgIN8jipTFy51R6YqB3xJcjt%2BHhepOYQ%2Fgpb5Ep6Dkodk29pLn3hhBUFH5jM5QnnE4zXkIQtfgF%2B5vCE6w1cDsfrjcYjSRyMnJ9OSqKYses8O1ixExvl7MvM5k2acQtXxt9NEbkcowhdOJygY6pgEkNHUoJjxtfkKQQmHgv93omTs7BYhakkccu1U8XeV3K8dfdAKStOPQV2lyLEV5fdZwm0ky7aKAw6FLKkHPwcTsOkY5%2FgClZAxjs5BZBRs0a%2B%2F7L0vYwmGbmH%2BSml%2BNrBxmd7Qq4KpihjmyO7Ok7Y9AtFSJHh7KJD7docMmOcBMh%2FQkeRiMOmPRycRP81Qp8oDy8gGTPLep4ID4HnD8QNoLAvGIMs6n&X-Amz-Signature=90acd4eca38542a2dd9c801eb0845e4a3c5cfb12cc2fc9c16b58b12dfd027ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNECZDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9FfIWsLPuUPVaK%2B60tOPIbhNkQ%2FQNwWuv%2BX44vKPA1AiA0Wed%2BDR6YMfY0edcU%2Bn1BXdJ%2FjSBiLqSbCi5By2UZVCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMm9PpMGfrTq17yi1dKtwDo3vL5tfTBSlkA7AfsIug95WG070VPtAIJbVmvB3IGRRwo1tk%2B1RaSGwJCDo3NdekX7xNo9RAPkr4FxaKIXSXrZFAJJFPphV4g4gTCmjcEvSdfI5DqedIssnoxBrEkgviZ0lWiH7E38x9S33wLyo3kFILg8YATlI8eo7MFpX2D23MvubsK8bBAtfyJ%2FRKNMRfdw9WWU%2FaVvndigL3qaR3Y65g3d%2FFc0%2BNZjksjyvmGqYEop77FwSbUJPHDVnGbsJnirx%2B1kR3odj3e5UHNyRU8%2FdTlQAT6B24vQ7v%2FFzI%2Br4lTA7e5hoEasTmYQauqdvIGKbcISflcnW2RDbUOosRMk5STIIAbiqOi5dEf3kmDycmU%2FcNvCyqfban%2BJ9AQ3A%2BMoEa9GsIdcrb0HcEe5vBmZcGKzwaoqJfAMKN8XD7vM26on7A8o0tYbPKnb%2FpZk4ZZOGptCaYXfJp84RnbBTevt21tL9S2fEc7XXU%2FfN5twvTxQNTUXWgIN8jipTFy51R6YqB3xJcjt%2BHhepOYQ%2Fgpb5Ep6Dkodk29pLn3hhBUFH5jM5QnnE4zXkIQtfgF%2B5vCE6w1cDsfrjcYjSRyMnJ9OSqKYses8O1ixExvl7MvM5k2acQtXxt9NEbkcowhdOJygY6pgEkNHUoJjxtfkKQQmHgv93omTs7BYhakkccu1U8XeV3K8dfdAKStOPQV2lyLEV5fdZwm0ky7aKAw6FLKkHPwcTsOkY5%2FgClZAxjs5BZBRs0a%2B%2F7L0vYwmGbmH%2BSml%2BNrBxmd7Qq4KpihjmyO7Ok7Y9AtFSJHh7KJD7docMmOcBMh%2FQkeRiMOmPRycRP81Qp8oDy8gGTPLep4ID4HnD8QNoLAvGIMs6n&X-Amz-Signature=5bf4904dc89e32f90be3dafcdc82a4a7d135383a3b8e70526fae08b8edcfbd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
