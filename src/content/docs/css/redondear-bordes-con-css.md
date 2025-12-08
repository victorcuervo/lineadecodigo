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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIATRJEG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhjPIawvhVA8G6ePr4Yz2mgcaVde4cbAikttKhwum8ZAiA5gDht975r196Ie0lTVkHjfpD6KdjmzNAaNBzvIPMgkyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3roujz%2BtjDpw28gHKtwDyNSin%2BrVOIDAoge9IzKOHIjLiVE9WeatBBjsHkR9fn9XZlPRulQaFvCF3AkDI8PJokvGSVXRTlzKPoYwKpyUzPinU0w97XWdCUQTjOm4NR1ZWmjOD1rWHL70%2BHawENItdytAAM1nzoqyQeCeHWAYbrn9AOtsAD8PN6c0%2F6jJ%2F7L8jTwq4EfcTzxwF8fgAmqJE3fH07yASOQilitFM5APIPMO2lkHtWHCZUv65tGbNiHpWF8T%2FnOh%2ByO2pluSP94NGZef%2FeAenfA0Y3nmdaVz1DxjhlkVf%2Bz7lsezaruBWLCZAptzkJyaNzabk4cS447UbdK3bO0%2BDCA2TC1Oy0B1WJK9L3Cf6v0GLlsFejwYinOe1nBJsCErvHMKGG7ph7BytJsT6sxUQGjyqQvXub5vPHRYCJnVXjR5k1OuJcP66Jymo6yyW2%2BrpAoAmb3HZXaecGzaJ1SiXuCLfy3jOz1igtqyxnywgJ2r6hyCuQUQUsqJIG85m%2BW47xR%2FL5LXBXk3O8ftMRQqA4WayO3XBRCBAE0u%2FNP7%2Bbb%2ByC9xHFL9wPqmsW3x4luaePNEBtsIs0tMhY9eNGL5aRDrHypmPbB7y9kCjHVjjbj8ht8%2FWPZVV6tvm4tbrcfr1jzxI1cwqe3ZyQY6pgGlu5amky80IE8U%2BpCw1pOZz3IPOZX9eUJg78wW10brMPuLY4oBKEiBdpR6NWtSjQ3BVLRYy3v13Wcv1QilTFRlzw2I7o1p3QZd5fz9k6S1Ff2EMr2ueopQowt07f1u%2FnKLQKsIzke5ZroGkxKgaPyXdVH%2BqfQdVpVE9xWbZmj%2B6KELGL0tqteRvWQiEzSwLfIx85c1fyi66HuSK7VUxIlSXcXEa3rl&X-Amz-Signature=d5ef69c9925fcb4c987a742608e343189823055fb81ad79aba119ab368e9db0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIATRJEG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhjPIawvhVA8G6ePr4Yz2mgcaVde4cbAikttKhwum8ZAiA5gDht975r196Ie0lTVkHjfpD6KdjmzNAaNBzvIPMgkyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3roujz%2BtjDpw28gHKtwDyNSin%2BrVOIDAoge9IzKOHIjLiVE9WeatBBjsHkR9fn9XZlPRulQaFvCF3AkDI8PJokvGSVXRTlzKPoYwKpyUzPinU0w97XWdCUQTjOm4NR1ZWmjOD1rWHL70%2BHawENItdytAAM1nzoqyQeCeHWAYbrn9AOtsAD8PN6c0%2F6jJ%2F7L8jTwq4EfcTzxwF8fgAmqJE3fH07yASOQilitFM5APIPMO2lkHtWHCZUv65tGbNiHpWF8T%2FnOh%2ByO2pluSP94NGZef%2FeAenfA0Y3nmdaVz1DxjhlkVf%2Bz7lsezaruBWLCZAptzkJyaNzabk4cS447UbdK3bO0%2BDCA2TC1Oy0B1WJK9L3Cf6v0GLlsFejwYinOe1nBJsCErvHMKGG7ph7BytJsT6sxUQGjyqQvXub5vPHRYCJnVXjR5k1OuJcP66Jymo6yyW2%2BrpAoAmb3HZXaecGzaJ1SiXuCLfy3jOz1igtqyxnywgJ2r6hyCuQUQUsqJIG85m%2BW47xR%2FL5LXBXk3O8ftMRQqA4WayO3XBRCBAE0u%2FNP7%2Bbb%2ByC9xHFL9wPqmsW3x4luaePNEBtsIs0tMhY9eNGL5aRDrHypmPbB7y9kCjHVjjbj8ht8%2FWPZVV6tvm4tbrcfr1jzxI1cwqe3ZyQY6pgGlu5amky80IE8U%2BpCw1pOZz3IPOZX9eUJg78wW10brMPuLY4oBKEiBdpR6NWtSjQ3BVLRYy3v13Wcv1QilTFRlzw2I7o1p3QZd5fz9k6S1Ff2EMr2ueopQowt07f1u%2FnKLQKsIzke5ZroGkxKgaPyXdVH%2BqfQdVpVE9xWbZmj%2B6KELGL0tqteRvWQiEzSwLfIx85c1fyi66HuSK7VUxIlSXcXEa3rl&X-Amz-Signature=7c4a962b202bf7db3a00a18ec19147597d020d80f4edb412092fb56d5004dcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
