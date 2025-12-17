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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOMPAI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC35QG%2B2RDzpkZLQRVpfGVbtBze9w5HFjyJsRuBoJ7mmAiB8JkyG1DCDgQmLiURXDrzS01vo32RvmcQjC3e4bCFAOir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9hN0Y19oFYGfYQB1KtwD5bWfddrBjZc18StySOFGCLa%2FLRxZqgroq9YfpTfZT3t7DDPGwKFw0PJg3mEFOX2ggacukJkJOHzFYQS8fqlp3lzxXtRLJL1YHQc5PpcEJ2BbEpyh8Z%2Fs1PegBd4rV1cWTFeH64dPpi5CL%2Frq3x5vgf6mbsUuXUFzGnGLmCpcMqBNBPXXGxRG78o2P9eM4aaebGuzcx34bLI5D2k%2BNCYouYFdTiyvLubmm5mN6T5k%2BUj76sB0r%2BsUdK0ylmvPHEjdW8z%2F7eFd0%2B3yznBzVa0B4WdtsFWo7jNDrf26D4G0%2BZwgNPLRGhaUOZfXd5lmL%2ByMHCsQzU6E92%2Ff5aailW2OWj1TWlgpSWT8%2BJAzhI8D795DzPP0NVuunPRTHG1W5Q1HCGcX7vRMAWdw30ub0iva8zoJM6tCIlTrSryIncSPDaz7N9xjH2ogpEQ0qFGgNolQ7H5F2zQ5Nf%2BJBNDixk1YIaH8%2FiEmp%2FtJ%2F9CSWeXICaLdlfsA%2Fug189Yj8%2BwuqNV6gGgwzzOC0y8WVo7urV%2BlaAca%2FoDZrvs6MnrF7TQfkzH0V6X6NE7vaAXY2oaYUqxF2YGC2Ri26zQIV2I8d%2FDiQZVVpQTts5%2FxmajwldPxeuNZ9FZm6fqp8dTBXqIw9aqKygY6pgEwX90nnJwfCS9MKMkktHUqnuvsnJDwBm2ydl3P6pfg3gIpljzyV4E3r8dauCIkSTRrfsV8KVWM0HzC%2FGTgXjO0dLRxqVNcG1P4yPs1gmSY9gsgx2H1m8zZ%2BNw%2BGE%2FpLBmkSM6AfR1jNTIQwBeWnIcx%2FFgC7m0V%2Bm9aK2ZT9ne%2FBPSwbE5mvuQqxRTufkCfHlV8q3yziIprxhS023bb%2Fw6t4%2BSTqLI%2B&X-Amz-Signature=700f85ed0db49cc25be72d6624b521fa1960618c77f10151a7ce7204950d120c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOMPAI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC35QG%2B2RDzpkZLQRVpfGVbtBze9w5HFjyJsRuBoJ7mmAiB8JkyG1DCDgQmLiURXDrzS01vo32RvmcQjC3e4bCFAOir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9hN0Y19oFYGfYQB1KtwD5bWfddrBjZc18StySOFGCLa%2FLRxZqgroq9YfpTfZT3t7DDPGwKFw0PJg3mEFOX2ggacukJkJOHzFYQS8fqlp3lzxXtRLJL1YHQc5PpcEJ2BbEpyh8Z%2Fs1PegBd4rV1cWTFeH64dPpi5CL%2Frq3x5vgf6mbsUuXUFzGnGLmCpcMqBNBPXXGxRG78o2P9eM4aaebGuzcx34bLI5D2k%2BNCYouYFdTiyvLubmm5mN6T5k%2BUj76sB0r%2BsUdK0ylmvPHEjdW8z%2F7eFd0%2B3yznBzVa0B4WdtsFWo7jNDrf26D4G0%2BZwgNPLRGhaUOZfXd5lmL%2ByMHCsQzU6E92%2Ff5aailW2OWj1TWlgpSWT8%2BJAzhI8D795DzPP0NVuunPRTHG1W5Q1HCGcX7vRMAWdw30ub0iva8zoJM6tCIlTrSryIncSPDaz7N9xjH2ogpEQ0qFGgNolQ7H5F2zQ5Nf%2BJBNDixk1YIaH8%2FiEmp%2FtJ%2F9CSWeXICaLdlfsA%2Fug189Yj8%2BwuqNV6gGgwzzOC0y8WVo7urV%2BlaAca%2FoDZrvs6MnrF7TQfkzH0V6X6NE7vaAXY2oaYUqxF2YGC2Ri26zQIV2I8d%2FDiQZVVpQTts5%2FxmajwldPxeuNZ9FZm6fqp8dTBXqIw9aqKygY6pgEwX90nnJwfCS9MKMkktHUqnuvsnJDwBm2ydl3P6pfg3gIpljzyV4E3r8dauCIkSTRrfsV8KVWM0HzC%2FGTgXjO0dLRxqVNcG1P4yPs1gmSY9gsgx2H1m8zZ%2BNw%2BGE%2FpLBmkSM6AfR1jNTIQwBeWnIcx%2FFgC7m0V%2Bm9aK2ZT9ne%2FBPSwbE5mvuQqxRTufkCfHlV8q3yziIprxhS023bb%2Fw6t4%2BSTqLI%2B&X-Amz-Signature=3b5a2a4b8d63ee7a4f17ac3c8054ae7625cbe3305404e9effba4b83b369d672a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
