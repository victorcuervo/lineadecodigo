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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OKGEMJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv93aKm4xBOQzf4KttW5QsEGrQw1ULlmRWgq7mKC%2BTnAIhAIZD%2FLfaqTrC%2B1%2FFHGRsK0FhDRP8MFWqF3mYx88qB3hbKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7eFsbilyRbl0LjMwq3AOeGd9czGiuu%2FNfovElRkGfEa4Y3YZ8BK8ttfsImUaS3uu%2F4UP1VBzGwMGNHGgrk6Lb9%2BwvvZzDumPgSUhesnSn1jH7sXEnR51GT%2BMiERpEfF%2BOvrXKp5dYDfWO%2F4Ts%2FwpvTwcNcvqRmPC4WmiXWx9fbTTUhm82cEKKQRj2uN8mxg76DcDO%2FnC9ce4OiqSNjhYcbwf2FMAltKs3pGne8M4Upi6PRn4px6PC87gsItjhhaCyXuFd7fQwPEOpHqykjdv%2FQL%2BEdm0mfzu3K%2FJVpXaRQlKgV6p7dxbGDuCFRdYkpcQEkXlfmzpvx9k3Qb1JRqw8AU38oLOMoUSTcKIdkA2P%2BoxXQtjYp4Ebg5R8FKaIfX%2FXt%2FvlDWEOK9SLxysGvde%2F2%2FynDxRMgBDsobg%2FKzANCB6bsxoO0IjuY5vD4tlPw4Noopi3xEXnC2ks4X8cqWKIGHUn6sXBQltGjVYyu%2BQueKeW3WLIIBfb6G0GcoP3IHeq2BKDJtMOx1bXkyjHnenrq3fU4yrx000rgVcQuojRZs6ZB6U%2FK%2BwR9uApO%2BCV2kWws7Kb4JxWrB7OQgdHKS%2Fh9%2BFBtjevlOF9R1P06BsfT67IQIgVP%2B6P5x5NxW5RGNM70Ni%2BajZ6c9Ta%2BTC%2F%2FdLJBjqkAYpZ9Jx7RwHBssLefj5miRcBYaCzlFDiKZgCxopskXdUGh3Zy2u5l%2FCq5t8D3kdBNTAhSG%2B9mnJJcPIdEPaFwCgZBd2dc2HtcavQopaebmyjFlZlEhJGwZptizEFWRXE3DA%2BnYNYlRbEQb753SiFXAxmWWyvOThLaApjVUxT95lGyDg8aJMw4nb9ls%2FDImtwm%2BR769sZTBblqCr5a7FRqauPvlwP&X-Amz-Signature=c2d70fb059c7241bf2721899f92502ba82e7510df4a8897778b2d74ff6c7d157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OKGEMJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv93aKm4xBOQzf4KttW5QsEGrQw1ULlmRWgq7mKC%2BTnAIhAIZD%2FLfaqTrC%2B1%2FFHGRsK0FhDRP8MFWqF3mYx88qB3hbKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7eFsbilyRbl0LjMwq3AOeGd9czGiuu%2FNfovElRkGfEa4Y3YZ8BK8ttfsImUaS3uu%2F4UP1VBzGwMGNHGgrk6Lb9%2BwvvZzDumPgSUhesnSn1jH7sXEnR51GT%2BMiERpEfF%2BOvrXKp5dYDfWO%2F4Ts%2FwpvTwcNcvqRmPC4WmiXWx9fbTTUhm82cEKKQRj2uN8mxg76DcDO%2FnC9ce4OiqSNjhYcbwf2FMAltKs3pGne8M4Upi6PRn4px6PC87gsItjhhaCyXuFd7fQwPEOpHqykjdv%2FQL%2BEdm0mfzu3K%2FJVpXaRQlKgV6p7dxbGDuCFRdYkpcQEkXlfmzpvx9k3Qb1JRqw8AU38oLOMoUSTcKIdkA2P%2BoxXQtjYp4Ebg5R8FKaIfX%2FXt%2FvlDWEOK9SLxysGvde%2F2%2FynDxRMgBDsobg%2FKzANCB6bsxoO0IjuY5vD4tlPw4Noopi3xEXnC2ks4X8cqWKIGHUn6sXBQltGjVYyu%2BQueKeW3WLIIBfb6G0GcoP3IHeq2BKDJtMOx1bXkyjHnenrq3fU4yrx000rgVcQuojRZs6ZB6U%2FK%2BwR9uApO%2BCV2kWws7Kb4JxWrB7OQgdHKS%2Fh9%2BFBtjevlOF9R1P06BsfT67IQIgVP%2B6P5x5NxW5RGNM70Ni%2BajZ6c9Ta%2BTC%2F%2FdLJBjqkAYpZ9Jx7RwHBssLefj5miRcBYaCzlFDiKZgCxopskXdUGh3Zy2u5l%2FCq5t8D3kdBNTAhSG%2B9mnJJcPIdEPaFwCgZBd2dc2HtcavQopaebmyjFlZlEhJGwZptizEFWRXE3DA%2BnYNYlRbEQb753SiFXAxmWWyvOThLaApjVUxT95lGyDg8aJMw4nb9ls%2FDImtwm%2BR769sZTBblqCr5a7FRqauPvlwP&X-Amz-Signature=5e017292dae6d7d0c7782f8985ae79350cf497ab470773c5856c7e995b99f407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
