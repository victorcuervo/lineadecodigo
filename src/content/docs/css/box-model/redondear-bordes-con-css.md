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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFNAIOZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUkbIfn2%2FEiifBqO7tbbQ%2FoDe3BrpBP1S3%2FFwqiBlepAiEAsUJb8zi11YhFIjXlKsAI96YSxtL6mZ%2FL%2Bpk6ppegim8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa6dd3ACpdxyeyQhircAxcQGMf7IRE6bNQ69uiGCKS%2BfsRgXwJj74m%2FOyqEDXvpdtx%2FfVEihhixFnCc376XCuvqb6nqgK8PP8XdEHMj1s%2BEkqRoZNP0fQr%2BmSi%2FBJ7fCyySN6u7%2B69Fq8h%2BlhFY8tvpgWHi3UPSSWX3oDiXe0oGRS94ahnfeBHsVSAShVnOPDQm0bJ%2Bu6FRuF9ESwCyJXHVm7%2Ba%2B%2FgqgBr6bl0xb5uKAnUcQqnD9zjXfMbVe6cgmpLJrCFtTOqdYB1Rf%2FnAqj71rt%2BK3w25MdDjMkvJOyAYdMlMcXv4%2BkVDu3hBQsGgp1XB9ziVB5zcbP11OpCBAIoTZ%2Fh7YKjttppMYKHdLcC3iQFUbJfcppBHVCyBHGMVpiU9Qm%2B9eZpAdQjRgmuy7Dc7T5R9%2BkdYjP46Dx%2F4oQ8oIYqdBNEjh4pilTEWKcUsKwaKV%2F2QcSHX%2FA85PGUuGT2Sl%2F9eW8CMrh8e8tsu6lC49b5VXHVgB9mqEQwegquA%2FK016lyjqSrvx9qvhejdxI7ZBtCRszbGDrz4KXH4Dgwv1bjvAoX55xscMdhZngiCuyzKNsbyZ698qtLOZ9hWS3OB1K5ZOJZsPwwPgF2%2FGfD%2By%2FX9ZEHhND8otfIjcsQlmC%2FrKKsI9ZD8vEvCMK%2Bfi8oGOqUBv1XICC%2BoZvL6Y%2F3EkKj2xXGymAouTjruWsteYlP1V%2BTTIrXjqTUEXyGZd18HObjfjQeP63tSQTVhn%2FkMzixteYbtDtKWn63N4v2xLGMQhGEnUyuX95hjJYh8%2BDBjw2mjwXyrkyi3%2F8DuVXc2ZWs29BcynRfI2yHlwY4ESMh3jtH%2FKKGj4xctwV3cIP4xRHlWT%2B%2B4FQezVA4BbcLlD4kKZXjvjlBs&X-Amz-Signature=08a32f61f86bb00742b34280e734ae03a9d0aa1dd49c3fba0c92a7d761ba9123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFNAIOZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUkbIfn2%2FEiifBqO7tbbQ%2FoDe3BrpBP1S3%2FFwqiBlepAiEAsUJb8zi11YhFIjXlKsAI96YSxtL6mZ%2FL%2Bpk6ppegim8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa6dd3ACpdxyeyQhircAxcQGMf7IRE6bNQ69uiGCKS%2BfsRgXwJj74m%2FOyqEDXvpdtx%2FfVEihhixFnCc376XCuvqb6nqgK8PP8XdEHMj1s%2BEkqRoZNP0fQr%2BmSi%2FBJ7fCyySN6u7%2B69Fq8h%2BlhFY8tvpgWHi3UPSSWX3oDiXe0oGRS94ahnfeBHsVSAShVnOPDQm0bJ%2Bu6FRuF9ESwCyJXHVm7%2Ba%2B%2FgqgBr6bl0xb5uKAnUcQqnD9zjXfMbVe6cgmpLJrCFtTOqdYB1Rf%2FnAqj71rt%2BK3w25MdDjMkvJOyAYdMlMcXv4%2BkVDu3hBQsGgp1XB9ziVB5zcbP11OpCBAIoTZ%2Fh7YKjttppMYKHdLcC3iQFUbJfcppBHVCyBHGMVpiU9Qm%2B9eZpAdQjRgmuy7Dc7T5R9%2BkdYjP46Dx%2F4oQ8oIYqdBNEjh4pilTEWKcUsKwaKV%2F2QcSHX%2FA85PGUuGT2Sl%2F9eW8CMrh8e8tsu6lC49b5VXHVgB9mqEQwegquA%2FK016lyjqSrvx9qvhejdxI7ZBtCRszbGDrz4KXH4Dgwv1bjvAoX55xscMdhZngiCuyzKNsbyZ698qtLOZ9hWS3OB1K5ZOJZsPwwPgF2%2FGfD%2By%2FX9ZEHhND8otfIjcsQlmC%2FrKKsI9ZD8vEvCMK%2Bfi8oGOqUBv1XICC%2BoZvL6Y%2F3EkKj2xXGymAouTjruWsteYlP1V%2BTTIrXjqTUEXyGZd18HObjfjQeP63tSQTVhn%2FkMzixteYbtDtKWn63N4v2xLGMQhGEnUyuX95hjJYh8%2BDBjw2mjwXyrkyi3%2F8DuVXc2ZWs29BcynRfI2yHlwY4ESMh3jtH%2FKKGj4xctwV3cIP4xRHlWT%2B%2B4FQezVA4BbcLlD4kKZXjvjlBs&X-Amz-Signature=8efac1c3b6b905cb3ef9958f721023992ea5cd2a45da40721182a945ca5b380d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
