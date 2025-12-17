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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44HJCKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQzsd%2BgudSMcIsyldzcgyeb23V%2Bo5NelEs45kxaemwgIhAO7P%2FP4gM6Ee6pwOBNxKErGmkmp9hF55lePuJMIAUHQaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuBjo4dzHw3dX4Kgcq3AOZ6YqTW5zb4VjlPnksmCnyAe0%2Bf1caheyMtV1A7eG6qkh7h1KM7ZQPjNGi2sBATD03ylupf6%2BaaazAY3dsL6mHqE4dAYO8p6VjRp4kuNucoDYkf29Tb9SUmoGuSvyr6YFE0w6z0QiJhZLrbhKfPA%2FrUFCAX79K%2BnGcgO8VEnmSXcjQCUodEJqOc9Ju%2FXc2mlqeyy1AR5rEVtf%2FoePZAkDbSolUrbTKG9kSHKZn%2BNprGkjM0DWywikgSAndN1osQ9kzhcRTDpxZP1hcVNHBtDK%2F1ZAaYshAB%2BOUcXrW0VY8F7vLpKyuGvdn8RXAA6j5iDAtkp2hE4yy3yM%2FXHV036fLV%2Fh5CH6Nt8jDhLL4i1Hyuzw9a9QyzSksyoOi7kXmHy7Vd6QHldiMebyFE6cYSjZDQVe0P5M6vOCngJxH4bjtnqWjar%2FAoFc5jSHM8I1iYzVvA7TGRBCdmrPjUHWqSmn2Tirmudxtfb993NeYzEs4luIBhrUCQC1PIE3LjIY1jWnPGRZ1n9beALKvZqqiLzvWo2cPBfN6KlZBTrCrQBQMKUInkcr9cQLNMvEaAt9v1jMJpn%2BSFB2zIVJIeJ0xYr6RY2wokLvvGODlg3P%2BijV2T%2FYD79mxpefpzuOBRTD%2BnovKBjqkAYv9p6Vx2Sjlr0XgnfN7IiB2e61DF07%2Fr%2FY3npv8o9AGawPKN7ETpnDw2rk1xbexRU%2BaG6Y%2BUVUo5G7vY5k5OopMC1uxQ%2BHqNp2ZjlpevcnA8%2BAromTZMebC31etAv6EZR%2BNKFYXuhBXsrUIE0F7PtA%2BiFs8PcJ%2F7zzPgna0mM6lGlHXHRPbKHF5mYC0fsR9jGr7K7yWR5ccQA%2FgGXGjR3Uur1sn&X-Amz-Signature=084cc78f11abaf313817bf097f29177a0dea4bf30c5b38fede958fa9bfdc7b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44HJCKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQzsd%2BgudSMcIsyldzcgyeb23V%2Bo5NelEs45kxaemwgIhAO7P%2FP4gM6Ee6pwOBNxKErGmkmp9hF55lePuJMIAUHQaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuBjo4dzHw3dX4Kgcq3AOZ6YqTW5zb4VjlPnksmCnyAe0%2Bf1caheyMtV1A7eG6qkh7h1KM7ZQPjNGi2sBATD03ylupf6%2BaaazAY3dsL6mHqE4dAYO8p6VjRp4kuNucoDYkf29Tb9SUmoGuSvyr6YFE0w6z0QiJhZLrbhKfPA%2FrUFCAX79K%2BnGcgO8VEnmSXcjQCUodEJqOc9Ju%2FXc2mlqeyy1AR5rEVtf%2FoePZAkDbSolUrbTKG9kSHKZn%2BNprGkjM0DWywikgSAndN1osQ9kzhcRTDpxZP1hcVNHBtDK%2F1ZAaYshAB%2BOUcXrW0VY8F7vLpKyuGvdn8RXAA6j5iDAtkp2hE4yy3yM%2FXHV036fLV%2Fh5CH6Nt8jDhLL4i1Hyuzw9a9QyzSksyoOi7kXmHy7Vd6QHldiMebyFE6cYSjZDQVe0P5M6vOCngJxH4bjtnqWjar%2FAoFc5jSHM8I1iYzVvA7TGRBCdmrPjUHWqSmn2Tirmudxtfb993NeYzEs4luIBhrUCQC1PIE3LjIY1jWnPGRZ1n9beALKvZqqiLzvWo2cPBfN6KlZBTrCrQBQMKUInkcr9cQLNMvEaAt9v1jMJpn%2BSFB2zIVJIeJ0xYr6RY2wokLvvGODlg3P%2BijV2T%2FYD79mxpefpzuOBRTD%2BnovKBjqkAYv9p6Vx2Sjlr0XgnfN7IiB2e61DF07%2Fr%2FY3npv8o9AGawPKN7ETpnDw2rk1xbexRU%2BaG6Y%2BUVUo5G7vY5k5OopMC1uxQ%2BHqNp2ZjlpevcnA8%2BAromTZMebC31etAv6EZR%2BNKFYXuhBXsrUIE0F7PtA%2BiFs8PcJ%2F7zzPgna0mM6lGlHXHRPbKHF5mYC0fsR9jGr7K7yWR5ccQA%2FgGXGjR3Uur1sn&X-Amz-Signature=1f71bb25f84a6882c7def38a9a7d10ddf754865e8b902a3625acbebc5c2ec527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
