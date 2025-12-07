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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVV2NLWI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOK5RCkl%2FmASE5271S9ldP5tAuD3DouH1rX62F1EjwyAiEAoq4QghUPeAecUvAvRyjVHzvn%2FtBfecxUYPHcr%2F820voqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7WrY71jx9wTHomcircA0Y5KOXyujULOU03tuWTBM9n4WGwgriQdOW%2B11JWFeG%2BoLS8zpE8GP2CsI%2BOdz0jp4YIUCQOKs9ykTpYybDnfzQziHRarKP55P6YOQ%2Br9dQjBDDVJjDkGUQcTcRuHpJAyM1p3H%2BK%2BbgZOMzui37UVyBPLWSc3dbeJij338%2BhduifjBXybOiIJonVlneYp%2BSOXNQRlB88WmfQsd52TWEHFSUe5GMBatFb4QFQChfe5wVi%2BNiL08Sy1hYEU%2BJ5vDNhNvdmSdALI4Hvm%2FhZ9OceZjriyq00B3hyyQilSV1ywfgnZSusRepSVTQs7YtGcguKZNklpYWqVlRDOWCJ3Lt8yB%2BbCfA7%2F2qT3ea44klULCgZKovHBP6%2B4ThCEuPBo%2FIKxHP2V2ZxnYIaG36lVG9RhTXgYb94g5SAt8VGQ9SfejeL1khtPT84KlqxjBXRRcGXb%2FsQ79VEfTwmCCATvP6g80pjzWq7LVfKL3EFx1oAyXEeHcvk5Ainp5oUhLUfDOvqymD2xY9J%2Fv1vlEeBhQjE2gx4QSIGiDT7QNAqm25Et4rN4ezDlxVgTcqHVh0XSPI0MrewLG%2B2Ufp4JeeRso%2BsOgY8JzNhh0D73e3jEIKJ2ewU7O74fbFQVVs5rcCtMNia1ckGOqUBOjFYwh77R1qP9iS9cd4M0rW7OH5YZKci5IDmGJ89qjGHbLubjqY9TgYwMXkEpWEfX34WHUGT6sO1A8PSLw3LgmA2jyxeJqI74Mt3znaLIfxKg2PR9exFT9vgDJymWC9l%2FDXOngR6ptX622W2x0rizeOzWxOYlB3V6phvDmBN5wXe8bmu25hXxsBdix4ymNvx6PaoeVtm6R8pUNkUbMOSw4O25PMm&X-Amz-Signature=e422463d5f8fdc1d52dd7cf2f9aac125c0ccdd54f1c1e4cdde41220aa7aced6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVV2NLWI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOK5RCkl%2FmASE5271S9ldP5tAuD3DouH1rX62F1EjwyAiEAoq4QghUPeAecUvAvRyjVHzvn%2FtBfecxUYPHcr%2F820voqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7WrY71jx9wTHomcircA0Y5KOXyujULOU03tuWTBM9n4WGwgriQdOW%2B11JWFeG%2BoLS8zpE8GP2CsI%2BOdz0jp4YIUCQOKs9ykTpYybDnfzQziHRarKP55P6YOQ%2Br9dQjBDDVJjDkGUQcTcRuHpJAyM1p3H%2BK%2BbgZOMzui37UVyBPLWSc3dbeJij338%2BhduifjBXybOiIJonVlneYp%2BSOXNQRlB88WmfQsd52TWEHFSUe5GMBatFb4QFQChfe5wVi%2BNiL08Sy1hYEU%2BJ5vDNhNvdmSdALI4Hvm%2FhZ9OceZjriyq00B3hyyQilSV1ywfgnZSusRepSVTQs7YtGcguKZNklpYWqVlRDOWCJ3Lt8yB%2BbCfA7%2F2qT3ea44klULCgZKovHBP6%2B4ThCEuPBo%2FIKxHP2V2ZxnYIaG36lVG9RhTXgYb94g5SAt8VGQ9SfejeL1khtPT84KlqxjBXRRcGXb%2FsQ79VEfTwmCCATvP6g80pjzWq7LVfKL3EFx1oAyXEeHcvk5Ainp5oUhLUfDOvqymD2xY9J%2Fv1vlEeBhQjE2gx4QSIGiDT7QNAqm25Et4rN4ezDlxVgTcqHVh0XSPI0MrewLG%2B2Ufp4JeeRso%2BsOgY8JzNhh0D73e3jEIKJ2ewU7O74fbFQVVs5rcCtMNia1ckGOqUBOjFYwh77R1qP9iS9cd4M0rW7OH5YZKci5IDmGJ89qjGHbLubjqY9TgYwMXkEpWEfX34WHUGT6sO1A8PSLw3LgmA2jyxeJqI74Mt3znaLIfxKg2PR9exFT9vgDJymWC9l%2FDXOngR6ptX622W2x0rizeOzWxOYlB3V6phvDmBN5wXe8bmu25hXxsBdix4ymNvx6PaoeVtm6R8pUNkUbMOSw4O25PMm&X-Amz-Signature=c1c44f96d757fa14ef4dca959c24f5d19bc4978c843441276cfb787a743f8578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
