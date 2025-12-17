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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKXJWCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhzREvU1%2B2wv6jok7hyQ7TequpX%2BcAasJyn%2BYQHvRl5AiBfh3bPlfa8gtnHQ2OLbeTU6yxDiREexbHHebexiW99ayr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJ%2BorMfIMbH2FWfDoKtwD%2FupkJK3TTXMlNP2feJqNJXwa7bxUnrYEtLx%2F8RTmgM31Evo70yzqnTcGv7tHqVeWAmlBLy%2FBxOtwjeOYgtn9qh0yVqWNb5zFMxwiM6bnhHvXbzZuZcj0FzWBpwUDAj0PDoSSVHQa7cTXegPqS9PsM49X5vXC7anbOySdXwiDC%2FEz%2Bj9yQIJFHGojtd1WaT2YOgfeens3iDaklb0WKU0ftP3Abv3IFgCLSv2lClcwIv9lm8JhnonFsY6Lmw0Fg4Of7Cipw8Y%2BwDFw8N4vFWRmCFnjhMM071FomlII7znzVHviANu%2B0ySftICrKgNB1kag636pRdhrcW8dHPgwZiiMcLXFKUcZka5OwtUfRIqWcUWr%2BDRo9mG7DhpmFVSwcR806S4CaYOW%2BZy3kmLfGeph6R2mVpn7vP0RhK3xE7dxXcnfyePZdMABcjfF1f9B9t0jZs0yVWWytpQsjSlxQI2rD%2BV4fh6Qyhbl7n9x0N7NWLTpDWVVtZS%2BVTOthzmrghUYhRPkAHN8Yb9j9TK7po6x5nJswd0tDRxsHvKH7Kdj4wpWRc8tyHkQdT1PHQujCyy5puZfVZpTkPOemajNfBGLZVzNOzli900v10O9HOo4HyB03JPTx%2BuiytKUQ4Mwp%2BmIygY6pgGjYv3C4cPYjCE3OdbXQ7eTHZ%2F0lHlAxDSEYmrz01ljALkZfKdtcV4P6SBzwbpr8sMKmZdDsw08%2BCtsDTRaBP1ql0Hp96DliQ%2F6apqBlYb7Q0ChB1VKhCFd0eK1AGgNMxaGU4lds%2BuaMp3THpV6D5jpLqjDHMXzn%2BofqeP85vpYau3ttlHpPEnfzVVy%2Ff5bHz5Sr0142q25R4YqjnVmBw930O52pBAy&X-Amz-Signature=6bab92f869986d6248c1747837ad90c51d7e1fca5c8d765627177edab6a4735c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKXJWCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhzREvU1%2B2wv6jok7hyQ7TequpX%2BcAasJyn%2BYQHvRl5AiBfh3bPlfa8gtnHQ2OLbeTU6yxDiREexbHHebexiW99ayr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJ%2BorMfIMbH2FWfDoKtwD%2FupkJK3TTXMlNP2feJqNJXwa7bxUnrYEtLx%2F8RTmgM31Evo70yzqnTcGv7tHqVeWAmlBLy%2FBxOtwjeOYgtn9qh0yVqWNb5zFMxwiM6bnhHvXbzZuZcj0FzWBpwUDAj0PDoSSVHQa7cTXegPqS9PsM49X5vXC7anbOySdXwiDC%2FEz%2Bj9yQIJFHGojtd1WaT2YOgfeens3iDaklb0WKU0ftP3Abv3IFgCLSv2lClcwIv9lm8JhnonFsY6Lmw0Fg4Of7Cipw8Y%2BwDFw8N4vFWRmCFnjhMM071FomlII7znzVHviANu%2B0ySftICrKgNB1kag636pRdhrcW8dHPgwZiiMcLXFKUcZka5OwtUfRIqWcUWr%2BDRo9mG7DhpmFVSwcR806S4CaYOW%2BZy3kmLfGeph6R2mVpn7vP0RhK3xE7dxXcnfyePZdMABcjfF1f9B9t0jZs0yVWWytpQsjSlxQI2rD%2BV4fh6Qyhbl7n9x0N7NWLTpDWVVtZS%2BVTOthzmrghUYhRPkAHN8Yb9j9TK7po6x5nJswd0tDRxsHvKH7Kdj4wpWRc8tyHkQdT1PHQujCyy5puZfVZpTkPOemajNfBGLZVzNOzli900v10O9HOo4HyB03JPTx%2BuiytKUQ4Mwp%2BmIygY6pgGjYv3C4cPYjCE3OdbXQ7eTHZ%2F0lHlAxDSEYmrz01ljALkZfKdtcV4P6SBzwbpr8sMKmZdDsw08%2BCtsDTRaBP1ql0Hp96DliQ%2F6apqBlYb7Q0ChB1VKhCFd0eK1AGgNMxaGU4lds%2BuaMp3THpV6D5jpLqjDHMXzn%2BofqeP85vpYau3ttlHpPEnfzVVy%2Ff5bHz5Sr0142q25R4YqjnVmBw930O52pBAy&X-Amz-Signature=2242e1987c3e5282b24dc99c3fde2bc8d24ace2217e604764e3553619622f4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
