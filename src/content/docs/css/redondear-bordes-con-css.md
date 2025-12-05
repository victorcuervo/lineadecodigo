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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DRTPOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKZQXO%2BmpSA7J8no8iML3J2jden8quLN9lL3LZCPQSAIgIzjI76xtam%2FzFLRmoT8mb8dtNxdQvMywdNq%2BwDpy14Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB0h1hy7%2F6LxfdTiQSrcAz3Ms%2BWvQClygzRxVdfghpykRByJMhlFgHUkrvgEnD1fGWQ8l5Fnr0GkpstIGWcOrpOso5irE70vfp5sG52x7roG5XcADUmVlsjWdEh85%2Bfyf6kue2EuhVVtMiAJqxw5tUbPvwhCfdhOU2bYOCqWDMCwOdV4wHc7jxEBElSpouoS8DC%2BYG5XJsmQnyDTimLgM4kG%2B43zPhxk2yUGa4%2Bp0qPBmFrypfDvVADhU9lJ8bbk%2B4zAmoAr%2BLsE46d4WWKe2FJz9r7hw7Y5TpqKJhemm5jXuEPucPdBY22Vy47BbN4wCtn6euAdfC4moEONjix7r6sovR%2BSh8FeePwFacL%2FlmLqkT0yysk%2BDmZi2nksGxP5qTG8MwrWqnsin9ZHM7H0BIIISYPd1SfwHRAbXkdN0NPYCB9Fd2GN2HXHRKt7LnpuDZuSaBjBgd9s6VgoGoO3YZOyXlnwarHvtx%2B797Rl8jL0SiLSAG%2FF2YfLBv60KdCO0O%2BcenyyHnK7URjjLkTZ6AQGNPAiifVgAeK2ba1tXtUTBIprAMBX81X3CPy9t1HAZomYX8zGy8iPPlRfNEbLzd4Ge%2Ftex2ZV5LcLKiKt%2F2czxXfsE1%2B3pJfS6Upj1ttDU1oIgfDAUnjCJPHVMMOKzckGOqUB3rnA3Pq7dbbba86sgjxCw%2B%2Ff7tZNjnaeEWyLrF7doaEM%2BO9kpMzRSifVlcvxRBwpXT2CfzSxhNfSX2i9HH5lhUo4FeWtJeu1JwYW45ofUTyKVBwHnP2M1WoLBAVE%2BBufP45bKL5dNl3csdcWqPQGe2hMtTbP%2B1A6YrY3nWQqdYf89%2FXDP9f6LRBsAJ5VCTqx%2FlCABtGsXPwqSXTnyCFsDEcYufEA&X-Amz-Signature=1abb929b1310a1c35005c6670a1710c4baa12c03f8e944b8307619d3c7b33f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DRTPOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKZQXO%2BmpSA7J8no8iML3J2jden8quLN9lL3LZCPQSAIgIzjI76xtam%2FzFLRmoT8mb8dtNxdQvMywdNq%2BwDpy14Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB0h1hy7%2F6LxfdTiQSrcAz3Ms%2BWvQClygzRxVdfghpykRByJMhlFgHUkrvgEnD1fGWQ8l5Fnr0GkpstIGWcOrpOso5irE70vfp5sG52x7roG5XcADUmVlsjWdEh85%2Bfyf6kue2EuhVVtMiAJqxw5tUbPvwhCfdhOU2bYOCqWDMCwOdV4wHc7jxEBElSpouoS8DC%2BYG5XJsmQnyDTimLgM4kG%2B43zPhxk2yUGa4%2Bp0qPBmFrypfDvVADhU9lJ8bbk%2B4zAmoAr%2BLsE46d4WWKe2FJz9r7hw7Y5TpqKJhemm5jXuEPucPdBY22Vy47BbN4wCtn6euAdfC4moEONjix7r6sovR%2BSh8FeePwFacL%2FlmLqkT0yysk%2BDmZi2nksGxP5qTG8MwrWqnsin9ZHM7H0BIIISYPd1SfwHRAbXkdN0NPYCB9Fd2GN2HXHRKt7LnpuDZuSaBjBgd9s6VgoGoO3YZOyXlnwarHvtx%2B797Rl8jL0SiLSAG%2FF2YfLBv60KdCO0O%2BcenyyHnK7URjjLkTZ6AQGNPAiifVgAeK2ba1tXtUTBIprAMBX81X3CPy9t1HAZomYX8zGy8iPPlRfNEbLzd4Ge%2Ftex2ZV5LcLKiKt%2F2czxXfsE1%2B3pJfS6Upj1ttDU1oIgfDAUnjCJPHVMMOKzckGOqUB3rnA3Pq7dbbba86sgjxCw%2B%2Ff7tZNjnaeEWyLrF7doaEM%2BO9kpMzRSifVlcvxRBwpXT2CfzSxhNfSX2i9HH5lhUo4FeWtJeu1JwYW45ofUTyKVBwHnP2M1WoLBAVE%2BBufP45bKL5dNl3csdcWqPQGe2hMtTbP%2B1A6YrY3nWQqdYf89%2FXDP9f6LRBsAJ5VCTqx%2FlCABtGsXPwqSXTnyCFsDEcYufEA&X-Amz-Signature=d8390a957c277f25786408df69baca3e8908de82f55584a8fb32447bd949f395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
