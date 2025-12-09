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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJLRTIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5BvWNhbcEkc%2BSdDpIKuk59mutNpKGwLKjz7kwhrxYhAiBiXtR3MvKPg58DKHoLvxn4331KNBbXSZE0eNG5cg%2BgRyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F42GTX35CdzjCX9OKtwDSY%2FBEXEAjwM%2FO529udICU3%2FTzuU0BT8GV7%2FKA9f5DC4Ez1%2FoX89AEApMw032EC3K8cbqkzjH1Vdz08R9oEMaTlHI6AyTInrF24UpmWfoJWuAuyjsO5o0DupXRpslZovKcfGL7ul%2B1roZzUQa1W%2BHs9LmoP16bhKhMPPkoqlRkCeAxK9qkLCypeOpIlfOBmdgAQ6JIwhMb%2BDiU%2FYpWSg2Yneq9VxrsQWPUlbN509NDLP7p4uqDC3ev7eIG5heFACvN8%2F6gN1HoKM%2Bl%2Bj%2BjIYPPNxSEntYVhPAwrlQguEJb4OjGlv4wB7n14bmXVoex6mHYoVPWO%2BdPH9MlwRATewIq1f2wmHyRJjglPAgH2tyzRE2C0HXyp%2Bk859adHBrejjsiz%2BFXkQRCBVoWUA6H7BKULaUagbKGhwRT4%2FN%2BAB9Q57UDIrEVYBG0mKStfg5%2Fexr%2BKck7EC4F0VB9JYfNJb5oFYYPy9zcuwVA66bHP%2FnbguH8N7OY%2BayOqgUQb7ngVZbpwmytgtIoa7iDEupibEKmYiQfin5gu%2FDmAlRLywXXhOk5%2B51b7wYlj1ZnSzVmXtj0EqetnEvqbY%2BZWxOb%2BcHDKr%2BXpF5IjNi0BNba0KLKMuXQUa8hBx39KiKnMAwnendyQY6pgH5wove3qLnAThGACtflMHWpRysrp6Mxm2GC5gLmnvmUlDbESvg3UXGxmDJ70q3pR7VXSD%2BF%2BABGuy5vUXR8OrSsxmCsEMmElc5oVZZdwqGeSjTkq4hY3wjOB1Xx293fACcg9TQBptZBmqGnB6Luu7qgXpRU1AmOJ%2FDy4oW1HWbKlJot0rkFeJ2ltVYRRbnJ2wJrKPX2lTePUBv1R%2BxJv4N9lBdNGtT&X-Amz-Signature=b81a2d9fe95f66411a36c252a73f4005f3e9c73a3b04a974f8c6fe96275d16c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJLRTIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5BvWNhbcEkc%2BSdDpIKuk59mutNpKGwLKjz7kwhrxYhAiBiXtR3MvKPg58DKHoLvxn4331KNBbXSZE0eNG5cg%2BgRyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F42GTX35CdzjCX9OKtwDSY%2FBEXEAjwM%2FO529udICU3%2FTzuU0BT8GV7%2FKA9f5DC4Ez1%2FoX89AEApMw032EC3K8cbqkzjH1Vdz08R9oEMaTlHI6AyTInrF24UpmWfoJWuAuyjsO5o0DupXRpslZovKcfGL7ul%2B1roZzUQa1W%2BHs9LmoP16bhKhMPPkoqlRkCeAxK9qkLCypeOpIlfOBmdgAQ6JIwhMb%2BDiU%2FYpWSg2Yneq9VxrsQWPUlbN509NDLP7p4uqDC3ev7eIG5heFACvN8%2F6gN1HoKM%2Bl%2Bj%2BjIYPPNxSEntYVhPAwrlQguEJb4OjGlv4wB7n14bmXVoex6mHYoVPWO%2BdPH9MlwRATewIq1f2wmHyRJjglPAgH2tyzRE2C0HXyp%2Bk859adHBrejjsiz%2BFXkQRCBVoWUA6H7BKULaUagbKGhwRT4%2FN%2BAB9Q57UDIrEVYBG0mKStfg5%2Fexr%2BKck7EC4F0VB9JYfNJb5oFYYPy9zcuwVA66bHP%2FnbguH8N7OY%2BayOqgUQb7ngVZbpwmytgtIoa7iDEupibEKmYiQfin5gu%2FDmAlRLywXXhOk5%2B51b7wYlj1ZnSzVmXtj0EqetnEvqbY%2BZWxOb%2BcHDKr%2BXpF5IjNi0BNba0KLKMuXQUa8hBx39KiKnMAwnendyQY6pgH5wove3qLnAThGACtflMHWpRysrp6Mxm2GC5gLmnvmUlDbESvg3UXGxmDJ70q3pR7VXSD%2BF%2BABGuy5vUXR8OrSsxmCsEMmElc5oVZZdwqGeSjTkq4hY3wjOB1Xx293fACcg9TQBptZBmqGnB6Luu7qgXpRU1AmOJ%2FDy4oW1HWbKlJot0rkFeJ2ltVYRRbnJ2wJrKPX2lTePUBv1R%2BxJv4N9lBdNGtT&X-Amz-Signature=43ee03e6e3cdeb3031ca3d315c01fc3be33fe0a00c45d7eee46b75034f391a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
