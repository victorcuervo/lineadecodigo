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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJQ3HWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkGlk%2F2IALA1aI5M0Egf99Hpm3koBXZBIkrUgKorspewIgF2YCHoiXxKHSh6IfpKUN%2BPbmEwgUwg4392nrF3DarBsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhpq0BIOKOw0UivYyrcA%2Bq0aVKVFVgD62Bdg0G5LSVkGOb8G2hIwOZjhGSqUbDrtO92Ihe2UM8gbwz7p9CiPyNWQ3Z9CBJef47kiDcngZut%2Fu8vQHhO%2FFwYniKFuGOE62FBkOMfexQCdtY1AwEUj42%2BpDnytDH4QnjJWZqDLj55oro%2Bdn%2FSOI%2FomHs%2FHE5vl4HqQfRJGYd07EtdppilrrXjru4uZSbz4DSRmo3OIAd1jrFJuIvUGtZN66t0oGPEIzcJ1MSkEChihSzzAasYmm%2FvR5qyR8IN11eX%2FNqWRWk13%2FMad5wEpHJXXZemfRDPvUanzj7BLdvbyblqE%2FBLIuIf1NzQxARw8%2Fh6KEdDXRA7%2FGNxtJMVhYn0m3DTJG1839jkSFtJ6m167IKN7amqYBlpnF6qgzPfqz8HO0mmo0QF9w1mYe3JfgHjQPhk6iLHdL%2Bg7p%2BWU8cdUaXibX9FHlI7Eeo34xqs9d7XN%2BBwBy3HrbuUqDoE39F%2FXshMnLLehrZrxp67HnVZ77Jf8JekT4in7F9Gf0A9KaRruKZOouZiD%2Bc%2FaHmid9RxDhwLJeaaw7vkZzyCVdO%2FwQ1JDardu4w6PlR9DVQCYtly5%2FxCF6MELJsXXNHeaovV5%2FAaXg%2BFTeJY%2Fj46qsc0MquIMMuei8oGOqUBvDB614xGj0GC0ZtO8jFE4qVV5xa0Wnf%2Fd7CmMnbOeoM3v%2FqiGwC0f3TPg6hlF0XJAY0Xeb7qf%2FFLywKD35IHUyuW9adsXrSrNodHt6RYxhetqZ6ifXiwspTkyktCsqw1DRFq6UvjBqkxgrufSSk%2Fv0j%2Bn0HaQExg6LJC%2FROxI3lHju0TR%2FmHjjJ0FuPaNz4Z4v3h%2Ftlk7ve1RjSPLqpvrnIYL5gg&X-Amz-Signature=e12814073de7c4fe0a7ab8b704e7a66898b61fb3a4d250f680cddf5f7a67b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJQ3HWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkGlk%2F2IALA1aI5M0Egf99Hpm3koBXZBIkrUgKorspewIgF2YCHoiXxKHSh6IfpKUN%2BPbmEwgUwg4392nrF3DarBsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhpq0BIOKOw0UivYyrcA%2Bq0aVKVFVgD62Bdg0G5LSVkGOb8G2hIwOZjhGSqUbDrtO92Ihe2UM8gbwz7p9CiPyNWQ3Z9CBJef47kiDcngZut%2Fu8vQHhO%2FFwYniKFuGOE62FBkOMfexQCdtY1AwEUj42%2BpDnytDH4QnjJWZqDLj55oro%2Bdn%2FSOI%2FomHs%2FHE5vl4HqQfRJGYd07EtdppilrrXjru4uZSbz4DSRmo3OIAd1jrFJuIvUGtZN66t0oGPEIzcJ1MSkEChihSzzAasYmm%2FvR5qyR8IN11eX%2FNqWRWk13%2FMad5wEpHJXXZemfRDPvUanzj7BLdvbyblqE%2FBLIuIf1NzQxARw8%2Fh6KEdDXRA7%2FGNxtJMVhYn0m3DTJG1839jkSFtJ6m167IKN7amqYBlpnF6qgzPfqz8HO0mmo0QF9w1mYe3JfgHjQPhk6iLHdL%2Bg7p%2BWU8cdUaXibX9FHlI7Eeo34xqs9d7XN%2BBwBy3HrbuUqDoE39F%2FXshMnLLehrZrxp67HnVZ77Jf8JekT4in7F9Gf0A9KaRruKZOouZiD%2Bc%2FaHmid9RxDhwLJeaaw7vkZzyCVdO%2FwQ1JDardu4w6PlR9DVQCYtly5%2FxCF6MELJsXXNHeaovV5%2FAaXg%2BFTeJY%2Fj46qsc0MquIMMuei8oGOqUBvDB614xGj0GC0ZtO8jFE4qVV5xa0Wnf%2Fd7CmMnbOeoM3v%2FqiGwC0f3TPg6hlF0XJAY0Xeb7qf%2FFLywKD35IHUyuW9adsXrSrNodHt6RYxhetqZ6ifXiwspTkyktCsqw1DRFq6UvjBqkxgrufSSk%2Fv0j%2Bn0HaQExg6LJC%2FROxI3lHju0TR%2FmHjjJ0FuPaNz4Z4v3h%2Ftlk7ve1RjSPLqpvrnIYL5gg&X-Amz-Signature=e216516c38fd47de2563c11247d13b0577dfb1dfa0176180f9eb2ad1fa9d875f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
