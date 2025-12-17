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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYT4CRV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvvl%2B%2B0XvDORjNH6xakJeRbxwpceocnS%2FOsUxpqn2leAiA%2FOHcNHJ%2Bgg8FUH6XaHjfxUtcFre9EBncFRMFjn1fFYCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMfIHBrKC1Ab%2FDhd34KtwDY4y47HWYpYa0BUPX46NAG6mKVdtD%2BcpzVuIeh5M82LM2ijOonOd2nV2J1B%2BtwDgXufUL9f%2FL%2BbJWhfDkX5bldrftyFzOKWraNLI1M5zrUTAmJgLvGEZznOcr1tFMhs%2BGEwDw%2Bqjx2GJ9MOGDTImJJguKyGwgDuolFSPZ0Fq9AhORQgTBdxjdv9ZEOUUef8TGBFt6HkHUKDOCXMm%2Bu0QMUhGllwkPxQMuWMUdRP%2F5OWLWMGiA4UaWGJLQlHpJM3SXlHPNZhR8%2FrygKZUR1rVRj5YR5BI1QcSKG5yAaOSRZmOR2%2BPWvRjpCu%2FPBC8eEfcoZN4t67FkxH%2BdjV9bAZ0d2y9NnbV0nNGtcbyJbJ03m3LSSQMs%2B2TPCjuvIdE4f7knfqms6N3qhKSFSHjRW60%2Bl%2BQ1GNFR3R79Y8av9%2FNW4sBqrM7bOeIs%2B4EdbrajK73%2FKAYoyXSgfZOEIS0J1O4yBuMUZukgMpL9VCwtmEt%2BPy3oZ07c5bNh7cgHVgtfhhqnptlJ2QtK%2BzFUF5juCUCfWWr84WaNxJ7fEuS5qAjSdACaAgQjUtusvZPVTvRdKE7Mv4qCi7reWofPj0U1cdGXhi7ZfFENlLlTVCKhXDYRvsm%2Fom4wHr8lC3Ee5R8w9LeJygY6pgH4bMelb1btTN0YjpuF1gBPP37d6sR1QV6XdFjbkbFHZz7lSgDLrTy%2BUwCCv7aoxmx2djbJteQpaiR1tY1KGd47TKlSrgkHD2JlrWSz0OROWFlMPF9BJerV%2BMcCcWZQi%2BysAE%2FZl%2BYHap7KcIDhqaQc8j3x8m%2Bhx97xYOZKwBtWzSXdsWgAHoznXpPWC%2Fq1LsnBfilGKRDzHfa20f%2Fv8XwptTynEr1x&X-Amz-Signature=f668b2f556f4238760c8f31a678475f2c457d11ac737be2d6eb1850a4ab754c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYT4CRV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvvl%2B%2B0XvDORjNH6xakJeRbxwpceocnS%2FOsUxpqn2leAiA%2FOHcNHJ%2Bgg8FUH6XaHjfxUtcFre9EBncFRMFjn1fFYCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMfIHBrKC1Ab%2FDhd34KtwDY4y47HWYpYa0BUPX46NAG6mKVdtD%2BcpzVuIeh5M82LM2ijOonOd2nV2J1B%2BtwDgXufUL9f%2FL%2BbJWhfDkX5bldrftyFzOKWraNLI1M5zrUTAmJgLvGEZznOcr1tFMhs%2BGEwDw%2Bqjx2GJ9MOGDTImJJguKyGwgDuolFSPZ0Fq9AhORQgTBdxjdv9ZEOUUef8TGBFt6HkHUKDOCXMm%2Bu0QMUhGllwkPxQMuWMUdRP%2F5OWLWMGiA4UaWGJLQlHpJM3SXlHPNZhR8%2FrygKZUR1rVRj5YR5BI1QcSKG5yAaOSRZmOR2%2BPWvRjpCu%2FPBC8eEfcoZN4t67FkxH%2BdjV9bAZ0d2y9NnbV0nNGtcbyJbJ03m3LSSQMs%2B2TPCjuvIdE4f7knfqms6N3qhKSFSHjRW60%2Bl%2BQ1GNFR3R79Y8av9%2FNW4sBqrM7bOeIs%2B4EdbrajK73%2FKAYoyXSgfZOEIS0J1O4yBuMUZukgMpL9VCwtmEt%2BPy3oZ07c5bNh7cgHVgtfhhqnptlJ2QtK%2BzFUF5juCUCfWWr84WaNxJ7fEuS5qAjSdACaAgQjUtusvZPVTvRdKE7Mv4qCi7reWofPj0U1cdGXhi7ZfFENlLlTVCKhXDYRvsm%2Fom4wHr8lC3Ee5R8w9LeJygY6pgH4bMelb1btTN0YjpuF1gBPP37d6sR1QV6XdFjbkbFHZz7lSgDLrTy%2BUwCCv7aoxmx2djbJteQpaiR1tY1KGd47TKlSrgkHD2JlrWSz0OROWFlMPF9BJerV%2BMcCcWZQi%2BysAE%2FZl%2BYHap7KcIDhqaQc8j3x8m%2Bhx97xYOZKwBtWzSXdsWgAHoznXpPWC%2Fq1LsnBfilGKRDzHfa20f%2Fv8XwptTynEr1x&X-Amz-Signature=dd792a0c87976573e252a1ca6a681b51b17be3186a7894090673b063d712f19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
