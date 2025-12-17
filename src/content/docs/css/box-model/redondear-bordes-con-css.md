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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNVLXGPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqT07Q2QpjKWL8xxqyrKQwiGWysisZdzyIn0ZrLiOsiAIhAOFM821Qaixy1nCZwqb%2FMe3gCsHfqi6VTxYiAcwg5o8HKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9nKgSratwi9FB5sq3AM9OfSq2IpEcBotgWx7%2BwofUGbkzZegNvJq4gsVC5KIAFGrPAlTtwp1j%2BmEZMM8rQxQi4dRmQB4Z6LCQrmBDfwNGm%2Bfzkrhh7qeOAGdeCAHNBGVBIBL8zcYxAy6S%2FwEoznEg%2FUYRqrS8FiTXEda5ind8KVi%2Bsjx0DX7SfwA2ioazUpJQ2WyRnJ7gu4Qk%2FItWHSF6i2CISkt6f8LQw5R7jiS%2FRwLR7SzW16UmCejKHltg1tHlYxi2u3xjGQhbFxStKRFFmo4mOio1SHFataK4%2BFVfXF5B1g9wfEfstmiQCUk%2B2NnEBrxHYPY2YWrGGKhLH6hgXZcdvIi7KgONQcmnE4E9vw6e74PHV5YkYvbLCqEdO599TLRYxCbKFuWuyiA%2F0QiYuwKdwnOar%2F94ygKQ9YjkWbwnCxUmtXW9DmBhtnabjh16ZhNiB618rNojROVmwFmlZCRIvUmcWYpMzt511xZL%2B7SpnV4HmXKHejhziVHcoIA9lTMFE9fJwg%2Fq1FTpbZRHTdvqppBf7YkhRczir%2BZxTcDghhSVSe0X0XqCYzYetyB5%2FTyKq4vbsBLW4lwm4lrniGGnatOc4BF2YBe998Yvm%2BN5ByJQ%2BKu77LYApsCICzsheH%2BRd%2BbhRt8MzC1n4vKBjqkAUIXFxpOxjTT5io8c%2BxBHUgiur4uXMEwknoNrGeOeXx7NF4dILwL5oolf%2F6Yjba1u1zjfjBfRrec0wdTEDKzxuVxRK4Ml4x88lOl7Lb1EbPf66pF4r8VY54FjdxnU%2B62zNENeMvd5ruZ8lehagpA%2FQXaZM8FQgrMdHLns3Egyf21cTszN9Xojt2vZJ7mtAacg6MuTGF9mabfLnlnoa4UgSRboC2Q&X-Amz-Signature=24c794671a9972d8ac43ad10bcfb2327b3e35b6b1da9a386588256c641b5b717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNVLXGPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqT07Q2QpjKWL8xxqyrKQwiGWysisZdzyIn0ZrLiOsiAIhAOFM821Qaixy1nCZwqb%2FMe3gCsHfqi6VTxYiAcwg5o8HKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9nKgSratwi9FB5sq3AM9OfSq2IpEcBotgWx7%2BwofUGbkzZegNvJq4gsVC5KIAFGrPAlTtwp1j%2BmEZMM8rQxQi4dRmQB4Z6LCQrmBDfwNGm%2Bfzkrhh7qeOAGdeCAHNBGVBIBL8zcYxAy6S%2FwEoznEg%2FUYRqrS8FiTXEda5ind8KVi%2Bsjx0DX7SfwA2ioazUpJQ2WyRnJ7gu4Qk%2FItWHSF6i2CISkt6f8LQw5R7jiS%2FRwLR7SzW16UmCejKHltg1tHlYxi2u3xjGQhbFxStKRFFmo4mOio1SHFataK4%2BFVfXF5B1g9wfEfstmiQCUk%2B2NnEBrxHYPY2YWrGGKhLH6hgXZcdvIi7KgONQcmnE4E9vw6e74PHV5YkYvbLCqEdO599TLRYxCbKFuWuyiA%2F0QiYuwKdwnOar%2F94ygKQ9YjkWbwnCxUmtXW9DmBhtnabjh16ZhNiB618rNojROVmwFmlZCRIvUmcWYpMzt511xZL%2B7SpnV4HmXKHejhziVHcoIA9lTMFE9fJwg%2Fq1FTpbZRHTdvqppBf7YkhRczir%2BZxTcDghhSVSe0X0XqCYzYetyB5%2FTyKq4vbsBLW4lwm4lrniGGnatOc4BF2YBe998Yvm%2BN5ByJQ%2BKu77LYApsCICzsheH%2BRd%2BbhRt8MzC1n4vKBjqkAUIXFxpOxjTT5io8c%2BxBHUgiur4uXMEwknoNrGeOeXx7NF4dILwL5oolf%2F6Yjba1u1zjfjBfRrec0wdTEDKzxuVxRK4Ml4x88lOl7Lb1EbPf66pF4r8VY54FjdxnU%2B62zNENeMvd5ruZ8lehagpA%2FQXaZM8FQgrMdHLns3Egyf21cTszN9Xojt2vZJ7mtAacg6MuTGF9mabfLnlnoa4UgSRboC2Q&X-Amz-Signature=df2f7d08652a0c29b280409c69bb88085348f3380c7e0f29f783579101a028e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
