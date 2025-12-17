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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGWG7KT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQWKPFr%2FRxCcUxmF1TqM3rFnn2lh2hDowOAStV6ghQLwIgZR14PcqhQyZWZgfy4PVQ69x96EodHsTCEizAesnxaU8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIi2bAKxKZv6NH0UxircA5mPw7zzGFwPKWL5ouTjL%2BjuI5cwxvVGQRmXBz22%2BxZWZloRZJOwnFcRcPKpnjBxchxom4r8cg3rGhhulb1FqE%2F0i4wTWRo8BzpD5liw4plna9tphCnqWb3IqGyWzjXX4ozmUAKdhSeDg%2BC6P9SKkmOsFOETI6O2MYqIL%2BcHuXifp1zYKG%2Bg%2BQkCxGtnG6%2BFszZ3X2KdxAvHTvgGw7dpJhMTjhlMRzSeCmleNjfv1BkkKrU8%2FhwToW61FIAGzPUwzRcyfGHHQ%2BQeIGlUEIRP3WE1RUdW8pTTnCmFGTtTS%2BCKYtuPcpGtkC3V26bSBmsdzjz8pd4QJSGlEOKKejGef70lKDxvq7My7q7NAAj6UBLLjH4r6Ap79rPpG%2F0LBo819F%2Bbr1AwxwbvDNVlPCCSZ3MIcbcGy%2BmHHlJdKFVRkXEv10AmBG2czgvTouIY4YEeprGI9Z%2FmyAeFVsQ2xgZsxTfE7CmOAHE20FLTPjd6wvv0WMznTygTw6tlMwq%2ByZILH%2BzNTs3RX55CD2M%2BVvpuvO06%2BNvuQJLoimK9kUsfUY6iiNM3d%2Bh1g0KveUdbmEnhUJ4R8As3l5TMz2Tnb22j7jUEDd8GtpxgQWv7BBmWEB%2FVLQ1Xo%2Bv7wfZnjf7qMPeOisoGOqUBvwqwC%2BOODHt02aYQ5sz69uMlMCzOmO8Tz5mZmoxKPS4RL4WVQsIjy5Nh%2FDDF75pbgYPjZwAjr1VPWj9QffaDxbHONyohHrl3ioYHoMWq7s%2BWRvI4BnSMkDJ4RI8WVCN3rgul7fWrsvf1CDwBZ0%2FH%2B8mu8SyiA6uzK8eq%2FHjaaE85%2F%2FEVhcXp6Hewhf7SV1Akev5gZDTb1B0TUiE5d1FWlGrM%2BPGL&X-Amz-Signature=ce8830cbd87b15736f7e2504018493de7b53aed9134d4851068ad33a359385d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGWG7KT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQWKPFr%2FRxCcUxmF1TqM3rFnn2lh2hDowOAStV6ghQLwIgZR14PcqhQyZWZgfy4PVQ69x96EodHsTCEizAesnxaU8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIi2bAKxKZv6NH0UxircA5mPw7zzGFwPKWL5ouTjL%2BjuI5cwxvVGQRmXBz22%2BxZWZloRZJOwnFcRcPKpnjBxchxom4r8cg3rGhhulb1FqE%2F0i4wTWRo8BzpD5liw4plna9tphCnqWb3IqGyWzjXX4ozmUAKdhSeDg%2BC6P9SKkmOsFOETI6O2MYqIL%2BcHuXifp1zYKG%2Bg%2BQkCxGtnG6%2BFszZ3X2KdxAvHTvgGw7dpJhMTjhlMRzSeCmleNjfv1BkkKrU8%2FhwToW61FIAGzPUwzRcyfGHHQ%2BQeIGlUEIRP3WE1RUdW8pTTnCmFGTtTS%2BCKYtuPcpGtkC3V26bSBmsdzjz8pd4QJSGlEOKKejGef70lKDxvq7My7q7NAAj6UBLLjH4r6Ap79rPpG%2F0LBo819F%2Bbr1AwxwbvDNVlPCCSZ3MIcbcGy%2BmHHlJdKFVRkXEv10AmBG2czgvTouIY4YEeprGI9Z%2FmyAeFVsQ2xgZsxTfE7CmOAHE20FLTPjd6wvv0WMznTygTw6tlMwq%2ByZILH%2BzNTs3RX55CD2M%2BVvpuvO06%2BNvuQJLoimK9kUsfUY6iiNM3d%2Bh1g0KveUdbmEnhUJ4R8As3l5TMz2Tnb22j7jUEDd8GtpxgQWv7BBmWEB%2FVLQ1Xo%2Bv7wfZnjf7qMPeOisoGOqUBvwqwC%2BOODHt02aYQ5sz69uMlMCzOmO8Tz5mZmoxKPS4RL4WVQsIjy5Nh%2FDDF75pbgYPjZwAjr1VPWj9QffaDxbHONyohHrl3ioYHoMWq7s%2BWRvI4BnSMkDJ4RI8WVCN3rgul7fWrsvf1CDwBZ0%2FH%2B8mu8SyiA6uzK8eq%2FHjaaE85%2F%2FEVhcXp6Hewhf7SV1Akev5gZDTb1B0TUiE5d1FWlGrM%2BPGL&X-Amz-Signature=513074217325b56bdab1ad425d42b4048ad6d7a5e9f552a0176f0fd2140a4b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
