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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BHVMPT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIlrkCUoCrn3t4%2BH%2B0s1NQwxcAnENEkgRXaTdARzV%2B7AiAr7JPpNCJrP0gYpUlnte%2BK6sd4m7RuKRpjeMrRo%2FqwZSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjiQ4QImr2hlHwfO6KtwDEFEFg2uTzJdIx%2BdIFx7pDkwymYgcHmbKaAFBJdVq4neb8%2BXsv6qsS61j1%2BxeVEgx%2BGuRdJJ8zqJLefggTwReC8jIqSBjjiU0PS7eEpY7wJI8jPuo2nD19T8i7inq8AEIUA0e3jJMmAOKC09gig9lOXAjZQ4V9QD3Lrno2hS8C%2BPAt03yWpHYIsmHuzkIocIKyCjJbiC10YLvogfgMBViWRhCt3Wr0E9gfyhLh8XJo7hnAxg%2FCf6J2YdewI5N7f7ycgfx9Ch12tX%2FomRr9zlmGgbV1V4Txkr25Bg8hE7%2BGcHpdbmDQZmJWGHvY0HbIsVn6FS0HJhiDhXHUZrieErVl%2FlotAcWuxzPsEK918CUWttBplMxWWiiXWPOrCeR%2BkyoX1%2FBw6Gelh%2BIHsevxfT%2FYOV%2BKTOXGMql3BOvd3vpNHwhyxVvAmIiZw5x3%2BwxJsg9ZQak2qR7i46UHhHq%2FHap0Tc8CsYH2ozqf6LMhRYrXeIY8qOfP705CyhER1z21UXvMhT4ixEiYqAinROUt6YrvwbAVpgpH6iaPqX3NAhfg%2BFiH5tbJDH%2FoMVCIS%2BfBUthFcYd1lbE9uN%2BOWQM0qV69eLt8WZP5mR5NODEbcPrNMG2EaxJnkXBV%2FseKD8w7qbQyQY6pgE%2BH8XfmP1fFTubJoKykI%2B7tL3MlAYfk%2Bm8uO3JLEz6Q%2Fjw%2Bi8NiM80TWi9gS8T32NuIcmVk%2BGyyZ%2BIOyFxtjBeXe3Yhr%2BOXq0iOJv1l%2FdVRCIZr1NJwo%2FODXE5Bs5pf7YFf9rHH3%2F2le%2B%2FpxvjUpDb%2F95EeoXYC%2FlUS8gWaxUUMu7OxDQAtX1kec94vJX%2BRsQsuCS12LxxATFJOXFbaJwZE6UF%2FAEm&X-Amz-Signature=e5aa9910f1eb20b06cbc6a46aecdde4ea44ff2e565554c6540fac82d3c79e8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BHVMPT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIlrkCUoCrn3t4%2BH%2B0s1NQwxcAnENEkgRXaTdARzV%2B7AiAr7JPpNCJrP0gYpUlnte%2BK6sd4m7RuKRpjeMrRo%2FqwZSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjiQ4QImr2hlHwfO6KtwDEFEFg2uTzJdIx%2BdIFx7pDkwymYgcHmbKaAFBJdVq4neb8%2BXsv6qsS61j1%2BxeVEgx%2BGuRdJJ8zqJLefggTwReC8jIqSBjjiU0PS7eEpY7wJI8jPuo2nD19T8i7inq8AEIUA0e3jJMmAOKC09gig9lOXAjZQ4V9QD3Lrno2hS8C%2BPAt03yWpHYIsmHuzkIocIKyCjJbiC10YLvogfgMBViWRhCt3Wr0E9gfyhLh8XJo7hnAxg%2FCf6J2YdewI5N7f7ycgfx9Ch12tX%2FomRr9zlmGgbV1V4Txkr25Bg8hE7%2BGcHpdbmDQZmJWGHvY0HbIsVn6FS0HJhiDhXHUZrieErVl%2FlotAcWuxzPsEK918CUWttBplMxWWiiXWPOrCeR%2BkyoX1%2FBw6Gelh%2BIHsevxfT%2FYOV%2BKTOXGMql3BOvd3vpNHwhyxVvAmIiZw5x3%2BwxJsg9ZQak2qR7i46UHhHq%2FHap0Tc8CsYH2ozqf6LMhRYrXeIY8qOfP705CyhER1z21UXvMhT4ixEiYqAinROUt6YrvwbAVpgpH6iaPqX3NAhfg%2BFiH5tbJDH%2FoMVCIS%2BfBUthFcYd1lbE9uN%2BOWQM0qV69eLt8WZP5mR5NODEbcPrNMG2EaxJnkXBV%2FseKD8w7qbQyQY6pgE%2BH8XfmP1fFTubJoKykI%2B7tL3MlAYfk%2Bm8uO3JLEz6Q%2Fjw%2Bi8NiM80TWi9gS8T32NuIcmVk%2BGyyZ%2BIOyFxtjBeXe3Yhr%2BOXq0iOJv1l%2FdVRCIZr1NJwo%2FODXE5Bs5pf7YFf9rHH3%2F2le%2B%2FpxvjUpDb%2F95EeoXYC%2FlUS8gWaxUUMu7OxDQAtX1kec94vJX%2BRsQsuCS12LxxATFJOXFbaJwZE6UF%2FAEm&X-Amz-Signature=2502ba2a3fd0f09f3e6ee7afa53cc41b3bc6ef43a75d7e7af904227eacee8fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
