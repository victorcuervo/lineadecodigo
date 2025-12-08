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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667V64P4W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj5xLWjkTubk3bdXQlvH7w2N%2FaYMABQvnF7Jyx5VpyUQIgFl0fcFd8kLWubhIA1I5RVEMHTZ5nV8ZREJBhKNI8j4QqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEspfXxGXGoHAuV%2F0SrcA0lWiVyiTEKkMMAgd9YTEDx4UHlHSXxPrkleoW6wua0OFvnXWK0tsOpFgAk0FrMeTAVo1o8w9bOCVtXIZiwL3AwzSyTEHD3x%2F2nKoa0pfEIqF5V36VXDOib2T2t8CeuJb7M8HQWkf3h3Lua0P40mmPtIHfzaI6MdW40T3%2BT9aU0b44Gdn2BzzR5RNxh3LSE%2FVCdjDjo9Zqu7YgCvLuk9cW4amgWl84I2kIt1D%2BRAvS08eSu0RatLEPNTVv8txE8%2BKJRekVelwGlFOuk7bY%2Bwz33LpZqFbntBYj6zLKx%2FbDYXNFp6YA4mrfm0tvaw%2F9a%2Bp3gVXgZwT6nYxbMBLGEyv1Ftwx1NwUDpl%2FUzxu2HMXeqJorxsTnx8g5arkqW4Oen304dYltzlohjFculNZXLau9pjO%2F1s1i8QoUhAxBbG%2FrOkgEsRLUiHhbvh%2B1%2B73icLN3Lw66s9Na39HuwW1gorbBktd92UQpwpyUHRgEH1A%2FhUrrH7wLBSVN7N2FgqsNGPukEKwp3HL1xz7BgNFM4%2FPhLXjcaCieHi4bR0QzFOw%2BdloEWwl9Eq%2B5J5H8zMWG4lU2dFsyqUaH2e%2FNIozAQuu2BosuFt%2FTWeYGJLcB1AFBqn0IQKCOQ3kx8WuS8MNLu2MkGOqUB5eWAMPX037putZY1us42vZa5t7KW7XuaJNLeeDad3nR%2B4X%2F63H6t%2FIgFDhdZHDGMxHpybZ2gTZ1Yt16UxwzkXEydk96xKaEIhHDz8aRCR%2Fqcb9Ji%2Fo33GiKO3K5rpCt7Xwpy3m6jjWWP0NAL5Yab2XOpqCq9Wd283xg%2FFMRQKSOuNCxoM8OfntQSAlaU9oFC5bXe1jlc5I4WxKc24d5SDnsWjyxb&X-Amz-Signature=fd273c1d6f83a2f69f20850b38611ea02c3bfa85e64ce2023b82aeb2f620ac72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667V64P4W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj5xLWjkTubk3bdXQlvH7w2N%2FaYMABQvnF7Jyx5VpyUQIgFl0fcFd8kLWubhIA1I5RVEMHTZ5nV8ZREJBhKNI8j4QqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEspfXxGXGoHAuV%2F0SrcA0lWiVyiTEKkMMAgd9YTEDx4UHlHSXxPrkleoW6wua0OFvnXWK0tsOpFgAk0FrMeTAVo1o8w9bOCVtXIZiwL3AwzSyTEHD3x%2F2nKoa0pfEIqF5V36VXDOib2T2t8CeuJb7M8HQWkf3h3Lua0P40mmPtIHfzaI6MdW40T3%2BT9aU0b44Gdn2BzzR5RNxh3LSE%2FVCdjDjo9Zqu7YgCvLuk9cW4amgWl84I2kIt1D%2BRAvS08eSu0RatLEPNTVv8txE8%2BKJRekVelwGlFOuk7bY%2Bwz33LpZqFbntBYj6zLKx%2FbDYXNFp6YA4mrfm0tvaw%2F9a%2Bp3gVXgZwT6nYxbMBLGEyv1Ftwx1NwUDpl%2FUzxu2HMXeqJorxsTnx8g5arkqW4Oen304dYltzlohjFculNZXLau9pjO%2F1s1i8QoUhAxBbG%2FrOkgEsRLUiHhbvh%2B1%2B73icLN3Lw66s9Na39HuwW1gorbBktd92UQpwpyUHRgEH1A%2FhUrrH7wLBSVN7N2FgqsNGPukEKwp3HL1xz7BgNFM4%2FPhLXjcaCieHi4bR0QzFOw%2BdloEWwl9Eq%2B5J5H8zMWG4lU2dFsyqUaH2e%2FNIozAQuu2BosuFt%2FTWeYGJLcB1AFBqn0IQKCOQ3kx8WuS8MNLu2MkGOqUB5eWAMPX037putZY1us42vZa5t7KW7XuaJNLeeDad3nR%2B4X%2F63H6t%2FIgFDhdZHDGMxHpybZ2gTZ1Yt16UxwzkXEydk96xKaEIhHDz8aRCR%2Fqcb9Ji%2Fo33GiKO3K5rpCt7Xwpy3m6jjWWP0NAL5Yab2XOpqCq9Wd283xg%2FFMRQKSOuNCxoM8OfntQSAlaU9oFC5bXe1jlc5I4WxKc24d5SDnsWjyxb&X-Amz-Signature=e34743144833a6b7ab210603a9d323668591aa3891910969972113c60c75af09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
