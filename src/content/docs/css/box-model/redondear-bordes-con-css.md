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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDZBMIV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHfnyySiCgVlKohbvK2GGXn6l0OSzyTgMmrW3S389kFQIga2gC3cz291WBzCkF0Js7NBar6lVpjPqi4Dp5JpNQYLMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFHAFUPN%2BTT8DcvSXyrcAz16I3d4Z97%2FfUXpK5bnfWtmFZBsntprfPDvL9tsHMzzAkA3R%2BLuAGaMkVItPt1eBlMvHeXAZo%2Fr6mvg9BkUYVkyISXGP%2BkorfeVLug4UdW2H48rYpaj7mQ2ErT%2FeeIJuvEAzKwGP0DUJFieOn%2BTmziuzFViYv%2BXEeO%2FiKA5R%2FQTB0gh6jPF9tGkMAge2QrIjLGlSGofmaUROwKelLdNFaBxHptS5mdAfLaBsG4mS4U%2Bs6GL20N%2FjzCpZQmdzXX2aRCXpoQ2sgc0yr8P%2BknGMGy5s%2BxrHzUlkEK08ErhKA5FDCOB7shWcHOC5UjLeIeu8%2BwbPRbvXRSHKO50rDfvzxau1iNDQltnYLK5k6ls%2FNvfN%2BZraqFf7leB5VSuJ0C0ksrDsQmjfYXchg%2FGYtNglkxwAto2%2F0TmbQOfP%2Bsw9nkXnY5Nvn532ySh7b1pzEP7Amyogq9f2%2B%2B95WyA66apVMtrDyuoZ491nwmB%2F2qn94fRV4bwoOyIjMT2xZGDMcaOF0PtJXIrwY%2B6AExp3IaShwtwkrj1Q3%2BgbQZRA6rphNxYvKtRplLMWabUj2DFJHtCZMFRrBhQQJsMxj695%2FlfogE5FI1haXlJlbsmagyGcIIPAdb%2Flp1w%2FpvPGny0MKvSicoGOqUBkl%2F2UvxLIS4r1TRwsKPcyFS837MgNwLsOsFp0qOSWMdamth4pVwlNZbCR8LXbNTIqDY8Meb9A%2F%2FbZ2BqlXPG%2FGkQG4G3QGOpQxFx%2FCbIlD9Rd0CW3JQ%2FnT6mUUXyBx%2BLN0B4UwfthRzudHPnUXQ%2BNpEabYshPlBxP1x1UodtD4DKXeCysGNVnjJ7WRursLZVfBjxkyAUN2HvD2LBRD9snNCH%2FuBO&X-Amz-Signature=ea69ebe6a0dec34dcfb22b8b9a662c174f74ca41bfce5b566d2658fefdcdf635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDZBMIV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHfnyySiCgVlKohbvK2GGXn6l0OSzyTgMmrW3S389kFQIga2gC3cz291WBzCkF0Js7NBar6lVpjPqi4Dp5JpNQYLMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFHAFUPN%2BTT8DcvSXyrcAz16I3d4Z97%2FfUXpK5bnfWtmFZBsntprfPDvL9tsHMzzAkA3R%2BLuAGaMkVItPt1eBlMvHeXAZo%2Fr6mvg9BkUYVkyISXGP%2BkorfeVLug4UdW2H48rYpaj7mQ2ErT%2FeeIJuvEAzKwGP0DUJFieOn%2BTmziuzFViYv%2BXEeO%2FiKA5R%2FQTB0gh6jPF9tGkMAge2QrIjLGlSGofmaUROwKelLdNFaBxHptS5mdAfLaBsG4mS4U%2Bs6GL20N%2FjzCpZQmdzXX2aRCXpoQ2sgc0yr8P%2BknGMGy5s%2BxrHzUlkEK08ErhKA5FDCOB7shWcHOC5UjLeIeu8%2BwbPRbvXRSHKO50rDfvzxau1iNDQltnYLK5k6ls%2FNvfN%2BZraqFf7leB5VSuJ0C0ksrDsQmjfYXchg%2FGYtNglkxwAto2%2F0TmbQOfP%2Bsw9nkXnY5Nvn532ySh7b1pzEP7Amyogq9f2%2B%2B95WyA66apVMtrDyuoZ491nwmB%2F2qn94fRV4bwoOyIjMT2xZGDMcaOF0PtJXIrwY%2B6AExp3IaShwtwkrj1Q3%2BgbQZRA6rphNxYvKtRplLMWabUj2DFJHtCZMFRrBhQQJsMxj695%2FlfogE5FI1haXlJlbsmagyGcIIPAdb%2Flp1w%2FpvPGny0MKvSicoGOqUBkl%2F2UvxLIS4r1TRwsKPcyFS837MgNwLsOsFp0qOSWMdamth4pVwlNZbCR8LXbNTIqDY8Meb9A%2F%2FbZ2BqlXPG%2FGkQG4G3QGOpQxFx%2FCbIlD9Rd0CW3JQ%2FnT6mUUXyBx%2BLN0B4UwfthRzudHPnUXQ%2BNpEabYshPlBxP1x1UodtD4DKXeCysGNVnjJ7WRursLZVfBjxkyAUN2HvD2LBRD9snNCH%2FuBO&X-Amz-Signature=ba7981fe44bec2bd1de64b98c4718d67a02ae9769a597cf2fee872e4a56057ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
