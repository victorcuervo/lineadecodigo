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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=aef2be671e19fa35e6c7133b15ab252a76d55f2af2ae86617cd73c30f762457b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=3c5414e38718bf20154ab523227594274ca073d35417d3c23aaabefe46bcc96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
