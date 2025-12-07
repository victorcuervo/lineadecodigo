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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIA37KCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY5P00nkaWWU4AdvhIvov4TM9DCEtRG5pOXWqx67GGCAiBDqTWjVnf53X9hiDFJMcEE0Pgi0NorjF%2FydMe21pKobyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BwdF%2Fbt25O2m%2FTaKtwD86gMTnc4gkZgEsS6LpLNUPG5SmpUorrelK0mYSdtel2VVzVurc0Uq%2Bf869xBNVYQDAdohRVQnYfIr5EXPnqL2n7KkF4pGz37%2F631Q2cq%2BotmJyt1FgYopPIbj3Uij7aZ2Psg3KL1OSoelBHnV1MCY346bgMwLITn7Yq%2BnMx3%2BJu5VRVkwtY3ksm51%2BCCIjk6vqSKqZG4OergDqiVIQaKenGGDtBWKvFDZ0cIvzFLoIs55ia0BMEfRzALqwEVTc148J1jZs94EE18neF%2FT6A73FEHL%2BIFlXHJGOTryIlAYIlciBd3tmXjf4yzG%2Bs%2B3xFMWf50aof2kala4AkLnG2HxaoOLq6Ofe0zGhMscYIOejTl%2BTJW6Qt8lst%2FW9sxeFnalAnAdGhUEqfutgWDjpva1H1MbbdRPKGyWrcxkQBStR5M0VNPgO6MnxKm7jC%2B8Sg1a5aQt5fO6a1mqMtkDUvToXBacM%2BWkbIM3SzpMIiTI2VyV1apDjgL594P2eEAotPKK4eDgAslsXjT0jTamUqZrGB1LpqykmJ8Zf8Xh7nAzJZbJ63IB6VWQJaaI0a0dRTZTIi5ASAx2gi2q5%2B%2BBbiqJdfv4%2BnMvWMNf%2FirK83z0LX6SHvJSDBLNJ2vHb0wlZrVyQY6pgGKQzqzz7UQ1lTS3xvTcDVoe5LG8UDUow6f5Xv8c9eVKz%2Fn9%2BrBIOMaitc2GcnEaCLZGEWaaKG1%2BY6aY1YLCuO2ou0qHiueyCqDQQIIKFCusUIQgSrm2OVuMUbwUr1iE%2FToVm5tct1R3FjcHzJDqXyT%2BguxwCnvQfG9kofWdnIHMGYeakdsb6RJ8lkAS%2BTQ%2Fx2gD5ZM%2B7KlmOkwZ6XskyvJWPBvYtiJ&X-Amz-Signature=246a5c78eb93e6e4e4948c4dd6797b3be86ee43b84eea17f8aca1de4a466b669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIA37KCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY5P00nkaWWU4AdvhIvov4TM9DCEtRG5pOXWqx67GGCAiBDqTWjVnf53X9hiDFJMcEE0Pgi0NorjF%2FydMe21pKobyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BwdF%2Fbt25O2m%2FTaKtwD86gMTnc4gkZgEsS6LpLNUPG5SmpUorrelK0mYSdtel2VVzVurc0Uq%2Bf869xBNVYQDAdohRVQnYfIr5EXPnqL2n7KkF4pGz37%2F631Q2cq%2BotmJyt1FgYopPIbj3Uij7aZ2Psg3KL1OSoelBHnV1MCY346bgMwLITn7Yq%2BnMx3%2BJu5VRVkwtY3ksm51%2BCCIjk6vqSKqZG4OergDqiVIQaKenGGDtBWKvFDZ0cIvzFLoIs55ia0BMEfRzALqwEVTc148J1jZs94EE18neF%2FT6A73FEHL%2BIFlXHJGOTryIlAYIlciBd3tmXjf4yzG%2Bs%2B3xFMWf50aof2kala4AkLnG2HxaoOLq6Ofe0zGhMscYIOejTl%2BTJW6Qt8lst%2FW9sxeFnalAnAdGhUEqfutgWDjpva1H1MbbdRPKGyWrcxkQBStR5M0VNPgO6MnxKm7jC%2B8Sg1a5aQt5fO6a1mqMtkDUvToXBacM%2BWkbIM3SzpMIiTI2VyV1apDjgL594P2eEAotPKK4eDgAslsXjT0jTamUqZrGB1LpqykmJ8Zf8Xh7nAzJZbJ63IB6VWQJaaI0a0dRTZTIi5ASAx2gi2q5%2B%2BBbiqJdfv4%2BnMvWMNf%2FirK83z0LX6SHvJSDBLNJ2vHb0wlZrVyQY6pgGKQzqzz7UQ1lTS3xvTcDVoe5LG8UDUow6f5Xv8c9eVKz%2Fn9%2BrBIOMaitc2GcnEaCLZGEWaaKG1%2BY6aY1YLCuO2ou0qHiueyCqDQQIIKFCusUIQgSrm2OVuMUbwUr1iE%2FToVm5tct1R3FjcHzJDqXyT%2BguxwCnvQfG9kofWdnIHMGYeakdsb6RJ8lkAS%2BTQ%2Fx2gD5ZM%2B7KlmOkwZ6XskyvJWPBvYtiJ&X-Amz-Signature=1f204080bbfad8b12c27e59d56603ccaed5946b4f7b1132708e88ec1e0722a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
