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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNFAYWI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GYoC6tVSgv8Pk8tc45gVTihvSec3bTf0RpinGlab%2FAIgYNwuRYO4%2BC%2FrORxN%2BA788lODcHi%2F%2BXJr3GsXkS%2FlPVMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYGxqifwQ4bRrpdSrcA7na2wrdKfTPa6WAhAu34nMMDN%2BTunoW5rk8kR8sl9a%2FxHb72%2BtJsQTEy6BhIm1XUYFkWPVbymqwhDMZn0k1dqz0IKAXtU%2BkATkKwl0AcAG%2Fm8DxF%2F799GRWpSk%2FodkNhZu7y77JaJNxbdX77mLWibdcDDUOMtP1Y%2FMKIiqH123ebm%2FU3JAXtLWI1CixWOHxcKLW6iWOtKrEqk%2F73%2B0KmoEo03bR2uOCR9tChb6RTWwcx%2Biqk0PFt6MkQJc5I1iJ5D7422FZd1QJ5fQaRP4PiJPCgZ7Gj%2Fkmg8MkiTg0wGxmSOaAljptBpRGsrFis4TYGFOuN%2BpIXQHpJYx%2B%2BYYVtSEmTKzhijTz33pQsn8gj9LQLm9GESmECSqKJF9U7rQWm%2BJZJcPoXsKISVIUATQYZ9lC3dU6gWVASHISSiG86mRI8wcrnC98aXNn%2Bs2bHfL7yFVSwMDeQUgqOpWKeFjwMBuqc6hEjVLf6nz2rpcDSBpO8SAzcvZSIQucHHk5Sil5o8jY97PisoeHhxrjheiZTONrGC1vMObyUEbohoA6uRTq64NYxPD94QdDBTZg%2Fw7irh5UndOxNU40FIoggmRGJ5Cb%2FbAg%2BOllaLt2jiqzf%2FgrX4TpgiWcVEwMs1WxMKXk28kGOqUBw4sx4cZgOqEZhLqMPTRhW%2BaMb0KGf2z5wpq3yEMgFIYz7ZXZNEZ8bC5RvJ%2FKizwFN0Mpx5rV8hciUjhhAwqtneebvhoA4OOQTl978bnXwD9vv2%2B3VC%2B0TqcdH5rX4GeyR1RC2WkLaC6fgmpi6agwDi37c1vXQKm14VyxJj9FSAsEMpgGkgt9v365UGm%2FMmeTxEQQdILQ4GFfMswfYIgsPsli31IL&X-Amz-Signature=0c767885e32a265a202ceaab71783de2327711bdccbe04df5e4cbb52bd302bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNFAYWI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GYoC6tVSgv8Pk8tc45gVTihvSec3bTf0RpinGlab%2FAIgYNwuRYO4%2BC%2FrORxN%2BA788lODcHi%2F%2BXJr3GsXkS%2FlPVMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYGxqifwQ4bRrpdSrcA7na2wrdKfTPa6WAhAu34nMMDN%2BTunoW5rk8kR8sl9a%2FxHb72%2BtJsQTEy6BhIm1XUYFkWPVbymqwhDMZn0k1dqz0IKAXtU%2BkATkKwl0AcAG%2Fm8DxF%2F799GRWpSk%2FodkNhZu7y77JaJNxbdX77mLWibdcDDUOMtP1Y%2FMKIiqH123ebm%2FU3JAXtLWI1CixWOHxcKLW6iWOtKrEqk%2F73%2B0KmoEo03bR2uOCR9tChb6RTWwcx%2Biqk0PFt6MkQJc5I1iJ5D7422FZd1QJ5fQaRP4PiJPCgZ7Gj%2Fkmg8MkiTg0wGxmSOaAljptBpRGsrFis4TYGFOuN%2BpIXQHpJYx%2B%2BYYVtSEmTKzhijTz33pQsn8gj9LQLm9GESmECSqKJF9U7rQWm%2BJZJcPoXsKISVIUATQYZ9lC3dU6gWVASHISSiG86mRI8wcrnC98aXNn%2Bs2bHfL7yFVSwMDeQUgqOpWKeFjwMBuqc6hEjVLf6nz2rpcDSBpO8SAzcvZSIQucHHk5Sil5o8jY97PisoeHhxrjheiZTONrGC1vMObyUEbohoA6uRTq64NYxPD94QdDBTZg%2Fw7irh5UndOxNU40FIoggmRGJ5Cb%2FbAg%2BOllaLt2jiqzf%2FgrX4TpgiWcVEwMs1WxMKXk28kGOqUBw4sx4cZgOqEZhLqMPTRhW%2BaMb0KGf2z5wpq3yEMgFIYz7ZXZNEZ8bC5RvJ%2FKizwFN0Mpx5rV8hciUjhhAwqtneebvhoA4OOQTl978bnXwD9vv2%2B3VC%2B0TqcdH5rX4GeyR1RC2WkLaC6fgmpi6agwDi37c1vXQKm14VyxJj9FSAsEMpgGkgt9v365UGm%2FMmeTxEQQdILQ4GFfMswfYIgsPsli31IL&X-Amz-Signature=36a8647da72287f5e0bb85dde4444e4814378e7e92fe081d03e6e0039dee14ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
