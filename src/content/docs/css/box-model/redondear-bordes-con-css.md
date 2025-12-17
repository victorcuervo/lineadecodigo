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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMZO5QK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8K6Sqqq0rv5Oo17KBI%2FSl%2Bi%2BNHnYKUqIG%2FPBBoT9rQwIhAIYqXngn%2Bs9LFj98KqEEH9Y7YMlLukbl3Wu%2FkP77XATHKv8DCHQQABoMNjM3NDIzMTgzODA1Igzm4plFSkyuqAOFKXIq3ANA71sobmO70oldQhQYWd9l41jWlVFPZZc%2FmleDKByZNGEwl3Kr0l6sf02WpI8SIBwWRGIGgbn%2BcvlymZ1phULrrNRxWfkeWfK5LQU3ZaaMtUZQq6JjGCIYQIM1TTNMX4JFBDeG4hAgMwFkWGffeFxkM1NsZU9DgP2DL6sS7IvhRysa61E802XV0JN0881QnJoikdhAvT7EV14GzS1avLrqh%2B0c40zORdqT4Jk6FUQUfe%2BBUS0GJGzrZ6P2O2EqPDWYKcjPQR910vKdghAkgxYNThi22vOigDQOD%2FY7YdJ9ceG6f5D5g3%2FB6sx5dVWBGgAqh78zo27xaetZ1Xreq3Nl30HLQR%2BSeU3oVoWEk7KcWo2LwL4z%2BAzMYPiZ7XYNuAq92OGgrU4T2LoInGF8XhqyQaEgJxlCPvuEnLu8DGVJ1Qo%2FK9wIbmBo4YCcOu2pCfFVJwy8POeuy3ZPlSnBZmvwL8AQc0Dr9%2Beeza3nuL%2F%2FU4fpvRuxQ%2FxP6mREoE8OZANzS4reTF6%2BQz8i9%2F97ONxNEepSWJFDrLi%2BSx9Yqpix%2BVngYiE%2FeO74XzhqUEqAMssFtiCwrOI0Q9JOHC%2Bbouk2i6ew%2BiT3Vm2lxAvYz7ttAWnNphdz2sFhup2R1TC9sojKBjqkAfzO%2FtqwQXpCPlI%2BYN2ZhN7ENdAJY64fOOh5sYRD1s1FtMFQDjcpPtLQwM8lWprYcve31n413do9HQZsa3b8g1dZmwLTghghKTiY7Ik95lHfxaqyf3eXox9yoVMRbfbTGtUQPs3RfX%2Bv3fVeeoWLu3V7%2BBqdTMcF64%2BVNO36ttgdIJmLnRnClYRAiVNiuyo35f6WE8qeROFTgL2N%2Fuf6keO2L2fY&X-Amz-Signature=135df8b7d69dbc2c55e1aa7a516f0ab2cf96ec2da9996a8eb88dfbed63cb6840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMZO5QK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8K6Sqqq0rv5Oo17KBI%2FSl%2Bi%2BNHnYKUqIG%2FPBBoT9rQwIhAIYqXngn%2Bs9LFj98KqEEH9Y7YMlLukbl3Wu%2FkP77XATHKv8DCHQQABoMNjM3NDIzMTgzODA1Igzm4plFSkyuqAOFKXIq3ANA71sobmO70oldQhQYWd9l41jWlVFPZZc%2FmleDKByZNGEwl3Kr0l6sf02WpI8SIBwWRGIGgbn%2BcvlymZ1phULrrNRxWfkeWfK5LQU3ZaaMtUZQq6JjGCIYQIM1TTNMX4JFBDeG4hAgMwFkWGffeFxkM1NsZU9DgP2DL6sS7IvhRysa61E802XV0JN0881QnJoikdhAvT7EV14GzS1avLrqh%2B0c40zORdqT4Jk6FUQUfe%2BBUS0GJGzrZ6P2O2EqPDWYKcjPQR910vKdghAkgxYNThi22vOigDQOD%2FY7YdJ9ceG6f5D5g3%2FB6sx5dVWBGgAqh78zo27xaetZ1Xreq3Nl30HLQR%2BSeU3oVoWEk7KcWo2LwL4z%2BAzMYPiZ7XYNuAq92OGgrU4T2LoInGF8XhqyQaEgJxlCPvuEnLu8DGVJ1Qo%2FK9wIbmBo4YCcOu2pCfFVJwy8POeuy3ZPlSnBZmvwL8AQc0Dr9%2Beeza3nuL%2F%2FU4fpvRuxQ%2FxP6mREoE8OZANzS4reTF6%2BQz8i9%2F97ONxNEepSWJFDrLi%2BSx9Yqpix%2BVngYiE%2FeO74XzhqUEqAMssFtiCwrOI0Q9JOHC%2Bbouk2i6ew%2BiT3Vm2lxAvYz7ttAWnNphdz2sFhup2R1TC9sojKBjqkAfzO%2FtqwQXpCPlI%2BYN2ZhN7ENdAJY64fOOh5sYRD1s1FtMFQDjcpPtLQwM8lWprYcve31n413do9HQZsa3b8g1dZmwLTghghKTiY7Ik95lHfxaqyf3eXox9yoVMRbfbTGtUQPs3RfX%2Bv3fVeeoWLu3V7%2BBqdTMcF64%2BVNO36ttgdIJmLnRnClYRAiVNiuyo35f6WE8qeROFTgL2N%2Fuf6keO2L2fY&X-Amz-Signature=914fe5b71f5134ec96abea18a94c6e9b87a2dcfa7c0e74f0a2e3e43fd2967313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
