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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHOIU4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hevsw2KUDphqH5S7ARtazYevDmRCX20I1IYWwkl1MwIgarPgf%2BTX88Lm2pQbdvlJxAQoZDKDlKbnxnOHDxLneegq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIbGsE9%2FpRyNtDQB5SrcA8tIkIc5gDfcpvapkkEjMvC1hq5grz%2BtunU%2FD3GCqa%2BqlfL6SPcBoder306Jny37aeVzA0RmYNiXLV53%2B0aSIkkWF8GPWHwQlf4aVpVeMmkyyFZoJZmlOh6KZKb7upbrzi%2FtOrXRV0GphH2SRERpRJFtlWhb24K0mxbH%2B6OglSdsciQcin5303TjefdVRGl%2BpE26ilKqjKllqRG9fKbOw2NKjWPVGrSoE%2BfXsUvDZUP6esDDuugAmRfm6wJsJR8iG8pIc%2BE9xXILfhEp%2BgMuwK71YL2PvLRss%2F0yzmTB5c8ECFXvNDeavjw6TLkJMA4qyHSGeg6nFZLEC7Z5yLLl5bs09d8wnsoAEHDsWAdaFiMgZX68kthisefU%2FRiaA7gqzkHvxDZvigxixk26rC3sQBWQmVDWVTn53PZenJUCzODh%2FEbPSgQnl525g5tFns5X4B%2FI1wmL%2FDHQSUpybujbg%2B7lAr5njf%2B33HVkFyRXx%2FfUL2L5U1mKio6wHnCE1BfUV0qtKB7mWa%2BKSSiCnQLB%2Fs7yi%2BMbN3pv8P7riqXlxJrecm%2FWILy4JK5ZfHQaM7reBPDokf5CQ930FlN%2B6fYyIA8MJ8O2KzE9RK4rdmF6phuyl3oZdbQgrLhUndhhMPSOisoGOqUBS52B%2BJXesf9bi01OD1RZ3GvCW0ZaMuLN%2FxHtGK%2B2tI%2B9ZG3%2BRVEUQsNAlOW%2BKhaKeTXcqry4748H4I%2FkdXXIx4OrrF%2BlHDw7d85zSvFhYcoObwRBExLmxMRXZMHcWuJLoLWzZNQ5LpwGDuXq8m70Rg295hX8dsihn2Wz3u9q1nr0oSIusZd4HDtmF51%2FVGXJXJGIxNeoaiIFmyxVz2ZtmJlxAh4I&X-Amz-Signature=e1aeea78ab08300372ecd45149cbeffcbde936ee3fd7869b59d92aa7771f6622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHOIU4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hevsw2KUDphqH5S7ARtazYevDmRCX20I1IYWwkl1MwIgarPgf%2BTX88Lm2pQbdvlJxAQoZDKDlKbnxnOHDxLneegq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIbGsE9%2FpRyNtDQB5SrcA8tIkIc5gDfcpvapkkEjMvC1hq5grz%2BtunU%2FD3GCqa%2BqlfL6SPcBoder306Jny37aeVzA0RmYNiXLV53%2B0aSIkkWF8GPWHwQlf4aVpVeMmkyyFZoJZmlOh6KZKb7upbrzi%2FtOrXRV0GphH2SRERpRJFtlWhb24K0mxbH%2B6OglSdsciQcin5303TjefdVRGl%2BpE26ilKqjKllqRG9fKbOw2NKjWPVGrSoE%2BfXsUvDZUP6esDDuugAmRfm6wJsJR8iG8pIc%2BE9xXILfhEp%2BgMuwK71YL2PvLRss%2F0yzmTB5c8ECFXvNDeavjw6TLkJMA4qyHSGeg6nFZLEC7Z5yLLl5bs09d8wnsoAEHDsWAdaFiMgZX68kthisefU%2FRiaA7gqzkHvxDZvigxixk26rC3sQBWQmVDWVTn53PZenJUCzODh%2FEbPSgQnl525g5tFns5X4B%2FI1wmL%2FDHQSUpybujbg%2B7lAr5njf%2B33HVkFyRXx%2FfUL2L5U1mKio6wHnCE1BfUV0qtKB7mWa%2BKSSiCnQLB%2Fs7yi%2BMbN3pv8P7riqXlxJrecm%2FWILy4JK5ZfHQaM7reBPDokf5CQ930FlN%2B6fYyIA8MJ8O2KzE9RK4rdmF6phuyl3oZdbQgrLhUndhhMPSOisoGOqUBS52B%2BJXesf9bi01OD1RZ3GvCW0ZaMuLN%2FxHtGK%2B2tI%2B9ZG3%2BRVEUQsNAlOW%2BKhaKeTXcqry4748H4I%2FkdXXIx4OrrF%2BlHDw7d85zSvFhYcoObwRBExLmxMRXZMHcWuJLoLWzZNQ5LpwGDuXq8m70Rg295hX8dsihn2Wz3u9q1nr0oSIusZd4HDtmF51%2FVGXJXJGIxNeoaiIFmyxVz2ZtmJlxAh4I&X-Amz-Signature=2d550f8e90850a7759d40e1bdcc8b08a793e2551dc8170ab9e53488eb35edfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
