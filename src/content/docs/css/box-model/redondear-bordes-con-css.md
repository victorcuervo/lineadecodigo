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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCIBMSY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYf44kL0I6ZwAjf%2BPA%2BTwWFzPyukTkATehU4fH%2BAyLBgIgO2Jr%2F6x8iH5sG1UbpIu3KodCgZKJm%2For2XmjDp7Rzygq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA2u02a6CGU60aTFNSrcA1q9d%2Bva8UxBmq1Db7QqM2kAsengB7u%2BWKciN2a%2BhRolBancEFbKwBzpjtjQMKq3X50jvYo16ByVt8ZaYJbx%2BqVbNRXKnbwJKsqz%2FCi1RPapSLaA5pgtLJg2kC46Q9ZBg%2FQsd0vd9TQQNPnVRxZU22L%2FdegPXojnXl6OuzUyQeO60R1bv%2FEoKbLYKZvxdVjSNpf0DJAqtgjxQIOeJWvpoouaxL4wufmse9tNyZfTixdm%2FYao%2FcVrr3L0gvmNp1zG61JEat%2FFMHjLNDRh5OytW%2BoVcdsAd3mTvNtyhJ5p3qhz5htxVxWpM59D5wBVWMFNipsgnR4u3t0zcIEUmtA9g5uXCAdTmP91eCUIr8BZiCS9huc9YdBbf9TfxQ5BgaPdR5dNEdKV0RdkANz1uyYTVqlV61eCBqroJqcchjMZBGtCjICWZH%2Fpt0VHHU5StcJPOnysU7hzw4MWjqZQAZk2QBeLOUUyx%2Fcrb%2FczXIP%2BbuEiNE4e3UgygoQb61e3YWIbTwrZCV%2BETRG%2FMyf60lAhoECFHXcLQUyW9TMGydbBiO0uLcvqMGYzeSiABHUIpBmZX1Kc7kQVlyrAbt8H%2BILeKXiyy84znBqQre0RPGZ8o%2Bj1Vl0%2FF7mQazSxnrOyMO6yiMoGOqUBli2exB%2F2eZDL13gcKhv8xE2Z5CrS4Rt6ajgphJJlCZ8KB6p%2Fd0w%2F8h7oZIAjt1U0AoOw40r5K6I523lIJxwM4OTMotTE%2FvBU7CAYRK6RksjZSgFTD01yPttBHY0O%2BmD5dBxpvVVqFExI4loMlB3gJwsy8r84hnfEB%2BA%2BBK%2FdJpURAx4GClxf8QiXNuAxI2s4koAKxxwx3vVyYUg0FIROTwY8onem&X-Amz-Signature=775ea422692a7ef878d337e24bca31e1599d3c3a28a8eaab2b4154d21834aefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCIBMSY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYf44kL0I6ZwAjf%2BPA%2BTwWFzPyukTkATehU4fH%2BAyLBgIgO2Jr%2F6x8iH5sG1UbpIu3KodCgZKJm%2For2XmjDp7Rzygq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA2u02a6CGU60aTFNSrcA1q9d%2Bva8UxBmq1Db7QqM2kAsengB7u%2BWKciN2a%2BhRolBancEFbKwBzpjtjQMKq3X50jvYo16ByVt8ZaYJbx%2BqVbNRXKnbwJKsqz%2FCi1RPapSLaA5pgtLJg2kC46Q9ZBg%2FQsd0vd9TQQNPnVRxZU22L%2FdegPXojnXl6OuzUyQeO60R1bv%2FEoKbLYKZvxdVjSNpf0DJAqtgjxQIOeJWvpoouaxL4wufmse9tNyZfTixdm%2FYao%2FcVrr3L0gvmNp1zG61JEat%2FFMHjLNDRh5OytW%2BoVcdsAd3mTvNtyhJ5p3qhz5htxVxWpM59D5wBVWMFNipsgnR4u3t0zcIEUmtA9g5uXCAdTmP91eCUIr8BZiCS9huc9YdBbf9TfxQ5BgaPdR5dNEdKV0RdkANz1uyYTVqlV61eCBqroJqcchjMZBGtCjICWZH%2Fpt0VHHU5StcJPOnysU7hzw4MWjqZQAZk2QBeLOUUyx%2Fcrb%2FczXIP%2BbuEiNE4e3UgygoQb61e3YWIbTwrZCV%2BETRG%2FMyf60lAhoECFHXcLQUyW9TMGydbBiO0uLcvqMGYzeSiABHUIpBmZX1Kc7kQVlyrAbt8H%2BILeKXiyy84znBqQre0RPGZ8o%2Bj1Vl0%2FF7mQazSxnrOyMO6yiMoGOqUBli2exB%2F2eZDL13gcKhv8xE2Z5CrS4Rt6ajgphJJlCZ8KB6p%2Fd0w%2F8h7oZIAjt1U0AoOw40r5K6I523lIJxwM4OTMotTE%2FvBU7CAYRK6RksjZSgFTD01yPttBHY0O%2BmD5dBxpvVVqFExI4loMlB3gJwsy8r84hnfEB%2BA%2BBK%2FdJpURAx4GClxf8QiXNuAxI2s4koAKxxwx3vVyYUg0FIROTwY8onem&X-Amz-Signature=15151d34cc57e595150ebf34302bab2af6063e1b81b47f72992ecb4ef61f994b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
