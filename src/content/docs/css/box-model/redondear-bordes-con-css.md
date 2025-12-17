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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG3EJTQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyRyP8kFVj27uzIvG1d3h4sYwgr1IVxRsavnlysiAtsAiEAk%2FnupdGUUloXN%2F3J8GGY%2FMCN%2F4gObdZJOzeaOTQRHkwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuV0aAZl00U6Y9EpircA6%2FCLCkkA%2F85DyeVMTGLpwihmGtLX0aWVXn3ovSyE1DjpwORBSBIF73NfWdanmzzQH7NjveHk8tQL4wb5Z1CFbZygilkd2SQ7b%2BhATea0tmM6yDRFo6GXhTOkI8eRitJ0pRnM5DKtjNLfZsH8IUSeIJqF%2BDIJgAkwafQXqtGTbxqLJ3d9KNIFRjGxx7heGwitROfRpQDodSNvGwd4upr1sD2bYUh92YaAy5Ink6pEq%2B9xb3ayy2rEs3xVnVyOxR2Mhv5eyTdMVEunEEY6qmccf8Lq7o8u0F7Obz5wLudHJ%2BgP6G1Ijgbn7YTZlRkq1GwrkYKYwNZgRssK0luL50KoC4fKiCnVnforreXiAbpeldNL2PiieVVcy4KCdwF93mrGBZaGtoqeZItvk%2FCdrxKXM5OABHARRHiYF9K8PUKL%2BfYR%2FzI1bBE8Q2ya%2FFBp%2BfRDU5ky9ubj3f5hhJVdi30gj027a6yFPVF5oh2EZE4u7fG36tbsMWelT29QI5o7nNHAotSwOAMawh1msuLVpjlsCxnCdH352wPCVzHBYrUl6JXjBswZaCFiOXUbfH3qLtpP%2BRqthArQ1UX2FKxVFRFLQ%2FFq1MvRlRnnn%2BDBaOMwPJpAoBfYL2gLKQw4MjtMIa3icoGOqUB28zlra3mcNcFmxNpR8qC84PAmIE2dwD10C9b8uwOf9N6oDhgQ%2F4WXYdrpGuXaHIrOSQo6dq3%2BjYB9rFynd1etkum4gNbYxP17pTyQhVgPhdMhBAPfZ3IfuuDbCf84PhzkbKd3dZFGqQrZMHU6AiTw9YuLcxJjuOvCDpQ4aqyrbOWwv75u6pbVOxc2oBLJ715AfxBYs6jdznQ1ui894XKpXBuV47c&X-Amz-Signature=eb7c07abd2e34965ea7453587e16e1213a66b5f811f7abc1f238ab64998a2fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG3EJTQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyRyP8kFVj27uzIvG1d3h4sYwgr1IVxRsavnlysiAtsAiEAk%2FnupdGUUloXN%2F3J8GGY%2FMCN%2F4gObdZJOzeaOTQRHkwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuV0aAZl00U6Y9EpircA6%2FCLCkkA%2F85DyeVMTGLpwihmGtLX0aWVXn3ovSyE1DjpwORBSBIF73NfWdanmzzQH7NjveHk8tQL4wb5Z1CFbZygilkd2SQ7b%2BhATea0tmM6yDRFo6GXhTOkI8eRitJ0pRnM5DKtjNLfZsH8IUSeIJqF%2BDIJgAkwafQXqtGTbxqLJ3d9KNIFRjGxx7heGwitROfRpQDodSNvGwd4upr1sD2bYUh92YaAy5Ink6pEq%2B9xb3ayy2rEs3xVnVyOxR2Mhv5eyTdMVEunEEY6qmccf8Lq7o8u0F7Obz5wLudHJ%2BgP6G1Ijgbn7YTZlRkq1GwrkYKYwNZgRssK0luL50KoC4fKiCnVnforreXiAbpeldNL2PiieVVcy4KCdwF93mrGBZaGtoqeZItvk%2FCdrxKXM5OABHARRHiYF9K8PUKL%2BfYR%2FzI1bBE8Q2ya%2FFBp%2BfRDU5ky9ubj3f5hhJVdi30gj027a6yFPVF5oh2EZE4u7fG36tbsMWelT29QI5o7nNHAotSwOAMawh1msuLVpjlsCxnCdH352wPCVzHBYrUl6JXjBswZaCFiOXUbfH3qLtpP%2BRqthArQ1UX2FKxVFRFLQ%2FFq1MvRlRnnn%2BDBaOMwPJpAoBfYL2gLKQw4MjtMIa3icoGOqUB28zlra3mcNcFmxNpR8qC84PAmIE2dwD10C9b8uwOf9N6oDhgQ%2F4WXYdrpGuXaHIrOSQo6dq3%2BjYB9rFynd1etkum4gNbYxP17pTyQhVgPhdMhBAPfZ3IfuuDbCf84PhzkbKd3dZFGqQrZMHU6AiTw9YuLcxJjuOvCDpQ4aqyrbOWwv75u6pbVOxc2oBLJ715AfxBYs6jdznQ1ui894XKpXBuV47c&X-Amz-Signature=e6b11b96266d7f0db3822998cf87d62c3b9db6bd1e797cd32f1415809e4ffb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
