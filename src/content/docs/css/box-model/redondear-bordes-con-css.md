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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3P24SWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDhXf8tzUuXc%2BX%2FlueA2friTWxM6WS94oIw%2FZMwBcv3AiEA%2FZiaqlRHE4YBqD8fQtYxzX43FgRy12FVlZnnFIEA6fMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD1Fw37SRA1VsEqguSrcA8KPHh7Lk6jrwcIPwl1I1pd3w%2BUAuVOpwIZy%2FYkUuJwql7lCEggxM5tRrLHRyjQHfjNGdhvpLROTUeNvsf0TZ3Dvgrhl7ZShdEbRiOBo%2FR6Mpyx0y9sWF%2Bp883FULubzpwZLscJGljwNIhLCzf8BFgD5oFGzeysAV4ZIi51B0Rj7FKPshechHpCRbbhr72SP2d7jgfkJC1v9eO9b8AVdtcbQ6YUJ4CJVvggEkuU8XJ4nNUNrB4Odxb%2BFyRbyWFnms5HjarcUbeBrO35CGcTziPUpkvWd%2FLIsctsoIs35M7RwnAx5Ym6CGGsXti8TRbPYhFsdqJL9HheIFFnaaSEMfYegxfZ2TGR%2Fat0uMYooAy6F2Fh2%2B2buag224Rd2H9BGDy0FslByL6WyeK12RUeW2Gnu9AAhS1b2jfS039Em%2FfnamqahOyv%2BMNWEqKU15bhWp2SXvffYoTO9Is%2B5moX00E63VgMZF4CrJex%2BMjKZewdubl9SLadCqmtl1xEQBBk%2BLSq5BVG%2FGgHtWQzb9DQUkO006MpuwW4cKqeveZgTXSb%2F7DvLTz8YOKdtsgg3tlNtijv2rtjOFTXVKwAtWHnzZeZUp4s8xfgPlSQkXt9YuPe7PG22RNI811j2qF9RMIvRicoGOqUBEE4r8xrQd7g5qNyzdPMPuP7n3AtT%2BLCmRKDVBHj41FNOfCLvm0anosUnsr14yiqf9lLicIrHsD4lVa9uuVGkZxdG5qqe8UMSQ1I0Jvde5xdPAHCAKHvQN%2BMDQCz4qAT7TGHSzlAs0bnm%2B7AucKAM0GXDByLos3tR6ui89i8jIlNNwZQQsX6HEk51%2BXR8LkKrZ364arsOfmS6GWgDF%2BNB3XNv6JFw&X-Amz-Signature=3ada370d706ad0e431400ee4a0cf2883d0b6e0c37cbb3a5ffcd14a633429c0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3P24SWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDhXf8tzUuXc%2BX%2FlueA2friTWxM6WS94oIw%2FZMwBcv3AiEA%2FZiaqlRHE4YBqD8fQtYxzX43FgRy12FVlZnnFIEA6fMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD1Fw37SRA1VsEqguSrcA8KPHh7Lk6jrwcIPwl1I1pd3w%2BUAuVOpwIZy%2FYkUuJwql7lCEggxM5tRrLHRyjQHfjNGdhvpLROTUeNvsf0TZ3Dvgrhl7ZShdEbRiOBo%2FR6Mpyx0y9sWF%2Bp883FULubzpwZLscJGljwNIhLCzf8BFgD5oFGzeysAV4ZIi51B0Rj7FKPshechHpCRbbhr72SP2d7jgfkJC1v9eO9b8AVdtcbQ6YUJ4CJVvggEkuU8XJ4nNUNrB4Odxb%2BFyRbyWFnms5HjarcUbeBrO35CGcTziPUpkvWd%2FLIsctsoIs35M7RwnAx5Ym6CGGsXti8TRbPYhFsdqJL9HheIFFnaaSEMfYegxfZ2TGR%2Fat0uMYooAy6F2Fh2%2B2buag224Rd2H9BGDy0FslByL6WyeK12RUeW2Gnu9AAhS1b2jfS039Em%2FfnamqahOyv%2BMNWEqKU15bhWp2SXvffYoTO9Is%2B5moX00E63VgMZF4CrJex%2BMjKZewdubl9SLadCqmtl1xEQBBk%2BLSq5BVG%2FGgHtWQzb9DQUkO006MpuwW4cKqeveZgTXSb%2F7DvLTz8YOKdtsgg3tlNtijv2rtjOFTXVKwAtWHnzZeZUp4s8xfgPlSQkXt9YuPe7PG22RNI811j2qF9RMIvRicoGOqUBEE4r8xrQd7g5qNyzdPMPuP7n3AtT%2BLCmRKDVBHj41FNOfCLvm0anosUnsr14yiqf9lLicIrHsD4lVa9uuVGkZxdG5qqe8UMSQ1I0Jvde5xdPAHCAKHvQN%2BMDQCz4qAT7TGHSzlAs0bnm%2B7AucKAM0GXDByLos3tR6ui89i8jIlNNwZQQsX6HEk51%2BXR8LkKrZ364arsOfmS6GWgDF%2BNB3XNv6JFw&X-Amz-Signature=cec6ebaf54515534451ad0c3e943233ab4365d7f653d97c4aa71c7c2618a9951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
