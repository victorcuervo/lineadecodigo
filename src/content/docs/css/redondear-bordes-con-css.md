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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCJAXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYIuROgEeeWnWknIRfKq0l9wrDm11pr727zAyXL8sBxwIgKYvDg29TGXUuZvDGss3SNpjBfbvFedzDnWnxHDLCsr0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOnaTRd5hhhQ73H06ircAxjWfc4JipEVGgB%2BulTnLfWYw1pgIR1DJqMwEw1ZRdEpCALabFf9Uog%2FMiQrrfG%2B5uDTrW%2FNYK7gZ8dkb7isfTxuaddNz5MR%2Bj6uxOEft99bFQhHwBlbzJ1emoht%2FAszfBoyhEN2L9daDAlr2diSK1tjhQi4VpizLMizWgB%2BdkFWzfFX%2FH1%2Fgeh7fq5AtaF11uYG2PxyIELxJWyHBvfbRLtw3AZU0neb9ud37MXppF6VB%2B0a3uy3wmEOAaHI0rPC5eLv5RcqGgUL6v4r3fuVScFVSQPpO9Fzxp69eQ9%2BXNoSkZ%2BzVatlnv37mggtNdrag%2BOgHLv6j8RTVMnXBYN02gotjZkDFEyz1MpIo0oJT6yYhTTYGacnF4ult%2BvWrHUdddMi%2Bur83BnrGelaCW%2BRWs4Ecq48DrgghqKuRD4ueUuUbKPz6%2BA71JvlWNQFs9y2lw6uJZiUYtlQY79y%2BmAfnmPb0GDObDP%2B8OqRJvHox6PNepz8B8gSwtNerzr87LWVQDkP18yBi%2F1qw47Pv4fLfTndiXFYeyPMfXNBTNV7%2FeYMPKOTDW1XlTbP98AI%2FE%2BVLZk6qqgBWV%2FjvLIByF0uQaM%2BTbzRPRVxkO1oWhpJ%2BwWejzH4gnx1cSWFaBhUMJXT0skGOqUBVBx3hEMncNweN3sAXmu37GSEPvfhiNt4HlTnGcxZNvXPoshxCq55Cb7Vs8pskPlXF82wUWmL5J0dY4VKUvq4NyOfbwQnkayWddW%2BrM9%2Fe7mz8qWl7B2qyQG5bGMDlOBdAGEd3Wtzw6zCSoay4mMoAZlNdCdLpsxdMLYHqigv2E8oV%2FyewQaRGOCH1%2FPn3Sl5PH4xtc%2B%2B%2F%2F942qd3eDAWLs%2FuZXZA&X-Amz-Signature=8640cd6af49fe67ab9af5b55bb03c2878dd41efc5858075de066d04fdd7b3ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTCJAXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYIuROgEeeWnWknIRfKq0l9wrDm11pr727zAyXL8sBxwIgKYvDg29TGXUuZvDGss3SNpjBfbvFedzDnWnxHDLCsr0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOnaTRd5hhhQ73H06ircAxjWfc4JipEVGgB%2BulTnLfWYw1pgIR1DJqMwEw1ZRdEpCALabFf9Uog%2FMiQrrfG%2B5uDTrW%2FNYK7gZ8dkb7isfTxuaddNz5MR%2Bj6uxOEft99bFQhHwBlbzJ1emoht%2FAszfBoyhEN2L9daDAlr2diSK1tjhQi4VpizLMizWgB%2BdkFWzfFX%2FH1%2Fgeh7fq5AtaF11uYG2PxyIELxJWyHBvfbRLtw3AZU0neb9ud37MXppF6VB%2B0a3uy3wmEOAaHI0rPC5eLv5RcqGgUL6v4r3fuVScFVSQPpO9Fzxp69eQ9%2BXNoSkZ%2BzVatlnv37mggtNdrag%2BOgHLv6j8RTVMnXBYN02gotjZkDFEyz1MpIo0oJT6yYhTTYGacnF4ult%2BvWrHUdddMi%2Bur83BnrGelaCW%2BRWs4Ecq48DrgghqKuRD4ueUuUbKPz6%2BA71JvlWNQFs9y2lw6uJZiUYtlQY79y%2BmAfnmPb0GDObDP%2B8OqRJvHox6PNepz8B8gSwtNerzr87LWVQDkP18yBi%2F1qw47Pv4fLfTndiXFYeyPMfXNBTNV7%2FeYMPKOTDW1XlTbP98AI%2FE%2BVLZk6qqgBWV%2FjvLIByF0uQaM%2BTbzRPRVxkO1oWhpJ%2BwWejzH4gnx1cSWFaBhUMJXT0skGOqUBVBx3hEMncNweN3sAXmu37GSEPvfhiNt4HlTnGcxZNvXPoshxCq55Cb7Vs8pskPlXF82wUWmL5J0dY4VKUvq4NyOfbwQnkayWddW%2BrM9%2Fe7mz8qWl7B2qyQG5bGMDlOBdAGEd3Wtzw6zCSoay4mMoAZlNdCdLpsxdMLYHqigv2E8oV%2FyewQaRGOCH1%2FPn3Sl5PH4xtc%2B%2B%2F%2F942qd3eDAWLs%2FuZXZA&X-Amz-Signature=3da481169f15283ae9f3b54847d4dafb19e37984f86dd5c83b4d94357727c4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
