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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGH3XDR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7Lcx246Vl2DUpNgm6jQ8NBEMLjwwzhodlGmZ2X%2FQHdAiBsbKBU2H00R%2BAnJoEQDaDw1viXMl5TATHjjweuTq3KsSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpQOkiWrHRotR8QrKtwDZ%2Bij64monaasxZ4IGCteo09Vv%2B0E1ds%2FZLr6dLCX%2FG6YMAFFMvGo5H6MxRG%2FxTGxroeqyZcwGqixPpjVxmhaoW%2B9%2BqPwUdrGwwPlJ9kwPuekTwFDOducnkqWGDgXw%2FpnZqelw5bS4tDQFaEr6SjtYN28Bfelr9CkAhi4Dc%2FkVvDIdCIazSVbDrbBOtd0GV%2BVEtt7PZWK8txvVi4reIJdFsQwNN15eetPHqJljpfdK9XDW8aWzM1NhwHVVk9XbUn5mkFZdtD%2F%2Bq%2FJtJOVH1cdWfLX9EoKJqTQjt9ngnFZdGtOeh0AknorUJlVU3QEir4P3jRwUli8eWBMOaRB4bjjbuPA1ZKiX4uQNcfJHl%2FdK5r7DG9OJWdYd3um2TbnoWVPfWKAYPdrWO8JZkJbbEbLtqsFjAF4JSCY4Cx6mR%2B4bXWd4ovanrWA%2BUQ8aP6xOm%2FA%2FOiPi7N5TyvMLcJ04wPNRcK3r%2FGMzG4qcrY2vrl1s4vi9X5oRZ5MWvqQXzJB51Io9zE5iEXyeGU23UJcVo9DP2FAKVbnFLWacNm0jZfQ43977mAsYV80pf82XDbUexRBDe18bZVH6jSWGLb%2FhtS86ZFZhMKCWaYUgCuRzJMOSe0DiiILlRi7yIHgpCIwrv7SyQY6pgHnn6b%2F7gTVksHhDMMuvbFHyB2OZcFsubRQWydgDAdyOjgksP3ucUrD%2BKUwQ4qz4Vb%2FESqlLdAxlm9nd3cF1%2FZomoS3OOs5uwgeTMBxY90ZqzU7hxSYFPHn8tHPsORZCJ9IRQVlj%2B1%2BvfUgoQO6MUDqcTQBZtDN50pStjfumoEqOV%2FNvLda36r3dJ8HDjr02DBNBIC7qSCr17tMAJVCf2%2BDCf%2BrEt4k&X-Amz-Signature=c2db7df3bc5d889d1069eb29e4f9c789685b72b3d27b8cf661edab42d0bb424b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGH3XDR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7Lcx246Vl2DUpNgm6jQ8NBEMLjwwzhodlGmZ2X%2FQHdAiBsbKBU2H00R%2BAnJoEQDaDw1viXMl5TATHjjweuTq3KsSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpQOkiWrHRotR8QrKtwDZ%2Bij64monaasxZ4IGCteo09Vv%2B0E1ds%2FZLr6dLCX%2FG6YMAFFMvGo5H6MxRG%2FxTGxroeqyZcwGqixPpjVxmhaoW%2B9%2BqPwUdrGwwPlJ9kwPuekTwFDOducnkqWGDgXw%2FpnZqelw5bS4tDQFaEr6SjtYN28Bfelr9CkAhi4Dc%2FkVvDIdCIazSVbDrbBOtd0GV%2BVEtt7PZWK8txvVi4reIJdFsQwNN15eetPHqJljpfdK9XDW8aWzM1NhwHVVk9XbUn5mkFZdtD%2F%2Bq%2FJtJOVH1cdWfLX9EoKJqTQjt9ngnFZdGtOeh0AknorUJlVU3QEir4P3jRwUli8eWBMOaRB4bjjbuPA1ZKiX4uQNcfJHl%2FdK5r7DG9OJWdYd3um2TbnoWVPfWKAYPdrWO8JZkJbbEbLtqsFjAF4JSCY4Cx6mR%2B4bXWd4ovanrWA%2BUQ8aP6xOm%2FA%2FOiPi7N5TyvMLcJ04wPNRcK3r%2FGMzG4qcrY2vrl1s4vi9X5oRZ5MWvqQXzJB51Io9zE5iEXyeGU23UJcVo9DP2FAKVbnFLWacNm0jZfQ43977mAsYV80pf82XDbUexRBDe18bZVH6jSWGLb%2FhtS86ZFZhMKCWaYUgCuRzJMOSe0DiiILlRi7yIHgpCIwrv7SyQY6pgHnn6b%2F7gTVksHhDMMuvbFHyB2OZcFsubRQWydgDAdyOjgksP3ucUrD%2BKUwQ4qz4Vb%2FESqlLdAxlm9nd3cF1%2FZomoS3OOs5uwgeTMBxY90ZqzU7hxSYFPHn8tHPsORZCJ9IRQVlj%2B1%2BvfUgoQO6MUDqcTQBZtDN50pStjfumoEqOV%2FNvLda36r3dJ8HDjr02DBNBIC7qSCr17tMAJVCf2%2BDCf%2BrEt4k&X-Amz-Signature=6036785aaf72f46c9a15cdbcac93963cea3df67804df47cb251aad03cd877c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
