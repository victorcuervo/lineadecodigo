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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGXWFL2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJUtjL6Ih6Nixy7arzxSzZl1XvCRWnX2s9Nz4aRGv9wIhALg%2FUoXlxVNA9UrzIKWNp8HncGurBCSmTQhcRPeAVTEoKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX0z0luy1ZIEabbLsq3ANFIrvI9n85hxbtuY%2BiGn3Urp01xEEDm4cffscQgylnssJ0bdSQc5YptzOfNqqGxv7AK5r63JSdnde9j8ajnbALo4tQ2Sa9b5ZQInCS%2BnHVtmj%2BbrILYmJHgH%2Bc2RM3EU657MIupYEImKf1qM9b6mMQMt9PVoX0fQ5lQmgDRCZLlGGe12IObT6Nxoy79Is7d%2BDXVg7Xg%2BBSvrMf4PjAIohbkaFgyJZWhQCECYP4Qi0YFWxG1Js0ge3TBWXK5%2FawTG%2FWFGgUpwRNCdL08mAjqKGI6CKPFLI6VCoyz8snli179lhy9eOz6ZAKhSkHW3dUnDWWvUMTK%2F8LNPTS1Jr%2BYzZd37c5B9z5rEH%2BBjMtX7QG5P9b0X2QTwZWoSl4SnjIfB4Ft68uOmu3VQfD0P3B2iZe3okyyyVtLeP1rhVJ0Lig9UrFB97AmVhzqXlvvyO4mcO48IVmj2b1AsLwWY44CtxZN%2FBcqd5tp%2BirXE%2BqbGc52qwdOvpEiA4E48kTzP3bOaSx6FNj4OBhHJkNzlFIW5OUe%2Bum0TkEbps%2FiDrZIOb25dtDg6qERbV2AzT7FX6%2FjTCxjNxvOzYca4xwY%2BC50ZDDoeQgChOTCe%2BfOOHtplKB%2FpvnVb5PJbIo2Nsu4jCltNnJBjqkAU%2B4u94AEwxr4y2p1Y78HGjzFihy1VueYdp9zyOGsKFCgnUbqYvYABv0kzhmpoNv0OtMzsgq1%2FCnNlfb1417tl7gbwBEsn9mnVVSXPxeojgE7%2FkK01HzlSrp1TGsextG7xGCHMmwI6qm3SQPP9ffsdkFpj%2BWTWHzArWTablC4pY6%2F9dj94Bn6%2BREAgGHbmYh4fe6Df23OK1WOpPued4DYmA8K4RF&X-Amz-Signature=06d8490b9066b5e53316d004c05dd16092c998c0e01043aeb383b86808acc899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGXWFL2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJUtjL6Ih6Nixy7arzxSzZl1XvCRWnX2s9Nz4aRGv9wIhALg%2FUoXlxVNA9UrzIKWNp8HncGurBCSmTQhcRPeAVTEoKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX0z0luy1ZIEabbLsq3ANFIrvI9n85hxbtuY%2BiGn3Urp01xEEDm4cffscQgylnssJ0bdSQc5YptzOfNqqGxv7AK5r63JSdnde9j8ajnbALo4tQ2Sa9b5ZQInCS%2BnHVtmj%2BbrILYmJHgH%2Bc2RM3EU657MIupYEImKf1qM9b6mMQMt9PVoX0fQ5lQmgDRCZLlGGe12IObT6Nxoy79Is7d%2BDXVg7Xg%2BBSvrMf4PjAIohbkaFgyJZWhQCECYP4Qi0YFWxG1Js0ge3TBWXK5%2FawTG%2FWFGgUpwRNCdL08mAjqKGI6CKPFLI6VCoyz8snli179lhy9eOz6ZAKhSkHW3dUnDWWvUMTK%2F8LNPTS1Jr%2BYzZd37c5B9z5rEH%2BBjMtX7QG5P9b0X2QTwZWoSl4SnjIfB4Ft68uOmu3VQfD0P3B2iZe3okyyyVtLeP1rhVJ0Lig9UrFB97AmVhzqXlvvyO4mcO48IVmj2b1AsLwWY44CtxZN%2FBcqd5tp%2BirXE%2BqbGc52qwdOvpEiA4E48kTzP3bOaSx6FNj4OBhHJkNzlFIW5OUe%2Bum0TkEbps%2FiDrZIOb25dtDg6qERbV2AzT7FX6%2FjTCxjNxvOzYca4xwY%2BC50ZDDoeQgChOTCe%2BfOOHtplKB%2FpvnVb5PJbIo2Nsu4jCltNnJBjqkAU%2B4u94AEwxr4y2p1Y78HGjzFihy1VueYdp9zyOGsKFCgnUbqYvYABv0kzhmpoNv0OtMzsgq1%2FCnNlfb1417tl7gbwBEsn9mnVVSXPxeojgE7%2FkK01HzlSrp1TGsextG7xGCHMmwI6qm3SQPP9ffsdkFpj%2BWTWHzArWTablC4pY6%2F9dj94Bn6%2BREAgGHbmYh4fe6Df23OK1WOpPued4DYmA8K4RF&X-Amz-Signature=08161fefc8c52078ffe18af6fb23956301575bcab3b251c17e456d5e9f90150f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
