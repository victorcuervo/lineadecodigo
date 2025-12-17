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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKLABZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHra4Dxsu8BYgvvn%2BvoxMdX%2Fx6DEAoH1YQNSEfeimmWIAiEA9yd5nJVDWnNZqh50sCl20pU3eRxeEdYWbJlpK6ORxXIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFwnHMvKQbE5kRwVyrcA3nGhI0InOQ9P9fINGJlOwKWcFB6XW%2BNGLWzUCJFLSLFigScqgMexwbiL05H8CCq%2Bi%2BsE%2FgpHhyLaq9c7cbXfrO7dsSV%2B6ivM9dupx8RptgEGTr48pfi%2Bu3dRGrBoPpC%2BYIFQJ6SwicaLYKpk3s78uCzzEMMf4hHTtZNmJYe3QoxKlxv74QoU16JxgFmlW%2FjSTChTk%2FVfio4Z2upozXRmfF99PoT4sJd5ok%2F%2FZH7ggBqxHbRy%2Bt2YYQg3wBcxm8ml%2F1uwZOW%2Fx4%2FtycnGENhFm%2BMfPpSuwTFU5yty42pgAV%2FzlZY5NQKDDguBiYtekYxUZlGH2FLsylJhLG%2FdU4HvUPurRW5qSNA8gSysBUhUKtPsF8G7NLONxPYsVQyNk2W%2Fg4DOmB6z7kFPXgoSxP%2FcB2N7JkHSnlwfR97FrhXE8jYZ6XcYSMvegxe5QtN2hC5rDAaAG2GVYoPg23Es4O4aVKmzMi98qQChFtqYuDDWzNO7Z9q6zYxMDafv8wdArt%2B7ctq83RldjwXH3F6QDOD2K77YpOfx15wvvy2dUPKjBLpNx%2FukHM5VVTONTxtZaw0R%2BjI9oKXaK%2BFHj99L%2B6Jvo7Al2VR%2BXuj3jQbhMDQSJdaHJQYBrmUA%2FFOzU%2B5MMGfi8oGOqUBupn8MJetrE53xZCm4bnivuS898BOm1pjM%2B4EqYR8LyeI%2FbXKcCi5BHiPtbpxTvPyLrugbK728xGHSIc34MJLvwSoV15m2DWXZMNlbuDaVQerTgS3iv9L5uiXEx8n%2FGBwp0Oj5LUkMr47mbbKGmYd8KF80AyQAaelCXtbF7bW0QGA8dB6x%2FyDaerLA12%2F2gWTKh6s8Q%2FZGFj0IbFFW%2FkXo5R4BOiy&X-Amz-Signature=47aed37ec963ce6623c3347287c1e44fa1a5b3180947c540e2fc2979e0d34097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKLABZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHra4Dxsu8BYgvvn%2BvoxMdX%2Fx6DEAoH1YQNSEfeimmWIAiEA9yd5nJVDWnNZqh50sCl20pU3eRxeEdYWbJlpK6ORxXIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFwnHMvKQbE5kRwVyrcA3nGhI0InOQ9P9fINGJlOwKWcFB6XW%2BNGLWzUCJFLSLFigScqgMexwbiL05H8CCq%2Bi%2BsE%2FgpHhyLaq9c7cbXfrO7dsSV%2B6ivM9dupx8RptgEGTr48pfi%2Bu3dRGrBoPpC%2BYIFQJ6SwicaLYKpk3s78uCzzEMMf4hHTtZNmJYe3QoxKlxv74QoU16JxgFmlW%2FjSTChTk%2FVfio4Z2upozXRmfF99PoT4sJd5ok%2F%2FZH7ggBqxHbRy%2Bt2YYQg3wBcxm8ml%2F1uwZOW%2Fx4%2FtycnGENhFm%2BMfPpSuwTFU5yty42pgAV%2FzlZY5NQKDDguBiYtekYxUZlGH2FLsylJhLG%2FdU4HvUPurRW5qSNA8gSysBUhUKtPsF8G7NLONxPYsVQyNk2W%2Fg4DOmB6z7kFPXgoSxP%2FcB2N7JkHSnlwfR97FrhXE8jYZ6XcYSMvegxe5QtN2hC5rDAaAG2GVYoPg23Es4O4aVKmzMi98qQChFtqYuDDWzNO7Z9q6zYxMDafv8wdArt%2B7ctq83RldjwXH3F6QDOD2K77YpOfx15wvvy2dUPKjBLpNx%2FukHM5VVTONTxtZaw0R%2BjI9oKXaK%2BFHj99L%2B6Jvo7Al2VR%2BXuj3jQbhMDQSJdaHJQYBrmUA%2FFOzU%2B5MMGfi8oGOqUBupn8MJetrE53xZCm4bnivuS898BOm1pjM%2B4EqYR8LyeI%2FbXKcCi5BHiPtbpxTvPyLrugbK728xGHSIc34MJLvwSoV15m2DWXZMNlbuDaVQerTgS3iv9L5uiXEx8n%2FGBwp0Oj5LUkMr47mbbKGmYd8KF80AyQAaelCXtbF7bW0QGA8dB6x%2FyDaerLA12%2F2gWTKh6s8Q%2FZGFj0IbFFW%2FkXo5R4BOiy&X-Amz-Signature=a031f2454a092d9d81e5b36fcb27239b0c60e486cfb9d158804d8d9b8f11f2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
