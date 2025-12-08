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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJ26XTN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeisQjswIoq5fVCY%2FMm%2FXbsnO8nkxwR8%2BamVLTciI6%2FAiBNEsiio9kqs5RYo2f%2BKOMe5dSY1vjD62gRa5imCLt3EiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEDv4Po18w1X0cy8KtwDV6hXJ%2FCalfSSA9lYB0Cdq4uWmleHkpoSmXDGYM8%2B3nTqhcGqQVdnbNDlHJthylWb4N%2BWji0lTP23XWR0LqV9z3luU3oMtMR0bygjNzsHMPG5eQao6bQ%2FAATXNf6x9OjuisCh8ibEimFbBOMdxyJL8jRr9IfKXtShB%2FppAIKXAXQmi60%2BX%2B4WUPgg2xOYbz1P2UAHOU%2FJJtFlpQzznnBNz1K%2BayTygabPvPnakfgxuSrySkQ9oeFHJt%2FHXc0wmdo6i5K1W%2ByCc8lgHQqi%2F8YkmmeJXcjW9yBjyWdPLyusvImpdNVE4ydT1GNnRvMbJTyDjLAmvTPcLuwjuouA4sOyvPFBKNlmfKxmAkKEb7NgFcp5uqbggp6tBFuIAF58uFBRnOVCuaEnhFFfc4xcVtJMCK7V3cgG3HjQKe5j60Nmt0XLnke%2FvwjQjlzsUw6PjN0aufBq%2BSXXQOL9B%2Bi1%2FgQ5EpcJ82UsLEMOM%2FkxvsBUDkaHw%2BMfLlKNh5IYfUbevf9UwIloi8Q6S5%2Bg%2FVLtEzwz5a8ty%2F7%2BBhzvow7IW%2BwjQyI70hDvcBRFdd%2FlRVyYiToN8GiIfBa0SmxwkGebL6vLbadH3mPjqRLjOnGuAoordgdku%2BAoE7WT%2Fn4gFgIwq9zcyQY6pgEvIvgAFjejsYRwjbyB%2BIzI0f9ZGs9Y%2FpVnuaOIIZWON63rXJAOH23ioAO%2FCUK4RxfJnzeOm9XSZY45RHkJ4zeubox7rlNPAO0VW2IFYTYRTbGXfXTdBVOtM%2F4iYrvDA79zBN9arqmP1lT%2Fc7h5juJcrt74emKtfzbvS00poNlmdeHs0n9PPx5gnfWt0aFxFmLND8taKw06rQSDLSPt6CfQhukHY8vp&X-Amz-Signature=d51dc0d98c59b4f343b6cd73d3918ba9d0615561fc1c33325e6a088dae507219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJ26XTN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeisQjswIoq5fVCY%2FMm%2FXbsnO8nkxwR8%2BamVLTciI6%2FAiBNEsiio9kqs5RYo2f%2BKOMe5dSY1vjD62gRa5imCLt3EiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEDv4Po18w1X0cy8KtwDV6hXJ%2FCalfSSA9lYB0Cdq4uWmleHkpoSmXDGYM8%2B3nTqhcGqQVdnbNDlHJthylWb4N%2BWji0lTP23XWR0LqV9z3luU3oMtMR0bygjNzsHMPG5eQao6bQ%2FAATXNf6x9OjuisCh8ibEimFbBOMdxyJL8jRr9IfKXtShB%2FppAIKXAXQmi60%2BX%2B4WUPgg2xOYbz1P2UAHOU%2FJJtFlpQzznnBNz1K%2BayTygabPvPnakfgxuSrySkQ9oeFHJt%2FHXc0wmdo6i5K1W%2ByCc8lgHQqi%2F8YkmmeJXcjW9yBjyWdPLyusvImpdNVE4ydT1GNnRvMbJTyDjLAmvTPcLuwjuouA4sOyvPFBKNlmfKxmAkKEb7NgFcp5uqbggp6tBFuIAF58uFBRnOVCuaEnhFFfc4xcVtJMCK7V3cgG3HjQKe5j60Nmt0XLnke%2FvwjQjlzsUw6PjN0aufBq%2BSXXQOL9B%2Bi1%2FgQ5EpcJ82UsLEMOM%2FkxvsBUDkaHw%2BMfLlKNh5IYfUbevf9UwIloi8Q6S5%2Bg%2FVLtEzwz5a8ty%2F7%2BBhzvow7IW%2BwjQyI70hDvcBRFdd%2FlRVyYiToN8GiIfBa0SmxwkGebL6vLbadH3mPjqRLjOnGuAoordgdku%2BAoE7WT%2Fn4gFgIwq9zcyQY6pgEvIvgAFjejsYRwjbyB%2BIzI0f9ZGs9Y%2FpVnuaOIIZWON63rXJAOH23ioAO%2FCUK4RxfJnzeOm9XSZY45RHkJ4zeubox7rlNPAO0VW2IFYTYRTbGXfXTdBVOtM%2F4iYrvDA79zBN9arqmP1lT%2Fc7h5juJcrt74emKtfzbvS00poNlmdeHs0n9PPx5gnfWt0aFxFmLND8taKw06rQSDLSPt6CfQhukHY8vp&X-Amz-Signature=83d23cbc84b77dc687a489c6aa0b520f13d47ca738be2d7c49de4b0123526909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
