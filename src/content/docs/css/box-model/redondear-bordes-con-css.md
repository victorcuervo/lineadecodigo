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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCGGWO6T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGVGNIg%2BEvQV5s%2F7UWklvbMym0gYJkOkGlIpkpyIiZhgIgZ2okaB4HqP9EIUOHNkwqn0htUMBxqD%2FccsOQmJVtmaYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLU8b6U6B7C%2FvWeN%2BSrcA2B4N8dz0yv7cOliLQm9Xc8UBEWvEOoJmMNzulgzD%2BvFlczp7fBfbFeYkzhYprKpS8MeUAXfOv68iH0et6ubg8FlLUpvb6I62ZUd5umWQqwngt6o31CXNIoVUf9i57tAsYg5PJsDJX%2BVGqZQSktotqyOl7CVSV%2BThc2Fh87pEhlz0nWjCv%2F4M89wDXjN92KgzrndHsYsKX0DcrCr1S4AdQNzKOwIBgYpvfOVcQHBadvvA%2F3B9WLR7NTBzJ9%2BdrHU2JEFfei%2BkB83Zlk6hg52IS1VpaxKp6VfeDggsXGPDTkxgUHUq7xlJhJw7O6E2yCF%2FLNtCVpCQ1WTkfaxvhkhwI0ZfzNJsjUHBPV2GHWKZCfMVeoVjZaFtwOMfO%2FUKq8xcyNc8%2FkS3Q0wgwu8rf%2BCY2gJ9W8fmcw8CHztQl1FHRulF95%2BqCDPayFnqdL1PCP1mkQKyuYSrOWkVPUVi3IVmAR7usbdYQvvhmwkOchZROgUp%2BMCIEoiuYu%2BcME1vheo6m4RXciGaDVTD%2BnhJcNtE1v5uPMjXFTYGjfpC6sCxPAk%2Fkw3mXrG5bHkYldo4hsUL%2FmkkYlfavKkNx%2BFtmCbz2qIUzm%2Fpgh%2BpnIRCw6ZWh0zXga6eFmgVlz3joDzMNThisoGOqUB5vbrng3nz%2FuvtV8ehkO%2FSCvwjjeJ3ajU2f6XrwhpNmh9oPlOvFibx1QpBtsojjmBmpu1Jdqw%2BzqJQACHMCr0iQAYh%2BpZCULQJapdC%2BojWX2wFGWkaQVGD9roSgSImt6fRsr4odoFwZJ%2F%2Bl11CUt0%2FvjUGL8wgmaKSk24vLZYaokmwGHGhcLYBHAvsFT3wMyvuU4eFbtcbG%2BDMtpLiQyEtre1nMO8&X-Amz-Signature=d2618499aea7a9b8287dcf9895721a037a2c5d0ce80604a2998804cb2c0adf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCGGWO6T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGVGNIg%2BEvQV5s%2F7UWklvbMym0gYJkOkGlIpkpyIiZhgIgZ2okaB4HqP9EIUOHNkwqn0htUMBxqD%2FccsOQmJVtmaYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLU8b6U6B7C%2FvWeN%2BSrcA2B4N8dz0yv7cOliLQm9Xc8UBEWvEOoJmMNzulgzD%2BvFlczp7fBfbFeYkzhYprKpS8MeUAXfOv68iH0et6ubg8FlLUpvb6I62ZUd5umWQqwngt6o31CXNIoVUf9i57tAsYg5PJsDJX%2BVGqZQSktotqyOl7CVSV%2BThc2Fh87pEhlz0nWjCv%2F4M89wDXjN92KgzrndHsYsKX0DcrCr1S4AdQNzKOwIBgYpvfOVcQHBadvvA%2F3B9WLR7NTBzJ9%2BdrHU2JEFfei%2BkB83Zlk6hg52IS1VpaxKp6VfeDggsXGPDTkxgUHUq7xlJhJw7O6E2yCF%2FLNtCVpCQ1WTkfaxvhkhwI0ZfzNJsjUHBPV2GHWKZCfMVeoVjZaFtwOMfO%2FUKq8xcyNc8%2FkS3Q0wgwu8rf%2BCY2gJ9W8fmcw8CHztQl1FHRulF95%2BqCDPayFnqdL1PCP1mkQKyuYSrOWkVPUVi3IVmAR7usbdYQvvhmwkOchZROgUp%2BMCIEoiuYu%2BcME1vheo6m4RXciGaDVTD%2BnhJcNtE1v5uPMjXFTYGjfpC6sCxPAk%2Fkw3mXrG5bHkYldo4hsUL%2FmkkYlfavKkNx%2BFtmCbz2qIUzm%2Fpgh%2BpnIRCw6ZWh0zXga6eFmgVlz3joDzMNThisoGOqUB5vbrng3nz%2FuvtV8ehkO%2FSCvwjjeJ3ajU2f6XrwhpNmh9oPlOvFibx1QpBtsojjmBmpu1Jdqw%2BzqJQACHMCr0iQAYh%2BpZCULQJapdC%2BojWX2wFGWkaQVGD9roSgSImt6fRsr4odoFwZJ%2F%2Bl11CUt0%2FvjUGL8wgmaKSk24vLZYaokmwGHGhcLYBHAvsFT3wMyvuU4eFbtcbG%2BDMtpLiQyEtre1nMO8&X-Amz-Signature=7fdfecca29e14e6adc4659bdd2d74abe5464f27a7c87d8da98b119b10f7b69d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
