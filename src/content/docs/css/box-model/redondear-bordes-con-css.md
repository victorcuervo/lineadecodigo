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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJVVMSY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTFuTHEr2IlbjQ4juPtWgeNcapA4PpC1l2dv%2BKIVs26AIgEPNWrHm%2BI6b7haJrGc5qE1%2FaoYK0nCxRYX0HrM8zEy8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAjJsLN0hQXzdi0FQCrcA6QXGbef8lJjP2ix5RKjMHdV7PciTVB6eWvTTPF27SvX%2BJRaUTG%2B4k9Rwe%2FvYYx8DiTg1AxpzsoH1lPM0a95tRCo1PX1EI1OPSySKznO0yH3M7ujtcTSs2bkpfYL7qSd7hbVww6u8tlVen56rvSTmpQLyBHBu9v3HZMu7TId1p05rztUr%2FOyT6ORSBaLW1v3E6ba7VZN5j4TD2Zvn2Vrb40DPJdhwdBky6gMCnfnJVByWZdgtmSXjKZYRWdEOp24ix4LfkQ2nUOfmyIUFruTplmal8PHbCUxgzWaZSD%2BoW2liyHdg%2BcfZnYQ8P%2FR4rXuUkYPRfNAzYUw0TLaKfB9V6vbfWc7c9suLSX4RxGLiUvYIMsoTvNDNVZFUgUFYFcdWoI9vbaz6Fq0tQ0150xGzoXP8WjGbxOmEaVnn%2BTf37g09SaGFz85o5bma5ZqL2depRaLqr8pqssT0kDK5Q7%2FpBUHRO3BLCrPh4IQdPjUdt8BUsjlgJuUm1Is0wJ0ORqBAccVnPDWYQXB7hXxZlSJdlH8jOr4V2R8YqxbperQiYnL0Bn0emDNuQ%2Bcbe894yDcb1i8X0l6Unuz2p4zaClg8gdfw57F3CnFfvq%2Bmuj8gsDPS3qbKKl9O0xHscyiMP6qisoGOqUB%2FuXp9etFM5SmFw9tKZ%2F8hqKipcMeGBIvJdPLamJSJlNsYpf%2Fz%2BUGWOXfwAVEu2XKAgwhGWAhecBthCGoodA%2FqLrBJzaBmZdmKwwpz%2Bbn8fhpRcLQ6WdAJeEuQvCv2xunqU8NJAQ7omWWtMWu%2FvZtUAOVtwgKkpxq67Uvcok5quUhl2GyEbFn6BiaSjJ49yo9CUDUIAMc23vcBU6fhFm3YVubmWj3&X-Amz-Signature=ae679974e8b0c0df6e42dd3fa9028f35a6f04ee5ad5acbfeb3b4ca1d48fa3ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJVVMSY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTFuTHEr2IlbjQ4juPtWgeNcapA4PpC1l2dv%2BKIVs26AIgEPNWrHm%2BI6b7haJrGc5qE1%2FaoYK0nCxRYX0HrM8zEy8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAjJsLN0hQXzdi0FQCrcA6QXGbef8lJjP2ix5RKjMHdV7PciTVB6eWvTTPF27SvX%2BJRaUTG%2B4k9Rwe%2FvYYx8DiTg1AxpzsoH1lPM0a95tRCo1PX1EI1OPSySKznO0yH3M7ujtcTSs2bkpfYL7qSd7hbVww6u8tlVen56rvSTmpQLyBHBu9v3HZMu7TId1p05rztUr%2FOyT6ORSBaLW1v3E6ba7VZN5j4TD2Zvn2Vrb40DPJdhwdBky6gMCnfnJVByWZdgtmSXjKZYRWdEOp24ix4LfkQ2nUOfmyIUFruTplmal8PHbCUxgzWaZSD%2BoW2liyHdg%2BcfZnYQ8P%2FR4rXuUkYPRfNAzYUw0TLaKfB9V6vbfWc7c9suLSX4RxGLiUvYIMsoTvNDNVZFUgUFYFcdWoI9vbaz6Fq0tQ0150xGzoXP8WjGbxOmEaVnn%2BTf37g09SaGFz85o5bma5ZqL2depRaLqr8pqssT0kDK5Q7%2FpBUHRO3BLCrPh4IQdPjUdt8BUsjlgJuUm1Is0wJ0ORqBAccVnPDWYQXB7hXxZlSJdlH8jOr4V2R8YqxbperQiYnL0Bn0emDNuQ%2Bcbe894yDcb1i8X0l6Unuz2p4zaClg8gdfw57F3CnFfvq%2Bmuj8gsDPS3qbKKl9O0xHscyiMP6qisoGOqUB%2FuXp9etFM5SmFw9tKZ%2F8hqKipcMeGBIvJdPLamJSJlNsYpf%2Fz%2BUGWOXfwAVEu2XKAgwhGWAhecBthCGoodA%2FqLrBJzaBmZdmKwwpz%2Bbn8fhpRcLQ6WdAJeEuQvCv2xunqU8NJAQ7omWWtMWu%2FvZtUAOVtwgKkpxq67Uvcok5quUhl2GyEbFn6BiaSjJ49yo9CUDUIAMc23vcBU6fhFm3YVubmWj3&X-Amz-Signature=9164f61a8dfc0d8e2e7593073f211ec797752e3287415f788c2182c65ee7ca38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
