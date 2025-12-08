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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKCBDKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2F6jSO1pxw%2FHrMFwaBmaS0BBan%2FdWqBFvdDkDUu86RAiAqxbxJ2v%2BkrSbmn1X%2B86owXA04eM%2FHIiKYUdiCMu%2FfLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFX6GxTAmQ9Lry3KKtwDvgaZ3Rh6TVQ1o6HhwrL%2FJguick5v1YMPYDmSeIyLAGR3xp%2Ba0e%2FzkPGEflU5k9eLiyp3XF%2BMF%2FCBue4yyhtsh93oOlLitWrSyr4jcK%2FU6onuNHIgSn3zTZ3h5AhcNFgyPD982OFjKkB3KkxAn%2BK39xT07TMr%2BbDUZg0r%2BEdXqDowZT3in21YjZQpnWVttLb0lcCwWA0qcfiL3mRtIAZvxvIu7KpehMo%2FoF9l%2B%2BrX0R47nlMsDhq9uaL774STf9Jl%2FAeMAZM2rJMbfRFu8FuZUOikUuGQimLibe9XHHtm5LXJbFvCP%2F0CCNkJ99MuuwXZmX8vOn3EjE6UTibW4Wxv28APpWGMEMDWawICRqSE%2BQBVgBbFOKhMpZABITz5e3vYf0cN1mFFuOM6%2BVnnouRTsVzaXYtSZC9KiDBz1jD7Jd3WX679qDqjvzdiCM%2F4s2oxPPL9Va5uIRzdEKlXnEdu6uyuxkm3a0HffpzMdN1kqbvdrCslGaFlS3a9uBYYsc5bh2i4TjxUl3iIIUtFTyFZSQ%2B0bXgKRe6E21yh54DWf1xoqRrY0nO%2B24Z4gAaMYTm9A9x6N2NyQLtMOS5SHvuTg09MP2GquJMpUdRBKQa5445%2FD42oUu0jGF1zSl4wl5TZyQY6pgEpVS7cH5FLP1fEdSU9yEEwDCD1UmlW0uH4QZTEkykQKWe0nCrglikRMM3Dif2WnDPWs%2BCaj8Yhtu3%2BHJpC541l%2F5moNFdmHQ6dl7tnfBGJr3wS8906qjcX%2BTUShUnMgUrMa5lsxt9geMaZog7cpydD%2FfKIVEATrjby0ceMU8%2FjzJxYi1dM4g8BT1Ya0dwbz%2BU7JX5iP5Sd1eZpl0%2F6VogkbMxdFPFT&X-Amz-Signature=10e8c1f1e0540a53dceab4fd640bd73e5fb07f0c93f1bd3e3a1081e947a8f594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKCBDKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2F6jSO1pxw%2FHrMFwaBmaS0BBan%2FdWqBFvdDkDUu86RAiAqxbxJ2v%2BkrSbmn1X%2B86owXA04eM%2FHIiKYUdiCMu%2FfLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFX6GxTAmQ9Lry3KKtwDvgaZ3Rh6TVQ1o6HhwrL%2FJguick5v1YMPYDmSeIyLAGR3xp%2Ba0e%2FzkPGEflU5k9eLiyp3XF%2BMF%2FCBue4yyhtsh93oOlLitWrSyr4jcK%2FU6onuNHIgSn3zTZ3h5AhcNFgyPD982OFjKkB3KkxAn%2BK39xT07TMr%2BbDUZg0r%2BEdXqDowZT3in21YjZQpnWVttLb0lcCwWA0qcfiL3mRtIAZvxvIu7KpehMo%2FoF9l%2B%2BrX0R47nlMsDhq9uaL774STf9Jl%2FAeMAZM2rJMbfRFu8FuZUOikUuGQimLibe9XHHtm5LXJbFvCP%2F0CCNkJ99MuuwXZmX8vOn3EjE6UTibW4Wxv28APpWGMEMDWawICRqSE%2BQBVgBbFOKhMpZABITz5e3vYf0cN1mFFuOM6%2BVnnouRTsVzaXYtSZC9KiDBz1jD7Jd3WX679qDqjvzdiCM%2F4s2oxPPL9Va5uIRzdEKlXnEdu6uyuxkm3a0HffpzMdN1kqbvdrCslGaFlS3a9uBYYsc5bh2i4TjxUl3iIIUtFTyFZSQ%2B0bXgKRe6E21yh54DWf1xoqRrY0nO%2B24Z4gAaMYTm9A9x6N2NyQLtMOS5SHvuTg09MP2GquJMpUdRBKQa5445%2FD42oUu0jGF1zSl4wl5TZyQY6pgEpVS7cH5FLP1fEdSU9yEEwDCD1UmlW0uH4QZTEkykQKWe0nCrglikRMM3Dif2WnDPWs%2BCaj8Yhtu3%2BHJpC541l%2F5moNFdmHQ6dl7tnfBGJr3wS8906qjcX%2BTUShUnMgUrMa5lsxt9geMaZog7cpydD%2FfKIVEATrjby0ceMU8%2FjzJxYi1dM4g8BT1Ya0dwbz%2BU7JX5iP5Sd1eZpl0%2F6VogkbMxdFPFT&X-Amz-Signature=37577dda5baf5a9963c66c797a60aeb2f88bf8814a4c11b97b26c5b08fbc8a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
