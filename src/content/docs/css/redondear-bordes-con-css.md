---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV2XIBO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD%2B61u%2Bm%2FKF%2F2PsEgThfm%2FWDqmWmQKdjgNWqfZcs%2FMFVwIgRneZTmNCC953A1BKmtOKNd3Si1Km9ZEuGKpAWdiPCxgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCOqTYALvEluyPbbwyrcA4jNqVGQJGc7GaCOzSv94MeDZlLGIEUBiWoE4zU2IaoguUSbs9%2Fhm5J5sYu1GAfPUhYTyyL6hZSCcbO2NHK5I1Sb%2BrLa46AQw9xl8bUdrJ7nisEwlzczPlPPJLY42h98IjkmpB6H6UfbglAbspKkZ3v6yjpoNLdIvvtY3hrmJv4FMwu93YWWGIxjg6nVVsw831lISt3x5xm%2Fk16mxzs8RWrvXPyewraI%2F7o8B9aHbuZfps9f%2B7CadQku%2Bct6VU6QoGj1bbzyAJsq9TUUW5kXIsZV4OSup7aLMiN2R1GkBePZUUnIWdzOuNENel6rkqSLpFHeIVMQcre%2F2vFgolcwxXQKoG629919NevL8q07Q%2FUljC1AAXOjd3d2P7JjN8CD7znO8RwQ94eeEJG6R9rrfzhur%2BBgT02Ddbe3l4427NzoDiEzJgDsFb1sfcOhGeWmkzrsbRTctEgXz8Xi3AeXrh6oRRJKPWIoHLTHyrSkkQgT4lohJp9ZrGmtRNV542laBW%2FZLfqDK%2FJgnMa5PTEIcJRofjqDmtauW2zUYVmOXZe2PVxUVCtkPEmF8CWRZGBs11VcaM3lbHwOQyl4nxR1Noiklb0Grff1wdrd3gImWc83QTXYuqY88wo9ixWgMM29wskGOqUBkIHVQg25qMyqkchjhLNW2%2BYjGu%2F0JPaWFLN6Iakv%2F8be%2FutONXCqbr%2BuT6WMmGSFeWtvf4lPR1xS89VW3OZVkrIJXIYAwnZMNMUtxm7Df5CUjgApcy54pSsCaI3flFb29mBNMpkloKCWGq6Ew449wZKiHCtKqmPranT98Mp3p5ELV1unsi%2F3Y%2F5JX0P2qXXbRaK0YE0D954nWxmvoErXXzrNJ8ub&X-Amz-Signature=e8568f9fcade0dc39c7df210ccc3413ea629fae8ed67802983dd8dc68a1004d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV2XIBO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD%2B61u%2Bm%2FKF%2F2PsEgThfm%2FWDqmWmQKdjgNWqfZcs%2FMFVwIgRneZTmNCC953A1BKmtOKNd3Si1Km9ZEuGKpAWdiPCxgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCOqTYALvEluyPbbwyrcA4jNqVGQJGc7GaCOzSv94MeDZlLGIEUBiWoE4zU2IaoguUSbs9%2Fhm5J5sYu1GAfPUhYTyyL6hZSCcbO2NHK5I1Sb%2BrLa46AQw9xl8bUdrJ7nisEwlzczPlPPJLY42h98IjkmpB6H6UfbglAbspKkZ3v6yjpoNLdIvvtY3hrmJv4FMwu93YWWGIxjg6nVVsw831lISt3x5xm%2Fk16mxzs8RWrvXPyewraI%2F7o8B9aHbuZfps9f%2B7CadQku%2Bct6VU6QoGj1bbzyAJsq9TUUW5kXIsZV4OSup7aLMiN2R1GkBePZUUnIWdzOuNENel6rkqSLpFHeIVMQcre%2F2vFgolcwxXQKoG629919NevL8q07Q%2FUljC1AAXOjd3d2P7JjN8CD7znO8RwQ94eeEJG6R9rrfzhur%2BBgT02Ddbe3l4427NzoDiEzJgDsFb1sfcOhGeWmkzrsbRTctEgXz8Xi3AeXrh6oRRJKPWIoHLTHyrSkkQgT4lohJp9ZrGmtRNV542laBW%2FZLfqDK%2FJgnMa5PTEIcJRofjqDmtauW2zUYVmOXZe2PVxUVCtkPEmF8CWRZGBs11VcaM3lbHwOQyl4nxR1Noiklb0Grff1wdrd3gImWc83QTXYuqY88wo9ixWgMM29wskGOqUBkIHVQg25qMyqkchjhLNW2%2BYjGu%2F0JPaWFLN6Iakv%2F8be%2FutONXCqbr%2BuT6WMmGSFeWtvf4lPR1xS89VW3OZVkrIJXIYAwnZMNMUtxm7Df5CUjgApcy54pSsCaI3flFb29mBNMpkloKCWGq6Ew449wZKiHCtKqmPranT98Mp3p5ELV1unsi%2F3Y%2F5JX0P2qXXbRaK0YE0D954nWxmvoErXXzrNJ8ub&X-Amz-Signature=ebebb3f6dbaabef63afe4fac82d03825ceee77a1f31b031f89e96fbaea2232ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
