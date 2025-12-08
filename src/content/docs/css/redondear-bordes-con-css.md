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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K622PVO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvVGKRq%2Bpyw3EZUEW51H1gq2SnHQN4gu7kFSp%2FMTNPTgIgQoFYci2oc69JAz0%2FYtUclB57UH5ensb2sYC9DCwogv0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR1wi3No6AbC%2ByV7ircA3XyGr2bGQHrg51mlU0RaWAhPAcMbuMCuUWZOwaZ9WQFn4FuIUtjHeSuV0u%2BlAbFx1Bixo8ijEIQ5MHH7mWD3RuscCwS7eX3wGA1mGrkuug6JbQikrRWWPEoHrmCpdBN5S24s4fuJ2ateXOp8qpYKOxnn3KgavMQUl9aG02KY6SyVncWjlAVyO%2BvsRA8i06M3P26nrLaaZ4c1mmZrc3%2BE7DtvG3Ggm%2Bk7oR9K2rs2ZgSqE9UGV%2B7hvwxy2sQIW9HaVzEaT7OeJ%2Fx%2F33Q1dpnz9IokapqYikWsiI86qLk6oCt4v%2Bn7DX3nd2AfPPmvyUaJY%2FfFvdbTxp9haplEXWA0Nehy6dENnk72TbHp7z4KKQ%2FFd2MthF6jg1ny%2BgcluwbMX6qdsWQMqYyoTjP%2Bi6QpYfRyVim3PQbfy6AiWoO4vlaVeN1HBelIRR5%2FPRvv5TxP5isIXz5NG8DhpLGeyber7yewP96rmAa1rvnAD9%2BBSyvluDtGwp8PaVEASHmOuG39U%2FGlZ4k%2FFqPsuzKSV1sgeUzfo4Zy6kyoa83PjDOIit%2BuFIPxcQYELEuJsC7FMEqveFY3PIVHUNJkFrIuq7kEgmbPP4v2jNzd2FRJShkYdAeDRfP%2Bl6O74mOLwfCMPqP28kGOqUB8BsKJaM674xaKrYJiXoWLKsq5m9l0Rgmm%2B1QvJjZxERuX3bN6XFHwAKqGowV%2BXdccYBmxlXmoTWkZgoXOD%2FETRXd%2FZweVjCTxS1ii4b%2BVghTsqZgn6TEyW%2B5RtL2tMPULKWIfk24T6t2FtEzCFlScUDGdbgrAX6%2FEB5Q6Z2KN%2BiBHSND5CkaLkTw0YGKRdJJUiag85nmswBtnFZ%2FWrz8CVzAgqTV&X-Amz-Signature=9d6d4ec1874bc5cca08e0dfa9f121e328a11031c37b64f0c3c98b60b9ddc66c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K622PVO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvVGKRq%2Bpyw3EZUEW51H1gq2SnHQN4gu7kFSp%2FMTNPTgIgQoFYci2oc69JAz0%2FYtUclB57UH5ensb2sYC9DCwogv0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR1wi3No6AbC%2ByV7ircA3XyGr2bGQHrg51mlU0RaWAhPAcMbuMCuUWZOwaZ9WQFn4FuIUtjHeSuV0u%2BlAbFx1Bixo8ijEIQ5MHH7mWD3RuscCwS7eX3wGA1mGrkuug6JbQikrRWWPEoHrmCpdBN5S24s4fuJ2ateXOp8qpYKOxnn3KgavMQUl9aG02KY6SyVncWjlAVyO%2BvsRA8i06M3P26nrLaaZ4c1mmZrc3%2BE7DtvG3Ggm%2Bk7oR9K2rs2ZgSqE9UGV%2B7hvwxy2sQIW9HaVzEaT7OeJ%2Fx%2F33Q1dpnz9IokapqYikWsiI86qLk6oCt4v%2Bn7DX3nd2AfPPmvyUaJY%2FfFvdbTxp9haplEXWA0Nehy6dENnk72TbHp7z4KKQ%2FFd2MthF6jg1ny%2BgcluwbMX6qdsWQMqYyoTjP%2Bi6QpYfRyVim3PQbfy6AiWoO4vlaVeN1HBelIRR5%2FPRvv5TxP5isIXz5NG8DhpLGeyber7yewP96rmAa1rvnAD9%2BBSyvluDtGwp8PaVEASHmOuG39U%2FGlZ4k%2FFqPsuzKSV1sgeUzfo4Zy6kyoa83PjDOIit%2BuFIPxcQYELEuJsC7FMEqveFY3PIVHUNJkFrIuq7kEgmbPP4v2jNzd2FRJShkYdAeDRfP%2Bl6O74mOLwfCMPqP28kGOqUB8BsKJaM674xaKrYJiXoWLKsq5m9l0Rgmm%2B1QvJjZxERuX3bN6XFHwAKqGowV%2BXdccYBmxlXmoTWkZgoXOD%2FETRXd%2FZweVjCTxS1ii4b%2BVghTsqZgn6TEyW%2B5RtL2tMPULKWIfk24T6t2FtEzCFlScUDGdbgrAX6%2FEB5Q6Z2KN%2BiBHSND5CkaLkTw0YGKRdJJUiag85nmswBtnFZ%2FWrz8CVzAgqTV&X-Amz-Signature=ee0bca2e1b0a2a02ca0144802d9434fc18cb3621f2ed8d35a7726e576f30ecf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
