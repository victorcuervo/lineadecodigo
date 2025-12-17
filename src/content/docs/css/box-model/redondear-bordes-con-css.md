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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFZQAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGdGHQkq2svHuV%2FO2L12NqP7Lq5B3k7ClU2v0gL%2BAtuQIhAORp0oAM4%2F1ViOo86bjUa5w8DOJlNP2%2BaOyDrr2CGHpsKv8DCHkQABoMNjM3NDIzMTgzODA1Igw9C%2ByRghMZEeniE08q3AObMcUEgBF5AO%2BzAUZiaRvPQzjN2PS%2BvPZMF5rm%2FmoJ99i4%2B7p7ygh3V2nmH1MUa9zR2k6CZb3hmQ1t4Fc3X%2FEbWmxDgQMyQv6tndnEYfEbJPiW8wMcPOcoS4P%2FHUknd%2Bqcqm8xjeXoSe9Vzx5XROA1sqx%2FJNja71Uxck8kUMNo7%2FY%2BYaWpZiaB9Pchw0IwIBtxd%2BVsGCclEfavPQtLHMzc%2FaAd4GPPC00MhxnKMf5RIgpDv5XLZ9gYT%2FlKxql0Sfj71XKFRmTTN8M%2FGrfG%2BVNAyweiEuCeeUFRynhlNxIvGbt%2BFFXIrpNxOZIkf99LuIpkh8mxN92rNsPhCyC6ev2m7isMnlKiOWjzzDKNLW3pL%2Fn6fNmVh0zGFsZN%2BTJvpose4zAIbTXjnm2d2%2Bwf05FBfIB6FdfxkuVIDbqyPohZd1h32qZKvTGWFlFCEgwGuX85She771vi3P96sUvILwitg5GV1yEnqVda6QySqdRc4FYPP5sbrrqTpJ8bXEpCog4RUcgwjIwgFNp1JskJ3NgDo0ou3pPK4tkQOJ3BbFNIoI1P4phv8Tw%2B4c8qcLUUrLbpBKZIwa7Yy41NaGRm79dDKzwa2gnBfctIE%2Bmh1%2BLX9Frko%2FRV%2BI2v%2BPmFTzCY0onKBjqkAVjx8sotVmdauJM9ctCm3enO3VGrKHFrpUQHF09iII%2Bzsvb2Bn%2FqFjtpdR%2FP4RrwgmSBmYV6atmz%2FFM4KaPtbnsf7Uo7nTPDQwJLAxEXmIvTLcdUoWSc9ZBT%2BaMeIWcQiV7daH6CfdTDlm8zTyazAvZcrGWVjwYivmWO7CJcZ0lLXPOeKOEtRossIT4Jv%2FWI%2BrX8t3WBwmLu1zJQgFvMZyVoZeb%2B&X-Amz-Signature=5d1423e19f4a11292457158a42ea509513c269e17284d20ab98c7bcaa54e5f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFZQAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGdGHQkq2svHuV%2FO2L12NqP7Lq5B3k7ClU2v0gL%2BAtuQIhAORp0oAM4%2F1ViOo86bjUa5w8DOJlNP2%2BaOyDrr2CGHpsKv8DCHkQABoMNjM3NDIzMTgzODA1Igw9C%2ByRghMZEeniE08q3AObMcUEgBF5AO%2BzAUZiaRvPQzjN2PS%2BvPZMF5rm%2FmoJ99i4%2B7p7ygh3V2nmH1MUa9zR2k6CZb3hmQ1t4Fc3X%2FEbWmxDgQMyQv6tndnEYfEbJPiW8wMcPOcoS4P%2FHUknd%2Bqcqm8xjeXoSe9Vzx5XROA1sqx%2FJNja71Uxck8kUMNo7%2FY%2BYaWpZiaB9Pchw0IwIBtxd%2BVsGCclEfavPQtLHMzc%2FaAd4GPPC00MhxnKMf5RIgpDv5XLZ9gYT%2FlKxql0Sfj71XKFRmTTN8M%2FGrfG%2BVNAyweiEuCeeUFRynhlNxIvGbt%2BFFXIrpNxOZIkf99LuIpkh8mxN92rNsPhCyC6ev2m7isMnlKiOWjzzDKNLW3pL%2Fn6fNmVh0zGFsZN%2BTJvpose4zAIbTXjnm2d2%2Bwf05FBfIB6FdfxkuVIDbqyPohZd1h32qZKvTGWFlFCEgwGuX85She771vi3P96sUvILwitg5GV1yEnqVda6QySqdRc4FYPP5sbrrqTpJ8bXEpCog4RUcgwjIwgFNp1JskJ3NgDo0ou3pPK4tkQOJ3BbFNIoI1P4phv8Tw%2B4c8qcLUUrLbpBKZIwa7Yy41NaGRm79dDKzwa2gnBfctIE%2Bmh1%2BLX9Frko%2FRV%2BI2v%2BPmFTzCY0onKBjqkAVjx8sotVmdauJM9ctCm3enO3VGrKHFrpUQHF09iII%2Bzsvb2Bn%2FqFjtpdR%2FP4RrwgmSBmYV6atmz%2FFM4KaPtbnsf7Uo7nTPDQwJLAxEXmIvTLcdUoWSc9ZBT%2BaMeIWcQiV7daH6CfdTDlm8zTyazAvZcrGWVjwYivmWO7CJcZ0lLXPOeKOEtRossIT4Jv%2FWI%2BrX8t3WBwmLu1zJQgFvMZyVoZeb%2B&X-Amz-Signature=c78587a0ea97455bc7f794b3aa40a61d8f728c1e9f82581e274d94a94198bc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
