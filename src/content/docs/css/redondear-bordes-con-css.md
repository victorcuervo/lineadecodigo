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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2TG2FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlAv2yYCI4Xa6fXir%2By%2FM%2BMY%2BFlUx4B1KKKypYi1vvtgIgFmSaYa3V9LhfQKhnloDRkjnhRWw332b6%2BXXAiROifxYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4vOSdynJ63iYUGDyrcA0Fh7dwbvrPMmA44Q%2BKexmk3kIOPR6LeKM%2BV0jldZpRESDnfdWcVLrnfVTy%2BJdqefmP4TOvcGsrJAesrj5AYXcAwJ06q27%2BcsQSjkCOs%2Fst2IdjH8wOqPGG18WWs8760xHHlIZv2KgqbeZ9bIjDGWjqL5UGml0V0TzOevlIsp%2Bmie%2F%2Bbj0bjPfRZUOFL0i667hZF7o0ze62EbPKQvZPgeC0Y1RjbdzEZCkvc23WZnEdkvHEANeN9l%2Fe8jS3Uajm%2B3sMATypGpuhFz%2BqWT0lTIm2NKkZchl%2BuH7CPJdVqJKrDYtdyb3obB6Tl%2BzHKttFQg4dgwzw%2FFX7UkEzIDCHhiBrLyZAcpyKCmg7%2B4zVsvAvr6bSA4gEzik2Tkv2IQfiNdoeM%2BwB4WSgKfPtc0bCatrl8VqrcUnVUO4INW1NDL0XrABAO9lYt%2FKzIpVRnjZzjUKUP9Xc%2FQYkpOjOMlH7a93Nw1o5XO8gUEiXRWlgHyx5I1gzjAThq8fUMMkYP1GBLBp2Yeasq8a9FyKIfAcVkTSFOI5s%2FrzbTj5Tpqzv5%2BRPBmQm3puFjq3avacZQk0isxeiPwFPW8EhZnpRnqAKT6PngU7vsWf9p2%2F3TIgIeoIFzm9WD4RrKvsciecVZMMjQ2ckGOqUBDEfhyHLv2unELKulAw4A81enG4mPc8J5ACWdUJry0%2Bgm%2F9a5RlzUYl%2BHl2VcRC5QCF4E%2BOFpodddghu9Ie795u356pQ9OK755adY%2F2llFsVjgfGN4%2FBiYQclQaM%2FSbrxuslQmTgIplIewQo%2BwPMCCt1K4LhzesH416iCx6osLY5vzgYuaEC45WSTvk6%2FLlzWDw6N43IJ0oz%2BwxnT2nwpB4B3zgqJ&X-Amz-Signature=9f3d26007d753f99091ebd2c3742d2a09c7b7c72bfcc9cd2858dd8300d848c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF2TG2FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlAv2yYCI4Xa6fXir%2By%2FM%2BMY%2BFlUx4B1KKKypYi1vvtgIgFmSaYa3V9LhfQKhnloDRkjnhRWw332b6%2BXXAiROifxYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4vOSdynJ63iYUGDyrcA0Fh7dwbvrPMmA44Q%2BKexmk3kIOPR6LeKM%2BV0jldZpRESDnfdWcVLrnfVTy%2BJdqefmP4TOvcGsrJAesrj5AYXcAwJ06q27%2BcsQSjkCOs%2Fst2IdjH8wOqPGG18WWs8760xHHlIZv2KgqbeZ9bIjDGWjqL5UGml0V0TzOevlIsp%2Bmie%2F%2Bbj0bjPfRZUOFL0i667hZF7o0ze62EbPKQvZPgeC0Y1RjbdzEZCkvc23WZnEdkvHEANeN9l%2Fe8jS3Uajm%2B3sMATypGpuhFz%2BqWT0lTIm2NKkZchl%2BuH7CPJdVqJKrDYtdyb3obB6Tl%2BzHKttFQg4dgwzw%2FFX7UkEzIDCHhiBrLyZAcpyKCmg7%2B4zVsvAvr6bSA4gEzik2Tkv2IQfiNdoeM%2BwB4WSgKfPtc0bCatrl8VqrcUnVUO4INW1NDL0XrABAO9lYt%2FKzIpVRnjZzjUKUP9Xc%2FQYkpOjOMlH7a93Nw1o5XO8gUEiXRWlgHyx5I1gzjAThq8fUMMkYP1GBLBp2Yeasq8a9FyKIfAcVkTSFOI5s%2FrzbTj5Tpqzv5%2BRPBmQm3puFjq3avacZQk0isxeiPwFPW8EhZnpRnqAKT6PngU7vsWf9p2%2F3TIgIeoIFzm9WD4RrKvsciecVZMMjQ2ckGOqUBDEfhyHLv2unELKulAw4A81enG4mPc8J5ACWdUJry0%2Bgm%2F9a5RlzUYl%2BHl2VcRC5QCF4E%2BOFpodddghu9Ie795u356pQ9OK755adY%2F2llFsVjgfGN4%2FBiYQclQaM%2FSbrxuslQmTgIplIewQo%2BwPMCCt1K4LhzesH416iCx6osLY5vzgYuaEC45WSTvk6%2FLlzWDw6N43IJ0oz%2BwxnT2nwpB4B3zgqJ&X-Amz-Signature=7a814edb8896cf83db1360434dcd567503d32f63cee32abecdf2dd58eaf79340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
