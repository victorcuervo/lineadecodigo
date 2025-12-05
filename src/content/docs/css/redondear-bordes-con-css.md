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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFXTVTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FaLyzU%2FO1IgRtbcVFrfEcPgYZDEIG7s82Y4B0cvCpwIgMAK0SeHDavcy5ALSBzotxdDDY5GbzfMu3z%2FdY%2FO6Axoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDArxPQwBexAkEX3zXyrcA7V3TEvqIDTejJ1aWuHS9Dc9rqLgYS%2FDIpL3IojU2mGbA7dEIF04HEMnwxk3MaC3mABEKs0YufebWX%2B6PPs99T4magS9S6CvBmdfgjnwhBbS6wCxe2KSFC5L2CM0CS8QXc3qbnwy5h%2FmJEFIrci%2B0PkI6Xzu2O4EhtXz230%2BNsPVPT9Gvsxm2OoaBjjS0TMxyIQwAWwZsFYghBjPjxlhs38yykGe%2BirfmWiqzWlmGiXRuwqLI2No54TsUOEaxSD9ObiXa%2BYxHWG3xGThZ8SrzMWxk041n8hoVs8D%2BYONwK7BUOYwo7z58IY%2F3xgnWI0Rvq7SqvUxSsK9S4ZgYoLKILWD5BF1v7Lu6RXAAiwYt3xIMxRlYXSxliTbzslyr51FdTsWv3u6HgfuwWUNiD6PphURHJNiCJe%2BgjiPEhSf3bm15jBh4Z93nQLz9%2FRL9F56dsubpud3lTklSUvXGcCqNUSyKQopT%2F%2FHEa6iZ1I9RyjN16fAB6SLqkzkqgQfMZ41K%2FvtATxigYIgengGRXFgPptnsTe44HAUIU0t0215u7DItvz0434Eb7Jx911jR7ftb4QaOvEJ8kwHDCEPEwasOpZbRdVL2vTGkqNdMcVIpCS6TluPhzIpHt%2BDLLoVMOSyyckGOqUB8SdcJLiMac3t%2FpdvwQgXmZm7BscrQKCY8Q5bcFz%2Fd7V2Ixyg8G3xWC%2Fx4tOSA8f%2FlSKAn6a44yZT3qaVRHiXcusjiC6zXgiuLR9928batM2tYVpqnMzI8KOar41V89SHwgB%2FCS9AXrOV1T57WHHdEQCeqD8d7aG2g8xODdvtRB5HYpXPzpJiiS48uPV3DoqZCS0sXCe3PhyKc3VH5f9daUDDB3Mo&X-Amz-Signature=9cb829ad7aded5b49da2d1bdddfa59da3989150ea4bdb46490b7b8fd70c0b6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFXTVTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FaLyzU%2FO1IgRtbcVFrfEcPgYZDEIG7s82Y4B0cvCpwIgMAK0SeHDavcy5ALSBzotxdDDY5GbzfMu3z%2FdY%2FO6Axoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDArxPQwBexAkEX3zXyrcA7V3TEvqIDTejJ1aWuHS9Dc9rqLgYS%2FDIpL3IojU2mGbA7dEIF04HEMnwxk3MaC3mABEKs0YufebWX%2B6PPs99T4magS9S6CvBmdfgjnwhBbS6wCxe2KSFC5L2CM0CS8QXc3qbnwy5h%2FmJEFIrci%2B0PkI6Xzu2O4EhtXz230%2BNsPVPT9Gvsxm2OoaBjjS0TMxyIQwAWwZsFYghBjPjxlhs38yykGe%2BirfmWiqzWlmGiXRuwqLI2No54TsUOEaxSD9ObiXa%2BYxHWG3xGThZ8SrzMWxk041n8hoVs8D%2BYONwK7BUOYwo7z58IY%2F3xgnWI0Rvq7SqvUxSsK9S4ZgYoLKILWD5BF1v7Lu6RXAAiwYt3xIMxRlYXSxliTbzslyr51FdTsWv3u6HgfuwWUNiD6PphURHJNiCJe%2BgjiPEhSf3bm15jBh4Z93nQLz9%2FRL9F56dsubpud3lTklSUvXGcCqNUSyKQopT%2F%2FHEa6iZ1I9RyjN16fAB6SLqkzkqgQfMZ41K%2FvtATxigYIgengGRXFgPptnsTe44HAUIU0t0215u7DItvz0434Eb7Jx911jR7ftb4QaOvEJ8kwHDCEPEwasOpZbRdVL2vTGkqNdMcVIpCS6TluPhzIpHt%2BDLLoVMOSyyckGOqUB8SdcJLiMac3t%2FpdvwQgXmZm7BscrQKCY8Q5bcFz%2Fd7V2Ixyg8G3xWC%2Fx4tOSA8f%2FlSKAn6a44yZT3qaVRHiXcusjiC6zXgiuLR9928batM2tYVpqnMzI8KOar41V89SHwgB%2FCS9AXrOV1T57WHHdEQCeqD8d7aG2g8xODdvtRB5HYpXPzpJiiS48uPV3DoqZCS0sXCe3PhyKc3VH5f9daUDDB3Mo&X-Amz-Signature=a89431a875304fb4934406a51bfc5b696520f549d6fb41278e166a7bff200b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
