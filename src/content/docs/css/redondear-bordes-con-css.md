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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4LSU76%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD248LMBpg9BD%2B4nNzDPl6fgG0G9dz%2Bq5RFF2mipaf8vQIgYc3Auwnn3D500ZoEK04shuXcb3UoX0yRVqfbssl3F%2Fsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEgMcZKj6IUtWvmAwircA4Q5bwPAHb%2F4j0cp3CK8USTq%2BBSPXBQ3iEBpEA4GH8iDoPeF6340sLtyuGD6woAQpSSI1E0gydXwRmGhTxKwHMIC%2FlRJE0n5FUXgPpDUzN8FBNpvQwg1xLNqt4YttqQYnmtU75VA2UiupHA%2Bsg7FrXnrCcKcAGu9U4gB516RL4%2BvzZzHcZeAwf%2BiDk0UJnu1zTfLzFCxCvUCclTmR3oSbNVycUIUrwLcW0xo5fz3crL0yAg2H5mGDW0PXLw4kA1Vu823he%2BDRZRoZgW0ig6lSfwfAPg%2FmDoVHJRo4BLjNWVbQHsFY%2BRSlFJxPGhQetd%2F0L1IcAbmz9MtS3ZY2AYzOKU20kGLpMQVYHr5nCV8F7nptAf17de4eRj6kMg3lZ6SWEOuJxntNbCOp%2FOu0VsdJFZjRhSn5AeEwwevKavgTjrZZk2P2Lj0rjaCNKcC3vQFv8%2FNz8vNeiG7OKijHTEKGCNFA0GBJQbEdixiOAtuyExXpBj81LZ44dQPb7aN5a8nK8GwEru56vOvgd4IsecN0a77O75wCvEADkFwLMCkV6PyBBfMg8eEQ15ygV2ym%2BDztjSGnBO%2F7tuBNtoXjf08htyrB3jAPpeEUrtluOvXxriCjkxQLFq5hdCnDbp2MPrqz8kGOqUBnf9aheDLZaE7a5OsJMfzSQg1chmGFMDmOOnmKNAkhLr%2FLZAZZwVz6J1A0gK%2BiOhk3e46uXjpeUOIIblpa4LwXoQwOBVo4NGVJMiZJbkJJeKcWUbpCfwKcPU%2BNAN68Tc%2F07pzrpvr1UWij11Vjex3NLdz2SHIpu4mdPkElbjo%2BMgdhzREc%2FV10EoRa5RSlxooB7Dk2UJUV5CHppJAUOvTvDUuQ%2F1d&X-Amz-Signature=2842527257f2d2073a61545ecbc85188f491046e8509f55b106ff54114099387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4LSU76%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD248LMBpg9BD%2B4nNzDPl6fgG0G9dz%2Bq5RFF2mipaf8vQIgYc3Auwnn3D500ZoEK04shuXcb3UoX0yRVqfbssl3F%2Fsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEgMcZKj6IUtWvmAwircA4Q5bwPAHb%2F4j0cp3CK8USTq%2BBSPXBQ3iEBpEA4GH8iDoPeF6340sLtyuGD6woAQpSSI1E0gydXwRmGhTxKwHMIC%2FlRJE0n5FUXgPpDUzN8FBNpvQwg1xLNqt4YttqQYnmtU75VA2UiupHA%2Bsg7FrXnrCcKcAGu9U4gB516RL4%2BvzZzHcZeAwf%2BiDk0UJnu1zTfLzFCxCvUCclTmR3oSbNVycUIUrwLcW0xo5fz3crL0yAg2H5mGDW0PXLw4kA1Vu823he%2BDRZRoZgW0ig6lSfwfAPg%2FmDoVHJRo4BLjNWVbQHsFY%2BRSlFJxPGhQetd%2F0L1IcAbmz9MtS3ZY2AYzOKU20kGLpMQVYHr5nCV8F7nptAf17de4eRj6kMg3lZ6SWEOuJxntNbCOp%2FOu0VsdJFZjRhSn5AeEwwevKavgTjrZZk2P2Lj0rjaCNKcC3vQFv8%2FNz8vNeiG7OKijHTEKGCNFA0GBJQbEdixiOAtuyExXpBj81LZ44dQPb7aN5a8nK8GwEru56vOvgd4IsecN0a77O75wCvEADkFwLMCkV6PyBBfMg8eEQ15ygV2ym%2BDztjSGnBO%2F7tuBNtoXjf08htyrB3jAPpeEUrtluOvXxriCjkxQLFq5hdCnDbp2MPrqz8kGOqUBnf9aheDLZaE7a5OsJMfzSQg1chmGFMDmOOnmKNAkhLr%2FLZAZZwVz6J1A0gK%2BiOhk3e46uXjpeUOIIblpa4LwXoQwOBVo4NGVJMiZJbkJJeKcWUbpCfwKcPU%2BNAN68Tc%2F07pzrpvr1UWij11Vjex3NLdz2SHIpu4mdPkElbjo%2BMgdhzREc%2FV10EoRa5RSlxooB7Dk2UJUV5CHppJAUOvTvDUuQ%2F1d&X-Amz-Signature=91abc5fd63a8c629646581e4a243ecdd8451940721c35b02c4acdec0b399c162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
