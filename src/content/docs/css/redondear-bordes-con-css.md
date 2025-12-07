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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZRXUFX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2zT225QPTkCX9XomM8v86VC8TkzIhm7N%2BhohKXq5EQAiBer9mr1S1dYCbHq2eEuLj4zNWMCuYAT2zTlfUgTW6fyCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKltSOpt5E1EvRPKKtwDYGCd7mJJGlKvFzPcdz8v3urubDxL9Sjb%2BifwXISmMEcR%2Fvm1jlJN%2BG1WEUpZ3dV58Ps7%2BzR2ciiZvO5peXr%2B5C%2FyL%2B2E%2F86QNj1iAnJWxBOdvr%2ByLyLciqQ8j38OJN%2FWVzhtExChM9WaiXKMD20P4azcGFNpR2M%2Bc3lBFT5TaIbf0zJRpWK3o7u2v5xdY8K0i13Jl6K%2Beox3RgpjyxgQMr2vyEw4KaRd86cOOMpVeXW4L0x3IIKdmumlWZvse7dQhe6IJYQDZc8qt79LmM8ApKd3HAuKWOLYSTW1r4ERyXEfHoRglTjcG17mXnU%2FvBMsp9idtxNVfigUG1ZKS2OLAhc2Wd0PyfhQ4eAURLoJDEVTH%2Bkvmxi9mDQBTjWQ8yVe5zolIEQEVXX0PV6X4e7sn0xXxX%2FDwPSGykhh1Wk%2FHKuDeqWCfxbx%2FGj2gu3IQdj3iGZT8eLLlfVjr6qLmdy5vzdaX5B5X4C1dQZPwft2Inl8wHOGrhduOYm6IE9o9wYGD2BArI%2BZiiKozLMrIrsF4NgbgBTsRpk%2B3BzRJZ%2FlVe2v%2B%2FL0ipBSzdjEB0gwZqxY%2FPn1jtJNGX4rI6Wl88hE0FxVnzRBW3fVqZW7Hi6ry0WEBA%2F%2F3oVeC733ikgwu6HUyQY6pgHClbspW8OcvHiaEaA1wx7Y%2FAqrSBswZjzDkgmgOHz92B2SQ4fVXAYBZ%2BmK%2F8dLUOsN5fjVzTDaj1PFZEZRlcRemtMuYRLATzc5DWikto9uXt70WzppXtiB8YfCIeXluNwY1IQYeZmJZZLnTJyLnSfXfbUtfQ6pNkOVhQmBpH58VFS3woEfu0TbElyXVuQ34Q4AjSjnQ5ZIhO5ETE7D2NBQkmZ8QHt%2B&X-Amz-Signature=e90294939cabe488b4b4b8f0b5b4d37010ab346dfce63a5afc5838dec7aa2248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZRXUFX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2zT225QPTkCX9XomM8v86VC8TkzIhm7N%2BhohKXq5EQAiBer9mr1S1dYCbHq2eEuLj4zNWMCuYAT2zTlfUgTW6fyCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKltSOpt5E1EvRPKKtwDYGCd7mJJGlKvFzPcdz8v3urubDxL9Sjb%2BifwXISmMEcR%2Fvm1jlJN%2BG1WEUpZ3dV58Ps7%2BzR2ciiZvO5peXr%2B5C%2FyL%2B2E%2F86QNj1iAnJWxBOdvr%2ByLyLciqQ8j38OJN%2FWVzhtExChM9WaiXKMD20P4azcGFNpR2M%2Bc3lBFT5TaIbf0zJRpWK3o7u2v5xdY8K0i13Jl6K%2Beox3RgpjyxgQMr2vyEw4KaRd86cOOMpVeXW4L0x3IIKdmumlWZvse7dQhe6IJYQDZc8qt79LmM8ApKd3HAuKWOLYSTW1r4ERyXEfHoRglTjcG17mXnU%2FvBMsp9idtxNVfigUG1ZKS2OLAhc2Wd0PyfhQ4eAURLoJDEVTH%2Bkvmxi9mDQBTjWQ8yVe5zolIEQEVXX0PV6X4e7sn0xXxX%2FDwPSGykhh1Wk%2FHKuDeqWCfxbx%2FGj2gu3IQdj3iGZT8eLLlfVjr6qLmdy5vzdaX5B5X4C1dQZPwft2Inl8wHOGrhduOYm6IE9o9wYGD2BArI%2BZiiKozLMrIrsF4NgbgBTsRpk%2B3BzRJZ%2FlVe2v%2B%2FL0ipBSzdjEB0gwZqxY%2FPn1jtJNGX4rI6Wl88hE0FxVnzRBW3fVqZW7Hi6ry0WEBA%2F%2F3oVeC733ikgwu6HUyQY6pgHClbspW8OcvHiaEaA1wx7Y%2FAqrSBswZjzDkgmgOHz92B2SQ4fVXAYBZ%2BmK%2F8dLUOsN5fjVzTDaj1PFZEZRlcRemtMuYRLATzc5DWikto9uXt70WzppXtiB8YfCIeXluNwY1IQYeZmJZZLnTJyLnSfXfbUtfQ6pNkOVhQmBpH58VFS3woEfu0TbElyXVuQ34Q4AjSjnQ5ZIhO5ETE7D2NBQkmZ8QHt%2B&X-Amz-Signature=e083c30ab51a7a66b75beaf972360759f3cd1104d6b2de8ee4fbeb4774d89889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
