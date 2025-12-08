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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3SD2WE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo1Hpye1FX5P6FKcIB1pj44bddE7stO4eyWPJJpgALwAiAjj2h3nL8wiI%2F3vWK1XUU1wLOnIe%2FC8%2FBVYtyKHYVHMyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKEOA%2B%2FePjMn4wBWvKtwDopFvXizD4z9vsl0%2FWp9%2Fdlsm9LEEaNiIYf0VnEZLJVxterCXzx28U7uQRNU%2Bk4xauYasMdAZyU9mnWPBzpDq0Hk7%2FpVNe2ny4UwOQkYqFZiBMJ7ddpGUPHD%2BheQkWurLtodHlnOcVaZZl8XMdhTC6mMqYlY66rr53ebJIU5yz3BrhOiQnMYYbtLTSEYWYFcc3FHwZh1dxP3lXy5%2BaR95e%2FBGuZL9mgEA%2Fdz1GSZ4RvVBf1xXOLIobcDxSEWUbUHF8wiSUVJqhYDNYLLtTErbFsTHqQR8Xah5UmwMxNQ9wM9cjJQvgc3PhSj9z7%2Fm3I43ny23Ujqa%2BhNf1T5LmnDNtv%2B%2B7JPRgZwmrAY76YsjhVyKUX%2F4Dsq%2BivGD3Nb72Hx9QPzak%2BccTGZtGAQFPtGzYpUCI3IlQJSlTXDuNFmq1l9GEx8tuvrRDrpo%2FX%2FmJAThV%2FvHwpB%2FE9isqe3PkLNJ3CdVSlUiGXwdj3qLLR5N%2FJQCqneG8GXRVtgEqB1ZNrpW0k3CUhqkIzrGo6a10wtIFALvBDtJbjjoAZoAQYxCKB7PJ%2FYm5oynGJsS1uIEPv%2FZAshoqW1%2BZQEPaGmm2zA859kSmQPPtv6%2FWmAgilbZ2bOMOHhQ12bbu1S%2BZwQwpaHYyQY6pgHYwwGpSLmaPsXe63Ycp1L7QlZLhVgDSLju1SBNc2DL8%2B3PqNVmEoV%2BidELbHdRoR8EHdH0Ks0k0mt0rv9FkfE6S87IUtb8sQX5yIZKPLd8kmMZlt4aXRlgaLdATXyxICnsKcYCzMYMNxBXB30baCNfN2%2BWbpkvQX55ooNWVe7gNYHOu2HiIpmNt9Tv4T%2BlIKSqyOGOE2pgImdU5lvKAux3A7GNMni2&X-Amz-Signature=ba35a0f6c0daa5aa02a066751aeb996f2c8d9bd009a9b5459513faf800390117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3SD2WE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo1Hpye1FX5P6FKcIB1pj44bddE7stO4eyWPJJpgALwAiAjj2h3nL8wiI%2F3vWK1XUU1wLOnIe%2FC8%2FBVYtyKHYVHMyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKEOA%2B%2FePjMn4wBWvKtwDopFvXizD4z9vsl0%2FWp9%2Fdlsm9LEEaNiIYf0VnEZLJVxterCXzx28U7uQRNU%2Bk4xauYasMdAZyU9mnWPBzpDq0Hk7%2FpVNe2ny4UwOQkYqFZiBMJ7ddpGUPHD%2BheQkWurLtodHlnOcVaZZl8XMdhTC6mMqYlY66rr53ebJIU5yz3BrhOiQnMYYbtLTSEYWYFcc3FHwZh1dxP3lXy5%2BaR95e%2FBGuZL9mgEA%2Fdz1GSZ4RvVBf1xXOLIobcDxSEWUbUHF8wiSUVJqhYDNYLLtTErbFsTHqQR8Xah5UmwMxNQ9wM9cjJQvgc3PhSj9z7%2Fm3I43ny23Ujqa%2BhNf1T5LmnDNtv%2B%2B7JPRgZwmrAY76YsjhVyKUX%2F4Dsq%2BivGD3Nb72Hx9QPzak%2BccTGZtGAQFPtGzYpUCI3IlQJSlTXDuNFmq1l9GEx8tuvrRDrpo%2FX%2FmJAThV%2FvHwpB%2FE9isqe3PkLNJ3CdVSlUiGXwdj3qLLR5N%2FJQCqneG8GXRVtgEqB1ZNrpW0k3CUhqkIzrGo6a10wtIFALvBDtJbjjoAZoAQYxCKB7PJ%2FYm5oynGJsS1uIEPv%2FZAshoqW1%2BZQEPaGmm2zA859kSmQPPtv6%2FWmAgilbZ2bOMOHhQ12bbu1S%2BZwQwpaHYyQY6pgHYwwGpSLmaPsXe63Ycp1L7QlZLhVgDSLju1SBNc2DL8%2B3PqNVmEoV%2BidELbHdRoR8EHdH0Ks0k0mt0rv9FkfE6S87IUtb8sQX5yIZKPLd8kmMZlt4aXRlgaLdATXyxICnsKcYCzMYMNxBXB30baCNfN2%2BWbpkvQX55ooNWVe7gNYHOu2HiIpmNt9Tv4T%2BlIKSqyOGOE2pgImdU5lvKAux3A7GNMni2&X-Amz-Signature=4c0f3ab06fe685c8cf96fe8a8582fac3c0ac68f6b943207ee84c49ee54ad8b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
