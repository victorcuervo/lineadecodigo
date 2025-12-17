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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYGYSKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS%2B1EJUC679fX96dJXujVpdHkf4jZGXas2Lel2b59kYAiB9kLhwnxnNyXUDELjONLkA6m6cYucJ75juLXxoQ%2F7E5Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOMKfrpez3sIB8vecKtwDEogy3TonVY12%2BXZdwFrYXLNFbNTAle9POb%2F7X0b%2FNP2VIV956NvcKZGtyy%2FW7nvZRQeCoIQI8CegX7TJ%2F3vb1lcvbpJPFd1%2FJPleL8ozcMVClWorJZR6sgDHCeMJbv5%2FusDOBNmDRiKUcNN3jpaaC8NojdDtjYSpdQUEuL3YpnPQQE6AjRCFc2EzhbuvtHprq7uVzVLQEWhooDAu6kG3M5TEqmO4JK%2BdxYu20wnOKMi4fdfEc1QekSS7ece5qmYIET%2FToe8QCrQz1%2BMKR9IQ2gvAQm5lPa%2FBcvoBfiwEUGdj%2BC6EXUGj2c9NnyPFndoRf2zTvY3ZAjHU4y%2Fj4pV1cOn41HdlGBkoHeGIKdW9OgGIwL7YXD4HeQ7MWaqDGjZNajBmlL2HotfWlrk%2BUgHxYx8kGMC9LkGzOApS7EEmA0qpkEps1rqbs5QkJGB0yJqL709jYxnyHlBDdnjse%2BoGXYoMEhpkzzzEcQaLHwCG6smDYmAstC3WIUabz3XTcU%2FARbLWdeGvoU9c%2FZpMtGdkhbDoKvjhM07dzsZnnZpI%2BN5gOqykNvSWC3zP1sqw5q4z5uwtWdpk1TaaHmcI%2BCfaGONRnmnWzQlFQXa53IGHsduOgVPxpHFfQQWP5R0wuZeIygY6pgEH9usQepMP%2BP7CX7O8%2FrV0cLqnKa7zTR%2B04kiusyf3sExG2dVwYI0OhMEKMHRkzx70x%2BqKhqqr%2BH5QnJvzaGIW91cukLdvXQi%2Fb6984hs5SD01MK5%2BC6pB6zvUVyivdqIQyz%2BVpF1XykwlJGXVN9CR2UmzuYXlNftOitdutNE%2BrA6IYtXPxQyIKNHXFQqqoQxsKBor4SEt%2Fp36AK9J6nG%2FgeB0WDpq&X-Amz-Signature=b6cf51c9ef85dddd329fc50ea84d000695d3c02b1578ab155e0a1e87b093d3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYGYSKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS%2B1EJUC679fX96dJXujVpdHkf4jZGXas2Lel2b59kYAiB9kLhwnxnNyXUDELjONLkA6m6cYucJ75juLXxoQ%2F7E5Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOMKfrpez3sIB8vecKtwDEogy3TonVY12%2BXZdwFrYXLNFbNTAle9POb%2F7X0b%2FNP2VIV956NvcKZGtyy%2FW7nvZRQeCoIQI8CegX7TJ%2F3vb1lcvbpJPFd1%2FJPleL8ozcMVClWorJZR6sgDHCeMJbv5%2FusDOBNmDRiKUcNN3jpaaC8NojdDtjYSpdQUEuL3YpnPQQE6AjRCFc2EzhbuvtHprq7uVzVLQEWhooDAu6kG3M5TEqmO4JK%2BdxYu20wnOKMi4fdfEc1QekSS7ece5qmYIET%2FToe8QCrQz1%2BMKR9IQ2gvAQm5lPa%2FBcvoBfiwEUGdj%2BC6EXUGj2c9NnyPFndoRf2zTvY3ZAjHU4y%2Fj4pV1cOn41HdlGBkoHeGIKdW9OgGIwL7YXD4HeQ7MWaqDGjZNajBmlL2HotfWlrk%2BUgHxYx8kGMC9LkGzOApS7EEmA0qpkEps1rqbs5QkJGB0yJqL709jYxnyHlBDdnjse%2BoGXYoMEhpkzzzEcQaLHwCG6smDYmAstC3WIUabz3XTcU%2FARbLWdeGvoU9c%2FZpMtGdkhbDoKvjhM07dzsZnnZpI%2BN5gOqykNvSWC3zP1sqw5q4z5uwtWdpk1TaaHmcI%2BCfaGONRnmnWzQlFQXa53IGHsduOgVPxpHFfQQWP5R0wuZeIygY6pgEH9usQepMP%2BP7CX7O8%2FrV0cLqnKa7zTR%2B04kiusyf3sExG2dVwYI0OhMEKMHRkzx70x%2BqKhqqr%2BH5QnJvzaGIW91cukLdvXQi%2Fb6984hs5SD01MK5%2BC6pB6zvUVyivdqIQyz%2BVpF1XykwlJGXVN9CR2UmzuYXlNftOitdutNE%2BrA6IYtXPxQyIKNHXFQqqoQxsKBor4SEt%2Fp36AK9J6nG%2FgeB0WDpq&X-Amz-Signature=d2d647764b7190ed7366a65d276a2cc4b6cee0171b6dd6dd10c07b24a4127ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
