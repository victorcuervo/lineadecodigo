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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMA7A5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5XM93PxmwgrGN9hEUhE%2FPpR23SElcyF9dkgI0fxonnAiAeHf61GQQGLC0H1o7exqvXiBcavtvswJXJYon6sbThqSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyAxiQL%2F3Q4IhfMf3KtwDcEfFKW3VyoNcePDGyyHlUy8UEb1fJuQU%2FIydWnZqM5y2FMtrOMh%2FilZyvpXW5pfYoiqhrS0ebe5%2BHyWFWZE%2B5Yu5hMnYG%2FuoqL8v64%2FHljXQ1FQYd%2B%2F3vXIVpGKbk%2BOLTpuPs7%2FpA2vCShBEZBoyqR%2FBE7%2BNuSRP89SI6nx9lASguluAnTWBTWtGRwxRDCog3B0fX3mawXVayQSk7xIi%2FFBJksSef%2FBF2gxanW5D4sc66m8yehT1P3nVqbUrCL01UZ36WdXtXe9fiJakXgWOtZ68YTHT4s8DuYLDwZf8Lx1jB0PKtBlDI74C4kLSclzPCQNnuGHtmIawUca3Xbxk6ekUYBQBB32071BHInhswO8CmvBeS2so26KWW5zqbJrP7MFRyWGv1Ra5XnJgXnjbzZny5DKXPLzz16yECjNZbC4DjOgVr1f2yhpcz5L2sQ0ORtpesu30wpF11mGg5OT%2BUk%2BOAMiBJS0pJ8kq5d3tl6sNm09zW2hhfSB0%2FRfiY7pjRRywtrmo9B3abvno%2F4fe3IEiV%2FZxCaHtoXcu58LMKzLJrF27KVTisxiVLljzZK0k3eepxRkvmWJ6eEcr%2FjcPkBXejayBswU5RNTrUm9cfUmWFXKWhm2gCE3Ificw9c2IygY6pgGLbkFpEALLTb3iK5OFR46tvskkyXZaC5mQJeyBgiQZuYR5ZW1nIPio2VvhpZYdnUDutr1ORjebFEKeg3OT6tl%2Bl%2FFmkM1h8chVQQ%2BhdnSD4OnXso5KVaR0Uo58drwU6uc3hOjyRtWndfuPEHJ9HTHYL09OGC8YdxzEEfIv1d%2BmtsJB20w%2FWHlkmDpYG5Uz2rzYD8%2Bhh90uF094%2FhkGF0%2FGqfMLprS5&X-Amz-Signature=a200cabb1d2dccb11fe67b975fcc81b02b613e6d8e11d0b942dfa8f9d5a8fd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMA7A5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5XM93PxmwgrGN9hEUhE%2FPpR23SElcyF9dkgI0fxonnAiAeHf61GQQGLC0H1o7exqvXiBcavtvswJXJYon6sbThqSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyAxiQL%2F3Q4IhfMf3KtwDcEfFKW3VyoNcePDGyyHlUy8UEb1fJuQU%2FIydWnZqM5y2FMtrOMh%2FilZyvpXW5pfYoiqhrS0ebe5%2BHyWFWZE%2B5Yu5hMnYG%2FuoqL8v64%2FHljXQ1FQYd%2B%2F3vXIVpGKbk%2BOLTpuPs7%2FpA2vCShBEZBoyqR%2FBE7%2BNuSRP89SI6nx9lASguluAnTWBTWtGRwxRDCog3B0fX3mawXVayQSk7xIi%2FFBJksSef%2FBF2gxanW5D4sc66m8yehT1P3nVqbUrCL01UZ36WdXtXe9fiJakXgWOtZ68YTHT4s8DuYLDwZf8Lx1jB0PKtBlDI74C4kLSclzPCQNnuGHtmIawUca3Xbxk6ekUYBQBB32071BHInhswO8CmvBeS2so26KWW5zqbJrP7MFRyWGv1Ra5XnJgXnjbzZny5DKXPLzz16yECjNZbC4DjOgVr1f2yhpcz5L2sQ0ORtpesu30wpF11mGg5OT%2BUk%2BOAMiBJS0pJ8kq5d3tl6sNm09zW2hhfSB0%2FRfiY7pjRRywtrmo9B3abvno%2F4fe3IEiV%2FZxCaHtoXcu58LMKzLJrF27KVTisxiVLljzZK0k3eepxRkvmWJ6eEcr%2FjcPkBXejayBswU5RNTrUm9cfUmWFXKWhm2gCE3Ificw9c2IygY6pgGLbkFpEALLTb3iK5OFR46tvskkyXZaC5mQJeyBgiQZuYR5ZW1nIPio2VvhpZYdnUDutr1ORjebFEKeg3OT6tl%2Bl%2FFmkM1h8chVQQ%2BhdnSD4OnXso5KVaR0Uo58drwU6uc3hOjyRtWndfuPEHJ9HTHYL09OGC8YdxzEEfIv1d%2BmtsJB20w%2FWHlkmDpYG5Uz2rzYD8%2Bhh90uF094%2FhkGF0%2FGqfMLprS5&X-Amz-Signature=e658b18fd0df05e4b16ac051c496f5f22d4a863d42add4c2c793dad9e92a3eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
