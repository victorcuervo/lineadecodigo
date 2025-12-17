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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FG3H5O4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagnV%2B4rdDNgANZlmHHSBdY0VsrhKocQukGy5M2uJvfAIhAIeoccnLBVUf3MfU5XBfSrGmjjMIBDluNPazYnGT7%2BPeKv8DCH4QABoMNjM3NDIzMTgzODA1IgzrxDioRZLcuHUzcMwq3AP0vqY%2F9uD%2BHy9QNsJAG4hVqEpOaxXb8BVzCBc4jSPge8nuSH%2B1oEjTEfUBg21D2XVtq2Jb6nJ4iWc5k5AOZ%2FFqz9pOgduXsy%2BxoCWWSbibXKl51nBx44uBXBQkNu%2FUkrtOJkkizFVBLFJaIBVWoJ%2BtFZvGV5Sw51NSx4x991oUDMT3vsH9gLZ8FoLBd4uraslEREIUQKSfD%2BbyIdbcSJV689mg4a8kaxGJ7cq1Fg9CIEINaezs5hxlW6HuGDiqdlFJddaGH23JjHSHufjFoafs66riRuaCxKOsZCDAKvrLQ3vAZ6swxCyc8Lcz8EZxdYQrBkc46%2FrrIx6xztpwgKae3LOPU3s1Yz9PCLcCcjDpOWL%2BpYN%2FKC5%2B%2BabRFDyL9DU7rMoEYDji9KUqa5y%2BXor%2B8%2FxZUvoXhvIFBywzdTLa0HA%2FgOgg8Jiob%2FI5%2FYahxvVuUUwh3pesutwDFbKjzxM%2BgHB41foER2Aje6t3qxP%2FQ8sx68J4ieVBvjl7ZomcJp8Dlad7uefNfzd9YCaup7DqvXzIRpBNQ4cHC7fM9KXCFIeepFbHE%2BJS3Z%2FpSyPvcGRt9aS%2FMWw1PcPGDbDUN3BxSqRK%2Bt8Fp06fgxbV%2ByDa7phVM8pTcMNDjaxwUTDdxYrKBjqkAQd1Rgg9nTLF4IkQd0HK%2BzTtQ%2B27VSK6qOPRee329y%2FuLVI3xbAhsZJhcDYnafmUAcEhoRqr%2BZqTpZohOWkSOkxATpExoK%2FPZr30sVzbhWnlrWxqrm0UUM8ul5XWbfgB4BaHm%2FUuTRG8BpOBk3f0hNQwgo%2BMBDWpeLnAsTDhWgOas13Elwkrmq70zjp18MX0owoq2JYDP7gCLN0VDXmbFhB%2BbOwK&X-Amz-Signature=fbf7c3952b824c6f3b1fe119da52d998ceda92d5479ec464d7fbc0839e44ecef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FG3H5O4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDagnV%2B4rdDNgANZlmHHSBdY0VsrhKocQukGy5M2uJvfAIhAIeoccnLBVUf3MfU5XBfSrGmjjMIBDluNPazYnGT7%2BPeKv8DCH4QABoMNjM3NDIzMTgzODA1IgzrxDioRZLcuHUzcMwq3AP0vqY%2F9uD%2BHy9QNsJAG4hVqEpOaxXb8BVzCBc4jSPge8nuSH%2B1oEjTEfUBg21D2XVtq2Jb6nJ4iWc5k5AOZ%2FFqz9pOgduXsy%2BxoCWWSbibXKl51nBx44uBXBQkNu%2FUkrtOJkkizFVBLFJaIBVWoJ%2BtFZvGV5Sw51NSx4x991oUDMT3vsH9gLZ8FoLBd4uraslEREIUQKSfD%2BbyIdbcSJV689mg4a8kaxGJ7cq1Fg9CIEINaezs5hxlW6HuGDiqdlFJddaGH23JjHSHufjFoafs66riRuaCxKOsZCDAKvrLQ3vAZ6swxCyc8Lcz8EZxdYQrBkc46%2FrrIx6xztpwgKae3LOPU3s1Yz9PCLcCcjDpOWL%2BpYN%2FKC5%2B%2BabRFDyL9DU7rMoEYDji9KUqa5y%2BXor%2B8%2FxZUvoXhvIFBywzdTLa0HA%2FgOgg8Jiob%2FI5%2FYahxvVuUUwh3pesutwDFbKjzxM%2BgHB41foER2Aje6t3qxP%2FQ8sx68J4ieVBvjl7ZomcJp8Dlad7uefNfzd9YCaup7DqvXzIRpBNQ4cHC7fM9KXCFIeepFbHE%2BJS3Z%2FpSyPvcGRt9aS%2FMWw1PcPGDbDUN3BxSqRK%2Bt8Fp06fgxbV%2ByDa7phVM8pTcMNDjaxwUTDdxYrKBjqkAQd1Rgg9nTLF4IkQd0HK%2BzTtQ%2B27VSK6qOPRee329y%2FuLVI3xbAhsZJhcDYnafmUAcEhoRqr%2BZqTpZohOWkSOkxATpExoK%2FPZr30sVzbhWnlrWxqrm0UUM8ul5XWbfgB4BaHm%2FUuTRG8BpOBk3f0hNQwgo%2BMBDWpeLnAsTDhWgOas13Elwkrmq70zjp18MX0owoq2JYDP7gCLN0VDXmbFhB%2BbOwK&X-Amz-Signature=71e4f94197c11c6b38f01a65faf260b215ca43fe7d6bdc92ab9cb2cf4a4c67b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
