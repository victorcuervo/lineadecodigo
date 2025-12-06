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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLKSLA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQ5jSuC9SzechPqr56a41MBUCtvVIh%2BPpx%2FMvGzwsGwIhAI8ipRpUnmQJcUd8IO2DdqzHGtKty86oOuoy7QCDQYyZKv8DCHMQABoMNjM3NDIzMTgzODA1Igxe8SM6odDqzFmIjxIq3APXVzvOBER7SJ9flNN%2BGHjyx2rep1s%2B%2FK08%2FdLstpbPMRUEom%2Fnb8kC1QnaEmpV9L6ZZeswa6qC5Qrc4Kso%2BqfQxfWZsIYkQp%2FhGnOvyIyUNq9MV4%2FxzZH8fzmRN2Dyw8io9bY9ct5JvnoTkFx8oNco27WNXrIf2rpiNYmoh4QKO7%2Fr1bAS8VzFXEim70FaO0N50agv2AbBV1Rd8ScrZlNsyLj2SPTTTtUjR6tySkG73lgwwiAdNzn0O9oebiQLTkeuXW3RPvLKWaJthzqvthCgwRhVPpT0TiywijX8o%2BwanOciWx2hEk%2BjW7S0cvFmgZCY22GqvuPcaxO9nG4dRb0U9NXjaTsXdwkPG4VmusBCnuo%2BimYrXI39ZJzjq12tAh7JLLBRUupjaJ2GkFTQ2IyGohrw5ejWRU482l9a7d29wKuhorENJgj3Lzqml29I5lYYVso8RkrZR5%2BzmfOtL538kHzexe6MLy3ymZGMnjAhy%2B8qG356HgGiNcPo%2FfzmCZP8%2FnThqcwMuncqGNxOHdBQoXeuhrtnK4E0l2%2BtMMpga5szfWxgWlLg0BMGHkgiArBxKsmxRQ353PiVFMTWuhGD2cQzidq9TUAzbq6UEwPXNHDGqV1IDz3LSKdYqDDTidDJBjqkASgRf2O4Y97leBMRkGNxq7TOe98ZeXNdeVqN1kG0lk%2F8aNlm0xy8TV5cD%2BPbMfUlwuZ4cC8z85hL6Zf71GQPDQK%2FSpNO9xI7TMa2VrBTMETDBTHDNxvBpRQZCdAdzIreJUFcTLm%2F6uYFQ1F%2B5QPlAQExZyOhzRlfzqH%2BO3jSNGDy9HLzV8iBNObN26dC7k1a6Q%2BQQmRWtjA%2Fbzs%2Bf6cnnMJjq3Wj&X-Amz-Signature=a8ce3ba5020d381a18e380ff79ce39bb9d51ad0149e80710c5cf1103a8a96f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLKSLA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQ5jSuC9SzechPqr56a41MBUCtvVIh%2BPpx%2FMvGzwsGwIhAI8ipRpUnmQJcUd8IO2DdqzHGtKty86oOuoy7QCDQYyZKv8DCHMQABoMNjM3NDIzMTgzODA1Igxe8SM6odDqzFmIjxIq3APXVzvOBER7SJ9flNN%2BGHjyx2rep1s%2B%2FK08%2FdLstpbPMRUEom%2Fnb8kC1QnaEmpV9L6ZZeswa6qC5Qrc4Kso%2BqfQxfWZsIYkQp%2FhGnOvyIyUNq9MV4%2FxzZH8fzmRN2Dyw8io9bY9ct5JvnoTkFx8oNco27WNXrIf2rpiNYmoh4QKO7%2Fr1bAS8VzFXEim70FaO0N50agv2AbBV1Rd8ScrZlNsyLj2SPTTTtUjR6tySkG73lgwwiAdNzn0O9oebiQLTkeuXW3RPvLKWaJthzqvthCgwRhVPpT0TiywijX8o%2BwanOciWx2hEk%2BjW7S0cvFmgZCY22GqvuPcaxO9nG4dRb0U9NXjaTsXdwkPG4VmusBCnuo%2BimYrXI39ZJzjq12tAh7JLLBRUupjaJ2GkFTQ2IyGohrw5ejWRU482l9a7d29wKuhorENJgj3Lzqml29I5lYYVso8RkrZR5%2BzmfOtL538kHzexe6MLy3ymZGMnjAhy%2B8qG356HgGiNcPo%2FfzmCZP8%2FnThqcwMuncqGNxOHdBQoXeuhrtnK4E0l2%2BtMMpga5szfWxgWlLg0BMGHkgiArBxKsmxRQ353PiVFMTWuhGD2cQzidq9TUAzbq6UEwPXNHDGqV1IDz3LSKdYqDDTidDJBjqkASgRf2O4Y97leBMRkGNxq7TOe98ZeXNdeVqN1kG0lk%2F8aNlm0xy8TV5cD%2BPbMfUlwuZ4cC8z85hL6Zf71GQPDQK%2FSpNO9xI7TMa2VrBTMETDBTHDNxvBpRQZCdAdzIreJUFcTLm%2F6uYFQ1F%2B5QPlAQExZyOhzRlfzqH%2BO3jSNGDy9HLzV8iBNObN26dC7k1a6Q%2BQQmRWtjA%2Fbzs%2Bf6cnnMJjq3Wj&X-Amz-Signature=6e154c8c146e47027392014120539ddfba0b3f08f514c47d3f1ea87569cc79cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
