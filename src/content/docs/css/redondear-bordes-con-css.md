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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3BB2YA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3hr3axMOs4DyGBIToTvjQNBd7VP3oWkQXam4X%2BEE2AAIhAM2ZYDx1fqf1YxEtHzzsG64XiKGIW3gMCnfVfii56Ba7KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx%2B5HlJ4YUwHXx8aYq3AOCqTBM2BLG3ZUI8bS1Qy35Vl1jPCir7C5lBcI6JsPLtzcuoJI%2F1XY6QHZ88D41C9wEiMIKVUlPq%2B13fx9UyDpAJOyCj9BuzBcVCuuAADtx91u3r8vwIiwBraR7Qa1d0xf7h0nW15W%2BfJs2H250yWqtge8Ieq96UtnmQE0bpP%2BrPywybDodczsQk6GBf1Y4X5iyIuQNti7oP3wDUzLMxgn6HpIKD%2BMPg%2BrqlRxbo2xBSg8b3kTXjA0z87%2FNCnzxSimdOorP36xRuSvqScCl8%2BUbOzHT967uTpE%2FX0cwLW5KkxLX6gMmjXj21IYoa90HZTC%2BK9YUaRwQoClxsqDi7rxiW5QUrHjtUIGPZv%2Fo1acX2jwltvL7pPIce24iWPqJWqCsvq509CvEBl4x%2FDBEx6jdaAmQNu4fa59Q%2FK739DYs8ZSlSwmNyA7jhkY9Flgl1h8bhS8fX5CvR%2Br7G5Ub2dBNTpbImg%2FJ5HNiZUePth44WKcaf1UjEOEt4TJvrgY8OTog2BhxDta5GHDetsLpAt4yqrzkuP6LwL7c8HO2Or65SCyFssPa1TTuOKwpAKV7Vcx5wG4E9H%2BaOytwrwPLIgAixbdmMI31rzgi8Kssgc66M5taQbzPX3fh4V6b1DDro9TJBjqkAQdTdoQXBicOungHWaZ2bwvHeFH0BPiDU7wv7l6Ig9wI2wT0UbXkHjUutVXDC0rgIvhBIFSt4UcPIAgoLc29RiPwVhrpb1%2BmtIbe6JjiQzAeGzxN8K7xQkbcIA8K2TENeWgMIpRcCzXKJqhtAG3o3KjrbfOYnLEQz1Bn7n6Cyq7%2BUSdtDHVnfM6ejEfl5GTm9Hnwd%2FwaP0yLA%2BDVOPT8mis2q9D5&X-Amz-Signature=ab8c31f948fafe8229e9e1bbc8d661ab44a16a2b7ab612d86f35edcbe2b09388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3BB2YA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3hr3axMOs4DyGBIToTvjQNBd7VP3oWkQXam4X%2BEE2AAIhAM2ZYDx1fqf1YxEtHzzsG64XiKGIW3gMCnfVfii56Ba7KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx%2B5HlJ4YUwHXx8aYq3AOCqTBM2BLG3ZUI8bS1Qy35Vl1jPCir7C5lBcI6JsPLtzcuoJI%2F1XY6QHZ88D41C9wEiMIKVUlPq%2B13fx9UyDpAJOyCj9BuzBcVCuuAADtx91u3r8vwIiwBraR7Qa1d0xf7h0nW15W%2BfJs2H250yWqtge8Ieq96UtnmQE0bpP%2BrPywybDodczsQk6GBf1Y4X5iyIuQNti7oP3wDUzLMxgn6HpIKD%2BMPg%2BrqlRxbo2xBSg8b3kTXjA0z87%2FNCnzxSimdOorP36xRuSvqScCl8%2BUbOzHT967uTpE%2FX0cwLW5KkxLX6gMmjXj21IYoa90HZTC%2BK9YUaRwQoClxsqDi7rxiW5QUrHjtUIGPZv%2Fo1acX2jwltvL7pPIce24iWPqJWqCsvq509CvEBl4x%2FDBEx6jdaAmQNu4fa59Q%2FK739DYs8ZSlSwmNyA7jhkY9Flgl1h8bhS8fX5CvR%2Br7G5Ub2dBNTpbImg%2FJ5HNiZUePth44WKcaf1UjEOEt4TJvrgY8OTog2BhxDta5GHDetsLpAt4yqrzkuP6LwL7c8HO2Or65SCyFssPa1TTuOKwpAKV7Vcx5wG4E9H%2BaOytwrwPLIgAixbdmMI31rzgi8Kssgc66M5taQbzPX3fh4V6b1DDro9TJBjqkAQdTdoQXBicOungHWaZ2bwvHeFH0BPiDU7wv7l6Ig9wI2wT0UbXkHjUutVXDC0rgIvhBIFSt4UcPIAgoLc29RiPwVhrpb1%2BmtIbe6JjiQzAeGzxN8K7xQkbcIA8K2TENeWgMIpRcCzXKJqhtAG3o3KjrbfOYnLEQz1Bn7n6Cyq7%2BUSdtDHVnfM6ejEfl5GTm9Hnwd%2FwaP0yLA%2BDVOPT8mis2q9D5&X-Amz-Signature=1bcc681e18387d4f0818cac9fd21160bfe0e6a123a0a639dd4d436cabf43279c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
