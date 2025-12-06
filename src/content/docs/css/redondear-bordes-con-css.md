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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNNAZJU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFizYVWw4B0SFeLkeu0Bcu%2BVEXmMPPRlDbRLnsb3cU5AiEAknNmEQMelxSLYTVZx7%2BKbWiDUpQqhiMc5WB5lyu6MaIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD4MThpqUYGDimM%2FcCrcA0vEyeOwALndAqscPsCwgTnPJmDitaDhLMHKopPJUhytihfaDZU0vZ1BR%2FoBM2RarZ1U5Tkh54g4uiw%2BfOgyFj9wyHlRaSTrdz2NS3ZS0so0xtU4tlGLiMWeuEHyKS20ISVDAcPAB9S11pGRBre1umJTWjzVZGLG91%2B4iKyDvsFBRXXx8ZNZ3Gbylpcweho1vkPjD%2FFjFRWv6z2TWp6InHp9gEuhCdbWd3glhLmwkXr2kl2hCoqbLo62%2Fz2rZmHrOGEEjsaL2z4s1c0oc4RkWRTNKMx3yfTL81eUiy7Us2yU74keFU4od7RlpNGaJBd87Y9rao7eaGXyHETtMPHXHTfAxY7XG5pxKW%2BrxcQSTNfqesDDLPWp5ILG4vQQx5JLPwKCnJijm%2BplkVJfYET83CV%2Bzaf5QG6BeNw5iQ%2FHqQG9voCS1O4U%2BA7Z4a%2FnPTvFMFhBbVP%2BuViEbWFWqbx4rDmZhPMJfmCaa4hYiMxoXdASScaDFCmTJjQ4kc38AQmYwG2ZPpjeITVOA3e4JSSYi0Vk2RkvvMB1dtfD67kcACbhRcMRJK8SvNL10Q5A1%2Bpd%2BjdiuKHu2loips%2FR12ZZVMRU84Sm1uhycFfRtGMpE%2FL%2FTNduaY%2FtUllyEPkjMMjezskGOqUBIRTkZhhxkeHESarSJBpURhe6Z4%2B4ZGHJ5ph3zBcxSFoeoijYgYjr4oZWgNb%2FLBiuz6fOUwrfiKU9ka6ZMrbp%2BHG2FFEpfc6neCzP6d7z%2BVfTryQWm%2FBLLwg4%2FScFrZP4Xj2AJ0SfXVrA43fy6bL59wfB%2BccqEyXlDNiY1rl5rFnxRxGOmtqLRDf%2Fm66hUN6qNyXRfY39cH14ADquSeV4cLhNqseJ&X-Amz-Signature=ea0b8238899fde3a22cf6c16aa0306c49aa82da1b5cb513ff51f6862892a94f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNNAZJU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFizYVWw4B0SFeLkeu0Bcu%2BVEXmMPPRlDbRLnsb3cU5AiEAknNmEQMelxSLYTVZx7%2BKbWiDUpQqhiMc5WB5lyu6MaIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD4MThpqUYGDimM%2FcCrcA0vEyeOwALndAqscPsCwgTnPJmDitaDhLMHKopPJUhytihfaDZU0vZ1BR%2FoBM2RarZ1U5Tkh54g4uiw%2BfOgyFj9wyHlRaSTrdz2NS3ZS0so0xtU4tlGLiMWeuEHyKS20ISVDAcPAB9S11pGRBre1umJTWjzVZGLG91%2B4iKyDvsFBRXXx8ZNZ3Gbylpcweho1vkPjD%2FFjFRWv6z2TWp6InHp9gEuhCdbWd3glhLmwkXr2kl2hCoqbLo62%2Fz2rZmHrOGEEjsaL2z4s1c0oc4RkWRTNKMx3yfTL81eUiy7Us2yU74keFU4od7RlpNGaJBd87Y9rao7eaGXyHETtMPHXHTfAxY7XG5pxKW%2BrxcQSTNfqesDDLPWp5ILG4vQQx5JLPwKCnJijm%2BplkVJfYET83CV%2Bzaf5QG6BeNw5iQ%2FHqQG9voCS1O4U%2BA7Z4a%2FnPTvFMFhBbVP%2BuViEbWFWqbx4rDmZhPMJfmCaa4hYiMxoXdASScaDFCmTJjQ4kc38AQmYwG2ZPpjeITVOA3e4JSSYi0Vk2RkvvMB1dtfD67kcACbhRcMRJK8SvNL10Q5A1%2Bpd%2BjdiuKHu2loips%2FR12ZZVMRU84Sm1uhycFfRtGMpE%2FL%2FTNduaY%2FtUllyEPkjMMjezskGOqUBIRTkZhhxkeHESarSJBpURhe6Z4%2B4ZGHJ5ph3zBcxSFoeoijYgYjr4oZWgNb%2FLBiuz6fOUwrfiKU9ka6ZMrbp%2BHG2FFEpfc6neCzP6d7z%2BVfTryQWm%2FBLLwg4%2FScFrZP4Xj2AJ0SfXVrA43fy6bL59wfB%2BccqEyXlDNiY1rl5rFnxRxGOmtqLRDf%2Fm66hUN6qNyXRfY39cH14ADquSeV4cLhNqseJ&X-Amz-Signature=7787b0b66ef0ccf4a0d2e6cbe24565ee0c48ea2aaca646e2d2b9526b46c44e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
