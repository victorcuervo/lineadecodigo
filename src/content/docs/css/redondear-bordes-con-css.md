---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCJWNYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCM1WBowPUUPIkNi4vCNt%2B9zNIks2Wy4GV8QC%2BBul8b4gIhAPxOzBk4MXSLNepR7IWN1aPM2rAbqrNd4rg14eoaALRNKv8DCDwQABoMNjM3NDIzMTgzODA1IgwbUR39WmVezQ25pAUq3AP4VBIl3acOtuMC0h7GVbrSUaf8quNf2kK0smGLWhTOtAeA1uObf61Jr07Xzus0zmM3CM5yx7sdSD5NdV3DMTyBSe%2FfCKCg39HBvpC8ctKniRf76B1CKsFSxLVbdfeY7%2BjN03NmCuZd1tADgd%2BMzYw5A0LqZlc0LAEbDynMN1sBctHws34iN6bSjMUqRBfgFNU8y6MQYfuxo2yp%2BykKHAkv0IN9GnmMA%2Bw3LPjrHw2pH1tdVCEjhM3YrqHGTTOTB%2BJwCg%2FiMLAby7ialrFSg3OXk0WoGg%2FNQFyDQAl5QLB1L1FdZmiD0Bwx%2FUO4PO%2BH0l9F%2B2MA6h7nGtLxcPFMZqWpKuumRY9wq6OlxQFrH02K261kV4m0nXvJDHGZDsLUkQcnJYwPcUjDdnFG6fBnYqUw%2BCuyA9zjdDjezw0K%2FKBbzpdCogJ3U%2F7RSs375NvVq4Hh5chJIDvKVhZXHJSqiiz6V%2BMAOaNFVeHbsv8piPfFHcLgJ%2ByBFWHd7AFSd3E5IiXsCEDjPlkV75%2FvcCRQ5lFIpvDRij%2BHef2dLTm%2F1jf9bx%2FkJ0Uh80aVU4ktubtvCiUtHR0CXiS4vsC8zgpgBAcLlpKe83UKSUvN1D7%2FKqtIiOt%2Bk99IIkeab0nyNzCo88PJBjqkAe1FxJqJr5ZhM1Z5UdnutWyTUj1C5o%2B1WB6xoh6gaLErMLGjrKYF%2B5MVyWW5wAj%2FOyPS9URcfZTjBiUaOzfQ%2BgHJbBZuHd71VsHgVxjJ1LKlNfWg0qnH16Gj100dp6YZlXRt75DzC4io0E0Spn4F045CSUxaaJxSAv%2BX9mqAAndC9ZGQIX1lLIdK9Eoz2x2sd97sOkW55g8tz80WNmvLvnfJEqZN&X-Amz-Signature=5b760530b92f58ba972481dd27c016651df671b86c58f0154a8d00f3f55da224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCJWNYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCM1WBowPUUPIkNi4vCNt%2B9zNIks2Wy4GV8QC%2BBul8b4gIhAPxOzBk4MXSLNepR7IWN1aPM2rAbqrNd4rg14eoaALRNKv8DCDwQABoMNjM3NDIzMTgzODA1IgwbUR39WmVezQ25pAUq3AP4VBIl3acOtuMC0h7GVbrSUaf8quNf2kK0smGLWhTOtAeA1uObf61Jr07Xzus0zmM3CM5yx7sdSD5NdV3DMTyBSe%2FfCKCg39HBvpC8ctKniRf76B1CKsFSxLVbdfeY7%2BjN03NmCuZd1tADgd%2BMzYw5A0LqZlc0LAEbDynMN1sBctHws34iN6bSjMUqRBfgFNU8y6MQYfuxo2yp%2BykKHAkv0IN9GnmMA%2Bw3LPjrHw2pH1tdVCEjhM3YrqHGTTOTB%2BJwCg%2FiMLAby7ialrFSg3OXk0WoGg%2FNQFyDQAl5QLB1L1FdZmiD0Bwx%2FUO4PO%2BH0l9F%2B2MA6h7nGtLxcPFMZqWpKuumRY9wq6OlxQFrH02K261kV4m0nXvJDHGZDsLUkQcnJYwPcUjDdnFG6fBnYqUw%2BCuyA9zjdDjezw0K%2FKBbzpdCogJ3U%2F7RSs375NvVq4Hh5chJIDvKVhZXHJSqiiz6V%2BMAOaNFVeHbsv8piPfFHcLgJ%2ByBFWHd7AFSd3E5IiXsCEDjPlkV75%2FvcCRQ5lFIpvDRij%2BHef2dLTm%2F1jf9bx%2FkJ0Uh80aVU4ktubtvCiUtHR0CXiS4vsC8zgpgBAcLlpKe83UKSUvN1D7%2FKqtIiOt%2Bk99IIkeab0nyNzCo88PJBjqkAe1FxJqJr5ZhM1Z5UdnutWyTUj1C5o%2B1WB6xoh6gaLErMLGjrKYF%2B5MVyWW5wAj%2FOyPS9URcfZTjBiUaOzfQ%2BgHJbBZuHd71VsHgVxjJ1LKlNfWg0qnH16Gj100dp6YZlXRt75DzC4io0E0Spn4F045CSUxaaJxSAv%2BX9mqAAndC9ZGQIX1lLIdK9Eoz2x2sd97sOkW55g8tz80WNmvLvnfJEqZN&X-Amz-Signature=49d8ba1fcfb54a531c8060ce1262b86594060f8a762ee3648b9213ec4dc8d7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
