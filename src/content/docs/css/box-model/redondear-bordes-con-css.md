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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIF5ZUK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnk70HRu0CSgJ4QTx4dprqLuVYFNsqs9E3Aso7YoaZmAiBQ1knV0KRtNbmq8riARxZp%2FBN3Of5O9Dum%2BBUMvvckDCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMIdrfiM8UyutoQ9ywKtwD3NqhxDD0OvGoRjqFkbQE6Kk91BnxbqXpGV7zY%2FCdehHPqtl313LItYP%2Bas5HDY5YDQiX2aJP7gt5c6PRD%2BLl%2Bv2eP3GeAtT6WXPtF9Z8DgWb0CJC71CcDR11hsQ%2BuV2PQln9h9acE8twfSAvoUFj13pE89i4ab7mjVX0JWC3nbFmDbp5mnix6gAob6SeT3u7ARWXeSugilsdSiIN7VpnEu%2BOqcke9nkNgsSzEjaqOJl%2BegyBJBvfqwYbYeGSwDbicCPVxxyANEpdTM%2FK4GvQPcRqejt8AI2b08wvsrI%2FpSy40T79SBGKa6l8eVRKto%2F%2FS1jJu%2FvwjHs9s8XjhkajsbCsy%2FfKDLIcqhxJzonzpV%2BQkW6RANJuV8bdGzNXfEtqiZTuSmYJJnwWQ3dthgnlV4IeIUxid7n%2F%2B3E%2FmgRHI1YMDM4HkWQptwiL4RwyPGJ9wcimn9CNwcL0UUI4SNG3u9JJ%2FZt7x2Tml3A5U2daxN6DVYVvz3sA8nWDEKebms4Ibuu0LijTf%2BurfLTOTzgJ2uWe3ixRwChKRPAKFLfuzKwOgxwz8gklIu%2BF54mNvuFQb%2FK22exFEEgihpvEWQUIY9p8y1L8urjOqTkABRHqndGnLTV8rWKphhAzKVMwgKuKygY6pgHpRMY%2FVoHL%2BtagEPolyUaAgfBy38HMKtlwoxMIVY8%2FPT8HguFwTh2H4IATHa0yVU%2Bja0nlaarSiGatgGoRgWFhJ8ZC0E6VBpX9TW3baxG8EcQjQmcuC5ABdxwUUjO7U5qAGZtitv6u5AvYyRWBJ59U60CApYXDgHER9KkfrxJrusmwL9KwM%2B69eAuGTpJAMvTwMR6UzLG8XFzvvah9xrvotcn5VCOU&X-Amz-Signature=58ebe08f515a8cadf441235e2538e83aad9ab6f45825577639bd737781987615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIF5ZUK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnk70HRu0CSgJ4QTx4dprqLuVYFNsqs9E3Aso7YoaZmAiBQ1knV0KRtNbmq8riARxZp%2FBN3Of5O9Dum%2BBUMvvckDCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMIdrfiM8UyutoQ9ywKtwD3NqhxDD0OvGoRjqFkbQE6Kk91BnxbqXpGV7zY%2FCdehHPqtl313LItYP%2Bas5HDY5YDQiX2aJP7gt5c6PRD%2BLl%2Bv2eP3GeAtT6WXPtF9Z8DgWb0CJC71CcDR11hsQ%2BuV2PQln9h9acE8twfSAvoUFj13pE89i4ab7mjVX0JWC3nbFmDbp5mnix6gAob6SeT3u7ARWXeSugilsdSiIN7VpnEu%2BOqcke9nkNgsSzEjaqOJl%2BegyBJBvfqwYbYeGSwDbicCPVxxyANEpdTM%2FK4GvQPcRqejt8AI2b08wvsrI%2FpSy40T79SBGKa6l8eVRKto%2F%2FS1jJu%2FvwjHs9s8XjhkajsbCsy%2FfKDLIcqhxJzonzpV%2BQkW6RANJuV8bdGzNXfEtqiZTuSmYJJnwWQ3dthgnlV4IeIUxid7n%2F%2B3E%2FmgRHI1YMDM4HkWQptwiL4RwyPGJ9wcimn9CNwcL0UUI4SNG3u9JJ%2FZt7x2Tml3A5U2daxN6DVYVvz3sA8nWDEKebms4Ibuu0LijTf%2BurfLTOTzgJ2uWe3ixRwChKRPAKFLfuzKwOgxwz8gklIu%2BF54mNvuFQb%2FK22exFEEgihpvEWQUIY9p8y1L8urjOqTkABRHqndGnLTV8rWKphhAzKVMwgKuKygY6pgHpRMY%2FVoHL%2BtagEPolyUaAgfBy38HMKtlwoxMIVY8%2FPT8HguFwTh2H4IATHa0yVU%2Bja0nlaarSiGatgGoRgWFhJ8ZC0E6VBpX9TW3baxG8EcQjQmcuC5ABdxwUUjO7U5qAGZtitv6u5AvYyRWBJ59U60CApYXDgHER9KkfrxJrusmwL9KwM%2B69eAuGTpJAMvTwMR6UzLG8XFzvvah9xrvotcn5VCOU&X-Amz-Signature=b55df0e640cbd17d6ba3b4d09920c7bdb29ad7cf4b3efb0fc1aae50bc0706d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
