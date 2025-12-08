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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42DENIZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6zij04sZuSGHnhhm9BMHomO0CSy0e%2FsnIHKjGvPBWUwIgYlDbW%2FNgSQIwFfETEUQKHO1HvUuPiGy9w2E0qf5oXAUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpSpcUJSIxMDhCPUCrcA%2BckdNFIc4tFTxpPSY%2BK2mw6%2BnRHDbW%2BPVUjWdSds8BX%2Blvk2%2BY0mjm8Ry4%2BmYDHo8PW8nk80SoWCCofK6UlCXEdc6AnF7jHXCk3kjNgprE2t7Okmjkph%2Fvs2mfFHixCO7aVwooIileaxkd7wlRMLxvi%2F1p8%2BkNj%2BpUbusyuGmavJCWXgptvav6U2v6ybbaZsl8XJbDJtXsqRTpae5rTp2Y3dTTwAgB7pQ2jJ2%2FOlIe44n0%2FYSla%2BmYlUFuaQsYLVSe1Yq2WD6Eg0rzYBMh1gtFP8A9HFOpr%2F5eHXCqs2Mw4kBs%2BMYd3LzGM%2F7K21O6TEY%2B40SByrN%2BQLUjUPIhsmwtOwFkyAyfH8Naxo10yq%2Bmh1gFs%2BGE65i1IRe7You%2FnPL%2FreckrY0fhdJZoj9qIWMuBHeaQB3sNDYG9P7y%2B%2FmP7WuHS%2FjOdMUv3dFIBqxiQwty2lKvSLs0qmfJZi%2B4ujp4v01eOAojK2lYv6HOe1YI5QMudDWYeCeE89gX91PR%2Blt2YkHc0KtGOfd%2BY23iSw%2B5kYX2s%2F28dO0hnch2182hmnRLmrDSyZ8u8HnNzmi%2F8N2dDIAM7mBw0lORV0qRcqUpVJOhiqMkzqQdOMtSVI3OftIHwu7FtyNGmfqWqMKOh2MkGOqUB%2FBltJTQ5AoqG0OhWxby2wdIDzGy4Y9sJz%2BE4jgXJC4C%2F83P0P%2FFol%2BM3MzzJnEEjx%2Bo%2FmL2Zze4q%2FFYOBtDvYDPewCwIC19%2BhPkFDfyi5vj4enRlNEPXossWo74jg6n59ZdbQgTJBqGgf7BkV%2FRaOJpwBnY1%2FeQCNOdpfcWvoCwZYCxWkALb%2Bah6TzZ%2Fsf9nWk9cZJIcNlM3LHozha6jl5my2%2BnP&X-Amz-Signature=608a08e26369ece0eba742e8d75f11d83816d2921efacbc01fcb88ea19582256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42DENIZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6zij04sZuSGHnhhm9BMHomO0CSy0e%2FsnIHKjGvPBWUwIgYlDbW%2FNgSQIwFfETEUQKHO1HvUuPiGy9w2E0qf5oXAUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpSpcUJSIxMDhCPUCrcA%2BckdNFIc4tFTxpPSY%2BK2mw6%2BnRHDbW%2BPVUjWdSds8BX%2Blvk2%2BY0mjm8Ry4%2BmYDHo8PW8nk80SoWCCofK6UlCXEdc6AnF7jHXCk3kjNgprE2t7Okmjkph%2Fvs2mfFHixCO7aVwooIileaxkd7wlRMLxvi%2F1p8%2BkNj%2BpUbusyuGmavJCWXgptvav6U2v6ybbaZsl8XJbDJtXsqRTpae5rTp2Y3dTTwAgB7pQ2jJ2%2FOlIe44n0%2FYSla%2BmYlUFuaQsYLVSe1Yq2WD6Eg0rzYBMh1gtFP8A9HFOpr%2F5eHXCqs2Mw4kBs%2BMYd3LzGM%2F7K21O6TEY%2B40SByrN%2BQLUjUPIhsmwtOwFkyAyfH8Naxo10yq%2Bmh1gFs%2BGE65i1IRe7You%2FnPL%2FreckrY0fhdJZoj9qIWMuBHeaQB3sNDYG9P7y%2B%2FmP7WuHS%2FjOdMUv3dFIBqxiQwty2lKvSLs0qmfJZi%2B4ujp4v01eOAojK2lYv6HOe1YI5QMudDWYeCeE89gX91PR%2Blt2YkHc0KtGOfd%2BY23iSw%2B5kYX2s%2F28dO0hnch2182hmnRLmrDSyZ8u8HnNzmi%2F8N2dDIAM7mBw0lORV0qRcqUpVJOhiqMkzqQdOMtSVI3OftIHwu7FtyNGmfqWqMKOh2MkGOqUB%2FBltJTQ5AoqG0OhWxby2wdIDzGy4Y9sJz%2BE4jgXJC4C%2F83P0P%2FFol%2BM3MzzJnEEjx%2Bo%2FmL2Zze4q%2FFYOBtDvYDPewCwIC19%2BhPkFDfyi5vj4enRlNEPXossWo74jg6n59ZdbQgTJBqGgf7BkV%2FRaOJpwBnY1%2FeQCNOdpfcWvoCwZYCxWkALb%2Bah6TzZ%2Fsf9nWk9cZJIcNlM3LHozha6jl5my2%2BnP&X-Amz-Signature=1ab1de6e18fad4c8dff93e7fc6a6419844d70dba40a552ff04355f54ae46296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
