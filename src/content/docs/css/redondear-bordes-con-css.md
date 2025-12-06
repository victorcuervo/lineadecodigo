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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZIWJBL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM6m0nc9f8PhwzGwWkafEEjDRG8oU4%2BrDLlYnWV1Xq0QIgenHd5btrOB9nI4nPi5USPsH%2BXjSNLi1wFKGAxgY6IMEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBIJi%2F3Z%2FDm6knamQCrcA9HOI7D7jxQZa%2BcjlhMZ1udr8LX1Ys28yVLx116Bczn9%2BJF%2BOu5Smxb9WI%2F3VXtWZ1qF0Gg%2BSF4DiMiDxElCcT0%2FWMODxSEGEdOyJsR9T8zddAsvntDka9RTY8X1B8qXWp6RTbg1BSisttbt%2ByOde1aZW3XQighsJkmzkYJ3uKSNFNaEBXG8RNmmPjb7qmjmxvIibCL3oQfAj6QqC0oHarohdK%2BWBZmmF%2FlvncSEbl74u4LN3TQEsxvMikspCIPnGKwZyIlhrpFzL1UQ3KsLUGgIjU5h1K6%2Fh%2FnZoX5RcL%2FBac25qOpED4fymeKytSLRaOjTgyyjaEZtT4z%2F5ZaICvG4Y6MF27XR4HXyIZVrR9dqcQKdR%2F94IzfZ7qBXNvgYjnGeNuGQqzND%2BDRzpwPk74Gn%2BLK8GRSGItWDaOVZKFV47AogpC96Oz24CtJRnkLXfyC2pO4%2BruK0RUdWA1ECV2JYW2tWvHL8Ubjx%2FW4IpKsMpgXPHeFTAUlk9FXJq9WuKldXcuZutPqiZEE4cHG0bDcG2bfC4cUUZMx7m4WelwnFcUZyFVnHduuvmS8pRny%2BYpp15dlq9sE4%2BwCxw558Pbu0bodCkCloLU8HjJSlAMQA6aOBfx2jQr%2FEgFlzMIeez8kGOqUBvuAoh%2FtiULCaIJdYBcUXbSEj3OFkrHfgKdGwlTKY17MQCv4olrGqTWSQYz1qXGQb1NB%2BHR8Dzhp3IgygLt86heyFfmf75xXk65DVQdUffWlrfWueQMbSCQqFO2Vf2ZWth77YiGGDz8DLmiDNQgYRlX1Afg1PCmwL2mbLFzTy5Vtdrbmh4twLW0CkvFL8YDvOGHv0GSYvmqg%2F4eljB9aSdRcguUsg&X-Amz-Signature=c64c45ce65caceb52b054b4da7de42ab0510db0c8ccf03c48f67f42561bdda8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZIWJBL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM6m0nc9f8PhwzGwWkafEEjDRG8oU4%2BrDLlYnWV1Xq0QIgenHd5btrOB9nI4nPi5USPsH%2BXjSNLi1wFKGAxgY6IMEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBIJi%2F3Z%2FDm6knamQCrcA9HOI7D7jxQZa%2BcjlhMZ1udr8LX1Ys28yVLx116Bczn9%2BJF%2BOu5Smxb9WI%2F3VXtWZ1qF0Gg%2BSF4DiMiDxElCcT0%2FWMODxSEGEdOyJsR9T8zddAsvntDka9RTY8X1B8qXWp6RTbg1BSisttbt%2ByOde1aZW3XQighsJkmzkYJ3uKSNFNaEBXG8RNmmPjb7qmjmxvIibCL3oQfAj6QqC0oHarohdK%2BWBZmmF%2FlvncSEbl74u4LN3TQEsxvMikspCIPnGKwZyIlhrpFzL1UQ3KsLUGgIjU5h1K6%2Fh%2FnZoX5RcL%2FBac25qOpED4fymeKytSLRaOjTgyyjaEZtT4z%2F5ZaICvG4Y6MF27XR4HXyIZVrR9dqcQKdR%2F94IzfZ7qBXNvgYjnGeNuGQqzND%2BDRzpwPk74Gn%2BLK8GRSGItWDaOVZKFV47AogpC96Oz24CtJRnkLXfyC2pO4%2BruK0RUdWA1ECV2JYW2tWvHL8Ubjx%2FW4IpKsMpgXPHeFTAUlk9FXJq9WuKldXcuZutPqiZEE4cHG0bDcG2bfC4cUUZMx7m4WelwnFcUZyFVnHduuvmS8pRny%2BYpp15dlq9sE4%2BwCxw558Pbu0bodCkCloLU8HjJSlAMQA6aOBfx2jQr%2FEgFlzMIeez8kGOqUBvuAoh%2FtiULCaIJdYBcUXbSEj3OFkrHfgKdGwlTKY17MQCv4olrGqTWSQYz1qXGQb1NB%2BHR8Dzhp3IgygLt86heyFfmf75xXk65DVQdUffWlrfWueQMbSCQqFO2Vf2ZWth77YiGGDz8DLmiDNQgYRlX1Afg1PCmwL2mbLFzTy5Vtdrbmh4twLW0CkvFL8YDvOGHv0GSYvmqg%2F4eljB9aSdRcguUsg&X-Amz-Signature=19617ee8f2a1791dcc6b5d4c84db4808984d1c1cd70aafde9f97392563f85ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
