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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3YKHNU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQM%2BDWUpXYr%2Fn95J%2BgC%2FZmX1AseyxNC2yVxAFvs0wIdgIgI6QqKlb3rm%2FfiHkFahFbUGNu8gYkUaVz7yY5b%2FcaQXEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI8r0J6gLts%2BjTjjOCrcA7M547b4Lf9WiAjzb%2B0BQ9xzxCutWuoSqsv2E6UeJwSVGLrd9mLNToeyQ5duZlS9HOCFBQQQDgx9Fec7LxmOmJKlCNrVINNoL0aP7n43rsJJl6AoLxzWvX4RnwbdnD9LcPKJdPRnbhBYlEP%2BdZn6LCq1UDfPAgVwQBREpGJAwNh5qHcINc4yNhSefmNy5M%2FzozApzKbNgpWaNKl%2FLjj1hWInYYeGktShVq9iNihnmkdrX6g63dETqL%2F%2Bgr1jdaqhIN7e3iiQUfdTs9LrQHql%2FBn2%2BaRj5q%2BN5S9elqxyzFZN%2FHVYIVxkmip5ndaHCfH%2Btby74hgjGKF85IXllZemp8r92hkzyRoBkIXeb%2BvnBithibnOxazpzlkKevUdVkPBZv5lYqMjdvMWb08UgW8aBEjvda3kqHQf4cFoI%2B8KAfmUobvAEnXLfAk8VTE7LM%2F6oOeebjDAeuS5XkJErZerCAlTcoUzycggF4AysML4%2B1aO2SpMOS%2BFzj6OhFjaIsFU%2BwsLMPQ0fPENVJ7BFu5TZqr34RS2vQgzxB7qsqsVgc62XzYbP%2Fjcq%2FWVgQQAQ3XtgVHaO8gfxrf4xI%2FY8%2BANrxcGnvmXQt%2BG4LEVqJZbPWV8wEo1CELdx1K3bSd4MLy8z8kGOqUBmnS7%2FgeKbzsTSVee7v371HLWf9VVcKfaQVCKiHYbjhH3LWzl9IRTVsWuhwJP1bx3cMQdk5OR1ajZEcSI8prTMt4ErGJUHF2pSTWiXYhror9f9itNwQZJV%2BZmuS%2FVHN63YuKkgjzJ2vMjDTmtC5Xcu0pnOXZrvd0e8FzlMY2sSmu%2B6ez5Xl1zOwZTH6DQnLkDrlKf6BtJ9nNnYaCj8eCtagDVDnjd&X-Amz-Signature=c822e73cef3445fd47751fc4bb9a5739ea6e9fc1d51bd2dfa62cb2ba997f8fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3YKHNU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQM%2BDWUpXYr%2Fn95J%2BgC%2FZmX1AseyxNC2yVxAFvs0wIdgIgI6QqKlb3rm%2FfiHkFahFbUGNu8gYkUaVz7yY5b%2FcaQXEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI8r0J6gLts%2BjTjjOCrcA7M547b4Lf9WiAjzb%2B0BQ9xzxCutWuoSqsv2E6UeJwSVGLrd9mLNToeyQ5duZlS9HOCFBQQQDgx9Fec7LxmOmJKlCNrVINNoL0aP7n43rsJJl6AoLxzWvX4RnwbdnD9LcPKJdPRnbhBYlEP%2BdZn6LCq1UDfPAgVwQBREpGJAwNh5qHcINc4yNhSefmNy5M%2FzozApzKbNgpWaNKl%2FLjj1hWInYYeGktShVq9iNihnmkdrX6g63dETqL%2F%2Bgr1jdaqhIN7e3iiQUfdTs9LrQHql%2FBn2%2BaRj5q%2BN5S9elqxyzFZN%2FHVYIVxkmip5ndaHCfH%2Btby74hgjGKF85IXllZemp8r92hkzyRoBkIXeb%2BvnBithibnOxazpzlkKevUdVkPBZv5lYqMjdvMWb08UgW8aBEjvda3kqHQf4cFoI%2B8KAfmUobvAEnXLfAk8VTE7LM%2F6oOeebjDAeuS5XkJErZerCAlTcoUzycggF4AysML4%2B1aO2SpMOS%2BFzj6OhFjaIsFU%2BwsLMPQ0fPENVJ7BFu5TZqr34RS2vQgzxB7qsqsVgc62XzYbP%2Fjcq%2FWVgQQAQ3XtgVHaO8gfxrf4xI%2FY8%2BANrxcGnvmXQt%2BG4LEVqJZbPWV8wEo1CELdx1K3bSd4MLy8z8kGOqUBmnS7%2FgeKbzsTSVee7v371HLWf9VVcKfaQVCKiHYbjhH3LWzl9IRTVsWuhwJP1bx3cMQdk5OR1ajZEcSI8prTMt4ErGJUHF2pSTWiXYhror9f9itNwQZJV%2BZmuS%2FVHN63YuKkgjzJ2vMjDTmtC5Xcu0pnOXZrvd0e8FzlMY2sSmu%2B6ez5Xl1zOwZTH6DQnLkDrlKf6BtJ9nNnYaCj8eCtagDVDnjd&X-Amz-Signature=6240fe8e905cd309afd7606d451f93b419f7f078d159972a1b7835af9867afe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
