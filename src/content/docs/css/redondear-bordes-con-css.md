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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBEHH45%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErlihjZcxSo0abriqHYHkztXuJidfFFLDjrI%2BvYGluqAiAcCfOVq12Yo6kpLHqTpxkRF1%2B9YnT1ARaL9eV6%2BE%2BVCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjK%2FWPGD%2FWxeYpRsKtwDcM72a2kI%2F9MKcThe%2BH8hbmuKNqHzrWMq8qdVMG2iwYij2piMH6hlYMRqBKB18JRcEk1uwfFXS8yIQFDmT30K02Np5pYJU0F8p4Z8ho0Pi4LQ6IUabpheWgdDr2HjZw4gCzzfdrdp7NhELz%2BZ%2BdONpvr4KsJnbMuxTQG3ecf7%2Bjie%2F9YkAl8A%2FBt%2BNL9xEAx%2BAd6U3Cij6SYrtdKEMvcBXA4xWY8dgAzhbxu%2FSDEuO1XJ31ADW%2BpJwf73BgmXDYzmpzgP39RuXFVZ8XTBTr6Bp9KYpE6SxCbMWgIPR45Bnvz1UhlEBaaybEyQCVAKbiUmVSngLjTOAt0JKigbQ6J6DNtoCOeJPRXkwfxPR9m57oUurVWZUCoZsmzJxPRiJwmsBLsD7wUjNTt8RmIgWCaYM4PuY%2FOprFS4U%2FyNzgykPAmMk660cYGyWkw6y8%2FiKaQLP0O769R%2B%2FeXbyG9Nep8IblH4rwM8q76ksmvhJPhBABksSmjMJZWiO%2BONUsVX3c%2B6jiCQyT12%2FvZkt1PAGzInyNA3XiBgLN%2BQlUEuwnC1gbXZJWct%2FekZhgAErNVpGnBxox0%2BvAyWhugULuI7zM%2BBygJaq%2BJhvEcf9UkZUk381eVIHdtFtcM%2Bd5ikFzAw9u7YyQY6pgHosN4SMtDT7GH2Frm9hqOxLIiGT5cOT%2BE5wywwuXHlUjARjHyKOxEc7zub4DhrWHFqJGzwCJ%2Beu8KS8BRyK%2FL9WuDMUBUahZUDFj0YRD9uRynztMxZfISvKauiyvO8UN66MRic6nbGGGByt2H%2BNiOjLG1PAbkVc5ocz1g3uLDbo7vbwVVPo6Hce0vaGC5r33VBbSut%2FS50cWimHhMIXqMtEHRcmR6B&X-Amz-Signature=b271f209e3f8e13cd13ee9c42038e4ba01562fd5c61020bf00d5b5c00b3d9e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBEHH45%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErlihjZcxSo0abriqHYHkztXuJidfFFLDjrI%2BvYGluqAiAcCfOVq12Yo6kpLHqTpxkRF1%2B9YnT1ARaL9eV6%2BE%2BVCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjK%2FWPGD%2FWxeYpRsKtwDcM72a2kI%2F9MKcThe%2BH8hbmuKNqHzrWMq8qdVMG2iwYij2piMH6hlYMRqBKB18JRcEk1uwfFXS8yIQFDmT30K02Np5pYJU0F8p4Z8ho0Pi4LQ6IUabpheWgdDr2HjZw4gCzzfdrdp7NhELz%2BZ%2BdONpvr4KsJnbMuxTQG3ecf7%2Bjie%2F9YkAl8A%2FBt%2BNL9xEAx%2BAd6U3Cij6SYrtdKEMvcBXA4xWY8dgAzhbxu%2FSDEuO1XJ31ADW%2BpJwf73BgmXDYzmpzgP39RuXFVZ8XTBTr6Bp9KYpE6SxCbMWgIPR45Bnvz1UhlEBaaybEyQCVAKbiUmVSngLjTOAt0JKigbQ6J6DNtoCOeJPRXkwfxPR9m57oUurVWZUCoZsmzJxPRiJwmsBLsD7wUjNTt8RmIgWCaYM4PuY%2FOprFS4U%2FyNzgykPAmMk660cYGyWkw6y8%2FiKaQLP0O769R%2B%2FeXbyG9Nep8IblH4rwM8q76ksmvhJPhBABksSmjMJZWiO%2BONUsVX3c%2B6jiCQyT12%2FvZkt1PAGzInyNA3XiBgLN%2BQlUEuwnC1gbXZJWct%2FekZhgAErNVpGnBxox0%2BvAyWhugULuI7zM%2BBygJaq%2BJhvEcf9UkZUk381eVIHdtFtcM%2Bd5ikFzAw9u7YyQY6pgHosN4SMtDT7GH2Frm9hqOxLIiGT5cOT%2BE5wywwuXHlUjARjHyKOxEc7zub4DhrWHFqJGzwCJ%2Beu8KS8BRyK%2FL9WuDMUBUahZUDFj0YRD9uRynztMxZfISvKauiyvO8UN66MRic6nbGGGByt2H%2BNiOjLG1PAbkVc5ocz1g3uLDbo7vbwVVPo6Hce0vaGC5r33VBbSut%2FS50cWimHhMIXqMtEHRcmR6B&X-Amz-Signature=5257ea3138bcb3efb3240879d10a7c0e5a30b77f0378e46d4cb3d2607eca940c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
