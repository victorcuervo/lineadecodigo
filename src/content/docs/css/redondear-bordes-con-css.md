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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWYQPVX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQeCG%2BQ0A0VxmhaaU%2FS0TUaU2dmNDwyjcmBeRxP22EzQIgVXEjtu8ejc7enMvUDDj9rxgYfy86PJT%2B3gb3tCloiHwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHdNwy%2BVA7%2BQc97iSrcA2SDu5qBadA0Pr%2Bp6yCW5tvPGGH80VxXs%2FItnZXWs0rtv8xhiaDx72y%2F8USeBiATly%2FljqAqhaOjqYrr11XIacifYQs09HTFP9%2FTaZWZZ%2FyF2b0nI5ZWmEeZpQz6WY2f9ydtshzUlq0TMDTv%2BGBkQeCvYCPhZKHCCOLZ%2Bcfnfib84dLUAIvkCkqWKRVTaGl0oGkyMfv3JU2ScA2gs%2B7WQYuInLyqtPeBCm3So0Wy7NjCwyuod%2FkLL6YzKVJkqKN9fZHaxsTyiCP7FfGyLKhU3ZaGB2fOheXBk3IHxf1jR2pZrfxVQ59U0QxFvIISE3WXh9ZuxHOv6Q%2FD9xKGl4ETj6XhCMxPkP8OS4NwVjnydMB68%2FcY34d36UTvysPZORcpwOOzGvr1oPrvhc87%2BGMf1P6HPAWDBuxQc28gxx49NlBnWm7%2FU9VQLbJ%2BaqMsWjgee4jZW0a2sSB3CN2lcfRe9%2BVBiprdymVkHHvEUqrWFAshrKnQS1W3qM12xHUxv1mPHEon2oEHHZiFjRsN5UChtDTS3WQfVsCyvRnfbjibHYaxsagyC7UJKY%2F7lGkY4B%2B%2BZynk%2F%2FcZ8L%2BTmv1RmONNaT6FWSmCoFsr4qSw3PX2Pf8Sxs3Ci7ZBAhBrcgK%2BMJ2f1MkGOqUBDB0M9F2zNp%2B3RJ3XPaH1QG%2BRfVNJ85%2F5TQuIjkYc7oTMhEcAHvQ20IZkCG8sd4K%2BQe3NPKfyhmf2mQUyPy6WIB3zRQaVo7R0aU%2BEUTsQq1MDKb%2B9gF0J%2Bz7YT2fRHRpsHa17LTb%2BpGd3kNmengLD6mjEYbzrn3WeDQ87FceJK6s%2F25kx17TL3PHaO%2FCT5cQCJgR%2BHfzVjEVTVuw6WjXgqanfbkL7&X-Amz-Signature=eccdc87066939f5bd8c1ef4d3d12ee9c58f32b7b0d58f720395b8025716338b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWYQPVX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQeCG%2BQ0A0VxmhaaU%2FS0TUaU2dmNDwyjcmBeRxP22EzQIgVXEjtu8ejc7enMvUDDj9rxgYfy86PJT%2B3gb3tCloiHwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHdNwy%2BVA7%2BQc97iSrcA2SDu5qBadA0Pr%2Bp6yCW5tvPGGH80VxXs%2FItnZXWs0rtv8xhiaDx72y%2F8USeBiATly%2FljqAqhaOjqYrr11XIacifYQs09HTFP9%2FTaZWZZ%2FyF2b0nI5ZWmEeZpQz6WY2f9ydtshzUlq0TMDTv%2BGBkQeCvYCPhZKHCCOLZ%2Bcfnfib84dLUAIvkCkqWKRVTaGl0oGkyMfv3JU2ScA2gs%2B7WQYuInLyqtPeBCm3So0Wy7NjCwyuod%2FkLL6YzKVJkqKN9fZHaxsTyiCP7FfGyLKhU3ZaGB2fOheXBk3IHxf1jR2pZrfxVQ59U0QxFvIISE3WXh9ZuxHOv6Q%2FD9xKGl4ETj6XhCMxPkP8OS4NwVjnydMB68%2FcY34d36UTvysPZORcpwOOzGvr1oPrvhc87%2BGMf1P6HPAWDBuxQc28gxx49NlBnWm7%2FU9VQLbJ%2BaqMsWjgee4jZW0a2sSB3CN2lcfRe9%2BVBiprdymVkHHvEUqrWFAshrKnQS1W3qM12xHUxv1mPHEon2oEHHZiFjRsN5UChtDTS3WQfVsCyvRnfbjibHYaxsagyC7UJKY%2F7lGkY4B%2B%2BZynk%2F%2FcZ8L%2BTmv1RmONNaT6FWSmCoFsr4qSw3PX2Pf8Sxs3Ci7ZBAhBrcgK%2BMJ2f1MkGOqUBDB0M9F2zNp%2B3RJ3XPaH1QG%2BRfVNJ85%2F5TQuIjkYc7oTMhEcAHvQ20IZkCG8sd4K%2BQe3NPKfyhmf2mQUyPy6WIB3zRQaVo7R0aU%2BEUTsQq1MDKb%2B9gF0J%2Bz7YT2fRHRpsHa17LTb%2BpGd3kNmengLD6mjEYbzrn3WeDQ87FceJK6s%2F25kx17TL3PHaO%2FCT5cQCJgR%2BHfzVjEVTVuw6WjXgqanfbkL7&X-Amz-Signature=3b872ba0b8beaa487c09f051413d7bc307831578e22f61a274b1f590cf27a798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
