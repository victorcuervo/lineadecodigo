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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT7LFVG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sAUSNhJt%2FZSMWC9eCEHmt77tGh%2FRloJ9kUNixNugAQIhAKT%2BsrFOOprRdHEQ6Om03J5ZEiGjUyOgTH0Ot7nTH0IcKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqJjAGrDZyilA7VUq3ANFLc%2F%2F0B4iD3m3Gn976ouVMVwT8P2rjizOj3LYOr2550cZ4qDs3M5u0aq4SDpKgBD3iyHaOFo2tE23pl3G53aEJTEU4QbGeY7l3PPPBZasBHpr5PfsA8G%2BWrT4qxHz2ymdH%2Ba1UCm9BJdDRlacr%2F7OqgeHTKbaOBmNzwzTCw3mpI1yN58WztQZoQN2W%2F6pZI%2FQZ%2FZHouUJVC03Psa06kaqVV2dU0V53ih%2Bl187FvxysW7wcu9JkmkbfBX8fZBbPqaXUO3IZlfVrBbllcdQiZO4wEV0qtptNAiYmig7XoOQ7ZIyZTuO%2BNnBk2%2FbqapPkBbFJN8C7UKGWdnvprM%2Fzktgp2QwXMiAYZrQykK03jwqrwU3UMpwL%2BipFPLxqg%2BB6IR5B4TCbmFb%2BZPxVHq8DXc7JHDv6ybV8qodXDhz6e4D2hGcLGLqJBZS9Ic02XYpE1EHgbcGTequOFcpeceN7c8bVmxndQYPg98VwyS9TzPhykWtKnkflnaZ9QJmod6xKhoNUD4WMD7fAeaHZzy7VLZm01C5kznXPvgogmP6hGeh%2FcGdrU1wgGOwhbN%2FmVQHlg732qPrLONscUF8M2Np05c%2BJY6C22gkIx%2FHxzZbUQo3EgYqM1fucg75%2BZFhsjC2odjJBjqkAZZ2dEIulCTabNuBDSaqj0HXnMG5IH3HG2RFZOmmAZlswfjlrnsnvyJsPYFCip0MWcGDXI0JPjJPA7Y6HALuSosOtZSGdpFq2shcm%2FuHTBumsZ8caPwVZVXFNgEOGasC784%2FvhZswuOhgG2Ok9S7Yoc8jX2CaznskewZqC0rKz0SqzCqmu5dFSBGMDsZFCczFlaBLiUccig6mwAWOwjFRNc8G3d3&X-Amz-Signature=2314268bc3a043797ad50a69ef36bfa8e99ab175b6d10969586b17d31a6fe207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT7LFVG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sAUSNhJt%2FZSMWC9eCEHmt77tGh%2FRloJ9kUNixNugAQIhAKT%2BsrFOOprRdHEQ6Om03J5ZEiGjUyOgTH0Ot7nTH0IcKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqJjAGrDZyilA7VUq3ANFLc%2F%2F0B4iD3m3Gn976ouVMVwT8P2rjizOj3LYOr2550cZ4qDs3M5u0aq4SDpKgBD3iyHaOFo2tE23pl3G53aEJTEU4QbGeY7l3PPPBZasBHpr5PfsA8G%2BWrT4qxHz2ymdH%2Ba1UCm9BJdDRlacr%2F7OqgeHTKbaOBmNzwzTCw3mpI1yN58WztQZoQN2W%2F6pZI%2FQZ%2FZHouUJVC03Psa06kaqVV2dU0V53ih%2Bl187FvxysW7wcu9JkmkbfBX8fZBbPqaXUO3IZlfVrBbllcdQiZO4wEV0qtptNAiYmig7XoOQ7ZIyZTuO%2BNnBk2%2FbqapPkBbFJN8C7UKGWdnvprM%2Fzktgp2QwXMiAYZrQykK03jwqrwU3UMpwL%2BipFPLxqg%2BB6IR5B4TCbmFb%2BZPxVHq8DXc7JHDv6ybV8qodXDhz6e4D2hGcLGLqJBZS9Ic02XYpE1EHgbcGTequOFcpeceN7c8bVmxndQYPg98VwyS9TzPhykWtKnkflnaZ9QJmod6xKhoNUD4WMD7fAeaHZzy7VLZm01C5kznXPvgogmP6hGeh%2FcGdrU1wgGOwhbN%2FmVQHlg732qPrLONscUF8M2Np05c%2BJY6C22gkIx%2FHxzZbUQo3EgYqM1fucg75%2BZFhsjC2odjJBjqkAZZ2dEIulCTabNuBDSaqj0HXnMG5IH3HG2RFZOmmAZlswfjlrnsnvyJsPYFCip0MWcGDXI0JPjJPA7Y6HALuSosOtZSGdpFq2shcm%2FuHTBumsZ8caPwVZVXFNgEOGasC784%2FvhZswuOhgG2Ok9S7Yoc8jX2CaznskewZqC0rKz0SqzCqmu5dFSBGMDsZFCczFlaBLiUccig6mwAWOwjFRNc8G3d3&X-Amz-Signature=59770dbf5b0ecc1cc584903b2bd9143be9b6f3accb0c9363b17861c0e3825d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
