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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZGEITF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAu4d9IEGmcj1yzawWyKB9hXFVtH5Xpnfkgc0uSGs%2Fo5AiAD%2BryZ81JpP5lzx3kuTED7ftzvgUTNkdeuNuhi95zwyCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMDJKh4UGBa%2BGj75OTKtwDaLa%2FCONsYf0vtfYs2H7Io5EPfrjQDzvBhrgPN3SRPipyRjLmlPP0Kv6tkOSdqoKNiIAqh%2BGPHWEjz0%2BWGRp4py1LcSlB8%2FjcbvLkZq9tfVs93WpvtqY9sXIolyJxffwZFaKav7%2FQnC6vjgvxEz%2BpKkjwb%2FLaZygLtI4ryblBAllxLN%2By%2BwM0lQ0KMFcc9numK2VMm%2FMmRg6NIsAOaIabWO6Osfk4y2IxzXpgNJEVSUqFTQbGyzrvsJthD16rmo26vwrS9vX3zDeMI9%2FAohF3QHVB%2BqOxR2hlwv5g1wHYx1FUZqGBug2BJknq4r0Ja14tO3ZhF6y7rdhcheuJ3SYff1%2Bg0wzMZFEM0ZIZF41GaG8YCEF0xXx0%2Fm5PSfigkrSVx368k5biYVOCug2Bw8hzeqY5QprOK2zUIhK31useZVemwO7aKjWYVw89XdCuW9STOzsRn1GkzZQsqMdbNkJalY6AyF0pTJfQuBbZ9XY0pCBrujCuXgZ9VGrHPiBqCupdPIVepNYv5vULDCvpWoEF%2B0CfCXU2K3vkID6mwsM2cdhG97fISqdLlHN4bLRe2xH0kELDu1cU1ykzMr15lph3t9DxUQkHRZhknzCofP8%2BUcB9Y5w1MoZ4zHXjQ%2Fgw0ujEyQY6pgEgdx%2BFpBfZkRs%2BHZAWp%2Fg5bbYhzW2thVwUNQ2PLtUAVLN4okkQhCa7xNTYOr%2FG%2BCXN42zFrTLg4yLDue%2BI6Mx3P8dytBqhTLQlRgI1vRaIjXj3R07RYN1fopP5fYpcVoLM9PWxo3yuRWibeE25KH4YtDleiRGZZ9IRGacLX8lsO6eP7tA%2Fc0iTkybHNCLtYJWWMI5Zfki2TJWs%2FTEqotMDXzMB3ufi&X-Amz-Signature=75e4050226dc0e00d29c045287c47cfd3ab716a6857fe2106f7e25d20e42e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZGEITF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAu4d9IEGmcj1yzawWyKB9hXFVtH5Xpnfkgc0uSGs%2Fo5AiAD%2BryZ81JpP5lzx3kuTED7ftzvgUTNkdeuNuhi95zwyCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMDJKh4UGBa%2BGj75OTKtwDaLa%2FCONsYf0vtfYs2H7Io5EPfrjQDzvBhrgPN3SRPipyRjLmlPP0Kv6tkOSdqoKNiIAqh%2BGPHWEjz0%2BWGRp4py1LcSlB8%2FjcbvLkZq9tfVs93WpvtqY9sXIolyJxffwZFaKav7%2FQnC6vjgvxEz%2BpKkjwb%2FLaZygLtI4ryblBAllxLN%2By%2BwM0lQ0KMFcc9numK2VMm%2FMmRg6NIsAOaIabWO6Osfk4y2IxzXpgNJEVSUqFTQbGyzrvsJthD16rmo26vwrS9vX3zDeMI9%2FAohF3QHVB%2BqOxR2hlwv5g1wHYx1FUZqGBug2BJknq4r0Ja14tO3ZhF6y7rdhcheuJ3SYff1%2Bg0wzMZFEM0ZIZF41GaG8YCEF0xXx0%2Fm5PSfigkrSVx368k5biYVOCug2Bw8hzeqY5QprOK2zUIhK31useZVemwO7aKjWYVw89XdCuW9STOzsRn1GkzZQsqMdbNkJalY6AyF0pTJfQuBbZ9XY0pCBrujCuXgZ9VGrHPiBqCupdPIVepNYv5vULDCvpWoEF%2B0CfCXU2K3vkID6mwsM2cdhG97fISqdLlHN4bLRe2xH0kELDu1cU1ykzMr15lph3t9DxUQkHRZhknzCofP8%2BUcB9Y5w1MoZ4zHXjQ%2Fgw0ujEyQY6pgEgdx%2BFpBfZkRs%2BHZAWp%2Fg5bbYhzW2thVwUNQ2PLtUAVLN4okkQhCa7xNTYOr%2FG%2BCXN42zFrTLg4yLDue%2BI6Mx3P8dytBqhTLQlRgI1vRaIjXj3R07RYN1fopP5fYpcVoLM9PWxo3yuRWibeE25KH4YtDleiRGZZ9IRGacLX8lsO6eP7tA%2Fc0iTkybHNCLtYJWWMI5Zfki2TJWs%2FTEqotMDXzMB3ufi&X-Amz-Signature=c583b15fe7d1125680003c77d6af6271ed7b38d351916c597d6f8c9abd43d9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
