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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOP2CK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGumQxtNmowEWVxquxXTlnVqGI50eNcUU1YQNNNX3F5pAiEAjAEiiXmPyBlJEoK17%2Bg%2F%2Bxu3ldcT5FIQnYn%2FWH1IGzcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoVqrY37JpypaTqayrcA2PkX%2FMuc5TCrPGm2MztnPgnKV91LVujUizIebHR0f5KnJCObU0%2Fxw6WbccZsnx12IjNgutC7wZDBz3Zz4pImImDzkapcAGVZKZR8jfHSaZ8kz4e%2FVPeybJF%2B%2FCWjfDxt47kyfS8%2BqHASTH4r%2F5g1SB%2BlK2BhPTViS4j7tI%2BOnw%2FGwlETx0d9FdGOLWGfr5NZ98vwIt8fi2xBgHECgYp2V5sN60GPvsOslJwiWZFO95OtBYnED8L9zUSliEEd0sUDIAYruByTg5YHMM3SPCl2%2FLPdAqChadKftdgVlwD%2FgyqphZSA1mLaFBHJEn4BVnM568Ax4UFpcqTxv96Syhhqo4dc12XHlJNZkRU0wDCo4TrYcNP3l2dn5MwKTkSRQr0uc6KrGE4oRZgwliyt0qZpB%2FJrfurZvMzGFhjIRBDwDq1cA%2FQ4LppFhLm1RwoOoEfnQtuvvHIWO7xj3WYjHWpPKrv7vDdu0Tuw10Hpvv0ngsJ53U5h3MGt0vYxEsp7HpSQJwRZRnXnFnBczZctdrtisXE6abAIgLSmEDp9wu6J2vwdr5JEy%2BR0FExruVH4lsCsSeCwvt0dt3lEnj4RrgHobxXtbahWn20oyB8EdRRmrI%2BYkcEtTU3KDPhs%2FUsMJuZ1ckGOqUBWxerKpz92p7isIbfUd8jR%2Fv%2FTmIyBrKk4ijd4ceMWYEw4wfAJXnea2H1w3wEk2qk8NIy3yzX4N9LkDQ%2Bd8HfaDkOY6oD3wd4RCevmINOjLfoEVWaepShD4KyzS6bsw%2FhMuPl6iiGxol8qr2cs7mGFbLFi0UgBrLxlLp5QmLigj6%2F4lmlkDhZD%2BLbtWJGjthV8X%2FGnNMXYneL%2FI5ksIWCuQ0HxMJi&X-Amz-Signature=9ae162b4794a79bf52d4187b21a47fc07dd7902e7edb37bf3421add83a9c8757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOP2CK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGumQxtNmowEWVxquxXTlnVqGI50eNcUU1YQNNNX3F5pAiEAjAEiiXmPyBlJEoK17%2Bg%2F%2Bxu3ldcT5FIQnYn%2FWH1IGzcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoVqrY37JpypaTqayrcA2PkX%2FMuc5TCrPGm2MztnPgnKV91LVujUizIebHR0f5KnJCObU0%2Fxw6WbccZsnx12IjNgutC7wZDBz3Zz4pImImDzkapcAGVZKZR8jfHSaZ8kz4e%2FVPeybJF%2B%2FCWjfDxt47kyfS8%2BqHASTH4r%2F5g1SB%2BlK2BhPTViS4j7tI%2BOnw%2FGwlETx0d9FdGOLWGfr5NZ98vwIt8fi2xBgHECgYp2V5sN60GPvsOslJwiWZFO95OtBYnED8L9zUSliEEd0sUDIAYruByTg5YHMM3SPCl2%2FLPdAqChadKftdgVlwD%2FgyqphZSA1mLaFBHJEn4BVnM568Ax4UFpcqTxv96Syhhqo4dc12XHlJNZkRU0wDCo4TrYcNP3l2dn5MwKTkSRQr0uc6KrGE4oRZgwliyt0qZpB%2FJrfurZvMzGFhjIRBDwDq1cA%2FQ4LppFhLm1RwoOoEfnQtuvvHIWO7xj3WYjHWpPKrv7vDdu0Tuw10Hpvv0ngsJ53U5h3MGt0vYxEsp7HpSQJwRZRnXnFnBczZctdrtisXE6abAIgLSmEDp9wu6J2vwdr5JEy%2BR0FExruVH4lsCsSeCwvt0dt3lEnj4RrgHobxXtbahWn20oyB8EdRRmrI%2BYkcEtTU3KDPhs%2FUsMJuZ1ckGOqUBWxerKpz92p7isIbfUd8jR%2Fv%2FTmIyBrKk4ijd4ceMWYEw4wfAJXnea2H1w3wEk2qk8NIy3yzX4N9LkDQ%2Bd8HfaDkOY6oD3wd4RCevmINOjLfoEVWaepShD4KyzS6bsw%2FhMuPl6iiGxol8qr2cs7mGFbLFi0UgBrLxlLp5QmLigj6%2F4lmlkDhZD%2BLbtWJGjthV8X%2FGnNMXYneL%2FI5ksIWCuQ0HxMJi&X-Amz-Signature=d4c9a32e0c8c64919c234c74b3717571bb6d237d9052337013e80c1bf0c17ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
