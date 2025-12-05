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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BCIUFE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOYGgvFKEPKxhwSvajoWTK2p35UVxSA2CJKxRJHn9izgIhANPqimduOnL1XIk9wmNfVl9ll6LUzIACvda2TBWqf%2F5tKv8DCE8QABoMNjM3NDIzMTgzODA1IgzcJst6twiUxhLnjy8q3AMVtNXCsIjQMQbxvrNViFrLGpXzYIu0GJ7zWh6JVNVvfscYheKS3CNYEob9bpYwsVu9EXW%2FepYjfWizig0pyw94f%2FdJz%2B7yHqomShz6Yu9OH1fr%2FMyfKNZrnbv82AW7PPPgXh0FRtl8IxaJC1nBm7MXyGMoIBZz08qVaT6QFQCuBDBXFcwqGXI2Xi3jOkAvbQosaRXEJPA3gOi2B3KeUsyM1OFCXPmvXq4%2FJ5Ot99VwHWIEJv9XEOcXHyH8R5WgB9tRgbvShklI0KGduuPhBuGr4pUajGzziLtlrXq118r1LO6E2cTVMd%2B4ZkAwWiTbxAUl6wlRrCgykuoUVWzPwu8d01SI%2BNH%2F1cXhsHzFjMtn6bLIF1VspgFILhDqtWKBlAm44phh89IwHtH%2FoWfyC9E33RLwb5YEvnGPPd3uFOigf6P3UK7WEltxLA8cl94n5tusZaCdrGJwYjT%2Bcuiv%2FEH1XJ1j5cUQBGEz43XFinlEktQdIBuntYxwZolg%2BqTWy2h62v60KrXLTYo88MxRIh2SraS%2BynEkxZbmZO1IaFzvmcuRjv%2Fvos0kxnTYgb7NdNzwQVbtLoDPWCxhzLU6FcTEg5tXE6Q35oLa5A%2FK1RqdY7BjC%2Fm%2BF9WiwNlVqjCejMjJBjqkAaO3Lj1bnSTb8T5FpptszPQIkVGS%2BhmPorN4MMPfJKQ%2Ff%2Fq29N3Qv9vKq0YcNrwz1cYA1%2FW1NZSpr95doYddZiHteunMs%2FySjK2yTUTbAASUABRu8pe2T6QFgOVzFYuT8hi5bTU%2BzHT9rR%2FEeXP9hYBdNshoXi8ifunom4Hc46XEDBFC9%2BCcUmDDNSTyBhrUAdal%2FJC0VgTUDzCH4srXgj2fWhdK&X-Amz-Signature=66f93af5adcfd3df2b125bb62c802e869d7f0db03a6719c59346877c2a1c1e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BCIUFE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOYGgvFKEPKxhwSvajoWTK2p35UVxSA2CJKxRJHn9izgIhANPqimduOnL1XIk9wmNfVl9ll6LUzIACvda2TBWqf%2F5tKv8DCE8QABoMNjM3NDIzMTgzODA1IgzcJst6twiUxhLnjy8q3AMVtNXCsIjQMQbxvrNViFrLGpXzYIu0GJ7zWh6JVNVvfscYheKS3CNYEob9bpYwsVu9EXW%2FepYjfWizig0pyw94f%2FdJz%2B7yHqomShz6Yu9OH1fr%2FMyfKNZrnbv82AW7PPPgXh0FRtl8IxaJC1nBm7MXyGMoIBZz08qVaT6QFQCuBDBXFcwqGXI2Xi3jOkAvbQosaRXEJPA3gOi2B3KeUsyM1OFCXPmvXq4%2FJ5Ot99VwHWIEJv9XEOcXHyH8R5WgB9tRgbvShklI0KGduuPhBuGr4pUajGzziLtlrXq118r1LO6E2cTVMd%2B4ZkAwWiTbxAUl6wlRrCgykuoUVWzPwu8d01SI%2BNH%2F1cXhsHzFjMtn6bLIF1VspgFILhDqtWKBlAm44phh89IwHtH%2FoWfyC9E33RLwb5YEvnGPPd3uFOigf6P3UK7WEltxLA8cl94n5tusZaCdrGJwYjT%2Bcuiv%2FEH1XJ1j5cUQBGEz43XFinlEktQdIBuntYxwZolg%2BqTWy2h62v60KrXLTYo88MxRIh2SraS%2BynEkxZbmZO1IaFzvmcuRjv%2Fvos0kxnTYgb7NdNzwQVbtLoDPWCxhzLU6FcTEg5tXE6Q35oLa5A%2FK1RqdY7BjC%2Fm%2BF9WiwNlVqjCejMjJBjqkAaO3Lj1bnSTb8T5FpptszPQIkVGS%2BhmPorN4MMPfJKQ%2Ff%2Fq29N3Qv9vKq0YcNrwz1cYA1%2FW1NZSpr95doYddZiHteunMs%2FySjK2yTUTbAASUABRu8pe2T6QFgOVzFYuT8hi5bTU%2BzHT9rR%2FEeXP9hYBdNshoXi8ifunom4Hc46XEDBFC9%2BCcUmDDNSTyBhrUAdal%2FJC0VgTUDzCH4srXgj2fWhdK&X-Amz-Signature=be814deb31fd330c6a7ceb8c95721fd8cff93f11bf4d224e09c536ec150927e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
