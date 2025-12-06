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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KTWKI3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQb0o14IOD6YAxQLgLCWC%2FVR7HCgdSrZnBfQxV%2BY1j%2FgIhAKpSabCG2ad%2FWymaMWRjZZJ0eH74f6gierR0caA8%2FxKMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx7ZMZ7bxkOSU0PMLsq3ANxWja%2FuWLD%2B0zfAKoKmGIYo2izZESQgIk1mI0g5Wsn6%2BXJNTbI%2FKz4HyWDXXA1AgmT6BXHFg%2BL%2Fto%2BJr6PBRIdRXDzCy0l9htl1eYMWgLdZnj4Pn%2B7xr%2BqQA7u9MQRETphN%2BZVHzJv395N3RMFBPPFyL8TKr16WbvxyLxX73eVZ%2BHr8rtVopeAZUEVdj%2B1dipbafIv8z4p9aeFwEd5jRKxQueVObepC0f%2Fmzj4IZqjFAC%2BcsE6OwEVobHARvRENJ3LylIjr0mJTJ%2Bj3W%2FFHjVa0okQwVDRfpL89TAQ3ravwbgS3ZSw24O7Jx0j2PGGrPTeFh9q%2Fz2ovMRnUnDk9TJ2%2Fb%2FKcZZbu2pJGOn%2FJgihC8zq4mlaBZIpku1fkXFNbAwutUrhAz71Va12W166nc8CMklwJyVSpwiKrRXmK33tzw7l755x0nnn%2BBUppReFW9GNMEPlWE5AJ8GRGTHdPlTVnL7RFLS3GLsp59zjU2y2YXZehf0Cn9V43N5I2jtCrVTsuNndiuqA9veAsn6kkM3tPGKqJXL1anBddM0zbiaZdJ0ZyIYzezT8hGQUPUDPDmixjnBJV1UqZagVDZiTCm3kOQIkU0h7TpGiMKjj%2Bd3Y6r4%2FuICNVqLYUlKiCzCHidDJBjqkAdk5dWILny282S6r714Ns4%2BIpoK00MQbhF%2F1dED62%2F9RkPuuFIwfB5NdXjTyfOMUB14vfc6OvLJVLlo%2FHuQEFhx%2FnCd3u6Cuusa8a%2BXIqm%2BTunojOI6qnqR%2B4r1bm0ZrxyZ2X5NetaBuk5evlZuoIs%2BN%2F2QzoTpNkrwd6Lw4WyFT5xYw9awqvvhJ%2BCQsuJupK8M2y2ks9F88Qgim%2FDEfp8ooLwpM&X-Amz-Signature=9368864a06e9a085e19bf64ba93d5d59527703f95c119684ae79879374ce7a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KTWKI3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQb0o14IOD6YAxQLgLCWC%2FVR7HCgdSrZnBfQxV%2BY1j%2FgIhAKpSabCG2ad%2FWymaMWRjZZJ0eH74f6gierR0caA8%2FxKMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx7ZMZ7bxkOSU0PMLsq3ANxWja%2FuWLD%2B0zfAKoKmGIYo2izZESQgIk1mI0g5Wsn6%2BXJNTbI%2FKz4HyWDXXA1AgmT6BXHFg%2BL%2Fto%2BJr6PBRIdRXDzCy0l9htl1eYMWgLdZnj4Pn%2B7xr%2BqQA7u9MQRETphN%2BZVHzJv395N3RMFBPPFyL8TKr16WbvxyLxX73eVZ%2BHr8rtVopeAZUEVdj%2B1dipbafIv8z4p9aeFwEd5jRKxQueVObepC0f%2Fmzj4IZqjFAC%2BcsE6OwEVobHARvRENJ3LylIjr0mJTJ%2Bj3W%2FFHjVa0okQwVDRfpL89TAQ3ravwbgS3ZSw24O7Jx0j2PGGrPTeFh9q%2Fz2ovMRnUnDk9TJ2%2Fb%2FKcZZbu2pJGOn%2FJgihC8zq4mlaBZIpku1fkXFNbAwutUrhAz71Va12W166nc8CMklwJyVSpwiKrRXmK33tzw7l755x0nnn%2BBUppReFW9GNMEPlWE5AJ8GRGTHdPlTVnL7RFLS3GLsp59zjU2y2YXZehf0Cn9V43N5I2jtCrVTsuNndiuqA9veAsn6kkM3tPGKqJXL1anBddM0zbiaZdJ0ZyIYzezT8hGQUPUDPDmixjnBJV1UqZagVDZiTCm3kOQIkU0h7TpGiMKjj%2Bd3Y6r4%2FuICNVqLYUlKiCzCHidDJBjqkAdk5dWILny282S6r714Ns4%2BIpoK00MQbhF%2F1dED62%2F9RkPuuFIwfB5NdXjTyfOMUB14vfc6OvLJVLlo%2FHuQEFhx%2FnCd3u6Cuusa8a%2BXIqm%2BTunojOI6qnqR%2B4r1bm0ZrxyZ2X5NetaBuk5evlZuoIs%2BN%2F2QzoTpNkrwd6Lw4WyFT5xYw9awqvvhJ%2BCQsuJupK8M2y2ks9F88Qgim%2FDEfp8ooLwpM&X-Amz-Signature=b93b8afdc38d704c9c78163187cd34a02990f11fadf908c0ccf013ab0ed86efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
