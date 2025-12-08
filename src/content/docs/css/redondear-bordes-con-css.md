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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KL2Y6KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BYcN1dHHTQDnKKhEoJzFvickn0AsSTA%2Bhx6wLE1JyZAiANztm8fOycJ1SO%2BW%2BcbkIQOwCRm%2FL4z8oMAR6LoFaVYCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F1TZpLDpkzjSzlxBKtwDVkD%2BRx4wJ26fFMqLR3eBmpD3GQ2A81krBkUaV2zCuAwalElEeUlYvmefK5hFS2VZXx0fOF7s6FvCqkgyuDPjAMrXJIMgoxPHiHiESQUYOWX2v44Gxh%2BGPbxoH1Em6DQnr8COx8cWfu1oHy3bLJyL%2FBQv5WK%2BMoguC2lYvjuyj%2BjiuKtdExkaEJHJsTthA0kjpY6MlSyvk6xOvX8YLwn6%2BF3vEAVRLjg4DrCDQuUB0QQB2xgBsxahB75Ei%2F%2BIBs41PKh14uaSC6k1MtsK0AvHZrusisRZl8FRRm5HaxE%2FNvHCv4gjmOC15GgiYGZoJ%2FJ5niRdSwGpJFdFmK6Q1XnEaKWUiUcKN25%2BQcvSuFrKEy2%2Bu%2BJFwfSbL6zsWzEh%2F2kMpDUF10NinRPPt%2FlsjGdVqX5wgXAKR86XX9TvlWP2J%2BT0Yir%2Fb1w35H%2BBhwn3ip8ifqJ6LgmQIAxon5m1y%2F1SLW%2F6xLuOJ0AfdKfAzrlnFi%2FoEFZ05RfDETBq0CTVPyILsgJRPUmKDGQOp6pjmRwKMGf%2B2bVXU6YhGrAgDlxEMBO6qZ9j6hFXOyHXiUr%2B6YyMDqXBgXzhuLv%2FMUMT2B0qWHNuJltWJzaVO0UyHDlIh%2BqtnGj%2Fe8IXIdbFEmQwo%2FPayQY6pgFH360BxE5nIX5e%2F%2BWpZ8%2BX3SWL39fo4X2Li48uh5RcgJllzqLSiKwjkV47713LvHwtClfP2TwmKpoGNqxYhfw3%2Fq5Yqjjspnx1INQ0iepLfPsb2VZ1nU6WdpOt%2FhABsASH6Sx5UGBOlezoUQ82gN1WCvyeG3tMa2KqHYeQD7yLeMEwqpTZffhgiVBXxnewNP8DyWxz7JOYMx55NkMjstJO%2FJmcDLsf&X-Amz-Signature=d7123c138ff161fd5308ce81d3de2647c0bc46324fc696cf6dd2133413c64091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KL2Y6KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BYcN1dHHTQDnKKhEoJzFvickn0AsSTA%2Bhx6wLE1JyZAiANztm8fOycJ1SO%2BW%2BcbkIQOwCRm%2FL4z8oMAR6LoFaVYCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F1TZpLDpkzjSzlxBKtwDVkD%2BRx4wJ26fFMqLR3eBmpD3GQ2A81krBkUaV2zCuAwalElEeUlYvmefK5hFS2VZXx0fOF7s6FvCqkgyuDPjAMrXJIMgoxPHiHiESQUYOWX2v44Gxh%2BGPbxoH1Em6DQnr8COx8cWfu1oHy3bLJyL%2FBQv5WK%2BMoguC2lYvjuyj%2BjiuKtdExkaEJHJsTthA0kjpY6MlSyvk6xOvX8YLwn6%2BF3vEAVRLjg4DrCDQuUB0QQB2xgBsxahB75Ei%2F%2BIBs41PKh14uaSC6k1MtsK0AvHZrusisRZl8FRRm5HaxE%2FNvHCv4gjmOC15GgiYGZoJ%2FJ5niRdSwGpJFdFmK6Q1XnEaKWUiUcKN25%2BQcvSuFrKEy2%2Bu%2BJFwfSbL6zsWzEh%2F2kMpDUF10NinRPPt%2FlsjGdVqX5wgXAKR86XX9TvlWP2J%2BT0Yir%2Fb1w35H%2BBhwn3ip8ifqJ6LgmQIAxon5m1y%2F1SLW%2F6xLuOJ0AfdKfAzrlnFi%2FoEFZ05RfDETBq0CTVPyILsgJRPUmKDGQOp6pjmRwKMGf%2B2bVXU6YhGrAgDlxEMBO6qZ9j6hFXOyHXiUr%2B6YyMDqXBgXzhuLv%2FMUMT2B0qWHNuJltWJzaVO0UyHDlIh%2BqtnGj%2Fe8IXIdbFEmQwo%2FPayQY6pgFH360BxE5nIX5e%2F%2BWpZ8%2BX3SWL39fo4X2Li48uh5RcgJllzqLSiKwjkV47713LvHwtClfP2TwmKpoGNqxYhfw3%2Fq5Yqjjspnx1INQ0iepLfPsb2VZ1nU6WdpOt%2FhABsASH6Sx5UGBOlezoUQ82gN1WCvyeG3tMa2KqHYeQD7yLeMEwqpTZffhgiVBXxnewNP8DyWxz7JOYMx55NkMjstJO%2FJmcDLsf&X-Amz-Signature=8fb1583290dd99a5204f83cd33631ce6cf99dab28a42df6949bde78d07621095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
