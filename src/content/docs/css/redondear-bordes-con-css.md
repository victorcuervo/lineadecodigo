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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOK6HE4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPqs27%2FNxqhxnAAtvvmlUsU9rtOWLEhA%2BLrOngsAGW9QIgKDHKW6IbKAgGyspo5IzknVGPBRpVs%2Fsxe6EBseg4%2BwMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOu5C9Y2jo6yFtVlESrcAyyT%2FnLi752dYU2f%2BfAisX6QWzXAz5X8fWWKV9FFQaXQOwYYMUqMKZaTwwgleT37S%2FW7MHEmyVpzE45h41pwtDrycJlAFJzQOUoDPdwLj0Y74%2FrN7gXNthH1rJOTg%2BNmqQIsnXe%2BL8PVgqyr50KX2XHI7hQklpU%2FJ0Ik7JOPEogZS61msYT7FgJWi1vg%2FCQsm0znyfoZCUTXO%2FzAvlQkkCBHuNuNoedWJ%2FfTzOeG3Mahe0PwAKRApNFeFekHyBGdYsvsb5Ulf5Vuxb%2FSExz43Y%2F34tK09imHloNNSOUn%2BDyjK4%2BvBVl1atxPopoqa1udnaZR7s7M3Bg5pyuZnsiWXra0d1MCCO6QlYGmiQThpKv%2Ftq5HjaESMDXaF1MWJQeelZFcBRvPFOY2RTSf88%2B1JzrsAviMs3%2FqRQrsbtFxrSz96uvPP2ZpyZrMsXSqqM3A24TllsOlvRYF1nkl1Ij4sFuZo7Cey%2Fet5O%2FS9XP2G4IIY80%2FoCrpBzW0tQfVFbnxVs7wzrWbq8vnj34xn9Wpv1zbJ8a4xurbaCDflwuUo0YcQBYikBVg%2BX824jHb0ujaVv5xq04nmo%2Bk9sp3Wbi%2Fon8YLzLIud8L2om8%2Fk29sNOYzhgU0YT5qtftTAD8MI3MyskGOqUBzVIUhM3N5Td%2F98Un3bkIkiNf2P8oxvblus9vrOCzhDBqqiHlwUYDmoYs%2FdCd70Qa5kkUMsX4yxCxOvK0OWUHF%2FG2WxRDBh7ld2lFSOClra2CMm7AqCubv26gaXA%2FOKPBjOoQbBbqEGC4RZHubZEebIrDa7n%2BvUk%2FRAG0g0s49DaXzrFMOVAR13KYnDjoGkHrpKyY8TC4npKthwi90U1CP%2BgBwMa3&X-Amz-Signature=ff3e048a10af023b49116d76ec75791b2e3c6a1ddbc0c1de738b692d7cc50674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOK6HE4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPqs27%2FNxqhxnAAtvvmlUsU9rtOWLEhA%2BLrOngsAGW9QIgKDHKW6IbKAgGyspo5IzknVGPBRpVs%2Fsxe6EBseg4%2BwMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOu5C9Y2jo6yFtVlESrcAyyT%2FnLi752dYU2f%2BfAisX6QWzXAz5X8fWWKV9FFQaXQOwYYMUqMKZaTwwgleT37S%2FW7MHEmyVpzE45h41pwtDrycJlAFJzQOUoDPdwLj0Y74%2FrN7gXNthH1rJOTg%2BNmqQIsnXe%2BL8PVgqyr50KX2XHI7hQklpU%2FJ0Ik7JOPEogZS61msYT7FgJWi1vg%2FCQsm0znyfoZCUTXO%2FzAvlQkkCBHuNuNoedWJ%2FfTzOeG3Mahe0PwAKRApNFeFekHyBGdYsvsb5Ulf5Vuxb%2FSExz43Y%2F34tK09imHloNNSOUn%2BDyjK4%2BvBVl1atxPopoqa1udnaZR7s7M3Bg5pyuZnsiWXra0d1MCCO6QlYGmiQThpKv%2Ftq5HjaESMDXaF1MWJQeelZFcBRvPFOY2RTSf88%2B1JzrsAviMs3%2FqRQrsbtFxrSz96uvPP2ZpyZrMsXSqqM3A24TllsOlvRYF1nkl1Ij4sFuZo7Cey%2Fet5O%2FS9XP2G4IIY80%2FoCrpBzW0tQfVFbnxVs7wzrWbq8vnj34xn9Wpv1zbJ8a4xurbaCDflwuUo0YcQBYikBVg%2BX824jHb0ujaVv5xq04nmo%2Bk9sp3Wbi%2Fon8YLzLIud8L2om8%2Fk29sNOYzhgU0YT5qtftTAD8MI3MyskGOqUBzVIUhM3N5Td%2F98Un3bkIkiNf2P8oxvblus9vrOCzhDBqqiHlwUYDmoYs%2FdCd70Qa5kkUMsX4yxCxOvK0OWUHF%2FG2WxRDBh7ld2lFSOClra2CMm7AqCubv26gaXA%2FOKPBjOoQbBbqEGC4RZHubZEebIrDa7n%2BvUk%2FRAG0g0s49DaXzrFMOVAR13KYnDjoGkHrpKyY8TC4npKthwi90U1CP%2BgBwMa3&X-Amz-Signature=131a1f58f006ca9c44672f8c98302decb3206eb9ef1e97158e5dd552253b9839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
