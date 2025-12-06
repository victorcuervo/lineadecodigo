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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXDO5DP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8Mv5Z%2B%2FOFSoltP8IABXCqrcYdACJblZqL2V%2BB1WChwAiEAgkQ4zBJe%2BY5qnpiCcMzPhVRFZCmYP4YxwnfFH4E%2FfH0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIy0WKlejd48Ws1%2BiircAwI9T2djfKeg5E4nQwL2alX%2FbxWqhPTeU2ZGty5U87H%2BYAEk5S1EnLjSt3Nnf4HSFD21ntz%2BulSKbdbinoI7PufY%2FoP4Tcsn%2FLp6%2FKioNkG3nXzdfmnVX90xGA7BR2Bv66Ixz3GntI%2BZrmGWKE%2FZEuMQkglFQ01BaQ46TeQjH8fNEC01qy%2FhofS5ALt0%2BRVITMi58b8jA0%2BEXjXOUzQe7gax5kzRsnszogBwn9UR4lngTTULBf2sPTHAcO%2Fi%2B7sYnc6W0HDQ5g%2F7Zn8FmVhNyohNpDk4WiGa3H2CUSndUE7raR6EyI%2Fx1nbpbaCXTt7ElRfzYVP3Rn3X%2FB9adDJjMBl%2BlNYOnUDoUWxuc2mo4wus7iEhQ7gwZGLWHvZePQ7zFO7h2HrV%2FY%2FsmWRKPlWkgTPSPwr%2BDqfN8COxj0SW6ocTipT5jwHJWg0a6AnA7I%2BxIP%2BXiCgpg4DCjRZRysBTT8VhzhaOq7yJTkG9fCE4sCQNEtE3ykywAHzf7PpAy0McoVsuBWX1ggee5MBa3gttU%2B23Q7483SQmvfB%2FacqKPoHfj9TFj4jVu8R6tW1ihkHedIi7JGQes%2BjaGEGsNkenLFBwvhq9vFO82cp2hpaE%2B%2FDRooIgV8qjnBgIHAieMNiz0ckGOqUBDpT2BtkMFL%2FFml%2FH9wRL95skTOL3kIGNER2n5jJNXHW2i%2B8dnrSiKTCOYFvPo6pFqpMCqe0CgzH%2FZX1rvdFDbNVbIRgM9Ix8a0zgLmkzT%2BM52W%2FvcJP6LHZyqaY8Kso0NmWm8Q%2FkHvK7qRHKWcZgyxDsmx87Pso%2FpqtTED0myaFiYUvIcBD5UzLnW%2B2WxsOjVsxuXR8ESYE00ybDU5oky3XY1OlO&X-Amz-Signature=dc33d3dd82abc1f4995ea0265f22407deecd51f2f90b369d4ee692c04f840757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXDO5DP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8Mv5Z%2B%2FOFSoltP8IABXCqrcYdACJblZqL2V%2BB1WChwAiEAgkQ4zBJe%2BY5qnpiCcMzPhVRFZCmYP4YxwnfFH4E%2FfH0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIy0WKlejd48Ws1%2BiircAwI9T2djfKeg5E4nQwL2alX%2FbxWqhPTeU2ZGty5U87H%2BYAEk5S1EnLjSt3Nnf4HSFD21ntz%2BulSKbdbinoI7PufY%2FoP4Tcsn%2FLp6%2FKioNkG3nXzdfmnVX90xGA7BR2Bv66Ixz3GntI%2BZrmGWKE%2FZEuMQkglFQ01BaQ46TeQjH8fNEC01qy%2FhofS5ALt0%2BRVITMi58b8jA0%2BEXjXOUzQe7gax5kzRsnszogBwn9UR4lngTTULBf2sPTHAcO%2Fi%2B7sYnc6W0HDQ5g%2F7Zn8FmVhNyohNpDk4WiGa3H2CUSndUE7raR6EyI%2Fx1nbpbaCXTt7ElRfzYVP3Rn3X%2FB9adDJjMBl%2BlNYOnUDoUWxuc2mo4wus7iEhQ7gwZGLWHvZePQ7zFO7h2HrV%2FY%2FsmWRKPlWkgTPSPwr%2BDqfN8COxj0SW6ocTipT5jwHJWg0a6AnA7I%2BxIP%2BXiCgpg4DCjRZRysBTT8VhzhaOq7yJTkG9fCE4sCQNEtE3ykywAHzf7PpAy0McoVsuBWX1ggee5MBa3gttU%2B23Q7483SQmvfB%2FacqKPoHfj9TFj4jVu8R6tW1ihkHedIi7JGQes%2BjaGEGsNkenLFBwvhq9vFO82cp2hpaE%2B%2FDRooIgV8qjnBgIHAieMNiz0ckGOqUBDpT2BtkMFL%2FFml%2FH9wRL95skTOL3kIGNER2n5jJNXHW2i%2B8dnrSiKTCOYFvPo6pFqpMCqe0CgzH%2FZX1rvdFDbNVbIRgM9Ix8a0zgLmkzT%2BM52W%2FvcJP6LHZyqaY8Kso0NmWm8Q%2FkHvK7qRHKWcZgyxDsmx87Pso%2FpqtTED0myaFiYUvIcBD5UzLnW%2B2WxsOjVsxuXR8ESYE00ybDU5oky3XY1OlO&X-Amz-Signature=895baaa7903b96adec4b09311e6234cc93b7f70c0d116647f524e7db354376a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
