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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOYSLWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdQwN04JNn%2FqXBBGHPAURhKuWqMKqxuTDouuYuXSzEDwIhAKUuPNstJR6Cp9GlxaRYKYYP6KOo%2F8OJm%2BQsPtCqw6RIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlL444uJ3vU8qYHRUq3APLwMgl9B34S6qCt5j6mi6Q5IkjpMjzQIM%2Fgw%2BY1XLf94aoZEPQeZpGDs966CuYvZibTl1gYhJ46Jj%2BfBoQ%2BmvYj8fx8Osx83nDKNZdYAywiC6qQy%2BiLRr1vcNINA4xDoW72UW85LsUbvGxFznf1nS5qF5ppAuxn5Knukson3m7uP9cpwoH06ktQtTRvI3PbqSdsD4ZBm6k0lv8aUQeRjG742IH83VGpXt7cLUDQ92R14v1QCLp49PJTBs9NMXEErDpyaLza6hXMb%2FNB0mfN%2FZEVCg9TKOBBaxC7rNswk3aJMvcobXxkWXD5Cwy9rvKVnRFWIcuP%2FxfIbdNiKRzb1%2F743mrbwd42Lmf0jnFZfKLmwTkpNf52Aja%2BR48URsFtc4R4qe5vqUs4DmCCIRMrTA98x41M388b11G99tW%2FIWr3IeMMnt%2BxbBgbTG6W1suwP17RS6O0LTiciEhh%2BHWYsJe9QHydxVxAzehEwfm6eyYLYzgKAowgv5ovBZxgxEOjmT32BUkgsFlN2y47l8hS6G1YwSJYo%2Fa%2BGb1ygQoRjafzCRPMOdDq%2F9V%2F%2FS2Tjf6v5vmlo72GJgpGDgoLiodEndKUL23eTRBNz8hWIkQ0isJ8r2N3AioaK6PlZc47TDo7dnJBjqkAbe9tONwO2o%2FMAcoj18qu9FE%2Bk4XZKUxNQF8Y2T%2BFJlka19m3TKq9xBNqmqY1dIujTF%2FECV6H1wSJJ9W%2BxmQHKL4vDkqiCql5%2FwyiWsDNGToG%2BuEJUfYEgUbZAsiAo8hW0Sy2op%2Bf2ExlJdjl8%2FzHfwlYe68Q2YtJVlpsmnA7Tr9gA7xbJnN%2FqTBSOo%2FhnkVMV4vjrNlfHn4o6qrxQkv9qB0QPNx&X-Amz-Signature=a9c451f5f2033a0633643a4452299f90f0ae64c42b350a69193c7feaf72f281b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOYSLWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdQwN04JNn%2FqXBBGHPAURhKuWqMKqxuTDouuYuXSzEDwIhAKUuPNstJR6Cp9GlxaRYKYYP6KOo%2F8OJm%2BQsPtCqw6RIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlL444uJ3vU8qYHRUq3APLwMgl9B34S6qCt5j6mi6Q5IkjpMjzQIM%2Fgw%2BY1XLf94aoZEPQeZpGDs966CuYvZibTl1gYhJ46Jj%2BfBoQ%2BmvYj8fx8Osx83nDKNZdYAywiC6qQy%2BiLRr1vcNINA4xDoW72UW85LsUbvGxFznf1nS5qF5ppAuxn5Knukson3m7uP9cpwoH06ktQtTRvI3PbqSdsD4ZBm6k0lv8aUQeRjG742IH83VGpXt7cLUDQ92R14v1QCLp49PJTBs9NMXEErDpyaLza6hXMb%2FNB0mfN%2FZEVCg9TKOBBaxC7rNswk3aJMvcobXxkWXD5Cwy9rvKVnRFWIcuP%2FxfIbdNiKRzb1%2F743mrbwd42Lmf0jnFZfKLmwTkpNf52Aja%2BR48URsFtc4R4qe5vqUs4DmCCIRMrTA98x41M388b11G99tW%2FIWr3IeMMnt%2BxbBgbTG6W1suwP17RS6O0LTiciEhh%2BHWYsJe9QHydxVxAzehEwfm6eyYLYzgKAowgv5ovBZxgxEOjmT32BUkgsFlN2y47l8hS6G1YwSJYo%2Fa%2BGb1ygQoRjafzCRPMOdDq%2F9V%2F%2FS2Tjf6v5vmlo72GJgpGDgoLiodEndKUL23eTRBNz8hWIkQ0isJ8r2N3AioaK6PlZc47TDo7dnJBjqkAbe9tONwO2o%2FMAcoj18qu9FE%2Bk4XZKUxNQF8Y2T%2BFJlka19m3TKq9xBNqmqY1dIujTF%2FECV6H1wSJJ9W%2BxmQHKL4vDkqiCql5%2FwyiWsDNGToG%2BuEJUfYEgUbZAsiAo8hW0Sy2op%2Bf2ExlJdjl8%2FzHfwlYe68Q2YtJVlpsmnA7Tr9gA7xbJnN%2FqTBSOo%2FhnkVMV4vjrNlfHn4o6qrxQkv9qB0QPNx&X-Amz-Signature=f13a770a9233bf6ddf46355126fac81a6c8ed6cd3ff0923d6fa3b7f8b6728d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
