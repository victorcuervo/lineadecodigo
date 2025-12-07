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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WD22S6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJsncgLhPInZoa232R7o8ZITNAnq4xpbeDf1UXR8N8DAiEA63IylfTOzh8klZjL4FQc%2F%2BCxYDKQl1i9BzHytuPkwo8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI6IKiY0pTYkQqrFCrcA9mbL84d2BcGs%2BrZW3b%2F7FKG5DCGIDu9WuaF6n9VhsXWf00Puf%2FiwU5%2FTubTPz6D5JF9sxjV99UiNZKdLw01ioSylfJRiHG0zbxw0IvMqhLrGVBepOblAdFetPnQa%2FhDAZMVW582YvUB8NqjD1qgUxCmqD%2BFgCQFlHDxVhTNaPTTST4ssKCVq3%2BLEREJH9ePzGfOsmfOPs496pRKKjudVerz8eoDjuRVGhtdy%2BXCuOO7zsjOjBr0Qgd5bUKfcf2d8PuvmKZrjucq%2BAkMD3ENJJX9UmrevCYJgfuNTGGg0LlviwGJwqRZ45afrVYXJU%2FFRj5dbrvugX8FVDtPaof3nRuzA4zUff2T7hPR4TfjqtPWcZ2HIluW70DTvaX7FAl6ZbkuBxbc%2FBWSwaOaNhspVElr%2FwmHxvncpRz%2FqgIn8LrbB8EmJDL%2FKrPkdx2nCD8DNkR7ZoMQZiB0gXfXPL%2F%2FjZjmheC7eyQb9udK5GoJ7XzB5M5FUdpH787fA1Blff%2F0T%2BsLMD1nFMgwJWNTPpFe5MPjAVz%2B7uofh5K9a4ukzObAhQfE1T4NTWxyKnTEEF7LMPRLFEvkrx9RSOSAhNdDn22rdsWxUVd%2FN5bbiUMx7gSZYNQLIjLqZR4CAz2NMPPH18kGOqUBRQZGSdW3X29KWWPSz6HtROwbPy6gvR1iBRHR67aE%2FORy5LQhoSEqoaYwlnDjjBaQmL%2Fz6MMohoLPOG9LPIO0FVLIQ%2BEQIicbQc4Rw4czzxHOhpYCIN3SYuGhd16AM54VLbaXhBLWfN9K1OHhm%2FPeG8rBLP0b9VOaGfOhcZ6hv5Mz9GtcmR5zKYDTwyw7Pc0ZrSiD%2Ft%2BWfTLC%2BIvyQ5TnvNpgDy7i&X-Amz-Signature=c1e97255f00cb0654fe27dbb1cf52c6707e06540d4aa0b6744cb9c475b0ddac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WD22S6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJsncgLhPInZoa232R7o8ZITNAnq4xpbeDf1UXR8N8DAiEA63IylfTOzh8klZjL4FQc%2F%2BCxYDKQl1i9BzHytuPkwo8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI6IKiY0pTYkQqrFCrcA9mbL84d2BcGs%2BrZW3b%2F7FKG5DCGIDu9WuaF6n9VhsXWf00Puf%2FiwU5%2FTubTPz6D5JF9sxjV99UiNZKdLw01ioSylfJRiHG0zbxw0IvMqhLrGVBepOblAdFetPnQa%2FhDAZMVW582YvUB8NqjD1qgUxCmqD%2BFgCQFlHDxVhTNaPTTST4ssKCVq3%2BLEREJH9ePzGfOsmfOPs496pRKKjudVerz8eoDjuRVGhtdy%2BXCuOO7zsjOjBr0Qgd5bUKfcf2d8PuvmKZrjucq%2BAkMD3ENJJX9UmrevCYJgfuNTGGg0LlviwGJwqRZ45afrVYXJU%2FFRj5dbrvugX8FVDtPaof3nRuzA4zUff2T7hPR4TfjqtPWcZ2HIluW70DTvaX7FAl6ZbkuBxbc%2FBWSwaOaNhspVElr%2FwmHxvncpRz%2FqgIn8LrbB8EmJDL%2FKrPkdx2nCD8DNkR7ZoMQZiB0gXfXPL%2F%2FjZjmheC7eyQb9udK5GoJ7XzB5M5FUdpH787fA1Blff%2F0T%2BsLMD1nFMgwJWNTPpFe5MPjAVz%2B7uofh5K9a4ukzObAhQfE1T4NTWxyKnTEEF7LMPRLFEvkrx9RSOSAhNdDn22rdsWxUVd%2FN5bbiUMx7gSZYNQLIjLqZR4CAz2NMPPH18kGOqUBRQZGSdW3X29KWWPSz6HtROwbPy6gvR1iBRHR67aE%2FORy5LQhoSEqoaYwlnDjjBaQmL%2Fz6MMohoLPOG9LPIO0FVLIQ%2BEQIicbQc4Rw4czzxHOhpYCIN3SYuGhd16AM54VLbaXhBLWfN9K1OHhm%2FPeG8rBLP0b9VOaGfOhcZ6hv5Mz9GtcmR5zKYDTwyw7Pc0ZrSiD%2Ft%2BWfTLC%2BIvyQ5TnvNpgDy7i&X-Amz-Signature=113dba976d0c9a24236e2e0297bd16613d6b071dfc5ee73e93ea39fa3f9f1602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
