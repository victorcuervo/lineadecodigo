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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTKGZZ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ9TuEvWmrZW03jQoHFBRzdTyMGPW2Kt34aDzZr6UqJAiEA5%2BEYxHCQos%2Ban2Z7vmBIkD%2FILhmStupFEkAc43FqAKcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD8vHbhrYABxoGOIircA7yv3reyqVQAtXz4ez1XmeFPjNNqsRuTyb2rNIIQi0%2Bw5MpHlDvD25VBBt6LDzonYT2SUFKeD4B8G%2FkZYCZHsvrjdaC6g7ffQZ%2FiBxX6%2BmHZdZZSn6hDvFDTt%2Fe%2Fs%2BdtHSXfutA3tY6tZ034fxUqS6HMQpaRnwpw%2B0TA4SjU%2BatvyGa0v0akq3kN5MzbeiyghzgxEAJ5GAlMW3H7a8WOGnmpA8tGN%2FHikiUGpWKDbf6zmeuWrpwBqToyCx0wbXxsq1%2BCPzau%2BZ180T2ToerEFbgdcPJGmTg4w3lA57L7%2FMUqyLyU%2BP6L9Q64o%2FjGTXf3UgDZGxTNc1F1jHTKf9QuMTfbLnpxnXc1TYj6j%2BfP5roXWDdhOqeNi0Kc8zKP5%2BrrGiui3SePYDpFqA3H4fGSu%2BQUCW%2Fr%2FQURp8PA%2FMygku4hmFyJf4tEXwAy%2B6bil%2BQACLEDyh1%2B7Lb7FsbHYWxKi%2FqinAAR27ZqxuByCwnIqu5X3lESeQf1pxON8a51rp54t%2BYV0Uj3U%2F5tQeihl3N3FTcqQ5ha0XcoB7z6%2F2BKQAO8ovyMZ3rnjq3jtt%2BYUpIHBlb02YHMUY9DcbCGAzZTltpv1ne3iyHXLQuJMhKLsp1ij8WxGsFND60ZYrG%2BMLDu2ckGOqUB%2BHa0Hj5ib2gxbRSbfFZsv5URvroE9dEaXY5o87K3%2B9H3xMhQhF15oMWy1O7YpdomdzVZOyRaNabwvz6cEJtvdcoc%2BHtEKHYuY99nBH2pErXFazlkyuryJi2iQgV5zz2ii3Oqi%2F%2FGt1eOai3w26E%2FX91Hg09l6yiVhVmzwb1wn%2Fz%2FH7qTalaf%2BQroxflMdaNIuxTP%2BJXOwa5hLZW%2Fhnq%2FLR6wEXS5&X-Amz-Signature=de206fdb9f26c00a670c1153e520d828061093ffbc12246e282f196eb7addcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTKGZZ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ9TuEvWmrZW03jQoHFBRzdTyMGPW2Kt34aDzZr6UqJAiEA5%2BEYxHCQos%2Ban2Z7vmBIkD%2FILhmStupFEkAc43FqAKcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD8vHbhrYABxoGOIircA7yv3reyqVQAtXz4ez1XmeFPjNNqsRuTyb2rNIIQi0%2Bw5MpHlDvD25VBBt6LDzonYT2SUFKeD4B8G%2FkZYCZHsvrjdaC6g7ffQZ%2FiBxX6%2BmHZdZZSn6hDvFDTt%2Fe%2Fs%2BdtHSXfutA3tY6tZ034fxUqS6HMQpaRnwpw%2B0TA4SjU%2BatvyGa0v0akq3kN5MzbeiyghzgxEAJ5GAlMW3H7a8WOGnmpA8tGN%2FHikiUGpWKDbf6zmeuWrpwBqToyCx0wbXxsq1%2BCPzau%2BZ180T2ToerEFbgdcPJGmTg4w3lA57L7%2FMUqyLyU%2BP6L9Q64o%2FjGTXf3UgDZGxTNc1F1jHTKf9QuMTfbLnpxnXc1TYj6j%2BfP5roXWDdhOqeNi0Kc8zKP5%2BrrGiui3SePYDpFqA3H4fGSu%2BQUCW%2Fr%2FQURp8PA%2FMygku4hmFyJf4tEXwAy%2B6bil%2BQACLEDyh1%2B7Lb7FsbHYWxKi%2FqinAAR27ZqxuByCwnIqu5X3lESeQf1pxON8a51rp54t%2BYV0Uj3U%2F5tQeihl3N3FTcqQ5ha0XcoB7z6%2F2BKQAO8ovyMZ3rnjq3jtt%2BYUpIHBlb02YHMUY9DcbCGAzZTltpv1ne3iyHXLQuJMhKLsp1ij8WxGsFND60ZYrG%2BMLDu2ckGOqUB%2BHa0Hj5ib2gxbRSbfFZsv5URvroE9dEaXY5o87K3%2B9H3xMhQhF15oMWy1O7YpdomdzVZOyRaNabwvz6cEJtvdcoc%2BHtEKHYuY99nBH2pErXFazlkyuryJi2iQgV5zz2ii3Oqi%2F%2FGt1eOai3w26E%2FX91Hg09l6yiVhVmzwb1wn%2Fz%2FH7qTalaf%2BQroxflMdaNIuxTP%2BJXOwa5hLZW%2Fhnq%2FLR6wEXS5&X-Amz-Signature=ed9845f0afe65d3daf9a133c92b75c155320ecef3b8f878e8f915561c8b83c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
