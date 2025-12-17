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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDPDU2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDak%2BL7TlRGAtV%2BwPecdsRGFipLgDrLBJIEf1A8foi5mAiEAhB9NjUXVc1h5oCzyuNw6YbdD2k60v50IPdYu1wT8XXgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHMxhfN5SMnX53DQDyrcA29j2F6iYzHJl6PuMysDwT%2BO4xuf9UiDUmeiwrtabQXYzHt%2FgK8ypAXXr2TUGTrJ2bprYjEZ0hv7s9B73Kr1hxwVvoTv%2B3Bskrv8T0xgiexP9zoqmnDYzdW4AV%2FMInurZ8z8DZRr6%2BeS2IJuu8SntWoIeYw4PQteaY90bsGNlTOzgcVd%2F0UUWz9Sa9G91oeqoEwYARgZoqSF9Aert56jZSF%2FJObik3bSH6qBXTQNdC%2BU9zKhr7gMoJeFut85G5xM32abbSdhmqbTNTZ3KQsIf66%2FgjlwDwZbuYqoY19bnsmrr1MfAMHAJwNppMUea7HJoEtD%2FPrIau7XTNBGWR93aAilVc2PIDa%2FJvzSRBSOMgsg8zqe3FNVeyjMNGZi4tt6hC8CcF%2F9GAbjBWRrCiC4tUx2AW%2BIMP3c%2By8wVYcABXfGyABXFmSk1Gz2LitgifGKOTTEW6saM8IAtoPipH7UN9ZemUJ3tibr805XMoPzR5j34nanvv8lxeMZVBwHlGZMSx8zB42GAEGETJfQTo9kDJDGjbxnEFGoNFuVA2lXR8w0yFFaJIk85gl1fDZLxxod9RH0l9DKL3GgCwfjLE0yFvLID6k2fZDBRd1gUCc%2FicS%2FWjOU%2BoAqzqc6KvNfMIm3icoGOqUBBdMEPt8cCMn4woIl1CUgI9yVG9yRHD7PNYEMEwwKq3EZ4T6qGelRWixYIwppjBMIGaTpUQhNrnxat9IllHSPWXDAkj9%2FqD0ElHWm5LTPjOS0RwkX50sSwqj8kur2kJGtgtWc2Ye9eNLYAuiPR%2FdpBab0ZG464RysOeChCf4yfvssrzuAgKiDMN8irrqN%2BONjWALRsRvjJWEaYuqZadGjuOC8FQt3&X-Amz-Signature=2f213f53b2b76b700d73f527f65e185ef8e43b1ce86fac8f9976a758423f60f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDPDU2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDak%2BL7TlRGAtV%2BwPecdsRGFipLgDrLBJIEf1A8foi5mAiEAhB9NjUXVc1h5oCzyuNw6YbdD2k60v50IPdYu1wT8XXgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHMxhfN5SMnX53DQDyrcA29j2F6iYzHJl6PuMysDwT%2BO4xuf9UiDUmeiwrtabQXYzHt%2FgK8ypAXXr2TUGTrJ2bprYjEZ0hv7s9B73Kr1hxwVvoTv%2B3Bskrv8T0xgiexP9zoqmnDYzdW4AV%2FMInurZ8z8DZRr6%2BeS2IJuu8SntWoIeYw4PQteaY90bsGNlTOzgcVd%2F0UUWz9Sa9G91oeqoEwYARgZoqSF9Aert56jZSF%2FJObik3bSH6qBXTQNdC%2BU9zKhr7gMoJeFut85G5xM32abbSdhmqbTNTZ3KQsIf66%2FgjlwDwZbuYqoY19bnsmrr1MfAMHAJwNppMUea7HJoEtD%2FPrIau7XTNBGWR93aAilVc2PIDa%2FJvzSRBSOMgsg8zqe3FNVeyjMNGZi4tt6hC8CcF%2F9GAbjBWRrCiC4tUx2AW%2BIMP3c%2By8wVYcABXfGyABXFmSk1Gz2LitgifGKOTTEW6saM8IAtoPipH7UN9ZemUJ3tibr805XMoPzR5j34nanvv8lxeMZVBwHlGZMSx8zB42GAEGETJfQTo9kDJDGjbxnEFGoNFuVA2lXR8w0yFFaJIk85gl1fDZLxxod9RH0l9DKL3GgCwfjLE0yFvLID6k2fZDBRd1gUCc%2FicS%2FWjOU%2BoAqzqc6KvNfMIm3icoGOqUBBdMEPt8cCMn4woIl1CUgI9yVG9yRHD7PNYEMEwwKq3EZ4T6qGelRWixYIwppjBMIGaTpUQhNrnxat9IllHSPWXDAkj9%2FqD0ElHWm5LTPjOS0RwkX50sSwqj8kur2kJGtgtWc2Ye9eNLYAuiPR%2FdpBab0ZG464RysOeChCf4yfvssrzuAgKiDMN8irrqN%2BONjWALRsRvjJWEaYuqZadGjuOC8FQt3&X-Amz-Signature=bd867ddd23a9e3c2873217fc7d54d78c0a73aa230604fcf2514bea5b48c30cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
