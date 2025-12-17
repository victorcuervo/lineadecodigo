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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6XJVTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk%2FF3mLMtbRaJGzMS4x%2B%2BUSLdT7qDRc8BPPGyZMOCSqAiA9bz9WjibTxzERzo0P0JUuXZLMNozkOqVta2fNk7YIZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZm75PtVw7E7w%2BtBKtwD3RywIMWr6X6%2FBvL8XyaBu%2Bd5vjkTaXgjMNQjZv7JjETtAGPc1tIOnpeZfLNISCyb7NeWN08MHCQ71QoHbkeIJ5UAC4k2c%2FYrWkXLpMS89QzRM9fnYyrZIqCTm1ih%2F0uDpLS%2FYt5O6ZZIhdYDo9VKlxTplN9Mp0s%2BRgVeDPwmebabKn9gmLsitxOES9u3E9cNoQxxMr%2BlDXEoVNxKtwwGvdGShHU0lZKZzr5z6c%2FUf6w8Nq114vkW8EL3PZlaOMDgGTRo8RAxQjkyOBcVOsYLpDHlyaimfiKj29DgqsML3R4czj84bJIytgPqFYjaNSa0Bz4GHHqPpgFYV5LL5dwUNGjyGnOknpU%2BJp48iLQltNykaSQ8Hyed3MMl4FWtdlTI%2BOwhSy%2FSGpTxScVutNq0XbNstuWyWbOZjjsloIdiktO50gWvVzfmPzlBSTx5%2BzmDK%2FFqm6NCzA%2FctW3g41gcLX5EIEd8OeKE30NVR%2F0qC5jAGHjxPZmvG5U6G557sPctQE5q1cvjiNmZ4nCjgsk0A5g28dM8qn%2BAb5ATE%2BrW%2F1vaeAUXl8cb43idqoQa%2Bkf5gFNQO6HGxdFuPgOIIuiNvqv7XHS%2Bn0t2iNGeEW5nFOCjTw184tAmqZdZLSUwmZ%2BLygY6pgH9qKaLbPlYEMXKOYVMBY9lCg3DLndORdsWfLK30CSdJKbML5Tm1OW2WAGYUmz2D%2BMA4fnmizxhetyczVRssOfHqwnUgih1BX%2Bo5MGMA8CABUZG1SICQry%2B55P6y3w8bdByqK%2B%2FTh1tUP3Zt%2BYUwVZ%2B728%2FH2erQaHGNNPvTzB7FaV7eKMjfmwxxlbEE8clsaLE1c%2FdYsyvtGDD%2Bh2FTeemXE6PLZzA&X-Amz-Signature=e17abd66e7d55c74bcd1730acc1676c81fc0b841021e982ea8ec6d6c0cd0acca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6XJVTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk%2FF3mLMtbRaJGzMS4x%2B%2BUSLdT7qDRc8BPPGyZMOCSqAiA9bz9WjibTxzERzo0P0JUuXZLMNozkOqVta2fNk7YIZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZm75PtVw7E7w%2BtBKtwD3RywIMWr6X6%2FBvL8XyaBu%2Bd5vjkTaXgjMNQjZv7JjETtAGPc1tIOnpeZfLNISCyb7NeWN08MHCQ71QoHbkeIJ5UAC4k2c%2FYrWkXLpMS89QzRM9fnYyrZIqCTm1ih%2F0uDpLS%2FYt5O6ZZIhdYDo9VKlxTplN9Mp0s%2BRgVeDPwmebabKn9gmLsitxOES9u3E9cNoQxxMr%2BlDXEoVNxKtwwGvdGShHU0lZKZzr5z6c%2FUf6w8Nq114vkW8EL3PZlaOMDgGTRo8RAxQjkyOBcVOsYLpDHlyaimfiKj29DgqsML3R4czj84bJIytgPqFYjaNSa0Bz4GHHqPpgFYV5LL5dwUNGjyGnOknpU%2BJp48iLQltNykaSQ8Hyed3MMl4FWtdlTI%2BOwhSy%2FSGpTxScVutNq0XbNstuWyWbOZjjsloIdiktO50gWvVzfmPzlBSTx5%2BzmDK%2FFqm6NCzA%2FctW3g41gcLX5EIEd8OeKE30NVR%2F0qC5jAGHjxPZmvG5U6G557sPctQE5q1cvjiNmZ4nCjgsk0A5g28dM8qn%2BAb5ATE%2BrW%2F1vaeAUXl8cb43idqoQa%2Bkf5gFNQO6HGxdFuPgOIIuiNvqv7XHS%2Bn0t2iNGeEW5nFOCjTw184tAmqZdZLSUwmZ%2BLygY6pgH9qKaLbPlYEMXKOYVMBY9lCg3DLndORdsWfLK30CSdJKbML5Tm1OW2WAGYUmz2D%2BMA4fnmizxhetyczVRssOfHqwnUgih1BX%2Bo5MGMA8CABUZG1SICQry%2B55P6y3w8bdByqK%2B%2FTh1tUP3Zt%2BYUwVZ%2B728%2FH2erQaHGNNPvTzB7FaV7eKMjfmwxxlbEE8clsaLE1c%2FdYsyvtGDD%2Bh2FTeemXE6PLZzA&X-Amz-Signature=a079b92e7bdd88d20d305ec0e012baa2509d7e9cd889834f5baf73de206ea670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
