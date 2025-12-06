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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46P5Q6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIesfEWCy1cSJ%2Ff8bROCtvt0mms2IKPzZCpqQlbUGoEAiA8XV0uNRURWp6x9XsSwgfEBp4nwwM6gbOgtRHdzK09%2BCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNS3gkWczghOh6S4AKtwDu65FHsssJ5R3DYloOZVKjgXeOSSNTJfFCUYeDo5q7Y7vpnK7H3hDM083T9YQYGrcLPHVHm82ReuIio1fLhYFTxx2eVIHvVLub%2FEA3T8OYu5uDvxC%2Fkq6dfo3JETQG6q4WJFBtqKYxAMfQD0ru8LAm20rXW%2BjQ1e%2F3XPrJ3sUY68STfL3%2BR304IKehaPKF5SWv4Ma8hAUvpwvB6WoQKZKJ0%2BBqPp2BfwuBZqHELtZs7N7pOLNabA43N%2B4%2FjMuFpppjLZF6vfPF%2B9GxoXtpPTRECxnjw3ZHV3GLJYshkID6W0v5mzmm3ImsG5SrA7btJVXIqQFT2lebBVIgb45Ve%2BqgKEy7sT2YUVWslRpZqrfA6qSKVwkXDlCueSKeEP%2BmP7DucOfJA9x8dvQNCbx%2BjSYAIRb5r%2Fnn0Wcl5KxR76GAe1R%2FBfiJgadHmBrzk0BZrEncb%2B2ULBnC9OVLwZGCSZLFb82RN1M8lsv3GL%2BM%2FiRVJiLMNCSyeGjgsIyZ1ptvCSbzmYt93r8ICSgr6DMKBZJ0vZLjIg5C7aJKQ8Ysb%2Fed%2BjQDTcjZ3sAC3FQ6uT9gpGCMI4pjoqFT4syDQfHTASz1d5KaGHKq6PpAr7gwDkguACZbTqkggZ8QbEHXcEwssbNyQY6pgEF6N3ohU4tfRd1qMovoDikWozm2A9jEz4BnIJ%2BbyDnNdE%2Bi5cBSp5N83%2FsKUdPHLap1TwtbsQDu4Jg5R3MHhrQ06cj8w4ynM4aM7W%2B4Fr%2BZAIFEScedgDzS6QCcvZQ%2FvpHPpO2gaDX34Zbjh8RzfZU%2FixbRMK9W6ijECboZQ5fseE84%2BizSrtaaQPbVMBx9TVS%2FX%2By3OcRAEWXbGMOfrj%2BsN0EC31V&X-Amz-Signature=11cb702d41685f2d7f0870210dd3f3cd23372e800317953a0015d73121e70451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46P5Q6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIesfEWCy1cSJ%2Ff8bROCtvt0mms2IKPzZCpqQlbUGoEAiA8XV0uNRURWp6x9XsSwgfEBp4nwwM6gbOgtRHdzK09%2BCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMNS3gkWczghOh6S4AKtwDu65FHsssJ5R3DYloOZVKjgXeOSSNTJfFCUYeDo5q7Y7vpnK7H3hDM083T9YQYGrcLPHVHm82ReuIio1fLhYFTxx2eVIHvVLub%2FEA3T8OYu5uDvxC%2Fkq6dfo3JETQG6q4WJFBtqKYxAMfQD0ru8LAm20rXW%2BjQ1e%2F3XPrJ3sUY68STfL3%2BR304IKehaPKF5SWv4Ma8hAUvpwvB6WoQKZKJ0%2BBqPp2BfwuBZqHELtZs7N7pOLNabA43N%2B4%2FjMuFpppjLZF6vfPF%2B9GxoXtpPTRECxnjw3ZHV3GLJYshkID6W0v5mzmm3ImsG5SrA7btJVXIqQFT2lebBVIgb45Ve%2BqgKEy7sT2YUVWslRpZqrfA6qSKVwkXDlCueSKeEP%2BmP7DucOfJA9x8dvQNCbx%2BjSYAIRb5r%2Fnn0Wcl5KxR76GAe1R%2FBfiJgadHmBrzk0BZrEncb%2B2ULBnC9OVLwZGCSZLFb82RN1M8lsv3GL%2BM%2FiRVJiLMNCSyeGjgsIyZ1ptvCSbzmYt93r8ICSgr6DMKBZJ0vZLjIg5C7aJKQ8Ysb%2Fed%2BjQDTcjZ3sAC3FQ6uT9gpGCMI4pjoqFT4syDQfHTASz1d5KaGHKq6PpAr7gwDkguACZbTqkggZ8QbEHXcEwssbNyQY6pgEF6N3ohU4tfRd1qMovoDikWozm2A9jEz4BnIJ%2BbyDnNdE%2Bi5cBSp5N83%2FsKUdPHLap1TwtbsQDu4Jg5R3MHhrQ06cj8w4ynM4aM7W%2B4Fr%2BZAIFEScedgDzS6QCcvZQ%2FvpHPpO2gaDX34Zbjh8RzfZU%2FixbRMK9W6ijECboZQ5fseE84%2BizSrtaaQPbVMBx9TVS%2FX%2By3OcRAEWXbGMOfrj%2BsN0EC31V&X-Amz-Signature=d2a968f956164e01a57ad37644d26c1a37a814cadea7f4bd7398d5590055d198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
