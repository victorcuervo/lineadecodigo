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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUX3A63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICahrNKjXxhLdKoJ1Q2orMjN%2BmTyq1xZyoXMu2UmSpkyAiApMbehxJbFzRlsJuDNrV9EdmZpCaPmFZfR4HbBoxUVEir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmepIQX49qaDWVj6QKtwDocGQSBbpqqoLUiP6iMsU8m1mxEFnLtov7I3umwRSuyVDSXaoItiAHY%2BUZJCQ4RPYy1SCeGJpLeIFrAjFDtxk16NpcFmVzPHilUQbqnRZUI%2B6rrGE%2B%2FGsAKkw%2Fu2C94CMAwvwYTkU5hqQh3oDYBMfc2IhcJRkVCoYMEDJOGDiNGVr6k4gQeFfTPYr8idtBSNWi7N2XY863Vu%2BX57jLOIKiZI2fAYn2QRGxwHJj7nvnfc1Krc5a7YPcQFG5VBKxqrOue2x4MXNZu9xIGSpqkwZ%2FedifUv1b95PHEcA2yj0atpVOU7wHizyZdq9HFB3lOaBypYn9lr%2FcYiZr5DJvcdrOuTJ9uf49XWpsMS9sOoIldWV7DqY3eUiUWNDCVcqmDYBCHvxQR5BgfEz3p6lL6D89ERET1602Jo7eylLkM2fzlc57JaRtApqtxISZciZ3WVeSSSjU%2BfAT6SRekpNLNk0a9aRwEzWqtqebs2S51j3X0On0alwcOLd2v3crzJI6csNr5nwM1AW%2Bt8NW5Us%2FroTxLiS2Wm67%2BgKDqlQs1n3obJuCQcVAkaQJ15UkXBwLTkIaasqyM3oBiaqe7rdlt2k8B%2FD8ncYzolM%2BcGnBqZE33F4J1iyr6PomwsBwzIw45iIygY6pgHJeUIAgFmpEsH0lSvw0fGZjME34iPMHVp3%2BDH0i3Iomz3M6qmsPGywMtsecYh1Jx3Fwy4VZ8AVtM1d%2BU6sqMQld1beuIOFUKn8MuXTGHZlRN4Ly%2FHKxdwZW1UWtyB7EX%2BDrzyvnLPF%2F9lGfPON0euHuOd5V%2Fe2mFhMoNY98ic6gLYuRm3tdrwGRTkA5qN1lb5eLkGFW4C1NJZXbNT0SKgG%2BVOLSNQ8&X-Amz-Signature=9aed8ea788e068a6d5a58bb1acc0778fe16b4c28557a6f97628e4d97f9b21472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUX3A63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICahrNKjXxhLdKoJ1Q2orMjN%2BmTyq1xZyoXMu2UmSpkyAiApMbehxJbFzRlsJuDNrV9EdmZpCaPmFZfR4HbBoxUVEir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmepIQX49qaDWVj6QKtwDocGQSBbpqqoLUiP6iMsU8m1mxEFnLtov7I3umwRSuyVDSXaoItiAHY%2BUZJCQ4RPYy1SCeGJpLeIFrAjFDtxk16NpcFmVzPHilUQbqnRZUI%2B6rrGE%2B%2FGsAKkw%2Fu2C94CMAwvwYTkU5hqQh3oDYBMfc2IhcJRkVCoYMEDJOGDiNGVr6k4gQeFfTPYr8idtBSNWi7N2XY863Vu%2BX57jLOIKiZI2fAYn2QRGxwHJj7nvnfc1Krc5a7YPcQFG5VBKxqrOue2x4MXNZu9xIGSpqkwZ%2FedifUv1b95PHEcA2yj0atpVOU7wHizyZdq9HFB3lOaBypYn9lr%2FcYiZr5DJvcdrOuTJ9uf49XWpsMS9sOoIldWV7DqY3eUiUWNDCVcqmDYBCHvxQR5BgfEz3p6lL6D89ERET1602Jo7eylLkM2fzlc57JaRtApqtxISZciZ3WVeSSSjU%2BfAT6SRekpNLNk0a9aRwEzWqtqebs2S51j3X0On0alwcOLd2v3crzJI6csNr5nwM1AW%2Bt8NW5Us%2FroTxLiS2Wm67%2BgKDqlQs1n3obJuCQcVAkaQJ15UkXBwLTkIaasqyM3oBiaqe7rdlt2k8B%2FD8ncYzolM%2BcGnBqZE33F4J1iyr6PomwsBwzIw45iIygY6pgHJeUIAgFmpEsH0lSvw0fGZjME34iPMHVp3%2BDH0i3Iomz3M6qmsPGywMtsecYh1Jx3Fwy4VZ8AVtM1d%2BU6sqMQld1beuIOFUKn8MuXTGHZlRN4Ly%2FHKxdwZW1UWtyB7EX%2BDrzyvnLPF%2F9lGfPON0euHuOd5V%2Fe2mFhMoNY98ic6gLYuRm3tdrwGRTkA5qN1lb5eLkGFW4C1NJZXbNT0SKgG%2BVOLSNQ8&X-Amz-Signature=abb380cd88de67ab4e45c8f663d63cc07aa127cedc9d306c0978a72d14cb0087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
