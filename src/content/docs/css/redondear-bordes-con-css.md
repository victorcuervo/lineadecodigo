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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCUBMPL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcIby62cGVKTrA8Ril5QpmE260qeeEPYEZyC3CAbtliAiAFoR%2Fj1r6KmVYzbJVM%2FipVTQmxeuL%2Fetba18lMlqVTcSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0iw80hjtHrqVTCaKtwDi2Kr%2Bbq30a91UJP4j6hLX7dcvbYuY45%2F2BHFZzcZsyNOWpsJG0XGKwi8AvbYGClOXYSFep0iI9FFEwH8qVGMDPKEVRC7lASt%2BbKEuZHrCrAHTxyUn21SBmn9AbrfVZ0D4Hz4soXGeUby%2FZwcEakk%2BBGq8OSvBbhPb3ZEeqlNvadPVAoMB67KguW35cNnDXxoUukl0EquIcTY0fdBszEeAyIxEQrGIcA5H9TeUPEt2gpsHRZ931fMTRIw0VofJACdUD9rmQa5DIb3xufHW%2FJPH6asHG%2Fa%2Fpt7%2Bmt0M33uOxztLeyg6WpmppHG%2BenAGcmYi5Ix4lIW8wzSshKSUEmqpUTMT80E%2B6N3WnfRv2weW4kXksBQYz2SjdZLu0nJh4qns4W2%2FZohsbxcNB6G6t9zq%2Faz0o22wUzY3JHZFAhpkfjzOnEHilLw9YKgUDUcVuJElIDMD6%2F%2BwpPgf2X1U9m0GenCzwGBSQzQVi%2BqXlBVoE8Wm1aVTe5Nnngn7DpT6alet0FgqRNVfIn9ETYekO9eFi8Mc%2BiUd7hhqFc%2Fmy0%2BugNCryyB1ptOmRlzpdbkJ558W4R3b5nLsJSbYJpw8FaKHpON%2BO94ve2eUWOmr4PyLkLXcWpDMHKToOgElbQw%2BszLyQY6pgFJyBtDgMHB92stRkHkJwC5GdfZUQZnw0WpBfC12EueSjZpvMysXhw4imVkSgJGujDiXauftEkRx4tnPivEKcAxfb52%2BkWkuKBd%2B3%2BNQYE2PxA6XFyQbUEhaYe7iUZFCWcrCIKxtmGaOsOwbZ6Dh1Gs6rWm%2FqNuQDIL97az7YVmD1XD%2FH6%2BNJpIk3qISXX%2BqtoK%2BPIjUhy0%2FOqcjZ5JxPsuQZFuAfKv&X-Amz-Signature=cf8663da8935cced336d301a6124a3c4dd580800d677ae3596b3366cd93a4f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCUBMPL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcIby62cGVKTrA8Ril5QpmE260qeeEPYEZyC3CAbtliAiAFoR%2Fj1r6KmVYzbJVM%2FipVTQmxeuL%2Fetba18lMlqVTcSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMm0iw80hjtHrqVTCaKtwDi2Kr%2Bbq30a91UJP4j6hLX7dcvbYuY45%2F2BHFZzcZsyNOWpsJG0XGKwi8AvbYGClOXYSFep0iI9FFEwH8qVGMDPKEVRC7lASt%2BbKEuZHrCrAHTxyUn21SBmn9AbrfVZ0D4Hz4soXGeUby%2FZwcEakk%2BBGq8OSvBbhPb3ZEeqlNvadPVAoMB67KguW35cNnDXxoUukl0EquIcTY0fdBszEeAyIxEQrGIcA5H9TeUPEt2gpsHRZ931fMTRIw0VofJACdUD9rmQa5DIb3xufHW%2FJPH6asHG%2Fa%2Fpt7%2Bmt0M33uOxztLeyg6WpmppHG%2BenAGcmYi5Ix4lIW8wzSshKSUEmqpUTMT80E%2B6N3WnfRv2weW4kXksBQYz2SjdZLu0nJh4qns4W2%2FZohsbxcNB6G6t9zq%2Faz0o22wUzY3JHZFAhpkfjzOnEHilLw9YKgUDUcVuJElIDMD6%2F%2BwpPgf2X1U9m0GenCzwGBSQzQVi%2BqXlBVoE8Wm1aVTe5Nnngn7DpT6alet0FgqRNVfIn9ETYekO9eFi8Mc%2BiUd7hhqFc%2Fmy0%2BugNCryyB1ptOmRlzpdbkJ558W4R3b5nLsJSbYJpw8FaKHpON%2BO94ve2eUWOmr4PyLkLXcWpDMHKToOgElbQw%2BszLyQY6pgFJyBtDgMHB92stRkHkJwC5GdfZUQZnw0WpBfC12EueSjZpvMysXhw4imVkSgJGujDiXauftEkRx4tnPivEKcAxfb52%2BkWkuKBd%2B3%2BNQYE2PxA6XFyQbUEhaYe7iUZFCWcrCIKxtmGaOsOwbZ6Dh1Gs6rWm%2FqNuQDIL97az7YVmD1XD%2FH6%2BNJpIk3qISXX%2BqtoK%2BPIjUhy0%2FOqcjZ5JxPsuQZFuAfKv&X-Amz-Signature=1b820b3d0645c8ec84be182121b8f832cda7a53d6ac9c351832ba992620adbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
