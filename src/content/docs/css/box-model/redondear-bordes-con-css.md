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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWANVJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJghMxwiuQZgALRz6zxeBjmUea3HeM%2FIZxvVUKVbs9ZAiB9rOnsa3IVWgphwnz6K9curHHV5ZCQGYSIcGrsRb1jNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPysnR1ISkpKKfGBBKtwDd6xaMCTGSX%2Fq%2Fncx3WOCCZhGT22qYg8N7MRQjRCU%2FepONE4cy%2Bp2WfS4teRyNRZWCY39hcQbcxptK9rcwxsigD5JF9mC67uQmqFVGZw4cVQ34%2B2%2FmI%2FPkWJoaU6Va4Ris0r3XE3%2BwTqXGWg2tUJ7TI6Y%2FdXwFa%2FpOqz0HyohAOeTZcKCffuk%2Bc3sLRGh6fJc9l9dIH%2FN6tihNGC0WiVgPHH6YQVBDrsykRtG%2BgyJ0toQ%2FpcxqxTpFY03ipxodeAzEc5vBrGlZKQA4BwDzVLv8NbqF4bGZLY2tGpCCqc7tGlaKzsufTb4t5g4uH8whSZKDl2uOpfKB7aFm5LjqkQqlUyqUu1y7gPyKSNucNiRVZmxKZI5xugEjck%2F6MlB5TGVLQmNB6eWUXfswtsY8XoApJGuiuOj27Mmf%2F3xUkrcYVSQaD5WgnCZ7k83u3cWFDUTHLJ2QtKQ8PY33WQHzYVVdmwWMdlHHADPTQUl4zwoe0tKLILQBXLGsgkKBmqLsDrLf2EZj68rtf2F6wE4EaLahZcROyJLREnphwHpmK643nfteSMbDD75Z%2Br2%2BjrrNUiu%2F5LhTX36cqPY2La5ej03VD8UOrCDY8QBhArxinKZ07fbzV3e2EO7gLOV1M8wzJ%2BLygY6pgF%2FhPiD52e8alel4ElHmp%2B44LHENw9ECJzx0gCHxvli95d7BqRAWEM9k%2BfHYjjjWP0D9MLxsnsE8HqeD4I8azpNwCj2aYOE8xyYDL1kNAXDeg9MhwbocnN2FKMTXBxiXz05SBnxnFTrsFNQaQubzbxoCjoSMR9zp4ZYA5VL8KKtD9OGeZQ9xCN7b%2FzE56NBQNYXnVN6dJ%2B2KrD3pHBZmCxaUGOV%2FZxe&X-Amz-Signature=eb24bd3d0e2d12c13948161423142ca6e43fa40affdbc53cb53c4c94df23c855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWANVJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJghMxwiuQZgALRz6zxeBjmUea3HeM%2FIZxvVUKVbs9ZAiB9rOnsa3IVWgphwnz6K9curHHV5ZCQGYSIcGrsRb1jNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPysnR1ISkpKKfGBBKtwDd6xaMCTGSX%2Fq%2Fncx3WOCCZhGT22qYg8N7MRQjRCU%2FepONE4cy%2Bp2WfS4teRyNRZWCY39hcQbcxptK9rcwxsigD5JF9mC67uQmqFVGZw4cVQ34%2B2%2FmI%2FPkWJoaU6Va4Ris0r3XE3%2BwTqXGWg2tUJ7TI6Y%2FdXwFa%2FpOqz0HyohAOeTZcKCffuk%2Bc3sLRGh6fJc9l9dIH%2FN6tihNGC0WiVgPHH6YQVBDrsykRtG%2BgyJ0toQ%2FpcxqxTpFY03ipxodeAzEc5vBrGlZKQA4BwDzVLv8NbqF4bGZLY2tGpCCqc7tGlaKzsufTb4t5g4uH8whSZKDl2uOpfKB7aFm5LjqkQqlUyqUu1y7gPyKSNucNiRVZmxKZI5xugEjck%2F6MlB5TGVLQmNB6eWUXfswtsY8XoApJGuiuOj27Mmf%2F3xUkrcYVSQaD5WgnCZ7k83u3cWFDUTHLJ2QtKQ8PY33WQHzYVVdmwWMdlHHADPTQUl4zwoe0tKLILQBXLGsgkKBmqLsDrLf2EZj68rtf2F6wE4EaLahZcROyJLREnphwHpmK643nfteSMbDD75Z%2Br2%2BjrrNUiu%2F5LhTX36cqPY2La5ej03VD8UOrCDY8QBhArxinKZ07fbzV3e2EO7gLOV1M8wzJ%2BLygY6pgF%2FhPiD52e8alel4ElHmp%2B44LHENw9ECJzx0gCHxvli95d7BqRAWEM9k%2BfHYjjjWP0D9MLxsnsE8HqeD4I8azpNwCj2aYOE8xyYDL1kNAXDeg9MhwbocnN2FKMTXBxiXz05SBnxnFTrsFNQaQubzbxoCjoSMR9zp4ZYA5VL8KKtD9OGeZQ9xCN7b%2FzE56NBQNYXnVN6dJ%2B2KrD3pHBZmCxaUGOV%2FZxe&X-Amz-Signature=42d60e87ef6ab3db0ffa87e7759eb417340e2734faa13b51891cb5a972a507b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
