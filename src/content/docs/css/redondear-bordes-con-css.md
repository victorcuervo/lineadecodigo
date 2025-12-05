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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMEVWKN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbUClN4XQH6l%2FiOcsNrRIioYJNLD%2BESpG8vuDEHXhbfAiEAoWvRUNM4J2ocf5G79JP0KCW0hoE4CdPs3EXg%2FbBih6cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGgKMYo2vsLQK1YVkyrcAxfTLXCT5DeT2zZXHRFgF%2BIlZSVsyzNihC82HPvSOHP7KGoKrqfc7rwBj11ocyAi8MBg8lJiOrP1uZbBkqBw%2F%2BLe%2BUp5H8D5oX9iI8BCK414T0PMd0opRMc%2FPgSRVN%2Fj6MwLf9ygVRBPaebWQCiM1G24cFZP3y%2BSSOSPz6JfrR7DealJd1NWPGw%2FmwQGOggrg%2BWC6ckepTMY8teUOaHwXLK%2BWoIrJNCugARMZLVUJMBFtD8rOvAj11J0DXrdnq79Ye4%2Fhv4GaORPy0tNihO3Xv6feph7NWhBOMi1iBAurreGC%2FU18%2FXOltSr6lg8%2B%2BzEFylhBLN84PB5egAdZO6M4HRIoNWdRVhFwI1fxtuy73Z25MwzCrFkcPx6ff%2FjWvx%2B5eyusz1NikW6CF6k2FbKfcOudPd%2Ff5uRF04UheEvvH6cruwi50yyC%2B%2BhDCrXsKD%2F%2BnLSByV7G%2F8pdVGLe4q7Ly1noDpp%2BegF903sX%2F%2FqeOci3S98H4H3Zx1htDYQy2cyIOVX9m8n%2BGkg1ZzNDs7SekfftAQ655N3qKrVI5JMQsHt8ZVTiS%2FYKx9ffsKQZH4%2FH3%2Fnws%2BMqUjsHocPBCU2O5Y80WZs%2BMQ4Wi709PExKy4zpHvP0iAVAofHnXfwMOrDyskGOqUB630KlqJ94Dk%2F6zpTk7qRVVGRfF%2FTBbd1EZncVMzy915q%2FlOhcKy076u16OIYcvBZcHNTMX7QL0zRvprobulnuZRSqiLH%2F4fQw0qwVPyqfZORZLXDtbhl7CTzHZ8A6aUt7Kqvxmr8lkgnKJ%2FozYnsk%2BP2PTX8fregaRD8cRXdErCTidsT3v9UzuZarGuEqHPlF3WcgPwZGW98OfjdzyD5Si3arHfB&X-Amz-Signature=37607b0219c430d9267c1d29d2dd5ec08b3186686b6f431cc6e9b142e1c66a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMEVWKN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbUClN4XQH6l%2FiOcsNrRIioYJNLD%2BESpG8vuDEHXhbfAiEAoWvRUNM4J2ocf5G79JP0KCW0hoE4CdPs3EXg%2FbBih6cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGgKMYo2vsLQK1YVkyrcAxfTLXCT5DeT2zZXHRFgF%2BIlZSVsyzNihC82HPvSOHP7KGoKrqfc7rwBj11ocyAi8MBg8lJiOrP1uZbBkqBw%2F%2BLe%2BUp5H8D5oX9iI8BCK414T0PMd0opRMc%2FPgSRVN%2Fj6MwLf9ygVRBPaebWQCiM1G24cFZP3y%2BSSOSPz6JfrR7DealJd1NWPGw%2FmwQGOggrg%2BWC6ckepTMY8teUOaHwXLK%2BWoIrJNCugARMZLVUJMBFtD8rOvAj11J0DXrdnq79Ye4%2Fhv4GaORPy0tNihO3Xv6feph7NWhBOMi1iBAurreGC%2FU18%2FXOltSr6lg8%2B%2BzEFylhBLN84PB5egAdZO6M4HRIoNWdRVhFwI1fxtuy73Z25MwzCrFkcPx6ff%2FjWvx%2B5eyusz1NikW6CF6k2FbKfcOudPd%2Ff5uRF04UheEvvH6cruwi50yyC%2B%2BhDCrXsKD%2F%2BnLSByV7G%2F8pdVGLe4q7Ly1noDpp%2BegF903sX%2F%2FqeOci3S98H4H3Zx1htDYQy2cyIOVX9m8n%2BGkg1ZzNDs7SekfftAQ655N3qKrVI5JMQsHt8ZVTiS%2FYKx9ffsKQZH4%2FH3%2Fnws%2BMqUjsHocPBCU2O5Y80WZs%2BMQ4Wi709PExKy4zpHvP0iAVAofHnXfwMOrDyskGOqUB630KlqJ94Dk%2F6zpTk7qRVVGRfF%2FTBbd1EZncVMzy915q%2FlOhcKy076u16OIYcvBZcHNTMX7QL0zRvprobulnuZRSqiLH%2F4fQw0qwVPyqfZORZLXDtbhl7CTzHZ8A6aUt7Kqvxmr8lkgnKJ%2FozYnsk%2BP2PTX8fregaRD8cRXdErCTidsT3v9UzuZarGuEqHPlF3WcgPwZGW98OfjdzyD5Si3arHfB&X-Amz-Signature=521df229a1c3c1164678cbab2916b9c0e78e5132d42022303f8d143cd1f2d947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
