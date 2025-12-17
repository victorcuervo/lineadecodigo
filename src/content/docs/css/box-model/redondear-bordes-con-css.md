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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OS7XAFA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVOorzNF0JuRE8aMcKO6K%2BP%2FJx3bTmewPwDIXhMWb0%2FAiEA9sK7%2BuNEgb0cVTGgTTlLyAhq1UXBklWenC4sDj3zzc4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ12RMMCtygHwBeFUCrcA3PiPhuAw4S3q2OZywaFP5BVVNV6Xv9qM3NQwybzMlFlEGuAwpfNcEzKK7SC%2Fai1f%2BOunA5Dk0BC%2BZ4IK8NV8%2FePE2MFigW71oOrHNdEcAp8k%2F28VTMtbPgqQQBNBsWSG7ebWXKmFnF%2BlaUSZVTvlYEKnYcEl9gk0bFGdfisk6JymaSKquvUUeYG%2B1WFqVj%2F4Ha2c4Fm%2FHai7xaSf2zW0XbyveuRcbzCywJlYy%2BBwUvR13NatXBU1%2FhElEwJb4MXB96uWMzOXypg0VAtqBZy2me1fSTbgTvjlfObx53Xyt%2Bq%2B%2FBBfQ7HyY78BLi3CuKcy9nkY%2BsMUTsz95kQPpCBBNTXPfGkTuZ6Mud%2FUMfTOcd5OWsBKmVbCG3Hhrloj0jl%2Fw6BHm0xoIdI2FIoGbf1UCW0BOGesjthY6aSBVZA9RRDcBFZm4UB6BB1Hqm0RmIqbqQssahWtQHhnndctyvdWJxbvmvS4YGALaJ3NasUJZdhrOhSSiT8HwWklmqq1zurbr1l5QR6S3YfSSy7VXayIEL3ti5bPvNaVKpAlP7zOtFNkbHWlvPqAue%2Fa7PQbCUV15V3oDc0qf1X9uLItAaC50c%2BIIIzipYY6H808mvDA4%2FXVNdqhaJzM0bD2M33MIffh8oGOqUBKG8kA6LtgwIt%2FTF%2BGBDBSQRjJrlgjtwavI42kgrI%2Bb3RWCrR05wq12YuZn0w6YHQeMcaykd%2FfKQHaqAUMP9ZcWg%2F2szgQIIPWwGiqgFVeElVwUOuPINLQUaNwrb4XiSXrkI7ZTZRFpZbqp79Fa0SaIbWmNw9euoKv8mKssvwZu47APq2%2BVwyo70GDNt6ALWxDLo3HeFsfz7e21bJzXlvzdjDP1BU&X-Amz-Signature=0c2373049b86b6308fe55ba8e750fd1dc944de1e4bb7208f24d7b815bded98ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OS7XAFA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVOorzNF0JuRE8aMcKO6K%2BP%2FJx3bTmewPwDIXhMWb0%2FAiEA9sK7%2BuNEgb0cVTGgTTlLyAhq1UXBklWenC4sDj3zzc4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ12RMMCtygHwBeFUCrcA3PiPhuAw4S3q2OZywaFP5BVVNV6Xv9qM3NQwybzMlFlEGuAwpfNcEzKK7SC%2Fai1f%2BOunA5Dk0BC%2BZ4IK8NV8%2FePE2MFigW71oOrHNdEcAp8k%2F28VTMtbPgqQQBNBsWSG7ebWXKmFnF%2BlaUSZVTvlYEKnYcEl9gk0bFGdfisk6JymaSKquvUUeYG%2B1WFqVj%2F4Ha2c4Fm%2FHai7xaSf2zW0XbyveuRcbzCywJlYy%2BBwUvR13NatXBU1%2FhElEwJb4MXB96uWMzOXypg0VAtqBZy2me1fSTbgTvjlfObx53Xyt%2Bq%2B%2FBBfQ7HyY78BLi3CuKcy9nkY%2BsMUTsz95kQPpCBBNTXPfGkTuZ6Mud%2FUMfTOcd5OWsBKmVbCG3Hhrloj0jl%2Fw6BHm0xoIdI2FIoGbf1UCW0BOGesjthY6aSBVZA9RRDcBFZm4UB6BB1Hqm0RmIqbqQssahWtQHhnndctyvdWJxbvmvS4YGALaJ3NasUJZdhrOhSSiT8HwWklmqq1zurbr1l5QR6S3YfSSy7VXayIEL3ti5bPvNaVKpAlP7zOtFNkbHWlvPqAue%2Fa7PQbCUV15V3oDc0qf1X9uLItAaC50c%2BIIIzipYY6H808mvDA4%2FXVNdqhaJzM0bD2M33MIffh8oGOqUBKG8kA6LtgwIt%2FTF%2BGBDBSQRjJrlgjtwavI42kgrI%2Bb3RWCrR05wq12YuZn0w6YHQeMcaykd%2FfKQHaqAUMP9ZcWg%2F2szgQIIPWwGiqgFVeElVwUOuPINLQUaNwrb4XiSXrkI7ZTZRFpZbqp79Fa0SaIbWmNw9euoKv8mKssvwZu47APq2%2BVwyo70GDNt6ALWxDLo3HeFsfz7e21bJzXlvzdjDP1BU&X-Amz-Signature=6bb6c3a60ec49d52fc75944f1b156f7d214532f9c50d971082ea2e081fc9507c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
