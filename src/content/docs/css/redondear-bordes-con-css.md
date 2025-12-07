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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SF7GMNK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7cCOJiN4Fhd1pbEvte5RgL8VLpzkp0hNPURGmhWn4hQIgPBWrZDciGcqB2xwhwV3HaZD0S2AZ9LEk79uetVShUSYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiRvlKP%2FfZVNzfUGSrcA9lfukhHXXBp3x%2F5lNz2IjZh6l2mUyYM8Q4pO2BAQJVvRTbYyrKAM7Ec3nWW2onTICdDS%2B%2Bcdi%2Bi%2Bg0A5jC7kzLleNw9BxQbn8OYnizjYhiYE3%2BYahvxVV8uOk%2BPRmdAvQVqbQyAbeja%2FUIHSWxPNOai8sdqx9KC3pwEgJI%2FejpOgKADvM%2BXdM6PQw27KiOLjvIzVfNbvLtuB6OtiKWCIRoGvgz1bbOW8l5biJZ4DiV%2BiR7cFtSaTj0PKzFIsD4YDAI%2BaVjhQMTYv2Smjx3wCxKcHk1UWczPixm1%2B8llrcNhDuaj4HwNnULG%2F3L2fZdxqbdngakVb4Xp0LCuex8Lu9USDH5GULj6AjumPY9jRg40l5JIuakzhgC898zgrs%2FDn9xSRNL8dZxrv%2FLrGkGjv4dRJ%2B31gASMnjje0YKEygNRAd1aNSj6WxKSMgQlWi4nzrCrv97bGiD9m1hcVdsZRln1q5ygP8NX5TtizHEXmF1AWK7leXe7Vc0dwXpf8Pj1l3vOKPby4bzoNQbqdxNct%2B8P0hBWLlgF%2Fm7sAB4t2cGKrB%2B3hW%2BmLjz7uwkbLmU2VXloiKy4qQ0etMumKjD76br0ukN64EGLvdMp6lfJNC9gLYo6ZvZvo%2B1zMPjiMLOj1MkGOqUBS7HdVj6qvoNQLFJlmUlPJVjoQv7yeVjxjKlRjwfk4tXkUUhJ0AeJj47y569lAVsEdMuQDDE2bmnxRoquMhoApvtrci1WOwh%2Fe78oTNQN%2BLeaiKfTBD68P%2BMfpgdb0YmCYOw1sYdjKEfc1l77UCdVyKn1eevyuHWC9PMi9e6EYyuWCJTWowi51qFUC7e5MhO4abzy8a8YEOVLBVWzz%2BjnmHxCzS7J&X-Amz-Signature=f12d80846944d2a7a82b35161e7062d4b21de9fc1b7a7173e20ec5e4c214deb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SF7GMNK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7cCOJiN4Fhd1pbEvte5RgL8VLpzkp0hNPURGmhWn4hQIgPBWrZDciGcqB2xwhwV3HaZD0S2AZ9LEk79uetVShUSYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiRvlKP%2FfZVNzfUGSrcA9lfukhHXXBp3x%2F5lNz2IjZh6l2mUyYM8Q4pO2BAQJVvRTbYyrKAM7Ec3nWW2onTICdDS%2B%2Bcdi%2Bi%2Bg0A5jC7kzLleNw9BxQbn8OYnizjYhiYE3%2BYahvxVV8uOk%2BPRmdAvQVqbQyAbeja%2FUIHSWxPNOai8sdqx9KC3pwEgJI%2FejpOgKADvM%2BXdM6PQw27KiOLjvIzVfNbvLtuB6OtiKWCIRoGvgz1bbOW8l5biJZ4DiV%2BiR7cFtSaTj0PKzFIsD4YDAI%2BaVjhQMTYv2Smjx3wCxKcHk1UWczPixm1%2B8llrcNhDuaj4HwNnULG%2F3L2fZdxqbdngakVb4Xp0LCuex8Lu9USDH5GULj6AjumPY9jRg40l5JIuakzhgC898zgrs%2FDn9xSRNL8dZxrv%2FLrGkGjv4dRJ%2B31gASMnjje0YKEygNRAd1aNSj6WxKSMgQlWi4nzrCrv97bGiD9m1hcVdsZRln1q5ygP8NX5TtizHEXmF1AWK7leXe7Vc0dwXpf8Pj1l3vOKPby4bzoNQbqdxNct%2B8P0hBWLlgF%2Fm7sAB4t2cGKrB%2B3hW%2BmLjz7uwkbLmU2VXloiKy4qQ0etMumKjD76br0ukN64EGLvdMp6lfJNC9gLYo6ZvZvo%2B1zMPjiMLOj1MkGOqUBS7HdVj6qvoNQLFJlmUlPJVjoQv7yeVjxjKlRjwfk4tXkUUhJ0AeJj47y569lAVsEdMuQDDE2bmnxRoquMhoApvtrci1WOwh%2Fe78oTNQN%2BLeaiKfTBD68P%2BMfpgdb0YmCYOw1sYdjKEfc1l77UCdVyKn1eevyuHWC9PMi9e6EYyuWCJTWowi51qFUC7e5MhO4abzy8a8YEOVLBVWzz%2BjnmHxCzS7J&X-Amz-Signature=c7a842ea13f5d19f7e8243f43bce6d501c07c82e3613174a8486d3bf2bf2a650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
