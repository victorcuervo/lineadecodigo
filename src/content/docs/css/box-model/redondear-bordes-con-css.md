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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZAGA7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIB%2BF9ra%2BU3gnoHZtp7QlrBLN8Y7xz7fxsWOV5fmUqEwIgCCab%2BuknBqgmCB%2FKVvJBp6%2FcVeJEjF2Qld1p4qU5Zjkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNwK3c5VERo6xPrD6SrcA3a2QT4THc1s6PW%2FywjALuSRnEUz8xL5620i4zig710x3EfLO6%2FOTvqmtH%2BYM4wI3D8bXRZHNZkxwT4eENY%2BioE4degfYCBNU6w2Jic2fo7aF80W4bvXWnalEPV8crslT5sfUOKfXRBz6kojibEhCE2KLSR6mkAgLWnvoI3wpD%2B34tIqioAxlu2Yuz%2FRX0caCj5EQvwYA%2BaranDY3a3EkmxsvShF6AlxF9xEk25AZBjrtWnqUjXBwrDXEKoVa14Gg8zd%2BYqZf4ovBbLH5uT0xLKyrBRvUQiBHUvku%2FwrRrKUs7GKjbpC682nOOdcgdfpkZIWVw%2BQ2luPPuPhuTNq0UXrfIYSSAFjIqblPifRBdMr4Ve5rgn1v%2B38qfDITH4%2FG726xOWQ%2F4%2BKPmTu7cQds4KN9nARK3mqHIPv7caJepCZMoUSNcuuHMYminD9s1SrJItBL2YEGB10%2BJjN82G4F3ZIgLk4at6v86AOC5KgPf5AvVbOyBOEjOGY5L13G0Ldr%2FgpBmkhmAY1qvnCAry4a61LLnrpOXH1lq54cRbR1cWxCfiGPkSGtzxo%2Flor%2BcQMOp6JlEOJzvudT1tSdOFutQ%2FWVtILbeQPlFICkw%2BXdZ9icfz%2FTNaSIILQbrTbMKDjisoGOqUB%2B0Bo4OvV46KHNP6Tb16i8zekbTVr3jml9bVTkm6lxnQjwQ%2FSpAgAppNxe%2BMZUDQmU7LOPj8GT7DZCDUeynDj4XIe3aSK%2BhOuxOgr1lwElSGonF1%2B9TgkZYoBg%2F9VRdKgxXz3EE7PuAm%2Bo59O2XtEo72D2h24q9%2FcAcwtxEh5nPp7HrSMiAyGM1i2CnukPxCGFjVZHIe0RQ7jh0PBPIy%2FYcwQDLXH&X-Amz-Signature=b3ab966adffc7761b55dcfc5831372e946f6804f5d4f4c16c5ffccab26e31b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZAGA7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIB%2BF9ra%2BU3gnoHZtp7QlrBLN8Y7xz7fxsWOV5fmUqEwIgCCab%2BuknBqgmCB%2FKVvJBp6%2FcVeJEjF2Qld1p4qU5Zjkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNwK3c5VERo6xPrD6SrcA3a2QT4THc1s6PW%2FywjALuSRnEUz8xL5620i4zig710x3EfLO6%2FOTvqmtH%2BYM4wI3D8bXRZHNZkxwT4eENY%2BioE4degfYCBNU6w2Jic2fo7aF80W4bvXWnalEPV8crslT5sfUOKfXRBz6kojibEhCE2KLSR6mkAgLWnvoI3wpD%2B34tIqioAxlu2Yuz%2FRX0caCj5EQvwYA%2BaranDY3a3EkmxsvShF6AlxF9xEk25AZBjrtWnqUjXBwrDXEKoVa14Gg8zd%2BYqZf4ovBbLH5uT0xLKyrBRvUQiBHUvku%2FwrRrKUs7GKjbpC682nOOdcgdfpkZIWVw%2BQ2luPPuPhuTNq0UXrfIYSSAFjIqblPifRBdMr4Ve5rgn1v%2B38qfDITH4%2FG726xOWQ%2F4%2BKPmTu7cQds4KN9nARK3mqHIPv7caJepCZMoUSNcuuHMYminD9s1SrJItBL2YEGB10%2BJjN82G4F3ZIgLk4at6v86AOC5KgPf5AvVbOyBOEjOGY5L13G0Ldr%2FgpBmkhmAY1qvnCAry4a61LLnrpOXH1lq54cRbR1cWxCfiGPkSGtzxo%2Flor%2BcQMOp6JlEOJzvudT1tSdOFutQ%2FWVtILbeQPlFICkw%2BXdZ9icfz%2FTNaSIILQbrTbMKDjisoGOqUB%2B0Bo4OvV46KHNP6Tb16i8zekbTVr3jml9bVTkm6lxnQjwQ%2FSpAgAppNxe%2BMZUDQmU7LOPj8GT7DZCDUeynDj4XIe3aSK%2BhOuxOgr1lwElSGonF1%2B9TgkZYoBg%2F9VRdKgxXz3EE7PuAm%2Bo59O2XtEo72D2h24q9%2FcAcwtxEh5nPp7HrSMiAyGM1i2CnukPxCGFjVZHIe0RQ7jh0PBPIy%2FYcwQDLXH&X-Amz-Signature=c8c39e26814fa3b273be5843078c34f09545c1fbd063e53064a943fae6c01a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
