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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKWUMGP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXegqu%2FlsJHglE2mX5SEwvyu1ACWLXzu7bED4Woc3azwIhAPd0wu0t%2FcCpTJ8G4MgseA51WKJp3nA3M8ts0WCiwWrVKv8DCHgQABoMNjM3NDIzMTgzODA1IgzqNiFy8PqygfHv4Moq3AO56m1Twe%2FsjtwNtQSq97xHYWD6EtgCS8Adb%2B%2FpC2qbbyDWYM4RLOhP7qbiJONI4%2FbOlQWOpKzOwgtypdQJ5BGrGE4ngqcpb9OZiNrAcEIdkSyJYngK51UT6DlprTcG8dkbGHRxR1CdYE6OBiZ0Uxaq1AXLLWrj9fjxBt9uyA1iRUM2WzScdVa3SCbsu1dAz7Y80Cb01J9eO6KplnXBeftjPY%2FnrRNTlAAzNZ0zStmjXo0KzqOXSLiMJXc0RrtAUBSvMSN7rB8sGTjE2Erh9CO1m318chSpAto9qLpBBsm%2FfP383vkI%2BhyZ%2FbZ8VBW0KM1wx%2FLYQnJhnPuC8GEmUNdKZoT2hiIgkrB6gYBKrCAkV92sx4Yf0uLm2VxenY7xPjGl7pf5XzJ8P33TcZPcJ2egsNKkD%2BNZihI0ElGuEqzaiq3oQ%2FvqGIxSW6LrNrKNIljC4dv1SBagK0%2FVxcVvsRagrU%2Bx8BCD35bNznsx6yy81ZlQYPwTdL%2BwcjlxD2HSvedrJokVZwceAo6aG1cX7mZZEA1sA7f%2Fboi%2BrSBQ79vSnhV86NOUvBfXOvwvxDLLHRHSmimrDBJii4zFftJZrO5fxYkzBfcxYHM1eDQyd4wDr7HkCMomJehTfQCAgjDUnYnKBjqkAfzzVhb9tK0XDJXSInWPz6gxK1wAqLIJXbFKVo6fNPgNQgBIL0kjNtJHYCjO7Qrzd6jwKjD0ze3k%2BVFffcBsKK1FjIYenaS%2Fsrs5RBdKbqTyi212FyPaQAsW9VvQtLxFji%2BrtAQlN1Q4fIT11sorVMA%2ByrgeMBhd2z9Ina0Z2BSSIfkkF6ZOjWxtwqWlxUZPOLGk1LdIoCHPGghBpRCXIQxw%2FsKN&X-Amz-Signature=fcfba6bd3b58dfc2ef6debe1c8e92173ae5d37ad28f4fb9173f4ad774e689561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKWUMGP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXegqu%2FlsJHglE2mX5SEwvyu1ACWLXzu7bED4Woc3azwIhAPd0wu0t%2FcCpTJ8G4MgseA51WKJp3nA3M8ts0WCiwWrVKv8DCHgQABoMNjM3NDIzMTgzODA1IgzqNiFy8PqygfHv4Moq3AO56m1Twe%2FsjtwNtQSq97xHYWD6EtgCS8Adb%2B%2FpC2qbbyDWYM4RLOhP7qbiJONI4%2FbOlQWOpKzOwgtypdQJ5BGrGE4ngqcpb9OZiNrAcEIdkSyJYngK51UT6DlprTcG8dkbGHRxR1CdYE6OBiZ0Uxaq1AXLLWrj9fjxBt9uyA1iRUM2WzScdVa3SCbsu1dAz7Y80Cb01J9eO6KplnXBeftjPY%2FnrRNTlAAzNZ0zStmjXo0KzqOXSLiMJXc0RrtAUBSvMSN7rB8sGTjE2Erh9CO1m318chSpAto9qLpBBsm%2FfP383vkI%2BhyZ%2FbZ8VBW0KM1wx%2FLYQnJhnPuC8GEmUNdKZoT2hiIgkrB6gYBKrCAkV92sx4Yf0uLm2VxenY7xPjGl7pf5XzJ8P33TcZPcJ2egsNKkD%2BNZihI0ElGuEqzaiq3oQ%2FvqGIxSW6LrNrKNIljC4dv1SBagK0%2FVxcVvsRagrU%2Bx8BCD35bNznsx6yy81ZlQYPwTdL%2BwcjlxD2HSvedrJokVZwceAo6aG1cX7mZZEA1sA7f%2Fboi%2BrSBQ79vSnhV86NOUvBfXOvwvxDLLHRHSmimrDBJii4zFftJZrO5fxYkzBfcxYHM1eDQyd4wDr7HkCMomJehTfQCAgjDUnYnKBjqkAfzzVhb9tK0XDJXSInWPz6gxK1wAqLIJXbFKVo6fNPgNQgBIL0kjNtJHYCjO7Qrzd6jwKjD0ze3k%2BVFffcBsKK1FjIYenaS%2Fsrs5RBdKbqTyi212FyPaQAsW9VvQtLxFji%2BrtAQlN1Q4fIT11sorVMA%2ByrgeMBhd2z9Ina0Z2BSSIfkkF6ZOjWxtwqWlxUZPOLGk1LdIoCHPGghBpRCXIQxw%2FsKN&X-Amz-Signature=0d3dc2009e3f9d1c98aafb1ebfd156343745d4c790278bb45eb728660f24b251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
