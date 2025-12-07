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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYA56JXQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU9uMXhN42b8LoBK3kpfYD0%2F1ucMM9oENAy07%2FMp2c8AiEA0niOSZsBJwWvAhFjEFjA7a6sYPBvM2Cz%2FRLXeNTl0OkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZa4VmaIfANHra9PSrcA59206dR5S288z%2FH3euc7h6WCeUQq%2BPDyvO6HpVMQRhzIjh4caYOLaD3aVyw9xcx0ionEqUhEhH7NllDFJ0AFoumep27rmqwyuASyuIH%2Bko0jWNyEGQT2U%2Fjw3lJI%2Bwi7%2BddW%2FLp%2B5kCQPELlKqsGzy0e18uZB52d3%2B6Lr5zh7uvRvTu9%2BEUW0yD8ZjIvStHPeu6o%2BWPyq9Efvzj9rAK8eYRK3pENCbs%2BtoNugS9I1Hjxc9Xfa63PVUReIoS7xnQk%2F0VwarauUnYSDb53jrF4DHKuRjFM7VYUXlQ%2Bfuc%2BBCpk05Qz8bSXlNpPXfnn60w1KYi4tzYj3VsqqmSCsgRdf7hji%2BRCQ7x%2FxJxA9cqHR%2FyV%2B9AnQEX5oVh4N0v1lNTgXMs08Uiu0mG71ViwswGg0OlBPPNrZyKgj6TUJiggwT08EoVCsG6%2B4D5DaEacbtNxcz%2BcrWCxHyyHWQhrtw40%2FUfhZf1dTLgNRl1hFWKpidoI%2BV%2FWHX3b9Ch7qn7x9ULh2fbHNky7WRWCvlRriwzcSrfoscV3XVHKxtqpYvA6KLPbG8SPqF5Kr%2Boh2KUo7X5DNuRT9%2FRbDmkHvjVGH8K9Rhs2je%2FhImBtgmvBSUD%2FUQNSE9dXLBdxNJJ44XeMOr90skGOqUB%2F%2B5cs5jkIKQEM31Nr6xAiAHc3CdD0h1Cj7YOj5v65V16LJi%2F4p9rIrmg8%2B%2F6mnv6YhY3%2FktTqrbxLsXzYQWFuSAudIZRbKjtQG%2FsurXVim5GG7MwUrRl9m6YOsbFBtQRAG44KiQ1f0536OD5MbWAKFCbA2cNfMHXOI6O3u4kS%2BGV184JTE3nGah26WdsKu5lRsrdBo17RailRj6aNamJS9ym0J0p&X-Amz-Signature=7724245e99df51112bd30c2468c660c0a42052cad842daa071dd3c03bd49e448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYA56JXQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU9uMXhN42b8LoBK3kpfYD0%2F1ucMM9oENAy07%2FMp2c8AiEA0niOSZsBJwWvAhFjEFjA7a6sYPBvM2Cz%2FRLXeNTl0OkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZa4VmaIfANHra9PSrcA59206dR5S288z%2FH3euc7h6WCeUQq%2BPDyvO6HpVMQRhzIjh4caYOLaD3aVyw9xcx0ionEqUhEhH7NllDFJ0AFoumep27rmqwyuASyuIH%2Bko0jWNyEGQT2U%2Fjw3lJI%2Bwi7%2BddW%2FLp%2B5kCQPELlKqsGzy0e18uZB52d3%2B6Lr5zh7uvRvTu9%2BEUW0yD8ZjIvStHPeu6o%2BWPyq9Efvzj9rAK8eYRK3pENCbs%2BtoNugS9I1Hjxc9Xfa63PVUReIoS7xnQk%2F0VwarauUnYSDb53jrF4DHKuRjFM7VYUXlQ%2Bfuc%2BBCpk05Qz8bSXlNpPXfnn60w1KYi4tzYj3VsqqmSCsgRdf7hji%2BRCQ7x%2FxJxA9cqHR%2FyV%2B9AnQEX5oVh4N0v1lNTgXMs08Uiu0mG71ViwswGg0OlBPPNrZyKgj6TUJiggwT08EoVCsG6%2B4D5DaEacbtNxcz%2BcrWCxHyyHWQhrtw40%2FUfhZf1dTLgNRl1hFWKpidoI%2BV%2FWHX3b9Ch7qn7x9ULh2fbHNky7WRWCvlRriwzcSrfoscV3XVHKxtqpYvA6KLPbG8SPqF5Kr%2Boh2KUo7X5DNuRT9%2FRbDmkHvjVGH8K9Rhs2je%2FhImBtgmvBSUD%2FUQNSE9dXLBdxNJJ44XeMOr90skGOqUB%2F%2B5cs5jkIKQEM31Nr6xAiAHc3CdD0h1Cj7YOj5v65V16LJi%2F4p9rIrmg8%2B%2F6mnv6YhY3%2FktTqrbxLsXzYQWFuSAudIZRbKjtQG%2FsurXVim5GG7MwUrRl9m6YOsbFBtQRAG44KiQ1f0536OD5MbWAKFCbA2cNfMHXOI6O3u4kS%2BGV184JTE3nGah26WdsKu5lRsrdBo17RailRj6aNamJS9ym0J0p&X-Amz-Signature=40ba72ddf0f63e312f5e57ad99ff020f9df0c1970157c10adfb7fb0acc1ca987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
