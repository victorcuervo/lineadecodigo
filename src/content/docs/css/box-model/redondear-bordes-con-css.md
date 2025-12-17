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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWO2R5XI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbFG3bs1CllWUpgDjK%2BwSDqqeuftlANIMQc7h0Wv6hXAiEAqfQgUwAFjrC%2BJMHHhP6xxPgrVk8NXfLTnmGmMSXEG80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGYpB8iuPg8%2BJI9JhCrcA66ZCmFzZ9ly%2BkREejseSMgR1scsyuNqvOBVxKZwncnMtpdktvIw%2FiSBGhq8nSeD%2F517SjvgWEEjAI7roELz0klMIsqsq5ff8zxUhcPzHefcLktxTd9Y7wQXaKAJ2lNwhglovGKCmA0HIXCpPoZbhae9HYKXWJIQpmvG20q238%2FTIy2M5bwqv0OqAS0RclgpuK%2BSIc%2Bi%2BsOm0h%2FlGaULjAjnQyZ0jKXRiCjDvxJjJiem43g1wf71yLSuxLLwHibs9E6lKuYhKcflxc5Ym86cnKduOMFb2kJTNUwK9TJamJtzQlT%2FWStIYX%2FGMFsO4zvfpiTRObZX1RHJp8%2F2z64%2BFHUJto27qZFDOJg5qBsg4rgfoYuok6ojrNtWe1ypT72IAuova%2Fv8KsLWFh0m13G5mJY%2Ft7OtBk2xxIIb38%2BYZjPeaCFWctohRcuacRaUbcnV%2FjOOJPPWlNgl6xVAjt1sgULNI6%2F6FlUcADc81HcF304f9a3Zl3fpgofptQSQrwBplTyvHNF5zOCMXmxRg1da6U%2B8GDhgvtyb%2F3ie9KlV3xBlpoJ3Ab4cnrxguybmuVxVfvAN6REKcMkwgepEGH7iwXjCxsuxaNq0%2B9SNhI14YXnu4bx3ntZD5u0P4l91MP3eh8oGOqUB4ncDN4urOYeUlIJiQtRyG%2Fz%2BVxXkMj1O5LCQ7QVsklLxox6Sxpeu3zT0FzluCDfHRcqsDXzPOiG52SWJudVIVVhyZCcAAzsDTptY13uwxnbpNGhPys55gJnuaf4O%2BIZ8r5CHDDD1CXD%2BBXt0VEjENrSylA254dzdNZ8P%2B7wi3M3FJ27FoL0fTZZfcZ5Ojs7Vxg%2BjfmQSdp0PvMNWcC3NoH1WRIxW&X-Amz-Signature=f402cfcf9d13d8592e7c47a4196c8eea9654fe8c2ec6e17c9494a671f803b294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWO2R5XI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbFG3bs1CllWUpgDjK%2BwSDqqeuftlANIMQc7h0Wv6hXAiEAqfQgUwAFjrC%2BJMHHhP6xxPgrVk8NXfLTnmGmMSXEG80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGYpB8iuPg8%2BJI9JhCrcA66ZCmFzZ9ly%2BkREejseSMgR1scsyuNqvOBVxKZwncnMtpdktvIw%2FiSBGhq8nSeD%2F517SjvgWEEjAI7roELz0klMIsqsq5ff8zxUhcPzHefcLktxTd9Y7wQXaKAJ2lNwhglovGKCmA0HIXCpPoZbhae9HYKXWJIQpmvG20q238%2FTIy2M5bwqv0OqAS0RclgpuK%2BSIc%2Bi%2BsOm0h%2FlGaULjAjnQyZ0jKXRiCjDvxJjJiem43g1wf71yLSuxLLwHibs9E6lKuYhKcflxc5Ym86cnKduOMFb2kJTNUwK9TJamJtzQlT%2FWStIYX%2FGMFsO4zvfpiTRObZX1RHJp8%2F2z64%2BFHUJto27qZFDOJg5qBsg4rgfoYuok6ojrNtWe1ypT72IAuova%2Fv8KsLWFh0m13G5mJY%2Ft7OtBk2xxIIb38%2BYZjPeaCFWctohRcuacRaUbcnV%2FjOOJPPWlNgl6xVAjt1sgULNI6%2F6FlUcADc81HcF304f9a3Zl3fpgofptQSQrwBplTyvHNF5zOCMXmxRg1da6U%2B8GDhgvtyb%2F3ie9KlV3xBlpoJ3Ab4cnrxguybmuVxVfvAN6REKcMkwgepEGH7iwXjCxsuxaNq0%2B9SNhI14YXnu4bx3ntZD5u0P4l91MP3eh8oGOqUB4ncDN4urOYeUlIJiQtRyG%2Fz%2BVxXkMj1O5LCQ7QVsklLxox6Sxpeu3zT0FzluCDfHRcqsDXzPOiG52SWJudVIVVhyZCcAAzsDTptY13uwxnbpNGhPys55gJnuaf4O%2BIZ8r5CHDDD1CXD%2BBXt0VEjENrSylA254dzdNZ8P%2B7wi3M3FJ27FoL0fTZZfcZ5Ojs7Vxg%2BjfmQSdp0PvMNWcC3NoH1WRIxW&X-Amz-Signature=223ff165e0016fb7857b006f13fd48429a7117b7c29b9ef370859812b78985ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
