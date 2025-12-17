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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52ZPN5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA6cug1b1Do3LgmD3pCWthxRWV%2B%2BVjXOceJS9P5xbQfwIhAIpU%2FL7D%2BQ%2Bdrjl5%2BOdLtdj4k7NENQzWYQucsSke9F%2FbKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPCIRxMplr2ZMGDgq3AOb%2FbnDOB4vwSl0gxw9l5qhECnqaGAQkglBtP%2BrIsjbcBgB2jcnBzzdXS2whlIX2pXUmZdmCAm4Rrq8VFcM3pb0BN3q%2BG5%2BE8UIed47IWFRkhcH1icSypLj1JO8w6p2lycEyj3sRubb0dK2fSm4cE1g6BS9poizPiWbv%2F3aWp%2F%2Fd0swMOyvyCEKY%2B7HxYQCKSUkYBB7vZcLptBK%2BoCKeKH5feRUFjQPiH%2F%2BBrc2iDQ%2BrSqUkDR5dqi48BV2U72Vcl8VbHMgCM18jczNECrJR376dZaGnxNLPtSL1WEqrBxoEEJmDYil6RDBsUrVnwrR3n1ZxAdsN%2FAXfzU2ccLsKR89CujSG%2B1hZj73atqAnKg66ox6gTfZZvWNjLiAW8mtwvQrQB4a3P9QVntZBAeEiEaYaiMmiSnCFY8Sd2VncXmBM%2FImm9eBrGwTR0R9LXv8nORO%2FnOCoazbtZTaXGxFRWRp8697OVBxuGdVfaaXvxynbq6vOGHKei3NY8jgAa84mZzzJhK9Ev8%2FArX9a6iQz32ubj6fp1qCzkMszVPab0uHLctfAULnUWHL9tbx%2ByWdIW4wT5ia%2Fu8WEBEt8sIDzJznYsWXf6LegBNT%2ByU9ocbrAkO2mAuyKvG3T%2FKFmzCdoIvKBjqkAYoGcSPzRYbJCLgQjZbigeD8UfiPbGpLd7BfPHtgTUgoIFtc9EUfcTE3iP8iBiC%2B5OkqTUQ430d42ikLI7E3flpI9PNKEYa4VHF3z5ieAvPD7Mwvz0z9mybYhM5Vx3NUW74IYnujMbZAmbfZko4sYi5TQFDUb5Y0uY%2FltKmkj6FTynhZ3uadhmqxDRlRdTbKSb7056q8bNBRbYS1e5CE%2B%2F1hihuN&X-Amz-Signature=abdf7a9142dbef2180dc9f18e67fa0fb9fac61a4486e1e195516200f80a86cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52ZPN5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA6cug1b1Do3LgmD3pCWthxRWV%2B%2BVjXOceJS9P5xbQfwIhAIpU%2FL7D%2BQ%2Bdrjl5%2BOdLtdj4k7NENQzWYQucsSke9F%2FbKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkPCIRxMplr2ZMGDgq3AOb%2FbnDOB4vwSl0gxw9l5qhECnqaGAQkglBtP%2BrIsjbcBgB2jcnBzzdXS2whlIX2pXUmZdmCAm4Rrq8VFcM3pb0BN3q%2BG5%2BE8UIed47IWFRkhcH1icSypLj1JO8w6p2lycEyj3sRubb0dK2fSm4cE1g6BS9poizPiWbv%2F3aWp%2F%2Fd0swMOyvyCEKY%2B7HxYQCKSUkYBB7vZcLptBK%2BoCKeKH5feRUFjQPiH%2F%2BBrc2iDQ%2BrSqUkDR5dqi48BV2U72Vcl8VbHMgCM18jczNECrJR376dZaGnxNLPtSL1WEqrBxoEEJmDYil6RDBsUrVnwrR3n1ZxAdsN%2FAXfzU2ccLsKR89CujSG%2B1hZj73atqAnKg66ox6gTfZZvWNjLiAW8mtwvQrQB4a3P9QVntZBAeEiEaYaiMmiSnCFY8Sd2VncXmBM%2FImm9eBrGwTR0R9LXv8nORO%2FnOCoazbtZTaXGxFRWRp8697OVBxuGdVfaaXvxynbq6vOGHKei3NY8jgAa84mZzzJhK9Ev8%2FArX9a6iQz32ubj6fp1qCzkMszVPab0uHLctfAULnUWHL9tbx%2ByWdIW4wT5ia%2Fu8WEBEt8sIDzJznYsWXf6LegBNT%2ByU9ocbrAkO2mAuyKvG3T%2FKFmzCdoIvKBjqkAYoGcSPzRYbJCLgQjZbigeD8UfiPbGpLd7BfPHtgTUgoIFtc9EUfcTE3iP8iBiC%2B5OkqTUQ430d42ikLI7E3flpI9PNKEYa4VHF3z5ieAvPD7Mwvz0z9mybYhM5Vx3NUW74IYnujMbZAmbfZko4sYi5TQFDUb5Y0uY%2FltKmkj6FTynhZ3uadhmqxDRlRdTbKSb7056q8bNBRbYS1e5CE%2B%2F1hihuN&X-Amz-Signature=17f75fc0f12b0e4859b1ddc4034c1f7cd3b7c6b47284271e7db9d94bee9ac627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
