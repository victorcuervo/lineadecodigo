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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAY6EC2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAX4GQQsrTCHFzrG9g5P2F%2FQeFv7vjEo1bZB9AuyEg7AiEA3us5wneBCGsiHq1dBdxNSnHbB2G2bb1Iqjbli6vhClkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMogi7b1HatvtOFQ1SrcA%2BXhIMChOdOs8yRPttwkHHrzbrdAd5zrT6fB2c6dzX02qOMNEdbfCQHL%2FDPANlceMgtqKjRE5Q6Qrt1XdDMPZvNxjxnMoB2KkOksWDiSe5EKqIicAWpny4T9L8aFkErX4LxrBIzGoGPZHe5%2B8u2WpCAvkfL9qSGejAXcfwCZGZ66c4vN4gMKQTXrmh6fKbGnwZiVlBhhagBTenA%2BOsFFmosHJQBuTgOdSTo%2FY9RoQ28VEiKOTjxl%2BfW6scWYdSpjgk0t2kEIFSQHBtB3hMO2koBsxU8VIBTALVIuL37L7auMO6RuxklSK%2Fx7CgWxQoUgHkaghtpsJX%2F1g72Mxodrp49jyPTH947IExVnKidq%2Bkjw9BTpQfrUIpLYcN52VDAJ29FIqpNf09mu0NvpR42IvEICz2LiJesL92saiDDrSEQQ1T65F6fzA7lIQsdbq0gxqfsJj6Lb0b%2BSDDo0Y2t80IRFzd6xY%2BhbIDNS0SUO96r2xV4Z7WobfWX%2FMkmJGwpZJagRi3ASxKfbW%2FzseIyVaZY%2FLtO6pSXrS9fK1s2hVBF99MFHVnnWzBApD3%2BgGMf03XBXfMULGGlyrQw6SOcWJ0ATWfcPaQ%2FKfaDOZNQQhlEQhsQaZkQ%2FvDpME7DsMMym0MkGOqUBUXg%2FxHpoJ2K4mRLlE70xMQlDaTJGiEb6IbGqcu1LSZzvE2VEU3FG%2ByLnpasvPs3yOTr5tQrSZBWUGdHobA6Ew0yVMnfDGWQhGY0poqK1gmxY6ZtMTuit8yz720tuRGHnVVUhRXD13tzkW7s5FRHz0pBrk88iOHhIh0yQ6GQqHSS3P9wOgekO7k3yiUZITxfZ3AvHZMA2Er78ECLH9eBtvYYTSf%2Fl&X-Amz-Signature=304fff40877f470618587b03e8572780de283b82666b31f5a99c30bb36de6537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAY6EC2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAX4GQQsrTCHFzrG9g5P2F%2FQeFv7vjEo1bZB9AuyEg7AiEA3us5wneBCGsiHq1dBdxNSnHbB2G2bb1Iqjbli6vhClkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMogi7b1HatvtOFQ1SrcA%2BXhIMChOdOs8yRPttwkHHrzbrdAd5zrT6fB2c6dzX02qOMNEdbfCQHL%2FDPANlceMgtqKjRE5Q6Qrt1XdDMPZvNxjxnMoB2KkOksWDiSe5EKqIicAWpny4T9L8aFkErX4LxrBIzGoGPZHe5%2B8u2WpCAvkfL9qSGejAXcfwCZGZ66c4vN4gMKQTXrmh6fKbGnwZiVlBhhagBTenA%2BOsFFmosHJQBuTgOdSTo%2FY9RoQ28VEiKOTjxl%2BfW6scWYdSpjgk0t2kEIFSQHBtB3hMO2koBsxU8VIBTALVIuL37L7auMO6RuxklSK%2Fx7CgWxQoUgHkaghtpsJX%2F1g72Mxodrp49jyPTH947IExVnKidq%2Bkjw9BTpQfrUIpLYcN52VDAJ29FIqpNf09mu0NvpR42IvEICz2LiJesL92saiDDrSEQQ1T65F6fzA7lIQsdbq0gxqfsJj6Lb0b%2BSDDo0Y2t80IRFzd6xY%2BhbIDNS0SUO96r2xV4Z7WobfWX%2FMkmJGwpZJagRi3ASxKfbW%2FzseIyVaZY%2FLtO6pSXrS9fK1s2hVBF99MFHVnnWzBApD3%2BgGMf03XBXfMULGGlyrQw6SOcWJ0ATWfcPaQ%2FKfaDOZNQQhlEQhsQaZkQ%2FvDpME7DsMMym0MkGOqUBUXg%2FxHpoJ2K4mRLlE70xMQlDaTJGiEb6IbGqcu1LSZzvE2VEU3FG%2ByLnpasvPs3yOTr5tQrSZBWUGdHobA6Ew0yVMnfDGWQhGY0poqK1gmxY6ZtMTuit8yz720tuRGHnVVUhRXD13tzkW7s5FRHz0pBrk88iOHhIh0yQ6GQqHSS3P9wOgekO7k3yiUZITxfZ3AvHZMA2Er78ECLH9eBtvYYTSf%2Fl&X-Amz-Signature=05486f93a7fbfbde3b36b4a10e946cb6be647b0ea9b19e8fb43da1266a30c37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
