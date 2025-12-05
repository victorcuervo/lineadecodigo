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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJ6KZWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATxKZ7U22Ch20J00QSh9VL6KN2VSKG84kIOG%2Fi0GJskAiA2iB2GIhLoHUS6DP%2BRtlU0A53mfoD3%2FnGbeT96qvg6Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIML0LFNruzbuSa00X%2FKtwD8X1%2B1DIBxySqxwfz7xp42uOPVXaqOu70edYpHbTfy6EqsQg90H0LUKPsfP7ObnqCLD19%2FSpMXmIydb%2F%2BQ9T25l%2Fore%2F2x5JsHAV3047sU1FBYbyO%2BnFYhLBJ%2F67Yx6sdmzmGkIvFrGBvExCUPD1LEC1sMG5Te4sGl7c%2BttWN8B7VfmLvGxkMRXXt38YYyOlLaJByK7QV%2B63NoXW3a6a04k3AUNlIqFJEN47xQj%2BR1pICEaVqXWUGhaRnZbK3wWIi7BZEvMBwvXkSKiAG4QBvrQ7sYybRYoR0JNNYUXOhYmQs1zFjvbOfRLar1fJvKpw4Tmj8B5faspr8ytSIazgtfuS0UD8beBBSRyxpFHWaYHAXgfbnDRggyrbLIBX5II5vEAMEGPI8NXzeJV%2B4km48Z05Is3%2B0SnUYGbbATw5F8QHcHF6ad50Kuer294LheueUvrzl2hn6ZFCV43iI4YXaHax%2FPD4OnWZaDNTw8ZbU%2FJ%2Fhv%2BuCff%2FfpkYCkaGGW%2FvvZYzKo%2FM6GL80tbEkXFrCY8R9NYkbXDX8jN40DhxPDJNKUe2IPAbAZT3Qyx9%2FmT4LRCmKSfT%2FNmQzHxZIM%2Fpg%2Fz3gGHuuxMeRpqMVXTKjAYPBk3CM3grTRdru3IIwurDJyQY6pgH5ngQcy%2BUB5tNddQoRiHB0PmLaHNzIZGUeODj4%2Bpso2mnIeE1j9qJ6zha9n0fljWCSLN7Xn9aZwCmpPP2QCAhqwsPLowAGF9CJGAFwVQ%2FHNMPUYuF6I50FuiaaABtAqK49Fxv5gz8UmOVP9JqN8HLynJEIokqBRdt2FIBaiT3cv%2Bxc5cq%2BzbpdS7NzKfWwjEoNUTs2Byk%2FUtbM%2BVzHJLmZv0F7C3gk&X-Amz-Signature=109f402098ddf67c4eaa9ad3e54983634f59b3ac16dbe886fc5ab1fe20438764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJ6KZWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATxKZ7U22Ch20J00QSh9VL6KN2VSKG84kIOG%2Fi0GJskAiA2iB2GIhLoHUS6DP%2BRtlU0A53mfoD3%2FnGbeT96qvg6Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIML0LFNruzbuSa00X%2FKtwD8X1%2B1DIBxySqxwfz7xp42uOPVXaqOu70edYpHbTfy6EqsQg90H0LUKPsfP7ObnqCLD19%2FSpMXmIydb%2F%2BQ9T25l%2Fore%2F2x5JsHAV3047sU1FBYbyO%2BnFYhLBJ%2F67Yx6sdmzmGkIvFrGBvExCUPD1LEC1sMG5Te4sGl7c%2BttWN8B7VfmLvGxkMRXXt38YYyOlLaJByK7QV%2B63NoXW3a6a04k3AUNlIqFJEN47xQj%2BR1pICEaVqXWUGhaRnZbK3wWIi7BZEvMBwvXkSKiAG4QBvrQ7sYybRYoR0JNNYUXOhYmQs1zFjvbOfRLar1fJvKpw4Tmj8B5faspr8ytSIazgtfuS0UD8beBBSRyxpFHWaYHAXgfbnDRggyrbLIBX5II5vEAMEGPI8NXzeJV%2B4km48Z05Is3%2B0SnUYGbbATw5F8QHcHF6ad50Kuer294LheueUvrzl2hn6ZFCV43iI4YXaHax%2FPD4OnWZaDNTw8ZbU%2FJ%2Fhv%2BuCff%2FfpkYCkaGGW%2FvvZYzKo%2FM6GL80tbEkXFrCY8R9NYkbXDX8jN40DhxPDJNKUe2IPAbAZT3Qyx9%2FmT4LRCmKSfT%2FNmQzHxZIM%2Fpg%2Fz3gGHuuxMeRpqMVXTKjAYPBk3CM3grTRdru3IIwurDJyQY6pgH5ngQcy%2BUB5tNddQoRiHB0PmLaHNzIZGUeODj4%2Bpso2mnIeE1j9qJ6zha9n0fljWCSLN7Xn9aZwCmpPP2QCAhqwsPLowAGF9CJGAFwVQ%2FHNMPUYuF6I50FuiaaABtAqK49Fxv5gz8UmOVP9JqN8HLynJEIokqBRdt2FIBaiT3cv%2Bxc5cq%2BzbpdS7NzKfWwjEoNUTs2Byk%2FUtbM%2BVzHJLmZv0F7C3gk&X-Amz-Signature=94dd31d0e13391cae81a2fb6394f42818a545c4b1bd00ca85a623155db9299fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
