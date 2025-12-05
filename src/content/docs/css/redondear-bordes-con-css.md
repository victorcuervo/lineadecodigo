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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SR4DTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnqlGf7sCkuZN8NamotW8oDfO3RJb8wZR75NpTG2YA9AIhAKAfAAlPqkHxGDK%2F%2FpyQLU77XLcTAuxtD%2B2n37db25HCKv8DCE8QABoMNjM3NDIzMTgzODA1IgxIQsBZuX7K33YItmkq3AObRYZyViighZ5uA58kXNnVyvZrEN%2FTq%2Fx7WyvRPw%2BGGq0gDPcbGod5x5ykogMyZOHg5FU7p54rpBfQUj9uzoxYEng0w9e4HzZ8BMekyW69BDo9wBJw0zPd27G7VUn7g%2Fv7Ee5XF7L%2BpZ6L5MjTL6JOGX8p6%2FNK98cGq87zX80a5RLVuc%2BoZy63TaibVvHpLIgnBY0mfwfl2ST0O8eznOjWTQ6sLQGP1p37ndEk48P0F45bUwtfGRe%2FtM1CLd%2B7%2F58bfZ7YW9e3WXXt3U2BH8PHUakKeLyz%2BV6mteaw0L0dkxNE0CpW%2BTvv8KrmEjjfNXPvIEUHAAqTROLlZQTvqL5r8h0x1vBn43ln5IyMKhEGbHHvxcHY9fFpbCmvtNR%2BXayyIjFNL5maCsuZHAd%2FWQwwhTzVqEzm7sJVwqMO3wTdmZS4cJ8gjMXUD%2BEsy3%2F8hZDWrUtDPOh9Zr1B075JS47XTO1GwxZ2fbAEyeNVSBJSB%2FKvGEh2GJQiKWVtY4rdhSjcsJ6HJv%2BPqRFn3qWQBMk2tyqLdsUK6mihk%2FZzh3SQAWVGeCPAK9XpHU5rn0lcUK6w1kvxLv5rwOAEz7xqyihv5NDia5MqH20fCWwFrsN7mIx8IQ6mvyQuJf37YDDujMjJBjqkAf%2B5ojuevLas9VwNwJh4VER2XpXWhvKvuYFUZ31C86Z2PouRVIwh%2FVXQAcSgTlau1hNTVjdHlduHKCW3WMkYUgLcyVYqBlNbFGUs83cgQParG59OEs%2BTAzJnMDjiLsQVBi0EwjZ%2FQ2wvwWciub9wOQWLtF5h5JMtOvdwz%2BNazb0FpmyLKJEZqFgELEhZo3Le11ZBoYgWMiIBXIJTlh%2FsDwkPvopQ&X-Amz-Signature=e4eebc4082e185f8aa8d343e7b40e2d8f75e31d14120e2e67f2264b27b3cc017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SR4DTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnqlGf7sCkuZN8NamotW8oDfO3RJb8wZR75NpTG2YA9AIhAKAfAAlPqkHxGDK%2F%2FpyQLU77XLcTAuxtD%2B2n37db25HCKv8DCE8QABoMNjM3NDIzMTgzODA1IgxIQsBZuX7K33YItmkq3AObRYZyViighZ5uA58kXNnVyvZrEN%2FTq%2Fx7WyvRPw%2BGGq0gDPcbGod5x5ykogMyZOHg5FU7p54rpBfQUj9uzoxYEng0w9e4HzZ8BMekyW69BDo9wBJw0zPd27G7VUn7g%2Fv7Ee5XF7L%2BpZ6L5MjTL6JOGX8p6%2FNK98cGq87zX80a5RLVuc%2BoZy63TaibVvHpLIgnBY0mfwfl2ST0O8eznOjWTQ6sLQGP1p37ndEk48P0F45bUwtfGRe%2FtM1CLd%2B7%2F58bfZ7YW9e3WXXt3U2BH8PHUakKeLyz%2BV6mteaw0L0dkxNE0CpW%2BTvv8KrmEjjfNXPvIEUHAAqTROLlZQTvqL5r8h0x1vBn43ln5IyMKhEGbHHvxcHY9fFpbCmvtNR%2BXayyIjFNL5maCsuZHAd%2FWQwwhTzVqEzm7sJVwqMO3wTdmZS4cJ8gjMXUD%2BEsy3%2F8hZDWrUtDPOh9Zr1B075JS47XTO1GwxZ2fbAEyeNVSBJSB%2FKvGEh2GJQiKWVtY4rdhSjcsJ6HJv%2BPqRFn3qWQBMk2tyqLdsUK6mihk%2FZzh3SQAWVGeCPAK9XpHU5rn0lcUK6w1kvxLv5rwOAEz7xqyihv5NDia5MqH20fCWwFrsN7mIx8IQ6mvyQuJf37YDDujMjJBjqkAf%2B5ojuevLas9VwNwJh4VER2XpXWhvKvuYFUZ31C86Z2PouRVIwh%2FVXQAcSgTlau1hNTVjdHlduHKCW3WMkYUgLcyVYqBlNbFGUs83cgQParG59OEs%2BTAzJnMDjiLsQVBi0EwjZ%2FQ2wvwWciub9wOQWLtF5h5JMtOvdwz%2BNazb0FpmyLKJEZqFgELEhZo3Le11ZBoYgWMiIBXIJTlh%2FsDwkPvopQ&X-Amz-Signature=952b2d13a91f582af0d10cfb466d6cd094fa9921503f7f1a08fd2f20b97dbf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
