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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKQTPXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeaVsA%2Biux4IxctIWkrrVWNLwvsKHeAi1vYKjty%2FklpAiB6BnLPXa0Wcob%2FEbr7c8t8Ou5n3ODA9HUJNOa29IuZQCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSd19KZ5bnOSO4f%2FKtwDkqw8u%2BQ6HGvH83VSP1vwP18Iyz6d45b4%2FV57JUCf%2Fq3YYwzqbu4Sqwdb%2BBezMXNxm7n6fTz7w6O5HndZgtRedMvNpkMTB35KY98%2BsC3A%2Bw5f8l5EGhYEGqvrMHVjMfnL%2Be%2F0Z1GKGD%2FKw%2BxoMx40UnJFCEhzRXZ9PmrsG%2BHbsz9OzSCkXcnbmCsRwODvXQW0leTOfL5EWxrWXRxbuL%2BAHPoNagPHagQs%2BDroyany%2BTpeO6rsyh%2F6SyaDOG9%2FpGaEudKfy1jA%2FFhzQ7aQJyEaDF1jTS6yQb7%2B91rWvPOF3Kbr8DMSYeYnjWxdzAx5vNXRMoyQhvvUC3t3UjDipE77yMvhD2a2dEqlEBrEVGk5UyEWJFOYtCkpQCvxxuovDebOeyGwkUcnF1C%2BM26hnpULbCNsOX3xAF7MMZmlXUlZeinifvc7MGugREzcanqCoEUBen8q82SHILiYrhJ2hCPTdn7XJRcN8AErJ2WSUWIzlTz%2FptAxEK%2F%2Bi7gNkJey2H7RKR%2BveEqGlaA2rR6o6dh7ZMi%2FDZlPKuXPTyaNuxFYRToEcbPhrBShLJNytlVxxInG0TGjU7XwDuLZSbwK%2FC%2By2j24zZD7d3uD0tFVetQDxQkFBJcVlLbl%2B96vNNowyq2MygY6pgH0OZSFsKFMju9z1reHRm9rYjBfC7slh5RMwBuz74Qj4H9yQ589s1U8mnIOc9PL162osv1LIcPiDGT08noBC7%2B1gxrrHWnDYZTY1AuZFfuo7uo54D67Y%2Fb%2B%2FxPiwq0Rdyeor2kd4GzOwJzNA8RbZc8N1Z2reDIAC28PzRro8IIEBbpp6XNHBbEVasHX82%2FQq2qKkktMAhVKaLW6N8T%2BgXLH4qYSuJne&X-Amz-Signature=a2ce90132faa2be94b769caf78a5ebd095b1e391a2b493575c238031290aaa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKQTPXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeaVsA%2Biux4IxctIWkrrVWNLwvsKHeAi1vYKjty%2FklpAiB6BnLPXa0Wcob%2FEbr7c8t8Ou5n3ODA9HUJNOa29IuZQCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSd19KZ5bnOSO4f%2FKtwDkqw8u%2BQ6HGvH83VSP1vwP18Iyz6d45b4%2FV57JUCf%2Fq3YYwzqbu4Sqwdb%2BBezMXNxm7n6fTz7w6O5HndZgtRedMvNpkMTB35KY98%2BsC3A%2Bw5f8l5EGhYEGqvrMHVjMfnL%2Be%2F0Z1GKGD%2FKw%2BxoMx40UnJFCEhzRXZ9PmrsG%2BHbsz9OzSCkXcnbmCsRwODvXQW0leTOfL5EWxrWXRxbuL%2BAHPoNagPHagQs%2BDroyany%2BTpeO6rsyh%2F6SyaDOG9%2FpGaEudKfy1jA%2FFhzQ7aQJyEaDF1jTS6yQb7%2B91rWvPOF3Kbr8DMSYeYnjWxdzAx5vNXRMoyQhvvUC3t3UjDipE77yMvhD2a2dEqlEBrEVGk5UyEWJFOYtCkpQCvxxuovDebOeyGwkUcnF1C%2BM26hnpULbCNsOX3xAF7MMZmlXUlZeinifvc7MGugREzcanqCoEUBen8q82SHILiYrhJ2hCPTdn7XJRcN8AErJ2WSUWIzlTz%2FptAxEK%2F%2Bi7gNkJey2H7RKR%2BveEqGlaA2rR6o6dh7ZMi%2FDZlPKuXPTyaNuxFYRToEcbPhrBShLJNytlVxxInG0TGjU7XwDuLZSbwK%2FC%2By2j24zZD7d3uD0tFVetQDxQkFBJcVlLbl%2B96vNNowyq2MygY6pgH0OZSFsKFMju9z1reHRm9rYjBfC7slh5RMwBuz74Qj4H9yQ589s1U8mnIOc9PL162osv1LIcPiDGT08noBC7%2B1gxrrHWnDYZTY1AuZFfuo7uo54D67Y%2Fb%2B%2FxPiwq0Rdyeor2kd4GzOwJzNA8RbZc8N1Z2reDIAC28PzRro8IIEBbpp6XNHBbEVasHX82%2FQq2qKkktMAhVKaLW6N8T%2BgXLH4qYSuJne&X-Amz-Signature=178204b2f0461510143a9de29ee9d96717bd46f0d15b096eb61fdfb83e1726c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
