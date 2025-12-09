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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLIE2QR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxE2i1Lyw8LPkNH4ZlYop2yy5XNAQWXb1Tx7N1S9TAXwIgPHiAoOkyc9HtbN2DMixz6wOFp2gxZIjIccooF5YUjJAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr%2FoZeRZdq1%2F7jhaCrcAyuSYDNsFbfBvbrLSD78ENUbbP%2BdynLsbvhCWqWQduSWgcGFdY4RUGlNZQII4utmIeek8TIl2nDtfLB8Cepp1ckNNSel8uswhQNk78TQ4iT3nRBC6ntzJDjBsdQXzT%2Bh3fEdEkjtYRgUrA8H%2Bv%2BM8YvpX%2BYMVaYIwOajgGDgxXtHEjmBf7j3bwlYJlbrKI4%2Bu4uK5otumEYPRTQW3ea5ibSyvO8L9jtwxD0IrbhCgdrdTKlqroBPwPAQ82CJ3puO9dtYOEXbyUW7b1Znxxf23bOleZmBohTVsxVcTKif1T40W%2Fmyx8rDijZKHJvFu3gjM48E%2B5iXCiGKWm7Pki%2B9giehOM71Bi0fDkNRET1hBnsRuVJ6N8hv1QOzoLibDDcSYl1JTjX7yEIZkiDcY9PJ2IMJhOE21Bnwt9llH%2FOKVc9LcacUbijZI%2BcA14u1%2BWEAMjCwe6kTIXNjrXUO53jYTXu9h1H6C1UdjZ%2FDwJmmotOtOXQPcI%2BcO8361b703%2BxNCjxYzlTd3uCHQmOJQshMI7xYbDMAJSNc63Z8yPONYDeXPRynTlJfaIhPXbOnxOrn5N0eq28QAy5MfQmHBpIbg9Z4mqSP%2FQt2gJA%2BU%2F0LE2fHeUH735OQpligWmgYMIvm3skGOqUBHjym%2FNWN0IrY%2F2LsmZHBm404Jlr%2B7Ou5LlWlygwSzQSFvqN8lenCXZDObbhOxhbwa9ZtVhGa%2BKXd8Cze1KJJSEvbZwY9jqb5Bv5Pb7eVimFP1m%2FtZEMdLr1DzSxLsjiHom1rwnJ0MlUnK1OZ9WRnR7ukBOfJnvgxWGgfpn0BIOk49KyleHqWiHlr7WqrNjkgDJ1hgcn%2BDvN%2F07EJi46LAkkS4HGI&X-Amz-Signature=b6f5636b27f5bb59e1460e66585aa4c35dc25fb53dc51e2ce74fb0af58ef4712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLIE2QR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxE2i1Lyw8LPkNH4ZlYop2yy5XNAQWXb1Tx7N1S9TAXwIgPHiAoOkyc9HtbN2DMixz6wOFp2gxZIjIccooF5YUjJAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr%2FoZeRZdq1%2F7jhaCrcAyuSYDNsFbfBvbrLSD78ENUbbP%2BdynLsbvhCWqWQduSWgcGFdY4RUGlNZQII4utmIeek8TIl2nDtfLB8Cepp1ckNNSel8uswhQNk78TQ4iT3nRBC6ntzJDjBsdQXzT%2Bh3fEdEkjtYRgUrA8H%2Bv%2BM8YvpX%2BYMVaYIwOajgGDgxXtHEjmBf7j3bwlYJlbrKI4%2Bu4uK5otumEYPRTQW3ea5ibSyvO8L9jtwxD0IrbhCgdrdTKlqroBPwPAQ82CJ3puO9dtYOEXbyUW7b1Znxxf23bOleZmBohTVsxVcTKif1T40W%2Fmyx8rDijZKHJvFu3gjM48E%2B5iXCiGKWm7Pki%2B9giehOM71Bi0fDkNRET1hBnsRuVJ6N8hv1QOzoLibDDcSYl1JTjX7yEIZkiDcY9PJ2IMJhOE21Bnwt9llH%2FOKVc9LcacUbijZI%2BcA14u1%2BWEAMjCwe6kTIXNjrXUO53jYTXu9h1H6C1UdjZ%2FDwJmmotOtOXQPcI%2BcO8361b703%2BxNCjxYzlTd3uCHQmOJQshMI7xYbDMAJSNc63Z8yPONYDeXPRynTlJfaIhPXbOnxOrn5N0eq28QAy5MfQmHBpIbg9Z4mqSP%2FQt2gJA%2BU%2F0LE2fHeUH735OQpligWmgYMIvm3skGOqUBHjym%2FNWN0IrY%2F2LsmZHBm404Jlr%2B7Ou5LlWlygwSzQSFvqN8lenCXZDObbhOxhbwa9ZtVhGa%2BKXd8Cze1KJJSEvbZwY9jqb5Bv5Pb7eVimFP1m%2FtZEMdLr1DzSxLsjiHom1rwnJ0MlUnK1OZ9WRnR7ukBOfJnvgxWGgfpn0BIOk49KyleHqWiHlr7WqrNjkgDJ1hgcn%2BDvN%2F07EJi46LAkkS4HGI&X-Amz-Signature=362df87ea09068ef6c8e0d73b11c1436b05e9c88e5c8f21be9c8f7e250210bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
