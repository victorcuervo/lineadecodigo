---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCIY437%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFolLLPoUaOMV0I1BTxP067tN9BFTRTTGWWV7I%2B%2BEZwLAiAvaSWdz3JoGJ9uzbeS6cDm0Sz7l%2BvrDhFDMLmh%2BxBGPCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMLYfV0SISySt7Ke0fKtwDXO9OruMI%2Bmeh%2B979gC%2BsakSkRN7HuMVt1VspVanv9nXh%2BNNK1eaXZVdDSavlFUcqGgeFl1kejBUbW9juRqa3XAvScnlD6l7p47MqmZ4ReyWUy3vqsOs%2B6U5E76sZol7t%2BjoDaHEt6DOPbUr0uQw7c9tcZJcvoimEyGLWvcjYf9OohCoGh%2Fnbr85ILq9nzus3mPJrmf2d4bHKkj%2B%2FhUlTvhDj5ebS3%2BA5T3kAM62eX%2BfUfCkRI1XPtZH%2By1RE3%2BRb03uAsxP5hc1BS%2Bx58xAlDdqG5%2BMbQurnK7Bd8G9bjchcfNArefJ9rPictXOuE5C1%2FRLIx8SPQT6lKal7AfECANPFAOGVVrWazsw4UAN3rHnZ4qfIWDbAIsFGF%2BrCunCv%2BgG1qEsfXngbphQP6WkOQXUnYt7MdWkzf7RFTE4JFLuraHAoNUTRbtjFtKnDAYWNNN3UHEvtGNFa7XcL5s9cfSVA6bI1Sq8d%2B%2FfEobwXO8OUqChEz%2FMQq3GvIOeO9z7l5wg%2Fh6HcH2YHg3UANyG4sQPguQww7SXMCSV%2BixLWyMcnliNIl%2B4z6E9et0aUUnMC76JRgHlqA7suIK%2FZL7CDxf3of98NLbYrq4mAsmPF0ftwmUmWEJwzaDWqgYcwnPrGyQY6pgGGYUyIbT8G70xWnyY0uGiUlzh75T3kLkh6Vq%2BN75MXKdLl1LYVpZonZ83NkL6EogWshNlh%2B0LG1D1ALN91NGeeIp6pRqJB0SA30ZrpnOb9LqC777ZXhtDw%2BE2LhQ5KLwIIXrTEYxR1%2FqrZy6htraclIE1EItrbDJ2mIaD3f%2Fir9aeW6rR5RC%2BDlNULnHkZ7CcX5bwV5IsDi%2BCdO7QzVDybfK8FO1k%2B&X-Amz-Signature=4497ac90d78c88ec7eac757a8517673fa7911da0da947c4be2b7153fb1925cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCIY437%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFolLLPoUaOMV0I1BTxP067tN9BFTRTTGWWV7I%2B%2BEZwLAiAvaSWdz3JoGJ9uzbeS6cDm0Sz7l%2BvrDhFDMLmh%2BxBGPCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMLYfV0SISySt7Ke0fKtwDXO9OruMI%2Bmeh%2B979gC%2BsakSkRN7HuMVt1VspVanv9nXh%2BNNK1eaXZVdDSavlFUcqGgeFl1kejBUbW9juRqa3XAvScnlD6l7p47MqmZ4ReyWUy3vqsOs%2B6U5E76sZol7t%2BjoDaHEt6DOPbUr0uQw7c9tcZJcvoimEyGLWvcjYf9OohCoGh%2Fnbr85ILq9nzus3mPJrmf2d4bHKkj%2B%2FhUlTvhDj5ebS3%2BA5T3kAM62eX%2BfUfCkRI1XPtZH%2By1RE3%2BRb03uAsxP5hc1BS%2Bx58xAlDdqG5%2BMbQurnK7Bd8G9bjchcfNArefJ9rPictXOuE5C1%2FRLIx8SPQT6lKal7AfECANPFAOGVVrWazsw4UAN3rHnZ4qfIWDbAIsFGF%2BrCunCv%2BgG1qEsfXngbphQP6WkOQXUnYt7MdWkzf7RFTE4JFLuraHAoNUTRbtjFtKnDAYWNNN3UHEvtGNFa7XcL5s9cfSVA6bI1Sq8d%2B%2FfEobwXO8OUqChEz%2FMQq3GvIOeO9z7l5wg%2Fh6HcH2YHg3UANyG4sQPguQww7SXMCSV%2BixLWyMcnliNIl%2B4z6E9et0aUUnMC76JRgHlqA7suIK%2FZL7CDxf3of98NLbYrq4mAsmPF0ftwmUmWEJwzaDWqgYcwnPrGyQY6pgGGYUyIbT8G70xWnyY0uGiUlzh75T3kLkh6Vq%2BN75MXKdLl1LYVpZonZ83NkL6EogWshNlh%2B0LG1D1ALN91NGeeIp6pRqJB0SA30ZrpnOb9LqC777ZXhtDw%2BE2LhQ5KLwIIXrTEYxR1%2FqrZy6htraclIE1EItrbDJ2mIaD3f%2Fir9aeW6rR5RC%2BDlNULnHkZ7CcX5bwV5IsDi%2BCdO7QzVDybfK8FO1k%2B&X-Amz-Signature=f2eecc728a4297af269eea21417f39ca8e4eb153b4cac46572bfeeb349a338b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
