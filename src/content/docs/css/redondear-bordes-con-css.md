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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF6MNIX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bEfP9nvAuuA1IBQKUxDF3dZQLtbhzrg8GjmjK5%2BkAAIgCWKkJuFxm%2FRfumRraxwbm2x14NKtvReyr7NVpL64eUEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQcFWDlZ%2BRCnm%2BO3SrcA00CPvizxuxTmf%2BttV71SrNGtMi7R8eEVDIPINheM7FaNE8Vu%2FO2h2lQw%2BBuUc2C06NArhQP5yg8RfgNm%2FxxqYGamkdoyLpnKQbU2umudZu6zgVVumcphrdzUTKWrJdJjmjXHyEO0%2FIVmYK3i789ujpjrbJR3xA2oZYWURmDO9d5rHK%2ByGSxnK%2F4xF%2B2fi0OAxzA7mt3AGEAheaJ%2Fy7etSYUbOFPohkgySdmOO%2Fs%2F%2B26m9C0xl6ASSu1dhSBe6IGQ1EEScsG8bQdkvi3XRDBTUnFu09CyzDA%2FPLuqib%2BKBTs1n6E%2BJ5DZZutEZeRQ82YgP%2BXGskH5V7%2BHXcH4L6bCLqlcXshd4VP9DvWXHaHVJcim01snpf86LIuhnDNtUGaOwRL2qbZLe1HkMrkr2gdZUIwVuFlJNVf6fbUdQ0Gl0iMGppZdu5wpfvHiKRIam5RTzZcQWs1hrToqavA1TAPzx1CUCQeSpueT7jG1ls9hs0ZRxdU2WtYZBzUUVF%2FDL%2BxrmrE1CxT12lyLwa0n7kKYsHnWU9p1B10gLskw%2BfigrxhdRsh%2BiSMmS7zcRoybyC3XcgSYMWVFMcJ2C4ae%2FjAMr8M3WJcESTnFQtiOvtHJ%2BwV1J%2BxFlEMN7EH6oqmMJeZ1ckGOqUBJQKdx%2Fq1HSGdeW%2F6wugNAzCaa9dIhVPSe%2BY7e3dax88EOMB%2BrdrvHo7niEXuhOdjkOsk6lHHMCSMzQd9QoETmjxjM9GWUyQo%2FGD7iiJU9MhiQNnyf%2B0C95TGituTQy09gBBRhjXnE7ByGW4nlCu8dCwFFDdbxlknG9%2BqnWU3SCe%2FZ7gC%2FwbfmCSI0UyBW5zR0Qs6U7TOMkX%2FYnW5kyMcLrADgWMu&X-Amz-Signature=e4c9b6084fc3510a7eb6e1ba5e5cac3b717e54e8360894069f2dc6aef3d8ae77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF6MNIX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bEfP9nvAuuA1IBQKUxDF3dZQLtbhzrg8GjmjK5%2BkAAIgCWKkJuFxm%2FRfumRraxwbm2x14NKtvReyr7NVpL64eUEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQcFWDlZ%2BRCnm%2BO3SrcA00CPvizxuxTmf%2BttV71SrNGtMi7R8eEVDIPINheM7FaNE8Vu%2FO2h2lQw%2BBuUc2C06NArhQP5yg8RfgNm%2FxxqYGamkdoyLpnKQbU2umudZu6zgVVumcphrdzUTKWrJdJjmjXHyEO0%2FIVmYK3i789ujpjrbJR3xA2oZYWURmDO9d5rHK%2ByGSxnK%2F4xF%2B2fi0OAxzA7mt3AGEAheaJ%2Fy7etSYUbOFPohkgySdmOO%2Fs%2F%2B26m9C0xl6ASSu1dhSBe6IGQ1EEScsG8bQdkvi3XRDBTUnFu09CyzDA%2FPLuqib%2BKBTs1n6E%2BJ5DZZutEZeRQ82YgP%2BXGskH5V7%2BHXcH4L6bCLqlcXshd4VP9DvWXHaHVJcim01snpf86LIuhnDNtUGaOwRL2qbZLe1HkMrkr2gdZUIwVuFlJNVf6fbUdQ0Gl0iMGppZdu5wpfvHiKRIam5RTzZcQWs1hrToqavA1TAPzx1CUCQeSpueT7jG1ls9hs0ZRxdU2WtYZBzUUVF%2FDL%2BxrmrE1CxT12lyLwa0n7kKYsHnWU9p1B10gLskw%2BfigrxhdRsh%2BiSMmS7zcRoybyC3XcgSYMWVFMcJ2C4ae%2FjAMr8M3WJcESTnFQtiOvtHJ%2BwV1J%2BxFlEMN7EH6oqmMJeZ1ckGOqUBJQKdx%2Fq1HSGdeW%2F6wugNAzCaa9dIhVPSe%2BY7e3dax88EOMB%2BrdrvHo7niEXuhOdjkOsk6lHHMCSMzQd9QoETmjxjM9GWUyQo%2FGD7iiJU9MhiQNnyf%2B0C95TGituTQy09gBBRhjXnE7ByGW4nlCu8dCwFFDdbxlknG9%2BqnWU3SCe%2FZ7gC%2FwbfmCSI0UyBW5zR0Qs6U7TOMkX%2FYnW5kyMcLrADgWMu&X-Amz-Signature=8688ddadc490611b11db0c568ee1cd71af6cc8711bc579e262c56dede7695899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
