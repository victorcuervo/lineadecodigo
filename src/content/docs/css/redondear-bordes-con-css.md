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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFCMQCN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB8njk1a2nrFaoCYeYNYq99yL55CCW5hE1FksU4AWoxAIhAI%2BzI2EDBz7PONAQ5FZCtyLBhCAdconAZZQyjreAnPfVKv8DCHUQABoMNjM3NDIzMTgzODA1IgwGDnuI7%2BPNWnPWICcq3APUF0N7EnHsBcUxo%2F0pnVRhriqwGuvU2S20Cl2bGZpxiHY7QvBCIG%2FC0JyUb7wOOcY56uAUuJZ%2F7hhdFutlf3XiqHxec7JssVoXRRGylRYb%2FCrZu0lKaWW8G8HKk45vkD7GylaPR5do63C3yvrXyxisYlOIcXOJYENngxhyTc1JWC%2FcAmlVxSjSFhisIKMNAusM3lYnU0iKgCdjYTtxEs59m0Bvh9SA%2Fw98ckgp0CZTNf%2Bxvd9McBdDTHCXO0eZpdCVZq9sngFJ1AxEuj5C1KTa1ustoVl7zdbAz2EZXdkz6DV4TGXIaEoqWfFvxN58cXEp8bH%2BQ%2BZJdgx3UK%2BoHIhNuhnzxKIlOzDyAaAUPLsjPHNQShhwymjBwNP4xGh9r2YeDEtdB7ffJq3k0xSmTsJ2j0ugRZIW7w6FxMCdPDnvIKP0aSoNFYIWybe4yG1QkohrTZct2bIfPpSfxA4ODYHgN56G09L0ktSkA8NP5%2B54Wp7fSxJRr33KCWJnnLIK1DiifwO8h1Lu4Wog%2BMdjl6O5GuhHSjCkdDrs7PdV445WmWHDshkNXY7adktH7xafS8iMXIg3SZ3ZxFzZszyNhRYAwgt7rzkZq3rmg3FIuzoVPDumc3Vf53UepZR7nTDvptDJBjqkAVXJz16vw13rAZL%2B8ubvcVT4bs3kEYX7EZWlbB%2Bp989MhH473UjzDC1khn%2BfF%2F8mGQ8i6OUa0x0QgWqVgWJ6ZRtLDiNYpYw%2BxeGEDwAnjGaf%2BvbjVxB5392sH5buNqBUy4sEPuCl6aJBzBMNiKDKSPKk1gFy89Hd2fqR99LdMlLa3NxFjwnkpLWY1ZF%2BXRuVzYm06OLsVFD40zSBVH31pQX7y%2F9%2B&X-Amz-Signature=b56070ee7e4cd68df8dc28e5361a6c6059cbe4b2654cf5f3c1cc1cd03ed7ffa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFCMQCN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB8njk1a2nrFaoCYeYNYq99yL55CCW5hE1FksU4AWoxAIhAI%2BzI2EDBz7PONAQ5FZCtyLBhCAdconAZZQyjreAnPfVKv8DCHUQABoMNjM3NDIzMTgzODA1IgwGDnuI7%2BPNWnPWICcq3APUF0N7EnHsBcUxo%2F0pnVRhriqwGuvU2S20Cl2bGZpxiHY7QvBCIG%2FC0JyUb7wOOcY56uAUuJZ%2F7hhdFutlf3XiqHxec7JssVoXRRGylRYb%2FCrZu0lKaWW8G8HKk45vkD7GylaPR5do63C3yvrXyxisYlOIcXOJYENngxhyTc1JWC%2FcAmlVxSjSFhisIKMNAusM3lYnU0iKgCdjYTtxEs59m0Bvh9SA%2Fw98ckgp0CZTNf%2Bxvd9McBdDTHCXO0eZpdCVZq9sngFJ1AxEuj5C1KTa1ustoVl7zdbAz2EZXdkz6DV4TGXIaEoqWfFvxN58cXEp8bH%2BQ%2BZJdgx3UK%2BoHIhNuhnzxKIlOzDyAaAUPLsjPHNQShhwymjBwNP4xGh9r2YeDEtdB7ffJq3k0xSmTsJ2j0ugRZIW7w6FxMCdPDnvIKP0aSoNFYIWybe4yG1QkohrTZct2bIfPpSfxA4ODYHgN56G09L0ktSkA8NP5%2B54Wp7fSxJRr33KCWJnnLIK1DiifwO8h1Lu4Wog%2BMdjl6O5GuhHSjCkdDrs7PdV445WmWHDshkNXY7adktH7xafS8iMXIg3SZ3ZxFzZszyNhRYAwgt7rzkZq3rmg3FIuzoVPDumc3Vf53UepZR7nTDvptDJBjqkAVXJz16vw13rAZL%2B8ubvcVT4bs3kEYX7EZWlbB%2Bp989MhH473UjzDC1khn%2BfF%2F8mGQ8i6OUa0x0QgWqVgWJ6ZRtLDiNYpYw%2BxeGEDwAnjGaf%2BvbjVxB5392sH5buNqBUy4sEPuCl6aJBzBMNiKDKSPKk1gFy89Hd2fqR99LdMlLa3NxFjwnkpLWY1ZF%2BXRuVzYm06OLsVFD40zSBVH31pQX7y%2F9%2B&X-Amz-Signature=7c7e7b76a4f4089305f10d5b876fc6823db71f6a78e7693089379eec10d7f445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
