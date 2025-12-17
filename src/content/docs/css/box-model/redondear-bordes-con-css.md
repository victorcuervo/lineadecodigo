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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHG2EMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQZdvAMyPT5bm2bQfonNhIu%2BR%2FwZTHw108EEM6gGXVgIhAKqvrxgfQBdYy2P0%2B8ETOlGm%2BMUM%2BqmYrL34n%2B7roAV4Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwNqlReZUdxkMmPdfwq3ANpse9%2FXHd0raorkd4CaQmr7ScbOKSBBQZrNjCKXADAjC3BEy5b3lh3O3kQAQwQR6QXJp2m%2B%2Bj4o7Q2fMTZOfXS17tRktgcNRYFzVOak0orOSmQ%2F859zDDYaRvlqQKc5N6YW2aNz3bd2ERum%2B4sLMevuJkGGyc5d0x%2B1j6xTIyrZ7QLnxyH831y84pNt4cqkvIN%2FKIXTKPo7CvIe7fxs3IJDM5%2BnJYO16YYiRCnbrobPf77VT6X3SJCWTYNB8Vm1nEHV7hWljO2vF8uUaUSz5w9iq1r3ir6ZDHH%2BmHZJhbk1W2j1DbE3V%2Fh%2F8lhcU%2FnQA59%2FZOE8IPyTQfgoNWSVHowYfeeUnpvFCpNyFyLGDxDeRFY9rFQ4IGDSjjDxmP9qfrLKgAFQbDuNpyosnuXMgc8Fx7Zpq0uuiUZqa%2Fmi7vxNQD2y8pdyOGRiv7egrx%2BLtLtDkZ8CArLNDWqHqDD0Exu0SW3rSzEg%2FHiX8oD9JjxSRYjNkZo5CIqjOLj2%2BxUsmE9G85i6wNpefyYY8yBKDfysFy86SDLRQ1a0kLPH1G2vBdspg3CkJmaDQQcYwoBpRNkHoolILOAjGJi6n0ktlAGkLiH%2BnAwHnNLnVva%2BKRjHp5csryRLOEa1fnG6zCG6ojKBjqkAXgbNzjpaDMqYAd9SWI2V8ShcYV%2FQ0cPASgXoW95bxvJKx8V%2Bmc%2BTBFchkUpRZCi0QVq%2FltYRXpFcZAdZKRsYDKmVhSm5o3D%2Bgc8ZDjbdxb2aqXwBfU%2F0dDFdFp%2B0kE8l2vCrPtMSauvMBFeVj5nxEiMxv59wW%2BFs4ihxhzRorbBhAY1v054LVo%2BTJx1qEpOZsPk10a0evltwvx5NqozWzN5DMjy&X-Amz-Signature=2f5de67a96690f59b2db0bd79bbdcc0e113e14bd598cbddc1322e414314bc6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHG2EMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQZdvAMyPT5bm2bQfonNhIu%2BR%2FwZTHw108EEM6gGXVgIhAKqvrxgfQBdYy2P0%2B8ETOlGm%2BMUM%2BqmYrL34n%2B7roAV4Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwNqlReZUdxkMmPdfwq3ANpse9%2FXHd0raorkd4CaQmr7ScbOKSBBQZrNjCKXADAjC3BEy5b3lh3O3kQAQwQR6QXJp2m%2B%2Bj4o7Q2fMTZOfXS17tRktgcNRYFzVOak0orOSmQ%2F859zDDYaRvlqQKc5N6YW2aNz3bd2ERum%2B4sLMevuJkGGyc5d0x%2B1j6xTIyrZ7QLnxyH831y84pNt4cqkvIN%2FKIXTKPo7CvIe7fxs3IJDM5%2BnJYO16YYiRCnbrobPf77VT6X3SJCWTYNB8Vm1nEHV7hWljO2vF8uUaUSz5w9iq1r3ir6ZDHH%2BmHZJhbk1W2j1DbE3V%2Fh%2F8lhcU%2FnQA59%2FZOE8IPyTQfgoNWSVHowYfeeUnpvFCpNyFyLGDxDeRFY9rFQ4IGDSjjDxmP9qfrLKgAFQbDuNpyosnuXMgc8Fx7Zpq0uuiUZqa%2Fmi7vxNQD2y8pdyOGRiv7egrx%2BLtLtDkZ8CArLNDWqHqDD0Exu0SW3rSzEg%2FHiX8oD9JjxSRYjNkZo5CIqjOLj2%2BxUsmE9G85i6wNpefyYY8yBKDfysFy86SDLRQ1a0kLPH1G2vBdspg3CkJmaDQQcYwoBpRNkHoolILOAjGJi6n0ktlAGkLiH%2BnAwHnNLnVva%2BKRjHp5csryRLOEa1fnG6zCG6ojKBjqkAXgbNzjpaDMqYAd9SWI2V8ShcYV%2FQ0cPASgXoW95bxvJKx8V%2Bmc%2BTBFchkUpRZCi0QVq%2FltYRXpFcZAdZKRsYDKmVhSm5o3D%2Bgc8ZDjbdxb2aqXwBfU%2F0dDFdFp%2B0kE8l2vCrPtMSauvMBFeVj5nxEiMxv59wW%2BFs4ihxhzRorbBhAY1v054LVo%2BTJx1qEpOZsPk10a0evltwvx5NqozWzN5DMjy&X-Amz-Signature=4a10d812634a2a8499d9f6215f7b204d36efd11f1a759c488393972497922a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
