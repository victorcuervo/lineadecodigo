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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHRGBG4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfk%2ByV5NB451pY8J3KqmoeP5v1%2BRoHf8CtmKRzMFV9UAiAK5cGSEk5Yv1FP2zyMr%2B353ihCOI2iPq%2BxDyJRcRGZBir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMiS6xKUJC0lfzV9rhKtwDj3WRtubONFToQwJpbl9lf7hP0zHbHKOw6VDh1GKDjcvHx2aWI2PPMQtw%2F2OO2gbkIrgGjHeFgzv6KcFLt8xYZD%2FQlx52CEc5n%2FIrXghyU4Tz9Jl9zMOHqAmJJ5Wil9sRh7F%2BVhnUvpalVtJ9KLK3BTe9yuVb1o8%2FqkHtFncdF0sHY9yyvPdRyTdu9Z0iIpXOVIgW%2FEulUZSjOZMcK28Jpxs7MD5cvLNOjdF6l4Flb72YLvHSfDrTfPdAqOl%2BQk3CQUuiut3on3tqOD0iQXaJdJJml19ZyYmN9IDWaFhc0oEVXquxB4Sp%2B7GfcyoOycIaMtdLBH6hzv1Jmr2dJ2oWSn5CKesx9DCdkOKyvP0ksaATXWi4T0JF%2BuQ34f%2BB82ntoejD2mBtdujpIYm9zmSzXQDx4bHghoy0Y9OicKTIEE2NEj9RJ3aNVOUNmTRV8SSTRozZixSMmujHZQEo14SCUjWfjzSyRC1kn7JXZpKTKFc7skvUa0W7Zwx1bQ5i73tgLyaNZCFNhu%2Fg28KE2GM2R%2BzGKJNAZQTBknYiOvMN5zA%2B3YbRbqhwdL7tCoLXwTHdCLtBhapxVhJ18GPx0aLXf2Qi8N8Cjmx%2F1rU2G2WatTFzNAJdVhRwjwhp1fowofuHygY6pgG3MFcB2XcPw0urlcoahyjsLMI1Ci4KdF%2F3M4zoJIURi9hK%2FE8%2Flvvbg%2F8SX2%2Fcailrw%2BpZU%2FI1q5ObvXiPrRvHZwS6bQ83dct1HP%2FKn4TwNeW%2BdnCloLFgOfABVxhi50zcmJE%2B1KB6V3cu04X8izmpyRRabpK9pLkVtgcMa4veFFyN63akhGu44t98TiwRo%2FwFxpuqzBQX6JpeN37cesY3PCN1Mjv9&X-Amz-Signature=3ba0044adfe4bcd3d8c17f386e67b9ce1548cfe8f8be8173479aa35dfa8391fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHRGBG4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfk%2ByV5NB451pY8J3KqmoeP5v1%2BRoHf8CtmKRzMFV9UAiAK5cGSEk5Yv1FP2zyMr%2B353ihCOI2iPq%2BxDyJRcRGZBir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMiS6xKUJC0lfzV9rhKtwDj3WRtubONFToQwJpbl9lf7hP0zHbHKOw6VDh1GKDjcvHx2aWI2PPMQtw%2F2OO2gbkIrgGjHeFgzv6KcFLt8xYZD%2FQlx52CEc5n%2FIrXghyU4Tz9Jl9zMOHqAmJJ5Wil9sRh7F%2BVhnUvpalVtJ9KLK3BTe9yuVb1o8%2FqkHtFncdF0sHY9yyvPdRyTdu9Z0iIpXOVIgW%2FEulUZSjOZMcK28Jpxs7MD5cvLNOjdF6l4Flb72YLvHSfDrTfPdAqOl%2BQk3CQUuiut3on3tqOD0iQXaJdJJml19ZyYmN9IDWaFhc0oEVXquxB4Sp%2B7GfcyoOycIaMtdLBH6hzv1Jmr2dJ2oWSn5CKesx9DCdkOKyvP0ksaATXWi4T0JF%2BuQ34f%2BB82ntoejD2mBtdujpIYm9zmSzXQDx4bHghoy0Y9OicKTIEE2NEj9RJ3aNVOUNmTRV8SSTRozZixSMmujHZQEo14SCUjWfjzSyRC1kn7JXZpKTKFc7skvUa0W7Zwx1bQ5i73tgLyaNZCFNhu%2Fg28KE2GM2R%2BzGKJNAZQTBknYiOvMN5zA%2B3YbRbqhwdL7tCoLXwTHdCLtBhapxVhJ18GPx0aLXf2Qi8N8Cjmx%2F1rU2G2WatTFzNAJdVhRwjwhp1fowofuHygY6pgG3MFcB2XcPw0urlcoahyjsLMI1Ci4KdF%2F3M4zoJIURi9hK%2FE8%2Flvvbg%2F8SX2%2Fcailrw%2BpZU%2FI1q5ObvXiPrRvHZwS6bQ83dct1HP%2FKn4TwNeW%2BdnCloLFgOfABVxhi50zcmJE%2B1KB6V3cu04X8izmpyRRabpK9pLkVtgcMa4veFFyN63akhGu44t98TiwRo%2FwFxpuqzBQX6JpeN37cesY3PCN1Mjv9&X-Amz-Signature=94669fbb32ff1298c861c2a5cf0b43043356ac9660d0c3d3a6cf3caf3bb771d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
