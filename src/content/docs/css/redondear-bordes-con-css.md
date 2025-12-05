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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFZEIMJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7AOGRffzFKZsozbWfP%2FeYCF8579Czh5Cag53PcUFvsAiEA25%2FhiEFOwVgJCiQF5TW47NfbkB6Iii0M0EY4GorFfqoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ3dMHA2jSm2%2FqEXwircAxSuOpfqhLeN2GBGwh2DiSrcGG6sYzcJ4yYZ%2FNVS33dlSb3o2k88IuAVnD6KpOJoRwmOCxiIPV%2FesT1V7sICn8fgQ4IxGFatc5jysYFHM16iV1cIlepPCGnehbixvqWP7JAjkkCgfxo7fjH23Goah7aCOsMhr%2FwF6qRCFOJZDtFCnv8p7mUGzoJUlARD8esEuX4XU4qznPCl3uRzYrXPr4mX6i66GBTbbE%2FobmjAGxiQ91%2B5DQKCw6oA41B1H01RnYz17zpC%2BXH%2BWmDxYM8ipN1RLs8U5YeNSVyqxSAg9hMG61cov%2BDkU3B1u%2Fy%2BXp52bNTDj3P0OzQlKaBUe%2BpBNhkuFgdMlcu83fCVXz7yzG4RHA5pHoZ1lqeVUrh0LKKTRQjw8SS1gH9RELjBtyBTJPU6SQyk9amNBIt9ZhBV%2FTxk1b7tQuz3rVJQ%2BkO%2FmjHqjIlXICf%2BHnxEwQQI0a6LHAgSWS0fIiHhKGF5fzSA2olIrDeIKNDE%2Fi91eZnQ5ErJx2L%2FvfS10bcZ9HN3w5ewpZ%2BePC3ad3USRBbuoqW%2FmUNh3pZ%2BisK456W0cLqwVSBxc9bj2zIewCBQZyE%2FygqFxl6LUdPZzzs92zQq%2B1Lhmeg5tfgX3Y67MdcUsPMJMI6myckGOqUBs1nOxuefWF5hYSMC1GUxAje1XQqLUwaC8IP3JDYdMEcD%2F4Aycjdu3lRZpb1c7YUjNOAcOMPuXYlukZvSmuquToXp74dmzNa3GYTeNsmU6EUiEu5ZQW8BKNIBr1PPKghxusMcSnCYaipk8I1FLRGxf9aAGtAEsvZ1RHd8WA9jSyHkYGLZJ2VBee0wquk14skAAXI6yZobEtT3Z9OY1IkkHUAloXCr&X-Amz-Signature=fa3ec7f5a7ce026a415b1e89472bba284484402e2784dab0df834d5e52bc5c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFZEIMJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7AOGRffzFKZsozbWfP%2FeYCF8579Czh5Cag53PcUFvsAiEA25%2FhiEFOwVgJCiQF5TW47NfbkB6Iii0M0EY4GorFfqoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ3dMHA2jSm2%2FqEXwircAxSuOpfqhLeN2GBGwh2DiSrcGG6sYzcJ4yYZ%2FNVS33dlSb3o2k88IuAVnD6KpOJoRwmOCxiIPV%2FesT1V7sICn8fgQ4IxGFatc5jysYFHM16iV1cIlepPCGnehbixvqWP7JAjkkCgfxo7fjH23Goah7aCOsMhr%2FwF6qRCFOJZDtFCnv8p7mUGzoJUlARD8esEuX4XU4qznPCl3uRzYrXPr4mX6i66GBTbbE%2FobmjAGxiQ91%2B5DQKCw6oA41B1H01RnYz17zpC%2BXH%2BWmDxYM8ipN1RLs8U5YeNSVyqxSAg9hMG61cov%2BDkU3B1u%2Fy%2BXp52bNTDj3P0OzQlKaBUe%2BpBNhkuFgdMlcu83fCVXz7yzG4RHA5pHoZ1lqeVUrh0LKKTRQjw8SS1gH9RELjBtyBTJPU6SQyk9amNBIt9ZhBV%2FTxk1b7tQuz3rVJQ%2BkO%2FmjHqjIlXICf%2BHnxEwQQI0a6LHAgSWS0fIiHhKGF5fzSA2olIrDeIKNDE%2Fi91eZnQ5ErJx2L%2FvfS10bcZ9HN3w5ewpZ%2BePC3ad3USRBbuoqW%2FmUNh3pZ%2BisK456W0cLqwVSBxc9bj2zIewCBQZyE%2FygqFxl6LUdPZzzs92zQq%2B1Lhmeg5tfgX3Y67MdcUsPMJMI6myckGOqUBs1nOxuefWF5hYSMC1GUxAje1XQqLUwaC8IP3JDYdMEcD%2F4Aycjdu3lRZpb1c7YUjNOAcOMPuXYlukZvSmuquToXp74dmzNa3GYTeNsmU6EUiEu5ZQW8BKNIBr1PPKghxusMcSnCYaipk8I1FLRGxf9aAGtAEsvZ1RHd8WA9jSyHkYGLZJ2VBee0wquk14skAAXI6yZobEtT3Z9OY1IkkHUAloXCr&X-Amz-Signature=7f373f76620cadb2f4c013e21e97c2803fe873a0415ea6bf173526fd76a52379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
