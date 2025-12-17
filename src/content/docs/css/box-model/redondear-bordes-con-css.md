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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EPU22F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXRAzUrTYeVKyT8sv500iUffRU1X%2FLwiNRtBydO8ljbAiBiHpM1bEpvHL3oSqfhaN%2BMdvDdeFXFqWXJJlNtwqTDZCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIME8huGUo1x6PYTCvcKtwDVpZpxtkc1NO7sE%2B4Wzhxz%2FGBKFbzzHu5XO7L4Z989MevBPJ16j%2FtQf%2BPO9hsODoZmAjkOvPDCMrm7fiDfOaHrQUAlnCnA5h%2BVbtWkYQQGAU%2F9pOOzm6yJBOFO6wlZHqWz%2Bs4A%2F%2FucbuFHyD%2BqFtle8rIkie97JZZDQfIkFCLariIRXJROW9SIRHUyeA6yhDDa%2FVnbm2Se%2B%2Fo%2FZXIAdD%2B6xaI9xAvERi%2BggCwr6PdRo6BEOXuZOItunn7J6js3aSsrbN2icTyx0Bu%2F%2FBITNFpw8Pr0%2BaFstKQ%2FBwEwb3c%2FPUmF8p4UZechaBl%2BG0T5sHC9Y9%2FzI8ObsvDhgxNt%2FahhcLqmm4Oazoj6U3rvOnlySr3YpiTkKF980yfoLN4%2BE7twAq6JvhWUcfe3F%2F05s8iRQz%2BlQO3c5SGt4Qzb5atCtokPJxmHgextO3jHcEmlTVeE852xm601kQYsuVjA6ey0xQodaDJAA6%2FSmG1LKvqFMpU%2Bhm4hliZWgHmxMY4qjWlfATmsFeBCqzxeSsjGsT5S8h6hW0Wfv3hf%2FTaOLK6y%2FCa0cN0lUSDk5iwURly09VK4SVS%2Bt8wejfK0zv8mdQf4g0FYsqFvoqFrMrTjWQZPSIu9KqqKJdkQmN6xrcwjvuHygY6pgES8Q7sQ6e9Pp6DuXU5URARIJb8SVHm4baovP2Qxf8t%2F58uWd%2B27deoVz72bde%2B6uAG%2FMgbtf%2BBIhoHrTogbmkgCt8K4uc7glwkPBMYa4izeyXAFEj%2F%2FSYjkoOc2TjRIs1BAY13mAvQPj5zMYzRdgi7OYox%2FPJW%2FRPuk0QLloG99yWgqeHNcxKhmp1B5w8xsSxodyAmi80UTgM4IMW%2BOCKYLzJMU4Vt&X-Amz-Signature=93af0dd547a456b5a4b318cc9e3928dbd7b0441e27d60b1e1a6dd0a1b60d146b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EPU22F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXRAzUrTYeVKyT8sv500iUffRU1X%2FLwiNRtBydO8ljbAiBiHpM1bEpvHL3oSqfhaN%2BMdvDdeFXFqWXJJlNtwqTDZCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIME8huGUo1x6PYTCvcKtwDVpZpxtkc1NO7sE%2B4Wzhxz%2FGBKFbzzHu5XO7L4Z989MevBPJ16j%2FtQf%2BPO9hsODoZmAjkOvPDCMrm7fiDfOaHrQUAlnCnA5h%2BVbtWkYQQGAU%2F9pOOzm6yJBOFO6wlZHqWz%2Bs4A%2F%2FucbuFHyD%2BqFtle8rIkie97JZZDQfIkFCLariIRXJROW9SIRHUyeA6yhDDa%2FVnbm2Se%2B%2Fo%2FZXIAdD%2B6xaI9xAvERi%2BggCwr6PdRo6BEOXuZOItunn7J6js3aSsrbN2icTyx0Bu%2F%2FBITNFpw8Pr0%2BaFstKQ%2FBwEwb3c%2FPUmF8p4UZechaBl%2BG0T5sHC9Y9%2FzI8ObsvDhgxNt%2FahhcLqmm4Oazoj6U3rvOnlySr3YpiTkKF980yfoLN4%2BE7twAq6JvhWUcfe3F%2F05s8iRQz%2BlQO3c5SGt4Qzb5atCtokPJxmHgextO3jHcEmlTVeE852xm601kQYsuVjA6ey0xQodaDJAA6%2FSmG1LKvqFMpU%2Bhm4hliZWgHmxMY4qjWlfATmsFeBCqzxeSsjGsT5S8h6hW0Wfv3hf%2FTaOLK6y%2FCa0cN0lUSDk5iwURly09VK4SVS%2Bt8wejfK0zv8mdQf4g0FYsqFvoqFrMrTjWQZPSIu9KqqKJdkQmN6xrcwjvuHygY6pgES8Q7sQ6e9Pp6DuXU5URARIJb8SVHm4baovP2Qxf8t%2F58uWd%2B27deoVz72bde%2B6uAG%2FMgbtf%2BBIhoHrTogbmkgCt8K4uc7glwkPBMYa4izeyXAFEj%2F%2FSYjkoOc2TjRIs1BAY13mAvQPj5zMYzRdgi7OYox%2FPJW%2FRPuk0QLloG99yWgqeHNcxKhmp1B5w8xsSxodyAmi80UTgM4IMW%2BOCKYLzJMU4Vt&X-Amz-Signature=87294ac9a80e94edcbdacbd26cb5ba657f88aa5f3a709df9fcbd9f1a246efa39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
