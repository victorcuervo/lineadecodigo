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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NR3C4KA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0Ed97Fy8PtjkJwa8lEbca2FqzIYClkXzQubcW09gQUAiB5xmyd72zGNcVmvB1EXLuJq0Myfx%2BZiR6A9xJxgfxPPCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGGG0rm4Vxuv521SKtwDHouDBVQsHPzCmN%2FIxFV7Wp4DFRnO%2FWJMqWLdRISSt2RGZu2Nj9zKd88k%2FKppfhxNkrSCG1Dx6TwZSOUMO7UQfAxSTH8%2BGI3Z5RxRkq17vdiavHEJSi0cpfYM79e69yWWxSXGPhuNoephj6PWh2brMc%2FRehcZGfVUD%2FVCntqxz3hLXx5ZvqvJaJJx9qpJBqJ6T%2FT%2FZik8Uer1GKbPdBu16EiohzC6ipfWMYnuUuntBVmM6BwCcesdVFW4OEmwbtPVpLZV3QHkHSEfxssb2DQv4hJUFtDIXShywLPJDcV8Fa3tb9H04F3U96zTKUHj6zdZFsOvt%2FgxS%2BsqcNS4mGSccwSVKa1GzkBdnDeE4OzDy9h9F%2FxJgilZFoLPQZwcdUfMlVuTCwFmnBNNcYFp6WqZy4ojwrnxNHodiXVfMiBDeZ3OtPEhu92TPYFTGHnGdFMAHsVNfYMEl6KNxn87iEV5TKFVRzAgOQub6l1PXGdd51bShKqj%2BPLA8g3%2BzvxYKjB3RsdXCOLfnJ5psi6QkrGR3k9q14dl3l5K0Tm7HdUMd1hQ0z1rdxS2C9DtyBieKfQ4%2FwwuSRP6ad0CcOJ6g9ogrt%2BgzgwkL3AVF0miZ%2FcE6uTPZb0fq6NJQY54YAwwsO7ZyQY6pgHrP24rYScL8y8J3DjmnjCTvN8hss6CGGV4nc0hMxIaXsD5YbOrKF9VIn5zVfH%2BTG6troiSZWM6S0hlJyXb727135aBOKhc7uJuqdqNKIqJ4BKMMgHs6BcxXbEp3%2BJRi9urq%2FVjgpvhpmVRySwC80h%2B5ezPvmZdLj48%2Fzek45E5DmIU6Qiq1FEH1tdOBrkuCrY0g7V2NgjoMp6f%2BK4q8EHSggknPp8R&X-Amz-Signature=360f1024de13cab6e74641798948a33964071442ffb218c3ee8b0d39c42e505d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NR3C4KA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0Ed97Fy8PtjkJwa8lEbca2FqzIYClkXzQubcW09gQUAiB5xmyd72zGNcVmvB1EXLuJq0Myfx%2BZiR6A9xJxgfxPPCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGGG0rm4Vxuv521SKtwDHouDBVQsHPzCmN%2FIxFV7Wp4DFRnO%2FWJMqWLdRISSt2RGZu2Nj9zKd88k%2FKppfhxNkrSCG1Dx6TwZSOUMO7UQfAxSTH8%2BGI3Z5RxRkq17vdiavHEJSi0cpfYM79e69yWWxSXGPhuNoephj6PWh2brMc%2FRehcZGfVUD%2FVCntqxz3hLXx5ZvqvJaJJx9qpJBqJ6T%2FT%2FZik8Uer1GKbPdBu16EiohzC6ipfWMYnuUuntBVmM6BwCcesdVFW4OEmwbtPVpLZV3QHkHSEfxssb2DQv4hJUFtDIXShywLPJDcV8Fa3tb9H04F3U96zTKUHj6zdZFsOvt%2FgxS%2BsqcNS4mGSccwSVKa1GzkBdnDeE4OzDy9h9F%2FxJgilZFoLPQZwcdUfMlVuTCwFmnBNNcYFp6WqZy4ojwrnxNHodiXVfMiBDeZ3OtPEhu92TPYFTGHnGdFMAHsVNfYMEl6KNxn87iEV5TKFVRzAgOQub6l1PXGdd51bShKqj%2BPLA8g3%2BzvxYKjB3RsdXCOLfnJ5psi6QkrGR3k9q14dl3l5K0Tm7HdUMd1hQ0z1rdxS2C9DtyBieKfQ4%2FwwuSRP6ad0CcOJ6g9ogrt%2BgzgwkL3AVF0miZ%2FcE6uTPZb0fq6NJQY54YAwwsO7ZyQY6pgHrP24rYScL8y8J3DjmnjCTvN8hss6CGGV4nc0hMxIaXsD5YbOrKF9VIn5zVfH%2BTG6troiSZWM6S0hlJyXb727135aBOKhc7uJuqdqNKIqJ4BKMMgHs6BcxXbEp3%2BJRi9urq%2FVjgpvhpmVRySwC80h%2B5ezPvmZdLj48%2Fzek45E5DmIU6Qiq1FEH1tdOBrkuCrY0g7V2NgjoMp6f%2BK4q8EHSggknPp8R&X-Amz-Signature=0dccd2b1fc26bb2716835c8d210f135ae45e27437ec61cc610bb8e34d5c61e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
