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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS2WRUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwTkeXm5q23cgkTVHZdLe5WAyXpr2ZiEtlkZcEBv1JRAiEA3XtnLxhEye7j4mTknHJC8D1mXGq%2FA4jKozMgdRFjF8QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID5RrxjBs8nBCGvhyrcA6DNfIwU5PfOAFf9Sje6%2Fi1GB4u3gTYZmOKzCCWzQrgfpSPKUROFc52sxqCHBzXYQV1YO%2F1%2Bwef5fjsR5bLorBrRZY1J4XzaSDTRO9nzUFGO3ubbUzQgvhCCJiMLjSsOw1GrifXFRJ41ogeMGKiLJzYxs%2F8iaM1rPw0u8dyIoDNm7lQ2mFwWxhlsjpY5NqyiuBluI6M6c%2F3Ops770FiG1Friy5uWt5KbbRCM7GFBvQyDq%2BClMNJl79jMeVLPuQdJqqIl3b1By9fGHWtlzR4ToveF2zoPJUptlSVexjw%2FBgfpdpeWCFLpBPw0ADCS0QpvnP6p5guPqwvflZz2lyhvvv5HLSTcfl%2BHj6nj%2BB%2F9lRTLepp4ac%2FNr8NHSzS9VFjbxlXVVLoXxMas8%2Fzfiz04Tvn0FMpcVLlQxqatcdEjzEopD6Hhr%2BoPSbo9ggpSS91Egwqr9KS00PNmm69iTt8iZnBY3odQ8UDzuyJiQfeMaQxMIMKqspY934hBhwYvv5JTrs3N%2B0nkiIwN0I4ttruEVbnWt2Q%2FrZ8XG2p8T%2Bc3QOSlliuVixC51IZoAMFEEje05mrlNoTbbNAnkVs%2B8gXVrMJGaoPJDQLAB%2BblcJncjCXH%2Bc%2BIXZo0TOOrfwrsMPjt2ckGOqUBdmhriPDOaW3eeT2%2BczB4YT0EyihOly3lsglJiZA9BkxoY8nWI21UHsuOiXrdjqLDsnAvx4uw4pf0S%2BI9FQOPcQ19XpcUvfHNsiZUn9wFP1eCJQhrV3nyAfGUFJ4LzxjC3Wv4bRnR6wlI3ROb6gjom903DmKHNPv3jqMEyFlfscrCNxAb2BBRhW6uAAaB1NNVnEMeVV45UBH50qqyCVIVx2ZKLpNM&X-Amz-Signature=bf5309877f35d0f03ebd8710598d116d82587be90b3e6d1f86cc09aed8e3b732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS2WRUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwTkeXm5q23cgkTVHZdLe5WAyXpr2ZiEtlkZcEBv1JRAiEA3XtnLxhEye7j4mTknHJC8D1mXGq%2FA4jKozMgdRFjF8QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID5RrxjBs8nBCGvhyrcA6DNfIwU5PfOAFf9Sje6%2Fi1GB4u3gTYZmOKzCCWzQrgfpSPKUROFc52sxqCHBzXYQV1YO%2F1%2Bwef5fjsR5bLorBrRZY1J4XzaSDTRO9nzUFGO3ubbUzQgvhCCJiMLjSsOw1GrifXFRJ41ogeMGKiLJzYxs%2F8iaM1rPw0u8dyIoDNm7lQ2mFwWxhlsjpY5NqyiuBluI6M6c%2F3Ops770FiG1Friy5uWt5KbbRCM7GFBvQyDq%2BClMNJl79jMeVLPuQdJqqIl3b1By9fGHWtlzR4ToveF2zoPJUptlSVexjw%2FBgfpdpeWCFLpBPw0ADCS0QpvnP6p5guPqwvflZz2lyhvvv5HLSTcfl%2BHj6nj%2BB%2F9lRTLepp4ac%2FNr8NHSzS9VFjbxlXVVLoXxMas8%2Fzfiz04Tvn0FMpcVLlQxqatcdEjzEopD6Hhr%2BoPSbo9ggpSS91Egwqr9KS00PNmm69iTt8iZnBY3odQ8UDzuyJiQfeMaQxMIMKqspY934hBhwYvv5JTrs3N%2B0nkiIwN0I4ttruEVbnWt2Q%2FrZ8XG2p8T%2Bc3QOSlliuVixC51IZoAMFEEje05mrlNoTbbNAnkVs%2B8gXVrMJGaoPJDQLAB%2BblcJncjCXH%2Bc%2BIXZo0TOOrfwrsMPjt2ckGOqUBdmhriPDOaW3eeT2%2BczB4YT0EyihOly3lsglJiZA9BkxoY8nWI21UHsuOiXrdjqLDsnAvx4uw4pf0S%2BI9FQOPcQ19XpcUvfHNsiZUn9wFP1eCJQhrV3nyAfGUFJ4LzxjC3Wv4bRnR6wlI3ROb6gjom903DmKHNPv3jqMEyFlfscrCNxAb2BBRhW6uAAaB1NNVnEMeVV45UBH50qqyCVIVx2ZKLpNM&X-Amz-Signature=003360d07851dbc442f3297dd74be4519a812f50e0cdbe01752515dc16b3c248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
