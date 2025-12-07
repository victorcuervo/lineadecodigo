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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JTGMMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXGbM46oALNFUQ5ylu9ctwsJ7TwezifHF1FXVKl5JEQIgVQqFxdt08vALnVLvkULzYeVHe7C6iWFvkQaHczcW1mMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbxg%2BgQAa7wkS6AHircA79GwuUC56kxEUGZP2JIlKz55pVbweWfir5mZhHzKmV3nDZfi4WgBhZK%2Fu82gUyp93aTbVI4fJKtLhmUOMFG1qDu4y7E6CjB5YFWX%2FLvJX0evg1VbaKiz0pIH8Ztm10MgmloAmX60rl3E91gJwXKUju7EpmygswX4n71k2fwCVAEGtU3QvYi3I97eN%2FYMYx6R2CyxOXuUGOo0CE4KnEgQPijaLN7InDcP03n3AvIb%2B2as3ZqmE27U2h7xiT%2F0hNH0IRpCym%2BSNMnYpzPYCkjgwtSXHHkI1MXVBrby%2BoSceZa%2B6y2C7CJ2YLXb8Wx86Gr3npxi8KwXzam0Y79xMsq5j7ZBG9KrgR4EfHwp4ykXKRtyVy1Vv8D1Utx4oY08ADhH3arIX%2BgWlC%2FNcmSjGJcqRC4d%2FvvaMHzVeLqUppDG93Xu4F%2FV3ujYVEQCCy1%2B6A28Xu%2BlO7IubZMUwINKD8szoTo5Ja9XjoBbak0O0P9d4enoDb%2BKNZQktiv7pxyWEx0PHXRTYZePraNg8sGdIdbl11BwKUGbXzXcDkbgCaJc4zt%2Fhbkj%2B32ycMbiU5DnFYnTGXe49vZ3g5E8xIjChN5f82jETNN%2FqGkpIM9mmZfFHERVr98rVf95gkuFV5VMNC51skGOqUBi98M30w%2Bd%2Fds%2BLznS8V307v8A2fNLKxNHX8aogFOykXswYt6JJC1fQkFxI0q46zyNQqeql3CPKUVK2KTPuGuH1Wt5fETpw5FAqwEVnAgQ6A014isEdpn4xS4NgF0se5emM%2B%2BjMhDZdpHT7iAn4lmZmSH5hXbxOYxJ5XokpOXMpNh4ByuFU8%2B3laorkYDq4YrikuhRz929SxZbYIK18wHNymJ3ZpM&X-Amz-Signature=ab82b546b684a96829abbe981110149d598eb246875acc58a7f73dc4325dbaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JTGMMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXGbM46oALNFUQ5ylu9ctwsJ7TwezifHF1FXVKl5JEQIgVQqFxdt08vALnVLvkULzYeVHe7C6iWFvkQaHczcW1mMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbxg%2BgQAa7wkS6AHircA79GwuUC56kxEUGZP2JIlKz55pVbweWfir5mZhHzKmV3nDZfi4WgBhZK%2Fu82gUyp93aTbVI4fJKtLhmUOMFG1qDu4y7E6CjB5YFWX%2FLvJX0evg1VbaKiz0pIH8Ztm10MgmloAmX60rl3E91gJwXKUju7EpmygswX4n71k2fwCVAEGtU3QvYi3I97eN%2FYMYx6R2CyxOXuUGOo0CE4KnEgQPijaLN7InDcP03n3AvIb%2B2as3ZqmE27U2h7xiT%2F0hNH0IRpCym%2BSNMnYpzPYCkjgwtSXHHkI1MXVBrby%2BoSceZa%2B6y2C7CJ2YLXb8Wx86Gr3npxi8KwXzam0Y79xMsq5j7ZBG9KrgR4EfHwp4ykXKRtyVy1Vv8D1Utx4oY08ADhH3arIX%2BgWlC%2FNcmSjGJcqRC4d%2FvvaMHzVeLqUppDG93Xu4F%2FV3ujYVEQCCy1%2B6A28Xu%2BlO7IubZMUwINKD8szoTo5Ja9XjoBbak0O0P9d4enoDb%2BKNZQktiv7pxyWEx0PHXRTYZePraNg8sGdIdbl11BwKUGbXzXcDkbgCaJc4zt%2Fhbkj%2B32ycMbiU5DnFYnTGXe49vZ3g5E8xIjChN5f82jETNN%2FqGkpIM9mmZfFHERVr98rVf95gkuFV5VMNC51skGOqUBi98M30w%2Bd%2Fds%2BLznS8V307v8A2fNLKxNHX8aogFOykXswYt6JJC1fQkFxI0q46zyNQqeql3CPKUVK2KTPuGuH1Wt5fETpw5FAqwEVnAgQ6A014isEdpn4xS4NgF0se5emM%2B%2BjMhDZdpHT7iAn4lmZmSH5hXbxOYxJ5XokpOXMpNh4ByuFU8%2B3laorkYDq4YrikuhRz929SxZbYIK18wHNymJ3ZpM&X-Amz-Signature=d39f729e416b4089eaf6ef7d60d1bca68d21599c964e71ac93cb53873263d016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
