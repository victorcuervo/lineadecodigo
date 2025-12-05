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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWURGWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2FzU8LqgfJ44DEWO4GQRTG3AkFpnIUhgWbG2icqFKgIgMzTCBciq7is0Xmb459tCGFk9UXtgUD1DiracsHF0t1Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI0O98NkVJeGVLbviircAwnX9Fhfy7%2F%2FqfNSg%2FoeGC3whWEJzeHq0xeZb0pxt3d%2FvqZaFq%2BwFqhbBUTglQ1rgXybhPV1qRFirJIuMAlJXS3al2P4zOtxcDv8XF%2BdelRJ1ekVExbxk%2B8DKE%2FPz%2FVhW%2BN8OpxSnkHhmo6c8Vw7ggTEoIPu%2FkYSFgxFPqi4s4s4Y5cpQqzd1ZHcTxH0hvLvn%2Fhd5vke5MHesNP%2FTn%2By5ufMC5UsLzkfF0OTzfLx7tF%2FJR%2BitGSpg%2BWIz%2BCprLyOnz%2BSEYoTAQPpjYrOsJPrB%2FoWfJ3kdC5JIX8pBs0o6KadkMFs5%2BSrQrLrAhmrAu4iM9aXvmvynPZ%2FdfSjvNRC2pQ7OVyYkRT5SGzJyTVoMA0obuOpHkHpF6jY3LrVpZy1lB5T7X0owITkH3t6EcheCEq0yd4goyMhtWI7jY%2BLdu4k%2FOI7%2B8wvPjibZ9XpajLNJn1hHDY6dJg0zUCWbbTBrwHe6E%2BcDbI8dtXj%2FsLLQQBjCTwIH%2BJMZUQkgCai1ZjMpXgLPVOQXAzcJu8q%2FLZdF%2By9XhBw6mnh93fmrbSkA0SsxifIyvMGEPhE2E5J6xAjTqiPm%2BVdK0MU89HLkwRC1%2FBGdFAYLFsdhWLdwgwux8slj25HWoHNV6Ux6OVhMP2vyckGOqUBBaDtonJ0eUKO2N1qYauBVGLRqbnkaWUs3jgygAwVsC5%2BJFA0SmVKglLEXphYkMa1cugt9O6oeIHho0kParrWLpQlOIl6f7IFe%2FPgbabj%2BtnjF51ucPDhIvkloklkmex3gUNI8KzkrSWdzvYbQGM7Tlp03wktD%2Bih8CYKJxH%2B5EVUgZhl0ncreh8xjkXaxyTBZ29SGL0Xvzs6NcUBDi0yzSEAigik&X-Amz-Signature=e1b4580e599a98441e183019cbbd634f4323549a0e3c834f08b287114d51c9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWURGWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2FzU8LqgfJ44DEWO4GQRTG3AkFpnIUhgWbG2icqFKgIgMzTCBciq7is0Xmb459tCGFk9UXtgUD1DiracsHF0t1Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI0O98NkVJeGVLbviircAwnX9Fhfy7%2F%2FqfNSg%2FoeGC3whWEJzeHq0xeZb0pxt3d%2FvqZaFq%2BwFqhbBUTglQ1rgXybhPV1qRFirJIuMAlJXS3al2P4zOtxcDv8XF%2BdelRJ1ekVExbxk%2B8DKE%2FPz%2FVhW%2BN8OpxSnkHhmo6c8Vw7ggTEoIPu%2FkYSFgxFPqi4s4s4Y5cpQqzd1ZHcTxH0hvLvn%2Fhd5vke5MHesNP%2FTn%2By5ufMC5UsLzkfF0OTzfLx7tF%2FJR%2BitGSpg%2BWIz%2BCprLyOnz%2BSEYoTAQPpjYrOsJPrB%2FoWfJ3kdC5JIX8pBs0o6KadkMFs5%2BSrQrLrAhmrAu4iM9aXvmvynPZ%2FdfSjvNRC2pQ7OVyYkRT5SGzJyTVoMA0obuOpHkHpF6jY3LrVpZy1lB5T7X0owITkH3t6EcheCEq0yd4goyMhtWI7jY%2BLdu4k%2FOI7%2B8wvPjibZ9XpajLNJn1hHDY6dJg0zUCWbbTBrwHe6E%2BcDbI8dtXj%2FsLLQQBjCTwIH%2BJMZUQkgCai1ZjMpXgLPVOQXAzcJu8q%2FLZdF%2By9XhBw6mnh93fmrbSkA0SsxifIyvMGEPhE2E5J6xAjTqiPm%2BVdK0MU89HLkwRC1%2FBGdFAYLFsdhWLdwgwux8slj25HWoHNV6Ux6OVhMP2vyckGOqUBBaDtonJ0eUKO2N1qYauBVGLRqbnkaWUs3jgygAwVsC5%2BJFA0SmVKglLEXphYkMa1cugt9O6oeIHho0kParrWLpQlOIl6f7IFe%2FPgbabj%2BtnjF51ucPDhIvkloklkmex3gUNI8KzkrSWdzvYbQGM7Tlp03wktD%2Bih8CYKJxH%2B5EVUgZhl0ncreh8xjkXaxyTBZ29SGL0Xvzs6NcUBDi0yzSEAigik&X-Amz-Signature=3eb6ef5b103eee76b227506b2a60aefc59fc15a2b6e9d46a0dc097bdd331b9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
