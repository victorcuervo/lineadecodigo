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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3EEXFR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPalDcqO3IgZUOVGjYCz49%2Bl%2FPFRX3f01SH%2BqoSVPObAiAa6jdtcJabicj%2B6lbfFFX8L4Vo7d217WwrtUJ5gRW8HSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvrmDZmFu2VDrJq0SKtwD2Lzy9GW2Pp9PAWbH2G75doR4nlkn9iJd%2FUIzZn7OQTthD1bPoy%2FBGY5bpi5EKIShhG%2F302cmwsdQFTfEvcJaAzUIIyScGxXRgLomVW%2FVk7uSC0VSReiGzuawCC6CciANNmSZALuKE%2FlF5KMZO%2BJJ90dhUpx6J%2FGWq2QqIAwiPizdq35dZxFfMa3tDzKwmK%2FQYxw%2BCbVOcfDunjleDf%2BCdOgs6ReenizfOV8HzuyDO4cAkpsqhxLX%2Bi%2F06bz8udUZuVRi6ElwAFYTCJWkAQnVOPV6gE0A0aDgid2HPz8iEdORg%2FPr8uzBv0XniX4VvQifIhG6Y%2BWuJ70Xqm0uRpFGZZhFx%2BzQk8%2F58SkPihzQQtDO35Q67VMBfm0o1DlCwoE4u7UEhHpy8Zyopt%2FbQLzvfVfZgwWXa4WyySIvz2dkz42YFw1cCvjiMFiCU5gs3K6Xit5ROBAb4uXT3c6iTipIZB1RvaNz8vGIxCo8ey%2Bu8Ixo1DS0dNKGlOLn0p6jtnjeLAo95Bmal0pNuGtWcU9V5ECptuTZKeXSuaglHV544INWW%2FOrqlJ9BK1U8JlqR1EfG8t1W1JE4xOmtb4RksuakQUWFZWo7RzzR5%2BxLSVzbpGD%2FaWiSbs%2FhHSoXS8whrTZyQY6pgHdtOFA0ttF1G3bSk%2FcbxlVM3TzvLGf4ODwrrRcamkfq7guGWc5j%2FlzHIAtT0EQM0MqCJyN%2BJDKBtVSYsjPuiO%2FqnsyY4cM%2BuEZZJtEOtIP8w7YEZit47W7y7rJ7VXNPFZfzxDmQgFV9He2HFkqB22%2B%2BTtvD3YCrIfPax1ZM06z8jweu9MbiHbHAAy6iBN7HnMBGYMyAOz80gnhdWUCuYcYC%2FQE2z%2Fd&X-Amz-Signature=2a58c2254c3123fb8a1ea94c14cad7c0ad17d1a37c164a5663acdae971136b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3EEXFR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPalDcqO3IgZUOVGjYCz49%2Bl%2FPFRX3f01SH%2BqoSVPObAiAa6jdtcJabicj%2B6lbfFFX8L4Vo7d217WwrtUJ5gRW8HSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvrmDZmFu2VDrJq0SKtwD2Lzy9GW2Pp9PAWbH2G75doR4nlkn9iJd%2FUIzZn7OQTthD1bPoy%2FBGY5bpi5EKIShhG%2F302cmwsdQFTfEvcJaAzUIIyScGxXRgLomVW%2FVk7uSC0VSReiGzuawCC6CciANNmSZALuKE%2FlF5KMZO%2BJJ90dhUpx6J%2FGWq2QqIAwiPizdq35dZxFfMa3tDzKwmK%2FQYxw%2BCbVOcfDunjleDf%2BCdOgs6ReenizfOV8HzuyDO4cAkpsqhxLX%2Bi%2F06bz8udUZuVRi6ElwAFYTCJWkAQnVOPV6gE0A0aDgid2HPz8iEdORg%2FPr8uzBv0XniX4VvQifIhG6Y%2BWuJ70Xqm0uRpFGZZhFx%2BzQk8%2F58SkPihzQQtDO35Q67VMBfm0o1DlCwoE4u7UEhHpy8Zyopt%2FbQLzvfVfZgwWXa4WyySIvz2dkz42YFw1cCvjiMFiCU5gs3K6Xit5ROBAb4uXT3c6iTipIZB1RvaNz8vGIxCo8ey%2Bu8Ixo1DS0dNKGlOLn0p6jtnjeLAo95Bmal0pNuGtWcU9V5ECptuTZKeXSuaglHV544INWW%2FOrqlJ9BK1U8JlqR1EfG8t1W1JE4xOmtb4RksuakQUWFZWo7RzzR5%2BxLSVzbpGD%2FaWiSbs%2FhHSoXS8whrTZyQY6pgHdtOFA0ttF1G3bSk%2FcbxlVM3TzvLGf4ODwrrRcamkfq7guGWc5j%2FlzHIAtT0EQM0MqCJyN%2BJDKBtVSYsjPuiO%2FqnsyY4cM%2BuEZZJtEOtIP8w7YEZit47W7y7rJ7VXNPFZfzxDmQgFV9He2HFkqB22%2B%2BTtvD3YCrIfPax1ZM06z8jweu9MbiHbHAAy6iBN7HnMBGYMyAOz80gnhdWUCuYcYC%2FQE2z%2Fd&X-Amz-Signature=ef8c0bc4540972b4b72ccddefdc289f28e023f09778aae2c5db92c670cecd657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
