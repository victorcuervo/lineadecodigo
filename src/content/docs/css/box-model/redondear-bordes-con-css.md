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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJGHPXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwsjQAVo4kiLmA9%2FzC6pPUjgdz%2BDpmbc6tkv9ZyUY2QIgQ%2FCrmhc7jnh4zprogTXeAoGhNJhXi4HRnHDYdmaKsHcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJR8dvnbdr1j80X0DyrcA7CgBjxLMSEbLfme%2FclH%2FEmgd9%2Flu9lpgTkalX3VdIjXb75zcb6K7ElFchnFnDY7Z7WdH89Fr%2FA%2BHut3tj3iPEDu8Zv03te4GcbiqmZLlbi80AKKsaTdmJojdLBUCC0iAK2onky0f3OYp%2B8s7IyxP%2BmVr0VAEuup2PMWG1XVa7um9l1g11N81Qe7GseV0petJP2EWR9BdHdTgII3mOBq%2FPyAQqVW2prt9CZxcqE%2BLMsFh6fJK39GgWuUHajEQNpFNqlo4SFgwMoYzijsVjKgwjVzRz%2FhwyaRwf2WVADNL02uJVz1eInadEKmcSsq4HoyykBe%2FoQb0cmZjCRqIR9F0A9VbKGSGmEp%2B%2BcVL3bmZ%2F1WhqZ0oFKwmjqyI4PljslqBvBgECZXiYus4%2BkgkSjP8cb5SGYQP9d4KhB83LLrKJLhwBjeuXJkMmyYCQ6HAiOWjBz3OKjmvg1xthXVP00x%2FdxWQiL0bpQuYAt4m7dY7A8tKTsAdmdctvTZeV8L92o9KykWSVEDmi4TQ1FFNY9I99vLU3hDfDA%2FGJCtJ79xvg6VgwKsLe25U4fm9Pdy6qZUiNkjv%2BNOXw3H2G2zUYC9noMjxbdKY3FlFUC4Kh8ZeVRYFu0yAVdx0VgqT5vsMIHRicoGOqUB85Ii5hFn%2BTIaPJfnGvm8hJNQmw%2FwdybKKWjDj9fgqf%2BoUJr5n0Gx97kCw2z3hgkGvTQT2HtqpiAqrPU%2BdzNkUmYBzxDe2U8hwGrFhOdpX%2BEYFYalOMoOqwgOI2pOiJC83YiHsj58Ic42Bgd2tMbxWQz7gD3Oj%2B6TKMrUIPlTzlHEnlPiLbt5te9o2Tmgy7tOtngj1DoNPCfkK8OinyG3vRGLxTvv&X-Amz-Signature=bbb2af640b5ad34186c28f0520103af67d6e430bf3e79c33b591951aa986a8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJGHPXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwsjQAVo4kiLmA9%2FzC6pPUjgdz%2BDpmbc6tkv9ZyUY2QIgQ%2FCrmhc7jnh4zprogTXeAoGhNJhXi4HRnHDYdmaKsHcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJR8dvnbdr1j80X0DyrcA7CgBjxLMSEbLfme%2FclH%2FEmgd9%2Flu9lpgTkalX3VdIjXb75zcb6K7ElFchnFnDY7Z7WdH89Fr%2FA%2BHut3tj3iPEDu8Zv03te4GcbiqmZLlbi80AKKsaTdmJojdLBUCC0iAK2onky0f3OYp%2B8s7IyxP%2BmVr0VAEuup2PMWG1XVa7um9l1g11N81Qe7GseV0petJP2EWR9BdHdTgII3mOBq%2FPyAQqVW2prt9CZxcqE%2BLMsFh6fJK39GgWuUHajEQNpFNqlo4SFgwMoYzijsVjKgwjVzRz%2FhwyaRwf2WVADNL02uJVz1eInadEKmcSsq4HoyykBe%2FoQb0cmZjCRqIR9F0A9VbKGSGmEp%2B%2BcVL3bmZ%2F1WhqZ0oFKwmjqyI4PljslqBvBgECZXiYus4%2BkgkSjP8cb5SGYQP9d4KhB83LLrKJLhwBjeuXJkMmyYCQ6HAiOWjBz3OKjmvg1xthXVP00x%2FdxWQiL0bpQuYAt4m7dY7A8tKTsAdmdctvTZeV8L92o9KykWSVEDmi4TQ1FFNY9I99vLU3hDfDA%2FGJCtJ79xvg6VgwKsLe25U4fm9Pdy6qZUiNkjv%2BNOXw3H2G2zUYC9noMjxbdKY3FlFUC4Kh8ZeVRYFu0yAVdx0VgqT5vsMIHRicoGOqUB85Ii5hFn%2BTIaPJfnGvm8hJNQmw%2FwdybKKWjDj9fgqf%2BoUJr5n0Gx97kCw2z3hgkGvTQT2HtqpiAqrPU%2BdzNkUmYBzxDe2U8hwGrFhOdpX%2BEYFYalOMoOqwgOI2pOiJC83YiHsj58Ic42Bgd2tMbxWQz7gD3Oj%2B6TKMrUIPlTzlHEnlPiLbt5te9o2Tmgy7tOtngj1DoNPCfkK8OinyG3vRGLxTvv&X-Amz-Signature=796bab8f6cf5847c20eed32a19bbd63d0a082dbd7cf5f9066892c62c1d071c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
