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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2LYAXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA4DAEduCocvLlKJAu3UcnWh63LWYjh48eh8BgDmKH6MAiBjDOPDMDLhUFNF9kPt0BtkSxTS4WX1cqregQr5q%2FM3Uir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZolBq%2FQFnXDJkCW%2FKtwDe1VdbtT4c70zWpLU0eXfFJpkJQZQIsx62bQI%2FtOAvAMy62cL0QwFCQp5aZGAsPilTOk3BBYanylSqaEPD3WTsxEP622evuF714%2FhGR0lwl8ek3XfK15uTYQXQx8GuUY6HVzOjpekFlB6mCvyqUMfR1yQBTGOtgMVEMI1vy7jxexX3g7UMVES4UD9fO%2B9SQGYUbWuS18LRg24LgVQFWFHmL0VBXSjljf2NDVz3vSGcNOCL8csHtFNuWIWXwbRXdHTmY6kZkdqRw1Ffxa3yMmay5NJOtIOIhhwyypuc9KkMu7AEmROxXERFPpAvBu1mPuOeMum%2FG%2FpHGLve6GEu2297b4iFg2mIvzhiAKX8Zo4auFooxPtJbfM7%2B2od52CogFV987F%2FK2mBrYEwg3yAQpXJAvjPsy6zwuT%2Bk8ZGFigM33b9yRL%2B3FHdhIq5W4mJld6xFZQ6NTx3ejyQeSX0hMB4%2BmN0KPuv7Kb7lDn8LBFbDD3f5J24f4QBc5HwZRhG8IIw8AGjImUv4ugbgobAD0B1%2BU7e6hzviTV0T2%2BZ5r7TbS2Oy500pO1aJs%2BRVc4Y2PPkP51kSHAt%2BoPAykN7QSQ%2FkNzY3zbbLx7jdPsn0fsSKEVzjK%2BjMR7yf4DUT0wrqHGyQY6pgFcTlg2icazp9EQmR05qELUt72VKFxhxZJFFy6Sl9uKTci%2FgIvpLUjAF%2F8gSFzVgAqqZu%2Bj7FRIB7ssTOnXmGRKvorXHzxRmVrpp3GdYDJtyhObbfmxJGxrTAWoz%2FKPwTZ9PiNPILXrZQxL2kWfFcLM86CHhOCEq7eIVZWBeCDS6OVOm8EEWbfyCs8gKG7gcWWxyPgp66%2BrCmoyn8RZ0kUtdl3%2F3m%2Bj&X-Amz-Signature=6d0091ec7f26a736c29f5759b89933e4562548c0df5e1776c412eb14db04a0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2LYAXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA4DAEduCocvLlKJAu3UcnWh63LWYjh48eh8BgDmKH6MAiBjDOPDMDLhUFNF9kPt0BtkSxTS4WX1cqregQr5q%2FM3Uir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZolBq%2FQFnXDJkCW%2FKtwDe1VdbtT4c70zWpLU0eXfFJpkJQZQIsx62bQI%2FtOAvAMy62cL0QwFCQp5aZGAsPilTOk3BBYanylSqaEPD3WTsxEP622evuF714%2FhGR0lwl8ek3XfK15uTYQXQx8GuUY6HVzOjpekFlB6mCvyqUMfR1yQBTGOtgMVEMI1vy7jxexX3g7UMVES4UD9fO%2B9SQGYUbWuS18LRg24LgVQFWFHmL0VBXSjljf2NDVz3vSGcNOCL8csHtFNuWIWXwbRXdHTmY6kZkdqRw1Ffxa3yMmay5NJOtIOIhhwyypuc9KkMu7AEmROxXERFPpAvBu1mPuOeMum%2FG%2FpHGLve6GEu2297b4iFg2mIvzhiAKX8Zo4auFooxPtJbfM7%2B2od52CogFV987F%2FK2mBrYEwg3yAQpXJAvjPsy6zwuT%2Bk8ZGFigM33b9yRL%2B3FHdhIq5W4mJld6xFZQ6NTx3ejyQeSX0hMB4%2BmN0KPuv7Kb7lDn8LBFbDD3f5J24f4QBc5HwZRhG8IIw8AGjImUv4ugbgobAD0B1%2BU7e6hzviTV0T2%2BZ5r7TbS2Oy500pO1aJs%2BRVc4Y2PPkP51kSHAt%2BoPAykN7QSQ%2FkNzY3zbbLx7jdPsn0fsSKEVzjK%2BjMR7yf4DUT0wrqHGyQY6pgFcTlg2icazp9EQmR05qELUt72VKFxhxZJFFy6Sl9uKTci%2FgIvpLUjAF%2F8gSFzVgAqqZu%2Bj7FRIB7ssTOnXmGRKvorXHzxRmVrpp3GdYDJtyhObbfmxJGxrTAWoz%2FKPwTZ9PiNPILXrZQxL2kWfFcLM86CHhOCEq7eIVZWBeCDS6OVOm8EEWbfyCs8gKG7gcWWxyPgp66%2BrCmoyn8RZ0kUtdl3%2F3m%2Bj&X-Amz-Signature=b7194929d2f4b572487aa9dfe820a6987761da19aa733aec19596c9504c9ec52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
