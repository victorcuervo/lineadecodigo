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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DG26SU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgJ2aICFp7GJR7DucVwbSDIoFdoRl%2ByezmjogeNix2QIgFP4UcLKO5vJPjEoN4VFTRi9I2qqWpae%2B3eMCxSuesvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5tCpSKOAAXTPYBCrcA%2FkuHcAJJOhtAGXFVj7%2FXD2Z6yjCSN6HzccAVyPLagqaxVt1sxjfphNvOyLfb6KJcXs4i3k5PtYtCZj7DYrlQ4o1R8WyJbw0EZZ4Zyk%2BZkF%2F%2BC0zaAcmv0pKsWE%2BudYaIpL4wKHOt0KePLbuMg646b38%2F1o%2B5SqaDgiyKo0AnVnznuo5jPGtum9BNis4o5bGF%2BDcBHKa5cNtskT4xLWTGwR7eZF6bbw11GdZELDeKXkA4Z90iZrr0wxov0WYOQJEz%2Fv8kU0cWsFp9kCVDqiN3BOnNnFAxwSw3QQ7ehE0muBvyXA2XA1Y1EDKUlmMQ05LE1B0jY9hKvxmAZ47lYzNL9AVxbT%2F%2FikXxBA8m%2BHlKi%2B2weIMLTWAAUu4kTGtrVeZg3AULW%2BHDmJOjakbiGv%2BqEtFJZYY8a7%2BPfRD3gEGIlDsSChoLczrWiDko%2BcD2%2FiL1NwWz%2FGGilmxl599f2OZZ%2FofVPYLYgQlp6Qm%2FsyRKCrJpgMh2cMpDpqu26OWZbPRtx%2FAjq5WsNyVeZnT9cUNuaC2Ln1sNMaTwEBzCZj3XdaQZTfjGvx6%2Bo4xQuDHcsib94ay2elgjWZWtMb2rOLcKU%2Ba%2F2KIHb%2BU8ac6cegrvGb%2BqPtaYw%2F8mpBQ4HGyMPyZ1ckGOqUBWWOGJnMdeG13bwrxbEfhmOWbyUP1VZOZF%2B00CZ9vFzywxGk75rKNpedgrywf6svV6d4fyJ8lEBLQm3jx%2FeufRHnClOj23dqOlee%2FgViNg2FFDdtjzvclsa6CggK96eMwkqd4dLX4viuP1wL%2F53tF7yofowj01C97rIugVp2YTKCaAiRXUPTPHKD4Chy7nzPT5QCIPPi%2BeXpC%2FYQt6Ol2vg4i9EaC&X-Amz-Signature=a3c758f820c506544d29cfc4e15b72c96fb4ace41e8422141fe9ecea2b0f8791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DG26SU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgJ2aICFp7GJR7DucVwbSDIoFdoRl%2ByezmjogeNix2QIgFP4UcLKO5vJPjEoN4VFTRi9I2qqWpae%2B3eMCxSuesvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5tCpSKOAAXTPYBCrcA%2FkuHcAJJOhtAGXFVj7%2FXD2Z6yjCSN6HzccAVyPLagqaxVt1sxjfphNvOyLfb6KJcXs4i3k5PtYtCZj7DYrlQ4o1R8WyJbw0EZZ4Zyk%2BZkF%2F%2BC0zaAcmv0pKsWE%2BudYaIpL4wKHOt0KePLbuMg646b38%2F1o%2B5SqaDgiyKo0AnVnznuo5jPGtum9BNis4o5bGF%2BDcBHKa5cNtskT4xLWTGwR7eZF6bbw11GdZELDeKXkA4Z90iZrr0wxov0WYOQJEz%2Fv8kU0cWsFp9kCVDqiN3BOnNnFAxwSw3QQ7ehE0muBvyXA2XA1Y1EDKUlmMQ05LE1B0jY9hKvxmAZ47lYzNL9AVxbT%2F%2FikXxBA8m%2BHlKi%2B2weIMLTWAAUu4kTGtrVeZg3AULW%2BHDmJOjakbiGv%2BqEtFJZYY8a7%2BPfRD3gEGIlDsSChoLczrWiDko%2BcD2%2FiL1NwWz%2FGGilmxl599f2OZZ%2FofVPYLYgQlp6Qm%2FsyRKCrJpgMh2cMpDpqu26OWZbPRtx%2FAjq5WsNyVeZnT9cUNuaC2Ln1sNMaTwEBzCZj3XdaQZTfjGvx6%2Bo4xQuDHcsib94ay2elgjWZWtMb2rOLcKU%2Ba%2F2KIHb%2BU8ac6cegrvGb%2BqPtaYw%2F8mpBQ4HGyMPyZ1ckGOqUBWWOGJnMdeG13bwrxbEfhmOWbyUP1VZOZF%2B00CZ9vFzywxGk75rKNpedgrywf6svV6d4fyJ8lEBLQm3jx%2FeufRHnClOj23dqOlee%2FgViNg2FFDdtjzvclsa6CggK96eMwkqd4dLX4viuP1wL%2F53tF7yofowj01C97rIugVp2YTKCaAiRXUPTPHKD4Chy7nzPT5QCIPPi%2BeXpC%2FYQt6Ol2vg4i9EaC&X-Amz-Signature=2eeafce2b9502a05ba58698f6dc6c1ecfcd759c74001585c607da1a40691a6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
