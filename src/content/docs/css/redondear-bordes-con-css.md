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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHPCSV2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqJ03RNhTGT4o8j2QRbcIHIzfx42dsk6bgyzhH9DKxLAiEA%2B5BrhRDvfC24FSBMgydBARP8AKo7KpF6TqOuJXqDa2sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG9USrdoLdN4fNZrRircA1euf232nW%2Bp8FTvtR1jOtawqp6NuCHnB8eaxu5ip%2FC5avAjZ0q1cKVxfrPCm2nABGTmm42EthnDKJjzBZrIzc8TzGELJVkIxM3AWZzfiB2WvX3DwaPOL3KfwM5wb%2FDlKgcGskaYiSfjaU3p%2BmALv%2F2bIoong0gx0MOl2wVNolyZ02LWpJuNaS41eWKH7C9rvkcicpoCL0XSzPYLeIT%2F5bXZJoEW06pfwYB94Fdo9du48DddMgcr69muoZNci4TZthYQHrhxyrRPCbebe9QdJ3%2BmCK9ZpaoRNoiSSvvH%2B4%2FEAhMrSL0JfPwHLasC1BLfv3xpHBLX44eebHK9n5NHS3b7uFG8AoifG4J984fNbSCVUPHt9b4jx86SwQZlrV97p3H9qJbxpcerg0CnVt3Ge94ZoABICb0bmBCFRKf78rLeVTUJVsJUgi8MBhX4ospPDYdcUi2RYGH3rLO0qHYXJosRhpnJAYJ3CZB4WMsS1iU5aBR6exRW5GOI50XAFPOREZgYplc9a7R%2BnuyQeEQWB7wPaKj0AmJzuqAT71GiNnAMwH2BX2EWe%2BRGFbMq3MVgi%2Bw7f8yuOE9gEhvro%2BbBS2lKZpDtxQ8PUQLrZAaCw94zIP%2B76HSxy0ODraUzMOOMyMkGOqUBE4iY85xV4%2FfvuA0iXNQgqOpt8iLxkQeXpJGJNAUGs43viPTrJrSr00QGp1IGj%2BtNBdYVjDIOgF8J4%2BmaACNyCBSuRDP9MTrWTXaanwmXcyGFiDpS3fH%2Flv1%2FSLR2%2B6q8uZoxJx7AOv702wpxskpuEgjjgfNoRf4PARuXAEKnkIlVlxsJ%2B3w90L5wqQSMfegnRE3iuLwpyaW6lkibN001IR0e%2FsZ1&X-Amz-Signature=36d378b5fbbf94c2ae166e50c289a3389a7ae7287c3487364baba80a4285b8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHPCSV2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqJ03RNhTGT4o8j2QRbcIHIzfx42dsk6bgyzhH9DKxLAiEA%2B5BrhRDvfC24FSBMgydBARP8AKo7KpF6TqOuJXqDa2sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG9USrdoLdN4fNZrRircA1euf232nW%2Bp8FTvtR1jOtawqp6NuCHnB8eaxu5ip%2FC5avAjZ0q1cKVxfrPCm2nABGTmm42EthnDKJjzBZrIzc8TzGELJVkIxM3AWZzfiB2WvX3DwaPOL3KfwM5wb%2FDlKgcGskaYiSfjaU3p%2BmALv%2F2bIoong0gx0MOl2wVNolyZ02LWpJuNaS41eWKH7C9rvkcicpoCL0XSzPYLeIT%2F5bXZJoEW06pfwYB94Fdo9du48DddMgcr69muoZNci4TZthYQHrhxyrRPCbebe9QdJ3%2BmCK9ZpaoRNoiSSvvH%2B4%2FEAhMrSL0JfPwHLasC1BLfv3xpHBLX44eebHK9n5NHS3b7uFG8AoifG4J984fNbSCVUPHt9b4jx86SwQZlrV97p3H9qJbxpcerg0CnVt3Ge94ZoABICb0bmBCFRKf78rLeVTUJVsJUgi8MBhX4ospPDYdcUi2RYGH3rLO0qHYXJosRhpnJAYJ3CZB4WMsS1iU5aBR6exRW5GOI50XAFPOREZgYplc9a7R%2BnuyQeEQWB7wPaKj0AmJzuqAT71GiNnAMwH2BX2EWe%2BRGFbMq3MVgi%2Bw7f8yuOE9gEhvro%2BbBS2lKZpDtxQ8PUQLrZAaCw94zIP%2B76HSxy0ODraUzMOOMyMkGOqUBE4iY85xV4%2FfvuA0iXNQgqOpt8iLxkQeXpJGJNAUGs43viPTrJrSr00QGp1IGj%2BtNBdYVjDIOgF8J4%2BmaACNyCBSuRDP9MTrWTXaanwmXcyGFiDpS3fH%2Flv1%2FSLR2%2B6q8uZoxJx7AOv702wpxskpuEgjjgfNoRf4PARuXAEKnkIlVlxsJ%2B3w90L5wqQSMfegnRE3iuLwpyaW6lkibN001IR0e%2FsZ1&X-Amz-Signature=792c2e6fc67b904342964514c5620f171d6c2650123f116f64f4c0c4d0568c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
