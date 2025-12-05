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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7KM4YU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtGlLVXkPge%2BP%2Ftbi6vXRiRDAgCodG6YQD2M9ndogYAIhAJjDx3kyM5ziUh0Pekk0UKXkDu1sxzUD9qB5gVs8NhL2Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwDNT37Vi7QejUCTBgq3APuYojFJdbNLfCo6EMQd5sRaA3LbBchIJ25bKimJ%2FPd1zuJVqUnWSzXoeBmjpYy0AxRkMPXkPgj7PTuVVkU%2Fb25eNyrIR2JuSfgL6ppp6HJERhF9d01uEvxC2DFQc6z7FAGkLvzBttjfxpbJqzrmXePhwqONSkNRzt51GkjVUGBLcD58kyIErsfdPirnF2JZ2zHTkTcO6YnxDfRSBL3GVA1Xaif1tEx1rTuiLUQW8O7GF8nKzpijbuKB5WdhZYU70aLX1NTIAMDM34nounpvuQVd66k0b245lRy%2BFt14NYI9gm1hUfrMVUBaKYLVg806FevZ1YU%2BMsWzjrXptDKU%2F8QZLYo3QVbdPy4ynkDqCxKzS%2FrD7RGYK6S6SRwaXnTY3kg23grdshZDhoNdAqXMJ41VR0c2rO7NbIQYUrGsM8D%2FtFhvPVNOWKdqiwzgszr6e%2FhpbqWH3cyeRcDqy4O4BqfqZNYZiEdcK3EpkzrfvUM%2FF0t7n9Y4z%2Ftcp2iUNmMiUxropcYNqVekx6MgCRwCFE5Q2tjZiUtwdTwlL9o5ZxSY2B5jH06W9kyoORWB5wRNUl1XW4jD%2BkARJZ%2FCm6ihq0hCjtIvNmb33d3aYVClykEglGNt1QslQNNc4yqITC7xs3JBjqkAZxjuJebScmiD4%2BQO9ofahkqcBcvAkHAHe%2BjUcBHcUU56SvRMOjIw5%2FCA76ZHMIWbdzlUelKUIwfKGwDP8obTtfYrLx19tStEaHTfB6Mqyh4pStqWJAkXFQQixZwNEtGAJaCPQcs1bj9V9sZ%2FlYxjIoLpOs9nyAPFUq3hdOvSjyptiEkFu0rJ8Vg2pFPw5BDKIQSBzqYUEtZ8xjq12uKBldjZHmw&X-Amz-Signature=c56b42ac6c7edb2574cfd5baad244c9afca74a13e5d74462b5ca4c25cbda0c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7KM4YU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtGlLVXkPge%2BP%2Ftbi6vXRiRDAgCodG6YQD2M9ndogYAIhAJjDx3kyM5ziUh0Pekk0UKXkDu1sxzUD9qB5gVs8NhL2Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwDNT37Vi7QejUCTBgq3APuYojFJdbNLfCo6EMQd5sRaA3LbBchIJ25bKimJ%2FPd1zuJVqUnWSzXoeBmjpYy0AxRkMPXkPgj7PTuVVkU%2Fb25eNyrIR2JuSfgL6ppp6HJERhF9d01uEvxC2DFQc6z7FAGkLvzBttjfxpbJqzrmXePhwqONSkNRzt51GkjVUGBLcD58kyIErsfdPirnF2JZ2zHTkTcO6YnxDfRSBL3GVA1Xaif1tEx1rTuiLUQW8O7GF8nKzpijbuKB5WdhZYU70aLX1NTIAMDM34nounpvuQVd66k0b245lRy%2BFt14NYI9gm1hUfrMVUBaKYLVg806FevZ1YU%2BMsWzjrXptDKU%2F8QZLYo3QVbdPy4ynkDqCxKzS%2FrD7RGYK6S6SRwaXnTY3kg23grdshZDhoNdAqXMJ41VR0c2rO7NbIQYUrGsM8D%2FtFhvPVNOWKdqiwzgszr6e%2FhpbqWH3cyeRcDqy4O4BqfqZNYZiEdcK3EpkzrfvUM%2FF0t7n9Y4z%2Ftcp2iUNmMiUxropcYNqVekx6MgCRwCFE5Q2tjZiUtwdTwlL9o5ZxSY2B5jH06W9kyoORWB5wRNUl1XW4jD%2BkARJZ%2FCm6ihq0hCjtIvNmb33d3aYVClykEglGNt1QslQNNc4yqITC7xs3JBjqkAZxjuJebScmiD4%2BQO9ofahkqcBcvAkHAHe%2BjUcBHcUU56SvRMOjIw5%2FCA76ZHMIWbdzlUelKUIwfKGwDP8obTtfYrLx19tStEaHTfB6Mqyh4pStqWJAkXFQQixZwNEtGAJaCPQcs1bj9V9sZ%2FlYxjIoLpOs9nyAPFUq3hdOvSjyptiEkFu0rJ8Vg2pFPw5BDKIQSBzqYUEtZ8xjq12uKBldjZHmw&X-Amz-Signature=069a765bca329edc335e3545e313f09e8c4e18a64a9875435b6e393426ced09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
