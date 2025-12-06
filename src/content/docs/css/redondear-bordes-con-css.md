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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBEHESU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtRQ7Ml749REy1s5KOBvX7AXriHIuT1C%2Fj8I4uha2aKAiBEyF2ZX6lE4PnjVAEAsVzsT9cZQ8xsNbHstQiFd6xzTir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZBQcv8PA7kVVAELlKtwDeIZqrOOYpawtGrnCHcB4jTGj5Dky7f%2BiysRrHH372bTe5CM92DXUuzXh332KStP1rPg2ha3d2Kg4j0LfoMVkXFKZoINchdozEwxC5v%2Bi1ByolBmbEhtkgyvqQy8gN6o2lYrUXqDXtkh2nWENDgCPpdeDhqO4V%2FHIrBPK1qgpagrGmOjjjfJmlwItFDoS5xKQNPs8JINfHRON0AhuseP1e9Qj3cWPvQR8cgk0vh9eVjlh0xFlCnuqxVUc6IhyBdkY0cLCw%2FwmmdlnTLRdNbLWL%2BZ2uBOEJ0yOAvrq5dO1ksQibPyBBI6z61IZ1RBnx6%2Fxlz%2BabQZWIE0dLVM1pkEAWKa1oPcxxgQillU5GQ34mHhKp4qsqRkgBxZ1qN%2BB%2BXcHfl7WKkFwL6yadjzRrkhWHw8vwXCDizjla06gmjaqgUlobbum29rTZq2aeI3rofxspBqfDYAl%2BGlwVaqydbFXY9CR7v%2BsOELS5x0xVv2fsrx6IRFAbpbr2EETwaY%2BEMM4SogF9Zqgc1CHzHM%2BrxeErDxnecqC%2FXfj%2FPi9FF6HxAdf2MatB%2F%2FTFHTPmYG%2Bf6vKfyK9qlfYbNVIiX4FTlOp9LLAROf%2BQgou7HUUlyVHtO7d5K3oJmznvw%2BdyVkwiMrRyQY6pgF9gec7DQ5G8mWgMV6L9bl6HOYwChfjdv6rtNxEJPGrhbQKJ2OIZEjH5PlucMkAbn28y8e9waoAwG3hfHsQ7Nyn9Y1HW8XGgp9esTYYc2Kpe1dWl%2FQfEIsEPoQCRiRNUlEJwkmw%2Bkvv718dGt2bT6fV66Y%2B2P4XBS9iR%2Btfi10AKD1pRLpALJmgoGMAtMt7wtwoZCmWJYHl8ik6MBWwKJkaSXx71mCp&X-Amz-Signature=e2b778e7890bb5fb6d96b78ca8d319757601989cfd4f7d6be4df66cb0c99468a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBEHESU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtRQ7Ml749REy1s5KOBvX7AXriHIuT1C%2Fj8I4uha2aKAiBEyF2ZX6lE4PnjVAEAsVzsT9cZQ8xsNbHstQiFd6xzTir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZBQcv8PA7kVVAELlKtwDeIZqrOOYpawtGrnCHcB4jTGj5Dky7f%2BiysRrHH372bTe5CM92DXUuzXh332KStP1rPg2ha3d2Kg4j0LfoMVkXFKZoINchdozEwxC5v%2Bi1ByolBmbEhtkgyvqQy8gN6o2lYrUXqDXtkh2nWENDgCPpdeDhqO4V%2FHIrBPK1qgpagrGmOjjjfJmlwItFDoS5xKQNPs8JINfHRON0AhuseP1e9Qj3cWPvQR8cgk0vh9eVjlh0xFlCnuqxVUc6IhyBdkY0cLCw%2FwmmdlnTLRdNbLWL%2BZ2uBOEJ0yOAvrq5dO1ksQibPyBBI6z61IZ1RBnx6%2Fxlz%2BabQZWIE0dLVM1pkEAWKa1oPcxxgQillU5GQ34mHhKp4qsqRkgBxZ1qN%2BB%2BXcHfl7WKkFwL6yadjzRrkhWHw8vwXCDizjla06gmjaqgUlobbum29rTZq2aeI3rofxspBqfDYAl%2BGlwVaqydbFXY9CR7v%2BsOELS5x0xVv2fsrx6IRFAbpbr2EETwaY%2BEMM4SogF9Zqgc1CHzHM%2BrxeErDxnecqC%2FXfj%2FPi9FF6HxAdf2MatB%2F%2FTFHTPmYG%2Bf6vKfyK9qlfYbNVIiX4FTlOp9LLAROf%2BQgou7HUUlyVHtO7d5K3oJmznvw%2BdyVkwiMrRyQY6pgF9gec7DQ5G8mWgMV6L9bl6HOYwChfjdv6rtNxEJPGrhbQKJ2OIZEjH5PlucMkAbn28y8e9waoAwG3hfHsQ7Nyn9Y1HW8XGgp9esTYYc2Kpe1dWl%2FQfEIsEPoQCRiRNUlEJwkmw%2Bkvv718dGt2bT6fV66Y%2B2P4XBS9iR%2Btfi10AKD1pRLpALJmgoGMAtMt7wtwoZCmWJYHl8ik6MBWwKJkaSXx71mCp&X-Amz-Signature=e02565d3b981eb869fc17dfd3bf04aedd8441dce1ed959ab4fce9e978f00d6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
