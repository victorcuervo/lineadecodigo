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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOQAJND%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpHjtXD0IaodPg3p1AP1M2%2Fll1OUjU8S0XDYccCwFveAiB8ppE%2F8AEjKoykubX2DkfcB34Y%2BxLw8F0M7mlT01yA%2Byr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMG8FVdUGtE5midk%2BzKtwDTzy1QnHgeaDE8a%2BYcYsDvsnhqWq9qlTtAYTqXuX7YMNnWNzUerACgBN64XJ7cJZvg6L5CKbR%2BXbecx8853MbpdQ%2FWGmV7AG0dFvcghHPefRsTqUn5R%2FnrA%2BaRpbZhoI%2BhrJpuapcPe5TmpFAeeobF8XwNr4KNHiVn%2B73MqRwqYK4xPCrMfmnKQDfjShblf54tSAhFGb8QotbpdHSP1qjDeQM6xizYwr2Zqz9uqEcmqqvSIWNrBekQz2BEY15fdd6tyu5r6d5dKxPWw9rCKginJl%2BD5dI7Nmc0xXB3wqBl8FBP3ZfZHg7F3YPDhrT%2FWhwcTG9ICuJAtQCyFIvbBwdL3ZRvC9A2XcUHcz7r1jPgCuyt0U8BLwv8mAwrzbgXk9PRPs9Q7%2FQdsCeb8otTJ1WbvfcR0Lj%2B894HUDGHdgvW2uQgbTOskZgiXUtOsZ5QwbBuEx23mjJDJ3cjaUVNbYtvntvgTJ381%2FJXzXe4JptKfOHm7gku1rrP5KLIxHrr0diQcGHjLc8Tzr%2B%2F0k2Oed91fOdPkXL6kgKbUnst6ZgG2JHgg%2BjDUgp3GLR3EQf5NZzU8KABHT%2F9u5Zip1rwfdvWWkUMAbeACVK6Re%2F596bMpLwDzc19kjLnr%2FbK70w%2B6bJyQY6pgFa%2FJ5MLNJnd1hbk6gsvMX2MhFHCdvAFaW57lKMr3JZDV3WFszS71iEYbC1h%2FGgHi3ARqKEmYoh%2FOZD1nQwsTV4ecTIOC8SnGsFvqdHYUt%2BzUkBCyMWylTEPqrvyt%2Bat9IcVl4MvfNpk9JWVbAvLNoe9oEfcfc0ZlCYPI3r8y9EPuGHzVnd4mam3atEY%2BYpH%2FvYgolaCTCL5o%2FolKjHDd5ZRgcFRW1n&X-Amz-Signature=535fa7ffa28874ca0292a9b1ae67275dd61f6c12cf2490d7f68c67aa33e1dec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOQAJND%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpHjtXD0IaodPg3p1AP1M2%2Fll1OUjU8S0XDYccCwFveAiB8ppE%2F8AEjKoykubX2DkfcB34Y%2BxLw8F0M7mlT01yA%2Byr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMG8FVdUGtE5midk%2BzKtwDTzy1QnHgeaDE8a%2BYcYsDvsnhqWq9qlTtAYTqXuX7YMNnWNzUerACgBN64XJ7cJZvg6L5CKbR%2BXbecx8853MbpdQ%2FWGmV7AG0dFvcghHPefRsTqUn5R%2FnrA%2BaRpbZhoI%2BhrJpuapcPe5TmpFAeeobF8XwNr4KNHiVn%2B73MqRwqYK4xPCrMfmnKQDfjShblf54tSAhFGb8QotbpdHSP1qjDeQM6xizYwr2Zqz9uqEcmqqvSIWNrBekQz2BEY15fdd6tyu5r6d5dKxPWw9rCKginJl%2BD5dI7Nmc0xXB3wqBl8FBP3ZfZHg7F3YPDhrT%2FWhwcTG9ICuJAtQCyFIvbBwdL3ZRvC9A2XcUHcz7r1jPgCuyt0U8BLwv8mAwrzbgXk9PRPs9Q7%2FQdsCeb8otTJ1WbvfcR0Lj%2B894HUDGHdgvW2uQgbTOskZgiXUtOsZ5QwbBuEx23mjJDJ3cjaUVNbYtvntvgTJ381%2FJXzXe4JptKfOHm7gku1rrP5KLIxHrr0diQcGHjLc8Tzr%2B%2F0k2Oed91fOdPkXL6kgKbUnst6ZgG2JHgg%2BjDUgp3GLR3EQf5NZzU8KABHT%2F9u5Zip1rwfdvWWkUMAbeACVK6Re%2F596bMpLwDzc19kjLnr%2FbK70w%2B6bJyQY6pgFa%2FJ5MLNJnd1hbk6gsvMX2MhFHCdvAFaW57lKMr3JZDV3WFszS71iEYbC1h%2FGgHi3ARqKEmYoh%2FOZD1nQwsTV4ecTIOC8SnGsFvqdHYUt%2BzUkBCyMWylTEPqrvyt%2Bat9IcVl4MvfNpk9JWVbAvLNoe9oEfcfc0ZlCYPI3r8y9EPuGHzVnd4mam3atEY%2BYpH%2FvYgolaCTCL5o%2FolKjHDd5ZRgcFRW1n&X-Amz-Signature=277a58e32ab03dcba199d320c28784dc5411c492dbea523657ab610af3a80df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
