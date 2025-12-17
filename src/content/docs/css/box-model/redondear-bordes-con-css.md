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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOUV7RE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxI8e5yV0yw89mmnYLcYDs0lLbaNeyi49PjTQOCCLd9AiEAsfIbiZ1htb%2FRCuRdfZF3yDSu0ofn607ri%2FwulZsJjAQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeyOEi0xlNPvmREsircAxIYbC2choZv7kOgljz%2F6IVAGhuT9%2BQkuu%2FixDSbAm0LUzeT3ZDoHkRzotEpt0xX3OyQ56H7qQ4Jdcgw%2Fe%2B95QL6Df0jMaQAQmd4BSZmA4ElYWX78xhYlYTbXr5y3oLKC8RgWCsb8joGp46GvL94vZSQuqOZzMOWQr1uZ37iAgS76KdLJc3uz13ydpY2Xs%2BY9HDpQdX77riRHxgVb4FOQtRCEyRuAw9e9qSvvBK4BgONfKEcVkJwDhT%2Fg1HUeTem9T7woRQG6gj3pXOw0Zv7WbkjE60%2Butg%2BghaJev%2BDXtK6k%2BuV0kt6HKhFPdh2HtP8ss3TtubZJ%2FXLbYFPFvGt1DqoXt4nizK6hSyJIN8G%2FtrEP%2BnIpvCJPXCObYFNyeAMDRQHPXj1QBl8P4lWke5QCWRkV3mGPVdStsdW2GjOe9HPK5vjpm%2FEE6t85NilR7KQmGHU%2Fxg4BtcB7bpPSaWlIPYvxeKnj7B6%2FKUyc8YHLrN1lSGJF4MJ%2B56sG37XAi5mATqb4nrqUl2%2BRNRhT33p%2FnI2opG%2BQ28yMi%2BnvcreLVoK9%2B6dmVHLCAdau%2BCTGGWYvSRfJplUF0TE%2FJL3%2BKvxLpN6cVhH1NkSfq70IAUTb5dVdUPRBVTUotkGcueOMKeBi8oGOqUBed2nCkzoYytg0LVYobAr77rmjjZXCwwRgXvGh%2FzKeN1WOAtoO%2FZi1gqS221aL%2BMfAEp364LGQp5erdABdOEF1p%2FebnXcTeATwOi7AVeufSVT4qK8a937n9dgQJQox%2BtCEuDtWy45wL%2BKt1xXVngdonlyCYKMQPtXk7rz83MnMhjXcDqG%2BdfyOSuv%2FzXOHl6926vvu6CoqehANTgXRTrXFJsfGAV7&X-Amz-Signature=4d9fc978cbbb06f707c3aa09e0036c109b3cc63ab20f20560f50ad7fa6e91c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOUV7RE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxI8e5yV0yw89mmnYLcYDs0lLbaNeyi49PjTQOCCLd9AiEAsfIbiZ1htb%2FRCuRdfZF3yDSu0ofn607ri%2FwulZsJjAQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeyOEi0xlNPvmREsircAxIYbC2choZv7kOgljz%2F6IVAGhuT9%2BQkuu%2FixDSbAm0LUzeT3ZDoHkRzotEpt0xX3OyQ56H7qQ4Jdcgw%2Fe%2B95QL6Df0jMaQAQmd4BSZmA4ElYWX78xhYlYTbXr5y3oLKC8RgWCsb8joGp46GvL94vZSQuqOZzMOWQr1uZ37iAgS76KdLJc3uz13ydpY2Xs%2BY9HDpQdX77riRHxgVb4FOQtRCEyRuAw9e9qSvvBK4BgONfKEcVkJwDhT%2Fg1HUeTem9T7woRQG6gj3pXOw0Zv7WbkjE60%2Butg%2BghaJev%2BDXtK6k%2BuV0kt6HKhFPdh2HtP8ss3TtubZJ%2FXLbYFPFvGt1DqoXt4nizK6hSyJIN8G%2FtrEP%2BnIpvCJPXCObYFNyeAMDRQHPXj1QBl8P4lWke5QCWRkV3mGPVdStsdW2GjOe9HPK5vjpm%2FEE6t85NilR7KQmGHU%2Fxg4BtcB7bpPSaWlIPYvxeKnj7B6%2FKUyc8YHLrN1lSGJF4MJ%2B56sG37XAi5mATqb4nrqUl2%2BRNRhT33p%2FnI2opG%2BQ28yMi%2BnvcreLVoK9%2B6dmVHLCAdau%2BCTGGWYvSRfJplUF0TE%2FJL3%2BKvxLpN6cVhH1NkSfq70IAUTb5dVdUPRBVTUotkGcueOMKeBi8oGOqUBed2nCkzoYytg0LVYobAr77rmjjZXCwwRgXvGh%2FzKeN1WOAtoO%2FZi1gqS221aL%2BMfAEp364LGQp5erdABdOEF1p%2FebnXcTeATwOi7AVeufSVT4qK8a937n9dgQJQox%2BtCEuDtWy45wL%2BKt1xXVngdonlyCYKMQPtXk7rz83MnMhjXcDqG%2BdfyOSuv%2FzXOHl6926vvu6CoqehANTgXRTrXFJsfGAV7&X-Amz-Signature=559dc483df4a5a36be072744369ee36f9a4e4227b7a940401e738b19fdb782df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
