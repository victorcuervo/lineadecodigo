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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIWU7HP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FBJiUux%2BMAADUbMU60CZX0nC2vFvA%2B8AaaAXBC7smAIgKkP1EZmPhi3G7jIMaXFln6grqdTi%2FnG0ogbPu4a5d3wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL2A%2FgijMqaaK%2FTCvSrcA0ND2nhEUgwtsm9e6sDQ2dw05OH5CZ2iwz8%2Bo0nsB5isx6i218XSIKe117z%2Fo66vk8bVJ9ihGDEpl5y5R7NlvVKUb%2F2%2BgaszVD9EeFMDgN4nDoAKxntEgdghqkjVlj8BlK%2Fo92XpkAf0NQmO27q850VJ1GBV7lp0B0%2BhEPch51nypqttSAgjJ7vw5xUN%2Fh9MpS21dJAbeD74CbO%2BGxNuC4TsFnrO1Zjz%2FSW28rMVFtq8tYn4%2Flg8ug2aCFKLngOXJxve1TG8qcd7bptDyDJHffcjnlYrYhZYIYg3PIh8aGzMNlxSBf4Dx7MFy7gF3PHTlw22S%2B6oaiCSs9qSVufz5CNFxVyPr0OKU5nzHBKok%2BvK%2FA%2FSRKXO8JaqM65FMsZR3XsCw830MG1G%2BmEiyOQMeS4ht8cdfz1jC2vM374ureT2dhftH9wvVfg8gWl7SCaPqVhMZxsGr9V1eJrBJjXwuGbZRx5U%2BxA5SGsUeybVxQvWvB0z%2F5Rtg%2F%2FPOOYkg02y7OU5QSOvjMYhztIxr%2BqBPJidkImNRQAwUslGT65t9S8lORqlyFq0%2Blm1XricZ76HEt5DL8pFae3XmQRcKEUT8yKLPsE18EjAx8gIMV8ntaDQvIEddGtx5Jc8V2DHMM%2ByyckGOqUBxW%2BbB0qS9Ru42fUJq5N3A78w6AmKfBCzr%2FAjbJEk0scCHg2pV3urQxzV3atOAoq3YguppRXMaMVONNzfj5FbjSeDnE6EUHSwdqlb9DQbaTeg1ai1dVIvlzzYJlqF%2FNtis6pGFjLDwATh1LZnlRnuXgf%2FZNhzh%2FQjKLEyDm4NL0gHZM0TZZfAVaoUm084eAtSE2fxP99FsUBbtO15LJkIesfheXpc&X-Amz-Signature=04bbc130dcd914e5cb405560b2218b15a4c667cde923e58944110a99a9b29862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIWU7HP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FBJiUux%2BMAADUbMU60CZX0nC2vFvA%2B8AaaAXBC7smAIgKkP1EZmPhi3G7jIMaXFln6grqdTi%2FnG0ogbPu4a5d3wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL2A%2FgijMqaaK%2FTCvSrcA0ND2nhEUgwtsm9e6sDQ2dw05OH5CZ2iwz8%2Bo0nsB5isx6i218XSIKe117z%2Fo66vk8bVJ9ihGDEpl5y5R7NlvVKUb%2F2%2BgaszVD9EeFMDgN4nDoAKxntEgdghqkjVlj8BlK%2Fo92XpkAf0NQmO27q850VJ1GBV7lp0B0%2BhEPch51nypqttSAgjJ7vw5xUN%2Fh9MpS21dJAbeD74CbO%2BGxNuC4TsFnrO1Zjz%2FSW28rMVFtq8tYn4%2Flg8ug2aCFKLngOXJxve1TG8qcd7bptDyDJHffcjnlYrYhZYIYg3PIh8aGzMNlxSBf4Dx7MFy7gF3PHTlw22S%2B6oaiCSs9qSVufz5CNFxVyPr0OKU5nzHBKok%2BvK%2FA%2FSRKXO8JaqM65FMsZR3XsCw830MG1G%2BmEiyOQMeS4ht8cdfz1jC2vM374ureT2dhftH9wvVfg8gWl7SCaPqVhMZxsGr9V1eJrBJjXwuGbZRx5U%2BxA5SGsUeybVxQvWvB0z%2F5Rtg%2F%2FPOOYkg02y7OU5QSOvjMYhztIxr%2BqBPJidkImNRQAwUslGT65t9S8lORqlyFq0%2Blm1XricZ76HEt5DL8pFae3XmQRcKEUT8yKLPsE18EjAx8gIMV8ntaDQvIEddGtx5Jc8V2DHMM%2ByyckGOqUBxW%2BbB0qS9Ru42fUJq5N3A78w6AmKfBCzr%2FAjbJEk0scCHg2pV3urQxzV3atOAoq3YguppRXMaMVONNzfj5FbjSeDnE6EUHSwdqlb9DQbaTeg1ai1dVIvlzzYJlqF%2FNtis6pGFjLDwATh1LZnlRnuXgf%2FZNhzh%2FQjKLEyDm4NL0gHZM0TZZfAVaoUm084eAtSE2fxP99FsUBbtO15LJkIesfheXpc&X-Amz-Signature=201af83228b1f7eaa4c2877c58677905195ff24ad63a431c3ef384c6fdacd17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
