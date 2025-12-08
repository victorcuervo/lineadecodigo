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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QRROK5Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoaSfz2rkvcQpia7xnmtEYswde6HA848iSaAuLgwIkjAiEA5E1Q6NhNwJGnvTmOaqYN6cRg6W87QtyRe2QiFZOYpmUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJuw5QH%2FECUzE8HMCrcA0UUUnbNs3Facvs4B6SvZs4ixm6FGreeXQl2OH99n9ZoYjwd5QglO6y%2F0r3jEKjUGL9eIzthp4%2Fu9Zq3rwDlnuanx%2Fta1dI55Cz%2Fve3TlMTZCmRBa9e0DYA3xT2ZCYe0NP8GjGRoulgB9ol1kU7V6m94h7CDXt3v6IBrUDGCwL2rpjQlhr7k8%2FqB%2FDzDkf9W%2BdDZJzYRl9JuBrkzqFTIk%2BLPkQB4nuMuABJD0NDdx%2FokhpickFnAEh3ZSP3dh7RjUhjoE5f7JnJIChPMbqm8cYVXx4lpQgYd5%2BGUHXhiUTvQfVXmo2wB04Z0Wy4ikf7hYOuetWo0xviPsVxOuLR6aF%2FbDmnJixii7QIjgSbaD4FpCf%2F23kmW%2FpEpQF9cbveaysM4OVGK8t%2BKvLptxYyELraOuS%2F6DhhPvT7QaVjVqw29YpVDQrm4t56Hc%2F8YiEFqfaRsxdu9yaHkz0rpfrdM44rI1URY%2B4%2B2XoIUA38k6EZcuNFRJ9st%2Bzk4TrMrQcqRs88l9Y2imTRbfuzZhpB8GOCklN9rpqFkxE%2FNTgZGaeytsCFUOXiSpv39i3CjbJ9cGDWhdLkvt25taIZ3nXP8n4CBFVV1Mw28GX6QJKx13ZF9JHp04MQOaMzOJeTpMKLB28kGOqUBrHNbGXgGzCJu9WQUiENzFIBFtYQiNJOyqSHCeyWIBwh6X79pn4heQX%2FcZ4GL3znZzV%2BxqWNMUDKYv1LXrP1j1LhIMJMnkQX5dn%2BJzPcjZipxaXsveqOMZJAM6DEnJurLLMMIZm2cwwGtiN%2FGoTOQnxz5HRdMRfKTzdtrGhbaLg05mYohXThs2AYbdLyjUQhSByoU73wyyYj7S%2BLmg1xJFdnqM3Zc&X-Amz-Signature=98b0f340e53f516726fd838a4c2c3ac9d933516dea05b2ed4062ba5cdd46a587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QRROK5Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoaSfz2rkvcQpia7xnmtEYswde6HA848iSaAuLgwIkjAiEA5E1Q6NhNwJGnvTmOaqYN6cRg6W87QtyRe2QiFZOYpmUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJuw5QH%2FECUzE8HMCrcA0UUUnbNs3Facvs4B6SvZs4ixm6FGreeXQl2OH99n9ZoYjwd5QglO6y%2F0r3jEKjUGL9eIzthp4%2Fu9Zq3rwDlnuanx%2Fta1dI55Cz%2Fve3TlMTZCmRBa9e0DYA3xT2ZCYe0NP8GjGRoulgB9ol1kU7V6m94h7CDXt3v6IBrUDGCwL2rpjQlhr7k8%2FqB%2FDzDkf9W%2BdDZJzYRl9JuBrkzqFTIk%2BLPkQB4nuMuABJD0NDdx%2FokhpickFnAEh3ZSP3dh7RjUhjoE5f7JnJIChPMbqm8cYVXx4lpQgYd5%2BGUHXhiUTvQfVXmo2wB04Z0Wy4ikf7hYOuetWo0xviPsVxOuLR6aF%2FbDmnJixii7QIjgSbaD4FpCf%2F23kmW%2FpEpQF9cbveaysM4OVGK8t%2BKvLptxYyELraOuS%2F6DhhPvT7QaVjVqw29YpVDQrm4t56Hc%2F8YiEFqfaRsxdu9yaHkz0rpfrdM44rI1URY%2B4%2B2XoIUA38k6EZcuNFRJ9st%2Bzk4TrMrQcqRs88l9Y2imTRbfuzZhpB8GOCklN9rpqFkxE%2FNTgZGaeytsCFUOXiSpv39i3CjbJ9cGDWhdLkvt25taIZ3nXP8n4CBFVV1Mw28GX6QJKx13ZF9JHp04MQOaMzOJeTpMKLB28kGOqUBrHNbGXgGzCJu9WQUiENzFIBFtYQiNJOyqSHCeyWIBwh6X79pn4heQX%2FcZ4GL3znZzV%2BxqWNMUDKYv1LXrP1j1LhIMJMnkQX5dn%2BJzPcjZipxaXsveqOMZJAM6DEnJurLLMMIZm2cwwGtiN%2FGoTOQnxz5HRdMRfKTzdtrGhbaLg05mYohXThs2AYbdLyjUQhSByoU73wyyYj7S%2BLmg1xJFdnqM3Zc&X-Amz-Signature=77f8ec63a05e9519782d3ead0eea15fb7d19928a789764a3c71f4c195cb3b43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
