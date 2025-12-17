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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJERWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjRb3C9HnMBaIDyiXQn3ENYl6Y9JNlYEq%2FTzOD4EaMQIgC1itYnXIh%2BUfaSnLDFQZowYoDlj6gtZzYIzNjAT7aYkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPliuz2lqruR5GLIESrcAyi2BXfqn5AtuoQQyV481q2MsiqpdCcY0vLpCN%2B9%2FJTSHpMS2i7OZuFabImJyMKjyXyxe62WIFYU499nEwgtMs7kh3id8edwPbBj8HVwiAfM58IDjvYJGs36drbiLaSY1mrHhoWft4F1tqk38dFHw1ubvX3rS0nQF%2B6kHtT5%2FHCzhAZzlZn2tSVAYOYC5xqhAHthByg7QrAL8Sz1NVha7Ieyain3CTbWjTizQF%2FmnEBJp%2Bv5yPLty6hV%2FVoNTfa4BVuOuO5pAlTFKp96FyJsUZ7uZPS8sRv5javPXAJXkBNavMtJ1JMONeresX8NTcuBVDjUaXe%2F4FONtMGdwFRaD5dhAHNN4PCVWzx9eWmYTWWXSudFoUJHQ9RurbT4XyufxhcnRgx%2FATnGl21OwdpX8tktMoPNjv5LwFIloDO74uhtLmQwMtxRt6g%2FFDfpGw8PeXtrhxXvBnu19Z6pQDySIz7vmAR5PQylr3Wqqa0IAcUClWZR53mVqbC674T5Qch2nzQ3%2BH4YJ1cDIflwOIbYwamEdm7msNoccuLyfH6peGHkwYQGvPsqvfOA2n2ROoLZkjol5o%2FC79Lz%2BNKk5X3jPP6hNKc6Gv1Q8Lku91osP0fgxKD%2Bc0TpEu38O%2F5OMN%2Bfi8oGOqUBsVClXplqQxmgytUuSkmr1%2FCHPHRcuMxZW0K7dKXC0QE8R0AeHWt%2F%2BvMp87pCnbs6D9yEGJFtJfB9F5wg5MjrAsd9ODckwcUYcuKb%2BA6yATLUlItR7F94XL%2F1UML5yuruPk8EYX09rgFOS0Fy16Snz6i7DQO8iQ4SYPa%2BXfGz2Z9w8cY6ZSx6IfShmOH9cMf%2BjsD2pfOAlO7AOcJyC%2BKGSAbI%2F4UF&X-Amz-Signature=4e934020aa6b86cb09525115eae8283c00169e6de6a7d85f56b22542750d4bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJERWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjRb3C9HnMBaIDyiXQn3ENYl6Y9JNlYEq%2FTzOD4EaMQIgC1itYnXIh%2BUfaSnLDFQZowYoDlj6gtZzYIzNjAT7aYkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPliuz2lqruR5GLIESrcAyi2BXfqn5AtuoQQyV481q2MsiqpdCcY0vLpCN%2B9%2FJTSHpMS2i7OZuFabImJyMKjyXyxe62WIFYU499nEwgtMs7kh3id8edwPbBj8HVwiAfM58IDjvYJGs36drbiLaSY1mrHhoWft4F1tqk38dFHw1ubvX3rS0nQF%2B6kHtT5%2FHCzhAZzlZn2tSVAYOYC5xqhAHthByg7QrAL8Sz1NVha7Ieyain3CTbWjTizQF%2FmnEBJp%2Bv5yPLty6hV%2FVoNTfa4BVuOuO5pAlTFKp96FyJsUZ7uZPS8sRv5javPXAJXkBNavMtJ1JMONeresX8NTcuBVDjUaXe%2F4FONtMGdwFRaD5dhAHNN4PCVWzx9eWmYTWWXSudFoUJHQ9RurbT4XyufxhcnRgx%2FATnGl21OwdpX8tktMoPNjv5LwFIloDO74uhtLmQwMtxRt6g%2FFDfpGw8PeXtrhxXvBnu19Z6pQDySIz7vmAR5PQylr3Wqqa0IAcUClWZR53mVqbC674T5Qch2nzQ3%2BH4YJ1cDIflwOIbYwamEdm7msNoccuLyfH6peGHkwYQGvPsqvfOA2n2ROoLZkjol5o%2FC79Lz%2BNKk5X3jPP6hNKc6Gv1Q8Lku91osP0fgxKD%2Bc0TpEu38O%2F5OMN%2Bfi8oGOqUBsVClXplqQxmgytUuSkmr1%2FCHPHRcuMxZW0K7dKXC0QE8R0AeHWt%2F%2BvMp87pCnbs6D9yEGJFtJfB9F5wg5MjrAsd9ODckwcUYcuKb%2BA6yATLUlItR7F94XL%2F1UML5yuruPk8EYX09rgFOS0Fy16Snz6i7DQO8iQ4SYPa%2BXfGz2Z9w8cY6ZSx6IfShmOH9cMf%2BjsD2pfOAlO7AOcJyC%2BKGSAbI%2F4UF&X-Amz-Signature=d2c1e366066486a2e98733f592506ba8f5bd0c1b921b1686bcb68034e610be49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
