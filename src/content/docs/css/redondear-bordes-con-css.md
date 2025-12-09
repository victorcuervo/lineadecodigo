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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMP33DQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEPAFHphc6fyB2NVYib33ECcDeNW7%2FqRhf6zRtwyLmAiEA9Mt6%2FsLhgnc09GHQqDGYBtbArWEAhuiF1kaC1sp0r2MqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpPtggvQ%2BOhCbCAnCrcAylIboVtAcInFaFuzDOoIIA%2FgHiJ%2FnLwPbXmV9QasX1mcKmdCc8gu%2BOf94T03XQmCTZC%2FZYuUvQ0zfWPCf4iBCE5dRjoKFB%2FZ2v4LO1pQgBna8Y5kyAmEU7FtiMqbRXqc8lwPEgomVBU%2FrK9TyHqftLS9zmxCC3%2BThTx8QozPkznaYG0ri3K93x1WYwev3xnbhHPf%2F7aq35XTs5fGIlWU2DsVk3OAsSeqxXldTsH99hCW86cP653J7TF0Yofr8ioxNF87JGOrmQufB7LrZPPtgx6r2qA2v7rQFmSMkg4qOtrAvYkAceinTspGbZUYhSUFDcdoj0inWdtHYlo6dXxeIs3ir4KhVYqFXgi7uWsosfZPhIrDAB7p1cndieRddXjnQI%2BkmRe%2FYtNORbQqjcRNukcH3TLmRzeLC2bzpv32Z1exIUf%2B%2BhyFg%2Ba5GIEDC9EhO%2B9zEtWufcXB5paacPEe1rV3VpIW3hxwZRZcHbRUWxSWJ6mgeBJjxhdlhy7GbIgGMVVzJA8HlJRiPw%2FN5JV1ad8oKxMSMLoCYbSIuc9ag23ymoW%2Fshz3R0OnPyI9gxDESCPtfx45zAVH%2F3YwDzw3X%2BIzZhgDw5t0%2F2YUhAlJ6AawsCgiyLD24a28bWPMPLp3ckGOqUB7PkMJvvfWtuDanU31%2B5HxNW1NBf%2F5%2FX4R9C%2BWoIRemXq79lfTMtYdN7UTrnwUmk73qlvWm%2Fuzt%2Bg%2BYYSKZ13ADHYHSgk%2BEb6%2FUhx8xp0ziacl6Mmupc7JOlEFmKhgSBJGW1zvEO7u390ObSTbO1XcxkB%2Fbx%2BJbRoYDqWkppFX2fP%2BbVrqZcORBV4OXwOUS7oB95m9HEJYF25lFVKyFzTI5H%2FdOd8&X-Amz-Signature=06fb3d256757c0318481a454efca0b73d89920f1aa2a34ac2f2787692ee82a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMP33DQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEPAFHphc6fyB2NVYib33ECcDeNW7%2FqRhf6zRtwyLmAiEA9Mt6%2FsLhgnc09GHQqDGYBtbArWEAhuiF1kaC1sp0r2MqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpPtggvQ%2BOhCbCAnCrcAylIboVtAcInFaFuzDOoIIA%2FgHiJ%2FnLwPbXmV9QasX1mcKmdCc8gu%2BOf94T03XQmCTZC%2FZYuUvQ0zfWPCf4iBCE5dRjoKFB%2FZ2v4LO1pQgBna8Y5kyAmEU7FtiMqbRXqc8lwPEgomVBU%2FrK9TyHqftLS9zmxCC3%2BThTx8QozPkznaYG0ri3K93x1WYwev3xnbhHPf%2F7aq35XTs5fGIlWU2DsVk3OAsSeqxXldTsH99hCW86cP653J7TF0Yofr8ioxNF87JGOrmQufB7LrZPPtgx6r2qA2v7rQFmSMkg4qOtrAvYkAceinTspGbZUYhSUFDcdoj0inWdtHYlo6dXxeIs3ir4KhVYqFXgi7uWsosfZPhIrDAB7p1cndieRddXjnQI%2BkmRe%2FYtNORbQqjcRNukcH3TLmRzeLC2bzpv32Z1exIUf%2B%2BhyFg%2Ba5GIEDC9EhO%2B9zEtWufcXB5paacPEe1rV3VpIW3hxwZRZcHbRUWxSWJ6mgeBJjxhdlhy7GbIgGMVVzJA8HlJRiPw%2FN5JV1ad8oKxMSMLoCYbSIuc9ag23ymoW%2Fshz3R0OnPyI9gxDESCPtfx45zAVH%2F3YwDzw3X%2BIzZhgDw5t0%2F2YUhAlJ6AawsCgiyLD24a28bWPMPLp3ckGOqUB7PkMJvvfWtuDanU31%2B5HxNW1NBf%2F5%2FX4R9C%2BWoIRemXq79lfTMtYdN7UTrnwUmk73qlvWm%2Fuzt%2Bg%2BYYSKZ13ADHYHSgk%2BEb6%2FUhx8xp0ziacl6Mmupc7JOlEFmKhgSBJGW1zvEO7u390ObSTbO1XcxkB%2Fbx%2BJbRoYDqWkppFX2fP%2BbVrqZcORBV4OXwOUS7oB95m9HEJYF25lFVKyFzTI5H%2FdOd8&X-Amz-Signature=997b3c5b0290258ecedf850c693e96f5e01512931617e8945f8ae4e7dfa2e45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
