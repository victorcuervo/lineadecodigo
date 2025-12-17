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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUW6QQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAK3M3%2BcSvktd1IEyQu1C5fJWBONdsGB1My5gAtetyuAIgOucRrd%2Ft%2BQwbQhnnrhw3h9J5T0P6wrPTsbY1iby7DcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKELJ8WgSaqitk%2BdxyrcA65YPRM7KptEbPuYhhL1GfMRMHrw%2F5hvY9ltGSmaR4Ea%2FPxTMw7CMLR22iodRzlDsUxEZZMmudnMQ%2BhNjkvWL3GuaAjpzS7boyKez2I%2BjWqfrSpise6hN76FPjFDDBQWDBoC9bB5fEhQDLdnfde5nrmktAw7P%2BZgt2uxEUlhwoo4YvhnuZUy12tK9jF72HMVpSObboFtkyineO30vbR3NuNXZ4uFLIzfloIRP9OqX9Df4PkxJVxkDjfnJ5JzHDVAIIU1UNmiA26RTmDjnljLCcVihHZt1mXAmTi4C0m01CqEavd50FVIL7To5%2FRug6QzCPsckDoGZmvOLFO5shzhEbQAQbTHli0Z%2FKHZ5AElhnY6VljYhdNuqggYA6mx52K%2FIL%2B0AR%2FPaCj0eVNL%2B9GWqCa1lEhzMwPZ%2FCgWWsZ3WiPE1XsSCS1JDvZNANGssHr5ccR1e2sLu7m23syy%2BldB1sO167JaHCkbFcttuZ9xPfwCiijPZL0WBdrg4EDH5seezDMwM5uKXEbaew5peqDXqBlf8dygec7E2WQautx5kJSIim%2FvLaa5hby52xeCpin%2FOpvbVnYW0ESRY0hkkiUljL7Q8UbFd%2Fi4QywnAe%2FK6L6lB%2FFfaG7Gk%2FLthmFRMKegi8oGOqUB8rpY5ftag3FAyF%2F4%2FRQvGmhn0kOtonAiJXQ%2FZdwSB9vtrUwdNCyjYpSctLRTj5TRKcgBurtQEncxEISx%2Blp7xwgRMftgOUWGCwMUiawNIwS24ckh12e1yaPKyPwHp31XvzGbFN2h3h7uQWbL3xt0jmxcsGErIfyMJcv2r%2BzB7oILZjUpZacNuSUPO%2FufNJrEvq1e1PGXmbf%2BiFTTbbytNovSfthU&X-Amz-Signature=bb0b1c86e5f75ccfe18bddf066744235518794748e64eb4e0e09dc8dfac4111b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUW6QQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAK3M3%2BcSvktd1IEyQu1C5fJWBONdsGB1My5gAtetyuAIgOucRrd%2Ft%2BQwbQhnnrhw3h9J5T0P6wrPTsbY1iby7DcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKELJ8WgSaqitk%2BdxyrcA65YPRM7KptEbPuYhhL1GfMRMHrw%2F5hvY9ltGSmaR4Ea%2FPxTMw7CMLR22iodRzlDsUxEZZMmudnMQ%2BhNjkvWL3GuaAjpzS7boyKez2I%2BjWqfrSpise6hN76FPjFDDBQWDBoC9bB5fEhQDLdnfde5nrmktAw7P%2BZgt2uxEUlhwoo4YvhnuZUy12tK9jF72HMVpSObboFtkyineO30vbR3NuNXZ4uFLIzfloIRP9OqX9Df4PkxJVxkDjfnJ5JzHDVAIIU1UNmiA26RTmDjnljLCcVihHZt1mXAmTi4C0m01CqEavd50FVIL7To5%2FRug6QzCPsckDoGZmvOLFO5shzhEbQAQbTHli0Z%2FKHZ5AElhnY6VljYhdNuqggYA6mx52K%2FIL%2B0AR%2FPaCj0eVNL%2B9GWqCa1lEhzMwPZ%2FCgWWsZ3WiPE1XsSCS1JDvZNANGssHr5ccR1e2sLu7m23syy%2BldB1sO167JaHCkbFcttuZ9xPfwCiijPZL0WBdrg4EDH5seezDMwM5uKXEbaew5peqDXqBlf8dygec7E2WQautx5kJSIim%2FvLaa5hby52xeCpin%2FOpvbVnYW0ESRY0hkkiUljL7Q8UbFd%2Fi4QywnAe%2FK6L6lB%2FFfaG7Gk%2FLthmFRMKegi8oGOqUB8rpY5ftag3FAyF%2F4%2FRQvGmhn0kOtonAiJXQ%2FZdwSB9vtrUwdNCyjYpSctLRTj5TRKcgBurtQEncxEISx%2Blp7xwgRMftgOUWGCwMUiawNIwS24ckh12e1yaPKyPwHp31XvzGbFN2h3h7uQWbL3xt0jmxcsGErIfyMJcv2r%2BzB7oILZjUpZacNuSUPO%2FufNJrEvq1e1PGXmbf%2BiFTTbbytNovSfthU&X-Amz-Signature=3e8631b9fb3140c82061f37df8f5cb1aee72e96ab7c2845e832578c53f4478d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
