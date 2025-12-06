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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPVERZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA5AjK6Zo9Iy83bQQ84LkPNT8Ga8pgMQXZo%2BL1e3oGgAiEAploFJP%2FzSTKGeiF9bWMWVDKoExMBxpi0NJQLdWN97IEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG8MpVaOP6qaeaHJuCrcA5Acr5QWfJhT8bYLaQf0fGOocA8sGWOG%2B075wIq8E1rW7uXCtUu%2BD0G%2FOzJxOoHvw2x7S%2BOVZC8jInwLrTF29nt2A7eaqlKHmgfwy4U%2FKAnfjrqrjLq%2BEHLr7LYBHRBSAbjBFN0Kii%2Fqw%2FDz%2F6xy0RjE%2FZi6vwK0Vto5205mBTnj6XmCXL5FrYWY7nY3AEKAgASG3NfDixSdM6XqG3Ise50loEQz3%2BRlzC5XVuALR5ex1Kzuiq7fBZhKcxcKg8Jx%2FJJjV9oVqjItRPtZWLaBbOth6XjI9KDUDD4lSvcLE0U3ABCZTyvF2QmrhO%2FblYqU4lXdDH%2Ft0bV7tOdRLKgF2QsXtJdKVFIdpcpAdJtOGlzJANiaCklI1NZGwd%2BGdysVg%2Fr9LZiwE7RM4Pb6uASCpGZFP6Fuj1BNabhOzX2SPCR2evRSui6O3%2F7lLoO4eHZfgiDoLCVDNT5jl7OVCMjOJqa8Arn6r%2Fs2TVz3FuF0jPP7wXdksE6l187xRUVzeHnECHAZh%2BIhJ8PXaYnHh9Rk5fn7UG6GXwdaCfsLwPIE39m4WK6wta1c9c7NUk0%2Bp0J6XiVJzB0vEKR39Mw6Dicdqu20UsleUE3YbqUcfTjxLM0KnTYQ19hoouRJfulQMMTM0ckGOqUBX1iFmhV3P7A4SrMiS2Q%2BRJHKV3RM6HaVxEPNPCXDc%2FFbfEwQQ3qnwjAg3jemzX32N2AStrs9LyiM9lZjbjqDDUupamKJJB0gfivJ0iDCohFfyz0z%2FK54xeZeI%2FTE7TsItf1XcROt6Q%2BXOS8zxxC6KIzRtSb9jgf6Qw9ZJTx%2BBfki%2FqpUPgAXKP25ZCv%2B%2FiTH2CoWN1OTJ69FsQaB3nX2D4W81H9F&X-Amz-Signature=6de8c5b8ea2b70fd0f5c59a149de47522b54fba4f6e7f7867206c73eb5cf7f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPVERZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA5AjK6Zo9Iy83bQQ84LkPNT8Ga8pgMQXZo%2BL1e3oGgAiEAploFJP%2FzSTKGeiF9bWMWVDKoExMBxpi0NJQLdWN97IEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG8MpVaOP6qaeaHJuCrcA5Acr5QWfJhT8bYLaQf0fGOocA8sGWOG%2B075wIq8E1rW7uXCtUu%2BD0G%2FOzJxOoHvw2x7S%2BOVZC8jInwLrTF29nt2A7eaqlKHmgfwy4U%2FKAnfjrqrjLq%2BEHLr7LYBHRBSAbjBFN0Kii%2Fqw%2FDz%2F6xy0RjE%2FZi6vwK0Vto5205mBTnj6XmCXL5FrYWY7nY3AEKAgASG3NfDixSdM6XqG3Ise50loEQz3%2BRlzC5XVuALR5ex1Kzuiq7fBZhKcxcKg8Jx%2FJJjV9oVqjItRPtZWLaBbOth6XjI9KDUDD4lSvcLE0U3ABCZTyvF2QmrhO%2FblYqU4lXdDH%2Ft0bV7tOdRLKgF2QsXtJdKVFIdpcpAdJtOGlzJANiaCklI1NZGwd%2BGdysVg%2Fr9LZiwE7RM4Pb6uASCpGZFP6Fuj1BNabhOzX2SPCR2evRSui6O3%2F7lLoO4eHZfgiDoLCVDNT5jl7OVCMjOJqa8Arn6r%2Fs2TVz3FuF0jPP7wXdksE6l187xRUVzeHnECHAZh%2BIhJ8PXaYnHh9Rk5fn7UG6GXwdaCfsLwPIE39m4WK6wta1c9c7NUk0%2Bp0J6XiVJzB0vEKR39Mw6Dicdqu20UsleUE3YbqUcfTjxLM0KnTYQ19hoouRJfulQMMTM0ckGOqUBX1iFmhV3P7A4SrMiS2Q%2BRJHKV3RM6HaVxEPNPCXDc%2FFbfEwQQ3qnwjAg3jemzX32N2AStrs9LyiM9lZjbjqDDUupamKJJB0gfivJ0iDCohFfyz0z%2FK54xeZeI%2FTE7TsItf1XcROt6Q%2BXOS8zxxC6KIzRtSb9jgf6Qw9ZJTx%2BBfki%2FqpUPgAXKP25ZCv%2B%2FiTH2CoWN1OTJ69FsQaB3nX2D4W81H9F&X-Amz-Signature=029cd7a6926d7458ee30b726094ae67e80a433e53cdc3914d963d9b46e385f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
