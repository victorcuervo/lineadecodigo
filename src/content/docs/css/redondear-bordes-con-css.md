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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDFERYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4eQPEqrgQEjARxHsSdoRt9PnnDe4dssBYh08S%2B4IgwIgEBjT3LRf4cwX87L7%2FhvgdNUxGzpyXWqTyHzzNZ4cOAUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1XCOKv92mz4kTpxSrcA2MwkLFhu3wJNO%2B7i2JLgt%2B0K6VMDK6l4f2OR79UowHhbJcXSk%2BTQt0%2F0QO4nfsBzSyXhZymyqHbL6gPyOegN4mbqBOFtusYW9D4Mwf933hjXLXTsUPnmy4tJ55skArHjgCVvaa4nMzvDK5z0g0EwtfTM9bktisOkeNaZe4lyH2J84U7ojZQcrm%2FLN8wzY7DQ4P4ea1ao0IGjNGuEYnnx5E5AG%2BhDhRjHAOMHyqRk4FyfMhG4HdhT%2Fb%2FU7xR9mVlt6NFq%2BLGt5XmnML50GXGIfVGMcKwxhIcarWCuXS5mzES8Rv%2BjNICjT8Cb4AGaCNxXGHBglArPvcolQWCCs4qK2nV2smcHHho3Psd203zmYTPqOgc8BmN4hKCIFo0tUlOBuxTbkmEXT%2BYt6NZ6jQX3kXyEyOjStzL0t6%2FE2%2BXZukxXyAsBYxAP86fpi29%2FDNytWbVP2rxF8N%2F%2FTPgX7yC7k2jx77Hrf7GFmopP7ND0nrXRpIKokeiGqqd4BUzXGkLlrlRvi7ECGT2mwvnILteQU53cwCOlBU6H%2Fv8%2BbA3g2m0zV3gIshwHWIfKWQ4u86G2eMaKjGi39JZ1iPfUcduZLx5Alrx1R1RQORikB%2FuxRf3fYskeTjOOJMHtP2EMKHDzskGOqUBlW1vI9HZ%2Ftq%2B%2BuddNUY1DowbjCk%2BqYXQ2TlaD3fkQr4lWuO1uHG1ky35251L%2F7%2Ftu%2BByQJCrJ6sBRtKANiOhAjXbjVsHPKM96QkiK9vql1EDdnqKL1LWFdwLh%2BIjk7hP%2BnOoq6PPj5gKN9pO2gw2LJxOG8eAyyZCfFotIj2PDcnATkjot3NS2VoeJFAGBBumm8q9%2BzTAAtngl72x4JoM2yE3XqNR&X-Amz-Signature=46ca6759752c0072923f206c9c7cbe6fd6dd23709744e4b91b5bd307ad388f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDFERYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4eQPEqrgQEjARxHsSdoRt9PnnDe4dssBYh08S%2B4IgwIgEBjT3LRf4cwX87L7%2FhvgdNUxGzpyXWqTyHzzNZ4cOAUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1XCOKv92mz4kTpxSrcA2MwkLFhu3wJNO%2B7i2JLgt%2B0K6VMDK6l4f2OR79UowHhbJcXSk%2BTQt0%2F0QO4nfsBzSyXhZymyqHbL6gPyOegN4mbqBOFtusYW9D4Mwf933hjXLXTsUPnmy4tJ55skArHjgCVvaa4nMzvDK5z0g0EwtfTM9bktisOkeNaZe4lyH2J84U7ojZQcrm%2FLN8wzY7DQ4P4ea1ao0IGjNGuEYnnx5E5AG%2BhDhRjHAOMHyqRk4FyfMhG4HdhT%2Fb%2FU7xR9mVlt6NFq%2BLGt5XmnML50GXGIfVGMcKwxhIcarWCuXS5mzES8Rv%2BjNICjT8Cb4AGaCNxXGHBglArPvcolQWCCs4qK2nV2smcHHho3Psd203zmYTPqOgc8BmN4hKCIFo0tUlOBuxTbkmEXT%2BYt6NZ6jQX3kXyEyOjStzL0t6%2FE2%2BXZukxXyAsBYxAP86fpi29%2FDNytWbVP2rxF8N%2F%2FTPgX7yC7k2jx77Hrf7GFmopP7ND0nrXRpIKokeiGqqd4BUzXGkLlrlRvi7ECGT2mwvnILteQU53cwCOlBU6H%2Fv8%2BbA3g2m0zV3gIshwHWIfKWQ4u86G2eMaKjGi39JZ1iPfUcduZLx5Alrx1R1RQORikB%2FuxRf3fYskeTjOOJMHtP2EMKHDzskGOqUBlW1vI9HZ%2Ftq%2B%2BuddNUY1DowbjCk%2BqYXQ2TlaD3fkQr4lWuO1uHG1ky35251L%2F7%2Ftu%2BByQJCrJ6sBRtKANiOhAjXbjVsHPKM96QkiK9vql1EDdnqKL1LWFdwLh%2BIjk7hP%2BnOoq6PPj5gKN9pO2gw2LJxOG8eAyyZCfFotIj2PDcnATkjot3NS2VoeJFAGBBumm8q9%2BzTAAtngl72x4JoM2yE3XqNR&X-Amz-Signature=0547580546c83fd380c9825dc3787230f397921a4f43fb2af2fc8e4089e2167f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
