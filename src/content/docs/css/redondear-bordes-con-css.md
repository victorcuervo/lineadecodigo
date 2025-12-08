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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTBMWL3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bfcao9VHLzdwIac4Vpr%2FaUt6bzCsCNeSkXLVIjKU5uAIgY1%2F4k6hkI238we0OF1dqfCx9FFx43myhuVQg9k%2BwA5EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWb8I1MlDRb2BM2QCrcA0GN%2Fp65CTVQhWq4RBcU6GheyP%2Be2llrVP%2BlgwlMInFXpLOSednZ9i2RJG%2BYntBmuT9P4JnYvgvowmanOn6Ux1PB4Y33VV44yLX2qhcApVHov%2BLEJzQPNn9cSzzz8WZvaeUZLygTSH%2Bd03dCdyD4ZnPZdRZSrKenNZKUgx1HRhPLyzwdQjpY1A66OZRDbAtLZchKLUHFkJtCktj1CwdqVyozEAcLKbsk%2FFqLA9GCMgaKcYPKmj92ouLTSGAPI9E0zc%2Fh0VCjVSPIMtPOqHtJl4NrDNZ9%2BdjIoNb8FzIpe7lu5tuWaBxnq9O0uSuKWD5N0e6G5dJ36IkVkZHPynEBK7uzeWyL2f1jr9EaD4F4M34E4ZT91FdkcVvrllFMWg%2Fc0cxjfIu13UIvkG6gxbbKByld6YzSZjulYb%2FZwM10HNqsUOWlwCFstSW1GutNySNZKk0lcb%2BnN9orszIymWTsIYpkIPLOdVBNcPoGwZMIMS09vChTBgXu9hT%2FFyKZL50z4jLBFhpS2vmRddjwFH65tvo9lXUYNrKF51Z7JfYY%2BX3Q9nKcqchb8MdqL3GXKr%2BYV7yuzfuoKnUPg%2BWMPOFPuVfZTRnMYXcxQBSds7RyD29WDmYcQswX24CNG0arMIOQ28kGOqUBWsw%2BwOlZjJXqfeOSviKTUt1YoBh%2BljJhs4NW3pmwPuDckTooPlh%2FnbEmkHWdesbTm4ftkIr0FH3TcIegibwMXZciy4MoDpb1T09vMDFyJxoy5pJnm06kTihbdkiisTIfS%2BKDw1jMk9ZJjMaT4KltcZYx1M1PxwG6yBjVErNP%2BLFAAxFtVGT3RKFv%2BzNpG%2B61r2nGXJJ1LhPqgbdK3KIaqr0uRzZW&X-Amz-Signature=c114fe33a272780182d493c76c2095a642b3e9d844da337ef9efc0f8bbfbd887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTBMWL3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bfcao9VHLzdwIac4Vpr%2FaUt6bzCsCNeSkXLVIjKU5uAIgY1%2F4k6hkI238we0OF1dqfCx9FFx43myhuVQg9k%2BwA5EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWb8I1MlDRb2BM2QCrcA0GN%2Fp65CTVQhWq4RBcU6GheyP%2Be2llrVP%2BlgwlMInFXpLOSednZ9i2RJG%2BYntBmuT9P4JnYvgvowmanOn6Ux1PB4Y33VV44yLX2qhcApVHov%2BLEJzQPNn9cSzzz8WZvaeUZLygTSH%2Bd03dCdyD4ZnPZdRZSrKenNZKUgx1HRhPLyzwdQjpY1A66OZRDbAtLZchKLUHFkJtCktj1CwdqVyozEAcLKbsk%2FFqLA9GCMgaKcYPKmj92ouLTSGAPI9E0zc%2Fh0VCjVSPIMtPOqHtJl4NrDNZ9%2BdjIoNb8FzIpe7lu5tuWaBxnq9O0uSuKWD5N0e6G5dJ36IkVkZHPynEBK7uzeWyL2f1jr9EaD4F4M34E4ZT91FdkcVvrllFMWg%2Fc0cxjfIu13UIvkG6gxbbKByld6YzSZjulYb%2FZwM10HNqsUOWlwCFstSW1GutNySNZKk0lcb%2BnN9orszIymWTsIYpkIPLOdVBNcPoGwZMIMS09vChTBgXu9hT%2FFyKZL50z4jLBFhpS2vmRddjwFH65tvo9lXUYNrKF51Z7JfYY%2BX3Q9nKcqchb8MdqL3GXKr%2BYV7yuzfuoKnUPg%2BWMPOFPuVfZTRnMYXcxQBSds7RyD29WDmYcQswX24CNG0arMIOQ28kGOqUBWsw%2BwOlZjJXqfeOSviKTUt1YoBh%2BljJhs4NW3pmwPuDckTooPlh%2FnbEmkHWdesbTm4ftkIr0FH3TcIegibwMXZciy4MoDpb1T09vMDFyJxoy5pJnm06kTihbdkiisTIfS%2BKDw1jMk9ZJjMaT4KltcZYx1M1PxwG6yBjVErNP%2BLFAAxFtVGT3RKFv%2BzNpG%2B61r2nGXJJ1LhPqgbdK3KIaqr0uRzZW&X-Amz-Signature=f6d72aec05401ba463f75369d0337f02821493abc527d7f91ca2c43d5cfe156b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
