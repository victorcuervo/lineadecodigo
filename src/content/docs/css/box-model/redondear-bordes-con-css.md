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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRETUA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbwp2iUK7Sip7XydTG0yvKEcIUaiVbVFEYEePeFcDX7AiBoIiGgXFXON2cnglMkVugIoAVvYv5MygFUHrt1ZoUFpCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMVda0T5XlDVic%2FrW9KtwDKiNKjcrOtXONPOPdDS7qpe04zr8znMbFKxkAU24%2Fb1dLKsfsQz15jp4VOvCIHB6HK6OIMlYyD6BH%2BjD2JN09GbZ1TrnLrNrco4lsAnKrPMw3P%2Flon0czlCnaq5VrR2id2qqxdFLn6GfKKw6nd0G1CbD1ovHucM6tdreW1sFm8KfxZq96tLaKnMhehhswLm1WHxKCyxCRHLZfjl1xkjnynwc%2B%2BVlxcGz6QKhILLgqSmWKMIVFF8Kq5qLgPmAD7kEYT2DietxaDylPZ95fZInqCRSt%2B%2FJuFDOhVpaaSTw0Mb1NtJYBamvTm%2FgNisOT9dX7nuFtg70a%2F8VVnfU2wmFuwGAIgyqzyppXbhqcHCfdIsFRPK7nMQm642RBQSIiVV87zZldrsrb%2BYs%2FX%2BZG20AgHGFdb9M%2BM6gi3vAJZ0u7Znt%2FxEYAFv9VN1O0DaHwThdGc6ea7188DbcAtEjRpzSh0hcF3ALZrLZGqIlMwLljpC6Tgg%2BKNDOMvtLI5HAkG8EExZ%2FRRKM0fApvVkPea3F9qxB1lTNSiGNKvSFl1tIzp5HO4g%2BwxHb1FuQyIUIs52n4kJr%2Fqc9WlJ%2BidRpP%2Fa3t%2FshSMIq0x%2B0pj0UG6UBpHjOfrkrZ6ThY85%2FmgG8w2IOIygY6pgECHIis2xHVr9Cv13%2B%2B%2Fq5Qe599MHSMHobAgHIzFXd6XIlbnu%2BEzoxq2kGX8jQQKrIpUl5z6L4HZO304WKb7G17%2Bg7VcywSOmhEOPN1LWYgFCPiOsp2f7KkMg2asW5tH8FAvCP7FnNh%2B1eL8gS2oDaltZK5UvPrfg%2BnBbIwms%2BGjrwdJNWs2XsXdRz%2B6wJO5Z6oA7kzAoZlAK0gtwnA%2FkAgr16MlHmB&X-Amz-Signature=ad23f23427cd1c9cf82ada471855e68e04abe4be79a22047fa553bbb96cf4657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRETUA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbwp2iUK7Sip7XydTG0yvKEcIUaiVbVFEYEePeFcDX7AiBoIiGgXFXON2cnglMkVugIoAVvYv5MygFUHrt1ZoUFpCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMVda0T5XlDVic%2FrW9KtwDKiNKjcrOtXONPOPdDS7qpe04zr8znMbFKxkAU24%2Fb1dLKsfsQz15jp4VOvCIHB6HK6OIMlYyD6BH%2BjD2JN09GbZ1TrnLrNrco4lsAnKrPMw3P%2Flon0czlCnaq5VrR2id2qqxdFLn6GfKKw6nd0G1CbD1ovHucM6tdreW1sFm8KfxZq96tLaKnMhehhswLm1WHxKCyxCRHLZfjl1xkjnynwc%2B%2BVlxcGz6QKhILLgqSmWKMIVFF8Kq5qLgPmAD7kEYT2DietxaDylPZ95fZInqCRSt%2B%2FJuFDOhVpaaSTw0Mb1NtJYBamvTm%2FgNisOT9dX7nuFtg70a%2F8VVnfU2wmFuwGAIgyqzyppXbhqcHCfdIsFRPK7nMQm642RBQSIiVV87zZldrsrb%2BYs%2FX%2BZG20AgHGFdb9M%2BM6gi3vAJZ0u7Znt%2FxEYAFv9VN1O0DaHwThdGc6ea7188DbcAtEjRpzSh0hcF3ALZrLZGqIlMwLljpC6Tgg%2BKNDOMvtLI5HAkG8EExZ%2FRRKM0fApvVkPea3F9qxB1lTNSiGNKvSFl1tIzp5HO4g%2BwxHb1FuQyIUIs52n4kJr%2Fqc9WlJ%2BidRpP%2Fa3t%2FshSMIq0x%2B0pj0UG6UBpHjOfrkrZ6ThY85%2FmgG8w2IOIygY6pgECHIis2xHVr9Cv13%2B%2B%2Fq5Qe599MHSMHobAgHIzFXd6XIlbnu%2BEzoxq2kGX8jQQKrIpUl5z6L4HZO304WKb7G17%2Bg7VcywSOmhEOPN1LWYgFCPiOsp2f7KkMg2asW5tH8FAvCP7FnNh%2B1eL8gS2oDaltZK5UvPrfg%2BnBbIwms%2BGjrwdJNWs2XsXdRz%2B6wJO5Z6oA7kzAoZlAK0gtwnA%2FkAgr16MlHmB&X-Amz-Signature=e32769c726b6eceaf232d9dff6b635279e41a993b474617181fc794c201f0847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
