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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIMXPAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGN6vx1m8D913IOUZaJWEACZCBU6ytuBLww3HDyLkCdAiAo0vCU7%2FifkYFyLDFciBKnZFnEMGADqh4Tu8QMTi2Pbir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDFn9p86ZHrBnx4DVKtwDmMvO15F6pEyg87aTbWNXFYTjWK%2BFqEWAfFAClfZ%2BXKLo2RD4yY4LMspD5IBSN40bIl8RvHHmfXZ2YUMqzJ59%2FIpZz1Nv4%2FXde7EuiWJ61tBGiEGiIsKnPust%2FhjfJcoY6v%2Bo9LT%2BcymeYck9SJkAz0CKnMA3bvdlhxyJHNV68uTmSG07YhrxqYqzxun9c7T8edyoVp4QBfgxcWBinZabMu235vzTALQwYMgevlxLLkvxGd3uTa%2BOqmNVqjs6BOZBKBjrQOY6822P2VDbHkBMyOmDS0iQTpHjZp08cHBFONmdCNAongsdVJvl5FYY4zEJ2bOr4xrfobCnEci7LuqxgEd1%2BoEw5N64xM%2Fw7ssYSgu9krkc8OdxRmPjx28TfZITDSDT5L23KAjvMkI1oJHzPTLVBp5IqZzxwYhfgWfClYV56DoupaKUT%2B3X7WXSq7hwqgeRiwNUaJucOfTkkIkby3qutQyAheN3QXko2pAta55xdzfZngT8kji5YD14nauaNdHgSeGhs0C3THMLzOLND6vnW%2BUvhiQiPmuNXRGctpK%2FKuoDBaG1aQHCXmlc8Etf%2BsIcMvzDONX%2FOajG0OnIytpKHguEQ2Y8gu4F6PyvB5DuNvD9RlifAgcmeXEwtJeIygY6pgEv3Tch2X2rlLE%2F4v8C08sp9GIfEclb4vOmPTqQYNPDG%2FTdKYqXfrTDLBVCaEGZIE9oHbee9cYhKe%2FMPC8dUEpnN78%2F55xKSy6lpB%2B6u5BspHIkW3pXxeDJQd5ca7%2FhLpgRV4L4UGVCA%2Bgz5rTqdmhE3C8OBbLUHkGWglRq%2BrY1ZAdFhp7L3wt8yTuK1j0AbconUy0ilS4QJ5dclZ9zd03XofDi5noL&X-Amz-Signature=9a670e123ca4f4bc2ac11ee1c4e8bdeaabcc982afed309d93f7b7e5e826406eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIMXPAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGN6vx1m8D913IOUZaJWEACZCBU6ytuBLww3HDyLkCdAiAo0vCU7%2FifkYFyLDFciBKnZFnEMGADqh4Tu8QMTi2Pbir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDFn9p86ZHrBnx4DVKtwDmMvO15F6pEyg87aTbWNXFYTjWK%2BFqEWAfFAClfZ%2BXKLo2RD4yY4LMspD5IBSN40bIl8RvHHmfXZ2YUMqzJ59%2FIpZz1Nv4%2FXde7EuiWJ61tBGiEGiIsKnPust%2FhjfJcoY6v%2Bo9LT%2BcymeYck9SJkAz0CKnMA3bvdlhxyJHNV68uTmSG07YhrxqYqzxun9c7T8edyoVp4QBfgxcWBinZabMu235vzTALQwYMgevlxLLkvxGd3uTa%2BOqmNVqjs6BOZBKBjrQOY6822P2VDbHkBMyOmDS0iQTpHjZp08cHBFONmdCNAongsdVJvl5FYY4zEJ2bOr4xrfobCnEci7LuqxgEd1%2BoEw5N64xM%2Fw7ssYSgu9krkc8OdxRmPjx28TfZITDSDT5L23KAjvMkI1oJHzPTLVBp5IqZzxwYhfgWfClYV56DoupaKUT%2B3X7WXSq7hwqgeRiwNUaJucOfTkkIkby3qutQyAheN3QXko2pAta55xdzfZngT8kji5YD14nauaNdHgSeGhs0C3THMLzOLND6vnW%2BUvhiQiPmuNXRGctpK%2FKuoDBaG1aQHCXmlc8Etf%2BsIcMvzDONX%2FOajG0OnIytpKHguEQ2Y8gu4F6PyvB5DuNvD9RlifAgcmeXEwtJeIygY6pgEv3Tch2X2rlLE%2F4v8C08sp9GIfEclb4vOmPTqQYNPDG%2FTdKYqXfrTDLBVCaEGZIE9oHbee9cYhKe%2FMPC8dUEpnN78%2F55xKSy6lpB%2B6u5BspHIkW3pXxeDJQd5ca7%2FhLpgRV4L4UGVCA%2Bgz5rTqdmhE3C8OBbLUHkGWglRq%2BrY1ZAdFhp7L3wt8yTuK1j0AbconUy0ilS4QJ5dclZ9zd03XofDi5noL&X-Amz-Signature=460fb9898fb7cec6cd1cf390b30a3ef7f42a28b869a3ff625d470634a9021c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
