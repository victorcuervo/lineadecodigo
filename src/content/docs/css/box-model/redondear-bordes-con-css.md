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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLXAAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDdFtD2%2BwjcGA5s%2FnYav2XwJY%2F4fIwKd2CJNL2jUl6gIgc77fNtw682E6xJl4ZjxkPwGavX9qzCzVsP%2Bn0fVhcWoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnPKJ4ALMzewbnoiircA03huxjBAJz6cmAEeagorZ6Pj1EDeHSW9QEjizm%2F5dHKX4%2BIYPkw4dWaXiFR3iUcbYKMfRAIUSEomD3E6fCj9jnEQvTKH4eljT19oSMPY8s9c1Gqune3GUX4RrnlrCWAI1Bqpf9P54nuc3VzUL4Pokr8dEDk7pFBnsrdev75TYRt0y5SZXzN0aEvUN0bctMX4OdiRflzXjMEbzrP6rzdxRk0lGjTQQZB7z631SD3H%2BLqiX%2BzYHTb9MOO4%2FulIYmbCpW2dvGOg0dxzIqhzey7AgH3t4UAOilx5G56XN6NOlue8co%2B%2FxI8CQiEUulkcrBbHJJ4EhHG7F2mA138W8qupjnMQ43Q68PfH40SPIs%2BIOIolxHD6MIdcV9830mqip4KNn7F551duZe9FDqIsAE5R6SiaM3GRxJkJUHAHFBk%2BPdqT0YD9wfaGMqteookpaZZbQYuURAu%2BEcSNHosq2UrZ8GEyRzOyocmeYJT%2FBvBLtNX92v0%2Baeoad3NTYaJHdoTOv%2B6S2qoqqQRrPT0vN1Nek2kOzp95IKuVOJa38n4s1O3a6zqOOBROPZx%2BwFZrWNPBB8SANMSgJBzMiG9hUmvJsfxXyjnxu8vcH%2B%2FMysj8VCcmHs%2Fa9%2Bt7yi0cxZBMLyfi8oGOqUB47jojNx5UPg0cOp2ovaTPyONOgf6%2BRWYVy6hML86k2%2FK7Zv2oncfmGjyMOgCcqJbbnWhS0W%2FexT7sQpowWQeQq7AO%2BtZOAOXiGYoSRyXUSMcyVreVmXCiEQlbB111wxLYdYmSVQPxuGeddYsug4HbpPBfMElBMvLpjNEQH1xyDwlgffoN0mjML4ZAokdIQ%2FXyEtRXUmbIT82JArEmHaePLHl7uIY&X-Amz-Signature=b301d3013b8ebdfa67ae646c99c5552b5c99825ceb2d20e51fe8bda945ce964f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLXAAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDdFtD2%2BwjcGA5s%2FnYav2XwJY%2F4fIwKd2CJNL2jUl6gIgc77fNtw682E6xJl4ZjxkPwGavX9qzCzVsP%2Bn0fVhcWoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnPKJ4ALMzewbnoiircA03huxjBAJz6cmAEeagorZ6Pj1EDeHSW9QEjizm%2F5dHKX4%2BIYPkw4dWaXiFR3iUcbYKMfRAIUSEomD3E6fCj9jnEQvTKH4eljT19oSMPY8s9c1Gqune3GUX4RrnlrCWAI1Bqpf9P54nuc3VzUL4Pokr8dEDk7pFBnsrdev75TYRt0y5SZXzN0aEvUN0bctMX4OdiRflzXjMEbzrP6rzdxRk0lGjTQQZB7z631SD3H%2BLqiX%2BzYHTb9MOO4%2FulIYmbCpW2dvGOg0dxzIqhzey7AgH3t4UAOilx5G56XN6NOlue8co%2B%2FxI8CQiEUulkcrBbHJJ4EhHG7F2mA138W8qupjnMQ43Q68PfH40SPIs%2BIOIolxHD6MIdcV9830mqip4KNn7F551duZe9FDqIsAE5R6SiaM3GRxJkJUHAHFBk%2BPdqT0YD9wfaGMqteookpaZZbQYuURAu%2BEcSNHosq2UrZ8GEyRzOyocmeYJT%2FBvBLtNX92v0%2Baeoad3NTYaJHdoTOv%2B6S2qoqqQRrPT0vN1Nek2kOzp95IKuVOJa38n4s1O3a6zqOOBROPZx%2BwFZrWNPBB8SANMSgJBzMiG9hUmvJsfxXyjnxu8vcH%2B%2FMysj8VCcmHs%2Fa9%2Bt7yi0cxZBMLyfi8oGOqUB47jojNx5UPg0cOp2ovaTPyONOgf6%2BRWYVy6hML86k2%2FK7Zv2oncfmGjyMOgCcqJbbnWhS0W%2FexT7sQpowWQeQq7AO%2BtZOAOXiGYoSRyXUSMcyVreVmXCiEQlbB111wxLYdYmSVQPxuGeddYsug4HbpPBfMElBMvLpjNEQH1xyDwlgffoN0mjML4ZAokdIQ%2FXyEtRXUmbIT82JArEmHaePLHl7uIY&X-Amz-Signature=adc19099c820b5dd87f9e3f852ffb1b8ed1384388a7ebc7094c64e23f3d4bf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
