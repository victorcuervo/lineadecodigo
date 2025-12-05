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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYE5UX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgp42mz2LzEIkKTgS8GuZdF8h0IuOMsZlcSS51q%2FM81AiEA3Js2k2749IWesrBA1bqXTGn2lLY2iKhLajtFDxNWtToq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLRd5l99YKgJM81txCrcA%2BgYg9K6g%2BnjojBtUkpQe%2BPQJvxB4aHzS6JVzJkNpPHRfdZ%2BzDNnjePjguXs1dtZy18XzqjqjRnKBf%2FypMvEje9g6S06Zp9ywCg8MDux01QTINAu%2BIDwl7%2F%2BX47FTeGNYQU7KvpRjl9MOVFrsdH8xWb9D6Ksdb3AA1hdRv93FPBBjYtFlIBq4U1Z%2BBXY9ccFnpUtJ%2Ft5xBtnEbtdNJs%2F584vnyG3ny6iwvHWafZGhhUnb2FECH%2FjskGwCkPF88fUuWwohiPwiX5FfxqvaSnaTDQZaRaM0b1%2BxbCyOS4yQKQ8vkeTvCFIOm2JMXSz%2Fq0FFtpwsy3lFmxvqsFqIniIT31hhUP5Ngl%2BlafdXUfSSG4eEiUlbttHvIiachTjW%2FlEJm2W%2BinnyQSTr6Uz5zUsUtDW5ERsN2wVHIpgbATGMdEogFPEHyAlXw2glMXiRYVgP75LQboAlMJz9iI%2FPqNmcpyEs1CnBkKwpCvwf7B%2FJ0HqmQSfB6Vj4yQZgA2zGmIkkAU6NAp8ADc6X4RDRPbdcxd8QTyxZecpNoqUIUEJS%2FHqClI%2BP12W7joVNQLZopogyskKsA7riygm6LLugZFi2f9ph1tO6xGcOMraVR43FgtuCgnCkfxom3Z%2BgFl%2FMJGwyckGOqUBL4WZ0AilHoroVVRk7sD8pt655TLxeHCgaUfpJQXRZcXTiBe9SChI3GzjMoXmD4Unf3cwHqeSA86DBUgCP6ujyjLyV7s4e%2B4qfe6FFy%2FoMMY0sYYy6DKNJnAZB%2BszpGGqRZjAP4K4WLHZ9mEe%2Bv2sg5DFi3twcFkaEFVPzBBvywUdzNOhHLMktbSEYR4icp5NNj75MXBrQh%2Bc7E1zc%2F518GqKRKjq&X-Amz-Signature=f7a763fd25d3262846946c35ca701d0eae9f8707af9b33f7047218da44cbc21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYE5UX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgp42mz2LzEIkKTgS8GuZdF8h0IuOMsZlcSS51q%2FM81AiEA3Js2k2749IWesrBA1bqXTGn2lLY2iKhLajtFDxNWtToq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLRd5l99YKgJM81txCrcA%2BgYg9K6g%2BnjojBtUkpQe%2BPQJvxB4aHzS6JVzJkNpPHRfdZ%2BzDNnjePjguXs1dtZy18XzqjqjRnKBf%2FypMvEje9g6S06Zp9ywCg8MDux01QTINAu%2BIDwl7%2F%2BX47FTeGNYQU7KvpRjl9MOVFrsdH8xWb9D6Ksdb3AA1hdRv93FPBBjYtFlIBq4U1Z%2BBXY9ccFnpUtJ%2Ft5xBtnEbtdNJs%2F584vnyG3ny6iwvHWafZGhhUnb2FECH%2FjskGwCkPF88fUuWwohiPwiX5FfxqvaSnaTDQZaRaM0b1%2BxbCyOS4yQKQ8vkeTvCFIOm2JMXSz%2Fq0FFtpwsy3lFmxvqsFqIniIT31hhUP5Ngl%2BlafdXUfSSG4eEiUlbttHvIiachTjW%2FlEJm2W%2BinnyQSTr6Uz5zUsUtDW5ERsN2wVHIpgbATGMdEogFPEHyAlXw2glMXiRYVgP75LQboAlMJz9iI%2FPqNmcpyEs1CnBkKwpCvwf7B%2FJ0HqmQSfB6Vj4yQZgA2zGmIkkAU6NAp8ADc6X4RDRPbdcxd8QTyxZecpNoqUIUEJS%2FHqClI%2BP12W7joVNQLZopogyskKsA7riygm6LLugZFi2f9ph1tO6xGcOMraVR43FgtuCgnCkfxom3Z%2BgFl%2FMJGwyckGOqUBL4WZ0AilHoroVVRk7sD8pt655TLxeHCgaUfpJQXRZcXTiBe9SChI3GzjMoXmD4Unf3cwHqeSA86DBUgCP6ujyjLyV7s4e%2B4qfe6FFy%2FoMMY0sYYy6DKNJnAZB%2BszpGGqRZjAP4K4WLHZ9mEe%2Bv2sg5DFi3twcFkaEFVPzBBvywUdzNOhHLMktbSEYR4icp5NNj75MXBrQh%2Bc7E1zc%2F518GqKRKjq&X-Amz-Signature=c969037919422234486536413fdb44a9ba0fa957abdad34438aa64adc27b7111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
