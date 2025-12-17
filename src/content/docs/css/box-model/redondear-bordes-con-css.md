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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7KVMFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC69usD53ZZ4obHTlgAs0WF4N7Sa8EE6rXfq9vQiab%2FTgIgQQvV8URJdlh1IL0MT9acO0v7uOW2qa95rWa0gz0AB3Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAjM%2B3pQPUqCxfdcDyrcA3Yss47A2qgGoF5t3SR5IPVx7sA5yPHBSpRb%2FXYL72YbSNqo0i%2F3tQKgyt1%2FdUvoqZjwaFTWq%2Fa%2FJy%2FL3Ja8sxCFhMG5zrbGqezd8ZssBBSiKT8a%2F6ampOhZJcKfYO9NERBql0gYSB0%2FN2pLXwMM9mJXdZnl06pXAVfhSyPwclsWWYmr6oZWrLj9o5xoGO072TPy%2BG6x6fneAoSiitFkIIMv12Ty1rjV1kqn8EcX21FDmkDNsOnB8gsqqXLTPOelvIrwEWiYNBrJlyqzvuHQkYJn6LQZnqi2Hg96DITcZ6UHlwXRVvt9jJ1DC6N84PZ3eKQsGjJHlzclx54lQXNfySLarUk5AWwjBAbU%2FKQABai6yDqxxq8eroiM0BXdaw4oTZWZfNCFk3N1baS9Qn3VhAQUS1vE7Foss4M9iNLzWQGlgG8axBdFVdwkHMfFNhT39HkUQflw4bdrm%2B%2Fvf%2B%2FbgN%2BAIOp%2FjTMG92z59kGHf5PURA6WsTz307Wc%2F3gAcRq5Bx2CBvtxK44%2BNtCoqzeqJMdVdUjZKGbjq62DINqZWKppTgghY%2Bpq%2F%2FpffU82R7bbgjpiwdz27c4FKzFYY24Uon4Rxv9UA1kUoZetNkBnaDMV6rJ3UuAK4UHDPIB1MI%2BrisoGOqUBqfEAW8Vw7PRyFW6gSlzmbEBhak7lUA9tnNqGWDPuTIIFUlHPyV3w0eNNPdoGim8iftSKSe%2BEhQoeO1QjT05%2BqOrBSQSxES3J3Ba%2FJ40vCLjnwh4Vug%2F2nh8BpEmPsT%2F82uZgjdGup8WTL56azPj%2Bju1xu8WeCQERFxMqaCW8pHzsqHu1XSDQbneWGgUFj%2Fec4ftir5UkCcvp9Euzx4yJ9hACMEj%2F&X-Amz-Signature=8494b6752cecb72067ef10c335d24805047cc784329702fbc20c453474508e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7KVMFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC69usD53ZZ4obHTlgAs0WF4N7Sa8EE6rXfq9vQiab%2FTgIgQQvV8URJdlh1IL0MT9acO0v7uOW2qa95rWa0gz0AB3Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAjM%2B3pQPUqCxfdcDyrcA3Yss47A2qgGoF5t3SR5IPVx7sA5yPHBSpRb%2FXYL72YbSNqo0i%2F3tQKgyt1%2FdUvoqZjwaFTWq%2Fa%2FJy%2FL3Ja8sxCFhMG5zrbGqezd8ZssBBSiKT8a%2F6ampOhZJcKfYO9NERBql0gYSB0%2FN2pLXwMM9mJXdZnl06pXAVfhSyPwclsWWYmr6oZWrLj9o5xoGO072TPy%2BG6x6fneAoSiitFkIIMv12Ty1rjV1kqn8EcX21FDmkDNsOnB8gsqqXLTPOelvIrwEWiYNBrJlyqzvuHQkYJn6LQZnqi2Hg96DITcZ6UHlwXRVvt9jJ1DC6N84PZ3eKQsGjJHlzclx54lQXNfySLarUk5AWwjBAbU%2FKQABai6yDqxxq8eroiM0BXdaw4oTZWZfNCFk3N1baS9Qn3VhAQUS1vE7Foss4M9iNLzWQGlgG8axBdFVdwkHMfFNhT39HkUQflw4bdrm%2B%2Fvf%2B%2FbgN%2BAIOp%2FjTMG92z59kGHf5PURA6WsTz307Wc%2F3gAcRq5Bx2CBvtxK44%2BNtCoqzeqJMdVdUjZKGbjq62DINqZWKppTgghY%2Bpq%2F%2FpffU82R7bbgjpiwdz27c4FKzFYY24Uon4Rxv9UA1kUoZetNkBnaDMV6rJ3UuAK4UHDPIB1MI%2BrisoGOqUBqfEAW8Vw7PRyFW6gSlzmbEBhak7lUA9tnNqGWDPuTIIFUlHPyV3w0eNNPdoGim8iftSKSe%2BEhQoeO1QjT05%2BqOrBSQSxES3J3Ba%2FJ40vCLjnwh4Vug%2F2nh8BpEmPsT%2F82uZgjdGup8WTL56azPj%2Bju1xu8WeCQERFxMqaCW8pHzsqHu1XSDQbneWGgUFj%2Fec4ftir5UkCcvp9Euzx4yJ9hACMEj%2F&X-Amz-Signature=1dabe9dc59ea46382ef394f791276034c8ae1fd85ca00c00473259d713e4cdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
