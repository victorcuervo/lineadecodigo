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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS7YQUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASXrPYVo%2Bl7PKREuB0I2%2F7rUgIFu7NV5RSSrAAQpkZQIgGXuJqQJT%2BDrfykueh61c7BGj%2FywAZk2wUGh0BXbhN9wqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGApo%2Fv1%2B2tA7bYS6yrcA8VHis%2BGQiW%2Bm7NovzGk3L6yJTLhY9jLvOUPaKOf%2Bnr%2Fp%2FF%2BH%2Bgy4CR4qsdJyniGKYW0eOswn24FCapGNCBKDQ5ZdHKMB9vraRHUnyDYiQkKsUHlwuD3CsJWf5fOnMxH6reIEqXlauyaOCf%2FXtZNZWYp5srQqmYlQ%2FP3BRRugglhwr2zSOeDtaczfdQzS%2BIVFgiGkT5VDmdzYmkXjY%2BTc9qzxCEhIGqGLVcLsSKRHuZsN0NZg0Rl43KF1NTBcE3Lx2AT1KgkqmXvzj84K9BNSApgLMdWCAzqgN%2F5Q1vkT8ZMXc8wIaS05hxauqoQSbzVkKQwjAX7w3BipY21rCInXYCF%2Fu94eJNUla32K3GsPykmR7tRpkLIl2RklMmpMyYdNgnEsH0dQd1IYbuZufs8rBBdZsGevctGhcq9Y%2BlpugAy9wBBoTIDXT8uLGmqA8h%2BGtpaBzIpc6lzqVzGMBRs%2BVEgn1VbO93pmYd3rFtRJEAy07MUXWJ2F6VoQj44kGvHYfNcfGRoA8C0C7XEpZnstVNM1i%2BtseiKZ63CNSNDGugoF%2FeOjxvzGjVyudyB1hN%2FCPy%2F%2F4phY16OGzVeGIlsACh%2BZD5Hwnx0vsIL%2FS3eZEgT3tO4veMO9NjbJ5vMMNC61skGOqUBSY7LvieMHT%2BT2gqfe8B5hJpJ2gCd%2FPhMMcBE3ScHqZHo%2F%2BwvgEn42GoS1HscwWNgLT6hVfIcpwe2GHlZ8KtZaTbw%2FStFCRwOGF%2FicEEvAlohx5xYK2TF0lLFc9dNdZeBHxMyPCd5cTTU1bCkF0%2FfPVR%2FFXg37fYQU0MJ7SzBWhPfpSM18JUw%2BZ8PgfxuZkc4Ham4I%2FtpgGQbZoTIWi3ZIrnTEjpv&X-Amz-Signature=2876f28639d0a1455af01b16cd0d1b09f291a0d647647f1757db9b824752f1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS7YQUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASXrPYVo%2Bl7PKREuB0I2%2F7rUgIFu7NV5RSSrAAQpkZQIgGXuJqQJT%2BDrfykueh61c7BGj%2FywAZk2wUGh0BXbhN9wqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGApo%2Fv1%2B2tA7bYS6yrcA8VHis%2BGQiW%2Bm7NovzGk3L6yJTLhY9jLvOUPaKOf%2Bnr%2Fp%2FF%2BH%2Bgy4CR4qsdJyniGKYW0eOswn24FCapGNCBKDQ5ZdHKMB9vraRHUnyDYiQkKsUHlwuD3CsJWf5fOnMxH6reIEqXlauyaOCf%2FXtZNZWYp5srQqmYlQ%2FP3BRRugglhwr2zSOeDtaczfdQzS%2BIVFgiGkT5VDmdzYmkXjY%2BTc9qzxCEhIGqGLVcLsSKRHuZsN0NZg0Rl43KF1NTBcE3Lx2AT1KgkqmXvzj84K9BNSApgLMdWCAzqgN%2F5Q1vkT8ZMXc8wIaS05hxauqoQSbzVkKQwjAX7w3BipY21rCInXYCF%2Fu94eJNUla32K3GsPykmR7tRpkLIl2RklMmpMyYdNgnEsH0dQd1IYbuZufs8rBBdZsGevctGhcq9Y%2BlpugAy9wBBoTIDXT8uLGmqA8h%2BGtpaBzIpc6lzqVzGMBRs%2BVEgn1VbO93pmYd3rFtRJEAy07MUXWJ2F6VoQj44kGvHYfNcfGRoA8C0C7XEpZnstVNM1i%2BtseiKZ63CNSNDGugoF%2FeOjxvzGjVyudyB1hN%2FCPy%2F%2F4phY16OGzVeGIlsACh%2BZD5Hwnx0vsIL%2FS3eZEgT3tO4veMO9NjbJ5vMMNC61skGOqUBSY7LvieMHT%2BT2gqfe8B5hJpJ2gCd%2FPhMMcBE3ScHqZHo%2F%2BwvgEn42GoS1HscwWNgLT6hVfIcpwe2GHlZ8KtZaTbw%2FStFCRwOGF%2FicEEvAlohx5xYK2TF0lLFc9dNdZeBHxMyPCd5cTTU1bCkF0%2FfPVR%2FFXg37fYQU0MJ7SzBWhPfpSM18JUw%2BZ8PgfxuZkc4Ham4I%2FtpgGQbZoTIWi3ZIrnTEjpv&X-Amz-Signature=1644ba1118384a3948382e3ff51b4cac5ded0fbdbd33e23ad19f18d8e74bf736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
