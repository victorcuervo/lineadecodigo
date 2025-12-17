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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQHQTBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb9Onm5RcenoYwZPzErh3h7%2BBQOFnxBmy%2B%2BQS5wAwuXAiEAq7sQPo6ScP8vhFtx2EyfRXTlg53scEiNExO0ifcko04q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDINtuucVIStcFTrilCrcA0vUpJyaeovO6a9KC4g0B338itSEeN1dAobpOo8M%2FC%2BTZxmI7Pg95VdPtGRRl%2FvHKI40FV15ZeC4z35emL0yRlC1vl%2F8SqowknHofZ7V%2Bm6kbyNNQp2PsEaCgV%2FfC51ry1uUpc69SvdG8glW%2FaMfbhKumlNkB8yKWzyhES3hQI1nhBqQuQhASEGJ99FKe6mSOsLzYKEcgcENvpgpgjxriQ5kRvRxEcMUQQr6CVSQ12Cj189VhvkXoqWNgWYw420%2Bw2U6TEQTSq2a0J%2B20PYHQeQKhcdVIfVdhp7qO0II4JoM54QsBZ2l9S%2Bx1dv8hxGLd949MyFfnowZIlgFDdz75ir29RsGokUoW9vbh4MM8ib4mJByOkzMaBzlayCFp8i0AERbxJzyQSM7UbgQuWwP%2Bpi0V4NJ9Cscyr8ak2j1IddT6WTqxfr4HM7yz8RhFKkD9JVHuARzL%2FPdkN5PcLs8Ej7T6ufqEmgWjCto9SMACgCUjEc2qZpHAq08Mukx0ocCH%2B7NUrPEKjg0ItNHpmBH6EN1GYPAoFYNGAdSrmgv3Hesp8aShhyfcVb4aXdGKjMbverYV7bvxMhkmTKXy7mVlTAOBg9TEpdxUiUlJsldWQlVyMSOj3ya9J5UcqVwMMLhisoGOqUB9pe9AFDw5YwNV3etpLWF95c6bSDxkeZZmBPZ2r3IrO9ZIBfIKDw%2F9p%2FtvQaqckauEnr0TadeKPZZXtc2rIwpG8JIDWf%2FcrJmkenzcmK0%2BIlHkZnCHr5wG1MIR6sfoZZlGqR%2FAVx6ofT%2B2WSn%2Fuy4KFx%2FJLCyMq4RhKOuarvtQQzrZZfBrQ6BKMo0M%2Btf3CjZ4qLEAU8JDcS7oESXHEzL0fnCv7xT&X-Amz-Signature=9ce6cab32d41bfad1a7643e467b95300708a1be2fc6808b369dabc16811302ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQHQTBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb9Onm5RcenoYwZPzErh3h7%2BBQOFnxBmy%2B%2BQS5wAwuXAiEAq7sQPo6ScP8vhFtx2EyfRXTlg53scEiNExO0ifcko04q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDINtuucVIStcFTrilCrcA0vUpJyaeovO6a9KC4g0B338itSEeN1dAobpOo8M%2FC%2BTZxmI7Pg95VdPtGRRl%2FvHKI40FV15ZeC4z35emL0yRlC1vl%2F8SqowknHofZ7V%2Bm6kbyNNQp2PsEaCgV%2FfC51ry1uUpc69SvdG8glW%2FaMfbhKumlNkB8yKWzyhES3hQI1nhBqQuQhASEGJ99FKe6mSOsLzYKEcgcENvpgpgjxriQ5kRvRxEcMUQQr6CVSQ12Cj189VhvkXoqWNgWYw420%2Bw2U6TEQTSq2a0J%2B20PYHQeQKhcdVIfVdhp7qO0II4JoM54QsBZ2l9S%2Bx1dv8hxGLd949MyFfnowZIlgFDdz75ir29RsGokUoW9vbh4MM8ib4mJByOkzMaBzlayCFp8i0AERbxJzyQSM7UbgQuWwP%2Bpi0V4NJ9Cscyr8ak2j1IddT6WTqxfr4HM7yz8RhFKkD9JVHuARzL%2FPdkN5PcLs8Ej7T6ufqEmgWjCto9SMACgCUjEc2qZpHAq08Mukx0ocCH%2B7NUrPEKjg0ItNHpmBH6EN1GYPAoFYNGAdSrmgv3Hesp8aShhyfcVb4aXdGKjMbverYV7bvxMhkmTKXy7mVlTAOBg9TEpdxUiUlJsldWQlVyMSOj3ya9J5UcqVwMMLhisoGOqUB9pe9AFDw5YwNV3etpLWF95c6bSDxkeZZmBPZ2r3IrO9ZIBfIKDw%2F9p%2FtvQaqckauEnr0TadeKPZZXtc2rIwpG8JIDWf%2FcrJmkenzcmK0%2BIlHkZnCHr5wG1MIR6sfoZZlGqR%2FAVx6ofT%2B2WSn%2Fuy4KFx%2FJLCyMq4RhKOuarvtQQzrZZfBrQ6BKMo0M%2Btf3CjZ4qLEAU8JDcS7oESXHEzL0fnCv7xT&X-Amz-Signature=55bab49ecab8b173c07fe62e37f14884a4700fea3252a42308f8f6834abb40b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
