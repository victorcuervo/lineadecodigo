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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GEMV24T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6zFebRbH%2FWPnOqtPacYh2k6czSeOOG099oEXF16mxrgIhAMRZIF5%2Ff8eGbFLYBHiH10GgEOxy03HrprpaZyv86iCSKv8DCGEQABoMNjM3NDIzMTgzODA1Igyfo%2Fk9r23S74oYoicq3AMPzILsDGvgLjurFBwfgC39jh3%2BkRMR3qiRXKu9OfJTPpmD4vwQ80%2FEwvTRregJ4clNUlR0z3GTs3Y8r0Qo9tH6VVduggTqRqs2h3BTOAXH3xuSlomOY7Sg1dz%2BhNjgOsSAZoIEWeXgmN2049LsTozd%2B8Q6XUOqy67YmA28Im5ibEV4Uy4LDrV%2FB4lpIx%2FAQrbrUDHsLKVl3a8zYQiGNVv7lyyeRX5ckGGVWxxWxYTv89HAnqRHBeAX5Gyxb3QiibfopsRBMJ9oCWid5f4bjl46zdbeGIO9o95oyuAcErEbVWu55qYIFTZRTatZe9zglXJ5HxMvwMSFfCbtFYcYNFqWMIrhJTn9Nz%2BSjWT9HABBSmKl9xTYqsrIe8PQRNy3WiV9AsjoAhnNi4kaWYZ2VTlwR4RaVTwXHGhuIG6d0o9%2FaTjbL5YAn0lPOnwV0%2FhqZrKPtEjl74FyqlH4Km9sHGTPQKbWMSGR%2BLL2PcFBDzNpqracBNQW49gU8IzfAV58fgyltqXlVQV1doo2Oeg1GNWvka897CurabzmRxr3sC48E9coTn%2Be0yXvlKWzi8jOL106rge09sbytIN3Sy2GHcWtm5%2BiNqRpgcEaFiVRhv7jraNyQRmw3efQC%2BTK5zC098vJBjqkAf2wWjTiJIq3Pen5smjIUiez8P3nMc%2BqodVBzTKjmgYckbVjmecSl2J4p2y9ZrFcLHjOtZ%2BAMelEf8hxjbAuYpOqGgr6W27x1ypk5V7W%2BiY0IVo%2Fsu50EpV01Su0iSmUSF56N1ZQwGNPIJOY93jcRIyY1V390bmO92fDpR7ZnHDY%2BjUB5qyMp13MAUJcgWZ6LNcE0tE0NKkqGOmkV%2FwJTiCd1o3v&X-Amz-Signature=122d6fec6df57b6be7582784103d494834ae420a196e6cb56a186ffa78b0eb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GEMV24T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6zFebRbH%2FWPnOqtPacYh2k6czSeOOG099oEXF16mxrgIhAMRZIF5%2Ff8eGbFLYBHiH10GgEOxy03HrprpaZyv86iCSKv8DCGEQABoMNjM3NDIzMTgzODA1Igyfo%2Fk9r23S74oYoicq3AMPzILsDGvgLjurFBwfgC39jh3%2BkRMR3qiRXKu9OfJTPpmD4vwQ80%2FEwvTRregJ4clNUlR0z3GTs3Y8r0Qo9tH6VVduggTqRqs2h3BTOAXH3xuSlomOY7Sg1dz%2BhNjgOsSAZoIEWeXgmN2049LsTozd%2B8Q6XUOqy67YmA28Im5ibEV4Uy4LDrV%2FB4lpIx%2FAQrbrUDHsLKVl3a8zYQiGNVv7lyyeRX5ckGGVWxxWxYTv89HAnqRHBeAX5Gyxb3QiibfopsRBMJ9oCWid5f4bjl46zdbeGIO9o95oyuAcErEbVWu55qYIFTZRTatZe9zglXJ5HxMvwMSFfCbtFYcYNFqWMIrhJTn9Nz%2BSjWT9HABBSmKl9xTYqsrIe8PQRNy3WiV9AsjoAhnNi4kaWYZ2VTlwR4RaVTwXHGhuIG6d0o9%2FaTjbL5YAn0lPOnwV0%2FhqZrKPtEjl74FyqlH4Km9sHGTPQKbWMSGR%2BLL2PcFBDzNpqracBNQW49gU8IzfAV58fgyltqXlVQV1doo2Oeg1GNWvka897CurabzmRxr3sC48E9coTn%2Be0yXvlKWzi8jOL106rge09sbytIN3Sy2GHcWtm5%2BiNqRpgcEaFiVRhv7jraNyQRmw3efQC%2BTK5zC098vJBjqkAf2wWjTiJIq3Pen5smjIUiez8P3nMc%2BqodVBzTKjmgYckbVjmecSl2J4p2y9ZrFcLHjOtZ%2BAMelEf8hxjbAuYpOqGgr6W27x1ypk5V7W%2BiY0IVo%2Fsu50EpV01Su0iSmUSF56N1ZQwGNPIJOY93jcRIyY1V390bmO92fDpR7ZnHDY%2BjUB5qyMp13MAUJcgWZ6LNcE0tE0NKkqGOmkV%2FwJTiCd1o3v&X-Amz-Signature=174d7079e8db3cb3a7f3b6b393deebf67a756550f68f5a60b15c00b4a8aa39a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
