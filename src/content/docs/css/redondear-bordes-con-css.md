---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJPVQCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFjV6dAUVBGG33Dy0wZpPVg2xy2QvCcLVweLzKEKU9OiAiEA9SVFXkvDVC8grR0y4JqInhuk8yKyJ8fBeG8w4V5BiYQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGU8z4fxNAhLn9%2BwJSrcA%2B%2FxDwg2lw4keJ%2Bll9Y1Bvn%2BrnleHj9Uf%2BKvse3HPrq7tpGqynqgEuxqxr0duSWIGkb%2FtCQfXykl0YyOCCk6gxqDZq9AJnX0eCFiOHsQdGP%2F2HHixIRo%2FVux2wGDT6NbqVpv44r%2BlO7UEjh7lGltNM0X9G%2BeP0usuwqTlbZ7zK1SWOtu2XDOl9XXTh8aplgV6r3Uh7Z%2BC9HwUWgn%2FM3zLtC6JAWWMkvKAimHi1Vg6eND6Iu4ttefhq4zWsJ76kPreAMr6xU7bq%2Fg4dhNSuQdFbTkA2B%2B2RAHtzSkT43NpuhNbnG0Chaw8DpC8He%2FB6qmH4wdkK6vOAFXYmqWjhwD6GwShev8wTXol%2FbZRHAT0JIUTPCCo6ntb%2BKQ%2Bd4OWjjLWbeJTL%2BvQ10Nb5LHivszjpgx5Fs5MUCcBZxQ142480DKQg8WIGfTaxKVM8iPgEQrP1YCgG0mrdTi2xSPhnMvRWBRRzBHcQ6RJNHLAFG6YMGL5QcZm6UTEnn2CJw0U8AAUvs9LIDNyaXzEh3unX2waaE3FHt7HUaYYF%2FIV39Vm90cMjbW7dMCgtChvvDPcU3jrEw7uRfTzmR5%2BR8C%2FSeMekCeauVWKOmZ%2BCCeSfg4piPDXIeIMm9rbXipj3XxMI%2BrxckGOqUBkOp%2Bf70LbD%2Bmc5m8GLX5C868u4cytOB4zNxn87%2BEnJt0oRiHiaFb6bpqvFip2AGOOBKqeyoC4uGIIUVTCmR%2FFscUqoUeZz7%2BHFW8mDbq5dzbTzNOV%2FMcweheL7%2BdqeH5z2RY%2FcEH44XEAtxgHOHSPiUGyEjPK3iRfZB9%2B5%2B7A7zyuH6Y8SK%2FkSZIgXoF4y6rLcHCQdQaTiHpvMaFYblt4kAy2hoN&X-Amz-Signature=f421d3667bb82b389ff99d61ecca12d6c11389d666bb3839dfb08110dbfaa460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJPVQCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFjV6dAUVBGG33Dy0wZpPVg2xy2QvCcLVweLzKEKU9OiAiEA9SVFXkvDVC8grR0y4JqInhuk8yKyJ8fBeG8w4V5BiYQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGU8z4fxNAhLn9%2BwJSrcA%2B%2FxDwg2lw4keJ%2Bll9Y1Bvn%2BrnleHj9Uf%2BKvse3HPrq7tpGqynqgEuxqxr0duSWIGkb%2FtCQfXykl0YyOCCk6gxqDZq9AJnX0eCFiOHsQdGP%2F2HHixIRo%2FVux2wGDT6NbqVpv44r%2BlO7UEjh7lGltNM0X9G%2BeP0usuwqTlbZ7zK1SWOtu2XDOl9XXTh8aplgV6r3Uh7Z%2BC9HwUWgn%2FM3zLtC6JAWWMkvKAimHi1Vg6eND6Iu4ttefhq4zWsJ76kPreAMr6xU7bq%2Fg4dhNSuQdFbTkA2B%2B2RAHtzSkT43NpuhNbnG0Chaw8DpC8He%2FB6qmH4wdkK6vOAFXYmqWjhwD6GwShev8wTXol%2FbZRHAT0JIUTPCCo6ntb%2BKQ%2Bd4OWjjLWbeJTL%2BvQ10Nb5LHivszjpgx5Fs5MUCcBZxQ142480DKQg8WIGfTaxKVM8iPgEQrP1YCgG0mrdTi2xSPhnMvRWBRRzBHcQ6RJNHLAFG6YMGL5QcZm6UTEnn2CJw0U8AAUvs9LIDNyaXzEh3unX2waaE3FHt7HUaYYF%2FIV39Vm90cMjbW7dMCgtChvvDPcU3jrEw7uRfTzmR5%2BR8C%2FSeMekCeauVWKOmZ%2BCCeSfg4piPDXIeIMm9rbXipj3XxMI%2BrxckGOqUBkOp%2Bf70LbD%2Bmc5m8GLX5C868u4cytOB4zNxn87%2BEnJt0oRiHiaFb6bpqvFip2AGOOBKqeyoC4uGIIUVTCmR%2FFscUqoUeZz7%2BHFW8mDbq5dzbTzNOV%2FMcweheL7%2BdqeH5z2RY%2FcEH44XEAtxgHOHSPiUGyEjPK3iRfZB9%2B5%2B7A7zyuH6Y8SK%2FkSZIgXoF4y6rLcHCQdQaTiHpvMaFYblt4kAy2hoN&X-Amz-Signature=699eacf13b805992a1f1e33bbc4d940e35807a6b359db6dc435aeab07e67daa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
