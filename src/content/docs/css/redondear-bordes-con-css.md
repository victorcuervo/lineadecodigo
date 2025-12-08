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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654K57VW6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOsKW6uPf0W9tGojEsqAfHs7IGOeogctbhYb31KB4zDAiAbGlb%2BGPB9Va7WSwaTIwHSWy1K3IfdKhgeO34k1aHv6SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSdhf7miiEPJoZKGqKtwDyUQyc5%2FZkf%2Bd8J7R6emgZIGr7wagWeu3DOKpznKvUwQu2JTEB1Hm7m46JYBI2t9peukpaPobXoVMRSF2vT7JXqCzyMtb9m%2F5%2FqqgwNUQnPHT8MOsIz74Y8Z4eVZHd%2BYaUbq7jvXLXxFu3nIg1nfL9HD01zGi3iaRX3hYDWp1cVJ345TeCUYSz%2BAjnDSLxhufSyq70dGGbM%2Buq1nd1lRQE8IbDk5poNb88Vf7jS6eyzEeDwPtdJwTTx0QtOS40iTpT26Mcvr6MEhqeXA%2F68KNp9OkRf0K1uLBbyYAiviOEaCK1mwLA7m4a2NNvysx2xRJVKzJ01brbfRak64l9BXCs16y0YQ8kXeroYpG8iTSv0Z1jVNJpgC6%2FxOwQYc8SaPZETJyrU%2FKUwIXudACntai63zNLPEoE8DdLRuR0k2IsAkeX%2BsmFpY5xsWFOSv5AZqsm7Uqp7xa%2FMYrAo2CNEE6MTHV7M%2BEkpZUreRF2laIshbAaCDeTaRXSh%2B9zSTHVP0NLlKTe7VBM5XjpHI1albPv2%2FN4lSiC3jv8ACDgL3hxx6Q0cV%2BTBGsH2OAaVkdFcukyVnSsL%2BgpIVU1ai7jdR%2FpRyyYvcrWmTVf5dNm%2BQlacZ%2BI3BAH324vI%2BujBswwI%2FbyQY6pgF7O3T6pDrZeXv5XOvPxxdPZkEqBxRGoh5JduUGKV6hJhqVYzq7GV2Of9ULUqgcFtLwRfdGsdNUmGGcQjbadmsscDSoYwmrNah38jf%2B8se%2FptJ%2BKLc8uGYS%2BNeL5P0bCcdKNr4WsCHQtUOT4QjjQn4KRDaibdYJ7LIriCr8yjEeBzXDwtvqDFtn7QgXZMTwI5PM4hKOodyTKfhpPYfq0wfBXoT%2B%2BpRZ&X-Amz-Signature=b847302f1d1c7dab71ebbd188d77d28bcd21e5c6286487e6c3f0db9f244e814f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654K57VW6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOsKW6uPf0W9tGojEsqAfHs7IGOeogctbhYb31KB4zDAiAbGlb%2BGPB9Va7WSwaTIwHSWy1K3IfdKhgeO34k1aHv6SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSdhf7miiEPJoZKGqKtwDyUQyc5%2FZkf%2Bd8J7R6emgZIGr7wagWeu3DOKpznKvUwQu2JTEB1Hm7m46JYBI2t9peukpaPobXoVMRSF2vT7JXqCzyMtb9m%2F5%2FqqgwNUQnPHT8MOsIz74Y8Z4eVZHd%2BYaUbq7jvXLXxFu3nIg1nfL9HD01zGi3iaRX3hYDWp1cVJ345TeCUYSz%2BAjnDSLxhufSyq70dGGbM%2Buq1nd1lRQE8IbDk5poNb88Vf7jS6eyzEeDwPtdJwTTx0QtOS40iTpT26Mcvr6MEhqeXA%2F68KNp9OkRf0K1uLBbyYAiviOEaCK1mwLA7m4a2NNvysx2xRJVKzJ01brbfRak64l9BXCs16y0YQ8kXeroYpG8iTSv0Z1jVNJpgC6%2FxOwQYc8SaPZETJyrU%2FKUwIXudACntai63zNLPEoE8DdLRuR0k2IsAkeX%2BsmFpY5xsWFOSv5AZqsm7Uqp7xa%2FMYrAo2CNEE6MTHV7M%2BEkpZUreRF2laIshbAaCDeTaRXSh%2B9zSTHVP0NLlKTe7VBM5XjpHI1albPv2%2FN4lSiC3jv8ACDgL3hxx6Q0cV%2BTBGsH2OAaVkdFcukyVnSsL%2BgpIVU1ai7jdR%2FpRyyYvcrWmTVf5dNm%2BQlacZ%2BI3BAH324vI%2BujBswwI%2FbyQY6pgF7O3T6pDrZeXv5XOvPxxdPZkEqBxRGoh5JduUGKV6hJhqVYzq7GV2Of9ULUqgcFtLwRfdGsdNUmGGcQjbadmsscDSoYwmrNah38jf%2B8se%2FptJ%2BKLc8uGYS%2BNeL5P0bCcdKNr4WsCHQtUOT4QjjQn4KRDaibdYJ7LIriCr8yjEeBzXDwtvqDFtn7QgXZMTwI5PM4hKOodyTKfhpPYfq0wfBXoT%2B%2BpRZ&X-Amz-Signature=b944e945ba2ceb59ef38dec2f7a9127be76565f77e9df0608cec586f9b45b513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
