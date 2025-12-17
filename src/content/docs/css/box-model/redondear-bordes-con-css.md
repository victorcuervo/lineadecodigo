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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YONCJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrxwcEcyyAEos4t6QwkpuAkIjd5x6M873oGTW5%2BaN5QIgaYYEIlGm1rXLdYpP7m%2BeUmExM6jiQ6rGwdfxc19wX3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLZ25aTuJ2KMTwRapSrcA3IS2XO07C%2BMxUEvPOEdigcUGqzAOr1ZjxU%2BUFaxpoeBenvYJceZhySNWrmy9N%2BbBKG17NZPDaGZMaZAlFJu1dBcQgKariU4r5bxFR5llX0iHky2VjFoBJ0GnV7BfLHqRq5njmuKHNd%2BSowiw411hL02T2Nj0AFGaVWi%2FyjtnBvmyo9V%2F%2FmBNsaYPuD%2B6ySQz2%2BU820tZYEZ7RnwNW1L5zKHOKkpL8%2BfExK2DKEWk2DilNqdU5lHPOuUyCUnZTBgK6V3tqgvGRuP1STEUBI692%2BjUuSLjB%2FL8E3rG45kgdXLgXKTHdHoiKt5Eek5TiBdkCYtjymwd%2F%2BJ1BrejEJE0BFgnBVPenIPsfV96SF8QiZVKnZcZNIq813xJoGvY4tyZQUILquD8KHsgwL9ykQf%2FWzLMxaI7OitOGzsiRTB6OzFTVHuKl2Ad9%2FpGzCtT%2BxcTiqmgBsBj1W6iO9aT9MwfdWNd1NjGsDuJatbq3SLtSxabZ0vfr2rcVUEnCl3I0cg5hr0LfoydwAAaguL2Tc1A3w1p2%2Fc6MdGZQ70lrJjvGocz8Zafl1sk%2FAh6d23jvTje9Hs%2FCgt5gcT20iTChZYno4M%2B9%2F7WYSF8sQG6M1RmTU7rBI%2Fu9LIkbXhNLiPMKjpiMoGOqUBNfahHC8bEHMBnveZyxZexWgrBPQA%2BKObXkdjrY%2FDue38iBAtGCjJIk2ZESPaR6OOo1edv4hgvRSoYz1h8JGXLnhaemmOqChWWycSkkrqUKRyGBHa3ChsTRDdWws%2BphFEe2iGIYneh5RyZXQq0lipLAZ0EzAfcVn5K2MijuKencd745lAF4JMhkC0Ie%2FJ3eBBtZx%2F0cWBGLlwYvxWVwaMrnX5Jg14&X-Amz-Signature=776db355690ae2bff808c82c31dd34d1f77b863afa0ecf35fab0ec17150bea65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YONCJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrxwcEcyyAEos4t6QwkpuAkIjd5x6M873oGTW5%2BaN5QIgaYYEIlGm1rXLdYpP7m%2BeUmExM6jiQ6rGwdfxc19wX3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLZ25aTuJ2KMTwRapSrcA3IS2XO07C%2BMxUEvPOEdigcUGqzAOr1ZjxU%2BUFaxpoeBenvYJceZhySNWrmy9N%2BbBKG17NZPDaGZMaZAlFJu1dBcQgKariU4r5bxFR5llX0iHky2VjFoBJ0GnV7BfLHqRq5njmuKHNd%2BSowiw411hL02T2Nj0AFGaVWi%2FyjtnBvmyo9V%2F%2FmBNsaYPuD%2B6ySQz2%2BU820tZYEZ7RnwNW1L5zKHOKkpL8%2BfExK2DKEWk2DilNqdU5lHPOuUyCUnZTBgK6V3tqgvGRuP1STEUBI692%2BjUuSLjB%2FL8E3rG45kgdXLgXKTHdHoiKt5Eek5TiBdkCYtjymwd%2F%2BJ1BrejEJE0BFgnBVPenIPsfV96SF8QiZVKnZcZNIq813xJoGvY4tyZQUILquD8KHsgwL9ykQf%2FWzLMxaI7OitOGzsiRTB6OzFTVHuKl2Ad9%2FpGzCtT%2BxcTiqmgBsBj1W6iO9aT9MwfdWNd1NjGsDuJatbq3SLtSxabZ0vfr2rcVUEnCl3I0cg5hr0LfoydwAAaguL2Tc1A3w1p2%2Fc6MdGZQ70lrJjvGocz8Zafl1sk%2FAh6d23jvTje9Hs%2FCgt5gcT20iTChZYno4M%2B9%2F7WYSF8sQG6M1RmTU7rBI%2Fu9LIkbXhNLiPMKjpiMoGOqUBNfahHC8bEHMBnveZyxZexWgrBPQA%2BKObXkdjrY%2FDue38iBAtGCjJIk2ZESPaR6OOo1edv4hgvRSoYz1h8JGXLnhaemmOqChWWycSkkrqUKRyGBHa3ChsTRDdWws%2BphFEe2iGIYneh5RyZXQq0lipLAZ0EzAfcVn5K2MijuKencd745lAF4JMhkC0Ie%2FJ3eBBtZx%2F0cWBGLlwYvxWVwaMrnX5Jg14&X-Amz-Signature=b9b884629c17618c5d5d1583930f4424f1af617d0cb914cfd2c50ced96cd3313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
