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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJCVHPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtjYp0yM17Ni9z1mLBnStAR3ba3a8R%2FIWIi6NSPZhdZwIgSCY3uAKMSQD3uuE71eFxs9S4FfOCVXg02x2Mlrmzctwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLq2Ep8UIiwz1392yCrcA35dFIi3oA3X3cFdGY9HJl%2FwBNLLMxzO00ZqIfqFaFwqicq6BNwxozjCYI4qa2GJ2OEXxJKwEZGPXkPJAJ9cQa%2F9DxZ05xDRRwWxiisD24ciyadfuks6E63SFjhQNRszueTMWJ2TpqBsiQBBMbenaOGjVUGWdmREmYjF4O0%2FwQDYquX8xp40FusZygUBPBIK5eCV%2Fw51LyHaIpmUmJruvEeUMjOHkVEs9fY7zDagylJm0a9UaYi0l4DWBarV%2BGbGAb8jMW02nW2eU5D9FJhZcBdlKjLf4jDKRkTJnRcPSjh%2FEFWWQoI2HoN%2FnZq7T1yGrjg%2F4zYb3vfU%2BScstvWD9%2B%2BAPYW7lAsmGZrYF0prtRSkJaxB6%2BaI7q94JUaC4Z4Ab7%2BRyevQt0Ne7J0pr2xOkZ3%2BO7vao7YQnWOvPV7DZUV7Ln9wNTh7rhN771ursoPxq9JAP%2FcAR8HgG2NpFnXcd00X6WK2wsMc5xfaJLbzt2IE8tsf%2B0be41NuVMKWsPr4V8CqEC%2FRR1KNeH2xtzi6dZP0uOGle%2B7KRcCSMWbjYXJt0wCUGPQ%2FVwZCQH%2BDBwkA2uahwzXMxzEdQIKSZIWseLQEl59x2BKWPudyRNmwNfCIa9iI0Pbg882mtx0lMOyOisoGOqUB2rEGHSMVtFenRX6E2hTwfS2XBjosafXYUA66OTDCNHe7eA7fikfVZdcuf2wBuU6OgQwvprj4j9oAj7ilINSxZNx1ieWV2%2FPoSu2NaXvnIf%2BSMO5rqDL8J1Wt7r3iHtFhlEPUg%2BuGTW1Fed9kFDeVk%2FWpA2fY6LEzw7zF%2Bz8rs3PtOHLvCv17lQXoheivafDOQic6Kevvr2SUZ4DoiqxlCXH05BcV&X-Amz-Signature=1952007b1befdc52256d5e03e90375f7a6a8da84c136f2d7e9f203bb7fae4191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJCVHPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtjYp0yM17Ni9z1mLBnStAR3ba3a8R%2FIWIi6NSPZhdZwIgSCY3uAKMSQD3uuE71eFxs9S4FfOCVXg02x2Mlrmzctwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLq2Ep8UIiwz1392yCrcA35dFIi3oA3X3cFdGY9HJl%2FwBNLLMxzO00ZqIfqFaFwqicq6BNwxozjCYI4qa2GJ2OEXxJKwEZGPXkPJAJ9cQa%2F9DxZ05xDRRwWxiisD24ciyadfuks6E63SFjhQNRszueTMWJ2TpqBsiQBBMbenaOGjVUGWdmREmYjF4O0%2FwQDYquX8xp40FusZygUBPBIK5eCV%2Fw51LyHaIpmUmJruvEeUMjOHkVEs9fY7zDagylJm0a9UaYi0l4DWBarV%2BGbGAb8jMW02nW2eU5D9FJhZcBdlKjLf4jDKRkTJnRcPSjh%2FEFWWQoI2HoN%2FnZq7T1yGrjg%2F4zYb3vfU%2BScstvWD9%2B%2BAPYW7lAsmGZrYF0prtRSkJaxB6%2BaI7q94JUaC4Z4Ab7%2BRyevQt0Ne7J0pr2xOkZ3%2BO7vao7YQnWOvPV7DZUV7Ln9wNTh7rhN771ursoPxq9JAP%2FcAR8HgG2NpFnXcd00X6WK2wsMc5xfaJLbzt2IE8tsf%2B0be41NuVMKWsPr4V8CqEC%2FRR1KNeH2xtzi6dZP0uOGle%2B7KRcCSMWbjYXJt0wCUGPQ%2FVwZCQH%2BDBwkA2uahwzXMxzEdQIKSZIWseLQEl59x2BKWPudyRNmwNfCIa9iI0Pbg882mtx0lMOyOisoGOqUB2rEGHSMVtFenRX6E2hTwfS2XBjosafXYUA66OTDCNHe7eA7fikfVZdcuf2wBuU6OgQwvprj4j9oAj7ilINSxZNx1ieWV2%2FPoSu2NaXvnIf%2BSMO5rqDL8J1Wt7r3iHtFhlEPUg%2BuGTW1Fed9kFDeVk%2FWpA2fY6LEzw7zF%2Bz8rs3PtOHLvCv17lQXoheivafDOQic6Kevvr2SUZ4DoiqxlCXH05BcV&X-Amz-Signature=905e77ec38c4fb0b2fe6641485d6bedfaedab1968b30a08ab29caa75846bdd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
