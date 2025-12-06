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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGTGGSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP5ytqs28ZEpaLZt5Rb8XiHv3ryoXFtLGhSubwaMuzWAiB4z0M7U8c7dEsexgiD4OfIesHWkc6%2BnwxtK0hb%2F3ewLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa1xl0QwLcE9wOuM5KtwD%2FDLzBD%2B0KN1mN0QZ402nNWCIF34n9gn16EcF87u9nzltWxPQI6iPastr5OAinQKgGWga11UmlPh3wSyj%2B4LR8RhK1TeGUlWPK2pWy%2FjYG%2Fc2Kp6XSlQ1SQg%2B9D27Tdw%2BnQxPF9ggpNW7s7fx3bgLyJcQvYFdqmf6y8ng8PDaT2jy%2FmqwKIoilrrXEZvimUrXC6XgBpmXpbXF8eW275VW6%2FHmNTGPpLt5zb%2BYT%2Fy%2BNq%2Bj7bWs5IDdFYHBEiRYTIEoG%2BlAybCx5otA%2BuXmCMluyoCuNTQddzcWirV9r23u0msjMYm7dS23mw5IEsqNBflu6Uu%2BfTrvB3CFw1nDI5jwnxiXxw2tnCCeIjhq%2BXkSfQNT5%2BM4d8UHYdBYPcP14SAwzpk2Kwgc2ladBTsl9qSXLWZmx58nZQ0rc%2FlK8GYxmp8d6h2fA48XO%2FJZZHBriMC5HDFTCflZEZlO3G0EyejiwMe7RLNOaQSOxljpyPU3y23u0Iv1qq7wTQGK%2FCW%2ByEVjyhwqhPCdzV2n5Y157jy%2BK1kVm0nu9HkqGTOmGk9c%2FwnP3YSKibe2tOdcieIk%2FqiXkONuKtFs%2FySAELf9sw1L4v9%2FoUiln6NquQhqVjmWn4wxNUijYj7EgM3PfHAwkKfQyQY6pgEPWDpCeUnFpl7FDuzHLGCCMljCnW%2BJecbyLnaTRouvSSYtdbjwFxn8PbuoIHNHbiuOYQzOd91%2FU%2FqTgbZiGDQhaXUphxkj8CGjraLqAVHOx5DQqJ51NsI5WhCmtIngdH3Kb02%2FWhevvSyhkmwGHn2RVWOFqONKEyi4AvxVx5VLD9JmGWhwzTPj9PpHp5dnv%2Fjs5OwFNGL7lV4iAx%2FPeURCAOOi4%2F8%2B&X-Amz-Signature=be310bb6e2124a3fab919535b152a66d08214b03aa647b08a56c3401db853435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGTGGSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP5ytqs28ZEpaLZt5Rb8XiHv3ryoXFtLGhSubwaMuzWAiB4z0M7U8c7dEsexgiD4OfIesHWkc6%2BnwxtK0hb%2F3ewLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa1xl0QwLcE9wOuM5KtwD%2FDLzBD%2B0KN1mN0QZ402nNWCIF34n9gn16EcF87u9nzltWxPQI6iPastr5OAinQKgGWga11UmlPh3wSyj%2B4LR8RhK1TeGUlWPK2pWy%2FjYG%2Fc2Kp6XSlQ1SQg%2B9D27Tdw%2BnQxPF9ggpNW7s7fx3bgLyJcQvYFdqmf6y8ng8PDaT2jy%2FmqwKIoilrrXEZvimUrXC6XgBpmXpbXF8eW275VW6%2FHmNTGPpLt5zb%2BYT%2Fy%2BNq%2Bj7bWs5IDdFYHBEiRYTIEoG%2BlAybCx5otA%2BuXmCMluyoCuNTQddzcWirV9r23u0msjMYm7dS23mw5IEsqNBflu6Uu%2BfTrvB3CFw1nDI5jwnxiXxw2tnCCeIjhq%2BXkSfQNT5%2BM4d8UHYdBYPcP14SAwzpk2Kwgc2ladBTsl9qSXLWZmx58nZQ0rc%2FlK8GYxmp8d6h2fA48XO%2FJZZHBriMC5HDFTCflZEZlO3G0EyejiwMe7RLNOaQSOxljpyPU3y23u0Iv1qq7wTQGK%2FCW%2ByEVjyhwqhPCdzV2n5Y157jy%2BK1kVm0nu9HkqGTOmGk9c%2FwnP3YSKibe2tOdcieIk%2FqiXkONuKtFs%2FySAELf9sw1L4v9%2FoUiln6NquQhqVjmWn4wxNUijYj7EgM3PfHAwkKfQyQY6pgEPWDpCeUnFpl7FDuzHLGCCMljCnW%2BJecbyLnaTRouvSSYtdbjwFxn8PbuoIHNHbiuOYQzOd91%2FU%2FqTgbZiGDQhaXUphxkj8CGjraLqAVHOx5DQqJ51NsI5WhCmtIngdH3Kb02%2FWhevvSyhkmwGHn2RVWOFqONKEyi4AvxVx5VLD9JmGWhwzTPj9PpHp5dnv%2Fjs5OwFNGL7lV4iAx%2FPeURCAOOi4%2F8%2B&X-Amz-Signature=71d5f88eb15239a231b1a708c4a177ca746cf6556591071975c88b65a0bc9a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
