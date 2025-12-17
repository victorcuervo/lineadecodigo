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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL33PPAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOXgi%2FUOMdjKkTDe7v0MJIYN1wD9b6XXAaCCZEJP4SAAiEA6FDoj2On9uCCr7B%2FZXxNifMYkkNS%2FsNnJTbXtvpbweMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEMu0tTe5wpZwYV38ircA%2FWx6GHtBihL5unjAbnEYDeMt3RBfZfzIdJV6BorVSzAtNQZdkPt2AILbqpOwfifDj7UEOrWCawmHAadOmVsDghpLNccQ%2FNX9P01FHjZbKQj6Re8soD%2FK2l9jb1l7eCFkI4slPgfAiy9m3BnJjxQz8GJYz1MX35RcsHQGsqV15Bss2Ft2ZkPOI3pCVvbs6UyA2aQoeRD7Ue5CG2%2Fer7HkuscC4H7RlVFkzwyZ9J3kiSTXKeJKX38fr4VH6tTeT%2FOEIYwCaF4M5LD9x8FSeHC%2B0lB2upzVLjFeGArFZjBAFhuBTb3bIYXNJboAfCDbEZHypYlim7%2FdDFx1riQSZe0QbZiILnSl5hOdDL%2FANd4Gh8mROuyINehU0vOM7RGqjiUyNqTsOKy5vWZMYxf1wjVZDNtcBBb0gg4AcWN81Vd3nuqMZ9FDcoJkbRKB2OhphlAIERg8RNG8iUBPX%2BjVChQjc0b8HsQOf18Divd7XvX%2FSMBwXTohzcD19F%2FT4KXY1wVC7ek4wTd23Q6%2BNGYaldfaXhSTlmz7%2BLeO03J4u4xHnbRoY49503Gbz5BMAZMNq13HdevJQWawz8EAGsmO%2F07y3S%2BYFZ6JlhA5AV8p94qLfLd%2Fa3UuqGvw5cIkKUGMNXvicoGOqUBe0tO0z2yKAVS08ZlAEr29oTSQpYgjPUPrJBRuidgNqdmHWwW8ejX%2F0hWlSZUP8mcvQJPGGSxyp8UCBz8MT%2Fz83GWnbIo6%2FYKFJYz0VlISzdK%2BIzLYqIp7Pksu1pIgAPzjEcCzS1rNoZwzv3iYvWjgQ7aAHen9oimvRe3K6UCTHnl%2FScbi4aMpHPhoRMS5IgG3H8ea8cC54z%2FXo%2BVgI2AIyp%2FSNPm&X-Amz-Signature=6ee07cc7c992795ae116a53cb2e783bc1125372488d13a009a0a82ea548775c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL33PPAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOXgi%2FUOMdjKkTDe7v0MJIYN1wD9b6XXAaCCZEJP4SAAiEA6FDoj2On9uCCr7B%2FZXxNifMYkkNS%2FsNnJTbXtvpbweMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEMu0tTe5wpZwYV38ircA%2FWx6GHtBihL5unjAbnEYDeMt3RBfZfzIdJV6BorVSzAtNQZdkPt2AILbqpOwfifDj7UEOrWCawmHAadOmVsDghpLNccQ%2FNX9P01FHjZbKQj6Re8soD%2FK2l9jb1l7eCFkI4slPgfAiy9m3BnJjxQz8GJYz1MX35RcsHQGsqV15Bss2Ft2ZkPOI3pCVvbs6UyA2aQoeRD7Ue5CG2%2Fer7HkuscC4H7RlVFkzwyZ9J3kiSTXKeJKX38fr4VH6tTeT%2FOEIYwCaF4M5LD9x8FSeHC%2B0lB2upzVLjFeGArFZjBAFhuBTb3bIYXNJboAfCDbEZHypYlim7%2FdDFx1riQSZe0QbZiILnSl5hOdDL%2FANd4Gh8mROuyINehU0vOM7RGqjiUyNqTsOKy5vWZMYxf1wjVZDNtcBBb0gg4AcWN81Vd3nuqMZ9FDcoJkbRKB2OhphlAIERg8RNG8iUBPX%2BjVChQjc0b8HsQOf18Divd7XvX%2FSMBwXTohzcD19F%2FT4KXY1wVC7ek4wTd23Q6%2BNGYaldfaXhSTlmz7%2BLeO03J4u4xHnbRoY49503Gbz5BMAZMNq13HdevJQWawz8EAGsmO%2F07y3S%2BYFZ6JlhA5AV8p94qLfLd%2Fa3UuqGvw5cIkKUGMNXvicoGOqUBe0tO0z2yKAVS08ZlAEr29oTSQpYgjPUPrJBRuidgNqdmHWwW8ejX%2F0hWlSZUP8mcvQJPGGSxyp8UCBz8MT%2Fz83GWnbIo6%2FYKFJYz0VlISzdK%2BIzLYqIp7Pksu1pIgAPzjEcCzS1rNoZwzv3iYvWjgQ7aAHen9oimvRe3K6UCTHnl%2FScbi4aMpHPhoRMS5IgG3H8ea8cC54z%2FXo%2BVgI2AIyp%2FSNPm&X-Amz-Signature=35e224022e5b7b267f521b09c373ce0e778b56057bcec0055c71d7a1b45c24f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
