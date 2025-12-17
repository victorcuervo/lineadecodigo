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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5532I3R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvZgLvKVjXyQVyEpGIjKFqXuMwNfHgnA1XDDCNkvdbwAIhALpHRxy9IECw0vae7XPziRY9F%2B%2Bt6VKtTy0GnOn6zXhmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW3VpkdOPOtSNoZmgq3AMDa46mIwdAVGU2ye5ff8qOPQQ17wfHg2cX8shvam8vu6ScQS4%2B0dM%2Bl3PTTrLPjujflVCqYOL3gv0%2FJ1sDLAssO43dMPwVrKFFnvD0OAe%2FZJ3LYlTncDMMkpVxcyNAWa4EJWwtZKdZdxjyD63nZ2cLcjmmH5akp78Zuvm93Pun6C0XdSAiGptvhi4nOC9jG9MpSgEkeOMUpB438OuGW2QIiIWQVxru6LlSclOo4910tBTq6u6sjynN%2BXU0qbLC9rzcWPjlyoGav35Zh5nIGTjhriTbupt1jELnzvaK%2FETbYO3VzxaLp8SnrKsDqY6o1kaKH9e%2FbES8mRb6li%2BkRfnVG3oBVL9I4d0bbeOuxzb%2F5bz7rQk9b%2FPs3dm9KLwRrpts0K2lXuCiN6VEfX%2Fu9s5uKPyatwJPfHoNsj8%2BRpChwds1zAGGRrPMl4Xr9yxv6zbF0TeE3J1EbkI4WpCYRmK6s89RzPtBU1FWwPNDi8bMz7ki0xXdVnuI0RjJUMq0GqvEP5bPna%2ByOSzAOMu%2BB7zg6UJhtL5WPdPTNfWw08Ms7%2F29fGX0EEakIFcTFBxr3sS%2BykeW%2FAAceQ4aIyheKQSgAAvd4g121a6wdSIMZ%2FEB%2BsYsEXcsDMA0P04bwzDYiozKBjqkAcR7QRSnDotorhN0t3hor7P%2Fc3Y2BOFK%2FuStD1BO7FNcilBaFhzFLnafe%2BSS7hqtx3700jswmRDRMb1c8IhmmgSBuSxxQ7BjGwxpmEqrbgP0qKgvI4%2Bh97TgLMC62HC90V8lA4%2FL5fPWzH8AesIKZPZu1Vl7vY2MLGpTN6fUUlFmxi7HD5DpzcjPdRRynDZmontBVUOEtqnhnoATPR0mFkV2xthc&X-Amz-Signature=61f39d92399307a42c50e7e209113f3b418be5d855b1db586fb85af77ad90c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5532I3R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvZgLvKVjXyQVyEpGIjKFqXuMwNfHgnA1XDDCNkvdbwAIhALpHRxy9IECw0vae7XPziRY9F%2B%2Bt6VKtTy0GnOn6zXhmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW3VpkdOPOtSNoZmgq3AMDa46mIwdAVGU2ye5ff8qOPQQ17wfHg2cX8shvam8vu6ScQS4%2B0dM%2Bl3PTTrLPjujflVCqYOL3gv0%2FJ1sDLAssO43dMPwVrKFFnvD0OAe%2FZJ3LYlTncDMMkpVxcyNAWa4EJWwtZKdZdxjyD63nZ2cLcjmmH5akp78Zuvm93Pun6C0XdSAiGptvhi4nOC9jG9MpSgEkeOMUpB438OuGW2QIiIWQVxru6LlSclOo4910tBTq6u6sjynN%2BXU0qbLC9rzcWPjlyoGav35Zh5nIGTjhriTbupt1jELnzvaK%2FETbYO3VzxaLp8SnrKsDqY6o1kaKH9e%2FbES8mRb6li%2BkRfnVG3oBVL9I4d0bbeOuxzb%2F5bz7rQk9b%2FPs3dm9KLwRrpts0K2lXuCiN6VEfX%2Fu9s5uKPyatwJPfHoNsj8%2BRpChwds1zAGGRrPMl4Xr9yxv6zbF0TeE3J1EbkI4WpCYRmK6s89RzPtBU1FWwPNDi8bMz7ki0xXdVnuI0RjJUMq0GqvEP5bPna%2ByOSzAOMu%2BB7zg6UJhtL5WPdPTNfWw08Ms7%2F29fGX0EEakIFcTFBxr3sS%2BykeW%2FAAceQ4aIyheKQSgAAvd4g121a6wdSIMZ%2FEB%2BsYsEXcsDMA0P04bwzDYiozKBjqkAcR7QRSnDotorhN0t3hor7P%2Fc3Y2BOFK%2FuStD1BO7FNcilBaFhzFLnafe%2BSS7hqtx3700jswmRDRMb1c8IhmmgSBuSxxQ7BjGwxpmEqrbgP0qKgvI4%2Bh97TgLMC62HC90V8lA4%2FL5fPWzH8AesIKZPZu1Vl7vY2MLGpTN6fUUlFmxi7HD5DpzcjPdRRynDZmontBVUOEtqnhnoATPR0mFkV2xthc&X-Amz-Signature=8e2c99ab5ab9ef49cf4533c31623a7ff3312495b2852e2746a1f974c59bbccca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
