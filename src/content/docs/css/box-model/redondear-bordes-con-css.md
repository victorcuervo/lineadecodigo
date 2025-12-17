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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWTLIIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4FCWKplYUqkfrYwx4WX85F3IlpvT0WFOVdtpLydeZQIgKb67FxpJq78LzJLd5sz7lJhZIndqNwYKfUMguDSi4Fwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJiQ4XDvxdEGxghXXyrcAwc2kjc684Xgreb4zSq22BflRYlgWzRtb98h1uFNdN60P4CRstdmEur4uXpw2mZ1n1gPIvs0VTwkxVxB7BFqP4YxO7jq605L9wPLcUvEWKYrZ3aEYyDTWxCjiH9Pol0ETaE%2Bvi0owvgY0nuv2LpmN0D3gCAdRLsDeN4%2BASyGWvDCpK5E6HuNxcdzp99d0vWJ%2BLtArElAZgPijXviYRoXw8DQDl3fGxfHUYpc4sKEtwSrhthTXDvMTvVcab76%2FZdCYToHkZotR%2FGo6psRxDPvbIwXqpy%2BGayQiylWlsXvkXO%2BX%2FlI%2BDfcYN2a3ROzh6oR741ZIpV13s7i%2FHyAzWXyT4ZqSrvwA%2B7GzN1F%2BcOQUcQuCX30Fg3kQLmLiXmhXq%2BQfEWJOqcUhxFIG%2FPF2N4LjKor52dBVBtHtWJ1tfScpyo99%2F5dKku6loJAEHrP191p3MXjY2raphRflQtHoeyuv9YeSnSIBm%2FJRZhM67K%2F5nUZ3bFaP0Iz9Dg4PWtaHmP6mxT%2F8KQRIHRJQGmVjsI4ByZbTLJv9zKLcfJM%2BlVkEdGlD0E6gbXgFfYPYGkEdMAu9Az%2BcTori7xSyCkvBEBUOcsuKObKpPWy3pQyv5qAT%2FSa2OJaDjnDYLn%2Fo0QHMKaCicoGOqUBko7GDsWSciOZVA4oDwhUUT9FWwUyjAdBK1x14TjKh9f7nriCGM7bYyAXsUEJpMaUdDa%2BqwNYn9jxrKNgftmAk1AIo8XFP65vo%2BOiWHtrSFiTthJdj2W8nfOsi%2Fd3OYhDCzhbv5%2BoRPhnR1EmeqBWoBxNfWaU2vUH4nxHsGqL%2BB8efQtffe7%2Buw5j%2BOitXARmeF%2FB98Qcsu6ZUbIuOpaXusgKzuWf&X-Amz-Signature=013f2a46eb3e2c11455f8fc4e32c596724f7cbc4e964e960ebd2347f91efa2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWTLIIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4FCWKplYUqkfrYwx4WX85F3IlpvT0WFOVdtpLydeZQIgKb67FxpJq78LzJLd5sz7lJhZIndqNwYKfUMguDSi4Fwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJiQ4XDvxdEGxghXXyrcAwc2kjc684Xgreb4zSq22BflRYlgWzRtb98h1uFNdN60P4CRstdmEur4uXpw2mZ1n1gPIvs0VTwkxVxB7BFqP4YxO7jq605L9wPLcUvEWKYrZ3aEYyDTWxCjiH9Pol0ETaE%2Bvi0owvgY0nuv2LpmN0D3gCAdRLsDeN4%2BASyGWvDCpK5E6HuNxcdzp99d0vWJ%2BLtArElAZgPijXviYRoXw8DQDl3fGxfHUYpc4sKEtwSrhthTXDvMTvVcab76%2FZdCYToHkZotR%2FGo6psRxDPvbIwXqpy%2BGayQiylWlsXvkXO%2BX%2FlI%2BDfcYN2a3ROzh6oR741ZIpV13s7i%2FHyAzWXyT4ZqSrvwA%2B7GzN1F%2BcOQUcQuCX30Fg3kQLmLiXmhXq%2BQfEWJOqcUhxFIG%2FPF2N4LjKor52dBVBtHtWJ1tfScpyo99%2F5dKku6loJAEHrP191p3MXjY2raphRflQtHoeyuv9YeSnSIBm%2FJRZhM67K%2F5nUZ3bFaP0Iz9Dg4PWtaHmP6mxT%2F8KQRIHRJQGmVjsI4ByZbTLJv9zKLcfJM%2BlVkEdGlD0E6gbXgFfYPYGkEdMAu9Az%2BcTori7xSyCkvBEBUOcsuKObKpPWy3pQyv5qAT%2FSa2OJaDjnDYLn%2Fo0QHMKaCicoGOqUBko7GDsWSciOZVA4oDwhUUT9FWwUyjAdBK1x14TjKh9f7nriCGM7bYyAXsUEJpMaUdDa%2BqwNYn9jxrKNgftmAk1AIo8XFP65vo%2BOiWHtrSFiTthJdj2W8nfOsi%2Fd3OYhDCzhbv5%2BoRPhnR1EmeqBWoBxNfWaU2vUH4nxHsGqL%2BB8efQtffe7%2Buw5j%2BOitXARmeF%2FB98Qcsu6ZUbIuOpaXusgKzuWf&X-Amz-Signature=f21fa52c6b033d5b74006fd91a5e44d2cd962b091a1928acbbd777e6b8039565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
