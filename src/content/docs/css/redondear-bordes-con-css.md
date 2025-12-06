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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXT5535Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcHJHR6g6JHkFdWRopsX4PC2yoAypUoKnzjZiExmsfuAiEA8DthlzwNnT0GGTiBTbNQKpWVQhcst5RLBkFuU%2BI3%2F4Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNHEyuvyDCtUpUg9IyrcA6gR2h2GPAORuPDCVIm3whRXRWkEXZ0K4EdklwaDQnkHXkSjw8VisltOywlYiU3LyW8RUfeEAWcp735QFW9O4O2ZlTe%2FqpGiVBaTKFhP5Oszp3pc9zgjAs93gC5s9H4t4ImLOCja5BeqDTlQhnt0dY2m%2BEvJb8KWZDVkr%2BerTbXW3SK7fiy6ch1RB8Wc%2BDimzjCqiI9Bt7bihftk6WvWXIUvU9zC3rIHTki%2F65aAipr66cAkAS8qOBSRCwa5jyOuuDBLiyK0uRRiJG6pQjJuQ2GqpXrwngdCc%2FXPjRAZb12KSpJ44mdn58k4YCveakxhmHeyF1DzCsDVMwamSCiCVOO%2FH6EQwc0Aj56xYJsFvIHttu%2FVgHA62%2FHJ4YgABvqOYpT3BqpMdAAGtmP3TeYqNMXdx%2ByQ916wSxgxYslM4jV5yuZn1KbrdCf5nt6te505uIbPfGS936rehjEhsZI7JNofgnfX%2FUpTqhJxJM9%2FPRZOBub%2FpXbYUEy3vY3e7D2L2KJeoXGC5sDz3ragUO%2BP0fUK2wLzBth9aDRxUrFuyuflwWIu%2FRkQy%2Bmv0grAgHL5RbCO5%2FXHhh1%2BCIyDP7WEi5gDwIjtKNEOui7aE6409snQF2iP8Upf1lukKNtrMMrCzskGOqUBwNNcfoEg%2Fvl7hgfy27Saw2ACbchQFMdhniNbnrTj3SFhcQ7dgEoA9KudQKZv%2FwLCrzxfgGUv0tw21%2BmDfhLE2MkJ1DXRyGn5zQcVt43yRK93ap6py9D%2BYtSCLy%2BLROYIcvya3mptdawlNQOqBVgRsq8oqgAdHFSRS1%2FliLcSEnfXWz9yz8ZrJREPPHOOpIMcRhDXSPCUEUSfCfUPTjy5QxOF0DtE&X-Amz-Signature=6898790c79ad01fc00e93f1c966e99dca885deb00ffe1db6d7cc71ebee30b52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXT5535Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcHJHR6g6JHkFdWRopsX4PC2yoAypUoKnzjZiExmsfuAiEA8DthlzwNnT0GGTiBTbNQKpWVQhcst5RLBkFuU%2BI3%2F4Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNHEyuvyDCtUpUg9IyrcA6gR2h2GPAORuPDCVIm3whRXRWkEXZ0K4EdklwaDQnkHXkSjw8VisltOywlYiU3LyW8RUfeEAWcp735QFW9O4O2ZlTe%2FqpGiVBaTKFhP5Oszp3pc9zgjAs93gC5s9H4t4ImLOCja5BeqDTlQhnt0dY2m%2BEvJb8KWZDVkr%2BerTbXW3SK7fiy6ch1RB8Wc%2BDimzjCqiI9Bt7bihftk6WvWXIUvU9zC3rIHTki%2F65aAipr66cAkAS8qOBSRCwa5jyOuuDBLiyK0uRRiJG6pQjJuQ2GqpXrwngdCc%2FXPjRAZb12KSpJ44mdn58k4YCveakxhmHeyF1DzCsDVMwamSCiCVOO%2FH6EQwc0Aj56xYJsFvIHttu%2FVgHA62%2FHJ4YgABvqOYpT3BqpMdAAGtmP3TeYqNMXdx%2ByQ916wSxgxYslM4jV5yuZn1KbrdCf5nt6te505uIbPfGS936rehjEhsZI7JNofgnfX%2FUpTqhJxJM9%2FPRZOBub%2FpXbYUEy3vY3e7D2L2KJeoXGC5sDz3ragUO%2BP0fUK2wLzBth9aDRxUrFuyuflwWIu%2FRkQy%2Bmv0grAgHL5RbCO5%2FXHhh1%2BCIyDP7WEi5gDwIjtKNEOui7aE6409snQF2iP8Upf1lukKNtrMMrCzskGOqUBwNNcfoEg%2Fvl7hgfy27Saw2ACbchQFMdhniNbnrTj3SFhcQ7dgEoA9KudQKZv%2FwLCrzxfgGUv0tw21%2BmDfhLE2MkJ1DXRyGn5zQcVt43yRK93ap6py9D%2BYtSCLy%2BLROYIcvya3mptdawlNQOqBVgRsq8oqgAdHFSRS1%2FliLcSEnfXWz9yz8ZrJREPPHOOpIMcRhDXSPCUEUSfCfUPTjy5QxOF0DtE&X-Amz-Signature=63ce7202f3ae944ac68f01601f26d568f3ede2ba6be15a57e9a8afc8dcffb1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
