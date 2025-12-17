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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXL4NHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuA9dH%2FHYVDvF%2BPa73OxQZFiClcgQ6snOaAbkFnmQEkQIhALAMCFvjsVj9DaMK7bM%2B%2BRRX4bowQT9btt8o%2F1VGj0ztKv8DCHQQABoMNjM3NDIzMTgzODA1Igy6fhRdzksn3%2FOqt9Qq3APkTaBJUjQvduXEiVAfy7q4SVRuuXbJczAvZHZDCcXnAiNDIxlAdM%2FnY5%2FsICKreL3nTmno%2BudZhN%2FXt8uBouYXrqKB3cgo5Uor%2BV8kU9zbmDfcPWkCA1V6597EN5GPU3zSkPtf4F5hqasw40pWUE%2FDfXnkKsgO5xlFHYDdr1EcebP%2BN%2B4GLHYR1Lw1kOpibmhHoSaimxZIdvftLVSJry2iRdsvHITJVcLJjM5xPhTuttj%2FBzIpiFgFzewzHQZZIxfPh%2FVF1xYLXmXIoMhg%2FS4fU3cEIfddSdDqHlBpoU0MbqyixYQtEcE30omafzeVKNTM29NqjcNIU2Z%2F8VbHo3SkQgsQ2%2BmDqiNbYtbw03hb6v5qd34I74Ykj9uaRIS7ylr2I3HbPuYDst7Zf7CwiclFUyMGX%2B4ea4ZYdCaCsvNZGB%2FwERKg3qcH93%2FP0dLSZO2WVRJx%2FZyy74kPC42%2BKTwDxGOzM0vZH9Wayie3yPZAGOFxzt%2B6e%2F4Eiq5ALNn%2B2bP4SXAWgUQd0O16mmAbdzanka%2BTIkjb7uoZF%2FUTe3MgkSUV5cBPLE2vK19c7UEbtTmesjYI6bA0hGeLTftjHeMprkZ59fTRbzh9k%2FO76GKQ6eUp6b75yncsWW7jGjDLsYjKBjqkAf4PSYEKSH13SGmLqA2mAKRG9R3FoUzfqZ0FJLVwCcRC8f330SkWAIXjCfnUm61hImn2peBwdy5u5DSJoZ%2BSWRliz5OeE05ngXWeV06UsdJWDuIcU1HNSQaJ92R4S1RZxv3JP3a8QrASVhtSXj1WJDjfVK9TKrctC1dKy7ngTauEs8sgncNiT49sR2CNHAHeJtnL63qJcJcZXZ2SKK9C5%2FbbFf0%2B&X-Amz-Signature=3121f646590eeecd78b70e4dec87965b307b7609f76d0f1517c93b6848cb86a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXL4NHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuA9dH%2FHYVDvF%2BPa73OxQZFiClcgQ6snOaAbkFnmQEkQIhALAMCFvjsVj9DaMK7bM%2B%2BRRX4bowQT9btt8o%2F1VGj0ztKv8DCHQQABoMNjM3NDIzMTgzODA1Igy6fhRdzksn3%2FOqt9Qq3APkTaBJUjQvduXEiVAfy7q4SVRuuXbJczAvZHZDCcXnAiNDIxlAdM%2FnY5%2FsICKreL3nTmno%2BudZhN%2FXt8uBouYXrqKB3cgo5Uor%2BV8kU9zbmDfcPWkCA1V6597EN5GPU3zSkPtf4F5hqasw40pWUE%2FDfXnkKsgO5xlFHYDdr1EcebP%2BN%2B4GLHYR1Lw1kOpibmhHoSaimxZIdvftLVSJry2iRdsvHITJVcLJjM5xPhTuttj%2FBzIpiFgFzewzHQZZIxfPh%2FVF1xYLXmXIoMhg%2FS4fU3cEIfddSdDqHlBpoU0MbqyixYQtEcE30omafzeVKNTM29NqjcNIU2Z%2F8VbHo3SkQgsQ2%2BmDqiNbYtbw03hb6v5qd34I74Ykj9uaRIS7ylr2I3HbPuYDst7Zf7CwiclFUyMGX%2B4ea4ZYdCaCsvNZGB%2FwERKg3qcH93%2FP0dLSZO2WVRJx%2FZyy74kPC42%2BKTwDxGOzM0vZH9Wayie3yPZAGOFxzt%2B6e%2F4Eiq5ALNn%2B2bP4SXAWgUQd0O16mmAbdzanka%2BTIkjb7uoZF%2FUTe3MgkSUV5cBPLE2vK19c7UEbtTmesjYI6bA0hGeLTftjHeMprkZ59fTRbzh9k%2FO76GKQ6eUp6b75yncsWW7jGjDLsYjKBjqkAf4PSYEKSH13SGmLqA2mAKRG9R3FoUzfqZ0FJLVwCcRC8f330SkWAIXjCfnUm61hImn2peBwdy5u5DSJoZ%2BSWRliz5OeE05ngXWeV06UsdJWDuIcU1HNSQaJ92R4S1RZxv3JP3a8QrASVhtSXj1WJDjfVK9TKrctC1dKy7ngTauEs8sgncNiT49sR2CNHAHeJtnL63qJcJcZXZ2SKK9C5%2FbbFf0%2B&X-Amz-Signature=d8d47c889d59b676cecea580e6321d1823d58cda9ef568850521de2ab9ed4c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
