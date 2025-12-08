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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7Z7YBO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp36Un7RnJURxQJNpniz1uhfWBEI9EzW8Jzj3Q901hNgIgN8gg5TZ9ZAZNOprAc%2FaR8Hh%2BB1%2FzLQLzxCkb%2F%2FOJ104qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSC%2BjGpknfHZ%2FfLUCrcA8LnPgVhCK3%2BQxy7rB9yGTr1JyFbJYh054L3Y9kQ581HI12QZZEHyovDAwzxXu1LgSEbb3voH0Lu7WUDACPyjQbp0qwDkIfHrPwAm%2FkPOElKdV88lndHV%2BDCbd5mI7wQLd1YKULru%2F6xsOpkJ70bCi5UJRo31Y99mZr8COHavcxikE8ZnwSJyIxWxq%2B0EjQ8JmNQm2q1CkLZngYZDdjg69bFQmEkFWPeNBF38xz5Vb2sTFpe%2B5Xs67vk7A8rSSc1eN0penIpDnHRTYF%2FWwZHEtgXrvlemNOBvFzf%2B%2FMk%2BCln0pCz6GajQsjWvwk2w9s2SlMbRdjs36WEHK6VrUyVsZKjO4y8P7JyQIta2bJepEVvBmY0c%2FtOzeOxA4annXfv3hBKQitrJV1HRPS5LrxyzcL90XgTmmn0wjii5A7I4sec6UOj%2FRiDN0q5jjHj%2BaR1d4DmUeW5qmIDlzgU%2FVG5oQlkzAm2X4wBypXeRPS25PTuLw0aD7BdxZWGc1pRJXxsZ5rY2gxlu1evRka0MquhAjJdp%2BJpxudjOz5AoYkRwXiyVuBVdEQWVusPh0FBAzITUWRcvc9D%2BkNbbBbfagOV5aOkcjrDtJB9%2FBbMMEhhzBK2IufLDJ7SfHlcdsoXMNih3ckGOqUBWDRRq2D2x9rBBAz3YmQ9K90tn5swcg2v5ErbTPBmmzjaEY5ESe1OQ1ae5MgEndV5quCSyt7qCZ3X9T9KT%2FGCS2qI8runF9mvVTmOOi3a%2FWWlV%2FZCpbxfTocgHJd2g0F2XXWeyGRprCzCUnBcVwOSv2I5bIFGK46MtiuB6XjyT6qvr8Ns13bGwSWcnJzcQYF1fcUL8Q8fLJWBfAqiWMZ5w0sMtL%2FH&X-Amz-Signature=96f05d4f56690a291e618dc63d2a99f74eb8ce7711e5bb20e6a7b0799526fa0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7Z7YBO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp36Un7RnJURxQJNpniz1uhfWBEI9EzW8Jzj3Q901hNgIgN8gg5TZ9ZAZNOprAc%2FaR8Hh%2BB1%2FzLQLzxCkb%2F%2FOJ104qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSC%2BjGpknfHZ%2FfLUCrcA8LnPgVhCK3%2BQxy7rB9yGTr1JyFbJYh054L3Y9kQ581HI12QZZEHyovDAwzxXu1LgSEbb3voH0Lu7WUDACPyjQbp0qwDkIfHrPwAm%2FkPOElKdV88lndHV%2BDCbd5mI7wQLd1YKULru%2F6xsOpkJ70bCi5UJRo31Y99mZr8COHavcxikE8ZnwSJyIxWxq%2B0EjQ8JmNQm2q1CkLZngYZDdjg69bFQmEkFWPeNBF38xz5Vb2sTFpe%2B5Xs67vk7A8rSSc1eN0penIpDnHRTYF%2FWwZHEtgXrvlemNOBvFzf%2B%2FMk%2BCln0pCz6GajQsjWvwk2w9s2SlMbRdjs36WEHK6VrUyVsZKjO4y8P7JyQIta2bJepEVvBmY0c%2FtOzeOxA4annXfv3hBKQitrJV1HRPS5LrxyzcL90XgTmmn0wjii5A7I4sec6UOj%2FRiDN0q5jjHj%2BaR1d4DmUeW5qmIDlzgU%2FVG5oQlkzAm2X4wBypXeRPS25PTuLw0aD7BdxZWGc1pRJXxsZ5rY2gxlu1evRka0MquhAjJdp%2BJpxudjOz5AoYkRwXiyVuBVdEQWVusPh0FBAzITUWRcvc9D%2BkNbbBbfagOV5aOkcjrDtJB9%2FBbMMEhhzBK2IufLDJ7SfHlcdsoXMNih3ckGOqUBWDRRq2D2x9rBBAz3YmQ9K90tn5swcg2v5ErbTPBmmzjaEY5ESe1OQ1ae5MgEndV5quCSyt7qCZ3X9T9KT%2FGCS2qI8runF9mvVTmOOi3a%2FWWlV%2FZCpbxfTocgHJd2g0F2XXWeyGRprCzCUnBcVwOSv2I5bIFGK46MtiuB6XjyT6qvr8Ns13bGwSWcnJzcQYF1fcUL8Q8fLJWBfAqiWMZ5w0sMtL%2FH&X-Amz-Signature=2045ae13d37f14cab979f97d4dea41f92f301da3b9996b0286b92369a3acb78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
