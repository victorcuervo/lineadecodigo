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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG64GZHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJY6IGenwPl9HFp3E3KehHy6axEWdkLqRCaCYNL3yq8AiB%2FpOIKrSUt6QhPVP48cBvR9k3u%2FhMRPguAZ3ePHMImyyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMypafVoKX1Uaw7v%2BmKtwD6qZkIAueR2iPgRmxbXUDRN48m0WhryXFq6dJG7SnwNX%2Bmes1reQRN%2BGMWZbBpw5PR2umKfn%2Bf3UxgP4xk6PzGmPC88uN3ZiLFSrPXeNtWNLWkbh3PDmlAOcy7Y8j6oEHrfblLC6YzoEGInPe2dX8hVKvAsrTu03WlCn5rSvN%2F23tJcQfDGUF1Tz5OwSFLSF83wJKY5SsSWSys0PyDdLbqUYS0CVlEnnZwkLcpX%2FtGOYLJw7Dw8ZxQ37Q5StHmHa3vZC55VuWqUOUXA2gT4BI7rOYq37Nc%2BNzOkl%2Feih3FG9%2BW%2BcENc4oCbW4QsM9wmIrhnNdMBH5w3c1qFoO3YLfW1e7I32%2F0H2ZRCUSKd9k%2BdvTeXz%2BIZSXoJXRpSit7pNUATDouhCXRqo32JvZVEqCFCiHWMJ%2FpLm2Vf5eRe4iZ7mtSep3gtYGxyLcHRUXdtK7Qmq1170EGnpQiFKHyrN4XpEIx8fwspK%2FEgsnJfp3%2FxVZXjdnWHgHfh%2Bg%2BZRR8LTdMWMGyLMKkH3VKrXNAoue1sDxV%2FcxZXQLmGhi183qrLB%2F5FE4IZO5c7eDJsxpvBMaHiHloC9bGXLN3luTfsWn7srZjLbb%2BaMX5L3noeJr3djmUSEkSbJm4m9mlPIwsabQyQY6pgEM6XYCnD50TiZZjB%2BxPiKmsTiozNYamDsrdt2MTG7fuNO7WubUftgJJNvVnZjYe3NAUD6GH8inzIF03gmG3F%2FqMQq23LWp96cBZ8Z4X%2Bt2bq4tGuwX%2FUwI7oSDzDQrYRoLnvR6qFExVaMdOV8TZQPrC3F%2F8dwgC9o6jm1o69uopO2FBpu%2BxnXIKJH%2B%2FslYsRoAG2Yr4o6o%2BZe5hiy9zKUq3kZaTCWS&X-Amz-Signature=d7e57387cb71c1a3aceccdd7d813b4c711a80e4133c050d4158e81e91ea50a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG64GZHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJY6IGenwPl9HFp3E3KehHy6axEWdkLqRCaCYNL3yq8AiB%2FpOIKrSUt6QhPVP48cBvR9k3u%2FhMRPguAZ3ePHMImyyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMypafVoKX1Uaw7v%2BmKtwD6qZkIAueR2iPgRmxbXUDRN48m0WhryXFq6dJG7SnwNX%2Bmes1reQRN%2BGMWZbBpw5PR2umKfn%2Bf3UxgP4xk6PzGmPC88uN3ZiLFSrPXeNtWNLWkbh3PDmlAOcy7Y8j6oEHrfblLC6YzoEGInPe2dX8hVKvAsrTu03WlCn5rSvN%2F23tJcQfDGUF1Tz5OwSFLSF83wJKY5SsSWSys0PyDdLbqUYS0CVlEnnZwkLcpX%2FtGOYLJw7Dw8ZxQ37Q5StHmHa3vZC55VuWqUOUXA2gT4BI7rOYq37Nc%2BNzOkl%2Feih3FG9%2BW%2BcENc4oCbW4QsM9wmIrhnNdMBH5w3c1qFoO3YLfW1e7I32%2F0H2ZRCUSKd9k%2BdvTeXz%2BIZSXoJXRpSit7pNUATDouhCXRqo32JvZVEqCFCiHWMJ%2FpLm2Vf5eRe4iZ7mtSep3gtYGxyLcHRUXdtK7Qmq1170EGnpQiFKHyrN4XpEIx8fwspK%2FEgsnJfp3%2FxVZXjdnWHgHfh%2Bg%2BZRR8LTdMWMGyLMKkH3VKrXNAoue1sDxV%2FcxZXQLmGhi183qrLB%2F5FE4IZO5c7eDJsxpvBMaHiHloC9bGXLN3luTfsWn7srZjLbb%2BaMX5L3noeJr3djmUSEkSbJm4m9mlPIwsabQyQY6pgEM6XYCnD50TiZZjB%2BxPiKmsTiozNYamDsrdt2MTG7fuNO7WubUftgJJNvVnZjYe3NAUD6GH8inzIF03gmG3F%2FqMQq23LWp96cBZ8Z4X%2Bt2bq4tGuwX%2FUwI7oSDzDQrYRoLnvR6qFExVaMdOV8TZQPrC3F%2F8dwgC9o6jm1o69uopO2FBpu%2BxnXIKJH%2B%2FslYsRoAG2Yr4o6o%2BZe5hiy9zKUq3kZaTCWS&X-Amz-Signature=0203d85a3ad9e8b95f4c0285f162dcc18bebb0d0af25aeee3e4705fb1d810c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
