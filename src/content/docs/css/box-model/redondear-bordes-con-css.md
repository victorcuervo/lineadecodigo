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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHMONUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn714ylz5MXPb8oQeaZnCEgulf%2B34pSYL5p81sz%2FniMAiEAiruKlilLpnWigwQwkDI0RiHymmO0WtuMNBnGSyk%2BN34qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqAC36cv6AOMkLERyrcA3TxRaxzTvGdcCKZpaJRc9tiChHICfha%2F8L1J%2BzdbvU9qh3Mshy7GjvnPvr1ixQO2mj36KO8mad85b2oihsT36GbcPziay2c05JVWBMLlaav0dht7OxZA0EUW3APJRAHPxkYCqKd9XrPRUG7F9gwEOJTs3ueusAvn0PNQvNqt9fktSFJl7hkhsRvkJF%2FxhpizioM9otM5ziY%2BhJAjv8ttm0u03SewF0QOAVTQ2xX6FLy83Lu3plZoiDmAzpqIRBKOTNmfSQ0kojAfIWKovgxbmUKYUygtYVewKw8oeAZvFhz1nsP%2F82rsW45h0eP74F0k8eUkNcAC0%2BbFnyV%2BYV8J80DX6hjriE2I5zH3XZ0WmoIJIz40NLEyX9SKzS9jKdzJmn9IARKo1YdOEqasg4%2F2bpqvYEF8PS6f%2FgsdyWDOXTtE2AABbjxfmtb1vRs7d4G%2FOcgN4scSMaGnlODgsLK%2BNXQ0OJJv4j1z57RuLz1zzIKiDBHactwvsP9zlzIk%2FV0Go6dos914BgqhBFw%2Fq8dsypujP%2FJ7L3%2B0AP4hhPdkmt3MrkftJaTOxb6XblJp0nMeKRqNR4GUA0JbHYhFmvS0SytgS9zoQLqMm00FQ%2BwUQmmFtUx1scFTorhVtL9MLWAi8oGOqUBJiID9GFEJdARvg1Jw5sdZH38ljmQdKXFSQ%2FuYk3IiEVwTUg5%2FcNMvEPgQnhDuQ1Ut6Rzm1OlYsNbQW2DMH9jkwH90F03ncAn7n1yjkBYDEcZyzadFwiaSF3aNLWznwAC1J%2FG77Xq%2Fuy05CDaP6giwcTwV3jL0O%2F1rkSwJtQeko6PxSujbzJ5LIneMmQJxgpm7gxydEzyuHbVxhAMwF0gotx5B4SO&X-Amz-Signature=ec5c556f661a4a73ee8e3093b77d5fe72b0b3780bda08befb2b2d188c32421e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHMONUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn714ylz5MXPb8oQeaZnCEgulf%2B34pSYL5p81sz%2FniMAiEAiruKlilLpnWigwQwkDI0RiHymmO0WtuMNBnGSyk%2BN34qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqAC36cv6AOMkLERyrcA3TxRaxzTvGdcCKZpaJRc9tiChHICfha%2F8L1J%2BzdbvU9qh3Mshy7GjvnPvr1ixQO2mj36KO8mad85b2oihsT36GbcPziay2c05JVWBMLlaav0dht7OxZA0EUW3APJRAHPxkYCqKd9XrPRUG7F9gwEOJTs3ueusAvn0PNQvNqt9fktSFJl7hkhsRvkJF%2FxhpizioM9otM5ziY%2BhJAjv8ttm0u03SewF0QOAVTQ2xX6FLy83Lu3plZoiDmAzpqIRBKOTNmfSQ0kojAfIWKovgxbmUKYUygtYVewKw8oeAZvFhz1nsP%2F82rsW45h0eP74F0k8eUkNcAC0%2BbFnyV%2BYV8J80DX6hjriE2I5zH3XZ0WmoIJIz40NLEyX9SKzS9jKdzJmn9IARKo1YdOEqasg4%2F2bpqvYEF8PS6f%2FgsdyWDOXTtE2AABbjxfmtb1vRs7d4G%2FOcgN4scSMaGnlODgsLK%2BNXQ0OJJv4j1z57RuLz1zzIKiDBHactwvsP9zlzIk%2FV0Go6dos914BgqhBFw%2Fq8dsypujP%2FJ7L3%2B0AP4hhPdkmt3MrkftJaTOxb6XblJp0nMeKRqNR4GUA0JbHYhFmvS0SytgS9zoQLqMm00FQ%2BwUQmmFtUx1scFTorhVtL9MLWAi8oGOqUBJiID9GFEJdARvg1Jw5sdZH38ljmQdKXFSQ%2FuYk3IiEVwTUg5%2FcNMvEPgQnhDuQ1Ut6Rzm1OlYsNbQW2DMH9jkwH90F03ncAn7n1yjkBYDEcZyzadFwiaSF3aNLWznwAC1J%2FG77Xq%2Fuy05CDaP6giwcTwV3jL0O%2F1rkSwJtQeko6PxSujbzJ5LIneMmQJxgpm7gxydEzyuHbVxhAMwF0gotx5B4SO&X-Amz-Signature=632f9b1a695101d40f1ce292a1dee99c6b63cbc767461d6fa0cb3ffdc241c06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
