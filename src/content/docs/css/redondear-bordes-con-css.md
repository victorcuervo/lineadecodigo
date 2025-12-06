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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYMXQJT5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvLooeFVVCpceQUFsbGMQQ8SPJylbZWg2wGrnbKAv0IAiBAacoQuFKaJnrgvti0R%2BqfQwjA9JMpnWLZ2ATRiCETbSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMkydMZTZYkVJtMwafKtwDkhDYc2daSZ8hfH2SEiQfaUZor6kSPSlXKecZHxkhGLQuoYfvui3iPZmgiqMu9TAoM3%2F0aPV5meKjv2tHhoj%2Fq794gV0fe4ec8wSeScRquI%2BR31QeRvRo1%2FmTcGBC9IvjzPWgRl9CmvrySQRUcLqh9U5I9TsjNukKDKJ7t2Nu2pfYFlbK0BY8jhv3%2BS%2BG4ygNQCkppcLDbO0II84Z8WNpZ73SJFwpx5UcjwZQpXoGFOb4aYLM0I2XnKAkSpZKR7PilVwyXoZwNwiH2d2oin5My5rKQYzmHU9PTCQ3nVdP1H%2B490J0dFip4%2B296GhNjOXK%2FIl9o9KRVbzBztk2m73lsmvccI8mHyU9sRtZU8WkJn6vfvep4yhAiE1HXtDF13zXCLcxwOGoRydo5ZfSAivcHmyDfMphv6sr5VVQ27rmu5rvzx2RwrgnaRDiu8Z%2FUi2XuZfw6foWV8Jtk1YXhfoV1TsCk88msDtDL91z9YPXfYmQyhN%2BmVp787JUTqUoslxPXZajnfB26UnCCGv1PztcIZvYDTAK48e%2FNrjot6e88xi%2Fg9KyDhRuDDIAAhoOvDE1Z4wh55hP1sh%2FKY%2B1MAjp%2BkQX1zWAmzOAJDqOgfgC8pPD2xAhYGgbjeaBgW4wqevPyQY6pgEJZRT5b9SMGF3%2BoSZdy%2FukpR6VmhFz6Tjml4iaOH1t1Q%2FsZfzLYnkIiERWbl9lc%2BbEL5m5CnGM%2BzrJ6Rf%2Fh1YyqujflOf%2FK%2FsgNKuYzTu386M7RO6%2Fz1rpX4YxMnSf0Srk73IB%2FR%2FzSe2UiMNnFrjAp3ghllWhW%2BNyV%2BE5Pn35%2F1GRrzQZbZEpLc%2Bw6b2DLbFyLWQZYdMHFBW1XXkvde3hLhl1vKl2&X-Amz-Signature=d1fba5f2f386fdfdc1ca6a735cbf4d2157cc9f7f7df34aee3f3f4b74cf536d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYMXQJT5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvLooeFVVCpceQUFsbGMQQ8SPJylbZWg2wGrnbKAv0IAiBAacoQuFKaJnrgvti0R%2BqfQwjA9JMpnWLZ2ATRiCETbSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMkydMZTZYkVJtMwafKtwDkhDYc2daSZ8hfH2SEiQfaUZor6kSPSlXKecZHxkhGLQuoYfvui3iPZmgiqMu9TAoM3%2F0aPV5meKjv2tHhoj%2Fq794gV0fe4ec8wSeScRquI%2BR31QeRvRo1%2FmTcGBC9IvjzPWgRl9CmvrySQRUcLqh9U5I9TsjNukKDKJ7t2Nu2pfYFlbK0BY8jhv3%2BS%2BG4ygNQCkppcLDbO0II84Z8WNpZ73SJFwpx5UcjwZQpXoGFOb4aYLM0I2XnKAkSpZKR7PilVwyXoZwNwiH2d2oin5My5rKQYzmHU9PTCQ3nVdP1H%2B490J0dFip4%2B296GhNjOXK%2FIl9o9KRVbzBztk2m73lsmvccI8mHyU9sRtZU8WkJn6vfvep4yhAiE1HXtDF13zXCLcxwOGoRydo5ZfSAivcHmyDfMphv6sr5VVQ27rmu5rvzx2RwrgnaRDiu8Z%2FUi2XuZfw6foWV8Jtk1YXhfoV1TsCk88msDtDL91z9YPXfYmQyhN%2BmVp787JUTqUoslxPXZajnfB26UnCCGv1PztcIZvYDTAK48e%2FNrjot6e88xi%2Fg9KyDhRuDDIAAhoOvDE1Z4wh55hP1sh%2FKY%2B1MAjp%2BkQX1zWAmzOAJDqOgfgC8pPD2xAhYGgbjeaBgW4wqevPyQY6pgEJZRT5b9SMGF3%2BoSZdy%2FukpR6VmhFz6Tjml4iaOH1t1Q%2FsZfzLYnkIiERWbl9lc%2BbEL5m5CnGM%2BzrJ6Rf%2Fh1YyqujflOf%2FK%2FsgNKuYzTu386M7RO6%2Fz1rpX4YxMnSf0Srk73IB%2FR%2FzSe2UiMNnFrjAp3ghllWhW%2BNyV%2BE5Pn35%2F1GRrzQZbZEpLc%2Bw6b2DLbFyLWQZYdMHFBW1XXkvde3hLhl1vKl2&X-Amz-Signature=8833c87373938e07af5a9133da289e6355b357dad9448cbb0ba7903e0dec5ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
