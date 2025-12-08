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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWKUQA5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDir4mIuyD8cFoIWbd0zynn0UaWUxfByHZn6FfwSaceEwIhANZxQM%2F23%2F30Oa%2B2CbLSb%2FvVGeXoV6RiI0FfYfeVAgWlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPIpBsrcfkNJJOrrEq3AOupx5sOwPY287nVEduucqkJYOVnT1UzxP6Q1OnRP1pysRnm6KA3EO9BllWJpxYqXVU1lfqgFI7O08ZcHnzg2L98XWr8m4NepEcbNXZe3941SioFqvO6yAqy2t3KDjKSPbf4gy%2Bw6Q9B%2BQJCvtlHqIiHIjjhrqBh9UZERoHHNlxTNJqsfB4k4wm5uEyE3mZMlXA5cOrPlzhPGMs7uWSOR0dp0Lptk2Qgxwfx%2BOHKurnEWgRNtTNZ%2Bol6AmjNKD65sGOhIgain39B%2FlczU%2BZ3%2B3m%2FG1Swf2uhU5mEYNRkiSbxHROKl4ityQPUzzG7CWcI8Rvi4bib1QaONZKI9WCmdi2hG19jPKZuWvJCm41iTEVbb91x7%2FcRiiHRfYj4iVm0xHfSplcb7I3nx%2Bw4q1ST%2FLCpLh%2BtFC8I30MbuhTNtJSQaORN0Uu8uxr1LBlfPjD6p9EePpt3kZT%2B2caYWslm7QG9j2m90b3sTm14Nr7BAnCCdIoFRzOHYzF6rEtsdYvhzD3cDfZLYzUN1P%2BTKt5A2VoZwWt1rhPc%2FA7vPU1RAtYWXS3LziwH4foHzQUa%2BLKwys7O%2FK69fmEnKXZgTnVDXffsBqMUGp9recn1rcldGi1zwHpe7XZcvN%2BpUSghjDEodjJBjqkAS%2F7%2Fb%2BJ7ewXc81VumidkgcGTAEC2vX1yq9upUIQMaEm8zYLKqz8D6rr36KnQxvUQ3UXJheSqnNudWwtsCmEBlbQFy5mLwggmFMS18xjl4qU0%2BTKQQ1bZh1mmJyMzbuCaLRBCgBiLzVQ31l56jf3sxKVn5RX%2FD7RBrfoVdvkWW7BkAYUqv97o%2BVjCqNAgj5olTmmWO%2B%2B7Tf8MwtSiRi%2FfBoAb%2FZC&X-Amz-Signature=b7cb6fd277dcb39a3d0d78e98348a26d25a96950743db25c681ced0237b5081a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWKUQA5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDir4mIuyD8cFoIWbd0zynn0UaWUxfByHZn6FfwSaceEwIhANZxQM%2F23%2F30Oa%2B2CbLSb%2FvVGeXoV6RiI0FfYfeVAgWlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPIpBsrcfkNJJOrrEq3AOupx5sOwPY287nVEduucqkJYOVnT1UzxP6Q1OnRP1pysRnm6KA3EO9BllWJpxYqXVU1lfqgFI7O08ZcHnzg2L98XWr8m4NepEcbNXZe3941SioFqvO6yAqy2t3KDjKSPbf4gy%2Bw6Q9B%2BQJCvtlHqIiHIjjhrqBh9UZERoHHNlxTNJqsfB4k4wm5uEyE3mZMlXA5cOrPlzhPGMs7uWSOR0dp0Lptk2Qgxwfx%2BOHKurnEWgRNtTNZ%2Bol6AmjNKD65sGOhIgain39B%2FlczU%2BZ3%2B3m%2FG1Swf2uhU5mEYNRkiSbxHROKl4ityQPUzzG7CWcI8Rvi4bib1QaONZKI9WCmdi2hG19jPKZuWvJCm41iTEVbb91x7%2FcRiiHRfYj4iVm0xHfSplcb7I3nx%2Bw4q1ST%2FLCpLh%2BtFC8I30MbuhTNtJSQaORN0Uu8uxr1LBlfPjD6p9EePpt3kZT%2B2caYWslm7QG9j2m90b3sTm14Nr7BAnCCdIoFRzOHYzF6rEtsdYvhzD3cDfZLYzUN1P%2BTKt5A2VoZwWt1rhPc%2FA7vPU1RAtYWXS3LziwH4foHzQUa%2BLKwys7O%2FK69fmEnKXZgTnVDXffsBqMUGp9recn1rcldGi1zwHpe7XZcvN%2BpUSghjDEodjJBjqkAS%2F7%2Fb%2BJ7ewXc81VumidkgcGTAEC2vX1yq9upUIQMaEm8zYLKqz8D6rr36KnQxvUQ3UXJheSqnNudWwtsCmEBlbQFy5mLwggmFMS18xjl4qU0%2BTKQQ1bZh1mmJyMzbuCaLRBCgBiLzVQ31l56jf3sxKVn5RX%2FD7RBrfoVdvkWW7BkAYUqv97o%2BVjCqNAgj5olTmmWO%2B%2B7Tf8MwtSiRi%2FfBoAb%2FZC&X-Amz-Signature=da4b9d7f781aa532b67fdbc27f4e0272b1a90fb04a37dbfbfeefc54c513e205a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
