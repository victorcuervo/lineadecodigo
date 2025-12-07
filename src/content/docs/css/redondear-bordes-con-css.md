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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDORUDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5IVw9i60hG3h5FQqgMCv%2BTgojkDAnErFyy7PNj2baJAiBZMWFtkHzWXTT5MCyzi6AD2yzAEnGrTluoXynZOXUFgyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BuvYg2gBm6KUTnxgKtwD6mPyNi981J7UnzVFOhHFijOZET2zOw7X%2FO4hC97PKidTyTB0%2B6d9lAICn32ACuDcKGU2B2dWuyCiNKpzA8tbmUO4Ru49JD1I3CFOIxEoP%2BcSU9z7QwK8EnFixblZQ11B%2B9uDQSX2%2B7oSdt%2B%2BtJ2VOYxgOsr3jWkXrR7P%2B8WBGK8sWBPZ7dk5LR9GNsJFSEXif%2FZ%2FjIhgEifY5%2FWD9v%2FK4bTBkaa%2FDu%2BEX29%2BLSmqJ1JRCiFPHu8KRDoI7CXmKaCO%2F0%2FmOzJfR%2B8aRSptcBYxI2NeZ%2FQ3nXgGJKXwMFL5bOlqPgPaw0oNLR5eNWITi5UiyYxlT7Yxr5lFSjDzNo7kLdxnC%2BbJacGuqbWmF9UWac%2BhMjNa1kWDfl%2F8SuT%2BAFQD23QIfeDsMZ52wYqfqVcSwcy%2Fb7XaqLWG6uWhO9sX6QKI15O1UIXF4s%2FA9d1NSRTbVmUrc8NRo3I%2B3sLrvZ32aAduX%2BRz0cDH7vXDzCerMrcb7YocuElVx6vmFLpKHTP8IPqC6c%2BnNDY59TRGH0eAl010gEtI%2FgLGYdqkGBLNGQuptyVWtV9fTfR6gumhAErgrpopKTJH5h4dKE8jA0y1SbA63Uc%2FSqddJ3XX81FQc3Cfd7ibwLXX9y9WM70w75rVyQY6pgFiGrIGGHBpa1WUwRCQUl6Llp0sIHpkr61uJZkszpvE68JRyzYJbUmPbbN13bXAba%2Bg1bWvlkeSNqIoE%2Bx%2FDTGT0%2BhQaN3HphWkwEaNdf9yNfPRUYlh2sjZRygnJ8d02SMfO1iDTjp4Imtg4MC0PTNw1BcKNu3aQY3nhDHh4t7p1KMjTziWhGkSz4YvBXebA8A3YF7tJEcHz4LRqC42dN%2BRTQo1iVU9&X-Amz-Signature=d3093f43aadc82f1532c447ed3e7fbc456d21e78763b8da2e3d82f7017cd7420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDORUDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5IVw9i60hG3h5FQqgMCv%2BTgojkDAnErFyy7PNj2baJAiBZMWFtkHzWXTT5MCyzi6AD2yzAEnGrTluoXynZOXUFgyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BuvYg2gBm6KUTnxgKtwD6mPyNi981J7UnzVFOhHFijOZET2zOw7X%2FO4hC97PKidTyTB0%2B6d9lAICn32ACuDcKGU2B2dWuyCiNKpzA8tbmUO4Ru49JD1I3CFOIxEoP%2BcSU9z7QwK8EnFixblZQ11B%2B9uDQSX2%2B7oSdt%2B%2BtJ2VOYxgOsr3jWkXrR7P%2B8WBGK8sWBPZ7dk5LR9GNsJFSEXif%2FZ%2FjIhgEifY5%2FWD9v%2FK4bTBkaa%2FDu%2BEX29%2BLSmqJ1JRCiFPHu8KRDoI7CXmKaCO%2F0%2FmOzJfR%2B8aRSptcBYxI2NeZ%2FQ3nXgGJKXwMFL5bOlqPgPaw0oNLR5eNWITi5UiyYxlT7Yxr5lFSjDzNo7kLdxnC%2BbJacGuqbWmF9UWac%2BhMjNa1kWDfl%2F8SuT%2BAFQD23QIfeDsMZ52wYqfqVcSwcy%2Fb7XaqLWG6uWhO9sX6QKI15O1UIXF4s%2FA9d1NSRTbVmUrc8NRo3I%2B3sLrvZ32aAduX%2BRz0cDH7vXDzCerMrcb7YocuElVx6vmFLpKHTP8IPqC6c%2BnNDY59TRGH0eAl010gEtI%2FgLGYdqkGBLNGQuptyVWtV9fTfR6gumhAErgrpopKTJH5h4dKE8jA0y1SbA63Uc%2FSqddJ3XX81FQc3Cfd7ibwLXX9y9WM70w75rVyQY6pgFiGrIGGHBpa1WUwRCQUl6Llp0sIHpkr61uJZkszpvE68JRyzYJbUmPbbN13bXAba%2Bg1bWvlkeSNqIoE%2Bx%2FDTGT0%2BhQaN3HphWkwEaNdf9yNfPRUYlh2sjZRygnJ8d02SMfO1iDTjp4Imtg4MC0PTNw1BcKNu3aQY3nhDHh4t7p1KMjTziWhGkSz4YvBXebA8A3YF7tJEcHz4LRqC42dN%2BRTQo1iVU9&X-Amz-Signature=b0cb5d7f85a235b3daa2c387b0935a7459169c25a4580643ffefd207c1c13555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
