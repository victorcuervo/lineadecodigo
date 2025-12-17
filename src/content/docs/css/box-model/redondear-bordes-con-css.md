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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LBK2UL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDifrwxRTsy2Ws%2BDxmNcl%2BViGLRG0%2F6yCsgNokZYJOgfAiACL87mm%2BPEfAURGhN9KiU7%2B9ZkVXvC%2FL4qP4xGvSCIhCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMOMkAMY3AddT9usX%2BKtwDvsl2WAdzBRhqnbFxqKiGMqVDJN8gBetdh2e8CtH%2FYhHYLVxbizbzWIiJ1FOt4oJWSzzP5pf3HZYzZ8hLAY1EeQCdJ8%2F7FGLh%2Bpl4VoB5i4B%2FUoPoIS8UMuxZV0Eo7qDORlGkqnw0KxHXWyANnKJWRAuwXs80GaJT3tIa1XSgnqPLy6nIYmR%2FF1i82ImgyiAtKmo%2BCUlIQ%2Bs%2B7yfnEJOb%2FvosCtGL90VHmBpab6e%2FHaKfB1aXTLUQznvjSDVisQSXpQ%2FcaZE4BEuLfZy6psHD%2BMNXadC8SAc6I6UjKk8Z%2ByUZpAxvyNDgrVEpsfWeH00N00QPFx7DX%2FvQ4gkvEbAKfBtkJZL9pz4qRBjM7gTzfaj8lS7g4tcqTWkjynJGUWgsZgD7rTfridazWL26rPSYs%2B1ZwU4SUufvKbyDdhoASsBaJixTIZQDG1L4AO4KvxKHkwaqVDVVAzn27KDD8pLvTxuEoSrR64i3SYLF1Sta1UcV4KLcUCV%2F3SDPb8HpYTdqjrBwrXd%2B%2Bd6UYWE71kgdL%2F6VHrYuT5AKK7wH7o7bFEiRCpvid6FMiQzRO%2Fe7TtY2R%2B3ZS9m%2B1FdPwmoFhgx24ZO%2FuX%2F%2B0s8aj7Zwgrr0WgHrPXwO9x4lFOAfNJEwpLiJygY6pgHGeUSd118MyqDPwMqTEbuByJjGP4xL4lgz3AEDzkodUnUppEmKG0G%2BIGCF2oCxZPfWdFMYYO%2Fji9ObXmYtoEeoI7GIAhddY%2BDSjmzmScNyTkXxNVJzzxmQcQoTUxL7j1U3mzvSdTSpAeQNPgrE1GhWOBVYG0hz3DrW%2BAUv%2BzNdX%2Br3NZi4ks459kkAL9nmcDNkG5DwOYK7av5%2Bwkx%2BJjF%2Fdd9QgD2G&X-Amz-Signature=7ac73f05e654063e269c7c264f9d221804664429051888f709f180dcd2c55b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LBK2UL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDifrwxRTsy2Ws%2BDxmNcl%2BViGLRG0%2F6yCsgNokZYJOgfAiACL87mm%2BPEfAURGhN9KiU7%2B9ZkVXvC%2FL4qP4xGvSCIhCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMOMkAMY3AddT9usX%2BKtwDvsl2WAdzBRhqnbFxqKiGMqVDJN8gBetdh2e8CtH%2FYhHYLVxbizbzWIiJ1FOt4oJWSzzP5pf3HZYzZ8hLAY1EeQCdJ8%2F7FGLh%2Bpl4VoB5i4B%2FUoPoIS8UMuxZV0Eo7qDORlGkqnw0KxHXWyANnKJWRAuwXs80GaJT3tIa1XSgnqPLy6nIYmR%2FF1i82ImgyiAtKmo%2BCUlIQ%2Bs%2B7yfnEJOb%2FvosCtGL90VHmBpab6e%2FHaKfB1aXTLUQznvjSDVisQSXpQ%2FcaZE4BEuLfZy6psHD%2BMNXadC8SAc6I6UjKk8Z%2ByUZpAxvyNDgrVEpsfWeH00N00QPFx7DX%2FvQ4gkvEbAKfBtkJZL9pz4qRBjM7gTzfaj8lS7g4tcqTWkjynJGUWgsZgD7rTfridazWL26rPSYs%2B1ZwU4SUufvKbyDdhoASsBaJixTIZQDG1L4AO4KvxKHkwaqVDVVAzn27KDD8pLvTxuEoSrR64i3SYLF1Sta1UcV4KLcUCV%2F3SDPb8HpYTdqjrBwrXd%2B%2Bd6UYWE71kgdL%2F6VHrYuT5AKK7wH7o7bFEiRCpvid6FMiQzRO%2Fe7TtY2R%2B3ZS9m%2B1FdPwmoFhgx24ZO%2FuX%2F%2B0s8aj7Zwgrr0WgHrPXwO9x4lFOAfNJEwpLiJygY6pgHGeUSd118MyqDPwMqTEbuByJjGP4xL4lgz3AEDzkodUnUppEmKG0G%2BIGCF2oCxZPfWdFMYYO%2Fji9ObXmYtoEeoI7GIAhddY%2BDSjmzmScNyTkXxNVJzzxmQcQoTUxL7j1U3mzvSdTSpAeQNPgrE1GhWOBVYG0hz3DrW%2BAUv%2BzNdX%2Br3NZi4ks459kkAL9nmcDNkG5DwOYK7av5%2Bwkx%2BJjF%2Fdd9QgD2G&X-Amz-Signature=71eb136420d6b448d55852bd7e99fabee61422d3632615bb09a53d8282402a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
